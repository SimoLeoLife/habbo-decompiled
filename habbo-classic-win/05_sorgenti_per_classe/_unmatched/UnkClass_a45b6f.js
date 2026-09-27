// Extracted from HabboAirLauncher.deobf.js, line 170566.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ia45b6ff1e92c6e

class {
  static {
    n(this, "UnkClass_a45b6f");
  }
  _parts = new Map();
  _re2aac9582c5a6a = new Map();
  parse(e) {
    if (e == null) return !1;
    let r = _ib5ee1bd09422e6(e, "partSet")[0];
    for (let t of _ib5ee1bd09422e6(r, "part")) this._parts.set(_ifdbe20062cc5b0(t, "set-type"), new PartDefinition(t));
    for (let t of _ib5ee1bd09422e6(e, "activePartSet")) this._re2aac9582c5a6a.set(_ifdbe20062cc5b0(t, "id"), new ActivePartSet(t));
    return !0;
  }
  _r2048f388de3bd3(e) {
    if (e == null) return !1;
    let r = _ib5ee1bd09422e6(e, "partSet")[0];
    for (let t of _ib5ee1bd09422e6(r, "part")) this._parts.set(_ifdbe20062cc5b0(t, "set-type"), new PartDefinition(t));
    for (let t of _ib5ee1bd09422e6(e, "activePartSet")) this._re2aac9582c5a6a.set(_ifdbe20062cc5b0(t, "id"), new ActivePartSet(t));
    return !1;
  }
  _rbc7a5eb771dd56(e) {
    return this._re2aac9582c5a6a.get(e.activePartSet)?.parts ?? [];
  }
  var_895(e) {
    return this._parts.get(e) ?? null;
  }
  _rd040bdbb1924fd(e) {
    let r = _ifdbe20062cc5b0(e, "set-type");
    return (this._parts.has(r) || this._parts.set(r, new PartDefinition(e)), this._parts.get(r));
  }
  get parts() {
    return this._parts;
  }
  get _r4f45b9cada8ca3() {
    return this._re2aac9582c5a6a;
  }
  _rf5dcba962eec13(e) {
    return this._re2aac9582c5a6a.get(e.activePartSet) ?? null;
  }
}
