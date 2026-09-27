// Estratto da HabboAirLauncher.deobf.js, riga 165068.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/view/AvatarEditorNameChangeView.as
// Nome offuscato: _i97b65d24f5d16a

class a {
  static {
    n(this, "AvatarEditorNameChangeView");
  }
  static NAME_SUGGESTION_BG_COLOR = 13232628;
  static NAME_SUGGESTION_BG_COLOR_OVER = 11129827;
  _window = null;
  var_157;
  var_41;
  _ra9d6443b11c86c = null;
  _checkedName = "";
  _pendingName = null;
  var_2096 = !1;
  constructor(e, r = 0, t = 0) {
    ((this.var_157 = e), (this.var_41 = this.var_157.editor.manager));
    let i = this.var_41.assets.getAssetByName("avatar_editor_name_change");
    if (
      ((this._window =
        i != null ? this.var_41.windowManager.buildFromXML(i.content) : null),
      this._window == null)
    )
      return;
    this._window.x = r;
    let s = this.var_41.windowManager.getDesktop(1)?.width ?? this._window.desktop.width;
    (this._window.x + this._window.width > s &&
      (this._window.x = s - this._window.width),
      (this._window.y = t),
      this.initControls());
  }
  focus() {
    this._window?.activate();
  }
  nameCheckWaitBegin() {
    if (this._window != null && !this._window.disposed) {
      (this._window.findChildByName("select_name_button")?.disable(),
        this._window.findChildByName("check_name_button")?.disable(),
        this._window.findChildByName("input")?.disable());
      let e = this._window.findChildByName("info_text");
      e != null &&
        (e.caption =
          this.var_41?.localization?.getLocalization("help.tutorial.name.wait_while_checking") ??
          "");
    }
    this.var_2096 = !0;
  }
  set checkedName(e) {
    ((this._checkedName = e), this._pendingName !== this._checkedName && this.setNameAvailableView());
  }
  get checkedName() {
    return this._checkedName;
  }
  setNameAvailableView() {
    if (this._window == null) return;
    this.nameCheckWaitEnd(!0);
    let e = this._window.findChildByName("info_text");
    if (e == null) return;
    (this.var_41?.localization?._r43eae9731f5b27(
      "help.tutorial.name.available",
      "name",
      this._checkedName,
    ),
      (e.text = this.var_41?.localization?.getLocalization("help.tutorial.name.available") ?? ""));
    let r = this._window.findChildByName("input");
    if (r == null) return;
    r.text = this._checkedName;
    let t = this._window.findChildByName("suggestions");
    t != null && (t.visible = !1);
  }
  setNameNotAvailableView(e, r, t) {
    if (
      (this.nameCheckWaitEnd(!1),
      (this._pendingName = null),
      (this._checkedName = ""),
      this._window == null)
    )
      return;
    let i = this._window.findChildByName("info_text");
    if (i == null) return;
    switch (e) {
      case class_2146.var_3848:
        (this.var_41?.localization?._r43eae9731f5b27("help.tutorial.name.taken", "name", r),
          (i.text = this.var_41?.localization?.getLocalization("help.tutorial.name.taken") ?? ""));
        break;
      case class_2146.var_3283:
        (this.var_41?.localization?._r43eae9731f5b27("help.tutorial.name.invalid", "name", r),
          (i.text =
            this.var_41?.localization?.getLocalization("help.tutorial.name.invalid") ?? ""));
        break;
      case class_2146.var_4893:
        break;
      case class_2146.var_3613:
        i.text = this.var_41?.localization?.getLocalization("help.tutorial.name.long") ?? "";
        break;
      case class_2146.var_3723:
        i.text = this.var_41?.localization?.getLocalization("help.tutorial.name.short") ?? "";
        break;
      case class_2146.var_3022:
        i.text =
          this.var_41?.localization?.getLocalization("help.tutorial.name.change_not_allowed") ??
          "";
        break;
      case class_2146.var_4132:
        i.text =
          this.var_41?.localization?.getLocalization("help.tutorial.name.merge_hotel_down") ?? "";
        break;
    }
    let s = this._window.findChildByName("suggestions");
    if (s != null) {
      if (e === class_2146.var_4132 || e === class_2146.var_3022) {
        s.visible = !1;
        return;
      }
      ((s.visible = !0),
        this._ra9d6443b11c86c?.dispose(),
        (this._ra9d6443b11c86c = new c6e(this.var_41)),
        this._ra9d6443b11c86c.render(t, s));
      for (let o = 0; o < s.numChildren; o++) {
        let d = s.getChildAt(o);
        d != null &&
          ((d.color = a.NAME_SUGGESTION_BG_COLOR),
          d.addEventListener(u.CLICK, this._r14cdb08d2fdd0e),
          d.addEventListener(u.OVER, this._rf86843c613a662),
          d.addEventListener(u.OUT, this._r532c95c5dac6ef));
      }
    }
  }
  nameCheckWaitEnd(e) {
    (this._window != null &&
      !this._window.disposed &&
      (e && this._window.findChildByName("select_name_button")?.enable(),
      this._window.findChildByName("check_name_button")?.enable(),
      this._window.findChildByName("input")?.enable()),
      (this.var_2096 = !1));
  }
  setNormalView() {
    if (this._window == null) return;
    let e = this._window.findChildByName("info_text");
    if (e == null) return;
    e.text = this.var_41?.localization?.getLocalization("help.tutorial.name.info") ?? "";
    let r = this._window.findChildByName("suggestions");
    r != null && (r.visible = !1);
  }
  initControls() {
    this._window != null &&
      ((this._window.procedure = this._r4d2fcea4870df2),
      this._window.findChildByName("select_name_button")?.disable());
  }
  _r4d2fcea4870df2 = n((e, r) => {
    if (!this.var_2096 && e.type === y.WINDOW_EVENT_CHANGE && r.name === "input") {
      let t = this._window?.findChildByName("select_name_button"),
        i = r;
      t != null && (i.text.length > 2 ? t.enable() : t.disable());
    }
    if (e.type === u.CLICK)
      switch (r.name) {
        case "check_name_button":
          (this.var_41?.handler?._r22f28f976760b8(this.getName()), this.nameCheckWaitBegin());
          break;
      }
  }, "_r4d2fcea4870df2");
  getName() {
    return this._window?.findChildByName("input")?.text ?? "";
  }
  _r14cdb08d2fdd0e = n((e) => {
    this.nameCheckWaitEnd(!0);
    let r = e.target;
    if (r == null) return;
    this.setNormalView();
    let t = this._window?.findChildByName("input");
    t != null && (t.text = r.text);
  }, "_r14cdb08d2fdd0e");
  _rf86843c613a662 = n((e) => {
    let r = e.target;
    r != null && (r.color = a.NAME_SUGGESTION_BG_COLOR_OVER);
  }, "_rf86843c613a662");
  _r532c95c5dac6ef = n((e) => {
    let r = e.target;
    r != null && (r.color = a.NAME_SUGGESTION_BG_COLOR);
  }, "_r532c95c5dac6ef");
}
