// Extracted from HabboAirLauncher.deobf.js, line 106105.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i22161f9cbc4d7c

class {
    static {
      n(this, "UnkMessageParser_II_22161f");
    }
    static {
      dqr(this, "UnkMessageParser_II_22161f");
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
