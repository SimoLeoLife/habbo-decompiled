// Extracted from HabboAirLauncher.deobf.js, line 121034.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i08ea7a9f9bb449

class {
    static {
      n(this, "UnkMessageComposer_1args_08ea7a");
    }
    static {
      C2t(this, "UnkMessageComposer_1args_08ea7a");
    }
    _data = [];
    constructor(e) {
      this._data.push(e.length);
      for (let r of e) this._data.push(r);
    }
    get disposed() {
      return !1;
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
