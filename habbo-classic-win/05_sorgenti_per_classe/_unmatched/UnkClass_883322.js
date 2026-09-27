// Extracted from HabboAirLauncher.deobf.js, line 61225.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i883322823ee681

class a {
  static {
    n(this, "UnkClass_883322");
  }
  static _rfd38b6fd803469 = 0;
  _rc9ef5735ece618 = new Map();
  _r988747b9177048 = new Map();
  dispose() {
    (this._rc9ef5735ece618.clear(), this._r988747b9177048.clear());
  }
  clearCache() {
    (this.bridge != null && this.bridge?.clearCache?.(), this._rfdf0a208a9e246(""));
  }
  _rdbe76e88e1717b(e) {
    return this.bridge != null
      ? (this.bridge?._rf68fb2e6eaf4c6?.(`${Bie}${e}`) ?? _i99c867a38a325c(`${Bie}${e}`))
      : _i99c867a38a325c(`${Bie}${e}`);
  }
  _r67bfc3cb64df3e(e) {
    return this.bridge != null ? (this.bridge?._r45834c9f02a723?.(`${Uv}${e}`) ?? "") : "";
  }
  _r3b8b5edd31e974(e, r) {
    (this._r77b8521b16f762(e, r), this._r08997348fb8f8c(e));
  }
  _rd6ecfad7853045(e) {
    if (this.bridge == null) return !1;
    try {
      return this.bridge?._rd6ecfad7853045?.(`${Uv}${e}`) ?? !1;
    } catch {
      return !1;
    }
  }
  _r3bc7bb28ee642c(e) {
    if (this.bridge == null) return !1;
    try {
      return this.bridge?._r3bc7bb28ee642c?.(`${Bie}${e}`) ?? !1;
    } catch {
      return !1;
    }
  }
  _r92c02b2515168d(e) {
    if (this.bridge == null) return null;
    try {
      let r = this.bridge?._r92c02b2515168d?.(`${Uv}${e}`);
      return r == null ? null : re.compress(Uint8Array.from(r));
    } catch {}
    return null;
  }
  _rfe283174489e55(e, r) {
    if (this.bridge == null) {
      r(null);
      return;
    }
    let t = this.bridge;
    if (t?._rfe283174489e55 != null) {
      t._rfe283174489e55(`${Uv}${e}`)
        .then((i) => {
          r(i == null ? null : re.compress(Uint8Array.from(i)));
        })
        .catch((i) => {
          r(null);
        });
      return;
    }
    r(this._r92c02b2515168d(e));
  }
  _rb34e5a1902e2c4(e, r) {
    if (this.bridge != null)
      try {
        this.bridge?._rb34e5a1902e2c4?.(`${Uv}${e}`, r.toUint8Array());
      } catch {}
  }
  _r1e7addd94034e3(e, r) {
    if (this.bridge == null) return;
    let t = this.bridge;
    if (t?._r1e7addd94034e3 != null) {
      t._r1e7addd94034e3(`${Uv}${e}`, r.toUint8Array()).catch((i) => {});
      return;
    }
    this._rb34e5a1902e2c4(e, r);
  }
  _rfdf0a208a9e246(e) {
    if (this.bridge != null)
      try {
        this.bridge?._rfdf0a208a9e246?.(`${Uv}${e}`);
      } catch {}
  }
  _r19530405168c7a(e) {
    if (this.bridge != null)
      try {
        let t = this.bridge?._r19530405168c7a?.(e);
        if (t != null && t >= 0) return t;
      } catch {}
    let r = ++a._rfd38b6fd803469;
    return (this._r988747b9177048.set(r, _i459786163e5e5a(e)), r);
  }
  _r53af30f4a656e6(e) {
    if (this.bridge != null)
      try {
        let t = this.bridge?._r53af30f4a656e6?.(e);
        if (t != null) return t;
      } catch {}
    let r = this._r988747b9177048.get(e) ?? null;
    return (this._r988747b9177048.delete(e), r);
  }
  _r77b8521b16f762(e, r) {
    let t = this._rc9ef5735ece618.get(e) ?? [];
    (t.push(r), this._rc9ef5735ece618.set(e, t));
  }
  _r2983d7b00d3abf(e, r) {
    let t = this._rc9ef5735ece618.get(e);
    if (t != null) {
      for (let i of t) i?.(r ? r.clone() : null);
      (r?.dispose(), this._rc9ef5735ece618.delete(e));
    }
  }
  async _r08997348fb8f8c(e) {
    try {
      let r = await _idc5dea63909f80(this._rdbe76e88e1717b(e));
      if (r == null) {
        this._r2983d7b00d3abf(e, null);
        return;
      }
      this._r2983d7b00d3abf(e, r);
    } catch {
      this._r2983d7b00d3abf(e, null);
    }
  }
  get bridge() {
    return globalThis.HabboAirFileProxy ?? null;
  }
}
