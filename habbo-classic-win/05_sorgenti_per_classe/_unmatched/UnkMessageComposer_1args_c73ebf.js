// Extracted from HabboAirLauncher.deobf.js, line 117142.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ic73ebf6b748666

class {
    static {
      n(this, "UnkMessageComposer_1args_c73ebf");
    }
    static {
      uut(this, "UnkMessageComposer_1args_c73ebf");
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
