// Estratto da HabboAirLauncher.deobf.js, riga 181723.

class extends RoomObjectUpdateStateMessage {
  constructor(r) {
    super();
    this._selected = r;
  }
  static {
    n(this, "_ia9a296a1d0c77f");
  }
  get selected() {
    return this._selected;
  }
}
