// Extracted from HabboAirLauncher.deobf.js, line 50151.

class a {
  constructor(e = "", r = a._r2acd7241b8124d, t = a.REGULAR) {
    this.fontName = e;
    this._rc51bdfc62a7f70 = r;
    this.fontStyle = t;
  }
  static {
    n(this, "Font");
  }
  static EMBEDDED = "embedded";
  static _r2acd7241b8124d = "device";
  static REGULAR = "regular";
  static _r3efe095548c85d = [];
  static _r7c57e81afe5837(e) {
    let r = new e();
    r instanceof a && !this._r3efe095548c85d.includes(r) && this._r3efe095548c85d.push(r);
  }
  static _r615ad07097b75f(e = !1) {
    return e
      ? this._r3efe095548c85d.slice()
      : this._r3efe095548c85d.filter((r) => r._rc51bdfc62a7f70 !== a._r2acd7241b8124d);
  }
  _r4bbca9adc7b79e(e) {
    return !0;
  }
}
