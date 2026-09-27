// Extracted from HabboAirLauncher.deobf.js, line 124061.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _id67cc3c2d28dfd

class {
    static {
      n(this, "UnkMessageComposer_1args_d67cc3");
    }
    static {
      $mt(this, "UnkMessageComposer_1args_d67cc3");
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
