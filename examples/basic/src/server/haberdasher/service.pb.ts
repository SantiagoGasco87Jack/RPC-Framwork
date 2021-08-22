// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: src/server/haberdasher/service.proto
import { BinaryReader, BinaryWriter } from "google-protobuf";
import {
  JSONrequest,
  PBrequest,
  createMethodHandler,
  ServiceHandler,
} from "twirpscript";

type ByteSource = ArrayBuffer | Uint8Array | number[] | string;

//========================================//
//      Haberdasher Protobuf Client       //
//========================================//

/**
 * MakeHat produces a hat of mysterious, randomly-selected color!
 */
export async function MakeHat(url: string, size: Size): Promise<Hat> {
  const response = await PBrequest(
    url + "/twirp/twirp.example.haberdasher.Haberdasher/MakeHat",
    Size.encode(size)
  );
  return Hat.decode(response);
}

//========================================//
//        Haberdasher JSON Client         //
//========================================//

/**
 * MakeHat produces a hat of mysterious, randomly-selected color!
 */
export async function MakeHatJSON(url: string, size: Size): Promise<Hat> {
  const response = await JSONrequest<Hat>(
    url + "/twirp/twirp.example.haberdasher.Haberdasher/MakeHat",
    size
  );
  return response;
}

//========================================//
//          Haberdasher Service           //
//========================================//

/**
 * Haberdasher service makes hats for clients.
 */
export interface Haberdasher {
  /**
   * MakeHat produces a hat of mysterious, randomly-selected color!
   */
  MakeHat: (size: Size) => Promise<Hat> | Hat;
}

export function HaberdasherHandler(service: Haberdasher): ServiceHandler {
  return {
    path: "twirp.example.haberdasher.Haberdasher",
    methods: {
      MakeHat: createMethodHandler({
        handler: service.MakeHat,
        encode: Hat.encode,
        decode: Hat.decode,
      }),
    },
  };
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

export namespace Size {
  export function writeMessage(msg: Size, writer: BinaryWriter): void {
    if (msg.inches) {
      writer.writeInt32(1, msg.inches);
    }
  }

  export function encode(size: Size): Uint8Array {
    const writer = new BinaryWriter();
    writeMessage(size, writer);
    return writer.getResultBuffer();
  }

  export function readMessage(msg: Partial<Size>, reader: BinaryReader): void {
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
  }

  export function decode(bytes: ByteSource): Size {
    const reader = new BinaryReader(bytes);
    const message = {};
    readMessage(message, reader);
    return message as Size;
  }
}

export namespace Hat {
  export function writeMessage(msg: Hat, writer: BinaryWriter): void {
    if (msg.inches) {
      writer.writeInt32(1, msg.inches);
    }
    if (msg.color) {
      writer.writeString(2, msg.color);
    }
    if (msg.name) {
      writer.writeString(3, msg.name);
    }
  }

  export function encode(hat: Hat): Uint8Array {
    const writer = new BinaryWriter();
    writeMessage(hat, writer);
    return writer.getResultBuffer();
  }

  export function readMessage(msg: Partial<Hat>, reader: BinaryReader): void {
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
  }

  export function decode(bytes: ByteSource): Hat {
    const reader = new BinaryReader(bytes);
    const message = {};
    readMessage(message, reader);
    return message as Hat;
  }
}
