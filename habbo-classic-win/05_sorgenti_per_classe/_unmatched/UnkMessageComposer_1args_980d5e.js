// Extracted from HabboAirLauncher.deobf.js, line 114208.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i980d5eea32f983

class {
    static {
      n(this, "UnkMessageComposer_1args_980d5e");
    }
    static {
      Qct(this, "UnkMessageComposer_1args_980d5e");
    }
    _data = [];
    constructor(e) {
      this._data = [e];
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
