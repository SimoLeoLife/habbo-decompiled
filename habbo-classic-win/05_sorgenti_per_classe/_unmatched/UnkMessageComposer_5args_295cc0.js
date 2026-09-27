// Extracted from HabboAirLauncher.deobf.js, line 123868.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i295cc0f54ad8ea

class {
    static {
      n(this, "UnkMessageComposer_5args_295cc0");
    }
    static {
      Smt(this, "UnkMessageComposer_5args_295cc0");
    }
    static _r012cec707c5cae = 0;
    static _r8bdac588a2e61f = 1;
    static _r4b63c66ccdba21 = 2;
    _data = [];
    constructor(e, r, t, i, s) {
      (this._data.push(e), this._data.push(r), this._data.push(t), this._data.push(i), this._data.push(s));
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
