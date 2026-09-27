// Extracted from HabboAirLauncher.deobf.js, line 329327.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/handler/FurnitureBadgeDisplayWidgetHandler.as
// Obfuscated name: _i3ddf16498bf9dc

class a {
  static {
    n(this, "FurnitureBadgeDisplayWidgetHandler");
  }
  static TROPHY_VIEW_TYPE = 0;
  var_1271 = !1;
  var_2256;
  _container = null;
  _rb3d3a56a738029 = null;
  _r4a59eac5ffec0f = null;
  _r7ec9eca71c232d = null;
  _reec94ccb37aa44 = null;
  _rae269e1f3f34b9 = null;
  constructor() {
    this.var_2256 = new class_3735(this._r6e4b26949ddd7d);
  }
  get disposed() {
    return this.var_1271;
  }
  get type() {
    return RoomWidgetEnum.FURNI_ACHIEVEMENT_RESOLUTION_ENGRAVING;
  }
  set container(e) {
    (this._container?.connection != null &&
      this.var_2256 != null &&
      this._container.connection.removeMessageEvent(this.var_2256),
      (this._container = e),
      this._container?.connection != null &&
        this.var_2256 != null &&
        this._container.connection.addMessageEvent(this.var_2256));
  }
  dispose() {
    (this._container?.connection != null &&
      this.var_2256 != null &&
      this._container.connection.removeMessageEvent(this.var_2256),
      (this.var_1271 = !0),
      this.clearPendingBadgeDisplayRequest(),
      (this.var_2256 = null),
      (this._container = null));
  }
  _rc3479181526e34() {
    return [RoomWidgetFurniToWidgetMessage.WIDGET_MESSAGE_REQUEST_ACHIEVEMENT_RESOLUTION_ENGRAVING, RoomWidgetFurniToWidgetMessage.const_306, RoomWidgetFurniToWidgetMessage.WIDGET_MESSAGE_REQUEST_BADGE_DISPLAY_ENGRAVING];
  }
  RoomWidgetLetUserInMessage(e) {
    if (this.disposed || e == null) return null;
    switch (e.type) {
      case RoomWidgetFurniToWidgetMessage.WIDGET_MESSAGE_REQUEST_BADGE_DISPLAY_ENGRAVING:
        this.handleEngravingRequest(e instanceof RoomWidgetFurniToWidgetMessage ? e : null, !0);
        break;
      case RoomWidgetFurniToWidgetMessage.WIDGET_MESSAGE_REQUEST_ACHIEVEMENT_RESOLUTION_ENGRAVING:
        (this.clearPendingBadgeDisplayRequest(), this.handleEngravingRequest(e instanceof RoomWidgetFurniToWidgetMessage ? e : null, !1));
        break;
      case RoomWidgetFurniToWidgetMessage.const_306:
        (this.clearPendingBadgeDisplayRequest(),
          this._container?.windowManager?._r3651220a1507f2(
            "${resolution.failed.title}",
            "${resolution.failed.subtitle}",
            "${resolution.failed.text}",
            null,
            null,
            null,
            "help_error_state",
          ));
        break;
    }
    return null;
  }
  _r8f2a14a26f6017() {
    return [];
  }
  _r9b1b0209eb1b5a(e) {}
  update() {}
  handleEngravingRequest(e, r) {
    let t = this._r1e22dff3f5aa5c(e),
      i = this._container?.localization;
    if (t == null || i == null) return;
    let s = t.getValue(1),
      o = i.getBadgeName(s),
      d =
        `\r
` + i.getBadgeDesc(s),
      c = t.getValue(2),
      f = t.getValue(3),
      l = r ? "badge.display.engraving.text" : "resolution.engraving.text",
      b = i.getLocalizationWithParams(l, "%badgename%", "badgename", o, "badgedesc", d);
    if ((b == null && (b = o), !r)) {
      this.dispatchTrophyDataUpdate(
        c,
        f,
        b,
        i.getLocalization("widget.furni.trophy.title", "Trophy"),
        tn._r54508071f4d27b(tn.GOLD),
        tn.GOLD,
        tn.DEFAULT_BACKGROUND_TINT,
      );
      return;
    }
    if (
      ((this._rb3d3a56a738029 = s),
      (this._rae269e1f3f34b9 = c),
      (this._r4a59eac5ffec0f = f),
      (this._reec94ccb37aa44 = b),
      (this._r7ec9eca71c232d = i.getLocalization("widget.furni.badge_display.title", "Badge Display")),
      this._container?.connection != null)
    ) {
      this._container.connection.send(new UnkMessageComposer_1args_3e8d23(s));
      return;
    }
    (this.dispatchTrophyDataUpdate(
      c,
      f,
      b,
      this._r7ec9eca71c232d,
      this._rf103341bde3fa4(vt.COMMON),
      this._r4593f0c82ec5b4(vt.COMMON),
      this._r41bd90d6b0e40e(vt.COMMON),
    ),
      this.clearPendingBadgeDisplayRequest());
  }
  _r1e22dff3f5aa5c(e) {
    if (this._container == null || e == null) return null;
    let r = this._container.roomEngine?._ra1f5cb56d0c2d8(e.roomId, e.id, e.category);
    if (r == null) return null;
    let t = r.getStringToStringMap();
    if (t == null) return null;
    let i = new ao();
    return (i._r8476f6049cdad6(t), i);
  }
  _r6e4b26949ddd7d = n((e) => {
    if (this.disposed || this._rb3d3a56a738029 == null || e == null) return;
    let r = e.getParser();
    r == null ||
      r._rc9fc89e7eb27a7 !== this._rb3d3a56a738029 ||
      (this.dispatchTrophyDataUpdate(
        this._rae269e1f3f34b9 ?? "",
        this._r4a59eac5ffec0f ?? "",
        this.getBadgeDisplayMessage(this._reec94ccb37aa44 ?? "", r.badgeRarityId, r.ownerCount),
        this._r7ec9eca71c232d ?? "",
        this._rf103341bde3fa4(r.badgeRarityId),
        this._r4593f0c82ec5b4(r.badgeRarityId),
        this._r41bd90d6b0e40e(r.badgeRarityId),
      ),
      this.clearPendingBadgeDisplayRequest());
  }, "_r6e4b26949ddd7d");
  getBadgeDisplayMessage(e, r, t) {
    let i = [];
    return (
      e !== "" &&
        i.push(
          e +
            `


`,
        ),
      i.push(this.getBadgeRarityLine(r)),
      ka.shouldShowOwnerCount(t) && i.push(" - " + this.getBadgeOwnerCountLine(t)),
      i.join("")
    );
  }
  getBadgeRarityLine(e) {
    return (
      this._container?.localization?.getLocalizationWithParams(
        "badge.rarity.badge",
        "%rarity% badge",
        "rarity",
        this._r60d0315c341f14(e),
      ) ?? ""
    );
  }
  getBadgeOwnerCountLine(e) {
    return (
      this._container?.localization?.getLocalizationWithParams(
        "badge.owner_count",
        "Owned by %count% users",
        "count",
        ka._r141535094129a5(e),
      ) ?? ""
    );
  }
  _r60d0315c341f14(e) {
    let r = vt.getLabelLocalizationKey(e, this.isUncommonBadgeRarityEnabled());
    return this._container?.localization?.getLocalization(r, r) ?? r;
  }
  dispatchTrophyDataUpdate(e, r, t, i, s, o, d) {
    let c = new RoomWidgetAchievementResolutionTrophyDataUpdateEvent(RoomWidgetAchievementResolutionTrophyDataUpdateEvent.UPDATE_TROPHY_DATA, o + 1, e, r, t, a.TROPHY_VIEW_TYPE, i, s, o, d);
    this._container?.events?.dispatchEvent?.(c);
  }
  clearPendingBadgeDisplayRequest() {
    ((this._rb3d3a56a738029 = null),
      (this._rae269e1f3f34b9 = null),
      (this._r4a59eac5ffec0f = null),
      (this._reec94ccb37aa44 = null),
      (this._r7ec9eca71c232d = null));
  }
  _r4593f0c82ec5b4(e) {
    return e === vt.const_439 ? tn.GOLD : tn.SILVER;
  }
  _r41bd90d6b0e40e(e) {
    return !vt.isStandaloneTier(e, this.isUncommonBadgeRarityEnabled()) || e === vt.const_439
      ? tn.DEFAULT_BACKGROUND_TINT
      : this._r649ad5046766f1(e);
  }
  _rf103341bde3fa4(e) {
    return vt.isStandaloneTier(e, this.isUncommonBadgeRarityEnabled())
      ? e === vt.const_439
        ? tn._r54508071f4d27b(tn.GOLD)
        : this._r54858075ba97da(tn._r54508071f4d27b(tn.SILVER), this._r649ad5046766f1(e))
      : tn._r54508071f4d27b(tn.SILVER);
  }
  _r649ad5046766f1(e) {
    return this._r5f42ff539f0f87(vt._rb6aa484dbb343f(e, this.isUncommonBadgeRarityEnabled()), this._r648c5bf9316f2c(e));
  }
  _r648c5bf9316f2c(e) {
    switch (e) {
      case vt.const_269:
        return 0.25;
      case vt.RARE:
        return 0.3;
      case vt.VERY_RARE:
        return 0.35;
      case vt.MYTHICAL:
        return 0.4;
      case vt.const_1197:
        return 0.45;
      default:
        return 0;
    }
  }
  isUncommonBadgeRarityEnabled() {
    return this._container?.config?.getBoolean("badge_rarity.uncommon") ?? !1;
  }
  _r5f42ff539f0f87(e, r) {
    let t = (e >> 16) & 255,
      i = (e >> 8) & 255,
      s = e & 255;
    return (
      (t = t + Math.trunc((255 - t) * r)),
      (i = i + Math.trunc((255 - i) * r)),
      (s = s + Math.trunc((255 - s) * r)),
      (4278190080 | (t << 16) | (i << 8) | s) >>> 0
    );
  }
  _r54858075ba97da(e, r) {
    let t = Math.trunc((((e >> 16) & 255) * ((r >> 16) & 255)) / 255),
      i = Math.trunc((((e >> 8) & 255) * ((r >> 8) & 255)) / 255),
      s = Math.trunc(((e & 255) * (r & 255)) / 255);
    return (4278190080 | (t << 16) | (i << 8) | s) >>> 0;
  }
}
