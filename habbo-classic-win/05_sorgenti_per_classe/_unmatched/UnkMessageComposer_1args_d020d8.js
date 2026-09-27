// Extracted from HabboAirLauncher.deobf.js, line 118297.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _id020d8d4e9af94

class {
    static {
      n(this, "UnkMessageComposer_1args_d020d8");
    }
    static {
      S3t(this, "UnkMessageComposer_1args_d020d8");
    }
    _array = [];
    constructor(e) {
      this._array.push(e);
    }
    getMessageArray() {
      return this._array ?? [];
    }
    dispose() {
      this._array = null;
    }
    get disposed() {
      return !1;
    }
  }
