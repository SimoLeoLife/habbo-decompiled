// Extracted from HabboAirLauncher.deobf.js, line 60693.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/utils/StringUtil.as
// Obfuscated name: _i3390754ca39a3e

class extends UnkClass_8b3e50 {
  static {
    n(this, "StringUtil");
  }
  var_2176 = {};
  _r881522143b78d2 = null;
  _r07285bc6a5d7ab = !0;
  constructor(e, r = null, t = -1) {
    super(e, r, t);
  }
  get content() {
    if (!this._r07285bc6a5d7ab) return this._r881522143b78d2;
    let e = this._r8cca79960d0631();
    if (e.length < 1) return null;
    if (((this._r07285bc6a5d7ab = !1), (this._r881522143b78d2 = null), this._type === "image/png"))
      try {
        let r = e.clone();
        ((r.position = 0), (this._r881522143b78d2 = new UnkClass_3a5c6f(new UnkClass_fdd920().decode(r))));
      } catch {
        this._r881522143b78d2 = null;
      }
    return this._r881522143b78d2;
  }
  get bytes() {
    return this._r8cca79960d0631();
  }
  get loaderContext() {
    return this.var_2176;
  }
  load(e) {
    (this._r1a20e3d056ee98(), super.load(e));
  }
  dispose() {
    (this._r1a20e3d056ee98(), super.dispose());
  }
  _r8cca79960d0631() {
    let e = this._data ?? this._loader?.data ?? null;
    return e instanceof re ? e : typeof e == "string" ? re._r2e42fd51a500c0(e) : new re();
  }
  _r1a20e3d056ee98() {
    ((this._r881522143b78d2 = null), (this._r07285bc6a5d7ab = !0));
  }
}
