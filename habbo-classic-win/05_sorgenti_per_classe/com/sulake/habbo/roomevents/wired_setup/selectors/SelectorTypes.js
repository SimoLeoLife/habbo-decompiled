// Estratto da HabboAirLauncher.deobf.js, riga 368496.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/selectors/SelectorTypes.as
// Nome offuscato: _ib06cf7ddef4dc5

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
      this._types.push(new _ia322464c2d6d90()),
      this._types.push(new _i0de1d913d44e50()),
      this._types.push(new _i92051385eb1c24()),
      this._types.push(new _ib24fbefe4b7aa1()),
      this._types.push(new Yke()),
      this._types.push(new _i6cbdab4a8912e5()),
      this._types.push(new UsersByName()),
      this._types.push(new _ic12d05158abd1f()),
      this._types.push(new _i9ed7fc18105f88()),
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
