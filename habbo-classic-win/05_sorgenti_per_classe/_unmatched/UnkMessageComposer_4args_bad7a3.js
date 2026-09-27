// Extracted from HabboAirLauncher.deobf.js, line 118685.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ibad7a3c36c1818

class {
    static {
      n(this, "UnkMessageComposer_4args_bad7a3");
    }
    static {
      u1t(this, "UnkMessageComposer_4args_bad7a3");
    }
    _data = [];
    constructor(e, r, t, i) {
      (this._data.push(e), this._data.push(r), this._data.push(t), this._data.push(i));
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
