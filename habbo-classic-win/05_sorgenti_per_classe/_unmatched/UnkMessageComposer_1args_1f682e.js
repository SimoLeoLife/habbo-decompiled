// Extracted from HabboAirLauncher.deobf.js, line 118133.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i1f682e97fee556

class {
    static {
      n(this, "UnkMessageComposer_1args_1f682e");
    }
    static {
      p3t(this, "UnkMessageComposer_1args_1f682e");
    }
    _data = [];
    constructor(e) {
      this._data.push(e.length);
      for (let r of e) this._data.push(r);
    }
    getMessageArray() {
      return this._data;
    }
    dispose() {}
  }
