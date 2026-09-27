// Extracted from HabboAirLauncher.deobf.js, line 125147.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ifa4b75e22ed5b9

class {
    static {
      n(this, "UnkMessageComposer_2args_fa4b75");
    }
    static {
      Qvt(this, "UnkMessageComposer_2args_fa4b75");
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
