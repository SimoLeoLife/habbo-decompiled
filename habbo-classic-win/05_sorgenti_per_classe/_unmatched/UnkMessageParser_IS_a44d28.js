// Extracted from HabboAirLauncher.deobf.js, line 96749.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ia44d28488098d4

class {
    static {
      n(this, "UnkMessageParser_IS_a44d28");
    }
    static {
      fHr(this, "UnkMessageParser_IS_a44d28");
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
