// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: src/protos/haberdasher.proto

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
export { MIN_SUPPORTED_VERSION_0_0_34 } from "twirpscript";

//========================================//
//      Haberdasher Protobuf Client       //
//========================================//

/**
 * MakeHat produces a hat of mysterious, randomly-selected color!
 */
export async function MakeHat(
  size: Size,
  config?: ClientConfiguration
): Promise<Hat> {
  const response = await PBrequest(
    "/Haberdasher/MakeHat",
    Size.encode(size),
    config
  );
  return Hat.decode(response);
}

//========================================//
//        Haberdasher JSON Client         //
//========================================//

/**
 * MakeHat produces a hat of mysterious, randomly-selected color!
 */
export async function MakeHatJSON(
  size: Size,
  config?: ClientConfiguration
): Promise<Hat> {
  const response = await JSONrequest<Hat>("/Haberdasher/MakeHat", size, config);
  return response;
}

//========================================//
//          Haberdasher Service           //
//========================================//

/**
 * Haberdasher service makes hats for clients.
 */
export interface HaberdasherService<Context = unknown> {
  /**
   * MakeHat produces a hat of mysterious, randomly-selected color!
   */
  MakeHat: (size: Size, context: Context) => Promise<Hat> | Hat;
}

export function createHaberdasherHandler<Context>(
  service: HaberdasherService<Context>
) {
  return {
    name: "Haberdasher",
    methods: {
      MakeHat: {
        name: "MakeHat",
        handler: service.MakeHat,
        input: Size,
        output: Hat,
      },
    },
  } as const;
}

//========================================//
//                 Types                  //
//========================================//

/**
 * Size of a Hat, in inches.
 */
export interface Size {
  /**
   * must be > 0
   */
  inches: number;
}

/**
 * A Hat is a piece of headwear made by a Haberdasher.
 */
export interface Hat {
  inches: number;
  /**
   * anything but "invisible"
   */
  color: string;
  /**
   * i.e. "bowler"
   */
  name: string;
}

//========================================//
//        Protobuf Encode / Decode        //
//========================================//

export const Size = {
  /**
   * Serializes a Size to protobuf.
   */
  encode: function (size: Partial<Size>): Uint8Array {
    return Size._writeMessage(size, new BinaryWriter()).getResultBuffer();
  },

  /**
   * Deserializes a Size from protobuf.
   */
  decode: function (bytes: ByteSource): Size {
    return Size._readMessage(Size.initialize(), new BinaryReader(bytes));
  },

  /**
   * Initializes a Size with all fields set to their default value.
   */
  initialize: function (): Size {
    return {
      inches: 0,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: Partial<Size>,
    writer: BinaryWriter
  ): BinaryWriter {
    if (msg.inches) {
      writer.writeInt32(1, msg.inches);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (msg: Size, reader: BinaryReader): Size {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.inches = reader.readInt32();
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
};

export const Hat = {
  /**
   * Serializes a Hat to protobuf.
   */
  encode: function (hat: Partial<Hat>): Uint8Array {
    return Hat._writeMessage(hat, new BinaryWriter()).getResultBuffer();
  },

  /**
   * Deserializes a Hat from protobuf.
   */
  decode: function (bytes: ByteSource): Hat {
    return Hat._readMessage(Hat.initialize(), new BinaryReader(bytes));
  },

  /**
   * Initializes a Hat with all fields set to their default value.
   */
  initialize: function (): Hat {
    return {
      inches: 0,
      color: "",
      name: "",
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: Partial<Hat>,
    writer: BinaryWriter
  ): BinaryWriter {
    if (msg.inches) {
      writer.writeInt32(1, msg.inches);
    }
    if (msg.color) {
      writer.writeString(2, msg.color);
    }
    if (msg.name) {
      writer.writeString(3, msg.name);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (msg: Hat, reader: BinaryReader): Hat {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.inches = reader.readInt32();
          break;
        }
        case 2: {
          msg.color = reader.readString();
          break;
        }
        case 3: {
          msg.name = reader.readString();
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
};
