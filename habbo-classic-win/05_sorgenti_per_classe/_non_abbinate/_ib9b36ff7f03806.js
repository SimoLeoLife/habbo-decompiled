// Estratto da HabboAirLauncher.deobf.js, riga 181319.

class extends RoomObjectUpdateStateMessage {
  constructor(r) {
    super();
    this._selected = r;
  }
  static {
    n(this, "_ib9b36ff7f03806");
  }
  get selected() {
    return this._selected;
  }
}
