// Estratto da HabboAirLauncher.deobf.js, riga 72624.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/login/SsoTokenAvailableEvent.as
// Nome offuscato: _i043124c55adbd4

class extends M {
  constructor(r, t, i = !1, s = !1) {
    super(r, i, s);
    this.ssoToken = t;
  }
  static {
    n(this, "SsoTokenAvailableEvent");
  }
  static SSO_TOKEN_AVAILABLE = "SSO_TOKEN_AVAILABLE";
}
