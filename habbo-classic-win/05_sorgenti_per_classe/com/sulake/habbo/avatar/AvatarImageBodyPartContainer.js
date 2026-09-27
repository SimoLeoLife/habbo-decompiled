// Extracted from HabboAirLauncher.deobf.js, line 166690.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/AvatarImageBodyPartContainer.as
// Obfuscated name: _i3b70815cf1538b

class {
  static {
    n(this, "AvatarImageBodyPartContainer");
  }
  var_39;
  _r7a9b0ee1b7faa5;
  _regPoint;
  _offset = new E(0, 0);
  _rba6d0aa404803d;
  _rce53c11d3f361a;
  _rd7a229524c3b82;
  constructor(e, r, t, i = null, s = null, o = !1) {
    ((this.var_39 = e),
      (this._r7a9b0ee1b7faa5 = s),
      (this._regPoint = r),
      (this._rba6d0aa404803d = t),
      (this._rce53c11d3f361a = i),
      (this._rd7a229524c3b82 = o),
      this.cleanPoints());
  }
  get _r842a433ada7ed5() {
    return this._rba6d0aa404803d;
  }
  dispose() {
    (this.var_39?.dispose(),
      this._rd7a229524c3b82 && this._r7a9b0ee1b7faa5?.destroy?.(!0),
      (this.var_39 = null),
      (this._r7a9b0ee1b7faa5 = null),
      (this._regPoint = null),
      (this._rce53c11d3f361a = null));
  }
  get image() {
    return this.var_39;
  }
  get nativeTexture() {
    return this._r7a9b0ee1b7faa5;
  }
  get regPoint() {
    let e = (this._regPoint ?? new E()).clone();
    return (e.offset(this._offset.x, this._offset.y), e);
  }
  set offset(e) {
    ((this._offset = e), this.cleanPoints());
  }
  get max() {
    return this._rce53c11d3f361a;
  }
  cleanPoints() {
    (this._regPoint != null &&
      ((this._regPoint.x = Math.trunc(this._regPoint.x)),
      (this._regPoint.y = Math.trunc(this._regPoint.y))),
      (this._offset.x = Math.trunc(this._offset.x)),
      (this._offset.y = Math.trunc(this._offset.y)));
  }
}
