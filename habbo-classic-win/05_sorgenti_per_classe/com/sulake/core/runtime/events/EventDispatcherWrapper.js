// Extracted from HabboAirLauncher.deobf.js, line 28906.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/runtime/events/EventDispatcherWrapper.as
// Obfuscated name: _i015dbea691c786

class {
  constructor(e = null) {
    this._rb6871ce1e8d016 = e;
  }
  static {
    n(this, "EventDispatcherWrapper");
  }
  _listeners = new globalThis.Map();
  addEventListener(e, r, t = !1, i = 0, s = !1) {
    let o = this._listeners.get(e) ?? [];
    o.some((d) => d.listener === r && d._r3b216ea6170230 === t) ||
      (o.push({ listener: r, _r3b216ea6170230: t, priority: i | 0 }),
      o.sort((d, c) => c.priority - d.priority),
      this._listeners.set(e, o));
  }
  removeEventListener(e, r, t = !1) {
    let i = this._listeners.get(e);
    if (!i) return;
    let s = i.findIndex((o) => o.listener === r && o._r3b216ea6170230 === t);
    (s >= 0 && i.splice(s, 1), i.length === 0 && this._listeners.delete(e));
  }
  hasEventListener(e) {
    return (this._listeners.get(e)?.length ?? 0) > 0;
  }
  dispatchEvent(e) {
    return this._rccfdb7c562d33c(e, !1);
  }
  _rb582a3fce878b6(e) {
    return this._rccfdb7c562d33c(e, !0);
  }
  _rbef518f1039cda(e) {
    return this._listeners.get(e)?.some((r) => r._r3b216ea6170230) ?? !1;
  }
  _rccfdb7c562d33c(e, r) {
    if (!(e instanceof M)) return !1;
    (e.target == null && (e.target = this._rb6871ce1e8d016 ?? this),
      (e.currentTarget = this._rb6871ce1e8d016 ?? this));
    for (let t of [...(this._listeners.get(e.type) ?? [])]) {
      if (t._r3b216ea6170230 !== r) continue;
      let i = t.listener;
      if ((i(e), e.immediatePropagationStoppedFlag)) break;
    }
    return !e.isDefaultPrevented();
  }
  willTrigger(e) {
    return this.hasEventListener(e);
  }
}
