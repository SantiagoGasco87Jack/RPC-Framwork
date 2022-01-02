// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: src/protos/haberdasher.proto
import type { ByteSource, ClientConfiguration } from "twirpscript";
import {
  BinaryReader,
  BinaryWriter,
  JSONrequest,
  PBrequest,
} from "twirpscript";

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
  writeMessage: function (msg: Size, writer: BinaryWriter): void {
    if (msg.inches) {
      writer.writeInt32(1, msg.inches);
    }
  },

  encode: function (size: Size): Uint8Array {
    const writer = new BinaryWriter();
    Size.writeMessage(size, writer);
    return writer.getResultBuffer();
  },

  readMessage: function (msg: Partial<Size>, reader: BinaryReader): void {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
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
    if (!msg.inches) {
      msg.inches = 0;
    }
  },

  decode: function (bytes: ByteSource): Size {
    const reader = new BinaryReader(bytes);
    const message = {};
    Size.readMessage(message, reader);
    return message as Size;
  },

  defaultValue: function (): Size {
    return {
      inches: 0,
    };
  },
};

export const Hat = {
  writeMessage: function (msg: Hat, writer: BinaryWriter): void {
    if (msg.inches) {
      writer.writeInt32(1, msg.inches);
    }
    if (msg.color) {
      writer.writeString(2, msg.color);
    }
    if (msg.name) {
      writer.writeString(3, msg.name);
    }
  },

  encode: function (hat: Hat): Uint8Array {
    const writer = new BinaryWriter();
    Hat.writeMessage(hat, writer);
    return writer.getResultBuffer();
  },

  readMessage: function (msg: Partial<Hat>, reader: BinaryReader): void {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
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
    if (!msg.inches) {
      msg.inches = 0;
    }
    if (!msg.color) {
      msg.color = "";
    }
    if (!msg.name) {
      msg.name = "";
    }
  },

  decode: function (bytes: ByteSource): Hat {
    const reader = new BinaryReader(bytes);
    const message = {};
    Hat.readMessage(message, reader);
    return message as Hat;
  },

  defaultValue: function (): Hat {
    return {
      inches: 0,
      color: "",
      name: "",
    };
  },
};