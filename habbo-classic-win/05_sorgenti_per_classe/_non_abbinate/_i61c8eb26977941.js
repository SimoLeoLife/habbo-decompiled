// Estratto da HabboAirLauncher.deobf.js, riga 50749.

class a {
  static {
    n(this, "_i61c8eb26977941");
  }
  _disposed = !1;
  var_356;
  var_585 = new globalThis.Map();
  var_1241 = 0;
  _error = null;
  static const_671 = 0;
  static const_422 = 1;
  static const_573 = 2;
  constructor(e = null) {
    this.var_356 = new EventDispatcherWrapper(e ?? this);
  }
  get disposed() {
    return this._disposed;
  }
  get error() {
    return this._error;
  }
  addEventListener(e, r, t = !1, i = 0, s = !1) {
    let o = this.var_585.get(e),
      d = new EventListenerStruct(r, t, i, s);
    if (!o) {
      (this.var_585.set(e, [d]), this.var_356.addEventListener(e, this._r601d2d8fca4891));
      return;
    }
    for (let c of o) {
      if (c.callback === r && c._r3b216ea6170230 === t) return;
      if (i > c.priority) {
        o.splice(o.indexOf(c), 0, d);
        return;
      }
    }
    o.push(d);
  }
  removeEventListener(e, r, t = !1) {
    if (this._disposed) return;
    let i = this.var_585.get(e);
    if (!i) return;
    let s = 0;
    for (let o of i) {
      if (o.callback === r && o._r3b216ea6170230 === t) {
        (i.splice(s, 1),
          (o.callback = null),
          i.length === 0 &&
            (this.var_585.delete(e),
            this.var_356.removeEventListener(e, this._r601d2d8fca4891)));
        return;
      }
      s++;
    }
  }
  dispatchEvent(e) {
    return this._disposed
      ? !1
      : ((this.var_1241 = a.const_671),
        this.var_356.dispatchEvent(e),
        this.var_1241 === a.const_671);
  }
  hasEventListener(e) {
    return this._disposed ? !1 : this.var_585.has(e);
  }
  _r724d1bccf642fd(e) {
    let r = this.var_585.get(e);
    if (r) for (let t of r) t.callback?.(null);
  }
  willTrigger(e) {
    return this._disposed ? !1 : this.var_585.has(e);
  }
  dispose() {
    if (!this._disposed) {
      for (let [e, r] of this.var_585) {
        for (let t of r) t.callback = null;
        this.var_356.removeEventListener(e, this._r601d2d8fca4891);
      }
      (this.var_585.clear(), (this._disposed = !0));
    }
  }
  _r601d2d8fca4891 = n((e) => {
    let r = this.var_585.get(e.type);
    if (r) {
      let t = r.map((i) => i.callback).filter((i) => i != null);
      for (; t.length > 0;)
        try {
          t.shift()(e);
        } catch (i) {
          ((this.var_1241 = a.const_573),
            (this._error = i instanceof Error ? i : new Error(String(i))));
          return;
        }
    }
    this.var_1241 = e.isDefaultPrevented() ? a.const_422 : a.const_671;
  }, "_r601d2d8fca4891");
}
