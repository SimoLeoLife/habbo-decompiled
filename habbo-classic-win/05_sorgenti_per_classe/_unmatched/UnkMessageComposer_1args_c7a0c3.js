// Extracted from HabboAirLauncher.deobf.js, line 118570.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ic7a0c32ff5642b

class {
    static {
      n(this, "UnkMessageComposer_1args_c7a0c3");
    }
    static {
      i1t(this, "UnkMessageComposer_1args_c7a0c3");
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
