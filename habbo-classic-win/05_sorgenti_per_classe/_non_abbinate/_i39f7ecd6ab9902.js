// Estratto da HabboAirLauncher.deobf.js, riga 181438.

class extends RoomObjectUpdateMessage {
  constructor(r, t, i = Number.NaN) {
    super(null, null);
    this._state = r;
    this._data = t;
    this.var_3191 = i;
  }
  static {
    n(this, "_i39f7ecd6ab9902");
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
