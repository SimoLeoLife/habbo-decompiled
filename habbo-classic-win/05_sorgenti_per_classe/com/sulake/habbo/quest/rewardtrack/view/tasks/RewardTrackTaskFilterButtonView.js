// Estratto da HabboAirLauncher.deobf.js, riga 267391.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/rewardtrack/view/tasks/RewardTrackTaskFilterButtonView.as
// Nome offuscato: _ie7014d5bff503d

class a {
  constructor(e, r, t, i, s) {
    this._window = e;
    this.var_150 = r;
    this.var_3295 = i;
    this._theme = s;
    (this._theme._r196e3a5ab136d2(this._window),
      (this._r802e1b6418de24 = this.notSelectedShape.color),
      (this.color = this.notSelectedShape._defaultNotSelectedBorderColor),
      this.selectedView.setParamFlag(N._re3bd61027cfd94, !1),
      (this.selectedView._r824ae5dcbb4686 = !0),
      (this.buttonText.text = "${" + t + "}"),
      this._window.addEventListener(u.CLICK, this._onClick),
      this._window.addEventListener(u.OVER, this._rd7f9b139aa246e),
      this._window.addEventListener(u.OUT, this.onMouseOut));
  }
  static {
    n(this, "RewardTrackTaskFilterButtonView");
  }
  static const_793 = 4294967295;
  static NOT_SELECTED_TEXT_COLOR = 4282664004;
  _r802e1b6418de24;
  color;
  _active = !1;
  var_1463 = !1;
  _disposed = !1;
  setActive(e) {
    ((this._active = e), this.refreshState());
  }
  _onClick = n(() => {
    this.var_3295.setFilter(this.var_150);
  }, "_onClick");
  _rd7f9b139aa246e = n(() => {
    ((this.var_1463 = !0), this.refreshState());
  }, "_rd7f9b139aa246e");
  onMouseOut = n(() => {
    ((this.var_1463 = !1), this.refreshState());
  }, "onMouseOut");
  refreshState() {
    ((this.selectedView.visible = this._active),
      (this.notSelectedShape.visible = !this._active),
      (this.notSelectedShape.color =
        !this._active && this.var_1463
          ? this._theme.lightColor
          : this._r802e1b6418de24),
      (this.notSelectedShape._defaultNotSelectedBorderColor =
        !this._active && this.var_1463
          ? this._theme.darkColor
          : this.color),
      (this.buttonText.textColor = this._active ? a.const_793 : a.NOT_SELECTED_TEXT_COLOR),
      (this._window._r824ae5dcbb4686 = this._active));
  }
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      this._window.removeEventListener(u.CLICK, this._onClick),
      this._window.removeEventListener(u.OVER, this._rd7f9b139aa246e),
      this._window.removeEventListener(u.OUT, this.onMouseOut),
      this._window.dispose(),
      (this._window = null),
      (this.var_3295 = null),
      (this._theme = null));
  }
  get disposed() {
    return this._disposed;
  }
  get window() {
    return this._window;
  }
  get selectedView() {
    return this._window.findChildByName("selected_view");
  }
  get notSelectedShape() {
    return this._window.findChildByName("notselected_shape");
  }
  get buttonText() {
    return this._window.findChildByName("button_text");
  }
}
