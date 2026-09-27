// Extracted from HabboAirLauncher.deobf.js, line 232293.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/help/namechange/NameChangeView.as
// Obfuscated name: _ia7d81f5a2758fb

class a {
  constructor(e) {
    this.var_63 = e;
  }
  static {
    n(this, "NameChangeView");
  }
  static NAME_SUGGESTION_BG_COLOR = 13232628;
  static NAME_SUGGESTION_BG_COLOR_OVER = 11129827;
  static NAME_UPDATE_FUNCTION = "FlashExternalInterface.updateName";
  _window = null;
  _checkedName = null;
  _pendingName = null;
  var_157 = null;
  var_1552 = null;
  var_1040 = null;
  var_77 = null;
  var_2096 = !1;
  _ra9d6443b11c86c = null;
  _disposed = !1;
  get id() {
    return NameChangeController.NAME_CHANGE;
  }
  set checkedName(e) {
    if (((this._checkedName = e), this._pendingName === this._checkedName)) {
      this.showConfirmationView();
      return;
    }
    this.setNameAvailableView();
  }
  dispose() {
    this._disposed ||
      (this.disposeWindow(),
      this._ra9d6443b11c86c?.dispose(),
      (this._ra9d6443b11c86c = null),
      (this.var_63 = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  showMainView() {
    if (this._window == null) {
      if (
        ((this._window = this.var_63?.buildXmlWindow("welcome_name_change")),
        this._window == null)
      )
        return;
      (this._window.center(),
        (this._window.procedure = this._r4d2fcea4870df2),
        (this.var_157 = this._window.content?.getChildAt(0)));
    }
    (this.var_63?.localization?._r43eae9731f5b27(
      "tutorial.name_change.current",
      "name",
      this.var_63._r94ea406c211077,
    ),
      (this._window.caption =
        this.var_63?.localization?.getLocalization("tutorial.name_change.title.main") ?? ""),
      this.showView(this.var_157));
  }
  setNormalView() {
    let e = this._window?.findChildByName("info_text");
    e != null &&
      (e.text = this.var_63?.localization?.getLocalization("help.tutorial.name.info") ?? "");
    let r = this._window?.findChildByName("suggestions");
    r != null && (r.visible = !1);
  }
  setNameAvailableView() {
    if (this._window == null) return;
    (this.nameCheckWaitEnd(!0),
      this._checkedName != null &&
        this.var_63?.localization?._r43eae9731f5b27(
          "help.tutorial.name.available",
          "name",
          this._checkedName,
        ));
    let e = this._window.findChildByName("info_text");
    e != null &&
      (e.text = this.var_63?.localization?.getLocalization("help.tutorial.name.available") ?? "");
    let r = this._window.findChildByName("input");
    r != null && this._checkedName != null && (r.text = this._checkedName);
    let t = this._window.findChildByName("suggestions");
    t != null && (t.visible = !1);
  }
  setNameNotAvailableView(e, r, t) {
    if (
      (this.nameCheckWaitEnd(!1),
      this.var_77 !== this.var_1552 && this.showSelectionView(),
      (this._pendingName = null),
      (this._checkedName = null),
      this._window == null)
    )
      return;
    let i = this._window.findChildByName("info_text");
    if (i != null)
      switch (e) {
        case class_2146.var_3848:
          (this.var_63?.localization?._r43eae9731f5b27("help.tutorial.name.taken", "name", r),
            (i.text =
              this.var_63?.localization?.getLocalization("help.tutorial.name.taken") ?? ""));
          break;
        case class_2146.var_3283:
          (this.var_63?.localization?._r43eae9731f5b27("help.tutorial.name.invalid", "name", r),
            (i.text =
              this.var_63?.localization?.getLocalization("help.tutorial.name.invalid") ?? ""));
          break;
        case class_2146.var_3613:
          i.text = this.var_63?.localization?.getLocalization("help.tutorial.name.long") ?? "";
          break;
        case class_2146.var_3723:
          i.text = this.var_63?.localization?.getLocalization("help.tutorial.name.short") ?? "";
          break;
        case class_2146.var_3022:
          i.text =
            this.var_63?.localization?.getLocalization("help.tutorial.name.change_not_allowed") ??
            "";
          break;
        case class_2146.var_4132:
          i.text =
            this.var_63?.localization?.getLocalization("help.tutorial.name.merge_hotel_down") ??
            "";
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
        (this._ra9d6443b11c86c = new x7e(this.var_63)),
        this._ra9d6443b11c86c.render(t ?? [], s));
      for (let o = 0; o < s.numChildren; o += 1) {
        let d = s.getChildAt(o);
        d != null &&
          ((d.color = a.NAME_SUGGESTION_BG_COLOR),
          d.addEventListener(u.CLICK, this._r14cdb08d2fdd0e),
          d.addEventListener(u.OVER, this._rf86843c613a662),
          d.addEventListener(u.OUT, this._r532c95c5dac6ef));
      }
    }
  }
  nameCheckWaitBegin() {
    if (this._window != null && !this._window.disposed) {
      (this._window.findChildByName("select_name_button")?.disable(),
        this._window.findChildByName("check_name_button")?.disable(),
        this._window.findChildByName("input")?.disable());
      let e = this._window.findChildByName("info_text");
      e != null &&
        (e.caption =
          this.var_63?.localization?.getLocalization("help.tutorial.name.wait_while_checking") ??
          "");
    }
    this.var_2096 = !0;
  }
  nameCheckWaitEnd(e) {
    (this._window != null &&
      !this._window.disposed &&
      (e && this._window.findChildByName("select_name_button")?.enable(),
      this._window.findChildByName("check_name_button")?.enable(),
      this._window.findChildByName("input")?.enable()),
      (this.var_2096 = !1));
  }
  disposeWindow() {
    ((this.var_157 = null),
      (this.var_1552 = null),
      (this.var_1040 = null),
      (this.var_77 = null),
      this._window?.dispose(),
      (this._window = null));
  }
  showView(e) {
    ((this.var_2096 = !1),
      this.var_77 != null && (this.var_77.visible = !1),
      (this.var_77 = e),
      this.var_77 != null && (this.var_77.visible = !0),
      this._window?.content != null &&
        this.var_77 != null &&
        ((this._window.content.width = this.var_77.width),
        (this._window.content.height = this.var_77.height)));
  }
  showSelectionView() {
    if (this._window != null) {
      if (this.var_1552 == null) {
        if (
          ((this.var_1552 = this.var_63?.buildXmlWindow("welcome_name_selection")),
          this.var_1552 == null)
        )
          return;
        this._window.content?.addChild(this.var_1552);
      }
      ((this._window.caption =
        this.var_63?.localization?.getLocalization("tutorial.name_change.title.select") ?? ""),
        this.view?.disable(),
        this.setNormalView(),
        this.showView(this.var_1552));
    }
  }
  showConfirmationView() {
    if (this._window == null) return;
    if (this.var_1040 == null) {
      if (
        ((this.var_1040 = this.var_63?.buildXmlWindow("welcome_name_confirmation")),
        this.var_1040 == null)
      )
        return;
      this._window.content?.addChild(this.var_1040);
    }
    this._window.caption =
      this.var_63?.localization?.getLocalization("tutorial.name_change.title.confirm") ?? "";
    let e = this.var_1040.findChildByName("final_name");
    (e != null && (e.text = this._checkedName ?? ""),
      this.showView(this.var_1040),
      ur.available && ur.call(a.NAME_UPDATE_FUNCTION, this._checkedName ?? ""));
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
  _r4d2fcea4870df2 = n((e, r) => {
    if (!this.var_2096 && e.type === y.WINDOW_EVENT_CHANGE && r.name === "input") {
      let t = r;
      t != null && (t.text.length > 2 ? this.view?.enable() : this.view?.disable());
    }
    if (e.type === u.CLICK)
      switch (r.name) {
        case "change_name_button":
          this.showSelectionView();
          break;
        case "keep_name_button":
          ((this._checkedName = this.var_63?._r94ea406c211077 ?? ""), this.showConfirmationView());
          break;
        case "check_name_button":
          (this.var_63?._r22f28f976760b8(this.getName()), this.nameCheckWaitBegin());
          break;
        case "select_name_button": {
          let t = this.getName();
          if (t.length < 1) return;
          this._checkedName !== t
            ? ((this._pendingName = t),
              this.var_63?._r22f28f976760b8(t),
              this.nameCheckWaitBegin())
            : this.showConfirmationView();
          break;
        }
        case "cancel_selection_button":
          this.var_63?._r6167aac3809e80();
          break;
        case "confirm_name_button":
          this._checkedName != null && this.var_63?._raf88edb5b4add5(this._checkedName);
          break;
        case "cancel_confirmation_button":
        case "header_button_close":
          this.var_63?._r6167aac3809e80();
          break;
      }
  }, "_r4d2fcea4870df2");
  get view() {
    return this._window?.findChildByName("select_name_button");
  }
  getName() {
    return this._window?.findChildByName("input")?.text ?? "";
  }
}
