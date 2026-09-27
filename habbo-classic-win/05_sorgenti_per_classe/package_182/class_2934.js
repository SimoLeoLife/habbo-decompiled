// Estratto da HabboAirLauncher.deobf.js, riga 84691.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_182/class_2934.as
// Nome offuscato: _i34ff2ead5a41ca

class {
    static {
      n(this, "class_2934");
    }
    static {
      kxr(this, "class_2934");
    }
    _stuffCode = "";
    _badgeCode = "";
    flush() {
      return ((this._stuffCode = ""), (this._badgeCode = ""), !0);
    }
    parse(e) {
      return (
        (this._stuffCode = e.readString()),
        (this._badgeCode = e.readString()),
        !0
      );
    }
    get _rbf47c52da5b0a3() {
      return this._stuffCode;
    }
    get _rc9fc89e7eb27a7() {
      return this._badgeCode;
    }
  }
