// Estratto da HabboAirLauncher.deobf.js, riga 86544.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_108/class_3052.as
// Nome offuscato: _i2d5be6f34cc10a

class {
    static {
      n(this, "class_3052");
    }
    static {
      BEr(this, "class_3052");
    }
    _groupId = -1;
    var_2523 = -1;
    var_1065 = null;
    get groupId() {
      return this._groupId;
    }
    get threadId() {
      return this.var_2523;
    }
    get message() {
      return this.var_1065;
    }
    flush() {
      return ((this._groupId = -1), (this.var_2523 = -1), (this.var_1065 = null), !0);
    }
    parse(e) {
      return (
        (this._groupId = e.readInteger()),
        (this.var_2523 = e.readInteger()),
        (this.var_1065 = I9.readFromMessage(e)),
        !0
      );
    }
  }
