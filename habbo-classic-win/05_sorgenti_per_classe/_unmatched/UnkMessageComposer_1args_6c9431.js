// Extracted from HabboAirLauncher.deobf.js, line 114160.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i6c943197aa0b8c

class {
    static {
      n(this, "UnkMessageComposer_1args_6c9431");
    }
    static {
      Hct(this, "UnkMessageComposer_1args_6c9431");
    }
    _data = [];
    constructor(e) {
      this._data.push(e);
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
