// Extracted from HabboAirLauncher.deobf.js, line 123726.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i4ef6b032f45ef6

class {
    static {
      n(this, "UnkMessageComposer_1args_4ef6b0");
    }
    static {
      wmt(this, "UnkMessageComposer_1args_4ef6b0");
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
