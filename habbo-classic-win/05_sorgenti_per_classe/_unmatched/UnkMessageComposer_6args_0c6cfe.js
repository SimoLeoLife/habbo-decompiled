// Extracted from HabboAirLauncher.deobf.js, line 116971.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i0c6cfe2f5218c7

class {
    static {
      n(this, "UnkMessageComposer_6args_0c6cfe");
    }
    static {
      eut(this, "UnkMessageComposer_6args_0c6cfe");
    }
    _data = [];
    constructor(e, r, t, i, s, o) {
      this._data = [e, r, t, i, s, o];
    }
    get disposed() {
      return !1;
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
