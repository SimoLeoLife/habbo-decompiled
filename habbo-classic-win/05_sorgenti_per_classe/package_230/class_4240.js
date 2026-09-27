// Estratto da HabboAirLauncher.deobf.js, riga 127414.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_230/class_4240.as
// Nome offuscato: _iccb807c51998b8

class {
    static {
      n(this, "class_4240");
    }
    static {
      fxt(this, "class_4240");
    }
    static name_8 = 0;
    static const_891 = 1;
    static const_1390 = 2;
    static const_810 = 3;
    static const_1210 = 4;
    static const_380 = 5;
    static const_1361 = 6;
    _r03f2910fbe9c48 = 0;
    var_837 = null;
    parse(e) {
      let r = e.readInteger();
      return (
        (this._r03f2910fbe9c48 = e.readInteger()),
        (this.var_837 = KG.readAfterRoomId(r, e)),
        !0
      );
    }
    flush() {
      return ((this._r03f2910fbe9c48 = 0), (this.var_837 = null), !0);
    }
    get var_1827() {
      return this._r03f2910fbe9c48;
    }
    get settings() {
      return this.var_837;
    }
  }
