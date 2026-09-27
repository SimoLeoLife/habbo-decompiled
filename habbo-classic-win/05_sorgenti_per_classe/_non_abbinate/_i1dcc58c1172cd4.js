// Estratto da HabboAirLauncher.deobf.js, riga 94225.

class {
    static {
      n(this, "_i1dcc58c1172cd4");
    }
    static {
      YLr(this, "_i1dcc58c1172cd4");
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
