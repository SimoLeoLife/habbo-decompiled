// Extracted from HabboAirLauncher.deobf.js, line 66004.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/events/WindowLinkEvent.as
// Obfuscated name: _i103754db5ae282

class a extends y {
  static {
    n(this, "WindowLinkEvent");
  }
  static const_180 = "WE_LINK";
  static _r444520cb63f340 = [];
  var_933 = "";
  constructor() {
    (super(), (this._type = a.const_180));
  }
  get link() {
    return this.var_933;
  }
  static allocate(e, r, t) {
    let i = a._r444520cb63f340.pop() ?? new a();
    return (
      (i.var_933 = e),
      (i._window = r),
      (i.var_1451 = t),
      (i.var_119 = !1),
      (i._pool = a._r444520cb63f340),
      i
    );
  }
  clone() {
    return a.allocate(this.var_933, this.window, this.related);
  }
  toString() {
    return `WindowLinkEvent { type: ${this.type} link: ${this.link} cancelable: ${this.cancelable} window: ${this.window} }`;
  }
}
