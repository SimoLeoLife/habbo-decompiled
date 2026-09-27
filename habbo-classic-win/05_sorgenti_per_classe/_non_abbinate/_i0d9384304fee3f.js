// Estratto da HabboAirLauncher.deobf.js, riga 163641.

class extends CategoryBaseModel {
  static {
    n(this, "_i0d9384304fee3f");
  }
  constructor(e) {
    super(e);
  }
  init() {
    (super.init(),
      this._r5081c654d88ac0(AvatarFigurePartType.HAIR),
      this._r5081c654d88ac0(AvatarFigurePartType.const_680),
      this._r5081c654d88ac0(AvatarFigurePartType.const_1106),
      this._r5081c654d88ac0(AvatarFigurePartType.const_500),
      this._r5081c654d88ac0(AvatarFigurePartType.const_621),
      (this.var_217 = !0),
      this._view == null && ((this._view = new HeadView(this)), this._view.init()));
  }
}
