// Extracted from HabboAirLauncher.deobf.js, line 122966.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ia82291dd3a385b

class {
    static {
      n(this, "UnkMessageComposer_2args_a82291");
    }
    static {
      dpt(this, "UnkMessageComposer_2args_a82291");
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
