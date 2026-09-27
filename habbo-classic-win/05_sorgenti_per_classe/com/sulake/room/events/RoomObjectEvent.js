// Extracted from HabboAirLauncher.deobf.js, line 180622.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/room/events/RoomObjectEvent.as
// Obfuscated name: _i083a46c1e8de69

class extends M {
  constructor(r, t, i = !1, s = !1) {
    super(r, i, s);
    this.var_627 = t;
  }
  static {
    n(this, "RoomObjectEvent");
  }
  get object() {
    return this.var_627;
  }
  get objectId() {
    return this.var_627 != null ? this.var_627.getId() : -1;
  }
  get objectType() {
    return this.var_627 != null ? this.var_627.getType() : null;
  }
}
