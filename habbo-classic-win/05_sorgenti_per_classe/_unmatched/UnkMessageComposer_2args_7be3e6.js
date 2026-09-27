// Extracted from HabboAirLauncher.deobf.js, line 124510.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i7be3e6378eefce

class {
    static {
      n(this, "UnkMessageComposer_2args_7be3e6");
    }
    static {
      Sgt(this, "UnkMessageComposer_2args_7be3e6");
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
