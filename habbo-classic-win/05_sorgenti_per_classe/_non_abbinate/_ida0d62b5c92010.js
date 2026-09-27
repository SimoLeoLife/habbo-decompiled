// Estratto da HabboAirLauncher.deobf.js, riga 181143.

class extends RoomObjectUpdateStateMessage {
  constructor(r = 0, t = 0) {
    super();
    this._re4a60c8cec49dc = r;
    this.var_4892 = t;
  }
  static {
    n(this, "_ida0d62b5c92010");
  }
  get effect() {
    return this._re4a60c8cec49dc;
  }
  get _r0f4823a8cace64() {
    return this.var_4892;
  }
}
