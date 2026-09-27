// Estratto da HabboAirLauncher.deobf.js, riga 61985.

class {
  static {
    n(this, "_ie6a0f66e9b875c");
  }
  _r82bfff35a25e33;
  _r90a2f7df1f562e;
  constructor(e, r = 0) {
    ((this._r82bfff35a25e33 = e), (this._r90a2f7df1f562e = r));
  }
  getHashSize() {
    return this._r90a2f7df1f562e !== 0
      ? this._r90a2f7df1f562e / 8
      : (this._r82bfff35a25e33?.getHashSize() ?? 0);
  }
  compute(e, r) {
    if (this._r82bfff35a25e33 == null) throw new Error("HMAC has been disposed.");
    let t = this._r82bfff35a25e33._r02236959299277(),
      i = e.length > t ? this._r82bfff35a25e33.hash(e) : re.compress(e.toUint8Array());
    for (; i.length < t;) i.writeByte(0);
    let s = i.toUint8Array(),
      o = new re(),
      d = new re();
    for (let l of s) (o.writeByte(l ^ 54), d.writeByte(l ^ 92));
    ((o.position = s.length), o.writeBytes(r));
    let c = this._r82bfff35a25e33.hash(o);
    ((d.position = s.length), d.writeBytes(c));
    let f = this._r82bfff35a25e33.hash(d);
    return (
      this._r90a2f7df1f562e > 0 &&
        this._r90a2f7df1f562e < 8 * f.length &&
        (f.length = this._r90a2f7df1f562e / 8),
      (f.position = 0),
      f
    );
  }
  dispose() {
    ((this._r82bfff35a25e33 = null), (this._r90a2f7df1f562e = 0));
  }
  toString() {
    return `hmac-${this._r90a2f7df1f562e > 0 ? `${this._r90a2f7df1f562e}-` : ""}${this._r82bfff35a25e33?.toString() ?? ""}`;
  }
}
