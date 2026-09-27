// Estratto da HabboAirLauncher.deobf.js, riga 96749.

class {
    static {
      n(this, "_ia44d28488098d4");
    }
    static {
      fHr(this, "_ia44d28488098d4");
    }
    _messages = [];
    get messages() {
      return this._messages;
    }
    flush() {
      return ((this._messages = []), !0);
    }
    parse(e) {
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._messages.push(e.readString());
      return !0;
    }
  }
