// Estratto da HabboAirLauncher.deobf.js, riga 214169.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/onBoardingHcUi/RadioButtonGroup.as
// Nome offuscato: _i4a576b64885f7b

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
