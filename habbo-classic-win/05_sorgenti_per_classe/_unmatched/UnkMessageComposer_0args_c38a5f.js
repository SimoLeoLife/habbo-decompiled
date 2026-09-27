// Extracted from HabboAirLauncher.deobf.js, line 114418.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ic38a5f77138194

class {
    static {
      n(this, "UnkMessageComposer_0args_c38a5f");
    }
    static {
      pft(this, "UnkMessageComposer_0args_c38a5f");
    }
    _data = [];
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
