// Estratto da HabboAirLauncher.deobf.js, riga 315295.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/furniture/mysterybox/MysteryBoxOpenDialogView.as
// Nome offuscato: _i567ad9ba21c117

class {
  constructor(e) {
    this.var_17 = e;
    ((this.var_2520 = new class_3495(this._ra43f49c2ec18cc)),
      (this.var_2780 = new class_3853(this._r6b16caceed72c0)),
      (this.var_2752 = new class_3835(this._r0a5738335e9b56)));
    let r = this.connection;
    r != null &&
      (r.addMessageEvent(this.var_2520),
      r.addMessageEvent(this.var_2780),
      r.addMessageEvent(this.var_2752));
  }
  static {
    n(this, "MysteryBoxOpenDialogView");
  }
  _disposed = !1;
  var_408 = null;
  _window = null;
  var_627 = null;
  var_2045 = -1;
  var_2520;
  var_2780;
  var_2752;
  get disposed() {
    return this._disposed;
  }
  dispose() {
    if (this._disposed) return;
    this.closeWindow();
    let e = this.connection;
    (e != null &&
      (this.var_2520 != null && e.removeMessageEvent(this.var_2520),
      this.var_2780 != null && e.removeMessageEvent(this.var_2780),
      this.var_2752 != null && e.removeMessageEvent(this.var_2752)),
      (this.var_2520 = null),
      (this.var_2780 = null),
      (this.var_2752 = null),
      (this.var_627 = null),
      (this.var_17 = null),
      (this._disposed = !0));
  }
  var_2844(e) {
    ((this.var_627 = e), e != null && this.connection?.send(new class_3808(e.getId())));
  }
  imageReady(e, r) {
    e === this.var_2045 && ((this.var_2045 = -1), (this.rewardBitmap = r));
  }
  imageFailed(e) {}
  _ra43f49c2ec18cc = n((e) => {
    this.showWaitWindow();
  }, "_ra43f49c2ec18cc");
  _r6b16caceed72c0 = n((e) => {
    this.closeWindow();
  }, "_r6b16caceed72c0");
  _r0a5738335e9b56 = n((e) => {
    let r = ClassUtils.getParser(e, class_4055);
    r != null && r?.contentType != null && this._rae728572f42232(r.contentType, r.classId);
  }, "_r0a5738335e9b56");
  showWaitWindow() {
    this.closeWindow();
    let e = this.var_17?.assets?.getAssetByName("mystery_box_open_dialog")?.content;
    if (
      e == null ||
      ((this.var_408 =
        this.var_17?.handler.container?.windowManager?.buildModalDialogFromXML(e) ?? null),
      (this._window = this.var_408?.rootWindow),
      this._window == null)
    )
      return;
    this._window.procedure = this._rd7efa9cb460c18;
    let r =
        this.var_627 != null &&
        (this.var_17?.handler.container?._rc2337883ff003a(this.var_627) ?? !1),
      t = r ? "mysterybox.dialog.owner." : "mysterybox.dialog.other.";
    ((this._window.caption = `\${${t}title}`),
      (this._window.findChildByName("subtitle_text").caption = `\${${t}subtitle}`),
      (this._window.findChildByName("waiting_text").caption = `\${${t}waiting}`),
      (this._window.findChildByName("cancel_button").caption = `\${${t}cancel}`),
      (this._window.findChildByName("reward_base").assetUri = r
        ? "mysterybox_box_base"
        : "mysterybox_key_base"),
      (this._window.findChildByName("reward_overlay").assetUri = r
        ? "mysterybox_box_overlay"
        : "mysterybox_key_overlay"),
      (this._window.findChildByName("needed_base").assetUri = r
        ? "mysterybox_key_base"
        : "mysterybox_box_base"),
      (this._window.findChildByName("needed_overlay").assetUri = r
        ? "mysterybox_key_overlay"
        : "mysterybox_box_overlay"));
    let i = this.var_17?.handler.container?.sessionDataManager ?? null,
      s = r ? (i?.mysteryBoxColor ?? "") : (i?.mysteryKeyColor ?? "");
    if (s === "") return;
    let o = EX.KEY_COLORS.get(s.toLowerCase()) ?? 0;
    ((this._window.findChildByName("reward_base").color = o),
      (this._window.findChildByName("needed_base").color = o));
  }
  _rd7efa9cb460c18 = n((e, r) => {
    if (e.type === u.CLICK)
      switch (e.target?.name) {
        case "header_button_close":
        case "cancel_button":
          (this.closeWindow(),
            this.var_627 != null &&
              this.connection?.send(
                new _i95c95556db026d(
                  this.var_17?.handler.container?._r73fd72da7a633d(this.var_627) ?? 0,
                ),
              ));
          break;
      }
  }, "_rd7efa9cb460c18");
  _rae728572f42232(e, r) {
    this.closeWindow();
    let t = this.var_17?.assets?.getAssetByName("mystery_box_reward")?.content;
    if (
      t == null ||
      ((this.var_408 =
        this.var_17?.handler.container?.windowManager?.buildModalDialogFromXML(t) ?? null),
      (this._window = this.var_408?.rootWindow),
      this._window == null)
    )
      return;
    ((this._window.procedure = this._r37507758b67c04), (this.var_2045 = -1));
    let i = null;
    switch (e) {
      case class_1803.PRODUCT_TYPE_STUFF:
        i =
          this.var_17?.handler.container?.roomEngine?._r5db1beeb89d785(
            r,
            new k(90, 0, 0),
            64,
            this,
            0,
          ) ?? null;
        break;
      case class_1803.PRODUCT_TYPE_ITEM:
        i =
          this.var_17?.handler.container?.roomEngine?._r3ac60c12dafe70(
            r,
            new k(90, 0, 0),
            64,
            this,
            0,
          ) ?? null;
        break;
      case class_1803.PRODUCT_TYPE_EFFECT:
        this.rewardBitmap =
          this.var_17?.handler.container?.catalog?.getPixelEffectIcon(r) ?? null;
        break;
      case class_1803.PRODUCT_TYPE_CLUB:
        this.rewardBitmap =
          this.var_17?.handler.container?.catalog?.getSubscriptionProductIcon(r) ?? null;
        break;
      default:
        return;
    }
    i != null && (i.data != null && (this.rewardBitmap = i.data), (this.var_2045 = i.id));
  }
  set rewardBitmap(e) {
    if (this._window == null || this._window.disposed || e == null) return;
    let r = this._window.findChildByName("reward_image"),
      t = this._window.findChildByName("bitmap_container");
    r != null && t != null && ((r.bitmap = e), (t.width = e.width), (t.height = e.height), t.width++);
  }
  _r37507758b67c04 = n((e, r) => {
    if (e.type === u.CLICK)
      switch (e.target?.name) {
        case "header_button_close":
        case "close_button":
          this.closeWindow();
          break;
      }
  }, "_r37507758b67c04");
  closeWindow() {
    this.var_408 != null &&
      !this.var_408.disposed &&
      ((this._window = null), this.var_408.dispose(), (this.var_408 = null));
  }
  get connection() {
    return this.var_17?.handler.container?.connection ?? null;
  }
}
