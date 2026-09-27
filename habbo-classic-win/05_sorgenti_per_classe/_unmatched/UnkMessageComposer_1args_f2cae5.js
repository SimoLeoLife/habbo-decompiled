// Extracted from HabboAirLauncher.deobf.js, line 123749.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _if2cae551890679

class {
    static {
      n(this, "UnkMessageComposer_1args_f2cae5");
    }
    static {
      Imt(this, "UnkMessageComposer_1args_f2cae5");
    }
    _data = [];
    constructor(e) {
      if (!e) {
        this._data.push(0);
        return;
      }
      this._data.push(e.size);
      for (let [r, t] of e) (this._data.push(r), this._data.push(t));
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
