import { parse } from "protocol-buffers-schema";

export type Schema = Required<Pick<ReturnType<typeof parse>, "services">> &
  ReturnType<typeof parse>;

type TsType = "Uint8Array" | "boolean" | "number" | "string" | "unknown";

export function tsType(protoType: string): TsType {
  const typeMap: { [key: string]: TsType } = {
    int32: "number",
    sint32: "number",
    uint32: "number",
    fixed32: "number",
    sfixed32: "number",
    int64: "string",
    sint64: "string",
    uint64: "string",
    fixed64: "string",
    sfixed64: "string",
    float: "string",
    double: "string",
    bool: "boolean",
    string: "string",
    bytes: "Uint8Array",
  } as const;

  return typeMap[protoType] ?? "unknown";
}

export const AUTOGENERATED_NOTICE =
  "// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.";

export function lowercase(word: string): string {
  return word.charAt(0).toLowerCase() + word.slice(1);
}