// Extracted from HabboAirLauncher.deobf.js, line 124397.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _if46dd33bded642

class {
    static {
      n(this, "UnkMessageComposer_2args_f46dd3");
    }
    static {
      Cgt(this, "UnkMessageComposer_2args_f46dd3");
    }
    _data = [];
    constructor(e, r) {
      (this._data.push(e), this._data.push(r.length));
      for (let t of r) this._data.push(t);
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
