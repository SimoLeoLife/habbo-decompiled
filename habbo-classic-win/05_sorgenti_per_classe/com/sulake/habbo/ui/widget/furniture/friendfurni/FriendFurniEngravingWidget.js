// Estratto da HabboAirLauncher.deobf.js, riga 317656.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/furniture/friendfurni/FriendFurniEngravingWidget.as
// Nome offuscato: _i77fad838e3a1bf

class extends RoomWidgetBase {
  static {
    n(this, "FriendFurniEngravingWidget");
  }
  _stuffId = -1;
  var_1151 = null;
  get stuffId() {
    return this._stuffId;
  }
  get _r169f71f9120263() {
    return this._handler;
  }
  constructor(e, r, t, i) {
    (super(e, r, t, i), (this._r169f71f9120263.widget = this));
  }
  open(e, r, t) {
    switch ((this.close(this._stuffId), (this._stuffId = e), r)) {
      case _icf8611d0b0b385._r09e2b3a379adb1:
        this.var_1151 = new LoveLockEngravingView(this, t);
        break;
      case _icf8611d0b0b385._r6a53e431a49b30:
        this.var_1151 = new WildWestEngravingView(this, t);
        break;
      case _icf8611d0b0b385._r4ffb99039fcbb4:
        this.var_1151 = new HabboweenEngravingView(this, t);
        break;
      case _icf8611d0b0b385._r58d599d14f50f5:
      case _icf8611d0b0b385._rccbe8790407b9c:
      default:
        this.var_1151 = null;
        break;
    }
    this.var_1151?.open();
  }
  close(e) {
    e === this._stuffId &&
      this.var_1151 != null &&
      (this.var_1151.dispose(), (this.var_1151 = null), (this._stuffId = -1));
  }
}
