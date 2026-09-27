// Estratto da HabboAirLauncher.deobf.js, riga 163970.

class extends CategoryBaseModel {
  static {
    n(this, "_i6a786085638bcc");
  }
  constructor(e) {
    super(e);
  }
  init() {
    (super.init(),
      this._r5081c654d88ac0(AvatarFigurePartType.const_94),
      this._r5081c654d88ac0(AvatarFigurePartType.SHOES),
      this._r5081c654d88ac0(AvatarFigurePartType.const_585),
      (this.var_217 = !0),
      this._view == null && ((this._view = new LegsView(this)), this._view.init()));
  }
}
