// Extracted from HabboAirLauncher.deobf.js, line 368496.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/selectors/SelectorTypes.as
// Obfuscated name: _ib06cf7ddef4dc5

class {
  static {
    n(this, "SelectorTypes");
  }
  _types = [];
  constructor() {
    (this._types.push(new class_3905()),
      this._types.push(new class_4167()),
      this._types.push(new class_4282()),
      this._types.push(new class_4061()),
      this._types.push(new class_3966()),
      this._types.push(new UnkDefaultSelectorTypeSubclass_a32246()),
      this._types.push(new UnkClass_0de1d9()),
      this._types.push(new UnkClass_920513()),
      this._types.push(new UnkDefaultSelectorTypeSubclass_b24fbe()),
      this._types.push(new Yke()),
      this._types.push(new UnkDefaultSelectorTypeSubclass_6cbdab()),
      this._types.push(new UsersByName()),
      this._types.push(new UnkClass_c12d05()),
      this._types.push(new UnkClass_9ed7fc()),
      this._types.push(new Kke()),
      this._types.push(new jke()),
      this._types.push(new FurniWithAltitude()),
      this._types.push(new class_4204()),
      this._types.push(new class_4231()),
      this._types.push(new class_4098()));
  }
  _r15cee347bb0477(e) {
    for (let r of this._types) if (r.code === e) return r;
    return null;
  }
  getKey() {
    return "selector";
  }
  _r58bebf6acaa0b3(e) {
    return e instanceof SelectorDefinition;
  }
}
