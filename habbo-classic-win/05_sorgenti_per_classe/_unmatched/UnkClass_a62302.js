// Extracted from HabboAirLauncher.deobf.js, line 62027.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ia62302643898cb

class {
  static {
    n(this, "UnkClass_a62302");
  }
  _r82bfff35a25e33;
  _r90a2f7df1f562e;
  _r7c29cd6858c65b = null;
  _rd28f66e3530c20 = null;
  _r81d46aaa26d7ef = new re();
  _raf155322e9778c = new re();
  constructor(e, r = 0) {
    ((this._r82bfff35a25e33 = e), (this._r90a2f7df1f562e = r), this._rd544288ddb5b9f());
  }
  _r477bde33d605a7(e) {}
  getHashSize() {
    return this._r90a2f7df1f562e !== 0
      ? this._r90a2f7df1f562e / 8
      : (this._r82bfff35a25e33?.getHashSize() ?? 0);
  }
  compute(e, r) {
    if (this._r82bfff35a25e33 == null) throw new Error("MAC has been disposed.");
    (this._rd544288ddb5b9f(),
      (this._r81d46aaa26d7ef.length = 0),
      (this._raf155322e9778c.length = 0),
      (this._r81d46aaa26d7ef.position = 0),
      (this._raf155322e9778c.position = 0),
      this._r81d46aaa26d7ef.writeBytes(e),
      this._r81d46aaa26d7ef.writeBytes(this._r7c29cd6858c65b ?? new re()),
      this._r81d46aaa26d7ef.writeBytes(r));
    let t = this._r82bfff35a25e33.hash(this._r81d46aaa26d7ef);
    (this._raf155322e9778c.writeBytes(e),
      this._raf155322e9778c.writeBytes(this._rd28f66e3530c20 ?? new re()),
      this._raf155322e9778c.writeBytes(t));
    let i = this._r82bfff35a25e33.hash(this._raf155322e9778c);
    return (
      this._r90a2f7df1f562e > 0 &&
        this._r90a2f7df1f562e < 8 * i.length &&
        (i.length = this._r90a2f7df1f562e / 8),
      (i.position = 0),
      i
    );
  }
  dispose() {
    ((this._r82bfff35a25e33 = null),
      (this._r90a2f7df1f562e = 0),
      (this._r7c29cd6858c65b = null),
      (this._rd28f66e3530c20 = null));
  }
  toString() {
    return `mac-${this._r90a2f7df1f562e > 0 ? `${this._r90a2f7df1f562e}-` : ""}${this._r82bfff35a25e33?.toString() ?? ""}`;
  }
  _rd544288ddb5b9f() {
    if (this._r82bfff35a25e33 == null || this._r7c29cd6858c65b != null || this._rd28f66e3530c20 != null)
      return;
    let e = this._r82bfff35a25e33._r17f02e8a2ec2c1();
    ((this._r7c29cd6858c65b = new re()), (this._rd28f66e3530c20 = new re()));
    for (let r = 0; r < e; r++) (this._r7c29cd6858c65b.writeByte(54), this._rd28f66e3530c20.writeByte(92));
  }
}
