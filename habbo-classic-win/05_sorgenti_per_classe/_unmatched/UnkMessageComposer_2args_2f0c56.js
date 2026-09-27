// Extracted from HabboAirLauncher.deobf.js, line 118500.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i2f0c5652e4bcae

class {
    static {
      n(this, "UnkMessageComposer_2args_2f0c56");
    }
    static {
      q3t(this, "UnkMessageComposer_2args_2f0c56");
    }
    _data = [];
    constructor(e, r) {
      (this._data.push(r), this._data.push(e.length));
      for (let t of e) this._data.push(t);
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
