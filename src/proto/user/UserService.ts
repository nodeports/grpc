// Original file: proto/service.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  CreateUserRequest as _user_CreateUserRequest,
  CreateUserRequest__Output as _user_CreateUserRequest__Output,
} from "./CreateUserRequest";
import type {
  CreateUserResponse as _user_CreateUserResponse,
  CreateUserResponse__Output as _user_CreateUserResponse__Output,
} from "./CreateUserResponse";
import type {
  GetUserRequest as _user_GetUserRequest,
  GetUserRequest__Output as _user_GetUserRequest__Output,
} from "./GetUserRequest";
import type {
  GetUserResponse as _user_GetUserResponse,
  GetUserResponse__Output as _user_GetUserResponse__Output,
} from "./GetUserResponse";

export interface UserServiceClient extends grpc.Client {
  CreateUser(
    argument: _user_CreateUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_user_CreateUserResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateUser(
    argument: _user_CreateUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_user_CreateUserResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateUser(
    argument: _user_CreateUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_user_CreateUserResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateUser(
    argument: _user_CreateUserRequest,
    callback: grpc.requestCallback<_user_CreateUserResponse__Output>
  ): grpc.ClientUnaryCall;
  createUser(
    argument: _user_CreateUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_user_CreateUserResponse__Output>
  ): grpc.ClientUnaryCall;
  createUser(
    argument: _user_CreateUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_user_CreateUserResponse__Output>
  ): grpc.ClientUnaryCall;
  createUser(
    argument: _user_CreateUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_user_CreateUserResponse__Output>
  ): grpc.ClientUnaryCall;
  createUser(
    argument: _user_CreateUserRequest,
    callback: grpc.requestCallback<_user_CreateUserResponse__Output>
  ): grpc.ClientUnaryCall;

  GetUser(
    argument: _user_GetUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_user_GetUserResponse__Output>
  ): grpc.ClientUnaryCall;
  GetUser(
    argument: _user_GetUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_user_GetUserResponse__Output>
  ): grpc.ClientUnaryCall;
  GetUser(
    argument: _user_GetUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_user_GetUserResponse__Output>
  ): grpc.ClientUnaryCall;
  GetUser(
    argument: _user_GetUserRequest,
    callback: grpc.requestCallback<_user_GetUserResponse__Output>
  ): grpc.ClientUnaryCall;
  getUser(
    argument: _user_GetUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_user_GetUserResponse__Output>
  ): grpc.ClientUnaryCall;
  getUser(
    argument: _user_GetUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_user_GetUserResponse__Output>
  ): grpc.ClientUnaryCall;
  getUser(
    argument: _user_GetUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_user_GetUserResponse__Output>
  ): grpc.ClientUnaryCall;
  getUser(
    argument: _user_GetUserRequest,
    callback: grpc.requestCallback<_user_GetUserResponse__Output>
  ): grpc.ClientUnaryCall;
}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateUser: grpc.handleUnaryCall<
    _user_CreateUserRequest__Output,
    _user_CreateUserResponse
  >;

  GetUser: grpc.handleUnaryCall<
    _user_GetUserRequest__Output,
    _user_GetUserResponse
  >;
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  CreateUser: MethodDefinition<
    _user_CreateUserRequest,
    _user_CreateUserResponse,
    _user_CreateUserRequest__Output,
    _user_CreateUserResponse__Output
  >;
  GetUser: MethodDefinition<
    _user_GetUserRequest,
    _user_GetUserResponse,
    _user_GetUserRequest__Output,
    _user_GetUserResponse__Output
  >;
}
