// Extracted from HabboAirLauncher.deobf.js, line 248454.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/moderation/OpenExternalLink.as
// Obfuscated name: _i5a730048dfe6b4

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
