// Estratto da HabboAirLauncher.deobf.js, riga 123470.

class {
    static {
      n(this, "_i6e707fe66c1cf6");
    }
    static {
      tmt(this, "_i6e707fe66c1cf6");
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
