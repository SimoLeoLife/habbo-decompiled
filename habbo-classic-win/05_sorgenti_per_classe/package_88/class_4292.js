// Estratto da HabboAirLauncher.deobf.js, riga 99499.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_88/class_4292.as
// Nome offuscato: _ibfddbcec7dd121

class {
    static {
      n(this, "class_4292");
    }
    static {
      qGr(this, "class_4292");
    }
    var_1817 = -1;
    var_3754 = -1;
    _data = "";
    get botId() {
      return this.var_1817;
    }
    get commandId() {
      return this.var_3754;
    }
    get data() {
      return this._data;
    }
    flush() {
      return ((this.var_1817 = -1), (this.var_3754 = -1), (this._data = ""), !0);
    }
    parse(e) {
      return (
        (this.var_1817 = e.readInteger()),
        (this.var_3754 = e.readInteger()),
        (this._data = e.readString()),
        !0
      );
    }
  }
