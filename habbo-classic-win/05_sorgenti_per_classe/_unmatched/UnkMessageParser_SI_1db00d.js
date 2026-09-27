// Extracted from HabboAirLauncher.deobf.js, line 106290.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i1db00d390e801d

class {
    static {
      n(this, "UnkMessageParser_SI_1db00d");
    }
    static {
      Cqr(this, "UnkMessageParser_SI_1db00d");
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
