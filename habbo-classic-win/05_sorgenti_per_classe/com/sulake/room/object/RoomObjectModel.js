// Extracted from HabboAirLauncher.deobf.js, line 297295.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/room/object/RoomObjectModel.as
// Obfuscated name: _i994973fb8b03e8

class a {
  static {
    n(this, "RoomObjectModel");
  }
  static MAP_KEYS_PREFIX = "ROMC_MAP_KEYS_";
  static MAP_VALUES_PREFIX = "ROMC_MAP_VALUES_";
  _re5c00278e1f6a5 = new Map();
  _r9b8a0feff14b30 = new Map();
  _r316cac92e23956 = new Map();
  _r27fa00be870d1c = new Map();
  _ree715033a7ac06 = new Map();
  _r04a5378fba4460 = new Set();
  _re0d32cc972148a = new Set();
  _rc9c3a7998a3a64 = new Set();
  _r4d9d1c37f91874 = new Set();
  _r5a0a61d82188b5 = new Set();
  _updateID = 0;
  dispose() {
    (this._re5c00278e1f6a5.clear(),
      this._r9b8a0feff14b30.clear(),
      this._r316cac92e23956.clear(),
      this._r27fa00be870d1c.clear(),
      this._ree715033a7ac06.clear(),
      this._r04a5378fba4460.clear(),
      this._re0d32cc972148a.clear(),
      this._rc9c3a7998a3a64.clear(),
      this._r4d9d1c37f91874.clear(),
      this._r5a0a61d82188b5.clear());
  }
  _ra3412bd0673156(e) {
    return this._re5c00278e1f6a5.has(e);
  }
  _r1f62ceaeafa1a6(e) {
    return this._r27fa00be870d1c.has(e);
  }
  _r9df63baa75fee6(e) {
    return this._r9b8a0feff14b30.has(e);
  }
  _r6d3c0743ff0d0c(e) {
    return this._ree715033a7ac06.has(e);
  }
  _r4578a390aefe32(e) {
    return this._r316cac92e23956.get(e) != null;
  }
  getObject(e) {
    return this._r316cac92e23956.get(e) ?? null;
  }
  _ra3dc9a405b5c73(e) {
    return this._re5c00278e1f6a5.get(e) ?? Number.NaN;
  }
  getString(e) {
    return this._r9b8a0feff14b30.has(e) ? this._r9b8a0feff14b30.get(e) : null;
  }
  _r90cb3676fb77dd(e) {
    let r = this._r27fa00be870d1c.get(e);
    return r != null ? r.slice() : null;
  }
  _r749e70d500190b(e) {
    let r = this._ree715033a7ac06.get(e);
    return r != null ? r.slice() : null;
  }
  _r51b8bfd516ad9d(e) {
    let r = new B(),
      t = this._r749e70d500190b(a.MAP_KEYS_PREFIX + e),
      i = this._r749e70d500190b(a.MAP_VALUES_PREFIX + e);
    if (t != null && i != null && t.length === i.length) for (let s = 0; s < t.length; s++) r.add(t[s], i[s]);
    return r;
  }
  setNumber(e, r, t = !1) {
    this._r04a5378fba4460.has(e) ||
      (t && this._r04a5378fba4460.add(e),
      this._re5c00278e1f6a5.get(e) !== r && (this._re5c00278e1f6a5.set(e, r), this._updateID++));
  }
  setString(e, r, t = !1) {
    this._re0d32cc972148a.has(e) ||
      (t && this._re0d32cc972148a.add(e),
      this._r9b8a0feff14b30.get(e) !== r && (this._r9b8a0feff14b30.set(e, r), this._updateID++));
  }
  _rb2ace2b85bc9d7(e, r, t = !1) {
    if (this._rc9c3a7998a3a64.has(e)) return;
    let i = this._r316cac92e23956.get(e);
    if (r == null) {
      i != null && (this._r316cac92e23956.delete(e), this._updateID++);
      return;
    }
    (t && this._rc9c3a7998a3a64.add(e), i !== r && (this._r316cac92e23956.set(e, r), this._updateID++));
  }
  _rdb7eb41dc3ec2c(e, r, t = !1) {
    if (this._r4d9d1c37f91874.has(e)) return;
    t && this._r4d9d1c37f91874.add(e);
    let i = r.filter((s) => typeof s == "number");
    this._rcd11bc7a9e6199(this._r27fa00be870d1c.get(e) ?? null, i) ||
      (this._r27fa00be870d1c.set(e, i), this._updateID++);
  }
  _r2b219306ad31b8(e, r, t = !1) {
    if (this._r5a0a61d82188b5.has(e)) return;
    t && this._r5a0a61d82188b5.add(e);
    let i = r.filter((s) => typeof s == "string");
    this._rcd11bc7a9e6199(this._ree715033a7ac06.get(e) ?? null, i) ||
      (this._ree715033a7ac06.set(e, i), this._updateID++);
  }
  _r8cf7b48ccd978e(e, r, t = !1) {
    (this._r2b219306ad31b8(a.MAP_KEYS_PREFIX + e, r.getKeys(), t),
      this._r2b219306ad31b8(a.MAP_VALUES_PREFIX + e, r.getValues(), t));
  }
  getUpdateID() {
    return this._updateID;
  }
  _rcd11bc7a9e6199(e, r) {
    if (e == null || e.length !== r.length) return !1;
    for (let t = 0; t < r.length; t++) if (e[t] !== r[t]) return !1;
    return !0;
  }
}
