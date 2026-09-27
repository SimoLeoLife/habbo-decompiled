// Extracted from HabboAirLauncher.deobf.js, line 114438.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _icecbc11f9f2b51

class {
    static {
      n(this, "UnkMessageComposer_1args_cecbc1");
    }
    static {
      gft(this, "UnkMessageComposer_1args_cecbc1");
    }
    _data = [];
    constructor(e) {
      this._data.push(e);
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
