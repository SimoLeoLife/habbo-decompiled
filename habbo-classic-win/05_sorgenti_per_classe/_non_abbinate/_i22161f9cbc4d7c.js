// Estratto da HabboAirLauncher.deobf.js, riga 106105.

class {
    static {
      n(this, "_i22161f9cbc4d7c");
    }
    static {
      dqr(this, "_i22161f9cbc4d7c");
    }
    var_2440 = 0;
    _userId = 0;
    flush() {
      return ((this.var_2440 = 0), (this._userId = 0), !0);
    }
    parse(e) {
      return ((this.var_2440 = e.readInteger()), (this._userId = e.readInteger()), !0);
    }
    get roomId() {
      return this.var_2440;
    }
    get userId() {
      return this._userId;
    }
  }
