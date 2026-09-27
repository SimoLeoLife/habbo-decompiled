// Estratto da HabboAirLauncher.deobf.js, riga 60432.

class a extends _i6e5afb6abd5bbb {
  static {
    n(this, "HabboMap");
  }
  constructor() {
    return (
      super(),
      new globalThis.Proxy(this, {
        get: n(
          (e, r, t) =>
            e.disposed
              ? Reflect.get(e, r, t)
              : typeof r == "string" && !(r in e)
                ? e._dictionary.get(r)
                : Reflect.get(e, r, t),
          "get",
        ),
        set: n(
          (e, r, t, i) =>
            e.disposed
              ? Reflect.set(e, r, t, i)
              : typeof r == "string" && !(r in e)
                ? (e.setProperty(r, t), !0)
                : Reflect.set(e, r, t, i),
          "set",
        ),
        ownKeys: n((e) => {
          let r = Reflect.ownKeys(e);
          return e.disposed ? r : [...r, ...e._keys.map((t) => String(t))];
        }, "ownKeys"),
        getOwnPropertyDescriptor: n(
          (e, r) =>
            !e.disposed && typeof r == "string" && e._dictionary.has(r)
              ? { configurable: !0, enumerable: !0, value: e._dictionary.get(r), writable: !0 }
              : Reflect.getOwnPropertyDescriptor(e, r),
          "getOwnPropertyDescriptor",
        ),
      })
    );
  }
  _length = 0;
  _dictionary = new globalThis.Map();
  _array = [];
  _keys = [];
  get length() {
    return this._length;
  }
  get disposed() {
    return this._dictionary == null;
  }
  dispose() {
    ((this._dictionary = null), (this._length = 0), (this._array = null), (this._keys = null));
  }
  reset() {
    ((this._dictionary = new globalThis.Map()), (this._length = 0), (this._array = []), (this._keys = []));
  }
  unshift(e, r) {
    return this._dictionary.get(e) != null
      ? !1
      : (this._dictionary.set(e, r), this._array.unshift(r), this._keys.unshift(e), this._length++, !0);
  }
  add(e, r) {
    return this._dictionary.get(e) != null
      ? !1
      : (this._dictionary.set(e, r),
        (this._array[this._length] = r),
        (this._keys[this._length] = e),
        this._length++,
        !0);
  }
  replace(e, r) {
    if (this._dictionary.get(e) == null) return !1;
    let t = this._keys.indexOf(e);
    return (this._dictionary.set(e, r), (this._array[t] = r), !0);
  }
  remove(e) {
    let r = this._dictionary.get(e) ?? null;
    if (r == null) return null;
    let t = this._keys.indexOf(e);
    return (
      t >= 0 && (this._array.splice(t, 1), this._keys.splice(t, 1), this._length--),
      this._dictionary.delete(e),
      r
    );
  }
  getWithIndex(e) {
    return e < 0 || e >= this._length ? null : this._array[e];
  }
  getKey(e) {
    return e < 0 || e >= this._length ? null : this._keys[e];
  }
  getValueByIndex(e) {
    return e < 0 || e >= this._length ? null : this._array[e];
  }
  getKeys() {
    return this._keys.slice();
  }
  hasKey(e) {
    return this._dictionary.has(e);
  }
  getValue(e) {
    return this._dictionary.get(e);
  }
  getValues() {
    return this._array.slice();
  }
  hasValue(e) {
    return this._array.indexOf(e) > -1;
  }
  indexOf(e) {
    return this._array.indexOf(e);
  }
  concatenate(e) {
    for (let r of e.getKeys()) this.add(r, e.getValue(r));
  }
  clone() {
    let e = new a();
    return (e.concatenate(this), e);
  }
  getProperty(e) {
    return this._dictionary.get(e);
  }
  setProperty(e, r) {
    this._dictionary.set(e, r);
    let t = this._keys.indexOf(e);
    t === -1
      ? ((this._array[this._length] = r), (this._keys[this._length] = e), this._length++)
      : this._array.splice(t, 1, r);
  }
  nextNameIndex(e) {
    return e < this._length ? e + 1 : 0;
  }
  nextName(e) {
    return String(this._keys[e - 1]);
  }
  nextValue(e) {
    return this._array[e - 1];
  }
  callProperty(e) {
    return (typeof e == "string" ? e : e.localName) === "toString" ? "HabboMap" : null;
  }
}
