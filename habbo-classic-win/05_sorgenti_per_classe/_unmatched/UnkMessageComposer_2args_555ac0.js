// Extracted from HabboAirLauncher.deobf.js, line 120355.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i555ac0097e7881

class {
    static {
      n(this, "UnkMessageComposer_2args_555ac0");
    }
    static {
      i5t(this, "UnkMessageComposer_2args_555ac0");
    }
    _array = [];
    constructor(e, r = 0) {
      (this._array.push(e), this._array.push(r));
    }
    getMessageArray() {
      return this._array ?? [];
    }
    dispose() {
      this._array = null;
    }
    get disposed() {
      return this._array == null;
    }
  }
