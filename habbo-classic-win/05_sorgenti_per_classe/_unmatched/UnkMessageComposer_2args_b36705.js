// Extracted from HabboAirLauncher.deobf.js, line 123663.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ib367058c952aed

class {
    static {
      n(this, "UnkMessageComposer_2args_b36705");
    }
    static {
      umt(this, "UnkMessageComposer_2args_b36705");
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
