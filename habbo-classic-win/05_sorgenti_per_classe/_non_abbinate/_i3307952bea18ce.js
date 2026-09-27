// Estratto da HabboAirLauncher.deobf.js, riga 272963.

class a {
  constructor(e) {
    this.id = e;
  }
  static {
    n(this, "_i3307952bea18ce");
  }
  static WIDTH = 46;
  static HEIGHT = 60;
  static _r9e7f4a90da299e = -23;
  static _r74077e7c590191 = -48;
  static _texture = null;
  _disposed = !1;
  get disposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed || (this._disposed = !0);
  }
  animate(e) {
    return !1;
  }
  update(e, r) {
    if (e == null) return;
    let t = a.getTexture();
    if (t == null) {
      e.visible = !1;
      return;
    }
    ((e.visible = !0),
      (e.asset = null),
      (e.nativeTexture = t),
      (e.offsetX = a._r9e7f4a90da299e),
      (e.offsetY = a._r74077e7c590191),
      (e.alpha = 0),
      (e._re7ddc55c344f53 = class_3682.MATCH_ALL_PIXELS));
  }
  static getTexture() {
    if (this._texture != null) return this._texture;
    let e = this._rabc00691f33c37();
    if (e?.render == null) return null;
    let r = sn.create({ width: a.WIDTH, height: a.HEIGHT }),
      t = new Jt(Texture.WHITE);
    ((t.width = a.WIDTH),
      (t.height = a.HEIGHT),
      e.render({ container: t, target: r, clear: !0 }),
      t.destroy());
    let i = r.source;
    return (
      i != null &&
        ((i._rfe7fbf9f945fb3 = void 0), (i._rda8f82deca7dcd = () => a._r2bdd7b46d4042e(a.WIDTH, a.HEIGHT))),
      (this._texture = r),
      this._texture
    );
  }
  static _r2bdd7b46d4042e(e, r) {
    let t = Math.max(1, e) * Math.max(1, r),
      i = new Uint32Array(Math.ceil(t / 32));
    for (let s = 0; s < t; s++) {
      let o = s % 32,
        d = (s / 32) | 0;
      i[d] |= 1 << o;
    }
    return i;
  }
  static _rabc00691f33c37() {
    return globalThis.__habboAirLauncher?.application?.renderer ?? null;
  }
}
