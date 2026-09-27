// Extracted from HabboAirLauncher.deobf.js, line 253387.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/TextFieldManager.as
// Obfuscated name: _i8d256e2ef99201

class {
  constructor(e, r, t = 1e3, i = null, s = null) {
    this._navigator = e;
    this._input = r;
    this._r7cc5c93ea893d6 = t;
    this._r4110d1990e191c = i;
    if (this._input == null) {
      ((this._r780b4cbacb2e96 = !1), (this._r7e53360081d634 = 0));
      return;
    }
    ((this._input._r4c2336e24c69cc = t),
      s != null && ((this._includeInfo = !0), (this.var_3901 = s), (this._input.text = s)),
      Fr._r95dd5e276dc45a(this._input, this._r31bde35de2b894),
      this._input.addEventListener(sr.const_1081, this._r03e7b22b0c12ae),
      this._input.addEventListener(y.WINDOW_EVENT_CHANGE, this._r591646125c87aa),
      (this._r780b4cbacb2e96 = this._input._r84076acb78d7db),
      (this._r7e53360081d634 = this._input._errorPopup));
  }
  static {
    n(this, "TextFieldManager");
  }
  _includeInfo = !1;
  var_3901 = "";
  _r06357fc6c546b4 = "";
  _r6fa246f5097cb3 = null;
  _r780b4cbacb2e96;
  _r7e53360081d634;
  dispose() {
    (this._input?.dispose(),
      (this._input = null),
      this._r6fa246f5097cb3?.dispose(),
      (this._r6fa246f5097cb3 = null),
      (this._navigator = null));
  }
  get input() {
    return this._input;
  }
  _r69708b20ae80da(e) {
    return this._r5b51b2bec90964() ? (this._raee3b01a5851a6(), !0) : (this.displayError(e), !1);
  }
  _raee3b01a5851a6() {
    this._input != null &&
      ((this._input._r84076acb78d7db = this._r780b4cbacb2e96),
      (this._input._errorPopup = this._r7e53360081d634));
  }
  displayError(e) {
    if (this._input == null || this._navigator == null) return;
    if (
      ((this._input._r84076acb78d7db = !0),
      (this._input._errorPopup = 4294021019),
      this._r6fa246f5097cb3 == null)
    ) {
      if (
        ((this._r6fa246f5097cb3 = this._navigator.getXmlWindow("nav_error_popup")),
        this._r6fa246f5097cb3 == null)
      )
        return;
      (this._navigator.refreshButton(this._r6fa246f5097cb3, "popup_arrow_down", !0, null, 0),
        this._input.parent?.addChild(this._r6fa246f5097cb3));
    }
    let r = this._r6fa246f5097cb3.findChildByName("error_text");
    if (r == null) return;
    ((r.text = e), (r.width = r.textWidth + 5));
    let t = this._r6fa246f5097cb3.findChildByName("border");
    (t != null && (t.width = r.width + 15), (this._r6fa246f5097cb3.width = r.width + 15));
    let i = new E();
    (this._input.getLocalPosition(i),
      (this._r6fa246f5097cb3.x = i.x),
      (this._r6fa246f5097cb3.y = i.y - this._r6fa246f5097cb3.height + 3));
    let s = this._r6fa246f5097cb3.findChildByName("popup_arrow_down");
    (s != null && (s.x = this._r6fa246f5097cb3.width / 2 - s.width / 2),
      (this._r6fa246f5097cb3.x += (this._input.width - this._r6fa246f5097cb3.width) / 2),
      (this._r6fa246f5097cb3.visible = !0));
  }
  goBackToInitialState() {
    (this.clearErrors(),
      this._input != null &&
        (this.var_3901 !== ""
          ? ((this._input.text = this.var_3901), (this._includeInfo = !0))
          : ((this._input.text = ""), (this._includeInfo = !1))));
  }
  getText() {
    return this._includeInfo ? this._r06357fc6c546b4 : (this._input?.text ?? "");
  }
  setText(e) {
    ((this._includeInfo = !1), this._input != null && (this._input.text = e));
  }
  clearErrors() {
    (this._raee3b01a5851a6(), this._r6fa246f5097cb3 != null && (this._r6fa246f5097cb3.visible = !1));
  }
  _r5b51b2bec90964() {
    return !this._includeInfo && (Fr.trim(this.getText())?.length ?? 0) > 2;
  }
  _r31bde35de2b894 = n((...e) => {
    e[0].type !== y.const_962 ||
      !this._includeInfo ||
      this._input == null ||
      ((this._input.text = this._r06357fc6c546b4), (this._includeInfo = !1), this._raee3b01a5851a6());
  }, "_r31bde35de2b894");
  _r03e7b22b0c12ae = n((...e) => {
    e[0].charCode === Fi.ENTER && this._r4110d1990e191c?.();
  }, "_r03e7b22b0c12ae");
  _r591646125c87aa = n((...e) => {
    if (this._input == null) return;
    let r = this._input.text;
    r.length > this._r7cc5c93ea893d6 && (this._input.text = r.substring(0, this._r7cc5c93ea893d6));
  }, "_r591646125c87aa");
}
