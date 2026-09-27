// Extracted from HabboAirLauncher.deobf.js, line 262852.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/notifications/singular/HabboNotificationItemStyle.as
// Obfuscated name: _i50a67c0c0682bf

class {
  static {
    n(this, "HabboNotificationItemStyle");
  }
  _icon = null;
  var_3259;
  var_4445;
  var_3253 = null;
  _iconAssetUri;
  _r59aaebb61a6ed3 = null;
  _rf26693f92f6f7d = null;
  var_5050;
  _styleName;
  constructor(e, r, t, i, s, o, d) {
    ((this._iconAssetUri = t),
      e != null &&
        t == null &&
        ((this._icon = e.getValue("icon") ?? null),
        (this.var_3253 = e.getValue("internallink") ?? null),
        (this._r59aaebb61a6ed3 = e.getValue("customlayout") ?? null),
        (this._rf26693f92f6f7d = e.getValue("customview") ?? null)),
      r != null ? ((this._icon = r), (this.var_3259 = i)) : (this.var_3259 = !1),
      (this.var_4445 = s),
      (this.var_5050 = o),
      (this._styleName = d));
  }
  dispose() {
    this.var_3259 && this._icon != null && (this._icon.dispose(), (this._icon = null));
  }
  get icon() {
    return this._icon;
  }
  get internalLink() {
    return this.var_3253;
  }
  set internalLink(e) {
    this.var_3253 = e;
  }
  get _r86ed843443dcca() {
    return this.var_4445;
  }
  get _rfd3628ebb8da66() {
    return this._iconAssetUri;
  }
  get _r9030858cf2a66a() {
    return this._r59aaebb61a6ed3;
  }
  get customLayout() {
    return this._rf26693f92f6f7d;
  }
  get extraData() {
    return this.var_5050;
  }
  get styleName() {
    return this._styleName;
  }
}
