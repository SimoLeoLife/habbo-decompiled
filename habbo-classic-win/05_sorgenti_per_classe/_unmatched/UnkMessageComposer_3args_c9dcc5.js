// Extracted from HabboAirLauncher.deobf.js, line 124464.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ic9dcc5b7c1f3de

class {
    static {
      n(this, "UnkMessageComposer_3args_c9dcc5");
    }
    static {
      kgt(this, "UnkMessageComposer_3args_c9dcc5");
    }
    _data = [];
    constructor(e, r, t) {
      (this._data.push(e), this._data.push(r), this._data.push(t));
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
