// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: message.proto

// Replaced from autogenerated output so that tests run against source code in current branch
import type { ByteSource } from "../../src";
import { BinaryReader, BinaryWriter } from "../../src";

//========================================//
//                 Types                  //
//========================================//

export type Baz = typeof Baz[keyof typeof Baz];

export interface Foo {
  fieldOne: number;
  fieldTwo: Record<string, number | undefined>;
  fieldThree: Bar[];
  fieldFour: Bar;
  fieldFive: number[];
  fieldSix: Baz;
  fieldSeven: Baz[];
}

export interface Bar {
  fieldOne: string;
  fieldTwo: Record<string, number | undefined>;
  fieldThree: number[];
}

//========================================//
//        Protobuf Encode / Decode        //
//========================================//

export const Baz = { FOO: 0, BAR: 1 } as const;

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
      fieldOne: 0,
      fieldTwo: {},
      fieldThree: [],
      fieldFour: Bar.initialize(),
      fieldFive: [],
      fieldSix: 0,
      fieldSeven: [],
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: Partial<Foo>,
    writer: BinaryWriter
  ): BinaryWriter {
    if (msg.fieldOne) {
      writer.writeInt32(1, msg.fieldOne);
    }
    if (msg.fieldTwo) {
      for (const key in msg.fieldTwo) {
        writer.writeMessage(2, {}, (_, mapWriter) => {
          mapWriter.writeString(1, key as unknown as string);
          mapWriter.writeInt32(2, msg.fieldTwo![key]);
        });
      }
    }
    if (msg.fieldThree?.length) {
      writer.writeRepeatedMessage(3, msg.fieldThree as any, Bar._writeMessage);
    }
    if (msg.fieldFour) {
      writer.writeMessage(4, msg.fieldFour, Bar._writeMessage);
    }
    if (msg.fieldFive?.length) {
      writer.writeRepeatedInt32(5, msg.fieldFive);
    }
    if (msg.fieldSix) {
      writer.writeEnum(6, msg.fieldSix);
    }
    if (msg.fieldSeven?.length) {
      writer.writeRepeatedEnum(7, msg.fieldSeven);
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
          msg.fieldOne = reader.readInt32();
          break;
        }
        case 2: {
          reader.readMessage(undefined, () => {
            let key: string | undefined;
            let value = 0;
            while (reader.nextField()) {
              const field = reader.getFieldNumber();
              switch (field) {
                case 1: {
                  key = reader.readString();
                  break;
                }
                case 2: {
                  value = reader.readInt32();
                  break;
                }
              }
            }
            if (key) {
              msg.fieldTwo[key] = value;
            }
          });
          break;
        }
        case 3: {
          const m = Bar.initialize();
          reader.readMessage(m, Bar._readMessage);
          msg.fieldThree.push(m);
          break;
        }
        case 4: {
          reader.readMessage(msg.fieldFour, Bar._readMessage);
          break;
        }
        case 5: {
          msg.fieldFive.push(reader.readInt32());
          break;
        }
        case 6: {
          msg.fieldSix = reader.readEnum() as Baz;
          break;
        }
        case 7: {
          msg.fieldSeven.push(reader.readEnum() as Baz);
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

export const Bar = {
  /**
   * Serializes a Bar to protobuf.
   */
  encode: function (bar: Partial<Bar>): Uint8Array {
    return Bar._writeMessage(bar, new BinaryWriter()).getResultBuffer();
  },

  /**
   * Deserializes a Bar from protobuf.
   */
  decode: function (bytes: ByteSource): Bar {
    return Bar._readMessage(Bar.initialize(), new BinaryReader(bytes));
  },

  /**
   * Initializes a Bar with all fields set to their default value.
   */
  initialize: function (): Bar {
    return {
      fieldOne: "",
      fieldTwo: {},
      fieldThree: [],
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: Partial<Bar>,
    writer: BinaryWriter
  ): BinaryWriter {
    if (msg.fieldOne) {
      writer.writeString(1, msg.fieldOne);
    }
    if (msg.fieldTwo) {
      for (const key in msg.fieldTwo) {
        writer.writeMessage(2, {}, (_, mapWriter) => {
          mapWriter.writeString(1, key as unknown as string);
          mapWriter.writeInt32(2, msg.fieldTwo![key]);
        });
      }
    }
    if (msg.fieldThree?.length) {
      writer.writeRepeatedInt32(3, msg.fieldThree);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (msg: Bar, reader: BinaryReader): Bar {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.fieldOne = reader.readString();
          break;
        }
        case 2: {
          reader.readMessage(undefined, () => {
            let key: string | undefined;
            let value = 0;
            while (reader.nextField()) {
              const field = reader.getFieldNumber();
              switch (field) {
                case 1: {
                  key = reader.readString();
                  break;
                }
                case 2: {
                  value = reader.readInt32();
                  break;
                }
              }
            }
            if (key) {
              msg.fieldTwo[key] = value;
            }
          });
          break;
        }
        case 3: {
          msg.fieldThree.push(reader.readInt32());
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
