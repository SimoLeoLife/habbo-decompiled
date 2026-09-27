// Estratto da HabboAirLauncher.deobf.js, riga 124182.

class {
    static {
      n(this, "_id700d3804bea17");
    }
    static {
      sgt(this, "_id700d3804bea17");
    }
    _data = [];
    constructor(e, r, t, i, s, o, d, c, f) {
      (this._data.push(e),
        this._data.push(r),
        this._data.push(t),
        this._data.push(i),
        this._data.push(s),
        this._data.push(o),
        this._data.push(d),
        this._data.push(c),
        this._data.push(f));
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
