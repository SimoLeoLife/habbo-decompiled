// Extracted from HabboAirLauncher.deobf.js, line 114675.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ice9155d1abd6fd

class {
    static {
      n(this, "UnkMessageComposer_2args_ce9155");
    }
    static {
      Uft(this, "UnkMessageComposer_2args_ce9155");
    }
    _data = [];
    constructor(e, r) {
      (this._data.push(e), this._data.push(r));
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
