// Extracted from HabboAirLauncher.deobf.js, line 124084.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i703229ab5f3c3c

class {
    static {
      n(this, "UnkMessageComposer_2args_703229");
    }
    static {
      qmt(this, "UnkMessageComposer_2args_703229");
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
