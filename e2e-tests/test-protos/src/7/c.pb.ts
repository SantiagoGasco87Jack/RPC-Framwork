// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: 7/c.proto
import type { ByteSource, ClientConfiguration } from "twirpscript";
import {
  BinaryReader,
  BinaryWriter,
  JSONrequest,
  PBrequest,
} from "twirpscript";

//========================================//
//       FooService Protobuf Client       //
//========================================//

/**
 * Login via credentials
 */
export async function Foo1(
  foo1Request: Foo1Request,
  config?: ClientConfiguration
): Promise<Foo1Response> {
  const response = await PBrequest(
    "/C.FooService/Foo1",
    Foo1Request.encode(foo1Request),
    config
  );
  return Foo1Response.decode(response);
}

export async function Foo2(
  foo2Request: Foo2Request,
  config?: ClientConfiguration
): Promise<Foo2Response> {
  const response = await PBrequest(
    "/C.FooService/Foo2",
    Foo2Request.encode(foo2Request),
    config
  );
  return Foo2Response.decode(response);
}

export async function Foo3(
  foo3Request: Foo3Request,
  config?: ClientConfiguration
): Promise<Foo3Response> {
  const response = await PBrequest(
    "/C.FooService/Foo3",
    Foo3Request.encode(foo3Request),
    config
  );
  return Foo3Response.decode(response);
}

export async function Foo4(
  foo4Request: Foo4Request,
  config?: ClientConfiguration
): Promise<Foo4Response> {
  const response = await PBrequest(
    "/C.FooService/Foo4",
    Foo4Request.encode(foo4Request),
    config
  );
  return Foo4Response.decode(response);
}

export async function Foo5(
  foo5Request: Foo5Request,
  config?: ClientConfiguration
): Promise<Foo5Response> {
  const response = await PBrequest(
    "/C.FooService/Foo5",
    Foo5Request.encode(foo5Request),
    config
  );
  return Foo5Response.decode(response);
}

//========================================//
//         FooService JSON Client         //
//========================================//

/**
 * Login via credentials
 */
export async function Foo1JSON(
  foo1Request: Foo1Request,
  config?: ClientConfiguration
): Promise<Foo1Response> {
  const response = await JSONrequest<Foo1Response>(
    "/C.FooService/Foo1",
    foo1Request,
    config
  );
  return response;
}

export async function Foo2JSON(
  foo2Request: Foo2Request,
  config?: ClientConfiguration
): Promise<Foo2Response> {
  const response = await JSONrequest<Foo2Response>(
    "/C.FooService/Foo2",
    foo2Request,
    config
  );
  return response;
}

export async function Foo3JSON(
  foo3Request: Foo3Request,
  config?: ClientConfiguration
): Promise<Foo3Response> {
  const response = await JSONrequest<Foo3Response>(
    "/C.FooService/Foo3",
    foo3Request,
    config
  );
  return response;
}

export async function Foo4JSON(
  foo4Request: Foo4Request,
  config?: ClientConfiguration
): Promise<Foo4Response> {
  const response = await JSONrequest<Foo4Response>(
    "/C.FooService/Foo4",
    foo4Request,
    config
  );
  return response;
}

export async function Foo5JSON(
  foo5Request: Foo5Request,
  config?: ClientConfiguration
): Promise<Foo5Response> {
  const response = await JSONrequest<Foo5Response>(
    "/C.FooService/Foo5",
    foo5Request,
    config
  );
  return response;
}

//========================================//
//           FooService Service           //
//========================================//

export interface FooServiceService<Context = unknown> {
  /**
   * Login via credentials
   */
  Foo1: (
    foo1Request: Foo1Request,
    context: Context
  ) => Promise<Foo1Response> | Foo1Response;
  Foo2: (
    foo2Request: Foo2Request,
    context: Context
  ) => Promise<Foo2Response> | Foo2Response;
  Foo3: (
    foo3Request: Foo3Request,
    context: Context
  ) => Promise<Foo3Response> | Foo3Response;
  Foo4: (
    foo4Request: Foo4Request,
    context: Context
  ) => Promise<Foo4Response> | Foo4Response;
  Foo5: (
    foo5Request: Foo5Request,
    context: Context
  ) => Promise<Foo5Response> | Foo5Response;
}

export function createFooServiceHandler<Context>(
  service: FooServiceService<Context>
) {
  return {
    name: "C.FooService",
    methods: {
      Foo1: {
        name: "Foo1",
        handler: service.Foo1,
        input: Foo1Request,
        output: Foo1Response,
      },
      Foo2: {
        name: "Foo2",
        handler: service.Foo2,
        input: Foo2Request,
        output: Foo2Response,
      },
      Foo3: {
        name: "Foo3",
        handler: service.Foo3,
        input: Foo3Request,
        output: Foo3Response,
      },
      Foo4: {
        name: "Foo4",
        handler: service.Foo4,
        input: Foo4Request,
        output: Foo4Response,
      },
      Foo5: {
        name: "Foo5",
        handler: service.Foo5,
        input: Foo5Request,
        output: Foo5Response,
      },
    },
  } as const;
}

//========================================//
//                 Types                  //
//========================================//

export interface Foo1Request {
  a: string[];
  b: string[];
  c: string[];
  d: string[];
  e: string[];
}

export interface Foo1Response {
  a: string[];
  b: string[];
  c: string[];
  d: string[];
  e: string[];
}

export interface Foo2Request {
  a: string[];
  b: string[];
  c: string[];
  d: string[];
  e: string[];
}

export interface Foo2Response {
  a: string[];
  b: string[];
  c: string[];
  d: string[];
  e: string[];
}

export interface Foo3Request {
  a: string[];
  b: string[];
  c: string[];
  d: string[];
  e: string[];
}

export interface Foo3Response {
  a: string[];
  b: string[];
  c: string[];
  d: string[];
  e: string[];
}

export interface Foo4Request {
  a: string[];
  b: string[];
  c: string[];
  d: string[];
  e: string[];
}

export interface Foo4Response {
  a: string[];
  b: string[];
  c: string[];
  d: string[];
  e: string[];
}

export interface Foo5Request {
  a: string[];
  b: string[];
  c: string[];
  d: string[];
  e: string[];
}

export interface Foo5Response {
  a: string[];
  b: string[];
  c: string[];
  d: string[];
  e: string[];
}

//========================================//
//        Protobuf Encode / Decode        //
//========================================//

export const Foo1Request = {
  writeMessage: function (msg: Foo1Request, writer: BinaryWriter): void {
    if (msg.a.length > 0) {
      writer.writeRepeatedString(1, msg.a);
    }
    if (msg.b.length > 0) {
      writer.writeRepeatedString(2, msg.b);
    }
    if (msg.c.length > 0) {
      writer.writeRepeatedString(3, msg.c);
    }
    if (msg.d.length > 0) {
      writer.writeRepeatedString(4, msg.d);
    }
    if (msg.e.length > 0) {
      writer.writeRepeatedString(5, msg.e);
    }
  },

  encode: function (foo1Request: Foo1Request): Uint8Array {
    const writer = new BinaryWriter();
    Foo1Request.writeMessage(foo1Request, writer);
    return writer.getResultBuffer();
  },

  readMessage: function (
    msg: Partial<Foo1Request>,
    reader: BinaryReader
  ): void {
    msg.a = [];
    msg.b = [];
    msg.c = [];
    msg.d = [];
    msg.e = [];
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.a.push(reader.readString());
          break;
        }
        case 2: {
          msg.b.push(reader.readString());
          break;
        }
        case 3: {
          msg.c.push(reader.readString());
          break;
        }
        case 4: {
          msg.d.push(reader.readString());
          break;
        }
        case 5: {
          msg.e.push(reader.readString());
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
  },

  decode: function (bytes: ByteSource): Foo1Request {
    const reader = new BinaryReader(bytes);
    const message = {};
    Foo1Request.readMessage(message, reader);
    return message as Foo1Request;
  },

  defaultValue: function (): Foo1Request {
    return {
      a: [],
      b: [],
      c: [],
      d: [],
      e: [],
    };
  },
};

export const Foo1Response = {
  writeMessage: function (msg: Foo1Response, writer: BinaryWriter): void {
    if (msg.a.length > 0) {
      writer.writeRepeatedString(1, msg.a);
    }
    if (msg.b.length > 0) {
      writer.writeRepeatedString(2, msg.b);
    }
    if (msg.c.length > 0) {
      writer.writeRepeatedString(3, msg.c);
    }
    if (msg.d.length > 0) {
      writer.writeRepeatedString(4, msg.d);
    }
    if (msg.e.length > 0) {
      writer.writeRepeatedString(5, msg.e);
    }
  },

  encode: function (foo1Response: Foo1Response): Uint8Array {
    const writer = new BinaryWriter();
    Foo1Response.writeMessage(foo1Response, writer);
    return writer.getResultBuffer();
  },

  readMessage: function (
    msg: Partial<Foo1Response>,
    reader: BinaryReader
  ): void {
    msg.a = [];
    msg.b = [];
    msg.c = [];
    msg.d = [];
    msg.e = [];
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.a.push(reader.readString());
          break;
        }
        case 2: {
          msg.b.push(reader.readString());
          break;
        }
        case 3: {
          msg.c.push(reader.readString());
          break;
        }
        case 4: {
          msg.d.push(reader.readString());
          break;
        }
        case 5: {
          msg.e.push(reader.readString());
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
  },

  decode: function (bytes: ByteSource): Foo1Response {
    const reader = new BinaryReader(bytes);
    const message = {};
    Foo1Response.readMessage(message, reader);
    return message as Foo1Response;
  },

  defaultValue: function (): Foo1Response {
    return {
      a: [],
      b: [],
      c: [],
      d: [],
      e: [],
    };
  },
};

export const Foo2Request = {
  writeMessage: function (msg: Foo2Request, writer: BinaryWriter): void {
    if (msg.a.length > 0) {
      writer.writeRepeatedString(1, msg.a);
    }
    if (msg.b.length > 0) {
      writer.writeRepeatedString(2, msg.b);
    }
    if (msg.c.length > 0) {
      writer.writeRepeatedString(3, msg.c);
    }
    if (msg.d.length > 0) {
      writer.writeRepeatedString(4, msg.d);
    }
    if (msg.e.length > 0) {
      writer.writeRepeatedString(5, msg.e);
    }
  },

  encode: function (foo2Request: Foo2Request): Uint8Array {
    const writer = new BinaryWriter();
    Foo2Request.writeMessage(foo2Request, writer);
    return writer.getResultBuffer();
  },

  readMessage: function (
    msg: Partial<Foo2Request>,
    reader: BinaryReader
  ): void {
    msg.a = [];
    msg.b = [];
    msg.c = [];
    msg.d = [];
    msg.e = [];
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.a.push(reader.readString());
          break;
        }
        case 2: {
          msg.b.push(reader.readString());
          break;
        }
        case 3: {
          msg.c.push(reader.readString());
          break;
        }
        case 4: {
          msg.d.push(reader.readString());
          break;
        }
        case 5: {
          msg.e.push(reader.readString());
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
  },

  decode: function (bytes: ByteSource): Foo2Request {
    const reader = new BinaryReader(bytes);
    const message = {};
    Foo2Request.readMessage(message, reader);
    return message as Foo2Request;
  },

  defaultValue: function (): Foo2Request {
    return {
      a: [],
      b: [],
      c: [],
      d: [],
      e: [],
    };
  },
};

export const Foo2Response = {
  writeMessage: function (msg: Foo2Response, writer: BinaryWriter): void {
    if (msg.a.length > 0) {
      writer.writeRepeatedString(1, msg.a);
    }
    if (msg.b.length > 0) {
      writer.writeRepeatedString(2, msg.b);
    }
    if (msg.c.length > 0) {
      writer.writeRepeatedString(3, msg.c);
    }
    if (msg.d.length > 0) {
      writer.writeRepeatedString(4, msg.d);
    }
    if (msg.e.length > 0) {
      writer.writeRepeatedString(5, msg.e);
    }
  },

  encode: function (foo2Response: Foo2Response): Uint8Array {
    const writer = new BinaryWriter();
    Foo2Response.writeMessage(foo2Response, writer);
    return writer.getResultBuffer();
  },

  readMessage: function (
    msg: Partial<Foo2Response>,
    reader: BinaryReader
  ): void {
    msg.a = [];
    msg.b = [];
    msg.c = [];
    msg.d = [];
    msg.e = [];
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.a.push(reader.readString());
          break;
        }
        case 2: {
          msg.b.push(reader.readString());
          break;
        }
        case 3: {
          msg.c.push(reader.readString());
          break;
        }
        case 4: {
          msg.d.push(reader.readString());
          break;
        }
        case 5: {
          msg.e.push(reader.readString());
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
  },

  decode: function (bytes: ByteSource): Foo2Response {
    const reader = new BinaryReader(bytes);
    const message = {};
    Foo2Response.readMessage(message, reader);
    return message as Foo2Response;
  },

  defaultValue: function (): Foo2Response {
    return {
      a: [],
      b: [],
      c: [],
      d: [],
      e: [],
    };
  },
};

export const Foo3Request = {
  writeMessage: function (msg: Foo3Request, writer: BinaryWriter): void {
    if (msg.a.length > 0) {
      writer.writeRepeatedString(1, msg.a);
    }
    if (msg.b.length > 0) {
      writer.writeRepeatedString(2, msg.b);
    }
    if (msg.c.length > 0) {
      writer.writeRepeatedString(3, msg.c);
    }
    if (msg.d.length > 0) {
      writer.writeRepeatedString(4, msg.d);
    }
    if (msg.e.length > 0) {
      writer.writeRepeatedString(5, msg.e);
    }
  },

  encode: function (foo3Request: Foo3Request): Uint8Array {
    const writer = new BinaryWriter();
    Foo3Request.writeMessage(foo3Request, writer);
    return writer.getResultBuffer();
  },

  readMessage: function (
    msg: Partial<Foo3Request>,
    reader: BinaryReader
  ): void {
    msg.a = [];
    msg.b = [];
    msg.c = [];
    msg.d = [];
    msg.e = [];
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.a.push(reader.readString());
          break;
        }
        case 2: {
          msg.b.push(reader.readString());
          break;
        }
        case 3: {
          msg.c.push(reader.readString());
          break;
        }
        case 4: {
          msg.d.push(reader.readString());
          break;
        }
        case 5: {
          msg.e.push(reader.readString());
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
  },

  decode: function (bytes: ByteSource): Foo3Request {
    const reader = new BinaryReader(bytes);
    const message = {};
    Foo3Request.readMessage(message, reader);
    return message as Foo3Request;
  },

  defaultValue: function (): Foo3Request {
    return {
      a: [],
      b: [],
      c: [],
      d: [],
      e: [],
    };
  },
};

export const Foo3Response = {
  writeMessage: function (msg: Foo3Response, writer: BinaryWriter): void {
    if (msg.a.length > 0) {
      writer.writeRepeatedString(1, msg.a);
    }
    if (msg.b.length > 0) {
      writer.writeRepeatedString(2, msg.b);
    }
    if (msg.c.length > 0) {
      writer.writeRepeatedString(3, msg.c);
    }
    if (msg.d.length > 0) {
      writer.writeRepeatedString(4, msg.d);
    }
    if (msg.e.length > 0) {
      writer.writeRepeatedString(5, msg.e);
    }
  },

  encode: function (foo3Response: Foo3Response): Uint8Array {
    const writer = new BinaryWriter();
    Foo3Response.writeMessage(foo3Response, writer);
    return writer.getResultBuffer();
  },

  readMessage: function (
    msg: Partial<Foo3Response>,
    reader: BinaryReader
  ): void {
    msg.a = [];
    msg.b = [];
    msg.c = [];
    msg.d = [];
    msg.e = [];
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.a.push(reader.readString());
          break;
        }
        case 2: {
          msg.b.push(reader.readString());
          break;
        }
        case 3: {
          msg.c.push(reader.readString());
          break;
        }
        case 4: {
          msg.d.push(reader.readString());
          break;
        }
        case 5: {
          msg.e.push(reader.readString());
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
  },

  decode: function (bytes: ByteSource): Foo3Response {
    const reader = new BinaryReader(bytes);
    const message = {};
    Foo3Response.readMessage(message, reader);
    return message as Foo3Response;
  },

  defaultValue: function (): Foo3Response {
    return {
      a: [],
      b: [],
      c: [],
      d: [],
      e: [],
    };
  },
};

export const Foo4Request = {
  writeMessage: function (msg: Foo4Request, writer: BinaryWriter): void {
    if (msg.a.length > 0) {
      writer.writeRepeatedString(1, msg.a);
    }
    if (msg.b.length > 0) {
      writer.writeRepeatedString(2, msg.b);
    }
    if (msg.c.length > 0) {
      writer.writeRepeatedString(3, msg.c);
    }
    if (msg.d.length > 0) {
      writer.writeRepeatedString(4, msg.d);
    }
    if (msg.e.length > 0) {
      writer.writeRepeatedString(5, msg.e);
    }
  },

  encode: function (foo4Request: Foo4Request): Uint8Array {
    const writer = new BinaryWriter();
    Foo4Request.writeMessage(foo4Request, writer);
    return writer.getResultBuffer();
  },

  readMessage: function (
    msg: Partial<Foo4Request>,
    reader: BinaryReader
  ): void {
    msg.a = [];
    msg.b = [];
    msg.c = [];
    msg.d = [];
    msg.e = [];
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.a.push(reader.readString());
          break;
        }
        case 2: {
          msg.b.push(reader.readString());
          break;
        }
        case 3: {
          msg.c.push(reader.readString());
          break;
        }
        case 4: {
          msg.d.push(reader.readString());
          break;
        }
        case 5: {
          msg.e.push(reader.readString());
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
  },

  decode: function (bytes: ByteSource): Foo4Request {
    const reader = new BinaryReader(bytes);
    const message = {};
    Foo4Request.readMessage(message, reader);
    return message as Foo4Request;
  },

  defaultValue: function (): Foo4Request {
    return {
      a: [],
      b: [],
      c: [],
      d: [],
      e: [],
    };
  },
};

export const Foo4Response = {
  writeMessage: function (msg: Foo4Response, writer: BinaryWriter): void {
    if (msg.a.length > 0) {
      writer.writeRepeatedString(1, msg.a);
    }
    if (msg.b.length > 0) {
      writer.writeRepeatedString(2, msg.b);
    }
    if (msg.c.length > 0) {
      writer.writeRepeatedString(3, msg.c);
    }
    if (msg.d.length > 0) {
      writer.writeRepeatedString(4, msg.d);
    }
    if (msg.e.length > 0) {
      writer.writeRepeatedString(5, msg.e);
    }
  },

  encode: function (foo4Response: Foo4Response): Uint8Array {
    const writer = new BinaryWriter();
    Foo4Response.writeMessage(foo4Response, writer);
    return writer.getResultBuffer();
  },

  readMessage: function (
    msg: Partial<Foo4Response>,
    reader: BinaryReader
  ): void {
    msg.a = [];
    msg.b = [];
    msg.c = [];
    msg.d = [];
    msg.e = [];
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.a.push(reader.readString());
          break;
        }
        case 2: {
          msg.b.push(reader.readString());
          break;
        }
        case 3: {
          msg.c.push(reader.readString());
          break;
        }
        case 4: {
          msg.d.push(reader.readString());
          break;
        }
        case 5: {
          msg.e.push(reader.readString());
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
  },

  decode: function (bytes: ByteSource): Foo4Response {
    const reader = new BinaryReader(bytes);
    const message = {};
    Foo4Response.readMessage(message, reader);
    return message as Foo4Response;
  },

  defaultValue: function (): Foo4Response {
    return {
      a: [],
      b: [],
      c: [],
      d: [],
      e: [],
    };
  },
};

export const Foo5Request = {
  writeMessage: function (msg: Foo5Request, writer: BinaryWriter): void {
    if (msg.a.length > 0) {
      writer.writeRepeatedString(1, msg.a);
    }
    if (msg.b.length > 0) {
      writer.writeRepeatedString(2, msg.b);
    }
    if (msg.c.length > 0) {
      writer.writeRepeatedString(3, msg.c);
    }
    if (msg.d.length > 0) {
      writer.writeRepeatedString(4, msg.d);
    }
    if (msg.e.length > 0) {
      writer.writeRepeatedString(5, msg.e);
    }
  },

  encode: function (foo5Request: Foo5Request): Uint8Array {
    const writer = new BinaryWriter();
    Foo5Request.writeMessage(foo5Request, writer);
    return writer.getResultBuffer();
  },

  readMessage: function (
    msg: Partial<Foo5Request>,
    reader: BinaryReader
  ): void {
    msg.a = [];
    msg.b = [];
    msg.c = [];
    msg.d = [];
    msg.e = [];
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.a.push(reader.readString());
          break;
        }
        case 2: {
          msg.b.push(reader.readString());
          break;
        }
        case 3: {
          msg.c.push(reader.readString());
          break;
        }
        case 4: {
          msg.d.push(reader.readString());
          break;
        }
        case 5: {
          msg.e.push(reader.readString());
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
  },

  decode: function (bytes: ByteSource): Foo5Request {
    const reader = new BinaryReader(bytes);
    const message = {};
    Foo5Request.readMessage(message, reader);
    return message as Foo5Request;
  },

  defaultValue: function (): Foo5Request {
    return {
      a: [],
      b: [],
      c: [],
      d: [],
      e: [],
    };
  },
};

export const Foo5Response = {
  writeMessage: function (msg: Foo5Response, writer: BinaryWriter): void {
    if (msg.a.length > 0) {
      writer.writeRepeatedString(1, msg.a);
    }
    if (msg.b.length > 0) {
      writer.writeRepeatedString(2, msg.b);
    }
    if (msg.c.length > 0) {
      writer.writeRepeatedString(3, msg.c);
    }
    if (msg.d.length > 0) {
      writer.writeRepeatedString(4, msg.d);
    }
    if (msg.e.length > 0) {
      writer.writeRepeatedString(5, msg.e);
    }
  },

  encode: function (foo5Response: Foo5Response): Uint8Array {
    const writer = new BinaryWriter();
    Foo5Response.writeMessage(foo5Response, writer);
    return writer.getResultBuffer();
  },

  readMessage: function (
    msg: Partial<Foo5Response>,
    reader: BinaryReader
  ): void {
    msg.a = [];
    msg.b = [];
    msg.c = [];
    msg.d = [];
    msg.e = [];
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.a.push(reader.readString());
          break;
        }
        case 2: {
          msg.b.push(reader.readString());
          break;
        }
        case 3: {
          msg.c.push(reader.readString());
          break;
        }
        case 4: {
          msg.d.push(reader.readString());
          break;
        }
        case 5: {
          msg.e.push(reader.readString());
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
  },

  decode: function (bytes: ByteSource): Foo5Response {
    const reader = new BinaryReader(bytes);
    const message = {};
    Foo5Response.readMessage(message, reader);
    return message as Foo5Response;
  },

  defaultValue: function (): Foo5Response {
    return {
      a: [],
      b: [],
      c: [],
      d: [],
      e: [],
    };
  },
};
