// Extracted from HabboAirLauncher.deobf.js, line 120220.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _iefb9c57bef1d1c

class {
    static {
      n(this, "UnkMessageComposer_1args_efb9c5");
    }
    static {
      Q8t(this, "UnkMessageComposer_1args_efb9c5");
    }
    _array;
    constructor(e) {
      ((this._array = []), this._array.push(e));
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
