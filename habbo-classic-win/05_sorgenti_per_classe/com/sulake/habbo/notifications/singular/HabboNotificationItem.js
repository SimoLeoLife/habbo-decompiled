// Extracted from HabboAirLauncher.deobf.js, line 262817.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/notifications/singular/HabboNotificationItem.as
// Obfuscated name: _i7ef92326c57e36

class {
  static {
    n(this, "HabboNotificationItem");
  }
  _style;
  _content;
  var_63;
  constructor(e, r, t) {
    ((this._content = e), (this._style = r), (this.var_63 = t));
  }
  get style() {
    return this._style;
  }
  get content() {
    return this._content ?? "";
  }
  get notificationId() {
    if (
      this._style == null ||
      this._style.extraData == null ||
      Array.isArray(this._style.extraData)
    )
      return null;
    let e = this._style.extraData[NotificationExtraDataKey.ID];
    return e == null ? null : String(e);
  }
  dispose() {
    ((this._content = null),
      this._style != null && (this._style.dispose(), (this._style = null)),
      (this.var_63 = null));
  }
  ExecuteUiLinks() {
    this._style?.internalLink != null && this.var_63?._rbeb400c77bf457(this._style.internalLink);
  }
}
