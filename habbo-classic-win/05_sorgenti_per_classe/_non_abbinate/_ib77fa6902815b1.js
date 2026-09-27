// Estratto da HabboAirLauncher.deobf.js, riga 86395.

class {
    static {
      n(this, "_ib77fa6902815b1");
    }
    static {
      pEr(this, "_ib77fa6902815b1");
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
