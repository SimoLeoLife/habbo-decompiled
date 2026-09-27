// Extracted from HabboAirLauncher.deobf.js, line 114560.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i9cd25c94155053

class {
    static {
      n(this, "UnkMessageComposer_1args_9cd25c");
    }
    static {
      kft(this, "UnkMessageComposer_1args_9cd25c");
    }
    _data = [];
    constructor(e) {
      this._data.push(e);
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
