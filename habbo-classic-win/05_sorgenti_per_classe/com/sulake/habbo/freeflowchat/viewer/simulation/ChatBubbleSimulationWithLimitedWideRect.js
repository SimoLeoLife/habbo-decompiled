// Estratto da HabboAirLauncher.deobf.js, riga 201820.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/freeflowchat/viewer/simulation/ChatBubbleSimulationWithLimitedWideRect.as
// Nome offuscato: _i0686fd39d501f8

class a extends c5 {
  static {
    n(this, "ChatBubbleSimulationWithLimitedWideRect");
  }
  static WIDERECT_WIDTH = cb.THIN;
  var_1692;
  constructor(e) {
    (super(e, !1),
      (this.var_58 = new D()),
      (this.var_58.width = a.WIDERECT_WIDTH),
      (this.var_58.height = this._ref0c9b7f1a2866.height / 2),
      (this.var_1692 = -((a.WIDERECT_WIDTH - this._ref0c9b7f1a2866.width) / 2)),
      (this.var_58.x = this._ref0c9b7f1a2866.x + this.var_1692),
      (this.var_58.y = this._ref0c9b7f1a2866.y));
  }
  get x() {
    return this._x;
  }
  set x(e) {
    ((this._x = this._x + (e - this._x) * (1 - c5.MOVE_NEGATIVE_FEEDBACK)),
      (this._ref0c9b7f1a2866.x = this._x),
      this.var_58 != null &&
        (this.var_58.x = this._ref0c9b7f1a2866.x + this.var_1692));
  }
  initializePosition(e, r) {
    let t = this._visualization?.overlap;
    ((this._x = e + (t?.x ?? 0)),
      (this._y = r + (t?.y ?? 0)),
      (this._ref0c9b7f1a2866.x = this._x),
      (this._ref0c9b7f1a2866.y = this._y),
      this.var_58 != null &&
        ((this.var_58.x = this._ref0c9b7f1a2866.x + this.var_1692),
        (this.var_58.y = this._ref0c9b7f1a2866.y)));
  }
  get wideRectOffset() {
    return this.var_1692;
  }
  set wideRectOffset(e) {
    this.var_1692 = e;
  }
}
