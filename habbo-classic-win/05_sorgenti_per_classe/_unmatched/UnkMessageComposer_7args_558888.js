// Extracted from HabboAirLauncher.deobf.js, line 117023.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i558888606ccb6a

class {
    static {
      n(this, "UnkMessageComposer_7args_558888");
    }
    static {
      iut(this, "UnkMessageComposer_7args_558888");
    }
    _data = [];
    constructor(e, r, t, i, s, o, d) {
      this._data = [e, r, t, i, s, o, d];
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
