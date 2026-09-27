// Extracted from HabboAirLauncher.deobf.js, line 163970.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i6a786085638bcc

class extends CategoryBaseModel {
  static {
    n(this, "UnkCategoryBaseModelSubclass_6a7860");
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
