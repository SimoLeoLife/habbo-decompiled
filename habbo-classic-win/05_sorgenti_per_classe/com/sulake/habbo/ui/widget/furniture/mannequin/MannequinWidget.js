// Estratto da HabboAirLauncher.deobf.js, riga 317842.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/furniture/mannequin/MannequinWidget.as
// Nome offuscato: _ie4eb1e1696637d

class a extends RoomWidgetBase {
  static {
    n(this, "MannequinWidget");
  }
  static _r44124aa78b9478 = 0;
  static _r639a80223de3f3 = 1;
  static _re4eafbdabc1551 = 2;
  static CONTENT_NO_CLUB = 3;
  static CONTENT_WRONG_GENDER = 4;
  static const_181 = "header_button_close";
  static const_150 = "save_button";
  static const_256 = "wear_button";
  static const_1265 = "configure_button";
  static const_185 = "get_club_button";
  static const_257 = "cancel_text";
  static const_483 = "back_region";
  static const_300 = "ok_button";
  static ELEM_OUTFIT_NAME_SET = "outfit_name_set";
  static const_226 = "outfit_name_show";
  static _rf41d6205b54dff = 0;
  static _r7a7c56dc973707 = 1;
  static _r27279221293ea6 = 2;
  static _r6267f962ebd901 = 0;
  static NAME_TEXT_COLOR_WRITING = 8956552;
  static NAME_TEXT_COLOR_HINT = 7829367;
  static MANNEQUIN_CLOTHING_PART_TYPES = [
    AvatarFigurePartType.CHEST_ACCESSORY,
    AvatarFigurePartType.COAT_CHEST,
    AvatarFigurePartType.CHEST,
    AvatarFigurePartType.const_94,
    AvatarFigurePartType.SHOES,
    AvatarFigurePartType.const_585,
  ];
  static _r17a894f8daac23 = ["hd", 99999, [99998]];
  static ICON_STYLE_CLUB = 13;
  static ICON_STYLE_VIP = 14;
  _window = null;
  var_2287 = 0;
  _re8ff95e2504057 = "";
  _r95623a47dcaf21 = "";
  var_2005 = 0;
  _r0838ae00cf5b61 = "";
  var_3173 = -1;
  constructor(e, r, t = null, i = null) {
    (super(e, r, t, i), (this.handler.widget = this));
  }
  get handler() {
    return this._handler;
  }
  dispose() {
    this.disposed || (this._window?.dispose(), (this._window = null), super.dispose());
  }
  open(e, r, t, i) {
    ((this.var_2287 = e),
      (this._re8ff95e2504057 = r),
      (this._r95623a47dcaf21 = t),
      (this._r0838ae00cf5b61 = i));
    let s = this.handler.container?._r2eac8239a09fe7,
      o = this.handler.container?.sessionDataManager,
      d = this.handler.container?._rf0eb5f07c94cfb,
      c = d?._r2d55396cf4177f(r),
      f =
        (s?.isRoomOwner ?? !1) ||
        (s?._rea9739215487be ?? 0) >= RoomControllerLevelEnum.ROOM_CONTROLLER ||
        (o?.isAnyRoomController ?? !1);
    this.var_2005 = d?._rb5bd4544228d96(c, t, a.MANNEQUIN_CLOTHING_PART_TYPES) ?? 0;
    let l = this.resolveFirstWindowContent(f, o?.gender ?? "", o?.clubLevel ?? 0, t, this.var_2005);
    this.setWindowContent(l);
    let b = this._r0838ae00cf5b61 !== "" ? a._r27279221293ea6 : a._rf41d6205b54dff;
    (this.getNameFromView(b), this._window != null && (this._window.visible = !0));
  }
  resolveFirstWindowContent(e, r, t, i, s) {
    return e
      ? a._r44124aa78b9478
      : r.toLowerCase() !== i.toLowerCase()
        ? a.CONTENT_WRONG_GENDER
        : t < s
          ? a.CONTENT_NO_CLUB
          : a._re4eafbdabc1551;
  }
  setWindowContent(e) {
    let r = this.handler.container?.sessionDataManager,
      t = this.handler.container?._rf0eb5f07c94cfb,
      i = r?.figure ?? "",
      s = this._r0838ae00cf5b61 !== "" ? a._r27279221293ea6 : a._rf41d6205b54dff;
    this._window == null &&
      ((this._window = this.windowManager?.buildFromXML(
        this.assets?.getAssetByName("mannequin_widget_frame_xml")?.content,
      )),
      this.addClickListener(a.const_181),
      this._window?.center());
    let d = this._window?.content;
    if (d == null) return;
    d.numChildren > 0 && d.removeChildAt(0);
    let c = this.createWindow(e);
    d.addChild(c);
    let f = null,
      l = null;
    switch (e) {
      case a._r44124aa78b9478:
        (this.addClickListener(a.const_1265),
          this.addClickListener(a.const_256),
          this._rb56e09822d9cf1(a.ELEM_OUTFIT_NAME_SET),
          this.addClickListener(a.ELEM_OUTFIT_NAME_SET),
          (l = t?._r2d55396cf4177f(this._re8ff95e2504057) ?? null),
          this._rc6d0ed381702af(l),
          (f = this._r274f6640e76241(l?.parseFigureString() ?? "")),
          this.updateClubLevelView(this.var_2005),
          this.getNameFromView(s),
          this.updateDecorations());
        break;
      case a._r639a80223de3f3:
        (this.addClickListener(a.const_150),
          this.addClickListener(a.const_483),
          (l = t?._r2d55396cf4177f(i) ?? null),
          this._rc6d0ed381702af(l),
          (f = this._r274f6640e76241(l?.parseFigureString() ?? "")),
          this.updateClubLevelView(t?._rb5bd4544228d96(l, r?.gender ?? "", a.MANNEQUIN_CLOTHING_PART_TYPES) ?? 0),
          this.getNameFromView(s));
        break;
      case a._re4eafbdabc1551:
        (this.addClickListener(a.const_256),
          (l = this.applyMannequinOutfit(i, this._re8ff95e2504057)),
          (f = this._r274f6640e76241(l?.parseFigureString() ?? "")),
          this.updateClubLevelView(this.var_2005),
          this.getNameFromView(s));
        break;
      case a.CONTENT_NO_CLUB:
        (this.addClickListener(a.const_185),
          (l = this.applyMannequinOutfit(i, this._re8ff95e2504057)),
          (f = this._r274f6640e76241(l?.parseFigureString() ?? "")),
          this.updateClubLevelView(this.var_2005));
        break;
      case a.CONTENT_WRONG_GENDER:
        (this.addClickListener(a.const_300),
          (l = t?._r2d55396cf4177f(this._re8ff95e2504057) ?? null),
          this._rc6d0ed381702af(l),
          (f = this._r274f6640e76241(l?.parseFigureString() ?? "")),
          this.updateClubLevelView(this.var_2005));
        break;
      default:
        throw new Error(`Invalid type for mannequin widget content apply: ${e}`);
    }
    this.updatePreviewImage(c, f);
  }
  createWindow(e) {
    let r = null;
    switch (e) {
      case a._r44124aa78b9478:
        r = this._assets?.getAssetByName("mannequin_controller_main_xml") ?? null;
        break;
      case a._r639a80223de3f3:
        r = this._assets?.getAssetByName("mannequin_controller_save_xml") ?? null;
        break;
      case a._re4eafbdabc1551:
        r = this._assets?.getAssetByName("mannequin_peer_main_xml") ?? null;
        break;
      case a.CONTENT_NO_CLUB:
        r = this._assets?.getAssetByName("mannequin_no_club_xml") ?? null;
        break;
      case a.CONTENT_WRONG_GENDER:
        r = this._assets?.getAssetByName("mannequin_wrong_gender_xml") ?? null;
        break;
      default:
        throw new Error(`Invalid type for mannequin widget content creation: ${e}`);
    }
    return this.handler.container?.windowManager?.buildFromXML(r?.content);
  }
  _rc6d0ed381702af(e) {
    for (let r of e?.getPartTypeIds() ?? []) a.MANNEQUIN_CLOTHING_PART_TYPES.indexOf(r) === -1 && e?.removePart(r);
    e?.updatePart(a._r17a894f8daac23[0], a._r17a894f8daac23[1], a._r17a894f8daac23[2]);
  }
  _r274f6640e76241(e) {
    let r = this.handler.container?._rf0eb5f07c94cfb?._r274f6640e76241(e, fr.LARGE),
      t = r?._rb2bd48e3b4d265(class_2123.const_252) ?? null;
    return (r?.dispose(), t);
  }
  applyMannequinOutfit(e, r) {
    let t = this.handler.container?._rf0eb5f07c94cfb,
      i = t?._r2d55396cf4177f(e) ?? null,
      s = t?._r2d55396cf4177f(r) ?? null;
    for (let o of a.MANNEQUIN_CLOTHING_PART_TYPES) i?.removePart(o);
    for (let o of s?.getPartTypeIds() ?? [])
      i?.updatePart(o, s?.getPartSetId(o) ?? 0, s?.getPartColorIds(o) ?? []);
    return i;
  }
  updateClubLevelView(e) {
    let r = this._window?.findChildByName("club_icon");
    if (r != null)
      switch (e) {
        case dr.NO_CLUB:
          r.visible = !1;
          break;
        case dr.CLUB:
          ((r.style = a.ICON_STYLE_CLUB), (r.visible = !0));
          break;
        case dr.VIP:
          ((r.style = a.ICON_STYLE_VIP), (r.visible = !0));
          break;
      }
  }
  updatePreviewImage(e, r) {
    if (e == null || r == null) return;
    let t = e.findChildByName("preview_image");
    if (t == null) return;
    t.bitmap == null && (t.bitmap = new A(t.width, t.height));
    let s = this.assets?.getAssetByName("mannequin_preview_bg_png")?.content;
    s != null && t.bitmap.copyPixels(s, s.rect, new E(0, 0));
    let o = new E((t.width - r.width) / 2, (t.height - r.height) / 2);
    t.bitmap.copyPixels(r, r.rect, o, null, null, !0);
  }
  updateDecorations() {
    let e = this._window?.findChildByName("write_deco");
    if (e != null) {
      let r = this._assets?.getAssetByName("small_pen");
      ((e.bitmap = r?.content), (e.disposesBitmap = !1));
    }
  }
  close() {
    this._window != null && (this._window.visible = !1);
  }
  getNameFromView(e) {
    this.var_3173 = e;
    let r = this._window?.findChildByName(a.ELEM_OUTFIT_NAME_SET);
    if (r != null)
      switch (e) {
        case a._rf41d6205b54dff:
          ((r.text =
            this.handler.container?.localization?.getLocalization("mannequin.widget.set_name_hint") ?? ""),
            (r.textColor = a.NAME_TEXT_COLOR_HINT),
            (r.italic = !0));
          break;
        case a._r7a7c56dc973707:
          ((r.textColor = a.NAME_TEXT_COLOR_WRITING), (r.italic = !1));
          break;
        case a._r27279221293ea6:
          ((r.text = this._r0838ae00cf5b61), (r.textColor = a._r6267f962ebd901), (r.italic = !1));
          break;
        default:
          ((r.text =
            this.handler.container?.localization?.getLocalization("mannequin.widget.set_name_hint") ?? ""),
            (r.textColor = a.NAME_TEXT_COLOR_HINT));
          break;
      }
    let t = this._window?.findChildByName(a.const_226);
    t != null && this._r0838ae00cf5b61 !== "" && (t.text = `'${this._r0838ae00cf5b61}'`);
  }
  clearNameField() {
    let e = this._window?.findChildByName(a.ELEM_OUTFIT_NAME_SET);
    e != null && (e.text = "");
  }
  _rc61b63090f2cf1() {
    this.handler.container?.connection?.send(new _i51aaafbed7ebd3(this.var_2287));
  }
  _r26bb83f13ec17f() {
    let e = this._re24f2cd8fd8262();
    (this.handler.container?.connection?.send(new class_2840(this.var_2287, e)),
      (this._r0838ae00cf5b61 = e),
      this.getNameFromView(a._r27279221293ea6));
  }
  _re24f2cd8fd8262() {
    let e = this._window?.findChildByName(a.ELEM_OUTFIT_NAME_SET)?.text ?? "",
      r = this.handler.container?.localization?.getLocalization("mannequin.widget.set_name_hint") ?? "";
    return e === r ? "" : e;
  }
  addClickListener(e) {
    this._window?.findChildByName(e)?.addEventListener(u.CLICK, this.onMouseClick);
  }
  _rb56e09822d9cf1(e) {
    this._window?.findChildByName(e)?.addEventListener(sr.const_900, this._r2f23d7ab8a17be);
  }
  _r2f23d7ab8a17be = n((e) => {
    e.keyCode === 13
      ? this._r26bb83f13ec17f()
      : this.var_3173 !== a._r7a7c56dc973707 && this.getNameFromView(a._r7a7c56dc973707);
  }, "_r2f23d7ab8a17be");
  onMouseClick = n((e) => {
    let r = this.handler.container?.sessionDataManager;
    switch (e.target?.name) {
      case a.const_181:
      case a.const_257:
      case a.const_300:
        this.close();
        break;
      case a.const_150:
        (this._rc61b63090f2cf1(), this.close());
        break;
      case a.const_256:
        (r?.clubLevel ?? 0) < this.var_2005
          ? this.setWindowContent(a.CONTENT_NO_CLUB)
          : (r?.gender ?? "").toLowerCase() !== this._r95623a47dcaf21.toLowerCase()
            ? this.setWindowContent(a.CONTENT_WRONG_GENDER)
            : (this.handler.container?.connection?.send(new class_3808(this.var_2287)), this.close());
        break;
      case a.const_1265:
        (this._r26bb83f13ec17f(), this.setWindowContent(a._r639a80223de3f3));
        break;
      case a.const_483:
        this.setWindowContent(a._r44124aa78b9478);
        break;
      case a.const_185:
        (this.handler.container?.catalog?.openClubCenter(), this.close());
        break;
      case a.ELEM_OUTFIT_NAME_SET:
        this.var_3173 === a._rf41d6205b54dff
          ? (this.clearNameField(), this.getNameFromView(a._r7a7c56dc973707))
          : this.var_3173 === a._r27279221293ea6 && this.getNameFromView(a._r7a7c56dc973707);
        break;
    }
  }, "onMouseClick");
}
