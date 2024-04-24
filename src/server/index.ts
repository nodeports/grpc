import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import mongoose from "mongoose";
import User from "./models/user";
import { ProtoGrpcType } from "../proto/service";

const PROTO_PATH = __dirname + "/../../proto/service.proto";
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const proto = grpc.loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType;

const server = new grpc.Server();

server.addService(proto.user.UserService.service, {
  CreateUser: async (call, callback) => {
    const { name, email } = call.request;
    const user = new User({ name, email });
    await user.save();
    callback(null, { id: user._id.toString() });
  },
  GetUser: async (call, callback) => {
    const user = await User.findById(call.request.id);
    if (user) {
      callback(null, { name: user.name, email: user.email });
    } else {
      callback({ code: grpc.status.NOT_FOUND, message: "User not found" });
    }
  },
});

const PORT = "50051";
server.bindAsync(
  `0.0.0.0:${PORT}`,
  grpc.ServerCredentials.createInsecure(),
  () => {
    server.start();
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  }
);

mongoose
  .connect("mongodb://localhost:27017/grpcdb", {})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));
