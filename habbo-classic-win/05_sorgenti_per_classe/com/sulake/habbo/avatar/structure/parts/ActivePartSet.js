// Extracted from HabboAirLauncher.deobf.js, line 170508.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/structure/parts/ActivePartSet.as
// Obfuscated name: _ibdbcb98261ec17

class {
  static {
    n(this, "ActivePartSet");
  }
  _id;
  _parts;
  constructor(e) {
    ((this._id = _ifdbe20062cc5b0(e, "id")), (this._parts = _ib5ee1bd09422e6(e, "activePart").map((r) => _ifdbe20062cc5b0(r, "set-type"))));
  }
  get id() {
    return this._id;
  }
  get parts() {
    return this._parts;
  }
}
