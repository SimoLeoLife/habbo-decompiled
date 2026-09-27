// Estratto da HabboAirLauncher.deobf.js, riga 84655.

class {
    static {
      n(this, "_i24e7475051ec86");
    }
    static {
      Mxr(this, "_i24e7475051ec86");
    }
    _status = null;
    get status() {
      return this._status;
    }
    flush() {
      return !1;
    }
    parse(e) {
      return ((this._status = new GameStatusData(e)), !0);
    }
  }
