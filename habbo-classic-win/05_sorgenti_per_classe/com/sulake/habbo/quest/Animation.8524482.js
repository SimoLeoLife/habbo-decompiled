// Extracted from HabboAirLauncher.deobf.js, line 265357.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/Animation.as
// Obfuscated name: _i854ad0adf527a0

class {
  constructor(e) {
    this._canvas = e;
    this._canvas != null &&
      ((this._canvas.visible = !1),
      this._canvas.bitmap == null &&
        (this._canvas.bitmap = new A(this._canvas.width, this._canvas.height, !0, 0)));
  }
  static {
    n(this, "Animation");
  }
  var_1889 = 0;
  _playing = !1;
  _sprites = [];
  dispose() {
    if (((this._canvas = null), this._sprites != null)) {
      for (let e of this._sprites) e.dispose();
      this._sprites = null;
    }
  }
  get disposed() {
    return this._canvas == null;
  }
  addObject(e) {
    this._sprites?.push(e);
  }
  stop() {
    ((this._playing = !1), this._canvas != null && (this._canvas.visible = !1));
  }
  restart() {
    ((this.var_1889 = 0), (this._playing = !0));
    for (let e of this._sprites ?? []) e.onAnimationStart();
    (this.draw(), this._canvas != null && (this._canvas.visible = !0));
  }
  update(e) {
    this._playing && ((this.var_1889 += e), this.draw());
  }
  draw() {
    let e = this._canvas,
      r = e?.bitmap;
    if (e == null || r == null) return;
    r.fillRect(r.rect, 0);
    let t = !1;
    if (this._playing) {
      for (let i of this._sprites ?? [])
        if (!i.isFinished(this.var_1889)) {
          t = !0;
          let s = i.getBitmap(this.var_1889);
          s != null && r.copyPixels(s, s.rect, i.getPosition(this.var_1889));
        }
    }
    (e.invalidate(), (this._playing = t));
  }
}
