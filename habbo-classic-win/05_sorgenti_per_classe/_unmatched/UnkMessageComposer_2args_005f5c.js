// Extracted from HabboAirLauncher.deobf.js, line 123992.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i005f5c7f12e414

class {
    static {
      n(this, "UnkMessageComposer_2args_005f5c");
    }
    static {
      jmt(this, "UnkMessageComposer_2args_005f5c");
    }
    _data = [];
    constructor(e, r) {
      (this._data.push(e), this._data.push(r));
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
