// Extracted from HabboAirLauncher.deobf.js, line 118815.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i7274f8467d765d

class {
    static {
      n(this, "UnkMessageComposer_4args_7274f8");
    }
    static {
      C1t(this, "UnkMessageComposer_4args_7274f8");
    }
    _data = [];
    constructor(e, r, t, i) {
      (this._data.push(e), this._data.push(r), this._data.push(t), this._data.push(i));
    }
    get disposed() {
      return this._data === null;
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
