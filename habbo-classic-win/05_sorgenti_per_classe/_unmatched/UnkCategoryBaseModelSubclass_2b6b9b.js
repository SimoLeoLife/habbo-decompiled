// Extracted from HabboAirLauncher.deobf.js, line 164499.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i2b6b9bb6456430

class extends CategoryBaseModel {
  static {
    n(this, "UnkCategoryBaseModelSubclass_2b6b9b");
  }
  constructor(e) {
    super(e);
  }
  init() {
    (super.init(),
      this._r5081c654d88ac0(AvatarFigurePartType.COAT_CHEST),
      this._r5081c654d88ac0(AvatarFigurePartType.CHEST),
      this._r5081c654d88ac0(AvatarFigurePartType.CHEST_ACCESSORY),
      this._r5081c654d88ac0(AvatarFigurePartType.CHEST_PRINT),
      (this.var_217 = !0),
      this._view == null && ((this._view = new TorsoView(this)), this._view.init()));
  }
}
