// Extracted from HabboAirLauncher.deobf.js, line 62763.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/hurlant/math/BigInteger.as
// Obfuscated name: _i08068ca61e1619

class a {
  static {
    n(this, "BigInteger");
  }
  static {
    cu(this, "BigInteger");
  }
  static DB = 30;
  static DV = 1 << a.DB;
  static DM = a.DV - 1;
  static BI_FP = 52;
  static FV = Math.pow(2, a.BI_FP);
  static F1 = a.BI_FP - a.DB;
  static F2 = 2 * a.DB - a.BI_FP;
  static _r2db09c36c67983 = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103,
    107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223,
    227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347,
    349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463,
    467, 479, 487, 491, 499, 503, 509,
  ];
  static _r2846429af00de2 = (1 << 26) / a._r2db09c36c67983[a._r2db09c36c67983.length - 1];
  static ZERO = new a(0);
  static ONE = new a(1);
  t = 0;
  s = 0;
  a = [];
  _value = 0n;
  constructor(e = null, r = 0, t = !1) {
    if (typeof e == "string") {
      let i = e.trim();
      this.setValue(
        (r === 0 || r === 16) && !i.startsWith("-") ? _ibce2fcc9eaeff5(Mc.toArray(e).toUint8Array(), t) : _id9fa259dede228(e, r || 10),
      );
      return;
    }
    if (e instanceof re) {
      let i = r || e.length - e.position,
        s = e.readBytes(i);
      this.setValue(s instanceof re ? _ibce2fcc9eaeff5(s.toUint8Array(), t) : 0n);
      return;
    }
    if (typeof e == "bigint") {
      this.setValue(e);
      return;
    }
    if (typeof e == "number") {
      this.setValue(BigInt(Math.trunc(e)));
      return;
    }
    this.sync();
  }
  static nbv(e) {
    return new a(e);
  }
  abs() {
    return this._value < 0n ? this.negate() : this;
  }
  add(e) {
    return new a(this._value + e._value);
  }
  and(e) {
    return new a(this._value & e._value);
  }
  andNot(e) {
    return new a(this._value & ~e._value);
  }
  bitCount() {
    return _iebb06eeff2e6b9(this._value);
  }
  bitLength() {
    return _i962404ff3e7ef0(this._value);
  }
  byteValue() {
    return Number(BigInt.asIntN(8, this._value));
  }
  clearBit(e) {
    return new a(this._value & ~(1n << BigInt(e)));
  }
  clone() {
    return new a(this._value);
  }
  compareTo(e) {
    return this._value < e._value ? -1 : this._value > e._value ? 1 : 0;
  }
  dispose() {
    let e = new Random();
    ((this.a = Array.from({ length: Math.max(1, this.a.length) }, () => e.nextByte() & a.DM)),
      (this._value = 0n),
      (this.a.length = 0),
      (this.t = 0),
      (this.s = 0),
      e.dispose(),
      class_4036.gc());
  }
  divide(e) {
    return e._value === 0n ? a.ZERO : new a(this._value / e._value);
  }
  divideAndRemainder(e) {
    return e._value === 0n
      ? [a.ZERO, a.ZERO]
      : [new a(this._value / e._value), new a(this._value % e._value)];
  }
  equals(e) {
    return this._value === e._value;
  }
  flipBit(e) {
    return new a(this._value ^ (1n << BigInt(e)));
  }
  fromRadix(e, r = 10) {
    this.setValue(_id9fa259dede228(e, r));
  }
  gcd(e) {
    return new a(_i54134a6adc779e(this._value, e._value));
  }
  getLowestSetBit() {
    return this._value === 0n ? -1 : _ibbcd05615ef8fa(this._value & -this._value);
  }
  intValue() {
    return Number(BigInt.asIntN(32, this._value));
  }
  isEven() {
    return (this._value & 1n) === 0n;
  }
  isProbablePrime(e) {
    let r = this._value < 0n ? -this._value : this._value;
    if (r < 2n) return !1;
    for (let o of a._r2db09c36c67983) {
      let d = BigInt(o);
      if (r === d) return !0;
      if (r % d === 0n) return !1;
    }
    if ((r & 1n) === 0n) return !1;
    let t = r - 1n,
      i = t,
      s = 0;
    for (; (i & 1n) === 0n;) ((i >>= 1n), s++);
    for (let o = 0; o < Math.min(a._r2db09c36c67983.length, Math.max(1, (e + 1) >> 1)); o++) {
      let d = BigInt(a._r2db09c36c67983[o] ?? 2);
      if (d >= r) continue;
      let c = _ia1687a1beff331(d, i, r);
      if (c === 1n || c === t) continue;
      let f = !0;
      for (let l = 1; l < s; l++) {
        if (((c = _ia1687a1beff331(c, 2n, r)), c === t)) {
          f = !1;
          break;
        }
        if (c === 1n) return !1;
      }
      if (f) return !1;
    }
    return !0;
  }
  max(e) {
    return this.compareTo(e) > 0 ? this : e;
  }
  min(e) {
    return this.compareTo(e) < 0 ? this : e;
  }
  mod(e) {
    let r = e._value < 0n ? -e._value : e._value;
    if (r === 0n) return a.ZERO;
    let t = this._value % r;
    return (t < 0n && (t += r), new a(t));
  }
  modInverse(e) {
    let r = e._value < 0n ? -e._value : e._value;
    if (r === 0n) return a.ZERO;
    let { gcd: t, x: i } = _i32b1a79be535b3(((this._value % r) + r) % r, r);
    return t !== 1n ? a.ZERO : new a(((i % r) + r) % r);
  }
  modPow(e, r) {
    let t = r._value < 0n ? -r._value : r._value;
    return e._value <= 0n ? a.ONE : t === 0n ? a.ZERO : new a(_ia1687a1beff331(this._value, e._value, t));
  }
  modPowInt(e, r) {
    return this.modPow(new a(e), r);
  }
  multiply(e) {
    return new a(this._value * e._value);
  }
  negate() {
    return new a(-this._value);
  }
  not() {
    return new a(~this._value);
  }
  or(e) {
    return new a(this._value | e._value);
  }
  pow(e) {
    return e < 1 ? a.ONE : new a(this._value ** BigInt(e));
  }
  primify(e, r) {
    let t = Math.max(2, e | 0),
      i = (this._value < 0n ? -this._value : this._value) | (1n << BigInt(t - 1)) | 1n;
    for (;;) {
      if ((this.setValue(i), this.bitLength() <= t && this.isProbablePrime(r))) return;
      ((i += 2n), _i962404ff3e7ef0(i) > t && (i -= 1n << BigInt(t - 1)));
    }
  }
  remainder(e) {
    return e._value === 0n ? a.ZERO : new a(this._value % e._value);
  }
  setBit(e) {
    return new a(this._value | (1n << BigInt(e)));
  }
  shiftLeft(e) {
    return e < 0 ? this.shiftRight(-e) : new a(this._value << BigInt(e));
  }
  shiftRight(e) {
    return e < 0 ? this.shiftLeft(-e) : new a(this._value >> BigInt(e));
  }
  shortValue() {
    return Number(BigInt.asIntN(16, this._value));
  }
  sigNum() {
    return this._value < 0n ? -1 : this._value > 0n ? 1 : 0;
  }
  subtract(e) {
    return new a(this._value - e._value);
  }
  testBit(e) {
    return e >= 0 && (this._value & (1n << BigInt(e))) !== 0n;
  }
  toArray(e) {
    if (this._value === 0n) return 0;
    let r = this._value >= 0n ? _i6f7d8f0755208a(this._value) : _ic94737c5964c5d(this._value);
    for (let t of r) e.writeByte(t);
    return r.length;
  }
  toByteArray() {
    let e = re.compress(_ic94737c5964c5d(this._value));
    return ((e.position = 0), e);
  }
  toRadix(e = 10) {
    return this.sigNum() === 0 || e < 2 || e > 32 ? "0" : this._value.toString(e);
  }
  toString(e = 16) {
    return e < 2 || e > 36 ? this.toRadix(e) : this._value.toString(e);
  }
  valueOf() {
    return Number(this._value);
  }
  xor(e) {
    return new a(this._value ^ e._value);
  }
  setValue(e) {
    ((this._value = e), this.sync());
  }
  sync() {
    let e = _ic94737c5964c5d(this._value),
      r = [],
      t = 0,
      i = 0,
      s = 0;
    for (let d = e.length - 1; d >= 0; d--) {
      let c = e[d] ?? 0;
      (s === 0
        ? (r[t++] = c)
        : s + 8 > a.DB
          ? ((r[t - 1] = (r[t - 1] ?? 0) | ((c & ((1 << (a.DB - s)) - 1)) << s)), (r[t++] = c >> (a.DB - s)))
          : (r[t - 1] = (r[t - 1] ?? 0) | (c << s)),
        (s += 8),
        s >= a.DB && (s -= a.DB));
    }
    (e[0] & 128) === 128 &&
      ((i = -1), s > 0 && (r[t - 1] = (r[t - 1] ?? 0) | (((1 << (a.DB - s)) - 1) << s)));
    let o = i & a.DM;
    for (; t > 0 && (r[t - 1] ?? 0) === o;) t--;
    ((this.a = r.slice(0, t)), (this.t = t), (this.s = i));
  }
}
