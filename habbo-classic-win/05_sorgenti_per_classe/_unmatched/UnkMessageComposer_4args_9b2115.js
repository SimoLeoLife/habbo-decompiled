// Extracted from HabboAirLauncher.deobf.js, line 119796.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i9b211549994061

class {
    static {
      n(this, "UnkMessageComposer_4args_9b2115");
    }
    static {
      s8t(this, "UnkMessageComposer_4args_9b2115");
    }
    _data = [];
    constructor(e, r, t, i) {
      (this._data.push(e), this._data.push(r), this._data.push(t), this._data.push(i));
    }
    _r13f3b8a80f9573(e, r) {
      (this._data.push(e), this._data.push(r));
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
