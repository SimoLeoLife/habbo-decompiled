// Extracted from HabboAirLauncher.deobf.js, line 117165.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i99629c68f7a80e

class {
    static {
      n(this, "UnkMessageComposer_2args_99629c");
    }
    static {
      put(this, "UnkMessageComposer_2args_99629c");
    }
    _data = [];
    constructor(e, r) {
      this._data = [e, r];
    }
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
