// Estratto da HabboAirLauncher.deobf.js, riga 86593.

class {
    static {
      n(this, "_ifaacf6cfd2ee31");
    }
    static {
      REr(this, "_ifaacf6cfd2ee31");
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
