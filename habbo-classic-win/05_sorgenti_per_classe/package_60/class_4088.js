// Estratto da HabboAirLauncher.deobf.js, riga 95541.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_60/class_4088.as
// Nome offuscato: _i921814136accf2

class {
    static {
      n(this, "class_4088");
    }
    static {
      uOr(this, "class_4088");
    }
    _flatId = 0;
    _r03f2910fbe9c48 = 0;
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this._flatId = e.readInteger()),
        (this._r03f2910fbe9c48 = e.readInteger()),
        !0
      );
    }
    get flatId() {
      return this._flatId;
    }
    get var_1827() {
      return this._r03f2910fbe9c48;
    }
  }
