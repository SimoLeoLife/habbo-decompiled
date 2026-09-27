// Extracted from HabboAirLauncher.deobf.js, line 181426.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ia7e9a08c5b7a4d

class extends RoomObjectUpdateStateMessage {
  constructor(r) {
    super();
    this.var_828 = r;
  }
  static {
    n(this, "UnkRoomObjectUpdateStateMessageSubclass_a7e9a0");
  }
  get itemType() {
    return this.var_828;
  }
}
