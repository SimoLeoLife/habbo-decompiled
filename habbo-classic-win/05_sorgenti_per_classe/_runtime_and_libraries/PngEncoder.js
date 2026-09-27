// Extracted from HabboAirLauncher.deobf.js, line 54678.

class extends Wv {
    static {
      n(this, "PngEncoder");
    }
    _png;
    _zlibOptions;
    _colorType;
    _interlaceMethod;
    constructor(e, r = {}) {
      (super(),
        (this._colorType = go.UNKNOWN),
        (this._zlibOptions = { ...V3r, ...r.zlib }),
        (this._png = this._checkData(e)),
        (this._interlaceMethod = (r.interlace === "Adam7" ? Hh.ADAM7 : Hh.NO_INTERLACE) ?? Hh.NO_INTERLACE),
        this.setBigEndian());
    }
    encode() {
      if (
        (writeSignature(this),
        this.encodeIHDR(),
        this._png.palette && (this.encodePLTE(), this._png.palette[0].length === 4 && this.encodeTRNS()),
        this.encodeData(),
        this._png.text)
      )
        for (let [e, r] of Object.entries(this._png.text)) encodetEXt(this, e, r);
      return (this.encodeIEND(), this.toArray());
    }
    encodeIHDR() {
      (this.writeUint32(13),
        this.writeChars("IHDR"),
        this.writeUint32(this._png.width),
        this.writeUint32(this._png.height),
        this.writeByte(this._png.depth),
        this.writeByte(this._colorType),
        this.writeByte(MC.DEFLATE),
        this.writeByte(pZ.ADAPTIVE),
        this.writeByte(this._interlaceMethod),
        writeCrc(this, 17));
    }
    encodeIEND() {
      (this.writeUint32(0), this.writeChars("IEND"), writeCrc(this, 4));
    }
    encodePLTE() {
      let e = this._png.palette?.length * 3;
      (this.writeUint32(e), this.writeChars("PLTE"));
      for (let r of this._png.palette) (this.writeByte(r[0]), this.writeByte(r[1]), this.writeByte(r[2]));
      writeCrc(this, 4 + e);
    }
    encodeTRNS() {
      let e = this._png.palette.filter((r) => r.at(-1) !== 255);
      (this.writeUint32(e.length), this.writeChars("tRNS"));
      for (let r of e) this.writeByte(r.at(-1));
      writeCrc(this, 4 + e.length);
    }
    encodeIDAT(e) {
      (this.writeUint32(e.length), this.writeChars("IDAT"), this.writeBytes(e), writeCrc(this, e.length + 4));
    }
    encodeData() {
      let { width: e, height: r, channels: t, depth: i, data: s } = this._png,
        o = i <= 8 ? Math.ceil((e * i) / 8) * t : Math.ceil((((e * i) / 8) * t) / 2),
        d = new Wv().setBigEndian(),
        c = 0;
      if (this._interlaceMethod === Hh.NO_INTERLACE)
        for (let b = 0; b < r; b++)
          (d.writeByte(0), i === 16 ? (c = writeDataUint16(s, d, o, c)) : (c = writeDataBytes(s, d, o, c)));
      else this._interlaceMethod === Hh.ADAM7 && (c = writeDataInterlaced(this._png, s, d, c));
      let f = d.toArray(),
        l = Dv(f, this._zlibOptions);
      this.encodeIDAT(l);
    }
    _checkData(e) {
      let { colorType: r, channels: t, depth: i } = getColorType(e, e.palette),
        s = {
          width: checkInteger(e.width, "width"),
          height: checkInteger(e.height, "height"),
          channels: t,
          data: e.data,
          depth: i,
          text: e.text,
          palette: e.palette,
        };
      this._colorType = r;
      let o = i < 8 ? Math.ceil((s.width * i) / 8) * s.height * t : s.width * s.height * t;
      if (s.data.length !== o) throw new RangeError(`wrong data size. Found ${s.data.length}, expected ${o}`);
      return s;
    }
  }
