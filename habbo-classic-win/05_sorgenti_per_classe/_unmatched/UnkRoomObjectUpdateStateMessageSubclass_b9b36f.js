// Extracted from HabboAirLauncher.deobf.js, line 181319.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ib9b36ff7f03806

class extends RoomObjectUpdateStateMessage {
  constructor(r) {
    super();
    this._selected = r;
  }
  static {
    n(this, "UnkRoomObjectUpdateStateMessageSubclass_b9b36f");
  }
  get selected() {
    return this._selected;
  }
}
