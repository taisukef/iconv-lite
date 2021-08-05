class Buffer extends Uint8Array {
  constructor(ar) {
    super(ar);
    /*
    this.data = new Uint8Array(ar.length);
    for (let i = 0; i < this.data.length; i++) {
      this.data[i] = ar[i];
    }
    */
  }
  static from(ar, encoding) {
    if (encoding == undefined && Array.isArray(ar)) {
      return new Buffer(ar);
      /*
      const b = new Buffer(ar.length);
      console.log(ar);
      for (let i = 0; i < ar.length; i++) {
        b[i] = ar[i];
      }
      return b;
      */
    } else if (encoding == "ucs2" || encoding == "utf16le") {
      const b = new Buffer(ar.length * 2);
      for (let i = 0; i < ar.length; i++) {
        b.writeUInt16LE(i * 2, ar[i]);
      }
      return b;
      //return new Buffer(new TextEncoder().encode(ar));
    } else {
      throw new Error("non support encoding");
    }
  }
  static concat(ar) {
    const len = ar.reduce((pre, a) => pre + a.length, 0);
    const res = new Buffer(len);
    let cnt = 0;
    for (const b of ar) {
      for (let i = 0; i < b.length; i++) {
        res[cnt++] = b[i];
      }
    }
    return res;
  }
  static alloc(n) {
    return new Buffer(n);
  }
  writeUInt32LE(value, offset) {
    new DataView(this.buffer).setUint32(offset, value, true);
  }
  writeUInt32BE(value, offset) {
    new DataView(this.buffer).setUint32(offset, value, false);
  }
  writeUInt16LE(value, offset) {
    new DataView(this.buffer).setUint16(offset, value, true);
  }
  writeUInt16BE(value, offset) {
    new DataView(this.buffer).setUint16(offset, value, false);
  }
  readUInt32LE(offset) {
    return new DataView(this.buffer).getUint32(offset, true);
  }
  readUInt32BE(offset) {
    return new DataView(this.buffer).getUint32(offset, false);
  }
  readUInt16LE(offset) {
    return new DataView(this.buffer).getUint16(offset, true);
  }
  readUInt16BE(offset) {
    return new DataView(this.buffer).getUint16(offset, false);
  }
}

export { Buffer };
