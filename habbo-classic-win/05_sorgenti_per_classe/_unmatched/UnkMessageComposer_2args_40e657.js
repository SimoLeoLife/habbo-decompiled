// Extracted from HabboAirLauncher.deobf.js, line 124282.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i40e6572ee8180d

class {
    static {
      n(this, "UnkMessageComposer_2args_40e657");
    }
    static {
      ugt(this, "UnkMessageComposer_2args_40e657");
    }
    _data = [];
    constructor(e, r) {
      (this._data.push(e), this._data.push(r));
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
