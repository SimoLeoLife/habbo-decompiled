// Extracted from HabboAirLauncher.deobf.js, line 181079.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _id2a85955f014d7

class extends RoomObjectUpdateStateMessage {
  constructor(r) {
    super();
    this.var_857 = r;
  }
  static {
    n(this, "UnkRoomObjectUpdateStateMessageSubclass_d2a859");
  }
  get isBlocked() {
    return this.var_857;
  }
}
