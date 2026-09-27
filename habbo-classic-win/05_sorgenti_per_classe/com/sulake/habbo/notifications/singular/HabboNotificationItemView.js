// Extracted from HabboAirLauncher.deobf.js, line 262917.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/notifications/singular/HabboNotificationItemView.as
// Obfuscated name: _ia288deda5eccd9

class a {
  constructor(e, r, t, i, s, o) {
    this.var_161 = e;
    this._styleConfig = i;
    this._viewConfig = s;
    let d = r;
    if (d == null || ((this._window = t.buildFromXML(d.content, 1)), this._window == null))
      return;
    let c = this._window,
      f = c.context?._r1165eed3833024?.() ?? null;
    (c.tags.push("notificationview"),
      f?.addEventListener?.(y.const_755, this._r1ea4e000280dea),
      (c.procedure = this.onWindowEvent),
      (c.blend = 0),
      (c.visible = !1));
    let l = this._window.findChildByTag("notification_text");
    ((this._r92cb5a494a60bd = l != null ? this._window.height - l.bottom : 15),
      (this._r2c48eace78469e = this._window.height),
      (this._r52eb91ff15ff52 = 4),
      (this._r84ab097d8ebaf4 = this._r52eb91ff15ff52),
      (this.var_1119 = 0),
      (this._state = a.STATE_IDLE),
      o.style.styleName === NotificationType.NFT_OPENING
        ? this.showNftOpeningNotification(o)
        : o.style.styleName === NotificationType.TREASURE_HUNT
          ? this.showTreasureHuntNotification(o)
          : o.style.styleName === NotificationType.const_1274
            ? this.onToggleButtonClicked(o)
            : this.showNormalNotification(o));
  }
  static {
    n(this, "HabboNotificationItemView");
  }
  static MAX_HEIGHT = 70;
  static SIDE_MARGIN = 5;
  static MOVE_DURATION_MS = 220;
  static STATE_IDLE = 0;
  static STATE_FADE_IN = 1;
  static STATE_DISPLAY = 2;
  static STATE_FADE_OUT = 3;
  static _rcb402b10eb6627 = 4;
  _window = null;
  var_183 = null;
  _hovering = !1;
  var_2282 = 0;
  var_2249 = 0;
  var_2227 = 0;
  _rdc7b7a5198e2eb = 0;
  _r52eb91ff15ff52 = 4;
  _r84ab097d8ebaf4 = 4;
  var_1119 = 0;
  _r92cb5a494a60bd = 15;
  _r2c48eace78469e = 0;
  _state = a.STATE_IDLE;
  _rc09d26bc3db443 = 0;
  _r48e749f182b2e1 = null;
  var_1788 = !1;
  get disposed() {
    return this._window == null;
  }
  get ready() {
    return this._state === a.STATE_IDLE;
  }
  get _r0b35a9994bac96() {
    return this._state === a.STATE_IDLE || this._state === a.STATE_FADE_OUT;
  }
  get _r8c35bc739bb80e() {
    return this._r52eb91ff15ff52;
  }
  get notificationId() {
    return this.var_183?.notificationId ?? null;
  }
  get content() {
    return this.var_183?.content ?? null;
  }
  get styleName() {
    return this.var_183?.style?.styleName ?? null;
  }
  get staysVisible() {
    return (
      this.var_183 != null && _i231c61b0ce2c6d(this.var_183.style.extraData, NotificationExtraDataKey.STAY)
    );
  }
  get height() {
    return this._viewConfig.hasKey("height")
      ? Number(this._viewConfig.getValue("height") ?? 0)
      : (this._window?.height ?? 0);
  }
  get item() {
    return this.var_183;
  }
  dispose() {
    (this._window != null &&
      (this._window.context
        ?._r1165eed3833024?.()
        ?.removeEventListener?.(y.const_755, this._r1ea4e000280dea),
      this._window.dispose(),
      (this._window = null)),
      this.var_183 != null && (this.var_183.dispose(), (this.var_183 = null)),
      (this._r48e749f182b2e1 = null));
  }
  _r4d6d9266d10c8f(e) {
    e.badgeId === this.var_183?.style._r86ed843443dcca &&
      e.badgeImage != null &&
      this.setNotificationIcon(e.badgeImage);
  }
  update(e) {
    switch ((this._rb084070996a978(e), this._state)) {
      case a.STATE_IDLE:
        break;
      case a.STATE_FADE_IN: {
        this.var_2282 += e;
        let r = this.var_2282 / Number(this._viewConfig.getValue("time_fade_in") ?? 1);
        (this.var_2282 > Number(this._viewConfig.getValue("time_fade_in") ?? 0) &&
          this.startDisplay(),
          this.adjustBlend(r));
        break;
      }
      case a.STATE_DISPLAY:
        ((this._rdc7b7a5198e2eb += e),
          this._rdc7b7a5198e2eb > this.displayTime &&
            !this._hovering &&
            !this.staysVisible &&
            this.startFadeOut());
        break;
      case a.STATE_FADE_OUT: {
        this.var_2249 += e;
        let r = 1 - this.var_2249 / Number(this._viewConfig.getValue("time_fade_out") ?? 1);
        (this.adjustBlend(r),
          this.var_2249 > Number(this._viewConfig.getValue("time_fade_out") ?? 0) &&
            this.startIdling());
        break;
      }
      case a._rcb402b10eb6627: {
        this.var_2227 += e;
        let r = this.var_2227 / Number(this._viewConfig.getValue("time_swipe_out") ?? 1);
        (this.adjustSwipeOut(r),
          this.var_2227 > Number(this._viewConfig.getValue("time_swipe_out") ?? 0) &&
            this.startIdling());
        break;
      }
    }
  }
  remove() {
    this._window == null ||
      this._state === a.STATE_IDLE ||
      this._state === a.STATE_FADE_OUT ||
      ((this._hovering = !1), this.startFadeOut());
  }
  reposition(e = -1) {
    if (this._window == null) return;
    let r = this._window,
      t = r.context?._r1165eed3833024?.();
    t != null &&
      (e !== -1 && ((this._r52eb91ff15ff52 = e), (this._r84ab097d8ebaf4 = e)),
      (r.x = t.width - r.width - a.SIDE_MARGIN),
      (r.y = this._r52eb91ff15ff52),
      (this._rc09d26bc3db443 = r.x));
  }
  _r8ac9eee45e0be4(e) {
    this._r84ab097d8ebaf4 = e;
  }
  get displayTime() {
    return this.var_183 != null &&
      _i231c61b0ce2c6d(this.var_183.style.extraData, NotificationExtraDataKey.const_285)
      ? Number(_i2f8cd30e6bbf9c(this.var_183.style.extraData, NotificationExtraDataKey.const_285) ?? 0)
      : Number(this._viewConfig.getValue("time_display") ?? 0);
  }
  showTreasureHuntNotification(e) {
    let r = this._window?.findChildByName("treasure_hunt_image");
    (r != null && (r.visible = e.style.icon == null), this.showNormalNotification(e));
  }
  onToggleButtonClicked(e) {
    if (_i231c61b0ce2c6d(e.style.extraData, NotificationExtraDataKey.TOGGLE_BUTTON_CALLBACK)) {
      let r = _i2f8cd30e6bbf9c(e.style.extraData, NotificationExtraDataKey.TOGGLE_BUTTON_CALLBACK);
      this._r48e749f182b2e1 = typeof r == "function" ? r : null;
      let t = this._window?.findChildByTag("button");
      ((this.var_1788 = !1),
        t != null &&
          ((t.caption = "${notification.stop}"),
          (t.visible = !0),
          t.addEventListener(u.CLICK, this._r33f71d5b64b99b)));
    }
    this.showNormalNotification(e);
  }
  _r33f71d5b64b99b = n((e) => {
    if (this._state !== a.STATE_DISPLAY) return;
    let r = this._window?.findChildByTag("button");
    ((this.var_1788 = !this.var_1788),
      r != null && (r.caption = this.var_1788 ? "${notification.resume}" : "${notification.stop}"),
      this._r48e749f182b2e1?.(this.var_1788));
  }, "_r33f71d5b64b99b");
  showNftOpeningNotification(e) {
    this._rfac2c711215581(e.content);
    let r = _i2f8cd30e6bbf9c(e.style.extraData, NotificationExtraDataKey.PRODUCT, 0),
      t = String(_i2f8cd30e6bbf9c(e.style.extraData, NotificationExtraDataKey.const_674, 1) ?? ""),
      i = Number(_i2f8cd30e6bbf9c(e.style.extraData, NotificationExtraDataKey.const_1313, 2) ?? 0),
      o = this._window?.findChildByName("icon_widget")?.widget;
    o != null && (o.productInfo = r);
    let d = this._window?.findChildByName("rarity_text");
    (d != null &&
      ((d.caption = `${this.var_161.getLocalization("collectibles.item.rarity")}: ${t}`),
      (d.color = i)),
      (this.var_183 = e),
      this.reposition(),
      this.startFadeIn());
  }
  showNormalNotification(e) {
    if ((this._rfac2c711215581(e.content), e.style._rfd3628ebb8da66 == null))
      this.setNotificationIcon(e.style.icon);
    else {
      let r = this._window?.findChildByTag("notification_icon_static");
      r != null && (r.assetUri = e.style._rfd3628ebb8da66);
    }
    ((this.var_183 = e), this.reposition(), this.startFadeIn());
  }
  _rfac2c711215581(e) {
    let r = this._window?.findChildByTag("notification_text");
    r == null ||
      this._window == null ||
      (this._viewConfig.hasKey("height")
        ? ((this._window.height = 0),
          (r.text = e),
          (r.height = r.textHeight + this._r92cb5a494a60bd),
          this._window.height < this._r2c48eace78469e &&
            (this._window.height = this._r2c48eace78469e))
        : (r.text = e));
  }
  setNotificationIcon(e) {
    let r = this._window?.findChildByTag("notification_icon");
    if (r == null) return;
    if (e == null) {
      r.bitmap = null;
      return;
    }
    let t;
    if (e.width < r.width && e.height < r.height) {
      t = new A(r.width, r.height, !0, 0);
      let i = (r.width - e.width) / 2,
        s = (r.height - e.height) / 2;
      t.copyPixels(e, e.rect, new E(i, s));
    } else if (e.width < e.height) {
      t = new A(e.height, e.height, !0, 0);
      let i = (e.height - e.width) / 2;
      t.copyPixels(e, e.rect, new E(i, 0));
    } else if (e.width > e.height) {
      t = new A(e.width, e.width, !0, 0);
      let i = (e.width - e.height) / 2;
      t.copyPixels(e, e.rect, new E(0, i));
    } else ((t = new A(e.width, e.height)), t.copyPixels(e, e.rect, new E(0, 0)));
    r.bitmap = t;
  }
  startFadeIn() {
    ((this.var_2282 = 0), (this._state = a.STATE_FADE_IN), (this._window.visible = !0));
  }
  startFadeOut() {
    ((this.var_2249 = 0), (this._state = a.STATE_FADE_OUT));
  }
  _r1e26f4041c9624() {
    ((this.var_2227 = 0), (this._state = a._rcb402b10eb6627));
  }
  startDisplay() {
    ((this._rdc7b7a5198e2eb = 0), (this._state = a.STATE_DISPLAY));
  }
  startIdling() {
    ((this._state = a.STATE_IDLE),
      this._window != null && (this._window.visible = !1));
  }
  onWindowEvent = n((e, r) => {
    if (e == null) return;
    let t = e.target;
    if (e.type === u.CLICK && t?.tags.indexOf("slide_notification_away") !== -1) {
      this.staysVisible || this._r1e26f4041c9624();
      return;
    }
    e.type === u.OVER
      ? (this._hovering = !0)
      : e.type === u.OUT
        ? (this._hovering = !1)
        : e.type === u.CLICK &&
          this.var_183 != null &&
          (this.var_183.ExecuteUiLinks(), this.staysVisible || this.startFadeOut());
  }, "onWindowEvent");
  _r1ea4e000280dea = n((e) => {
    this.reposition();
  }, "_r1ea4e000280dea");
  adjustBlend(e) {
    ((this.var_1119 = Math.min(1, Math.max(0, e))),
      this._window != null && (this._window.blend = this.var_1119));
  }
  adjustSwipeOut(e) {
    this._window != null &&
      (this._window.x =
        this._rc09d26bc3db443 + e * Number(this._viewConfig.getValue("distance_swipe_out") ?? 0));
  }
  _rb084070996a978(e) {
    if (this._window == null || this._r52eb91ff15ff52 === this._r84ab097d8ebaf4) return;
    let r = this._r84ab097d8ebaf4 - this._r52eb91ff15ff52,
      t = e / a.MOVE_DURATION_MS;
    t > 1 && (t = 1);
    let i = 1 - (1 - t) * (1 - t),
      s = Math.round(r * i);
    (s === 0 && (s = r > 0 ? 1 : -1),
      Math.abs(s) >= Math.abs(r)
        ? (this._r52eb91ff15ff52 = this._r84ab097d8ebaf4)
        : (this._r52eb91ff15ff52 += s),
      (this._window.y = this._r52eb91ff15ff52));
  }
}
