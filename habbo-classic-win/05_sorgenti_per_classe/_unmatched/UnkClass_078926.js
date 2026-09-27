// Extracted from HabboAirLauncher.deobf.js, line 349297.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i07892605d121d3

class extends Ft {
  constructor(r, t = 0, i = 1, s = 0) {
    super();
    this.var_888 = r;
    this.name_3 = t;
    this.name_4 = i;
    this._r593efba813fc8a = s;
    this.sliderButton.procedure = this._raea852272d0b93;
  }
  static {
    n(this, "UnkClass_078926");
  }
  var_166 = 0;
  _rfc8959c14cd133 = !1;
  dispose() {
    (super.dispose(), this.var_888?.dispose(), (this.var_888 = null));
  }
  setValue(r, t = !0, i = !0) {
    ((r = Math.max(this.name_3, r)),
      (r = Math.min(this.name_4, r)),
      (this.var_166 = r),
      t && this._r2aa6fc7c7e66db(),
      i && this.dispatchEvent(new M(M._ra3d93f66ba77c2)));
  }
  getValue() {
    return this.var_166;
  }
  set min(r) {
    this.name_3 = r;
  }
  set max(r) {
    this.name_4 = r;
  }
  _rb0ea2efae16945() {
    ((this._rfc8959c14cd133 = !1),
      this._r593efba813fc8a !== 0 && this.setValue(this.var_166 + this._r593efba813fc8a));
  }
  _r8e05f27c2c9bd0() {
    ((this._rfc8959c14cd133 = !1),
      this._r593efba813fc8a !== 0 && this.setValue(this.var_166 - this._r593efba813fc8a));
  }
  _r2aa6fc7c7e66db() {
    if (this.var_888 == null) return;
    let r = this.var_888.findChildByName("slider_button");
    (r != null && (r.x = this.getSliderPosition(this.var_166)), r?.parent?.invalidate());
  }
  getSliderPosition(r) {
    return Math.trunc(
      this._r83a56a99fd0a05 * ((r - this.name_3) / (this.name_4 - this.name_3)),
    );
  }
  _rb31c101899b06c(r) {
    return (
      (r / this._r83a56a99fd0a05) * (this.name_4 - this.name_3) + this.name_3
    );
  }
  _raea852272d0b93 = n((r, t) => {
    if (
      (r.type === u.DOWN && (this._rfc8959c14cd133 = !0),
      this._rfc8959c14cd133 &&
        (r.type === u.UP || r.type === u.UP_OUTSIDE) &&
        (this._rfc8959c14cd133 = !1),
      !(!this._rfc8959c14cd133 || r.type !== y.const_475) && this._r593efba813fc8a !== 0)
    ) {
      let i = this._rb31c101899b06c(t.x),
        s = Math.round(i / this._r593efba813fc8a) * this._r593efba813fc8a;
      this.setValue(s, !1);
    }
  }, "_raea852272d0b93");
  get _r83a56a99fd0a05() {
    return this._r9aa77bc6796ee7.width - this.sliderButton.width;
  }
  get _r9aa77bc6796ee7() {
    return this.var_888.findChildByName("slider_movement_area");
  }
  get sliderButton() {
    return this.var_888.findChildByName("slider_button");
  }
}
