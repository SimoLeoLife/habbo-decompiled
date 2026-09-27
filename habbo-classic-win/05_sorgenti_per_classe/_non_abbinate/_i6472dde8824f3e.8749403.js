// Estratto da HabboAirLauncher.deobf.js, riga 273672.

class a {
  static {
    n(this, "_i6472dde8824f3e");
  }
  static _r23f1b397dfa1df = 8;
  _r658071de42dd21;
  _r63f90826c35e42;
  _rbb4783ac3c0219 = 0;
  _r9d0a013e87ae7c;
  _re25931c425436d;
  _raf7d988aaa3b4b = 0;
  var_203 = 0;
  _value = 0;
  constructor(e, r, t, i = null) {
    ((this._r658071de42dd21 = Math.max(0, e)),
      (this._r63f90826c35e42 = Math.max(0, i == null ? e : Number(i))),
      (this._r9d0a013e87ae7c = Math.max(0, r)),
      (this._re25931c425436d = Math.max(0, t)));
  }
  get value() {
    return this._value;
  }
  var_1190(e, r) {
    ((this._rbb4783ac3c0219 = r),
      (this._raf7d988aaa3b4b = 0),
      (this.var_203 = e),
      (this._value = e));
  }
  setTarget(e, r) {
    (this.update(r), (this.var_203 = e), (this._rbb4783ac3c0219 = r));
    let t = this._re3754a604e23bd();
    if (t === 0) {
      this._rd427939477f04e();
      return;
    }
    this._raf7d988aaa3b4b = t * Math.min(Math.abs(this._raf7d988aaa3b4b), this._r9d0a013e87ae7c);
  }
  needsUpdate(e, r) {
    return r > 0 && Math.trunc(this.var_203 * r) !== Math.trunc(this._value * r)
      ? !0
      : Math.abs(this.var_203 - this._value) > this._re25931c425436d ||
          Math.abs(this._raf7d988aaa3b4b) > this._re25931c425436d;
  }
  update(e) {
    let r = Math.max(0, e - this._rbb4783ac3c0219);
    if (r <= 0 || this._rd9a13e74daded8()) return ((this._rbb4783ac3c0219 = e), !1);
    let t = this._value;
    for (; r > 0 && !this._rd9a13e74daded8();) {
      let i = Math.min(r, a._r23f1b397dfa1df);
      (this._r4b5d8f57f85447(i), (r -= i));
    }
    return ((this._rbb4783ac3c0219 = e), this._value !== t);
  }
  _rd427939477f04e() {
    let e = this._value !== this.var_203 || this._raf7d988aaa3b4b !== 0;
    return ((this._value = this.var_203), (this._raf7d988aaa3b4b = 0), e);
  }
  _r4b5d8f57f85447(e) {
    let r = this.var_203 - this._value,
      t = a.sign(r);
    if (t === 0 || Math.abs(r) <= this._re25931c425436d) {
      this._rd427939477f04e();
      return;
    }
    let i = this._r9a53ae7f180d7b(t),
      s = this._value + this._raf7d988aaa3b4b * e + 0.5 * i * e * e,
      o = this._raf7d988aaa3b4b + i * e;
    if (
      a.sign(this.var_203 - s) !== t ||
      Math.abs(this.var_203 - s) <= this._re25931c425436d
    ) {
      this._rd427939477f04e();
      return;
    }
    (this._r9d0a013e87ae7c > 0 &&
      Math.abs(o) > this._r9d0a013e87ae7c &&
      (o = a.sign(o) * this._r9d0a013e87ae7c),
      this._raf7d988aaa3b4b !== 0 &&
        a.sign(o) !== a.sign(this._raf7d988aaa3b4b) &&
        a.sign(i) !== t &&
        (o = 0),
      (this._value = s),
      (this._raf7d988aaa3b4b = o));
  }
  _r9a53ae7f180d7b(e) {
    let r = this._raf7d988aaa3b4b * e;
    return r < 0
      ? e * this._r658071de42dd21
      : (this._r63f90826c35e42 > 0 ? (r * r) / (2 * this._r63f90826c35e42) : 0) >=
          Math.abs(this.var_203 - this._value)
        ? -e * this._r63f90826c35e42
        : (this._r9d0a013e87ae7c > 0 && r >= this._r9d0a013e87ae7c) || this._r658071de42dd21 <= 0
          ? 0
          : e * this._r658071de42dd21;
  }
  _re3754a604e23bd() {
    let e = this.var_203 - this._value;
    return Math.abs(e) <= this._re25931c425436d ? 0 : a.sign(e);
  }
  _rd9a13e74daded8() {
    return (
      Math.abs(this.var_203 - this._value) <= this._re25931c425436d &&
      Math.abs(this._raf7d988aaa3b4b) <= this._re25931c425436d
    );
  }
  static sign(e) {
    return e > 0 ? 1 : e < 0 ? -1 : 0;
  }
}
