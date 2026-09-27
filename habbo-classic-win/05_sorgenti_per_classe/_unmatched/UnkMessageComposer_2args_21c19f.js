// Extracted from HabboAirLauncher.deobf.js, line 113992.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i21c19f3567d2a4

class {
    static {
      n(this, "UnkMessageComposer_2args_21c19f");
    }
    static {
      Ict(this, "UnkMessageComposer_2args_21c19f");
    }
    _array = [];
    constructor(e, r) {
      (this._array.push(e), this._array.push(r));
    }
    getMessageArray() {
      return this._array ?? [];
    }
    dispose() {
      this._array = null;
    }
    get disposed() {
      return !1;
    }
  }
