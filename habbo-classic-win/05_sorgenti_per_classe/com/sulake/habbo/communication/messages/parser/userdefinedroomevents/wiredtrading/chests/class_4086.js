// Estratto da HabboAirLauncher.deobf.js, riga 109831.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/userdefinedroomevents/wiredtrading/chests/class_4086.as
// Nome offuscato: _icf1ca579c1d47b

class {
    static {
      n(this, "class_4086");
    }
    static {
      wat(this, "class_4086");
    }
    _r79d7a19cd924a9 = null;
    _chestId = 0;
    var_2937 = null;
    flush() {
      return (
        (this._chestId = 0),
        (this.var_2937 = null),
        (this._r79d7a19cd924a9 = null),
        !0
      );
    }
    parse(e) {
      ((this._chestId = e.readInteger()),
        (this.var_2937 = []),
        (this._r79d7a19cd924a9 = []));
      let r = e.readInteger();
      for (let i = 0; i < r; i++) this.var_2937.push(e.readInteger());
      let t = e.readInteger();
      for (let i = 0; i < t; i++) this._r79d7a19cd924a9.push(new ChestStorage(e));
      return !0;
    }
    get _r544afa0b9d595d() {
      return this.var_2937;
    }
    get _r5277aaa0e4e018() {
      return this._r79d7a19cd924a9;
    }
    get chestId() {
      return this._chestId;
    }
  }
