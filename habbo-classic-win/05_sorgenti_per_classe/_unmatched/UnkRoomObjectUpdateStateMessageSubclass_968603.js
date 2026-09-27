// Extracted from HabboAirLauncher.deobf.js, line 181091.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i968603e8bbf77b

class extends RoomObjectUpdateStateMessage {
  constructor(r, t) {
    super();
    this.var_828 = r;
    this._r11b610a4a5d895 = t;
  }
  static {
    n(this, "UnkRoomObjectUpdateStateMessageSubclass_968603");
  }
  get itemType() {
    return this.var_828;
  }
  get itemName() {
    return this._r11b610a4a5d895;
  }
}
