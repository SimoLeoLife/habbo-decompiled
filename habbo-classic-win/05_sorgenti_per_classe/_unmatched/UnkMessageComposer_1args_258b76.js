// Extracted from HabboAirLauncher.deobf.js, line 123136.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i258b76dd182e43

class {
    static {
      n(this, "UnkMessageComposer_1args_258b76");
    }
    static {
      Cpt(this, "UnkMessageComposer_1args_258b76");
    }
    _array = [];
    constructor(e) {
      this._array.push(e);
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
