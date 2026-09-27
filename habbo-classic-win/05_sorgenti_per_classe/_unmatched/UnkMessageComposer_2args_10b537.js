// Extracted from HabboAirLauncher.deobf.js, line 116512.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i10b537753bd456

class {
    static {
      n(this, "UnkMessageComposer_2args_10b537");
    }
    static {
      d0t(this, "UnkMessageComposer_2args_10b537");
    }
    _array = [];
    constructor(e, r) {
      this._array = [e, r];
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
