// Extracted from HabboAirLauncher.deobf.js, line 126039.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ie9d00a56eaf91f

class {
    static {
      n(this, "UnkMessageParser_IS_e9d00a");
    }
    static {
      syt(this, "UnkMessageParser_IS_e9d00a");
    }
    _r75d4d9dfb4c9bd = 0;
    _realName = "";
    get _r28f2ec85cc1b60() {
      return this._r75d4d9dfb4c9bd;
    }
    get realName() {
      return this._realName;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this._r75d4d9dfb4c9bd = e.readInteger()),
        (this._realName = e.readString()),
        !0
      );
    }
  }
