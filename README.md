# TwirpScript

<blockquote> A simple RPC framework for JavaScript and TypeScript</blockquote>

<br />

<a href="https://www.npmjs.com/package/twirpscript">
  <img src="https://img.shields.io/npm/v/twirpscript.svg">
</a>
<a href="https://github.com/tatethurston/twirpscript/blob/master/LICENSE">
  <img src="https://img.shields.io/npm/l/twirpscript.svg">
</a>
<a href="https://www.npmjs.com/package/twirpscript">
  <img src="https://img.shields.io/npm/dy/twirpscript.svg">
</a>
<a href="https://github.com/tatethurston/twirpscript/actions/workflows/ci.yml">
  <img src="https://github.com/tatethurston/twirpscript/actions/workflows/ci.yml/badge.svg">
</a>

## What is this? 🧐

TwirpScript is a JavaScript/TypeScript implementation of [Twirp](https://blog.twitch.tv/en/2018/01/16/twirp-a-sweet-new-rpc-framework-for-go-5f2febbf35f). TwirpScript autogenerates service stubs and clients from [protocol buffers](https://developers.google.com/protocol-buffers/).

TwirpScript can be used to generate JavaScript or TypeScript [clients for an existing Twirp service](https://github.com/tatethurston/TwirpScript#connecting-to-an-existing-twirp-server-and-only-need-a-javascript-or-typescript-client), a JavaScript or TypeScript Twirp Server, or both.

## Overview

TwirpScript is an implementation of the [Twirp wire protocol](https://github.com/twitchtv/twirp/blob/main/PROTOCOL.md) for JavaScript and TypeScript. It generates idiomatic clients and servers from `.proto` service specifications. The generated clients can be used in the browser. This enables type safe communication between the client and server for web applications, as well as reduced payload sizes when using `protobuf` as the serialization format.

Twirp is a simple RPC framework built on [protocol buffers](https://developers.google.com/protocol-buffers/). You define a service in a `.proto` specification file, and Twirp will generate servers and clients for that service. You fill in the business logic that powers the server, and Twirp handles the boilerplate. In addition to abstracting away boilerplate, this provides type safe interactions between the client and the server.

To learn more about the motivation behind Twirp (and a comparison to REST APIs and gRPC), check out the [announcement blog](https://blog.twitch.tv/en/2018/01/16/twirp-a-sweet-new-rpc-framework-for-go-5f2febbf35f/).

## FAQ

> Why use Twirp instead of GraphQL, gRPC or REST?

For multiple clients with distinct views, I would pull in GraphQL. For a single UI client I prefer the simpler architecture (and well defined optimization paths) found with a more traditional API server approach.

A REST or JSON API lacks type safety and the DX that comes from static typing. This can be mitigated to an extent with tools like JSON Schema, but that route requires stitching together (and maintaining) a suite of tools to achieve a similar DX.

gRPC is great, but has a large runtime (and corresponding complexity) that is unnecessary for some applications. Twirp offers many of the benefits of gRPC with a significantly reduced runtime. TwirpScript's DX is designed to be idiomatic for the JS/TS community, and TwirpScript's autogenerated clients are optimized for use in the browser.

To learn more about the motivation behind Twirp (and a comparison to REST APIs and gRPC), check out the [announcement blog](https://blog.twitch.tv/en/2018/01/16/twirp-a-sweet-new-rpc-framework-for-go-5f2febbf35f/).

## Features 🛠

1. TwirpScript clients can be consumed in the browser (or server\*) and are built with [tree shaking](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking) in mind so only the service methods consumed by the client end up in the final bundle.

2. The only runtime dependency is Google's [protobuf js](https://github.com/protocolbuffers/protobuf/tree/master/js). If you decide to use JSON instead of Protobuf as the serialization format, this dependency will be removed via tree shaking.

3. Clients get in-editor API documentation. Comments in your `.proto` files become [TSDoc](https://github.com/microsoft/tsdoc) comments in the generated code that will show inline documentation in supported editors.

4. Generates idiomatic JavaScript interfaces. None of the Java idioms that `protoc --js_out` generates such as the `List` suffix naming for repeated fields or the various getter and setter methods. TwirpScript generates and consumes plain JavaScript objects over classes.

\* Requires that the runtime provides `fetch`. See [Compatibility](#compatibility-) for more details.

## Installation 📦

1. Install the [protocol buffers compiler](https://developers.google.com/protocol-buffers):

   MacOS:
   `brew install protobuf`

   Linux:
   `apt install -y protobuf-compiler`

   Windows:
   `choco install protoc`

   Or install from a [precompiled binary](https://github.com/protocolbuffers/protobuf/releases).

1. Add this package to your project:
   `yarn add twirpscript`

## Getting Started

### Overview 📖

To make a Twirp service:

1. Define your service in a `.proto` file.
2. Run `yarn twirpscript` to generate JavaScript or TypeScript code from your `.proto` file. This will generate JSON and Protobuf clients, a service interface, and server utilities.
3. Implement the generated service interface to build your service.
4. Attach your implemented service to your application server.
5. Use the generated client to make requests to your server.

#### 1. Define your service

Create a `proto` specification file:

`src/server/haberdasher/haberdasher.proto`

```protobuf
syntax = "proto3";

// Haberdasher service makes hats for clients.
service Haberdasher {
  // MakeHat produces a hat of mysterious, randomly-selected color!
  rpc MakeHat(Size) returns (Hat);
}

// Size of a Hat, in inches.
message Size {
  int32 inches = 1; // must be > 0
}

// A Hat is a piece of headwear made by a Haberdasher.
message Hat {
  int32 inches = 1;
  string color = 2; // anything but "invisible"
  string name = 3; // i.e. "bowler"
}
```

#### 2. Run `yarn twirpscript`

This will generate `haberdasher.pb.ts` (or `haberdasher.pb.js` for JavaScript users) in the same directory as as `haberdasher.proto`. Any comments will become [TSDoc](https://github.com/microsoft/tsdoc) comments and will show inline in supported editors.

`yarn twirpscript` will compile all`.proto` files in your project.

#### 3. Implement the generated service interface to build your service.

`src/server/haberdasher/index.ts`

```ts
import { HaberdasherService, createHaberdasherHandler } from "./service.pb";

const Haberdasher: HaberdasherService = {
  MakeHat: (size) => {
    return {
      inches: size.inches,
      color: "red",
      name: "fedora",
    };
  },
};

export const HaberdasherHandler = createHaberdasherHandler(HaberdasherService);
```

#### 4. Attach your implemented service to your application server.

`src/server/index.ts`

```ts
import { createServer } from "http";
import { createTwirpServer } from "twirpscript";
import { HaberdasherHandler } from "./haberdasher";

const PORT = 8080;

const app = createTwirpServer([HaberdasherHandler]);

createServer(app).listen(PORT, () =>
  console.log(`Server listening on port ${PORT}`)
);
```

#### 5. Client

That's it for the server! Now you can use the generated clients to make `json` or `protobuf` requests to your server:

`src/client.ts`

```ts
import { MakeHat } from "./server/haberdasher/haberdasher.pb";

const hat = await MakeHat({ inches: 12 }, { baseURL: "http://localhost:8080" });
console.log(hat);
```

#### Connecting to an existing Twirp server and only need a JavaScript or TypeScript client?

1. Get your service `.proto` file.
2. Run `yarn twirpscript` to generate JavaScript or TypeScript code from your `.proto` file.
3. Use the generated client to make requests to your server.

## Configuration 🛠

TwirpScript aims to be zero config, but can be configured by creating a `.twirp.json` file in your project root.

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
  <td>src</td>
<td>
The directory to search for `.proto` files. TwirpScript will recursively search all subdirectories. Defaults to the project root.
</td>
<td>string</td>
</tr>
<tr>
  <td>target</td>
<td>
Whether to generate JavaScript or TypeScript. By default, TwirpScript will attempt to autodetect the target by looking for a `tsconfig.json` in the project root. If found, TwirpScript will generate TypeScript, otherwise JavaScript.
</td>
  <td>javascript | typescript</td>
</tr>
</tbody>
</table>

## Examples 🚀

The documentation is a work in progress. Checkout the examples in the examples directory:

- The [JavaScript fullstack](https://github.com/tatethurston/twirpscript/blob/main/examples/typescript-fullstack) shows a minimal browser client and server implementation in JavaScript.
- The [TypeScript fullstack](https://github.com/tatethurston/twirpscript/blob/main/examples/javascript-fullstack) shows a minimal browser client and server implementation in TypeScript.
- The [authentication example](https://github.com/tatethurston/twirpscript/blob/main/examples/authentication) extends the fullstack example to demonstrate authentication using tokens.

The examples also demonstrate testing using [jest](https://jestjs.io/).

## Compatibility 🛠

The autogenerated clients use `fetch` so your runtime must include `fetch`. See a [Node.js client example](https://github.com/tatethurston/TwirpScript/blob/main/examples/twirp-clientcompat/src/client-harness.ts#L11-L12) from the `clientcompat` test.

## Contributing 👫

PR's and issues welcomed! For more guidance check out [CONTRIBUTING.md](https://github.com/tatethurston/twirpscript/blob/main/CONTRIBUTING.md)

## Licensing 📃

See the project's [MIT License](https://github.com/tatethurston/twirpscript/blob/main/LICENSE).
