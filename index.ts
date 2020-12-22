import verifyJwt from "jose/jwt/verify";

let a: string | undefined;
let b = "Hi";
a ||= b;
console.log(`a=${a}`);

verifyJwt("ss", new Uint8Array());

