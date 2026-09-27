// Extracted from HabboAirLauncher.deobf.js, line 163522.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/inventory/effects/EffectsModel.as
// Obfuscated name: _i9d707f89d96ae5

class extends CategoryBaseModel {
  static {
    n(this, "EffectsModel");
  }
  static GRIDTYPE_EFFECTS = "effects";
  var_652 = new Map();
  class_3640 = null;
  constructor(e) {
    super(e);
  }
  dispose() {
    (this.class_3640?.dispose(), (this.class_3640 = null), super.dispose());
  }
  init() {
    (super.init(),
      (this.var_217 = !0),
      this._view == null &&
        ((this._view = new EffectsView(this)), (this.class_3640 = new EffectsParamView(this)), this._view.init()));
  }
  get effects() {
    return this.controller.manager.inventory == null
      ? []
      : this.controller.manager.inventory._r60766c255d6b8b();
  }
  selectPart(e, r) {
    let t = null;
    this.setSelectionVisual(e, this.var_652.get(e) ?? -1, !1);
    let i = this.controller.figureData.isDevelopmentEditor;
    if (r === -1 && i !== -1) {
      r = this._view.getGridIndex(i);
      for (let s of this.effects)
        if (s.type === i) {
          ((t = s), (t.isSelected = !0));
          break;
        }
    } else
      (r === -1 && i === -1) || r === 0
        ? ((r = 0), this.controller.setAvatarEffectType(-1), this.class_3640?.updateView(null))
        : ((t = this.effects[r - 1] ?? null),
          t != null && ((t.isSelected = !0), this.controller.setAvatarEffectType(t.type)));
    (this.var_652.set(e, r), this.setSelectionVisual(e, r, !0), this.class_3640?.updateView(t));
  }
  setSelectionVisual(e, r, t) {
    this._view?.updateSelectionVisual(e, r, t);
  }
}
