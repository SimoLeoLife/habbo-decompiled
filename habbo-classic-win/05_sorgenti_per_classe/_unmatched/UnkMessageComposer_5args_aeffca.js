// Extracted from HabboAirLauncher.deobf.js, line 116038.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _iaeffcadf896430

class {
    static {
      n(this, "UnkMessageComposer_5args_aeffca");
    }
    static {
      g_t(this, "UnkMessageComposer_5args_aeffca");
    }
    _data = [];
    constructor(e, r, t, i, s) {
      (this._data.push(e), this._data.push(r), this._data.push(t), this._data.push(i), this._data.push(s));
    }
    getMessageArray() {
      return this._data;
    }
    dispose() {
      this._data = [];
    }
  }
