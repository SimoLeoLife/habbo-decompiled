// Extracted from HabboAirLauncher.deobf.js, line 352493.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/menu/views/MenuItemView.as
// Obfuscated name: _ia6be47fa1b0a25

class {
  constructor(e, r) {
    this.var_3691 = e;
    this.var_421 = r;
    ((this._window = this.var_3691._r230b0cd281c4db.clone()),
      (this.textWindow.text = this.var_421.name),
      (this.checkboxWindow.visible = this.var_421._rafe4f95a65fec3),
      this.var_421.tooltip != null &&
        this.var_421.tooltip.length > 0 &&
        (this._window.toolTipCaption = this.var_421.tooltip),
      this._window.addEventListener(u.OVER, this._r98937d52f2f3be),
      this._window.addEventListener(u.OUT, this._r04344c8bfe55e0),
      this._window.addEventListener(u.CLICK, this.onClick),
      this.checkboxWindow.addEventListener(u.OVER, this._re98d4399ab234e),
      this.checkboxWindow.addEventListener(u.OUT, this._r0cc0cb6207c17f),
      this.checkboxWindow.addEventListener(y.const_238, this.onSelectedChange),
      this.checkboxWindow.addEventListener(y.const_1217, this.onSelectedChange),
      this.updateUI());
  }
  static {
    n(this, "MenuItemView");
  }
  _disposed = !1;
  _window;
  var_1463 = !1;
  var_3761 = !1;
  var_2522 = !1;
  _rd8d7420cd3fe50 = !1;
  onSelectedChange = n((e) => {
    this._rd8d7420cd3fe50 || this.var_421?._r14ef6da94aebbf?.(this.checkboxWindow.isSelected);
  }, "onSelectedChange");
  onClick = n((e) => {
    this.var_2522 ||
      (this.var_421._rafe4f95a65fec3 && (this.selected = !this.selected),
      this.var_421.onClick?.(),
      this.var_421._rafe4f95a65fec3 || this.var_3691.requestClose());
  }, "onClick");
  _r04344c8bfe55e0 = n((e) => {
    ((this.var_1463 = !1), this.updateUI());
  }, "_r04344c8bfe55e0");
  _r98937d52f2f3be = n((e) => {
    ((this.var_1463 = !0), this.updateUI());
  }, "_r98937d52f2f3be");
  _r0cc0cb6207c17f = n((e) => {
    ((this.var_3761 = !1), this.updateUI());
  }, "_r0cc0cb6207c17f");
  _re98d4399ab234e = n((e) => {
    ((this.var_3761 = !0), this.updateUI());
  }, "_re98d4399ab234e");
  updateUI() {
    ((this._window.background =
      (this.var_1463 || this.var_3761) && !this.var_2522),
      we.disableSection(this._window, this.var_2522));
  }
  get selected() {
    return this.var_421._rafe4f95a65fec3 ? this.checkboxWindow.isSelected : !1;
  }
  set selected(e) {
    ((this._rd8d7420cd3fe50 = !0),
      this.var_421._rafe4f95a65fec3 &&
        (e ? this.checkboxWindow.select() : this.checkboxWindow.unselect(),
        this.var_421._r14ef6da94aebbf?.(this.checkboxWindow.isSelected),
        this.var_421.onClick?.()),
      (this._rd8d7420cd3fe50 = !1));
  }
  get disabled() {
    return this.var_2522;
  }
  set disabled(e) {
    ((this.var_2522 = e), this.updateUI());
  }
  get _r374f56bc0af876() {
    return this.textWindow.x + this.textWindow.width;
  }
  get menuItem() {
    return this.var_421;
  }
  get window() {
    return this._window;
  }
  dispose() {
    this._disposed ||
      ((this._window = null),
      (this.var_3691 = null),
      (this.var_421 = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  get textWindow() {
    return this._window.findChildByName("text");
  }
  get checkboxWindow() {
    return this._window.findChildByName("checkbox");
  }
}
