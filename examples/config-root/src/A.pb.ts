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
   * Serializes a Foo to JSON.
   */
  encodeJSON: function (foo: Partial<Foo>): string {
    return JSON.stringify(Foo._writeMessageJSON(foo));
  },

  /**
   * Deserializes a Foo from JSON.
   */
  decodeJSON: function (json: string): Foo {
    return Foo._readMessageJSON(Foo.initialize(), JSON.parse(json));
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
  _writeMessageJSON: function (msg: Partial<Foo>): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.name) {
      json.name = msg.name;
    }
    return json;
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

  /**
   * @private
   */
  _readMessageJSON: function (msg: Foo, json: any): Foo {
    const _name = json.name;
    if (_name) {
      msg.name = _name;
    }
    return msg;
  },
};
