// Estratto da HabboAirLauncher.deobf.js, riga 181303.

class extends RoomObjectUpdateStateMessage {
  constructor(r, t = "") {
    super();
    this._r89ede475699ba4 = r;
    this.var_2471 = t;
  }
  static {
    n(this, "_i6cf23aa1345e3c");
  }
  get _r78db360a2bb963() {
    return this._r89ede475699ba4;
  }
  get parameter() {
    return this.var_2471;
  }
}
