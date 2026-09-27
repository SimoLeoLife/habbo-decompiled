// Extracted from HabboAirLauncher.deobf.js, line 118425.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ib652a2a837b978

class {
    static {
      n(this, "UnkMessageComposer_3args_b652a2");
    }
    static {
      Q3t(this, "UnkMessageComposer_3args_b652a2");
    }
    static _r91f4af675534a9 = 1;
    static _rea0492d8723e0e = 2;
    _array = [];
    constructor(e, r, t) {
      if ((this._array.push(e), this._array.push(r), t == null)) {
        this._array.push(0);
        return;
      }
      this._array.push(t.length);
      for (let i of t) this._array.push(i);
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
