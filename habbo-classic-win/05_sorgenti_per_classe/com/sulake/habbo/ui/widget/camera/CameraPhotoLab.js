// Estratto da HabboAirLauncher.deobf.js, riga 304404.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/camera/CameraPhotoLab.as
// Nome offuscato: _i3ee8177d1a400b

class a {
  constructor(e) {
    this.var_17 = e;
  }
  static {
    n(this, "CameraPhotoLab");
  }
  static TEXT_WIDTH_MARGIN = 6;
  static var_281 = null;
  _window = null;
  var_257 = null;
  _r1536698b334ce7 = null;
  _r70ae74c4b81ea8 = null;
  _ra6e0647673d9de = null;
  _r997ea9e965e7e7 = null;
  _re797f9b2a35146 = new B();
  _r3e30777a814fac = null;
  _rbb3a0dc4f25653 = new B();
  _captionInputKeyEvents = 0;
  var_4500 = "";
  _r74a5ff1ce1131d = !1;
  _disposed = !1;
  static preloadEffects(e, r, t) {
    let i = [],
      s = Xo.getEffects(r, t);
    for (let o of s.getValues())
      (o.type === Xo.const_469 || o.type === Xo.TYPE_FRAME) && i.push(o.name);
    E5.init(e, i);
  }
  get disposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed ||
      (a.var_281?.hide(),
      (a.var_281 = null),
      Xo.resetAllEffects(),
      this._window?.dispose(),
      (this._window = null),
      (this.var_257 = null),
      (this._r1536698b334ce7 = null),
      this._r70ae74c4b81ea8?.dispose(),
      (this._r70ae74c4b81ea8 = null),
      (this._ra6e0647673d9de = null),
      (this._r997ea9e965e7e7 = null),
      this._re797f9b2a35146.dispose(),
      this._rbb3a0dc4f25653.dispose(),
      (this.var_17 = null),
      (this._disposed = !0));
  }
  openPhotoLab(e) {
    if (
      ((this._window = this.var_17?.getXmlWindow("camera_editor")),
      this._window?.center(),
      this.var_17?.component?.getProperty("camera.effects.enabled") !== "true")
    ) {
      this.openPurchaseConfirmationDialog();
      return;
    }
    ((this._r3e30777a814fac = this._window?.findChildByName("item_grid")),
      this._r3e30777a814fac != null && (this._r3e30777a814fac.spacing = 7),
      (this.var_257 = this._window?.findChildByName("image")),
      this._window != null && (this._window.procedure = this._r4d2fcea4870df2));
    let r = this._window?.findChildByName("captionInput");
    r && (r.procedure = this._rce1e1cacdc3935);
    let s = this._window
      ?.findChildByName("zoom_button")
      ?.getChildByName("centerizer")
      ?.getChildByName("zoom_text");
    s != null && (s.width = s.textWidth + a.TEXT_WIDTH_MARGIN);
    let c = this._window
      ?.findChildByName("save_button")
      ?.getChildByName("centerizer")
      ?.getChildByName("save_text");
    (c != null && (c.width = c.textWidth + a.TEXT_WIDTH_MARGIN),
      this.buildTypeButtons(),
      this._r949f6115ace1fa(e),
      (this._ra6e0647673d9de = this._window?.findChildByName("slider_effect_info")),
      Xo.resetAllEffects());
  }
  setCaptionText(e) {
    let r = this._window?.findChildByName("captionInput");
    r && (r.text = e);
  }
  show() {
    this._window && (this._window.visible = !0);
  }
  hide() {
    this._window && (this._window.visible = !1);
  }
  _r14eef60056b71e() {
    (a.var_281?.hide(), (a.var_281 = null));
  }
  _rb81b76fb8d08e4() {
    a.var_281?.animateIconToToolbar();
  }
  publishingStatus(e) {
    a.var_281?.publishingStatus(e);
  }
  competitionStatus(e) {
    a.var_281?.competitionStatus(e);
  }
  _r48a3a22a089836(e) {
    a.var_281?.setImageUrl(e);
  }
  _r74bfd6dd44b3ff() {
    let e = [];
    for (let r of this._re797f9b2a35146.getValues())
      r.isOn &&
        r.type !== Xo.TYPE_FRAME &&
        e.push({ name: r.name, alpha: Math.trunc(r.getEffectStrength() * 255) });
    for (let r of this._re797f9b2a35146.getValues())
      r.isOn && r.type === Xo.TYPE_FRAME && e.push({ name: r.name });
    return JSON.stringify(e);
  }
  _r6ce5404507323d() {
    return this._r74a5ff1ce1131d ? 2 : 1;
  }
  _rbd256feca047d6(e) {
    this._r997ea9e965e7e7 != null &&
      ((this._r997ea9e965e7e7.value = e), this.updateSliderEffectInfo(), this._r4cd3284f436274());
  }
  _r949f6115ace1fa(e) {
    ((this._r1536698b334ce7 = e.clone()),
      this.var_257 != null && (this.var_257.bitmap = e),
      this.buildFilterButtons());
  }
  updateSliderEffectInfo() {
    this._ra6e0647673d9de == null ||
      this._r997ea9e965e7e7 == null ||
      ((this._ra6e0647673d9de.text = `${this._r997ea9e965e7e7.description} ${Math.trunc(this._r997ea9e965e7e7.getEffectStrength() * 100)}%`),
      (this._ra6e0647673d9de.width = this._ra6e0647673d9de.textWidth + a.TEXT_WIDTH_MARGIN));
  }
  buildTypeButtons() {
    if (this._rbb3a0dc4f25653.length > 0 || this._window == null || this._r3e30777a814fac == null)
      return;
    let e = (this._window.margins.left ?? 0) + this._r3e30777a814fac.x,
      r = 6,
      t = 2,
      i = this.createTypeButton(Xo.TYPE_COLORMATRIX, "camera_icon_colorfilter");
    ((i.x = e + (this._r3e30777a814fac.width - (t * (i.width + r) - r)) / 2),
      (i.y = 50),
      this._window.addChild(i));
    let s = this.createTypeButton(Xo.const_469, "camera_icon_compositefilter");
    ((s.x = i.right + r), (s.y = i.y), this._window.addChild(s));
  }
  buildFilterButtons() {
    if (this.var_17 == null || this._window == null || this._r1536698b334ce7 == null)
      return;
    if (!E5._r9d95529f4d996a()) {
      setTimeout(() => this.buildFilterButtons(), 200);
      return;
    }
    let e = 0,
      r = this.var_17.handler._r15b2ea2c393fea?.questEngine;
    r != null &&
      ((e = r._r35a7c98ac17978("explore", "ACH_CameraPhotoCount")),
      e === 0 && (e = r._r35a7c98ac17978("archive", "ACH_CameraPhotoCount")));
    let t = Xo.getEffects(
      this.var_17.component?.getProperty("camera.available.effects") ?? "",
      this.var_17.localizations,
    );
    for (let s of t.getValues()) {
      let o = this.createFxButton(s, this._r1536698b334ce7.clone(), e);
      if (o != null) {
        let d = s.description;
        (e < s.var_5690 &&
          (d = `${this.var_17.localizations?.getLocalization("camera.effect.required.level", "camera.effect.required.level") ?? ""} ${s.var_5690}`),
          (o.toolTipCaption = d));
      }
    }
    let i = this._window.findChildByName("slider_container");
    ((this._r70ae74c4b81ea8 = new CameraFxStrengthSlider(this, i, this.var_17.windowManager?.assets)),
      this._r70ae74c4b81ea8.disable(),
      Xo.setMaxValue(this._r70ae74c4b81ea8.getScale()),
      this._r4520cca99fb268(Xo.TYPE_COLORMATRIX));
  }
  createTypeButton(e, r) {
    let t = this.var_17?.getXmlWindow("camera_typebutton"),
      i = t?.findChildByName("icon"),
      s = this.var_17?.windowManager?.assets.getAssetByName(r);
    return (
      i != null && s?.content instanceof A && (i.bitmap = s.content.clone()),
      t != null && ((t.name = `typebutton,${e}`), (t.toolTipCaption = e), this._rbb3a0dc4f25653.add(e, t)),
      t
    );
  }
  createFxButton(e, r, t) {
    let i = this.var_17?.getXmlWindow("camera_filterbutton");
    if (i == null) return null;
    if (t >= e.var_5690) {
      let s = i.findChildByName("content");
      if (s != null) {
        s.bitmap = new A(Math.max(1, s.width), Math.max(1, s.height), !0, 0);
        let o = s.width / r.width,
          d = new Pe();
        switch ((d.scale(o, o), e.type)) {
          case Xo.TYPE_COLORMATRIX:
            r.applyFilter(r, r.rect, new E(0, 0), e.getColorMatrixFilter(!0));
            break;
          case Xo.const_469: {
            let f = E5._rb09602dca8db26(e.name);
            if (f == null) return null;
            r.draw(f, void 0, null, e._r1f60835f66e03b ?? ie.NORMAL, void 0, !0);
            break;
          }
          case Xo.TYPE_FRAME: {
            let f = E5._rb09602dca8db26(e.name);
            if (f == null) return null;
            r.draw(f, void 0, null, void 0, void 0, !0);
            break;
          }
        }
        let c = new _i3a5c6f457acdad();
        ((c.bitmapData = r), s.bitmap.draw(c, d, null, void 0, void 0, !0));
      }
      i.procedure = this.effectButtonClick;
    } else {
      let s = i.findChildByName("lock_indicator");
      s && (s.visible = !0);
    }
    return ((i.name = e.name), (e.button = i), this._re797f9b2a35146.setProperty(i.name, e), i);
  }
  effectButtonClick = n((e, r) => {
    if (e.type !== u.CLICK) return;
    if (r.name === "remove_effect_button") {
      let i = this._re797f9b2a35146.getProperty(r.parent?.name ?? "");
      i != null &&
        (i.setChosen(!1),
        this._r997ea9e965e7e7 === i && (this._r70ae74c4b81ea8?.disable(), (this._r997ea9e965e7e7 = null)),
        this._r4cd3284f436274());
      return;
    }
    let t = this._re797f9b2a35146.getProperty(r.name);
    t != null && this._r94e944e5949711(t);
  }, "effectButtonClick");
  _rce1e1cacdc3935 = n((e, r) => {
    if (e.type === sr.const_1081) {
      let t = e;
      this._captionInputKeyEvents = t.ctrlKey || t.charCode === 0 ? 0 : this._captionInputKeyEvents + 1;
    } else if (e.type === sr.const_900) this._captionInputKeyEvents = 0;
    else if (e.type === y.WINDOW_EVENT_CHANGE) {
      let t = this._window?.findChildByName("captionInput");
      (this._captionInputKeyEvents === 1
        ? (this.var_4500 = t?.text ?? "")
        : this.setCaptionText(this.var_4500),
        (this._captionInputKeyEvents = 0));
    }
  }, "_rce1e1cacdc3935");
  openPurchaseConfirmationDialog() {
    if (
      (a.var_281?.hide(),
      this.var_17?.container?.sessionDataManager?.isAccountSafetyLocked())
    ) {
      (this.var_17.windowManager?.alert(
        "${generic.alert.title}",
        "${notifications.text.safety_locked}",
        0,
        null,
      ),
        this.var_17.component?.getProperty("camera.effects.enabled") !== "true" && this.dispose());
      return;
    }
    let e = this._window?.findChildByName("captionInput")?.text ?? "";
    a.var_281 = new yIe(this.var_17, e);
    let r = this.var_17?._r118dee08011e08() ?? !1;
    (a.var_281.setPrices(
      this.var_17?.handler._re27c006a73d42e ?? 0,
      this.var_17?.handler._rfc8c5432c23056 ?? 0,
      this.var_17?.handler._r845c4a32d260e6 ?? 0,
    ),
      this.var_17?.handler.containerRef?._r697386a8fb5bf8?.trackEventLog(
        "Stories",
        "camera",
        "stories.photo.purchase_dialog_opened",
      ),
      r ||
        (a.var_281._r1268cc63ab99a5(),
        this.var_17?.windowManager?.alert(
          "${generic.alert.title}",
          "${camera.alert.too_much_stuff}",
          0,
          null,
        )),
      this.hide());
  }
  _r1bbb9a3c6fbf82() {
    let e = this.var_257?.bitmap?.clone();
    if (e == null || typeof document > "u" || typeof URL > "u") return;
    let t = _i5497c416442b2b.encode(e).toUint8Array(),
      i = new Uint8Array(t.length);
    i.set(t);
    let s = new Blob([i], { type: "image/png" }),
      o = document.createElement("a"),
      d = new Date(),
      c = `Habbo_${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}_${String(d.getHours()).padStart(2, "0")}-${String(d.getMinutes()).padStart(2, "0")}-${String(d.getSeconds()).padStart(2, "0")}.png`,
      f = URL.createObjectURL(s);
    ((o.href = f), (o.download = c), o.click(), setTimeout(() => URL.revokeObjectURL(f), 0));
  }
  logChosenEffects() {
    for (let e of this._re797f9b2a35146.getValues())
      e.isOn &&
        this.var_17?.handler.containerRef?._r697386a8fb5bf8?.trackEventLog(
          "Stories",
          "camera",
          "stories.photo.effect.chosen",
          e.name,
        );
  }
  _r4d2fcea4870df2 = n((e, r) => {
    if (!(this._disposed || this._window == null || e.type !== u.CLICK)) {
      switch (r.name) {
        case "cancel_button":
          (this.var_17?.startTakingPhoto("effectEditorCancel"), this.dispose());
          return;
        case "header_button_close":
          this.dispose();
          return;
        case "help_button":
          this.var_17?.component?.context._r6b6c989018eb05("habbopages/camera");
          return;
        case "save_button":
          this._r1bbb9a3c6fbf82();
          return;
        case "slider_container":
          return;
        case "zoom_button":
          ((this._r74a5ff1ce1131d = !this._r74a5ff1ce1131d), this._r4cd3284f436274());
          return;
        case "buy_button":
        case "purchase_button":
        case "purchase_display_object":
          (this.logChosenEffects(), this.openPurchaseConfirmationDialog());
          return;
        default:
          (this._r70ae74c4b81ea8?.disable(), this._r997ea9e965e7e7?._r1d0a2ecc77719c());
          break;
      }
      r.name.indexOf("typebutton") !== -1 && this._r4520cca99fb268(r.name.split(",")[1] ?? "");
    }
  }, "_r4d2fcea4870df2");
  _r94e944e5949711(e) {
    (this._r997ea9e965e7e7?._r1d0a2ecc77719c(),
      (this._r997ea9e965e7e7 = e),
      this._r997ea9e965e7e7.setChosen(!0),
      e._r2225d91ce95b74()
        ? (this._r70ae74c4b81ea8?.enable(), this._r70ae74c4b81ea8?.setValue(e.value), this.updateSliderEffectInfo())
        : this._r70ae74c4b81ea8?.disable(),
      e._r137e4b9913349b() && this._r8ce3deebcaa2d6(e),
      this._r4cd3284f436274());
  }
  _r8ce3deebcaa2d6(e) {
    for (let r of this._re797f9b2a35146.getValues()) r.type === e.type && r !== e && r.setChosen(!1);
  }
  _r4520cca99fb268(e) {
    (this._r997ea9e965e7e7?._r1d0a2ecc77719c(), this._r3e30777a814fac?.removeGridItems());
    for (let r of this._re797f9b2a35146.getValues())
      r.type === e && r.button != null && this._r3e30777a814fac?.addGridItem(r.button);
    this.highlightSelectedButtonType(e);
  }
  highlightSelectedButtonType(e) {
    for (let r of this._rbb3a0dc4f25653.getValues()) {
      let t = r.findChildByName("active_border");
      t && (t.visible = r.name === `typebutton,${e}`);
    }
  }
  _r4cd3284f436274() {
    if (this._r1536698b334ce7 == null || this.var_257 == null) return;
    let e = this._r1536698b334ce7.clone();
    if (this._r74a5ff1ce1131d) {
      let r = new Pe();
      ((r.a = 2), (r.d = 2), (r.tx = -e.width / 2), (r.ty = -e.height / 2));
      let t = new A(e.width, e.height);
      (t.draw(e, r), (e = t));
    }
    for (let r of this._re797f9b2a35146.getValues())
      if (r.isOn) {
        if (r.type === Xo.TYPE_COLORMATRIX) e.applyFilter(e, e.rect, new E(0, 0), r.getColorMatrixFilter());
        else if (r.type === Xo.const_469) {
          let t = E5._rb09602dca8db26(r.name);
          if (t != null) {
            let i = new _i4210dc3239901d(1, 1, 1, r.getEffectStrength());
            e.draw(t, void 0, i, r._r1f60835f66e03b ?? ie.NORMAL);
          }
        }
      }
    for (let r of this._re797f9b2a35146.getValues())
      if (r.isOn && r.type === Xo.TYPE_FRAME) {
        let t = E5._rb09602dca8db26(r.name);
        t != null && e.draw(t);
      }
    ((this.var_257.bitmap = e), this.var_257.invalidate());
  }
}
