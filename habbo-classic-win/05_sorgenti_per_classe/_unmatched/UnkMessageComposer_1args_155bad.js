// Extracted from HabboAirLauncher.deobf.js, line 119014.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i155badb9742492

class {
    static {
      n(this, "UnkMessageComposer_1args_155bad");
    }
    static {
      H1t(this, "UnkMessageComposer_1args_155bad");
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
