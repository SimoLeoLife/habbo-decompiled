// Extracted from HabboAirLauncher.deobf.js, line 206472.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/layout/DynamicLayoutManager.as
// Obfuscated name: _ief07b25cc9165f

class a {
  constructor(e, r) {
    this._layout = e;
    this.var_1529 = r;
    this._window = this._layout.landingView.getXmlWindow("dynamic_widget_grid");
    let t = this._layout.window?.findChildByName(a.PLACEHOLDER_NAME),
      i = t?.parent;
    (i != null && t != null && (i.addChildAt(this._window, i.getChildIndex(t)), i.removeChild(t)),
      (this.var_305 = this._window.findChildByName("widgetlist_fromtop")),
      (this._re7c2ecabd39561 = this._window.findChildByName("center_slots_container")),
      (this._center = this._window.findChildByName("widget_slots_center_scrollable")),
      (this._raa6110ec17bee9 = this._window.findChildByName("widget_slots_center_left")),
      (this._r6bde80e7d20111 = this._window.findChildByName("widget_slots_center_right")),
      (this._re14953b777db99 = this._window.findChildByName("widget_slots_right")),
      (this._radeb3e8e174ad7 = this._window.findChildByName("widget_slot_4_root")),
      (this._radc6332f3448f5 = this._window.findChildByName("widget_slot_5_root")),
      (this._rc06a8a1b4b75f3 = this._layout.landingView.getXmlWindow(
        "dynamic_widget_grid_separator",
      )));
    for (let d = 0; d < 6; d++) {
      let c = this._window.findChildByName(`widget_slot_${d + 1}`);
      ((this.var_116[d] = c), c?.addEventListener(y.const_755, this._ree19e9f79086b0));
    }
    let s = this._layout.landingView.dynamicLayoutLeftPaneWidth,
      o = this._layout.landingView.dynamicLayoutRightPaneWidth;
    ((this._raa6110ec17bee9.width = s),
      (this._raa6110ec17bee9.limits.maxWidth = s),
      (this._radeb3e8e174ad7.width = s),
      (this._r6bde80e7d20111.width = o),
      (this._re14953b777db99.width = o),
      (this._re14953b777db99.limits.maxWidth = o),
      (this._radc6332f3448f5.width = o),
      this._center.arrangeListItems());
  }
  static {
    n(this, "DynamicLayoutManager");
  }
  static PLACEHOLDER_NAME = "placeholder_dynamic_widget_slots";
  static CONTENT_AREA_START_X = 230;
  static ABSOLUTE_MINIMUM_HEIGHT = 360;
  var_116 = new Array(6).fill(null);
  _window;
  var_305;
  _center;
  _raa6110ec17bee9;
  _re7c2ecabd39561;
  _r6bde80e7d20111;
  _re14953b777db99;
  _radeb3e8e174ad7;
  _radc6332f3448f5;
  _rc06a8a1b4b75f3;
  var_4744 = !1;
  _r8adebb45d38309 = 10;
  var_2476 = 50;
  _ra3a6729c7afefa = 10;
  var_5756 = 80;
  _rcdd72ac3d5d227 = 10;
  var_4313 = 60;
  _r99d78609d6eda3 = -1;
  _re09fb92bb419f7 = -1;
  _initialized = !1;
  _rd2a37f0058d658 = null;
  get disposed() {
    return this._layout == null;
  }
  dispose() {
    if (!this.disposed) {
      for (let e = 0; e < this.var_116.length; e++)
        (this.var_116[e]?.dispose(), (this.var_116[e] = null));
      (this._window.dispose(), (this._layout = null));
    }
  }
  _rec45558043ee94(e) {
    return this.var_116[e] ?? null;
  }
  enableSeparator(e, r) {
    let t = e === 4 ? this._radeb3e8e174ad7 : e === 5 ? this._radc6332f3448f5 : null;
    if (t == null || this._rc06a8a1b4b75f3 == null) return;
    t.numListItems < 2 && t.addListItemAt(this._rc06a8a1b4b75f3.clone(), 0);
    let i = t.getListItemAt(0)?.getListItemByName("separator_title");
    i != null &&
      ((i.caption = "${" + r + "}"),
      this.var_1529?._r670138977b9d1b && (i.textColor = this.var_1529.textColor),
      this.var_1529?._r167f34cc5b1ee1 && (i.etchingColor = this.var_1529.etchingColor),
      this.var_1529?._r16eb4bb81322a2 && (i.etchingPosition = this.var_1529.etchingPosition));
  }
  resizeTo(e, r) {
    ((this.var_305.height = Math.min(r, this._r31ee5e02b86e24)),
      (this.var_305.height = Math.max(a.ABSOLUTE_MINIMUM_HEIGHT, this.var_305.height)),
      (this.var_305.width = Math.min(e, this.topItemListInitialWidth)),
      this.applyVerticalSize());
  }
  get _r31ee5e02b86e24() {
    return (
      this._r99d78609d6eda3 === -1 && (this._r99d78609d6eda3 = this.var_305.height),
      this._r99d78609d6eda3
    );
  }
  get topItemListInitialWidth() {
    return (
      this._re09fb92bb419f7 === -1 && (this._re09fb92bb419f7 = this.var_305.width),
      this._re09fb92bb419f7
    );
  }
  set ignoreBottomRightSlot(e) {
    this.var_4744 = e;
  }
  applyVerticalSize() {
    if (
      (this._r8dcec104b4b33d(),
      this._r35299d22ed40c3(),
      this._r3c8cca54ae5645(),
      this._rc10a32938c798d(),
      this._r5b22cd98e644ec(this._r6708425a3d08c5 - this.var_305.height),
      this._ree19e9f79086b0(),
      this._r205ccc9be46b6c(),
      !this._initialized)
    )
      for (let e of this.var_116) e?.addEventListener(y.const_755, this.updateLayout);
    ((this._initialized = !0), (this._rd2a37f0058d658 = null));
  }
  updateLayout = n((e) => {
    this._rd2a37f0058d658 == null && ((this._rd2a37f0058d658 = e.window), this.applyVerticalSize());
  }, "updateLayout");
  _r8dcec104b4b33d() {
    !this._r61fef6db9073bd(0) && this.var_116[0] != null && (this.var_116[0].height = 0);
    for (let e = 1; e <= 4; e++) {
      let r = this.var_116[e];
      !this._r61fef6db9073bd(e) && r != null && (r.height = 1);
    }
  }
  _r3c8cca54ae5645() {
    if ((this._r61fef6db9073bd(3) || this._r61fef6db9073bd(4)) && this._layout != null) {
      let e = Math.max(this.var_116[3]?.height ?? 0, this.var_116[4]?.height ?? 0);
      (this.var_116[3] != null &&
        ((this.var_116[3].height = e),
        this._r61fef6db9073bd(3) &&
          ((this.var_116[3].getChildAt(0).y = 0),
          (this.var_116[3].width = this._layout.landingView.dynamicLayoutLeftPaneWidth))),
        this.var_116[4] != null &&
          ((this.var_116[4].height = e),
          this._r61fef6db9073bd(4) &&
            ((this.var_116[4].getChildAt(0).y = 0),
            (this.var_116[4].width = this._layout.landingView.dynamicLayoutRightPaneWidth))));
    }
  }
  _r35299d22ed40c3() {
    let e = 0;
    if ((this._r61fef6db9073bd(1) || this._r61fef6db9073bd(2)) && this._layout != null) {
      if (
        (this.var_4744 ||
          ((e = Math.max(this.var_116[1]?.height ?? 0, this.var_116[2]?.height ?? 0)),
          this.var_116[1] != null && (this.var_116[1].height = e),
          this.var_116[2] != null && (this.var_116[2].height = e)),
        this._r61fef6db9073bd(1) && this.var_116[1] != null)
      ) {
        let r = this.var_116[1].getChildAt(0);
        r != null &&
          ((r.y = 0), (this.var_116[1].width = this._layout.landingView.dynamicLayoutLeftPaneWidth));
      }
      if (this._r61fef6db9073bd(2) && this.var_116[2] != null) {
        let r = this.var_116[2].getChildAt(0);
        r != null &&
          ((r.y = 0), (this.var_116[2].width = this._layout.landingView.dynamicLayoutRightPaneWidth));
      }
    }
    return e;
  }
  _r205ccc9be46b6c() {
    let e = this._re09fb92bb419f7 - this.var_305.width;
    e > this.var_4313 - this._rcdd72ac3d5d227
      ? (this._center.spacing = this._rcdd72ac3d5d227)
      : (this._center.spacing = Math.min(this.var_4313, this.var_4313 - e));
  }
  _r5b22cd98e644ec(e) {
    let r = this.var_2476 - this._r8adebb45d38309,
      t = this.var_5756 - this._ra3a6729c7afefa,
      i = e + this._r8adebb45d38309 + this._ra3a6729c7afefa;
    i <= 0
      ? ((this.var_305.spacing = this._ra3a6729c7afefa),
        (this._raa6110ec17bee9.spacing = this.var_2476),
        (this._r6bde80e7d20111.spacing = this.var_2476))
      : i < r
        ? ((this.var_305.spacing = this._ra3a6729c7afefa),
          (this._raa6110ec17bee9.spacing = this.var_2476 - i),
          (this._r6bde80e7d20111.spacing = this.var_2476 - i))
        : i < r + t
          ? ((this.var_305.spacing = this._ra3a6729c7afefa),
            (this._raa6110ec17bee9.spacing = this._r8adebb45d38309),
            (this._r6bde80e7d20111.spacing = this._r8adebb45d38309))
          : ((this.var_305.spacing = this._ra3a6729c7afefa),
            (this._raa6110ec17bee9.spacing = this._r8adebb45d38309),
            (this._r6bde80e7d20111.spacing = this._r8adebb45d38309));
  }
  _rc10a32938c798d() {
    ((this._center.spacing = this.var_4313),
      (this._raa6110ec17bee9.spacing = this.var_2476),
      (this._r6bde80e7d20111.spacing = this.var_2476),
      (this.var_305.spacing = this.var_5756),
      this._raa6110ec17bee9.invalidate(),
      this._r6bde80e7d20111.invalidate(),
      this._center.invalidate(),
      this.var_305.invalidate(),
      this._re7c2ecabd39561.invalidate());
  }
  get _r6708425a3d08c5() {
    let e = 0;
    for (let r = 0; r < this.var_305.numListItems; r++)
      ((e += this.var_305.getListItemAt(r)?.height ?? 0),
        r > 0 && (e += this.var_305.spacing));
    return e;
  }
  _ree19e9f79086b0 = n((e) => {
    if (e == null || this._initialized) {
      (this._raa6110ec17bee9.invalidate(), this._r6bde80e7d20111.invalidate());
      let r = Math.max(this._raa6110ec17bee9.height, this._r6bde80e7d20111.height);
      ((this._center.height = r), (this._re7c2ecabd39561.height = r));
    }
  }, "_ree19e9f79086b0");
  _r61fef6db9073bd(e) {
    return (this.var_116[e]?.numChildren ?? 0) > 0;
  }
}
