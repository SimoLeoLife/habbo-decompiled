// Extracted from HabboAirLauncher.deobf.js, line 124213.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i9a110df22147ef

class {
    static {
      n(this, "UnkMessageComposer_1args_9a110d");
    }
    static {
      dgt(this, "UnkMessageComposer_1args_9a110d");
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
