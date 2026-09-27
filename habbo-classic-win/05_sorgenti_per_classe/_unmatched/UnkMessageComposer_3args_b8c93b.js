// Extracted from HabboAirLauncher.deobf.js, line 127466.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ib8c93bf3254201

class {
    static {
      n(this, "UnkMessageComposer_3args_b8c93b");
    }
    static {
      uxt(this, "UnkMessageComposer_3args_b8c93b");
    }
    _array = [];
    constructor(e, r, t) {
      (this._array.push(e), this._array.push(r), this._array.push(t));
    }
    getMessageArray() {
      return this._array;
    }
    dispose() {
      this._array = null;
    }
    get disposed() {
      return !1;
    }
  }
