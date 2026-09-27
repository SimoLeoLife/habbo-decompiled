// Extracted from HabboAirLauncher.deobf.js, line 64303.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i6d6ab0e3a4eb80

class {
  static {
    n(this, "UnkClass_6d6ab0");
  }
  mode;
  cipher;
  constructor(e) {
    ((this.mode = e), (this.cipher = e));
  }
  _r6a35379c3690c0() {
    return this.mode?._r6a35379c3690c0() ?? 0;
  }
  dispose() {
    (this.mode?.dispose(), (this.mode = null), (this.cipher = null), class_4036.gc());
  }
  encrypt(e) {
    this.cipher?.encrypt(e);
    let r = new re();
    (r.writeBytes(this.mode?.IV ?? new re()), r.writeBytes(e), e.clear(), e.writeBytes(r), (e.position = 0));
  }
  decrypt(e) {
    let r = new re();
    (r.writeBytes(e, 0, this._r6a35379c3690c0()), (r.position = 0), this.mode != null && (this.mode.IV = r));
    let t = new re();
    (t.writeBytes(e, this._r6a35379c3690c0()),
      (t.position = 0),
      this.cipher?.decrypt(t),
      e.clear(),
      e.writeBytes(t),
      (e.position = 0));
  }
  toString() {
    return `simple-${this.cipher?.toString() ?? ""}`;
  }
}
