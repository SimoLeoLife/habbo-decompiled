// Extracted from HabboAirLauncher.deobf.js, line 348615.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ia3fbb4075934db

class {
  constructor(e, r) {
    this.var_1308 = e;
    this._name = r;
  }
  static {
    n(this, "UnkClass_a3fbb4");
  }
  _children = new B();
  get name() {
    return this._name;
  }
  get variable() {
    return this.var_1308;
  }
  get children() {
    return this._children.getValues();
  }
  get variableNode() {
    return this._children.length;
  }
  _r96efd6bcfb9bd2(e) {
    return this._children.getValue(e) ?? null;
  }
  _r0db14f6f7b27c4(e) {
    this._children.add(e.name, e);
  }
  flatten(e = !1) {
    if (this._children.length === 1 && this.var_1308 == null) {
      let t = this._children.getValues()[0];
      t.flatten() && ((this.var_1308 = t.variable), (this._children = new B()));
    }
    let r = this.var_1308 != null && this._children.length === 0;
    return (e && r && (this._name = this.var_1308.variableName), r);
  }
  _r70b9577f42d34d(e) {
    return !(
      this.var_1308 == null ||
      (e._r963ee624ff95ca != null && !e._r963ee624ff95ca(this.var_1308))
    );
  }
  _rf078988d47175b(e) {
    if (this._r70b9577f42d34d(e)) return !1;
    for (let r of this._children.getValues()) if (!r._rf078988d47175b(e)) return !1;
    return !0;
  }
}
