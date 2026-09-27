// Estratto da HabboAirLauncher.deobf.js, riga 379255.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/utils/class_19.as
// Nome offuscato: _i35019b20461ee3

class {
    static {
      n(this, "class_19");
    }
    _rfa880eec4954ff;
    _rbbf156aa60fa6e;
    _rbc80830486f638;
    _r988747b9177048 = new Map();
    _rfd38b6fd803469 = 0;
    _refeeabc25d7c09 = new Map();
    constructor(e) {
      ((this._rfa880eec4954ff = _i8ba3bb7bda3796(e.baseUrl)),
        (this._rbbf156aa60fa6e = e._r78055e4bb25c5c ?? "habbo-air-cache:"),
        (this._rbc80830486f638 = new Set()));
      for (let r of e.localFiles ?? []) this._rbc80830486f638.add(_i999832f217392b(String(r)));
    }
    clearCache() {
      let e = _i5bbf31ebdc5e1c();
      if (e != null) {
        let r = [];
        for (let t = 0; t < e.length; t++) {
          let i = e.key(t);
          i != null && i.startsWith(this._rbbf156aa60fa6e) && r.push(i);
        }
        for (let t of r) e.removeItem(t);
      }
      this._refeeabc25d7c09.clear();
    }
    _rf68fb2e6eaf4c6(e) {
      return new URL(_i999832f217392b(e), this._rfa880eec4954ff).toString();
    }
    _r45834c9f02a723(e) {
      return `habbo-air-cache://${_i999832f217392b(e)}`;
    }
    _rd6ecfad7853045(e) {
      return this._r2b0dad9c0e435e(e) != null;
    }
    _r3bc7bb28ee642c(e) {
      return this._rbc80830486f638.has(_i999832f217392b(e));
    }
    _r92c02b2515168d(e) {
      let r = this._r2b0dad9c0e435e(e);
      return r == null ? null : _icd4e18fa78381d(r);
    }
    async _rfe283174489e55(e) {
      return this._r92c02b2515168d(e);
    }
    _rb34e5a1902e2c4(e, r) {
      let t = this._r8339025afad83f(e),
        i = _ib07e1d3eab9dd6(r),
        s = _i5bbf31ebdc5e1c();
      if (s != null)
        try {
          s.setItem(t, i);
          return;
        } catch {}
      this._refeeabc25d7c09.set(t, i);
    }
    async _r1e7addd94034e3(e, r) {
      this._rb34e5a1902e2c4(e, r);
    }
    _rfdf0a208a9e246(e) {
      let r = this._r8339025afad83f(e),
        t = _i5bbf31ebdc5e1c();
      if (t != null) {
        let i = [];
        for (let s = 0; s < t.length; s++) {
          let o = t.key(s);
          o != null && o.startsWith(r) && i.push(o);
        }
        for (let s of i) t.removeItem(s);
      }
      for (let i of Array.from(this._refeeabc25d7c09.keys()))
        i.startsWith(r) && this._refeeabc25d7c09.delete(i);
    }
    _r19530405168c7a(e) {
      let r = ++this._rfd38b6fd803469;
      return (this._r988747b9177048.set(r, _i954c8a6c12dafc(e)), r);
    }
    _r53af30f4a656e6(e) {
      let r = this._r988747b9177048.get(e) ?? null;
      return (this._r988747b9177048.delete(e), r);
    }
    _r8339025afad83f(e) {
      return `${this._rbbf156aa60fa6e}${_i999832f217392b(e)}`;
    }
    _r2b0dad9c0e435e(e) {
      let r = this._r8339025afad83f(e),
        t = _i5bbf31ebdc5e1c();
      if (t != null) {
        let i = t.getItem(r);
        if (i != null) return i;
      }
      return this._refeeabc25d7c09.get(r) ?? null;
    }
  }
