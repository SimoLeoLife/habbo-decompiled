// Estratto da HabboAirLauncher.deobf.js, riga 54283.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/structure/animation/AnimationActionPart.as

class extends Wv {
  static {
    n(this, "PngDecoder");
  }
  _checkCrc;
  _inflator;
  _png;
  _apng;
  _end;
  _hasPalette;
  _palette;
  _hasTransparency;
  _transparency;
  _compressionMethod;
  _filterMethod;
  _interlaceMethod;
  _colorType;
  _isAnimated;
  _numberOfFrames;
  _numberOfPlays;
  _frames;
  _writingDataChunks;
  constructor(e, r = {}) {
    super(e);
    let { checkCrc: t = !1 } = r;
    ((this._checkCrc = t),
      (this._inflator = new aOe()),
      (this._png = { width: -1, height: -1, channels: -1, data: new Uint8Array(0), depth: 1, text: {} }),
      (this._apng = {
        width: -1,
        height: -1,
        channels: -1,
        depth: 1,
        numberOfFrames: 1,
        numberOfPlays: 0,
        text: {},
        frames: [],
      }),
      (this._end = !1),
      (this._hasPalette = !1),
      (this._palette = []),
      (this._hasTransparency = !1),
      (this._transparency = new Uint16Array(0)),
      (this._compressionMethod = MC.UNKNOWN),
      (this._filterMethod = pZ.UNKNOWN),
      (this._interlaceMethod = Hh.UNKNOWN),
      (this._colorType = go.UNKNOWN),
      (this._isAnimated = !1),
      (this._numberOfFrames = 1),
      (this._numberOfPlays = 0),
      (this._frames = []),
      (this._writingDataChunks = !1),
      this.setBigEndian());
  }
  decode() {
    for (checkSignature(this); !this._end;) {
      let e = this.readUint32(),
        r = this.readChars(4);
      this.decodeChunk(e, r);
    }
    return (this.decodeImage(), this._png);
  }
  decodeApng() {
    for (checkSignature(this); !this._end;) {
      let e = this.readUint32(),
        r = this.readChars(4);
      this.decodeApngChunk(e, r);
    }
    return (this.decodeApngImage(), this._apng);
  }
  decodeChunk(e, r) {
    let t = this.offset;
    switch (r) {
      case "IHDR":
        this.decodeIHDR();
        break;
      case "PLTE":
        this.decodePLTE(e);
        break;
      case "IDAT":
        this.decodeIDAT(e);
        break;
      case "IEND":
        this._end = !0;
        break;
      case "tRNS":
        this.decodetRNS(e);
        break;
      case "iCCP":
        this.decodeiCCP(e);
        break;
      case oOe:
        decodetEXt(this._png.text, this, e);
        break;
      case "pHYs":
        this.decodepHYs();
        break;
      default:
        this.skip(e);
        break;
    }
    if (this.offset - t !== e) throw new Error(`Length mismatch while decoding chunk ${r}`);
    this._checkCrc ? checkCrc_(this, e + 4, r) : this.skip(4);
  }
  decodeApngChunk(e, r) {
    let t = this.offset;
    switch ((r !== "fdAT" && r !== "IDAT" && this._writingDataChunks && this.pushDataToFrame(), r)) {
      case "acTL":
        this.decodeACTL();
        break;
      case "fcTL":
        this.decodeFCTL();
        break;
      case "fdAT":
        this.decodeFDAT(e);
        break;
      default:
        (this.decodeChunk(e, r), (this.offset = t + e));
        break;
    }
    if (this.offset - t !== e) throw new Error(`Length mismatch while decoding chunk ${r}`);
    this._checkCrc ? checkCrc_(this, e + 4, r) : this.skip(4);
  }
  decodeIHDR() {
    let e = this._png;
    ((e.width = this.readUint32()), (e.height = this.readUint32()), (e.depth = checkBitDepth(this.readUint8())));
    let r = this.readUint8();
    this._colorType = r;
    let t;
    switch (r) {
      case go.GREYSCALE:
        t = 1;
        break;
      case go.TRUECOLOUR:
        t = 3;
        break;
      case go.INDEXED_COLOUR:
        t = 1;
        break;
      case go.GREYSCALE_ALPHA:
        t = 2;
        break;
      case go.TRUECOLOUR_ALPHA:
        t = 4;
        break;
      case go.UNKNOWN:
      default:
        throw new Error(`Unknown color type: ${r}`);
    }
    if (
      ((this._png.channels = t),
      (this._compressionMethod = this.readUint8()),
      this._compressionMethod !== MC.DEFLATE)
    )
      throw new Error(`Unsupported compression method: ${this._compressionMethod}`);
    ((this._filterMethod = this.readUint8()), (this._interlaceMethod = this.readUint8()));
  }
  decodeACTL() {
    ((this._numberOfFrames = this.readUint32()),
      (this._numberOfPlays = this.readUint32()),
      (this._isAnimated = !0));
  }
  decodeFCTL() {
    let e = {
      sequenceNumber: this.readUint32(),
      width: this.readUint32(),
      height: this.readUint32(),
      xOffset: this.readUint32(),
      yOffset: this.readUint32(),
      delayNumber: this.readUint16(),
      delayDenominator: this.readUint16(),
      disposeOp: this.readUint8(),
      blendOp: this.readUint8(),
      data: new Uint8Array(0),
    };
    this._frames.push(e);
  }
  decodePLTE(e) {
    if (e % 3 !== 0) throw new RangeError(`PLTE field length must be a multiple of 3. Got ${e}`);
    let r = e / 3;
    this._hasPalette = !0;
    let t = [];
    this._palette = t;
    for (let i = 0; i < r; i++) t.push([this.readUint8(), this.readUint8(), this.readUint8()]);
  }
  decodeIDAT(e) {
    this._writingDataChunks = !0;
    let r = e,
      t = this.offset + this.byteOffset;
    if ((this._inflator.push(new Uint8Array(this.buffer, t, r)), this._inflator.err))
      throw new Error(`Error while decompressing the data: ${this._inflator.err}`);
    this.skip(e);
  }
  decodeFDAT(e) {
    this._writingDataChunks = !0;
    let r = e,
      t = this.offset + this.byteOffset;
    if (((t += 4), (r -= 4), this._inflator.push(new Uint8Array(this.buffer, t, r)), this._inflator.err))
      throw new Error(`Error while decompressing the data: ${this._inflator.err}`);
    this.skip(e);
  }
  decodetRNS(e) {
    switch (this._colorType) {
      case go.GREYSCALE:
      case go.TRUECOLOUR: {
        if (e % 2 !== 0) throw new RangeError(`tRNS chunk length must be a multiple of 2. Got ${e}`);
        if (e / 2 > this._png.width * this._png.height)
          throw new Error(
            `tRNS chunk contains more alpha values than there are pixels (${e / 2} vs ${this._png.width * this._png.height})`,
          );
        ((this._hasTransparency = !0), (this._transparency = new Uint16Array(e / 2)));
        for (let r = 0; r < e / 2; r++) this._transparency[r] = this.readUint16();
        break;
      }
      case go.INDEXED_COLOUR: {
        if (e > this._palette.length)
          throw new Error(
            `tRNS chunk contains more alpha values than there are palette colors (${e} vs ${this._palette.length})`,
          );
        let r = 0;
        for (; r < e; r++) {
          let t = this.readByte();
          this._palette[r].push(t);
        }
        for (; r < this._palette.length; r++) this._palette[r].push(255);
        break;
      }
      case go.UNKNOWN:
      case go.GREYSCALE_ALPHA:
      case go.TRUECOLOUR_ALPHA:
      default:
        throw new Error(`tRNS chunk is not supported for color type ${this._colorType}`);
    }
  }
  decodeiCCP(e) {
    let r = readKeyword(this),
      t = this.readUint8();
    if (t !== MC.DEFLATE) throw new Error(`Unsupported iCCP compression method: ${t}`);
    let i = this.readBytes(e - r.length - 2);
    this._png.iccEmbeddedProfile = { name: r, profile: uZ(i) };
  }
  decodepHYs() {
    let e = this.readUint32(),
      r = this.readUint32(),
      t = this.readByte();
    this._png.resolution = { x: e, y: r, unit: t };
  }
  decodeApngImage() {
    ((this._apng.width = this._png.width),
      (this._apng.height = this._png.height),
      (this._apng.channels = this._png.channels),
      (this._apng.depth = this._png.depth),
      (this._apng.numberOfFrames = this._numberOfFrames),
      (this._apng.numberOfPlays = this._numberOfPlays),
      (this._apng.text = this._png.text),
      (this._apng.resolution = this._png.resolution));
    for (let e = 0; e < this._numberOfFrames; e++) {
      let r = {
          sequenceNumber: this._frames[e].sequenceNumber,
          delayNumber: this._frames[e].delayNumber,
          delayDenominator: this._frames[e].delayDenominator,
          data:
            this._apng.depth === 8
              ? new Uint8Array(this._apng.width * this._apng.height * this._apng.channels)
              : new Uint16Array(this._apng.width * this._apng.height * this._apng.channels),
        },
        t = this._frames.at(e);
      if (t) {
        if (
          ((t.data = decodeInterlaceNull({
            data: t.data,
            width: t.width,
            height: t.height,
            channels: this._apng.channels,
            depth: this._apng.depth,
          })),
          this._hasPalette && (this._apng.palette = this._palette),
          this._hasTransparency && (this._apng.transparency = this._transparency),
          e === 0 ||
            (t.xOffset === 0 &&
              t.yOffset === 0 &&
              t.width === this._png.width &&
              t.height === this._png.height))
        )
          r.data = t.data;
        else {
          let i = this._apng.frames.at(e - 1);
          (this.disposeFrame(t, i, r), this.addFrameDataToCanvas(r, t));
        }
        this._apng.frames.push(r);
      }
    }
    return this._apng;
  }
  disposeFrame(e, r, t) {
    switch (e.disposeOp) {
      case mZ.NONE:
        break;
      case mZ.BACKGROUND:
        for (let i = 0; i < this._png.height; i++)
          for (let s = 0; s < this._png.width; s++) {
            let o = (i * e.width + s) * this._png.channels;
            for (let d = 0; d < this._png.channels; d++) t.data[o + d] = 0;
          }
        break;
      case mZ.PREVIOUS:
        t.data.set(r.data);
        break;
      default:
        throw new Error("Unknown disposeOp");
    }
  }
  addFrameDataToCanvas(e, r) {
    let t = 1 << this._png.depth,
      i = n((s, o) => {
        let d = ((s + r.yOffset) * this._png.width + r.xOffset + o) * this._png.channels,
          c = (s * r.width + o) * this._png.channels;
        return { index: d, frameIndex: c };
      }, "calculatePixelIndices");
    switch (r.blendOp) {
      case eie.SOURCE:
        for (let s = 0; s < r.height; s++)
          for (let o = 0; o < r.width; o++) {
            let { index: d, frameIndex: c } = i(s, o);
            for (let f = 0; f < this._png.channels; f++) e.data[d + f] = r.data[c + f];
          }
        break;
      case eie.OVER:
        for (let s = 0; s < r.height; s++)
          for (let o = 0; o < r.width; o++) {
            let { index: d, frameIndex: c } = i(s, o);
            for (let f = 0; f < this._png.channels; f++) {
              let l = r.data[c + this._png.channels - 1] / t,
                b = f % (this._png.channels - 1) === 0 ? 1 : r.data[c + f],
                _ = Math.floor(l * b + (1 - l) * e.data[d + f]);
              e.data[d + f] += _;
            }
          }
        break;
      default:
        throw new Error("Unknown blendOp");
    }
  }
  decodeImage() {
    if (this._inflator.err) throw new Error(`Error while decompressing the data: ${this._inflator.err}`);
    let e = this._isAnimated ? (this._frames?.at(0)).data : this._inflator.result;
    if (this._filterMethod !== pZ.ADAPTIVE)
      throw new Error(`Filter method ${this._filterMethod} not supported`);
    if (this._interlaceMethod === Hh.NO_INTERLACE)
      this._png.data = decodeInterlaceNull({
        data: e,
        width: this._png.width,
        height: this._png.height,
        channels: this._png.channels,
        depth: this._png.depth,
      });
    else if (this._interlaceMethod === Hh.ADAM7)
      this._png.data = decodeInterlaceAdam7({
        data: e,
        width: this._png.width,
        height: this._png.height,
        channels: this._png.channels,
        depth: this._png.depth,
      });
    else throw new Error(`Interlace method ${this._interlaceMethod} not supported`);
    (this._hasPalette && (this._png.palette = this._palette),
      this._hasTransparency && (this._png.transparency = this._transparency));
  }
  pushDataToFrame() {
    let e = this._inflator.result,
      r = this._frames.at(-1);
    (r
      ? (r.data = e)
      : this._frames.push({
          sequenceNumber: 0,
          width: this._png.width,
          height: this._png.height,
          xOffset: 0,
          yOffset: 0,
          delayNumber: 0,
          delayDenominator: 0,
          disposeOp: mZ.NONE,
          blendOp: eie.SOURCE,
          data: e,
        }),
      (this._inflator = new aOe()),
      (this._writingDataChunks = !1));
  }
}
