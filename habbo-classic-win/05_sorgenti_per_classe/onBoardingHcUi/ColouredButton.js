// Estratto da HabboAirLauncher.deobf.js, riga 71334.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/onBoardingHcUi/ColouredButton.as
// Nome offuscato: _i160c7d9612a1e2

class a extends Button {
  static {
    n(this, "ColouredButton");
  }
  static BUTTON_RED = "red";
  static BUTTON_GREEN = "gfreen";
  static BUTTON_YELLOW = "yellow";
  _re9ef57daf483a2;
  _r2392cfbe544fae;
  _r43a41e16b5980b;
  _r106d9e9c3ed2b9;
  _icon = null;
  constructor(e, r, t, i, s, o = 16777215) {
    switch (e) {
      case a.BUTTON_RED:
        (super(r, t, i, s, o),
          (this._re9ef57daf483a2 = Tr._r203d00b7beb802(_i4b01ea81f74ef8("button_red_png"), new D(8, 10, 6, 4))),
          (this._r2392cfbe544fae = Tr._r203d00b7beb802(_i4b01ea81f74ef8("button_red_pressed_png"), new D(8, 10, 6, 4))),
          (this._r43a41e16b5980b = Tr._r203d00b7beb802(_i4b01ea81f74ef8("button_red_inactive_png"), new D(8, 10, 6, 4))),
          (this._r106d9e9c3ed2b9 = Tr._r203d00b7beb802(_i4b01ea81f74ef8("button_red_rollover_png"), new D(8, 10, 6, 4))));
        break;
      case a.BUTTON_YELLOW:
        (super(r, t, i, s, o),
          (this._re9ef57daf483a2 = Tr._r203d00b7beb802(_i4b01ea81f74ef8("button_yellow_png"), new D(8, 10, 6, 4))),
          (this._r2392cfbe544fae = Tr._r203d00b7beb802(_i4b01ea81f74ef8("button_yellow_pressed_png"), new D(8, 10, 6, 4))),
          (this._r43a41e16b5980b = Tr._r203d00b7beb802(_i4b01ea81f74ef8("button_yellow_inactive_png"), new D(8, 10, 6, 4))),
          (this._r106d9e9c3ed2b9 = Tr._r203d00b7beb802(_i4b01ea81f74ef8("button_yellow_rollover_png"), new D(8, 10, 6, 4))),
          (this._icon = new _i3a5c6f457acdad(_i4b01ea81f74ef8("icon_hc"))));
        break;
      case a.BUTTON_GREEN:
      default:
        (super(r, t, i, s, o),
          (this._re9ef57daf483a2 = Tr._r203d00b7beb802(_i4b01ea81f74ef8("button_green_png"), new D(8, 10, 6, 4))),
          (this._r2392cfbe544fae = Tr._r203d00b7beb802(_i4b01ea81f74ef8("button_green_pressed_png"), new D(8, 10, 6, 4))),
          (this._r43a41e16b5980b = Tr._r203d00b7beb802(_i4b01ea81f74ef8("button_green_inactive_png"), new D(8, 10, 6, 4))),
          (this._r106d9e9c3ed2b9 = Tr._r203d00b7beb802(_i4b01ea81f74ef8("button_green_rollover_png"), new D(8, 10, 6, 4))));
        break;
    }
  }
  get _r1cf71d729a17ce() {
    return this._re9ef57daf483a2;
  }
  get _r03727ccda69c03() {
    return this._r2392cfbe544fae;
  }
  get _rf36e19a817555b() {
    return this._r43a41e16b5980b;
  }
  get _rb3852998bf7e99() {
    return this._r106d9e9c3ed2b9;
  }
  get etching() {
    return !1;
  }
  get padding() {
    return 64;
  }
  get textColour() {
    return 16777215;
  }
  get icon() {
    return this._icon;
  }
}
