// Extracted from HabboAirLauncher.deobf.js, line 194671.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/RoomAdsCatalogWidget.as
// Obfuscated name: _i23e9c16b7fc2a8

class extends CatalogWidget {
  constructor(r, t) {
    super(r);
    this._catalog = t;
  }
  static {
    n(this, "RoomAdsCatalogWidget");
  }
  _rde71faeb08715f = null;
  _rooms = null;
  _r40e882749c227f = !1;
  var_1328 = null;
  init() {
    if (
      !super.init() ||
      this._catalog?.connection == null ||
      this._catalog.roomEngine == null
    )
      return !1;
    (this._rde71faeb08715f == null &&
      ((this._rde71faeb08715f = new class_2815(this._r0dd39eb99240e6)),
      this._catalog.connection.addMessageEvent(this._rde71faeb08715f)),
      this._catalog._rf3d1715fe51ded(),
      this.window
        ?.findChildByName("name_input_text")
        ?.addEventListener(y.WINDOW_EVENT_CHANGE, this._r395b37c9a8cb63),
      this.window
        ?.findChildByName("desc_input_text")
        ?.addEventListener(y.WINDOW_EVENT_CHANGE, this._re699af82315d6d),
      this.window
        ?.findChildByName("room_drop_menu")
        ?.addEventListener(y.const_238, this._rd64a5ffe6febcc),
      this.events?.addEventListener?.(CatalogWidgetEventEnum.PURCHASE, this._r116fc92f95d8bd));
    let r = this._catalog._rc7dd5dfdda40b8,
      t = this._catalog.getInteger("room_ad.duration.minutes", 120),
      i = this.getExtensionMinutes(r, t);
    return (
      this._catalog.localization?._r43eae9731f5b27("roomad.catalog_text", "duration", String(i)),
      this._catalog.roomEngine.events.addEventListener?.(RoomEngineEvent.ROOM_INITIALIZED, this.onRoomInitialized),
      this.populateEventCategories(),
      !0
    );
  }
  dispose() {
    (this.window
      ?.findChildByName("name_input_text")
      ?.removeEventListener(y.WINDOW_EVENT_CHANGE, this._r395b37c9a8cb63),
      this.window
        ?.findChildByName("desc_input_text")
        ?.removeEventListener(y.WINDOW_EVENT_CHANGE, this._re699af82315d6d),
      this.window
        ?.findChildByName("room_drop_menu")
        ?.removeEventListener(y.const_238, this._rd64a5ffe6febcc),
      this.var_1328?.removeEventListener(y.const_238, this._r9005ee28c30f45),
      this.events?.removeEventListener?.(CatalogWidgetEventEnum.PURCHASE, this._r116fc92f95d8bd),
      this._catalog != null &&
        (this._rde71faeb08715f != null &&
          this._catalog.connection?.removeMessageEvent(this._rde71faeb08715f),
        this._catalog.roomEngine?.events.removeEventListener?.(
          RoomEngineEvent.ROOM_INITIALIZED,
          this.onRoomInitialized,
        )),
      (this._rde71faeb08715f = null),
      (this._rooms = null),
      (this.var_1328 = null),
      (this._catalog = null),
      super.dispose());
  }
  getExtensionMinutes(r, t) {
    if (!(this._catalog?.getBoolean("roomad.limited_extension") ?? !1) || r?.expirationTime == null)
      return t;
    let s = Date.now(),
      o = r.expirationTime.getTime();
    return (s - o) / (1e3 * 60) + t;
  }
  populateEventCategories() {
    if (this.window == null) return;
    (this.var_1328?.removeEventListener(y.const_238, this._r9005ee28c30f45),
      (this.var_1328 = this.window.findChildByName("categories_list")));
    let r = [];
    for (let t of this._catalog?.navigator?._r34ab8227ed918d ?? [])
      t.visible && r.push(`\${navigator.searchcode.title.eventcategory__${t.categoryId}}`);
    (this.var_1328?.populate(r),
      (this.var_1328?.numMenuItems ?? 0) > 0 && (this.var_1328.selection = 0),
      this.var_1328?.addEventListener(y.const_238, this._r9005ee28c30f45));
  }
  onRoomInitialized = n((r) => {
    u9._rd190b5156b4615(r.roomId) || this.setDefaultRoom(r.roomId, !1);
  }, "onRoomInitialized");
  setDefaultRoom(r, t = !1) {
    let i = this.window?.findChildByName("room_drop_menu");
    if (i == null) return;
    if (this._rooms == null) {
      i.numMenuItems > 0 && (i.selection = 0);
      return;
    }
    let s = 0,
      o = [];
    for (let f = 0; f < this._rooms.length; f++) {
      let l = this._rooms[f];
      (t && o.push(l.roomName.length > 25 ? `${l.roomName.substring(0, 25)}...` : l.roomName),
        l.roomId === r && (s = f));
    }
    t &&
      (o.length === 0 &&
        o.push(
          this._catalog?.localization?.getLocalization(
            "roomad.no.available.room",
            "roomad.no.available.room",
          ) ?? "roomad.no.available.room",
        ),
      i.populate(o));
    let d = this._rooms[s] ?? null;
    if (d == null) {
      i.selection = 0;
      return;
    }
    i.selection = s;
    let c = this._catalog?._rc7dd5dfdda40b8 ?? null;
    (c == null && ((c = new RoomAdPurchaseData()), this._catalog && (this._catalog._rc7dd5dfdda40b8 = c)),
      (c.flatId = d.roomId));
  }
  _r50f12dad66af0f() {
    let r = this._catalog?._rc7dd5dfdda40b8 ?? null;
    if (r == null || !r._rae51ee574e7731) return;
    let t = this.window?.findChildByName("name_input_text"),
      i = this.window?.findChildByName("desc_input_text");
    (t != null && (t.caption = r.name ?? ""), i != null && (i.caption = r.description));
    let s = new class_2912(r.flatId, r.roomName ?? "", !1);
    (this._rooms?.push(s),
      this.var_1328 == null &&
        (this.var_1328 = this.window?.findChildByName("categories_list")),
      this.var_1328 != null &&
        r.categoryId > 0 &&
        (this.var_1328.selection = r.categoryId - 1));
  }
  _r0dd39eb99240e6 = n((r) => {
    if (this.window == null || this.window.disposed) return;
    let i = r.getParser();
    ((this._rooms = i.rooms),
      (this._r40e882749c227f = i.var_4051),
      this._r50f12dad66af0f(),
      this.populateEventCategories(),
      this.setDefaultRoom(this._catalog?.roomEngine?.activeRoomId ?? 0, !0));
    let s = this._ra24cef20fe242a();
    if (s == null) return;
    this.events?.dispatchEvent?.(new UnkClass_dfee61(s));
    let o = this._catalog?._rc7dd5dfdda40b8 ?? null;
    (o == null && ((o = new RoomAdPurchaseData()), this._catalog && (this._catalog._rc7dd5dfdda40b8 = o)),
      (o.offerId = s.offerId));
    let d = this.window.findChildByName("price_container");
    d != null && this._catalog?.utils._ra10ac9ff6556f3(d, s);
  }, "_r0dd39eb99240e6");
  _r116fc92f95d8bd = n((r) => {
    this._catalog?._rf3d1715fe51ded();
    let t = this.window?.findChildByName("name_input_text"),
      i = this.window?.findChildByName("desc_input_text");
    (t != null && (t.caption = ""),
      i != null && (i.caption = ""),
      this._catalog?._rc7dd5dfdda40b8?.clear());
  }, "_r116fc92f95d8bd");
  _r395b37c9a8cb63 = n((r) => {
    let t = r.target,
      i = this._catalog?._rc7dd5dfdda40b8 ?? null;
    t != null && i != null && (i.name = t.text);
  }, "_r395b37c9a8cb63");
  _re699af82315d6d = n((r) => {
    let t = r.target,
      i = this._catalog?._rc7dd5dfdda40b8 ?? null;
    t != null && i != null && (i.description = t.text);
  }, "_re699af82315d6d");
  _rd64a5ffe6febcc = n((r) => {
    if (r.type !== y.const_238 || (this._rooms?.length ?? 0) === 0) return;
    let t = r.target;
    if (t == null) return;
    let i = this._rooms?.[t.selection] ?? null,
      s = this._catalog?._rc7dd5dfdda40b8 ?? null;
    if (i == null || s == null) return;
    s.flatId = i.roomId;
    let o = this._catalog?.getInteger("room_ad.duration.minutes", 120) ?? 120;
    (i.roomId === s._r9f52cb79a6813e && (o = this.getExtensionMinutes(s, o)),
      this._catalog?.localization?._r43eae9731f5b27("roomad.catalog_text", "duration", String(o)));
    let d = this.window?.findChildByName("ctlg_text_1");
    d != null &&
      (d.caption =
        this._catalog?.localization?.getLocalization("roomad.catalog_text") ??
        "${roomad.catalog_text}");
  }, "_rd64a5ffe6febcc");
  _r9005ee28c30f45 = n((r) => {
    let t = 0,
      i = -1,
      s = this.var_1328?.selection ?? 0;
    for (let d of this._catalog?.navigator?._r34ab8227ed918d ?? [])
      if (d.visible) {
        if (s === t) {
          i = d.categoryId;
          break;
        }
        t++;
      }
    let o = this._catalog?._rc7dd5dfdda40b8 ?? null;
    o != null && (o.categoryId = i);
  }, "_r9005ee28c30f45");
  _ra24cef20fe242a() {
    let r = this.page?.offers ?? [];
    if (r.length === 1) return r[0] ?? null;
    for (let t of r) {
      let i = t;
      if (
        (i.clubLevel === dr.VIP && this._r40e882749c227f) ||
        (i.clubLevel !== dr.VIP && !this._r40e882749c227f)
      )
        return i;
    }
    return null;
  }
}
