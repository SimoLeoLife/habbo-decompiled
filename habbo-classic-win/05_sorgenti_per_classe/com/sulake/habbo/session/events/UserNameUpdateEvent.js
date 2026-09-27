// Extracted from HabboAirLauncher.deobf.js, line 145315.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/events/UserNameUpdateEvent.as
// Obfuscated name: _i69fa3993b80504

class a extends M {
  static {
    n(this, "UserNameUpdateEvent");
  }
  static NAME_UPDATE = "unue_name_updated";
  _name;
  constructor(e, r = !1, t = !1) {
    (super(a.NAME_UPDATE, r, t), (this._name = e));
  }
  get name() {
    return this._name;
  }
}
