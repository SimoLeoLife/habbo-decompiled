// Extracted from HabboAirLauncher.deobf.js, line 128694.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/events/WindowEventDispatcher.as
// Obfuscated name: _i987528105a7949

class a {
  static {
    n(this, "WindowEventDispatcher");
  }
  _disposed = !1;
  var_585 = new Map();
  var_1241 = 0;
  _error = null;
  static const_671 = 0;
  static const_422 = 1;
  static const_573 = 2;
  constructor(e) {}
  get disposed() {
    return this._disposed;
  }
  get error() {
    return this._error;
  }
  addEventListener(e, r, t = 0) {
    let i = this.var_585.get(e),
      s = new EventListenerStruct(r, !1, t);
    if (!i) {
      ((i = [s]), this.var_585.set(e, i));
      return;
    }
    for (let o of i) {
      if (o.callback === r) return;
      if (t > o.priority) {
        i.splice(i.indexOf(o), 0, s);
        return;
      }
    }
    i.push(s);
  }
  removeEventListener(e, r) {
    if (this._disposed) return;
    let t = this.var_585.get(e);
    if (!t) return;
    let i = 0;
    for (let s of t) {
      if (s.callback === r) {
        (t.splice(i, 1), (s.callback = null), t.length === 0 && this.var_585.delete(e));
        return;
      }
      i++;
    }
  }
  dispatchEvent(e) {
    if (this._disposed) return !1;
    this.var_1241 = a.const_671;
    let r = this.var_585.get(e.type);
    if (r) {
      let t = [];
      for (let i of r) t.push(i.callback);
      for (; t.length > 0;) {
        let i = t.shift();
        if (i)
          try {
            i(e);
          } catch (s) {
            return (
              (this.var_1241 = a.const_573),
              (this._error = s instanceof Error ? s : new Error(String(s))),
              !1
            );
          }
      }
    }
    return (
      (this.var_1241 = e.isDefaultPrevented() ? a.const_422 : a.const_671),
      this.var_1241 === a.const_671
    );
  }
  hasEventListener(e) {
    return this._disposed ? !1 : this.var_585.has(e);
  }
  dispose() {
    if (!this._disposed) {
      for (let [e, r] of this.var_585.entries()) {
        for (let t of r) t.callback = null;
        this.var_585.delete(e);
      }
      this._disposed = !0;
    }
  }
}
