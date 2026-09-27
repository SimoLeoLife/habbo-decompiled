// Estratto da HabboAirLauncher.deobf.js, riga 69426.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/utils/animation/Juggler.as
// Nome offuscato: _i1b22f88ecd0b88

class a {
  static {
    n(this, "Juggler");
  }
  static REMOVE_FROM_JUGGLER = "REMOVE_FROM_JUGGLER";
  var_415 = [];
  mElapsedTime = 0;
  add(e) {
    e == null ||
      this.var_415.includes(e) ||
      ((this.var_415[this.var_415.length] = e),
      e instanceof EventDispatcherWrapper && e.addEventListener(a.REMOVE_FROM_JUGGLER, this.var_169));
  }
  contains(e) {
    return this.var_415.indexOf(e) !== -1;
  }
  remove(e) {
    if (e == null) return;
    e instanceof EventDispatcherWrapper && e.removeEventListener(a.REMOVE_FROM_JUGGLER, this.var_169);
    let r = this.var_415.indexOf(e);
    r !== -1 && (this.var_415[r] = null);
  }
  _rf60586be0ece2e(e) {
    if (e != null)
      for (let r = this.var_415.length - 1; r >= 0; r--) {
        let t = this.var_415[r],
          i = t instanceof Db ? t : null;
        i?.target === e &&
          (i.removeEventListener(a.REMOVE_FROM_JUGGLER, this.var_169),
          (this.var_415[r] = null));
      }
  }
  _r3f075e19b78e62(e) {
    if (e == null) return !1;
    for (let r = this.var_415.length - 1; r >= 0; r--) {
      let t = this.var_415[r];
      if ((t instanceof Db ? t : null)?.target === e) return !0;
    }
    return !1;
  }
  purge() {
    for (let e = this.var_415.length - 1; e >= 0; e--) {
      let r = this.var_415[e];
      ((r instanceof EventDispatcherWrapper ? r : null)?.removeEventListener(a.REMOVE_FROM_JUGGLER, this.var_169),
        (this.var_415[e] = null));
    }
  }
  delayCall(e, r, ...t) {
    if (e == null) return null;
    let i = KC.fromPool(e, r, t);
    return (i.addEventListener(a.REMOVE_FROM_JUGGLER, this._rc62f7b4d9aff14), this.add(i), i);
  }
  repeatCall(e, r, t = 0, ...i) {
    if (e == null) return null;
    let s = KC.fromPool(e, r, i);
    return (
      (s.repeatCount = t),
      s.addEventListener(a.REMOVE_FROM_JUGGLER, this._rc62f7b4d9aff14),
      this.add(s),
      s
    );
  }
  tween(e, r, t) {
    if (e == null) throw new TypeError("target must not be null");
    let i = Db.fromPool(e, r),
      s = i,
      o = e;
    for (let d of Object.keys(t)) {
      let c = t[d];
      if (d in s) s[d] = c;
      else if (Db._r0a7b1dee79b7f0(d) in o) i.animate(d, Number(c));
      else throw new Error(`Invalid property: ${d}`);
    }
    return (i.addEventListener(a.REMOVE_FROM_JUGGLER, this._re72c55c6fc8973), this.add(i), i);
  }
  advanceTime(e) {
    let r = this.var_415.length,
      t = 0,
      i = 0;
    if (((this.mElapsedTime += e), r !== 0)) {
      for (i = 0; i < r; i++) {
        let s = this.var_415[i];
        s != null &&
          (t !== i && ((this.var_415[t] = s), (this.var_415[i] = null)),
          s.advanceTime(e),
          t++);
      }
      if (t !== i) {
        for (r = this.var_415.length; i < r;)
          this.var_415[t++] = this.var_415[i++] ?? null;
        this.var_415.length = t;
      }
    }
  }
  get elapsedTime() {
    return this.mElapsedTime;
  }
  get objects() {
    return this.var_415;
  }
  _rc62f7b4d9aff14 = n((...e) => {
    let t = e[0]?.target;
    t != null && KC.toPool(t);
  }, "_rc62f7b4d9aff14");
  _re72c55c6fc8973 = n((...e) => {
    let t = e[0]?.target;
    t != null && Db.toPool(t);
  }, "_re72c55c6fc8973");
  var_169 = n((...e) => {
    let t = e[0]?.target;
    if (t == null) return;
    this.remove(t);
    let i = t instanceof Db ? t : null;
    i?.isComplete && this.add(i._rbc1d02c4657631);
  }, "var_169");
}
