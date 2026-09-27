// Estratto da HabboAirLauncher.deobf.js, riga 124653.

class {
    static {
      n(this, "_i3a572da23dd3d6");
    }
    static {
      Ygt(this, "_i3a572da23dd3d6");
    }
    _data = [];
    constructor(e, r, t, i, s, o) {
      (this._data.push(e),
        this._data.push(r),
        this._data.push(t),
        this._data.push(i),
        this._data.push(s),
        this._data.push(o.length));
      for (let d = 0; d < o.length; d++) this._data.push(o[d] | 0);
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
