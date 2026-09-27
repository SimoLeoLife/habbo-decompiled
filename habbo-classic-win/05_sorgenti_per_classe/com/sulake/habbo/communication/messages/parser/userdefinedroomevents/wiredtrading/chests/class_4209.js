// Estratto da HabboAirLauncher.deobf.js, riga 109923.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/userdefinedroomevents/wiredtrading/chests/class_4209.as
// Nome offuscato: _i0e7616d9010c98

class {
    static {
      n(this, "class_4209");
    }
    static {
      Bat(this, "class_4209");
    }
    static SUCCESS = 0;
    _chestId = 0;
    _r03f2910fbe9c48 = 0;
    flush() {
      return ((this._chestId = 0), (this._r03f2910fbe9c48 = 0), !0);
    }
    parse(e) {
      return (
        (this._chestId = e.readInteger()),
        (this._r03f2910fbe9c48 = e.readInteger()),
        !0
      );
    }
    get chestId() {
      return this._chestId;
    }
    get var_1827() {
      return this._r03f2910fbe9c48;
    }
  }
