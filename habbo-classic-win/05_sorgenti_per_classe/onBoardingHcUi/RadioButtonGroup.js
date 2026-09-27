// Extracted from HabboAirLauncher.deobf.js, line 214169.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/onBoardingHcUi/RadioButtonGroup.as
// Obfuscated name: _i4a576b64885f7b

class {
  constructor(e) {
    this._selectedAction = e;
  }
  static {
    n(this, "RadioButtonGroup");
  }
  buttons = [];
  get selected() {
    for (let e of this.buttons) if (e.selected) return e;
    return null;
  }
  performSelectedAction() {
    this._selectedAction?.();
  }
}
