import { iconv } from "../lib/iconv.js";

class Buffer extends Uint8Array {
  static from(ar) {
    return new Buffer(ar);
  }
}

// Convert from an encoded buffer to a js string.
const str = iconv.decode(Buffer.from([0x68, 0x65, 0x6c, 0x6c, 0x6f]), 'win1251');
console.log(str);

// Convert from a js string to an encoded buffer.
const buf = iconv.encode("Sample input string", 'win1251');
console.log(buf);

// Check if encoding is supported
console.log(iconv.encodingExists("us-ascii"));

