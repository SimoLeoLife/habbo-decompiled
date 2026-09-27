// Extracted from HabboAirLauncher.deobf.js, line 119578.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i4ee8fc56f28855

class {
    static {
      n(this, "UnkMessageComposer_1args_4ee8fc");
    }
    static {
      H6t(this, "UnkMessageComposer_1args_4ee8fc");
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
