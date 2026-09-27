// Extracted from HabboAirLauncher.deobf.js, line 369381.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/WiredUIBuilder.as
// Obfuscated name: _id303686a94bf12

class {
  constructor(e, r, t, i, s = !1) {
    this.var_102 = e;
    this.var_2897 = r;
    this._holderKey = t;
    this._code = i;
    this.var_5237 = s;
    this.var_2686 = [];
  }
  static {
    n(this, "WiredUIBuilder");
  }
  var_2686;
  _frame = null;
  _initialWidth = 0;
  addElements(...e) {
    for (let r of e) this.var_2686.push(r);
  }
  get frame() {
    return this._frame;
  }
  build(e = 1, r = !1) {
    let t = null;
    (r && (t = new ListScrollParams(!1, 0, UnkClass_c7f867._rd4b507212bb7db / 1.8, !0, !0)),
      (this._frame = this.var_102._r2c9ac233cf1a70(
        this.var_2686,
        this.var_2897,
        this._holderKey,
        this._code,
        this.var_5237,
        !0,
        t,
      )),
      (this.var_2686 = null),
      (this._initialWidth = this._frame.window.width),
      this._frame.resizeToWidth(this._initialWidth * e));
  }
  get initialWidth() {
    return this._initialWidth;
  }
}
