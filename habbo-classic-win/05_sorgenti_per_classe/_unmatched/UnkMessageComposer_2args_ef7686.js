// Extracted from HabboAirLauncher.deobf.js, line 116250.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ief768640ae3f8a

class {
    static {
      n(this, "UnkMessageComposer_2args_ef7686");
    }
    static {
      O_t(this, "UnkMessageComposer_2args_ef7686");
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
