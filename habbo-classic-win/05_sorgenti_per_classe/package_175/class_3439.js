// Estratto da HabboAirLauncher.deobf.js, riga 98919.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_175/class_3439.as
// Nome offuscato: _ib563867dcb689c

class {
    static {
      n(this, "class_3439");
    }
    static {
      tGr(this, "class_3439");
    }
    var_3074 = 0;
    var_3582 = 0;
    _status = 0;
    var_3621 = 0;
    get taskId() {
      return this.var_3074;
    }
    get repeats() {
      return this.var_3582;
    }
    get status() {
      return this._status;
    }
    get secondsLeft() {
      return this.var_3621;
    }
    flush() {
      return (
        (this.var_3074 = 0),
        (this.var_3582 = 0),
        (this._status = 0),
        (this.var_3621 = 0),
        !0
      );
    }
    parse(e) {
      return (
        (this.var_3074 = e.readLong()),
        (this.var_3582 = e.readInteger()),
        (this._status = e.readByte()),
        (this.var_3621 = e.readInteger()),
        !0
      );
    }
  }
