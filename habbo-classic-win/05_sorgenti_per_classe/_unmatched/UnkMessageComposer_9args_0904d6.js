// Extracted from HabboAirLauncher.deobf.js, line 127535.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i0904d659df733d

class {
    static {
      n(this, "UnkMessageComposer_9args_0904d6");
    }
    static {
      wxt(this, "UnkMessageComposer_9args_0904d6");
    }
    _array = [];
    constructor(e, r, t, i, s, o, d, c, f) {
      (this._array.push(e),
        this._array.push(r),
        this._array.push(t),
        this._array.push(i),
        this._array.push(s),
        this._array.push(o),
        this._array.push(d),
        this._array.push(c),
        this._array.push(f));
    }
    getMessageArray() {
      return this._array;
    }
    dispose() {
      this._array = null;
    }
    get disposed() {
      return this._array === null;
    }
  }
