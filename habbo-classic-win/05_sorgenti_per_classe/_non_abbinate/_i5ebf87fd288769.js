// Estratto da HabboAirLauncher.deobf.js, riga 67768.

class {
  static {
    n(this, "_i5ebf87fd288769");
  }
  _data = [];
  _rea4c6c4a77abf0 = 0;
  _index = 0;
  constructor(e) {
    this._rea4c6c4a77abf0 = e;
  }
  reset() {
    ((this._data = []), (this._index = 0));
  }
  addValue(e) {
    (this._data.length < this._rea4c6c4a77abf0 ? this._data.push(e) : (this._data[this._index] = e),
      (this._index = (this._index + 1) % this._rea4c6c4a77abf0));
  }
  _r26e48faa0dc4fb() {
    let e = Number.MIN_SAFE_INTEGER;
    for (let r = 0; r < this._rea4c6c4a77abf0; r++)
      (this._data[r] ?? Number.MIN_SAFE_INTEGER) > e && (e = this._data[r] ?? e);
    return e;
  }
  _r73c091abdd0f88() {
    let e = Number.MAX_SAFE_INTEGER;
    for (let r = 0; r < this._rea4c6c4a77abf0; r++)
      (this._data[r] ?? Number.MAX_SAFE_INTEGER) < e && (e = this._data[r] ?? e);
    return e;
  }
}
