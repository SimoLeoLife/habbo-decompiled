// Estratto da HabboAirLauncher.deobf.js, riga 248454.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/moderation/OpenExternalLink.as
// Nome offuscato: _i5a730048dfe6b4

class {
  constructor(e, r) {
    this._url = r;
    e.procedure = this.onClick;
  }
  static {
    n(this, "OpenExternalLink");
  }
  onClick = n((e) => {
    e.type === u.CLICK && window.open(this._url, "_blank");
  }, "onClick");
}
