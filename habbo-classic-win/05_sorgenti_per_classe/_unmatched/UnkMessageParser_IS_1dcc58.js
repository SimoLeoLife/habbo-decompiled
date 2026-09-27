// Extracted from HabboAirLauncher.deobf.js, line 94225.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i1dcc58c1172cd4

class {
    static {
      n(this, "UnkMessageParser_IS_1dcc58");
    }
    static {
      YLr(this, "UnkMessageParser_IS_1dcc58");
    }
    _flatId = 0;
    _rcd4d7fb7eaa121 = "";
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this._flatId = e.readInteger()),
        (this._rcd4d7fb7eaa121 = e.readString()),
        !0
      );
    }
    get flatId() {
      return this._flatId;
    }
    get _rd7b91c8da610c2() {
      return this._rcd4d7fb7eaa121;
    }
  }
