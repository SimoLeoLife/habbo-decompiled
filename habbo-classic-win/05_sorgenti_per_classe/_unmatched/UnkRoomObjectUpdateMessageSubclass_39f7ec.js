// Extracted from HabboAirLauncher.deobf.js, line 181438.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i39f7ecd6ab9902

class extends RoomObjectUpdateMessage {
  constructor(r, t, i = Number.NaN) {
    super(null, null);
    this._state = r;
    this._data = t;
    this.var_3191 = i;
  }
  static {
    n(this, "UnkRoomObjectUpdateMessageSubclass_39f7ec");
  }
  get state() {
    return this._state;
  }
  get data() {
    return this._data;
  }
  get extra() {
    return this.var_3191;
  }
}
