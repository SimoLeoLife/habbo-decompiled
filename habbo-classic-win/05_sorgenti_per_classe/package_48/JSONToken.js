// Extracted from HabboAirLauncher.deobf.js, line 61563.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_48/JSONToken.as
// Obfuscated name: _i864abf56625fbf

class a {
  static {
    n(this, "JSONToken");
  }
  type;
  value;
  static _token = new a();
  constructor(e = -1, r = null) {
    ((this.type = e), (this.value = r));
  }
  static create(e = -1, r = null) {
    return ((a._token.type = e), (a._token.value = r), a._token);
  }
}
