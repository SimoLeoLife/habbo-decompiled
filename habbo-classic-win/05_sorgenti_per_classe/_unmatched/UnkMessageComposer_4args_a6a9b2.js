// Extracted from HabboAirLauncher.deobf.js, line 118524.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ia6a9b233f8d42d

class {
    static {
      n(this, "UnkMessageComposer_4args_a6a9b2");
    }
    static {
      e1t(this, "UnkMessageComposer_4args_a6a9b2");
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
