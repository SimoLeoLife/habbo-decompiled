// Estratto da HabboAirLauncher.deobf.js, riga 225748.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/groups/badge/BadgeEditorPartItem.as
// Nome offuscato: _i881d93f1eca229

class a {
  static {
    n(this, "BadgeEditorPartItem");
  }
  static BASE_PART = 0;
  static LAYER_PART = 1;
  static _rec1b92bda35306 = 39;
  static _r12c7f8e2b75b77 = 39;
  static _r67b2028c158598 = 13;
  static _r09adaec8c65507 = 13;
  var_41;
  var_334;
  var_3856;
  _type;
  var_4192;
  _disposed = !1;
  _fileName = null;
  _r90704a471d4ff5 = null;
  var_39 = null;
  _mask = null;
  _composite = null;
  var_536 = new _i4210dc3239901d(1, 1, 1);
  _r3f27f59dd53fda = !1;
  _isLoaded = !1;
  var_3868 = !1;
  constructor(e, r, t, i, s = null) {
    if (
      ((this.var_3856 = t),
      (this.var_41 = e),
      (this.var_334 = r),
      (this._type = i),
      (this.var_4192 = this.var_41.getProperty("image.library.badgepart.url")),
      (this._composite = new A(a._rec1b92bda35306, a._r12c7f8e2b75b77)),
      s == null)
    ) {
      ((this._isLoaded = !0),
        (this.var_3868 = !0),
        (this.var_39 = this.var_41._r6bd8f6d6bfdbb5("badge_part_empty")));
      return;
    }
    ((this._fileName = s.fileName.replace(".gif", "").replace(".png", "")),
      (this._r90704a471d4ff5 = s.var_4349.replace(".gif", "").replace(".png", "")),
      (this._r3f27f59dd53fda = this._r90704a471d4ff5.length > 0),
      (this._composite = new A(a._rec1b92bda35306, a._r12c7f8e2b75b77)),
      (this._fileName = `${this.var_4192}badgepart_${this._fileName}.png`),
      (this._r90704a471d4ff5 = `${this.var_4192}badgepart_${this._r90704a471d4ff5}.png`),
      this.var_41.windowManager._r55bb54da384802?.retrieveAsset(this._fileName, this),
      this.var_41.windowManager._r55bb54da384802?.retrieveAsset(this._r90704a471d4ff5, this));
  }
  get disposed() {
    return this._disposed;
  }
  get partIndex() {
    return this.var_3856;
  }
  receiveAsset(e, r) {
    let t = this.var_41?.windowManager._r55bb54da384802;
    t != null &&
      (this._fileName != null &&
        t.isSameAsset(this._fileName, r) &&
        (this.var_39 = e.content),
      this._r90704a471d4ff5 != null &&
        t.isSameAsset(this._r90704a471d4ff5, r) &&
        (this._mask = e.content),
      this.checkIsImageLoaded());
  }
  dispose() {
    this.disposed ||
      (this.var_39?.dispose(),
      (this.var_39 = null),
      this._mask?.dispose(),
      (this._mask = null),
      this._composite?.dispose(),
      (this._composite = null),
      (this._fileName = null),
      (this._r90704a471d4ff5 = null),
      (this.var_334 = null),
      (this.var_41 = null),
      (this._disposed = !0));
  }
  getComposite(e) {
    if (!this._isLoaded) return null;
    if (this.var_3868) return this.var_39;
    if (this.var_41 == null || this.var_39 == null || this._composite == null)
      return null;
    let r = this.var_41._r1b5a723df2ea20?._r96829aa95ff786[e._rb918ebc3bf3388];
    if (r == null) return null;
    ((this.var_536.redMultiplier = r.red / 255),
      (this.var_536.greenMultiplier = r.green / 255),
      (this.var_536.blueMultiplier = r.blue / 255));
    let t = this.getPosition(e);
    return (
      this._composite.dispose(),
      (this._composite = new A(a._rec1b92bda35306, a._r12c7f8e2b75b77, !0, 0)),
      this._composite.copyPixels(this.var_39, this.var_39.rect, t),
      this._composite.colorTransform(this._composite.rect, this.var_536),
      this._r3f27f59dd53fda &&
        this._mask != null &&
        this._composite.copyPixels(this._mask, this._mask.rect, t, null, null, !0),
      this._composite
    );
  }
  checkIsImageLoaded() {
    this.var_39 != null &&
      ((this._r3f27f59dd53fda && this._mask == null) ||
        ((this._isLoaded = !0),
        this._type === a.BASE_PART
          ? this.var_334?._r65a32b2d42a3c8(this)
          : this.var_334?.onBaseImageLoaded(this)));
  }
  getPosition(e) {
    if (this.var_39 == null) return new E();
    let r =
        a._r67b2028c158598 * e.gridX + a._r67b2028c158598 / 2 - this.var_39.width / 2,
      t = a._r09adaec8c65507 * e.gridY + a._r09adaec8c65507 / 2 - this.var_39.height / 2;
    return (
      r < 0 && (r = 0),
      r + this.var_39.width > a._rec1b92bda35306 &&
        (r = a._rec1b92bda35306 - this.var_39.width),
      t < 0 && (t = 0),
      t + this.var_39.height > a._r12c7f8e2b75b77 &&
        (t = a._r12c7f8e2b75b77 - this.var_39.height),
      new E(Math.floor(r), Math.floor(t))
    );
  }
}
