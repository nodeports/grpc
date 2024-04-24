import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
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

const client = new proto.user.UserService(
  "localhost:50051",
  grpc.credentials.createInsecure()
);

client.CreateUser(
  { name: "John Doe", email: "john.doe@example.com" },
  (err, response) => {
    if (err) {
      console.error(err);
    } else {
      console.log("User created with ID:", response.id);
    }
  }
);

client.GetUser({ id: "some-user-id" }, (err, response) => {
  if (err) {
    console.error(err);
  } else {
    console.log("User details:", response);
  }
});
