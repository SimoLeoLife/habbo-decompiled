// Extracted from HabboAirLauncher.deobf.js, line 117099.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i8f877f6063d9ec

class {
    static {
      n(this, "UnkMessageComposer_1args_8f877f");
    }
    static {
      fut(this, "UnkMessageComposer_1args_8f877f");
    }
    _data = [];
    constructor(e) {
      this._data = [e];
    }
    get disposed() {
      return this._data === null;
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
