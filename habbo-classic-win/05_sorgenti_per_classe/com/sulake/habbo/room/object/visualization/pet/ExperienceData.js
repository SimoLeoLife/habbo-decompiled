// Extracted from HabboAirLauncher.deobf.js, line 280608.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/pet/ExperienceData.as
// Obfuscated name: _if4cd9156baa739

class a {
  constructor(e) {
    this._rffdb99bd052dd7 = e;
    this._rc833ecd569fec3(0);
  }
  static {
    n(this, "ExperienceData");
  }
  var_39 = null;
  _amount = -1;
  _alpha = 0;
  _r7a9b0ee1b7faa5 = null;
  _ra272ce9409aedf = !0;
  dispose() {
    (this.var_39?.dispose(),
      (this.var_39 = null),
      this._r7a9b0ee1b7faa5?.destroy(!0),
      (this._r7a9b0ee1b7faa5 = null));
  }
  get alpha() {
    return this._alpha;
  }
  set alpha(e) {
    this._alpha = e;
  }
  get image() {
    return (this._rfa5a95b0964251(), this.var_39);
  }
  get nativeTexture() {
    return this._r7a9b0ee1b7faa5;
  }
  _rc833ecd569fec3(e) {
    this._amount !== e &&
      ((this._amount = e), (this._ra272ce9409aedf = !0), this._rc1ad95732497e8());
  }
  _rfa5a95b0964251() {
    if (!this._ra272ce9409aedf) return;
    (this.var_39?.dispose(), (this.var_39 = null));
    let e = this._rffdb99bd052dd7?.content;
    if (e == null) return;
    let r = e.clone(),
      t = this.setExperience();
    ((t.x = 15), (t.y = 19), r.draw(t), (this.var_39 = r), (this._ra272ce9409aedf = !1));
  }
  _rc1ad95732497e8() {
    let e = this._rffdb99bd052dd7?.nativeTexture ?? null,
      r = a._rabc00691f33c37();
    if (e == null || r?.render == null) return;
    let t = Math.max(1, Math.round(e.width)),
      i = Math.max(1, Math.round(e.height));
    (this._r7a9b0ee1b7faa5 == null ||
      Math.round(this._r7a9b0ee1b7faa5.width) !== t ||
      Math.round(this._r7a9b0ee1b7faa5.height) !== i) &&
      (this._r7a9b0ee1b7faa5?.destroy(!0), (this._r7a9b0ee1b7faa5 = sn.create({ width: t, height: i })));
    let s = new Ii(),
      o = new Jt(e),
      c = this.setExperience()._r0203ab2933f479();
    (c.position.set(15, 19),
      s.addChild(o),
      s.addChild(c),
      r.render({ container: s, target: this._r7a9b0ee1b7faa5, clear: !0 }),
      s.destroy({ children: !0 }));
  }
  setExperience() {
    let e = new _i();
    ((e.font = "Volter"), (e.color = 16777215), (e.size = 9));
    let r = new Pt();
    return (
      (r.embedFonts = !0),
      (r.width = 30),
      (r.height = 12),
      (r.background = !0),
      (r.backgroundColor = 12629248),
      (r.defaultTextFormat = e),
      (r.text = `+${this._amount}`),
      r
    );
  }
  static _rabc00691f33c37() {
    return globalThis.__habboAirLauncher?.application?.renderer ?? null;
  }
}
