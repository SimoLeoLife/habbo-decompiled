// Extracted from HabboAirLauncher.deobf.js, line 86395.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ib77fa6902815b1

class {
    static {
      n(this, "UnkMessageParser_I_b77fa6");
    }
    static {
      pEr(this, "UnkMessageParser_I_b77fa6");
    }
    _groupId = -1;
    _rd710ccfa5cec1d = null;
    get groupId() {
      return this._groupId;
    }
    get thread() {
      return this._rd710ccfa5cec1d;
    }
    flush() {
      return ((this._groupId = -1), (this._rd710ccfa5cec1d = null), !0);
    }
    parse(e) {
      return (
        (this._groupId = e.readInteger()),
        (this._rd710ccfa5cec1d = y9.readFromMessage(e)),
        !0
      );
    }
  }
