// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: A.proto

import type { ByteSource } from "twirpscript";
import { BinaryReader, BinaryWriter } from "twirpscript";

//========================================//
//                 Types                  //
//========================================//

export interface Foo {
  name: string;
}

//========================================//
//        Protobuf Encode / Decode        //
//========================================//

export const Foo = {
  /**
   * Serializes a Foo to protobuf.
   */
  encode: function (foo: Partial<Foo>): Uint8Array {
    return Foo._writeMessage(foo, new BinaryWriter()).getResultBuffer();
  },

  /**
   * Deserializes a Foo from protobuf.
   */
  decode: function (bytes: ByteSource): Foo {
    return Foo._readMessage(Foo.initialize(), new BinaryReader(bytes));
  },

  /**
   * Initializes a Foo with all fields set to their default value.
   */
  initialize: function (): Foo {
    return {
      name: "",
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: Partial<Foo>,
    writer: BinaryWriter
  ): BinaryWriter {
    if (msg.name) {
      writer.writeString(1, msg.name);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (msg: Foo, reader: BinaryReader): Foo {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
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