// Extracted from HabboAirLauncher.deobf.js, line 28422.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _if56d7fe9b9f681

class {
  static {
    n(this, "UnkClass_f56d7f");
  }
  _items;
  constructor(e) {
    this._items = Array.from(e, _idb1175342e80d1);
    for (let r = 0; r < this._items.length; r++) this[r] = this._items[r];
  }
  length() {
    return this._items.length;
  }
  child(e) {
    let r = [];
    for (let t of this._items) t instanceof yi && r.push(...t.child(e).toArray());
    return _i8257c52db0b107(r);
  }
  children() {
    let e = [];
    for (let r of this._items) r instanceof yi && e.push(...r.children().toArray());
    return _i8257c52db0b107(e);
  }
  charAt(e) {
    return this.toString().charAt(e);
  }
  slice(e, r) {
    return this.toString().slice(e, r);
  }
  toArray() {
    return this._items.map(_idb1175342e80d1);
  }
  toDomElements() {
    return this._items.map((e) => (e instanceof yi ? e.toDomElement() : null)).filter((e) => e != null);
  }
  [Symbol.iterator]() {
    return this._items[Symbol.iterator]();
  }
  toString() {
    return this._items.map((e) => String(e)).join("");
  }
  valueOf() {
    return this.toString();
  }
  [Symbol.toPrimitive]() {
    return this.toString();
  }
}
