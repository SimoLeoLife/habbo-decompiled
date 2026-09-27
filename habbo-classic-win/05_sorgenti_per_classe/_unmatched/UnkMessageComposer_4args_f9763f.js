// Extracted from HabboAirLauncher.deobf.js, line 121577.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _if9763f879f916b

class {
    static {
      n(this, "UnkMessageComposer_4args_f9763f");
    }
    static {
      S9t(this, "UnkMessageComposer_4args_f9763f");
    }
    _data = [];
    constructor(e, r, t, i) {
      (this._data.push(e), this._data.push(r), this._data.push(t), this._data.push(i));
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
