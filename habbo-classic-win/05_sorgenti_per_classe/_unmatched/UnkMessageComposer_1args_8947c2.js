// Extracted from HabboAirLauncher.deobf.js, line 123052.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i8947c23c0697ea

class {
    static {
      n(this, "UnkMessageComposer_1args_8947c2");
    }
    static {
      ppt(this, "UnkMessageComposer_1args_8947c2");
    }
    _array = [];
    constructor(e) {
      this._array.push(e.length);
      for (let r of e) this._array.push(r);
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
