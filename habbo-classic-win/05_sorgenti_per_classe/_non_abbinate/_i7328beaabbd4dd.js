// Estratto da HabboAirLauncher.deobf.js, riga 150583.

class a {
  constructor(e, r) {
    this.var_121 = e;
    this._avatarRenderManager = r;
    this._r08651d482bdd11?._r9c3331ac1bb690(!1, !1);
  }
  static {
    n(this, "_i7328beaabbd4dd");
  }
  static _ra0eb2077c6a8dc = 2;
  var_1271 = !1;
  update(e, r) {
    this._r08651d482bdd11?._r9c3331ac1bb690(!1, !1);
    let t = this._r08651d482bdd11;
    if (t?._r7800b4141964cc) {
      (t._r7f4d6e609cfa14(e, r),
        t._r57314f7f668654(a._ra0eb2077c6a8dc, a._ra0eb2077c6a8dc),
        t._r7314b55e8d0d86(!0),
        t._rc61293181668df());
      return;
    }
    let i = this._avatarRenderManager?._r274f6640e76241(e, fr.LARGE, null, this) ?? null;
    this.widget?.createAvatarImage(i?._rb2bd48e3b4d265(class_2123.const_252) ?? null);
  }
  avatarImageReady(e) {
    if (this.var_1271) return;
    let r = this._avatarRenderManager?._r274f6640e76241(e, fr.LARGE, null, this) ?? null;
    this.widget?.createAvatarImage(r?._rb2bd48e3b4d265(class_2123.const_252) ?? null);
  }
  dispose() {
    this.var_1271 ||
      ((this.var_1271 = !0),
      this._r08651d482bdd11?.reset(!0),
      (this.var_121 = null),
      (this._avatarRenderManager = null));
  }
  get disposed() {
    return this.var_1271;
  }
  set visible(e) {
    this.var_121 != null && (this.var_121.visible = e);
  }
  get widget() {
    return this.var_121?.widget;
  }
  get _r08651d482bdd11() {
    return this.widget?._r08651d482bdd11 ?? null;
  }
}
