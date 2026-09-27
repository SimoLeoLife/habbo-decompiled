// Estratto da HabboAirLauncher.deobf.js, riga 164197.

class extends CategoryBaseModel {
  static {
    n(this, "_i96bce6165e38ba");
  }
  constructor(e) {
    super(e);
  }
  init() {
    (super.init(),
      this._r5081c654d88ac0(AvatarFigurePartType.PET),
      this._r5081c654d88ac0(AvatarFigurePartType.MISC),
      this._r78f5890852c72e(AvatarFigurePartType.PET),
      this._r78f5890852c72e(AvatarFigurePartType.MISC),
      (this.var_217 = !0),
      this._view == null && ((this._view = new Z1e(this)), this._view.init()));
  }
  _r78f5890852c72e(e) {
    this._categories != null &&
      this._categories.getValue(e) == null &&
      this._categories.add(e, new Oj([], []));
  }
}
