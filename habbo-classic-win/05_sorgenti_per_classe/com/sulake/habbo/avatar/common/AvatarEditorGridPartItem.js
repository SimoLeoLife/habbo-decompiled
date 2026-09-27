// Extracted from HabboAirLauncher.deobf.js, line 165655.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/common/AvatarEditorGridPartItem.as
// Obfuscated name: _i5a2e0c5c118229

class a {
  static {
    n(this, "AvatarEditorGridPartItem");
  }
  static _r136adfe8baebde = null;
  static _r5f7f6e23b9324a = [2, 6, 0, 4, 3, 1];
  static _r8f3639745a063a = [
    AvatarFigurePartType.const_955,
    AvatarFigurePartType.const_1141,
    AvatarFigurePartType.LEFT_SLEEVE,
    AvatarFigurePartType.LEFT_COAT_SLEEVE,
    AvatarFigurePartType.const_752,
    AvatarFigurePartType.PET_LEFT,
    AvatarFigurePartType.BODY,
    AvatarFigurePartType.SHOES,
    AvatarFigurePartType.const_94,
    AvatarFigurePartType.CHEST,
    AvatarFigurePartType.CHEST_ACCESSORY,
    AvatarFigurePartType.COAT_CHEST,
    AvatarFigurePartType.CHEST_PRINT,
    AvatarFigurePartType.MISC,
    AvatarFigurePartType.PET,
    AvatarFigurePartType.const_585,
    AvatarFigurePartType.const_843,
    AvatarFigurePartType.RIGHT_SLEEVE,
    AvatarFigurePartType.RIGHT_COAT_SLEEVE,
    AvatarFigurePartType.MISC_RIGHT,
    AvatarFigurePartType.PET_RIGHT,
    AvatarFigurePartType.HEAD,
    AvatarFigurePartType.const_1061,
    AvatarFigurePartType.EYES,
    AvatarFigurePartType.HAIR,
    AvatarFigurePartType.const_431,
    AvatarFigurePartType.const_621,
    AvatarFigurePartType.const_500,
    AvatarFigurePartType.const_680,
    AvatarFigurePartType.const_1106,
    AvatarFigurePartType.const_1215,
  ];
  var_38;
  _window;
  var_989;
  var_1221;
  _r0965e8b4af4e87;
  _useColors;
  var_2619 = !1;
  var_1072;
  _r8ff39eb1e816fe = null;
  var_4268 = 0;
  var_789;
  var_1271 = !1;
  _isDisabledForWearing;
  constructor(e, r, t, i, s = !0, o = !1) {
    ((this.var_38 = r),
      (this.var_1221 = t),
      (this._window = e),
      (this.var_989 = this._window.findChildByTag("BG_COLOR")),
      (this._r0965e8b4af4e87 = i),
      (this._useColors = s),
      (this._isDisabledForWearing = o),
      (this.var_1072 = t == null ? new A(1, 1, !0, 16777215) : null));
    for (let d of t?.parts ?? []) this.var_4268 = Math.max(this.var_4268, d._rf7b43ebbad6f14);
    ((this.var_789 = this.var_38.controller.manager._rf0eb5f07c94cfb),
      this._window.addEventListener?.(u.OVER, this._rad325cc53260a0),
      this._window.addEventListener?.(u.OUT, this.onMousetOut),
      this.updateThumbVisualization());
  }
  dispose() {
    this.var_1271 ||
      ((this.var_38 = null),
      (this.var_1221 = null),
      this._window?.dispose(),
      (this._window = null),
      this.var_1072?.dispose(),
      (this.var_1072 = null),
      (this.var_989 = null),
      (this._r8ff39eb1e816fe = null),
      (this.var_789 = null),
      (this._r0965e8b4af4e87 = null),
      (this.var_1271 = !0));
  }
  get disposed() {
    return this.var_1271;
  }
  get view() {
    return this._window;
  }
  get isSelected() {
    return this.var_2619;
  }
  set isSelected(e) {
    ((this.var_2619 = e), this.updateThumbVisualization());
  }
  get id() {
    return this.var_1221?.id ?? -1;
  }
  get _ra31833029c75f7() {
    return this.var_4268;
  }
  update() {
    this.updateThumbVisualization();
  }
  set _r145cc0394d677f(e) {
    ((this.var_1072 = e), this.updateThumbVisualization());
  }
  get partSet() {
    return this.var_1221;
  }
  set colors(e) {
    ((this._r0965e8b4af4e87 = e), this.updateThumbVisualization());
  }
  get _ra5c822ed8d6c34() {
    return this._isDisabledForWearing;
  }
  avatarImageReady(e) {
    this._r1d8a5ef67daecd() && this.updateThumbVisualization();
  }
  onMousetOut = n((e) => {
    (!this.var_2619 && this.var_989 != null && (this.var_989.visible = !1),
      this.var_989 != null && (this.var_989.blend = 1));
  }, "onMousetOut");
  _rad325cc53260a0 = n((e) => {
    (!this.var_2619 &&
      this.var_989 != null &&
      ((this.var_989.visible = !0), (this.var_989.blend = 0.5)),
      !1);
  }, "_rad325cc53260a0");
  updateThumbVisualization() {
    if (this._window == null || this._window.disposed) return;
    let e = this._window.findChildByName("bitmap");
    if (e != null) {
      let i = null;
      if (
        (this.var_1072 != null && !this._useColors
          ? (i = this.var_1072)
          : (i = this.renderThumb()),
        i != null)
      ) {
        let s = e.bitmap ?? new A(e.width, e.height, !0, 16777215);
        s.fillRect(s.rect, 16777215);
        let o = Math.trunc((s.width - i.width) / 2),
          d = Math.trunc((s.height - i.height) / 2);
        (s.copyPixels(i, i.rect, new E(o, d), null, null, !0),
          this._isDisabledForWearing && this.setAlpha(s, 0.2),
          (e.bitmap = s));
      }
    }
    let r = this._window.findChildByTag("CLUB_ICON"),
      t = this._window.findChildByTag("SELLABLE_ICON");
    (this.var_1221 != null
      ? (r != null && (r.visible = this.var_1221.clubLevel > 0),
        t != null && (t.visible = this.var_1221.isSellable))
      : (r != null && (r.visible = !1), t != null && (t.visible = !1)),
      this.var_989 != null &&
        ((this.var_989.visible = this.var_2619), (this.var_989.blend = 1)),
      this._window.invalidate());
  }
  _r1d8a5ef67daecd() {
    if (
      this.var_38 == null ||
      this.var_1221?.parts == null ||
      this.var_1221.parts.length === 0 ||
      this.var_789 == null
    )
      return ((this._r8ff39eb1e816fe = null), !1);
    let e = this.var_789._r2d55396cf4177f(
      `${this.var_1221.type}-${this.var_1221.id}`,
    );
    if (e == null || !this.var_789._r74e7e07da14064(e))
      return (this.var_789._rc5aabe10f74a58(e, this), !1);
    let r = 0,
      t = !1,
      i = new D();
    for (let s of this.var_1221.parts) {
      let o = null;
      if (t)
        o = UnkClass_b619bf.as({
          value: this.var_789.getAssetByName(this.getAssetName(s, r)),
          _r35f8c7df03c28f: Qt,
        });
      else
        for (r = 0; !t && r < a._r5f7f6e23b9324a.length;)
          ((o = UnkClass_b619bf.as({
            value: this.var_789.getAssetByName(this.getAssetName(s, r)),
            _r35f8c7df03c28f: Qt,
          })),
            o?.content != null ? (t = !0) : r++);
      o?.content != null &&
        (i = i.union(new D(-o.offset.x, -o.offset.y, o.rectangle.width, o.rectangle.height)));
    }
    return i.width > 0 ? ((this._r8ff39eb1e816fe = i), !0) : !1;
  }
  renderThumb() {
    if (this.var_1221 == null || this.var_38 == null) return null;
    if (this._r8ff39eb1e816fe == null && !this._r1d8a5ef67daecd()) {
      if (a._r136adfe8baebde == null) {
        let s = this.var_38.controller.manager.windowManager.assets.getAssetByName(
          "avatar_editor_avatar_editor_download_icon",
        );
        a._r136adfe8baebde = s?.content;
      }
      return a._r136adfe8baebde;
    }
    if (this.var_789 == null || this._r8ff39eb1e816fe == null) return null;
    let e = new A(this._r8ff39eb1e816fe.width, this._r8ff39eb1e816fe.height, !0, 16777215),
      r = 0,
      t = !1,
      i = [...this.var_1221.parts].sort(this._r0ef646f4f9ba74);
    for (let s of i) {
      let o = null;
      if (t)
        o = UnkClass_b619bf.as({
          value: this.var_789.getAssetByName(this.getAssetName(s, r)),
          _r35f8c7df03c28f: Qt,
        });
      else
        for (r = 0; !t && r < a._r5f7f6e23b9324a.length;)
          ((o = UnkClass_b619bf.as({
            value: this.var_789.getAssetByName(this.getAssetName(s, r)),
            _r35f8c7df03c28f: Qt,
          })),
            o?.content != null ? (t = !0) : r++);
      if (o?.content == null) continue;
      let d = o.content,
        c = -o.offset.x - this._r8ff39eb1e816fe.x,
        f = -o.offset.y - this._r8ff39eb1e816fe.y,
        l = null;
      if (
        (this._useColors &&
          s._rf7b43ebbad6f14 > 0 &&
          (l = this._r0965e8b4af4e87?.[s._rf7b43ebbad6f14 - 1]?.colorTransform ?? null),
        l != null)
      ) {
        let b = new D(c, f, o.rectangle.width, o.rectangle.height);
        e.draw(d, new Pe(1, 0, 0, 1, -o.rectangle.x + c, -o.rectangle.y + f), l, null, b);
      } else e.copyPixels(d, o.rectangle, new E(c, f), null, null, !0);
    }
    return e;
  }
  setAlpha(e, r) {
    let t = new D(0, 0, e.width, e.height),
      i = new UnkClass_4210dc();
    return ((i.alphaMultiplier = r), e.colorTransform(t, i), e);
  }
  _r0ef646f4f9ba74 = n((e, r) => {
    let t = a._r8f3639745a063a.indexOf(e.type),
      i = a._r8f3639745a063a.indexOf(r.type);
    return t < i ? -1 : t > i ? 1 : e.index < r.index ? -1 : e.index > r.index ? 1 : 0;
  }, "_r0ef646f4f9ba74");
  getAssetName(e, r) {
    return `${Ra.SCALE}_${Ra.ACTION}_${e.type}_${e.id}_${a._r5f7f6e23b9324a[r]}_${Ra.DEFAULT_FRAME}`;
  }
}
