// Estratto da HabboAirLauncher.deobf.js, riga 64709.

class {
  static {
    n(this, "_i7e089ec24f5a70");
  }
  var_236;
  _r737cc312839167;
  _r5434b1180a688b = [];
  constructor(e = 0, r = 0, t = null) {
    if (((this.var_236 = e), (this._r737cc312839167 = r), t instanceof re)) this.parse(t);
    else if (typeof t == "string") this.generate(t);
    else throw new Error("Invalid call to new ObjectIdentifier");
  }
  dump() {
    return `OID[${this.var_236}][${this._r737cc312839167}][${this.toString()}]`;
  }
  getLength() {
    return this._r737cc312839167;
  }
  getType() {
    return this.var_236;
  }
  toDER() {
    let e = [];
    e[0] = Number(this._r5434b1180a688b[0] ?? 0) * 40 + Number(this._r5434b1180a688b[1] ?? 0);
    for (let t = 2; t < this._r5434b1180a688b.length; t++) {
      let i = Number.parseInt(this._r5434b1180a688b[t] ?? "0", 10);
      if (i < 128) e.push(i);
      else if (i < 16384) (e.push((i >> 7) | 128), e.push(i & 127));
      else if (i < 16384 * 128) (e.push((i >> 14) | 128), e.push(((i >> 7) & 127) | 128), e.push(i & 127));
      else if (i < 16384 * 128 * 128)
        (e.push((i >> 21) | 128),
          e.push(((i >> 14) & 127) | 128),
          e.push(((i >> 7) & 127) | 128),
          e.push(i & 127));
      else throw new Error("OID element bigger than we thought. :(");
    }
    ((this._r737cc312839167 = e.length), this.var_236 === 0 && (this.var_236 = 6));
    let r = new re();
    (r.writeByte(this.var_236), r.writeByte(this._r737cc312839167));
    for (let t of e) r.writeByte(t);
    return ((r.position = 0), r);
  }
  toString() {
    return `${Gs.indent}${this._r5434b1180a688b.join(".")}`;
  }
  generate(e) {
    this._r5434b1180a688b = e.split(".");
  }
  parse(e) {
    let r = e.readUnsignedByte(),
      t = [];
    (t.push(Math.floor(r / 40)), t.push(r % 40));
    let i = 0;
    for (; e.bytesAvailable > 0;) {
      let s = e.readUnsignedByte(),
        o = (s & 128) === 0;
      ((s &= 127), (i = i * 128 + s), o && (t.push(i), (i = 0)));
    }
    this._r5434b1180a688b = t.map((s) => String(s));
  }
}
