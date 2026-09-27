// Extracted from HabboAirLauncher.deobf.js, line 123436.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i5d6aac3b2da798

class {
    static {
      n(this, "UnkMessageComposer_9args_5d6aac");
    }
    static {
      emt(this, "UnkMessageComposer_9args_5d6aac");
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
