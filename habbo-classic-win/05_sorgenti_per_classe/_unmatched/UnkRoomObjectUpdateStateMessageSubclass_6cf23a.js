// Extracted from HabboAirLauncher.deobf.js, line 181303.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i6cf23aa1345e3c

class extends RoomObjectUpdateStateMessage {
  constructor(r, t = "") {
    super();
    this._r89ede475699ba4 = r;
    this.var_2471 = t;
  }
  static {
    n(this, "UnkRoomObjectUpdateStateMessageSubclass_6cf23a");
  }
  get _r78db360a2bb963() {
    return this._r89ede475699ba4;
  }
  get parameter() {
    return this.var_2471;
  }
}
