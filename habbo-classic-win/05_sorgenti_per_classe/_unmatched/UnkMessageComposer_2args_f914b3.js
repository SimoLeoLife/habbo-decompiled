// Extracted from HabboAirLauncher.deobf.js, line 115223.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _if914b3161943a3

class {
    static {
      n(this, "UnkMessageComposer_2args_f914b3");
    }
    static {
      Qlt(this, "UnkMessageComposer_2args_f914b3");
    }
    _array = [];
    constructor(e, r) {
      (this._array.push(e), this._array.push(r));
    }
    get disposed() {
      return !1;
    }
    getMessageArray() {
      return this._array;
    }
    dispose() {
      this._array = [];
    }
  }
