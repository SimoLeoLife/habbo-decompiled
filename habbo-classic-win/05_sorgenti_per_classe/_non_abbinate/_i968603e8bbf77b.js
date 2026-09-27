// Estratto da HabboAirLauncher.deobf.js, riga 181091.

class extends RoomObjectUpdateStateMessage {
  constructor(r, t) {
    super();
    this.var_828 = r;
    this._r11b610a4a5d895 = t;
  }
  static {
    n(this, "_i968603e8bbf77b");
  }
  get itemType() {
    return this.var_828;
  }
  get itemName() {
    return this._r11b610a4a5d895;
  }
}
