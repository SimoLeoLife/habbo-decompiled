// Extracted from HabboAirLauncher.deobf.js, line 123703.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i9bda7121a95267

class {
    static {
      n(this, "UnkMessageComposer_1args_9bda71");
    }
    static {
      gmt(this, "UnkMessageComposer_1args_9bda71");
    }
    _data = [];
    constructor(e) {
      this._data.push(e);
    }
    get disposed() {
      return !1;
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
