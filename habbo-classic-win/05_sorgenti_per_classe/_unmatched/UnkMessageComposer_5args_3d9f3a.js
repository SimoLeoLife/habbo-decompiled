// Extracted from HabboAirLauncher.deobf.js, line 123969.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i3d9f3af732b347

class {
    static {
      n(this, "UnkMessageComposer_5args_3d9f3a");
    }
    static {
      Umt(this, "UnkMessageComposer_5args_3d9f3a");
    }
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
