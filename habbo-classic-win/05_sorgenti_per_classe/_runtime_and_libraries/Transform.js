// Extracted from HabboAirLauncher.deobf.js, line 30474.

class {
  static {
    n(this, "Transform");
  }
  constructor({ matrix: e, observer: r } = {}) {
    ((this.dirty = !0),
      (this._matrix = e ?? new Ze()),
      (this.observer = r),
      (this.position = new Kn(this, 0, 0)),
      (this.scale = new Kn(this, 1, 1)),
      (this.pivot = new Kn(this, 0, 0)),
      (this.skew = new Kn(this, 0, 0)),
      (this._rotation = 0),
      (this._cx = 1),
      (this._sx = 0),
      (this._cy = 0),
      (this._sy = 1));
  }
  get matrix() {
    let e = this._matrix;
    return (
      this.dirty &&
        ((e.a = this._cx * this.scale.x),
        (e.b = this._sx * this.scale.x),
        (e.c = this._cy * this.scale.y),
        (e.d = this._sy * this.scale.y),
        (e.tx = this.position.x - (this.pivot.x * e.a + this.pivot.y * e.c)),
        (e.ty = this.position.y - (this.pivot.x * e.b + this.pivot.y * e.d)),
        (this.dirty = !1)),
      e
    );
  }
  _onUpdate(e) {
    ((this.dirty = !0), e === this.skew && this.updateSkew(), this.observer?._onUpdate(this));
  }
  updateSkew() {
    ((this._cx = Math.cos(this._rotation + this.skew.y)),
      (this._sx = Math.sin(this._rotation + this.skew.y)),
      (this._cy = -Math.sin(this._rotation - this.skew.x)),
      (this._sy = Math.cos(this._rotation - this.skew.x)),
      (this.dirty = !0));
  }
  toString() {
    return `[pixi.js/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`;
  }
  setFromMatrix(e) {
    (e.decompose(this), (this.dirty = !0));
  }
  get rotation() {
    return this._rotation;
  }
  set rotation(e) {
    this._rotation !== e && ((this._rotation = e), this._onUpdate(this.skew));
  }
}
