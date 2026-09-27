// Extracted from HabboAirLauncher.deobf.js, line 144486.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i7d032bc382f616

class extends UnkClass_c4d6c8 {
  constructor(r, t, i = !1, s = !1) {
    super(CatalogWidgetEventEnum.APPROVE_NAME_RESULT, i, s);
    this.var_1241 = r;
    this._nameValidationInfo = t;
  }
  static {
    n(this, "UnkClass_7d032b");
  }
  get result() {
    return this.var_1241;
  }
  get _r549e697cdd257f() {
    return this._nameValidationInfo;
  }
}
