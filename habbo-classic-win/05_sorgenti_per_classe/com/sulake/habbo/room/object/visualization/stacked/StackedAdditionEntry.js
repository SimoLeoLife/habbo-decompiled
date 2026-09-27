// Extracted from HabboAirLauncher.deobf.js, line 273781.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/stacked/StackedAdditionEntry.as
// Obfuscated name: _idcd565c9fc5fc2

class {
  constructor(e, r, t = 0, i = 0, s = "") {
    this.addition = e;
    this.layer = r;
    this.createdAt = t;
    this.configId = i;
    this.variableId = s;
    this.variableId = s ?? "";
  }
  static {
    n(this, "StackedAdditionEntry");
  }
  sprite = new LI();
  y = new ag(0.003, 0.35, 0.01, 0.004);
  _r76dd45d6f3ddec = !0;
  _initialized = !1;
  var_1425 = 0;
  setTarget(e, r) {
    if (!this._initialized)
      return (this.y.var_1190(e, r), (this.var_1425 = e), (this._initialized = !0), !0);
    if (this.var_1425 === e) return !1;
    let t = this.y.value;
    return ((this.var_1425 = e), this.y.setTarget(e, r), this.y.value !== t);
  }
  _r396e3634dbdf5a(e) {
    return this._initialized && this.y.needsUpdate(e, 1);
  }
  _ra444a9470e0fb7(e) {
    let r = this.y.update(e);
    return (this.y.var_1190(this.y.value, e), (this.var_1425 = this.y.value), r);
  }
  dispose() {
    (this.addition != null && (this.addition.dispose(), (this.addition = null)),
      this.sprite != null && (this.sprite.dispose(), (this.sprite = null)));
  }
}
