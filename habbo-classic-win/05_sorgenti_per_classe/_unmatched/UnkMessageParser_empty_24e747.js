// Extracted from HabboAirLauncher.deobf.js, line 84655.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i24e7475051ec86

class {
    static {
      n(this, "UnkMessageParser_empty_24e747");
    }
    static {
      Mxr(this, "UnkMessageParser_empty_24e747");
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
