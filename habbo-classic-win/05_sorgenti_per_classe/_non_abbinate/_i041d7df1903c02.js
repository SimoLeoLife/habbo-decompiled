// Estratto da HabboAirLauncher.deobf.js, riga 64365.

class a {
  static {
    n(this, "_i041d7df1903c02");
  }
  _rbe61be65fd88fe = 64;
  _rae9295cfdcdcf3;
  constructor(e) {
    ((e.position = 0),
      (this._rae9295cfdcdcf3 = [
        e.readUnsignedInt(),
        e.readUnsignedInt(),
        e.readUnsignedInt(),
        e.readUnsignedInt(),
      ]));
  }
  static _ref9aa91e705125(e) {
    let r = new re();
    return (
      r.writeUnsignedInt(parseInt(e.substr(0, 8), 16)),
      r.writeUnsignedInt(parseInt(e.substr(8, 8), 16)),
      r.writeUnsignedInt(parseInt(e.substr(16, 8), 16)),
      r.writeUnsignedInt(parseInt(e.substr(24, 8), 16)),
      (r.position = 0),
      new a(r)
    );
  }
  _r6a35379c3690c0() {
    return 8;
  }
  encrypt(e, r = 0) {
    e.position = r;
    let t = e.readUnsignedInt() >>> 0,
      i = e.readUnsignedInt() >>> 0,
      s = 0,
      o = 2654435769;
    for (let l = 0; l < this._rbe61be65fd88fe; l++)
      ((t = (t + ((((i << 4) ^ (i >>> 5)) + i) ^ ((s + this._rae9295cfdcdcf3[s & 3]) >>> 0))) >>> 0),
        (s = (s + o) >>> 0),
        (i =
          (i + ((((t << 4) ^ (t >>> 5)) + t) ^ ((s + this._rae9295cfdcdcf3[(s >>> 11) & 3]) >>> 0))) >>> 0));
    let d = new re();
    (d.writeUnsignedInt(t), d.writeUnsignedInt(i));
    let c = _i7ecbd892c1ed79(e),
      f = _i7ecbd892c1ed79(d);
    (c.splice(r, f.length, ...f), _i6d98cc79e4bd76(e, c));
  }
  decrypt(e, r = 0) {
    e.position = r;
    let t = e.readUnsignedInt() >>> 0,
      i = e.readUnsignedInt() >>> 0,
      s = 2654435769,
      o = (s * this._rbe61be65fd88fe) >>> 0;
    for (let l = 0; l < this._rbe61be65fd88fe; l++)
      ((i = (i - ((((t << 4) ^ (t >>> 5)) + t) ^ ((o + this._rae9295cfdcdcf3[(o >>> 11) & 3]) >>> 0))) >>> 0),
        (o = (o - s) >>> 0),
        (t = (t - ((((i << 4) ^ (i >>> 5)) + i) ^ ((o + this._rae9295cfdcdcf3[o & 3]) >>> 0))) >>> 0));
    let d = new re();
    (d.writeUnsignedInt(t), d.writeUnsignedInt(i));
    let c = _i7ecbd892c1ed79(e),
      f = _i7ecbd892c1ed79(d);
    (c.splice(r, f.length, ...f), _i6d98cc79e4bd76(e, c));
  }
  dispose() {
    let e = new Random();
    for (let r = 0; r < this._rae9295cfdcdcf3.length; r++) this._rae9295cfdcdcf3[r] = e.nextByte();
    ((this._rae9295cfdcdcf3 = []), e.dispose(), class_4036.gc());
  }
  toString() {
    return "xtea";
  }
}
