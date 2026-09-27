// Extracted from HabboAirLauncher.deobf.js, line 71084.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/onBoardingHcUi/Button.as
// Obfuscated name: _ic23a7de95b02bc

class extends F2 {
  static {
    n(this, "Button");
  }
  _caption;
  _r37f91e52926fb4;
  _rectangle;
  _fitWidthToText;
  _rac978f1e2ab706 = !1;
  _action;
  _glowColour;
  _background = null;
  _rd647b549b58b6f = null;
  _r61b7f9e9006018 = null;
  _inactiveBackground = null;
  _editingBackground = null;
  _r1f19e25360a8c5 = null;
  _r68ec92def14624 = null;
  _pressed = !1;
  _pressedBackground = !1;
  _active = !1;
  _selected = !1;
  _r91bd21fe11ed5f = !1;
  _alignRight = !1;
  _icon;
  constructor(e, r, t, i, s = 16777215) {
    (super(),
      this.removeOldLocalization(e),
      (this._caption = e),
      (this._r37f91e52926fb4 = e),
      this.checkLocalization(this._caption),
      (this._rectangle = r),
      (this._fitWidthToText = t),
      (this._action = i),
      (this._glowColour = s),
      (this._icon = this.icon),
      (this.active = !0),
      (this._r44f27084cc753d = !1),
      this.addEventListener(M._scrollBar, this.ChatHistoryScrollBar),
      this.addEventListener(M._r4b0396f57c9367, this._r8ab2e311a50996));
  }
  get _r83020381464a30() {
    return this._rac978f1e2ab706;
  }
  set _r83020381464a30(e) {
    this._rac978f1e2ab706 = e;
  }
  set x(e) {
    ((super.x = e), (this._rectangle.x = e));
  }
  get x() {
    return super.x;
  }
  set y(e) {
    ((super.y = e), (this._rectangle.y = e));
  }
  get y() {
    return super.y;
  }
  get active() {
    return this._active;
  }
  set active(e) {
    ((this._active = e), (this._rf7acde73a68a47 = this._active), this.refresh());
  }
  unselect() {
    ((this._r91bd21fe11ed5f = !1), (this._selected = !1), this.refresh());
  }
  _r1fe4ed010bb986() {
    ((this._r91bd21fe11ed5f = !0), this.refresh());
  }
  select() {
    ((this._selected = !0), this.refresh());
  }
  set alignRight(e) {
    this._alignRight = e;
  }
  ChatHistoryScrollBar = n((e = null) => {
    for (
      this.x = this._rectangle.x,
        this.y = this._rectangle.y,
        this._caption !== "" &&
          ((this._r68ec92def14624 = Tr.createTextField(
            this._r37f91e52926fb4,
            18,
            this.textColour,
            !0,
            !1,
            !1,
            this.italic,
            _s.const_27,
            !1,
            this.underline,
          )),
          this.etching && Tr.addEtching(this._r68ec92def14624),
          this._fitWidthToText && (this._rectangle.width = this._r68ec92def14624.textWidth + this.padding)),
        this._rd647b549b58b6f = this._r1cf71d729a17ce,
        this._rd647b549b58b6f.width = this._rectangle.width,
        this._rd647b549b58b6f.height = this._rectangle.height,
        this._r61b7f9e9006018 = this._r438f7819e87dc6,
        this._r61b7f9e9006018.width = this._rectangle.width,
        this._r61b7f9e9006018.height = this._rectangle.height,
        this._inactiveBackground = this._r03727ccda69c03,
        this._inactiveBackground.width = this._rectangle.width,
        this._inactiveBackground.height = this._rectangle.height,
        this._editingBackground = this._rf36e19a817555b,
        this._editingBackground.width = this._rectangle.width,
        this._editingBackground.height = this._rectangle.height,
        this._r1f19e25360a8c5 = this._rb3852998bf7e99,
        this._r1f19e25360a8c5 != null &&
          ((this._r1f19e25360a8c5.width = this._rectangle.width),
          (this._r1f19e25360a8c5.height = this._rectangle.height));
      this.numChildren > 0;
    )
      this.removeChildAt(0);
    ((this._background = new Sprite()),
      this._background.addChild(this._rd647b549b58b6f),
      this._background.addChild(this._inactiveBackground),
      this._background.addChild(this._editingBackground),
      this._background.addChild(this._r61b7f9e9006018),
      this._r1f19e25360a8c5 != null && this._background.addChild(this._r1f19e25360a8c5),
      this.addChild(this._background),
      this._r68ec92def14624 != null &&
        (this.addChild(this._r68ec92def14624),
        (this._r68ec92def14624.x = (this._rectangle.width - this._r68ec92def14624.textWidth) / 2 - 2),
        (this._r68ec92def14624.y = (this._rectangle.height - this._r68ec92def14624.textHeight) / 2 - 2)),
      this.icon != null &&
        (this._background.addChild(this.icon),
        (this.icon.x = 10),
        this._icon != null && (this._icon.y = (this._background.height - this.icon.height) / 2)),
      this.refresh(),
      (this.width = this._rectangle.width),
      (this.height = this._rectangle.height),
      this._r83020381464a30 &&
        this.parent != null &&
        (this.x = Math.trunc((this.parent.width - this.width) / 2)),
      this._alignRight && this.parent != null && (this.x = this.parent.width - this.width),
      this.addEventListener(UnkClass_fd7c12._r9001c395573374, this._ra2392916df2aec),
      this.addEventListener(UnkClass_fd7c12._r0f980b14ecbc94, this._rad325cc53260a0),
      this.addEventListener(UnkClass_fd7c12._rbf5bc4e563fc08, this.onMousetOut));
  }, "ChatHistoryScrollBar");
  _r8ab2e311a50996 = n((e) => {
    (this.stage?.removeEventListener(UnkClass_fd7c12._ra93f33360c3a28, this._rb39726d43f7cc1),
      this.removeEventListener(UnkClass_fd7c12._r9001c395573374, this._ra2392916df2aec),
      this.removeEventListener(UnkClass_fd7c12._ra93f33360c3a28, this._r1acf27e9365839),
      this.removeEventListener(UnkClass_fd7c12._r0f980b14ecbc94, this._rad325cc53260a0),
      this.removeEventListener(UnkClass_fd7c12._rbf5bc4e563fc08, this.onMousetOut));
  }, "_r8ab2e311a50996");
  onMousetOut = n((e) => {
    ((this._pressedBackground = !1), this.refresh());
  }, "onMousetOut");
  _rad325cc53260a0 = n((e) => {
    this._active && ((this._pressedBackground = !0), this.refresh());
  }, "_rad325cc53260a0");
  _ra2392916df2aec = n((e) => {
    this._active &&
      (this.stage?.addEventListener(UnkClass_fd7c12._ra93f33360c3a28, this._rb39726d43f7cc1),
      this.addEventListener(UnkClass_fd7c12._ra93f33360c3a28, this._r1acf27e9365839),
      (this._pressed = !0),
      this.refresh());
  }, "_ra2392916df2aec");
  _r1acf27e9365839 = n((e) => {
    (e.stopImmediatePropagation(),
      this.stage?.removeEventListener(UnkClass_fd7c12._ra93f33360c3a28, this._rb39726d43f7cc1),
      this.removeEventListener(UnkClass_fd7c12._ra93f33360c3a28, this._r1acf27e9365839),
      (this._pressed = !1),
      this.refresh(),
      this._action(this));
  }, "_r1acf27e9365839");
  _rb39726d43f7cc1 = n((e) => {
    (this.stage?.removeEventListener(UnkClass_fd7c12._ra93f33360c3a28, this._rb39726d43f7cc1),
      this.removeEventListener(UnkClass_fd7c12._ra93f33360c3a28, this._r1acf27e9365839),
      (this._pressed = !1),
      this.refresh());
  }, "_rb39726d43f7cc1");
  refresh() {
    if (
      this._background == null ||
      this._rd647b549b58b6f == null ||
      this._inactiveBackground == null ||
      this._editingBackground == null ||
      this._r61b7f9e9006018 == null
    )
      return;
    let e = this._active
      ? (this._pressed && this._pressedBackground) || this._selected
        ? 2
        : 1
      : 3;
    (this._r91bd21fe11ed5f && (e = 4),
      (this._rd647b549b58b6f.visible = e === 1 && (this._r1f19e25360a8c5 == null || !this._pressedBackground)),
      (this._inactiveBackground.visible = e === 2),
      (this._editingBackground.visible = e === 3),
      (this._r61b7f9e9006018.visible = e === 4),
      this._r1f19e25360a8c5 != null
        ? ((this._r1f19e25360a8c5.visible = e === 1 && this._pressedBackground), (this.filters = []))
        : (this.filters = this._pressedBackground ? [new UnkClass_baf84c(this._glowColour, 0.7, 10, 10)] : []),
      this._r68ec92def14624 != null &&
        (this._r68ec92def14624.textColor = this._active ? this.textColour : 10066329));
  }
  get _r1cf71d729a17ce() {
    return Tr._r203d00b7beb802(_i4b01ea81f74ef8("button_png"), new D(5, 5, 1, 2));
  }
  get _r03727ccda69c03() {
    return Tr._r203d00b7beb802(_i4b01ea81f74ef8("button_pressed_png"), new D(6, 10, 1, 3));
  }
  get _rf36e19a817555b() {
    return Tr._r203d00b7beb802(_i4b01ea81f74ef8("button_inactive_png"), new D(5, 6, 1, 2));
  }
  get _r438f7819e87dc6() {
    return Tr._r203d00b7beb802(_i4b01ea81f74ef8("button_png"), new D(5, 6, 1, 2));
  }
  get _rb3852998bf7e99() {
    return null;
  }
  get icon() {
    return this._icon;
  }
  get etching() {
    return !0;
  }
  get padding() {
    return 24;
  }
  get textColour() {
    return 0;
  }
  get italic() {
    return !1;
  }
  get underline() {
    return !1;
  }
  get label() {
    return this._caption;
  }
  get _ra5c4cf1dbcc2a3() {
    return this._r37f91e52926fb4;
  }
  set _ra5c4cf1dbcc2a3(e) {
    ((this._r37f91e52926fb4 = e),
      this._r68ec92def14624 != null && ((this._r68ec92def14624.text = e), this.ChatHistoryScrollBar()));
  }
  getLocalizationKey() {
    return this.label;
  }
  localizedText(e) {
    this._ra5c4cf1dbcc2a3 = e;
  }
}
