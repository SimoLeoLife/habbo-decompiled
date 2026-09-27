// Extracted from HabboAirLauncher.deobf.js, line 116948.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i30b02d832f72c5

class {
    static {
      n(this, "UnkMessageComposer_7args_30b02d");
    }
    static {
      q0t(this, "UnkMessageComposer_7args_30b02d");
    }
    _data = [];
    constructor(e, r, t, i, s, o, d) {
      this._data = [e, r, t, i, s, o, d];
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
