// Extracted from HabboAirLauncher.deobf.js, line 60574.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i97d37f52ba43cc

class {
  static {
    n(this, "UnkClass_97d37f");
  }
  static _r7504758358a254 = new B();
  static _rd9f6e42ba1d719 = new B();
  static _init = !1;
  static {
    this.init();
  }
  static _r44bcc8b2072ad9(e) {
    return this._r7504758358a254.getValue(e) != null;
  }
  static _r39622b61201748(e) {
    return this._rd9f6e42ba1d719.getValue(e) != null;
  }
  static get _r219d6ea7e43ad4() {
    return this._r7504758358a254;
  }
  static get _rcc8585fc959476() {
    return this._rd9f6e42ba1d719;
  }
  static _r7c57e81afe5837(e) {
    Wd._r7c57e81afe5837(e);
    let r = _iad1dc21ca35e21(e),
      t = Wd._r615ad07097b75f(!1),
      i = null;
    for (let s = t.length; s > 0; s--) {
      let o = t[s - 1] ?? null;
      if (o != null && _iad1dc21ca35e21(o) === r) {
        i = o;
        break;
      }
    }
    return (
      i == null && (i = new Wd(r, Wd.EMBEDDED, Wd.REGULAR)),
      this._rd9f6e42ba1d719.add(i.fontName, i),
      i
    );
  }
  static refresh() {
    let e = Wd._r615ad07097b75f(!1);
    for (let r of e) {
      let t = this._rd9f6e42ba1d719.getValue(r.fontName);
      (t == null || t._rc51bdfc62a7f70 !== r._rc51bdfc62a7f70 || t.fontStyle !== r.fontStyle) &&
        this._rd9f6e42ba1d719.add(r.fontName, r);
    }
  }
  static init() {
    if (!this._init) {
      let e = Wd._r615ad07097b75f(!0),
        r = Wd._r615ad07097b75f(!1);
      for (let t of e) r.includes(t) || this._r7504758358a254.add(t.fontName, t);
      this._init = !0;
    }
  }
}
