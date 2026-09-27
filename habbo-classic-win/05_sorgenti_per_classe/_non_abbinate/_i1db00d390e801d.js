// Estratto da HabboAirLauncher.deobf.js, riga 106290.

class {
    static {
      n(this, "_i1db00d390e801d");
    }
    static {
      Cqr(this, "_i1db00d390e801d");
    }
    var_3076 = 0;
    _rebb6a81809bb2b = "";
    flush() {
      return ((this.var_3076 = 0), (this._rebb6a81809bb2b = ""), !0);
    }
    parse(e) {
      return (
        (this._rebb6a81809bb2b = e.readString()),
        (this.var_3076 = e.readInteger()),
        !0
      );
    }
    get songId() {
      return this.var_3076;
    }
    get _r083c961df341d7() {
      return this._rebb6a81809bb2b;
    }
  }
