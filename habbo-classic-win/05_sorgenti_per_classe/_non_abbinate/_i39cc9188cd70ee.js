// Estratto da HabboAirLauncher.deobf.js, riga 181500.

class extends RoomObjectUpdateMessage {
  constructor(r, t, i) {
    super(r, t);
    this._height = i;
  }
  static {
    n(this, "_i39cc9188cd70ee");
  }
  get height() {
    return this._height;
  }
}
