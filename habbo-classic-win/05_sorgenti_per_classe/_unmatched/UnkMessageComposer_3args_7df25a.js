// Extracted from HabboAirLauncher.deobf.js, line 118475.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i7df25a8484d009

class {
    static {
      n(this, "UnkMessageComposer_3args_7df25a");
    }
    static {
      $3t(this, "UnkMessageComposer_3args_7df25a");
    }
    _data = [];
    constructor(e, r, t) {
      (this._data.push(e), this._data.push(r.length));
      for (let i of r) this._data.push(i);
      this._data.push(t);
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
