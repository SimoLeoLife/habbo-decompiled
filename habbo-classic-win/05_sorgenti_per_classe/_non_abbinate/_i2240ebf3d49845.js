// Estratto da HabboAirLauncher.deobf.js, riga 123504.

class {
    static {
      n(this, "_i2240ebf3d49845");
    }
    static {
      imt(this, "_i2240ebf3d49845");
    }
    _data = [];
    constructor(e, r, t, i, s, o, d, c, f) {
      (this._data.push(e), this._data.push(r.length));
      for (let l of r) this._data.push(l);
      (this._data.push(i), this._data.push(s.length));
      for (let l of s) this._data.push(l);
      (this._data.push(d), this._data.push(c.length));
      for (let l of c) this._data.push(l);
      this._data.push(f.length);
      for (let l of f) this._data.push(l);
      this._data.push(t.length);
      for (let l of t) this._data.push(l);
      this._data.push(o.length);
      for (let l of o) this._data.push(l);
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
