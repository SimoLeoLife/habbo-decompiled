// Extracted from HabboAirLauncher.deobf.js, line 124259.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _id98c8041b57695

class {
    static {
      n(this, "UnkMessageComposer_1args_d98c80");
    }
    static {
      bgt(this, "UnkMessageComposer_1args_d98c80");
    }
    _data = [];
    constructor(e) {
      this._data.push(e);
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
