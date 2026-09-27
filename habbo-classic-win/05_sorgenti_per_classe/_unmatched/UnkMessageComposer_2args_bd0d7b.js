// Extracted from HabboAirLauncher.deobf.js, line 120059.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ibd0d7b095c65ff

class {
    static {
      n(this, "UnkMessageComposer_2args_bd0d7b");
    }
    static {
      R8t(this, "UnkMessageComposer_2args_bd0d7b");
    }
    _array = [];
    constructor(e, r) {
      (this._array.push(e), this._array.push(r.length), (this._array = this._array.concat(r)));
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
