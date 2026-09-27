// Extracted from HabboAirLauncher.deobf.js, line 123606.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i351508ea93ba1a

class {
    static {
      n(this, "UnkMessageComposer_8args_351508");
    }
    static {
      fmt(this, "UnkMessageComposer_8args_351508");
    }
    _data = [];
    constructor(e, r, t, i, s, o, d, c) {
      (this._data.push(e), this._data.push(r.length));
      for (let f of r) this._data.push(f);
      (this._data.push(i), this._data.push(s.length));
      for (let f of s) this._data.push(f);
      this._data.push(d.length);
      for (let f of d) this._data.push(f);
      this._data.push(c.length);
      for (let f of c) this._data.push(f);
      this._data.push(t.length);
      for (let f of t) this._data.push(f);
      this._data.push(o.length);
      for (let f of o) this._data.push(f);
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
