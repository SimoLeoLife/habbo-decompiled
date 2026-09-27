// Estratto da HabboAirLauncher.deobf.js, riga 109771.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/userdefinedroomevents/wiredtrading/chests/class_4303.as
// Nome offuscato: _ibeb897d095b19a

class {
    static {
      n(this, "class_4303");
    }
    static {
      pat(this, "class_4303");
    }
    _chestId = 0;
    var_3144 = 0;
    _rd1c03460dc2097 = null;
    var_3515 = 0;
    flush() {
      return (
        (this._chestId = 0),
        (this.var_3515 = 0),
        (this.var_3144 = 0),
        (this._rd1c03460dc2097 = null),
        !0
      );
    }
    parse(e) {
      ((this._chestId = e.readInteger()),
        (this.var_3515 = e.readInteger()),
        (this.var_3144 = e.readInteger()),
        (this._rd1c03460dc2097 = []));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._rd1c03460dc2097.push(new ChestStorage(e));
      return !0;
    }
    get chestId() {
      return this._chestId;
    }
    get _rec250fae6d7fc2() {
      return this.var_3515;
    }
    get _rd646a5cabacc16() {
      return this.var_3144;
    }
    get _r751949b0bd4bde() {
      return this._rd1c03460dc2097;
    }
  }
