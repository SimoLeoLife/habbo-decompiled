// Extracted from HabboAirLauncher.deobf.js, line 339418.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/campaign/calendar/CalendarItem.as
// Obfuscated name: _i7b4d38cae23a25

class a {
  static {
    n(this, "CalendarItem");
  }
  static STATE_UNLOCKED = 1;
  static STATE_LOCKED_AVAILABLE = 2;
  static STATE_LOCKED_EXPIRED = 3;
  static STATE_LOCKED_FUTURE = 4;
  static IMAGE_CLOSED = "campaign_calendar_day_generic_button";
  static IMAGE_ACTIVATED = "campaign_calendar_day_generic_activated";
  static ICON_LOCKED = "campaign_calendar_generic_lock";
  static populateItem(e, r, t) {
    let i = e.clone(),
      s = i.findChildByName("bitmap_bg"),
      o = i.findChildByName("bitmap_opened_bg"),
      d = i.findChildByName("bitmap_lock");
    switch (this.resolveDayState(r, t)) {
      case a.STATE_LOCKED_AVAILABLE:
        (s && (s.assetUri = a.IMAGE_CLOSED), d && (d.assetUri = ""), o && (o.visible = !1));
        break;
      case a.STATE_LOCKED_EXPIRED:
      case a.STATE_LOCKED_FUTURE:
        (s && (s.assetUri = a.IMAGE_CLOSED),
          d && (d.assetUri = a.ICON_LOCKED),
          o && (o.visible = !1));
        break;
      case a.STATE_UNLOCKED:
        (s && (s.assetUri = a.IMAGE_ACTIVATED), d && (d.assetUri = ""), o && (o.visible = !0));
        break;
    }
    return i;
  }
  static updateState(e, r, t, i) {
    let s = e.findChildByName("bitmap_bg");
    s != null && t === i && this.resolveDayState(r, t) === a.STATE_LOCKED_AVAILABLE && this.showWiggleEffect(s);
  }
  static updateThumbnail(e, r) {
    let t = e.findChildByName("bitmap_bg"),
      i = e.findChildByName("bitmap_opened_bg"),
      s = e.findChildByName("bitmap_icon"),
      o = e.findChildByName("bitmap_icon2");
    if (
      (t && (t.assetUri = a.IMAGE_ACTIVATED),
      s && (s.y = -6),
      o && (o.y = -6),
      i && (i.visible = !0),
      typeof r == "string")
    ) {
      (s && (s.assetUri = r), o && (o.bitmap = null), s && this.showWiggleEffect(s));
      return;
    }
    (s && (s.assetUri = ""),
      o && (o.bitmap = r),
      s && this.showWiggleEffect(s),
      o && this.showWiggleEffect(o));
  }
  static showWiggleEffect(e) {
    new OEe(e);
  }
  static resolveDayState(e, r) {
    return e.openedDays.includes(r)
      ? a.STATE_UNLOCKED
      : r > e._r7568522c4b24c4
        ? a.STATE_LOCKED_FUTURE
        : e.missedDays.includes(r)
          ? a.STATE_LOCKED_EXPIRED
          : a.STATE_LOCKED_AVAILABLE;
  }
}
