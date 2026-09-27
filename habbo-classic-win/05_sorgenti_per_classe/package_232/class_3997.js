// Estratto da HabboAirLauncher.deobf.js, riga 85626.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_232/class_3997.as
// Nome offuscato: _i02aa455b95692f

class {
    static {
      n(this, "class_3997");
    }
    static {
      OCr(this, "class_3997");
    }
    _r03f2910fbe9c48 = -1;
    var_5297 = 0;
    get var_1827() {
      return this._r03f2910fbe9c48;
    }
    get _r4da09dd19a9004() {
      return this.var_5297;
    }
    flush() {
      return ((this._r03f2910fbe9c48 = -1), !0);
    }
    parse(e) {
      return (
        (this._r03f2910fbe9c48 = e.readInteger()),
        (this.var_5297 = e.readInteger()),
        !0
      );
    }
  }
