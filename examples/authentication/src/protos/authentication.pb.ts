// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: src/protos/authentication.proto

import type { ByteSource, ClientConfiguration } from "twirpscript";
import {
  BinaryReader,
  BinaryWriter,
  JSONrequest,
  PBrequest,
} from "twirpscript";
// This is the minimum version supported by the current runtime.
// If this line fails typechecking, breaking changes have been introduced and this
// file needs to be regenerated by running `yarn twirpscript`.
export { MIN_SUPPORTED_VERSION_0_0_54 } from "twirpscript";

//========================================//
//     Authentication Protobuf Client     //
//========================================//

/**
 * Login in a user
 */
export async function Login(
  credentials: Credentials,
  config?: ClientConfiguration
): Promise<CurrentUser> {
  const response = await PBrequest(
    "/Authentication/Login",
    Credentials.encode(credentials),
    config
  );
  return CurrentUser.decode(response);
}

//========================================//
//       Authentication JSON Client       //
//========================================//

/**
 * Login in a user
 */
export async function LoginJSON(
  credentials: Credentials,
  config?: ClientConfiguration
): Promise<CurrentUser> {
  const response = await JSONrequest(
    "/Authentication/Login",
    Credentials.encodeJSON(credentials),
    config
  );
  return CurrentUser.decodeJSON(response);
}

//========================================//
//             Authentication             //
//========================================//

export interface Authentication<Context = unknown> {
  /**
   * Login in a user
   */
  Login: (
    credentials: Credentials,
    context: Context
  ) => Promise<CurrentUser> | CurrentUser;
}

export function createAuthentication<Context>(
  service: Authentication<Context>
) {
  return {
    name: "Authentication",
    methods: {
      Login: {
        name: "Login",
        handler: service.Login,
        input: Credentials,
        output: CurrentUser,
      },
    },
  } as const;
}

//========================================//
//                 Types                  //
//========================================//

export interface CurrentUser {
  username: string;
  token: string;
}

export interface Credentials {
  username: string;
  password: string;
}

//========================================//
//        Protobuf Encode / Decode        //
//========================================//

export const CurrentUser = {
  /**
   * Serializes CurrentUser to protobuf.
   */
  encode: function (msg: Partial<CurrentUser>): Uint8Array {
    return CurrentUser._writeMessage(msg, new BinaryWriter()).getResultBuffer();
  },

  /**
   * Deserializes CurrentUser from protobuf.
   */
  decode: function (bytes: ByteSource): CurrentUser {
    return CurrentUser._readMessage(
      CurrentUser.initialize(),
      new BinaryReader(bytes)
    );
  },

  /**
   * Serializes CurrentUser to JSON.
   */
  encodeJSON: function (msg: Partial<CurrentUser>): string {
    return JSON.stringify(CurrentUser._writeMessageJSON(msg));
  },

  /**
   * Deserializes CurrentUser from JSON.
   */
  decodeJSON: function (json: string): CurrentUser {
    return CurrentUser._readMessageJSON(
      CurrentUser.initialize(),
      JSON.parse(json)
    );
  },

  /**
   * Initializes CurrentUser with all fields set to their default value.
   */
  initialize: function (): CurrentUser {
    return {
      username: "",
      token: "",
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: Partial<CurrentUser>,
    writer: BinaryWriter
  ): BinaryWriter {
    if (msg.username) {
      writer.writeString(1, msg.username);
    }
    if (msg.token) {
      writer.writeString(2, msg.token);
    }
    return writer;
  },

  /**
   * @private
   */
  _writeMessageJSON: function (
    msg: Partial<CurrentUser>
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.username) {
      json.username = msg.username;
    }
    if (msg.token) {
      json.token = msg.token;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: CurrentUser, reader: BinaryReader): CurrentUser {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.username = reader.readString();
          break;
        }
        case 2: {
          msg.token = reader.readString();
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },

  /**
   * @private
   */
  _readMessageJSON: function (msg: CurrentUser, json: any): CurrentUser {
    const _username = json.username;
    if (_username) {
      msg.username = _username;
    }
    const _token = json.token;
    if (_token) {
      msg.token = _token;
    }
    return msg;
  },
};

export const Credentials = {
  /**
   * Serializes Credentials to protobuf.
   */
  encode: function (msg: Partial<Credentials>): Uint8Array {
    return Credentials._writeMessage(msg, new BinaryWriter()).getResultBuffer();
  },

  /**
   * Deserializes Credentials from protobuf.
   */
  decode: function (bytes: ByteSource): Credentials {
    return Credentials._readMessage(
      Credentials.initialize(),
      new BinaryReader(bytes)
    );
  },

  /**
   * Serializes Credentials to JSON.
   */
  encodeJSON: function (msg: Partial<Credentials>): string {
    return JSON.stringify(Credentials._writeMessageJSON(msg));
  },

  /**
   * Deserializes Credentials from JSON.
   */
  decodeJSON: function (json: string): Credentials {
    return Credentials._readMessageJSON(
      Credentials.initialize(),
      JSON.parse(json)
    );
  },

  /**
   * Initializes Credentials with all fields set to their default value.
   */
  initialize: function (): Credentials {
    return {
      username: "",
      password: "",
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: Partial<Credentials>,
    writer: BinaryWriter
  ): BinaryWriter {
    if (msg.username) {
      writer.writeString(1, msg.username);
    }
    if (msg.password) {
      writer.writeString(2, msg.password);
    }
    return writer;
  },

  /**
   * @private
   */
  _writeMessageJSON: function (
    msg: Partial<Credentials>
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.username) {
      json.username = msg.username;
    }
    if (msg.password) {
      json.password = msg.password;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: Credentials, reader: BinaryReader): Credentials {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.username = reader.readString();
          break;
        }
        case 2: {
          msg.password = reader.readString();
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },

  /**
   * @private
   */
  _readMessageJSON: function (msg: Credentials, json: any): Credentials {
    const _username = json.username;
    if (_username) {
      msg.username = _username;
    }
    const _password = json.password;
    if (_password) {
      msg.password = _password;
    }
    return msg;
  },
};
