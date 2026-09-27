// Estratto da HabboAirLauncher.deobf.js, riga 260371.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/view/search/results/RoomEntryElementFactory.as
// Nome offuscato: _ic909d72f5f75ce

class {
  static {
    n(this, "RoomEntryElementFactory");
  }
  static TILES_PER_CONTAINER = 3;
  _navigator;
  _r9324dc70e6c673 = null;
  _r5883a6d43063f0 = null;
  var_5288 = null;
  _viewMode;
  constructor(e) {
    ((this._navigator = e), (this._viewMode = xd.searchCodeOriginal(xd.HOTEL_VIEW_CODE)));
  }
  set viewMode(e) {
    this._viewMode = e;
  }
  set _r21d3964b3a0052(e) {
    this._r9324dc70e6c673 = e;
  }
  set _r0ab46ef3e01c9e(e) {
    this._r5883a6d43063f0 = e;
  }
  set _rcbb3f25cd31a1f(e) {
    this.var_5288 = e;
  }
  get rowEntryTemplateHeight() {
    return this._r9324dc70e6c673?.height ?? 0;
  }
  getNewRowElement(e, r, t = -1) {
    if (!this._r9324dc70e6c673) throw new Error("Row entry template must be set before rendering.");
    let i = this._r9324dc70e6c673.clone();
    return (
      t !== -1 && (i.width = t),
      (i.color = RoomEntryUtils.getModulatedBackgroundColor(r, i.color)),
      this.updateCommonEntryElements(i, e, !1),
      (this._r2d49dcb9e13606(i, "grouphome_icon").visible = e.groupBadgeCode !== ""),
      i
    );
  }
  getNewTileElement(e, r) {
    if (!this._r5883a6d43063f0) throw new Error("Tile entry template must be set before rendering.");
    let t = this._r5883a6d43063f0.clone();
    return (
      this.updateCommonEntryElements(t, e, !0),
      e.groupBadgeCode !== "" &&
        ((this._r2d49dcb9e13606(t, "room_group_badge").visible = !0),
        (this._r2d49dcb9e13606(t, "room_group_badge").widget.badgeId = e.groupBadgeCode)),
      e._r6ce72253ab2cde != null
        ? this._navigator.getBoolean("new.navigator.official.room.thumbnails.in.amazon")
          ? (this._r2d49dcb9e13606(t, "room_pic_placeholder").assetUri =
              this._navigator.getProperty("navigator.thumbnail.url_base") + e._r6ce72253ab2cde)
          : (this._r2d49dcb9e13606(t, "room_pic_placeholder").assetUri =
              this._navigator.getProperty("image.library.url") + e._r6ce72253ab2cde)
        : (this._r2d49dcb9e13606(t, "room_pic_placeholder").assetUri =
            this._navigator.getProperty("navigator.thumbnail.url_base") + e.flatId + ".png"),
      t
    );
  }
  getNewTileContainerElement() {
    if (!this.var_5288) throw new Error("Tile container template must be set before rendering.");
    return this.var_5288.clone();
  }
  updateCommonEntryElements(e, r, t) {
    let i = this._r2d49dcb9e13606(e, "room_usercount"),
      s = this._r2d49dcb9e13606(e, "room_name"),
      o = this._r2d49dcb9e13606(e, "go_to_room_region"),
      d = this._r2d49dcb9e13606(e, "info_popup_click_region");
    ((i.caption = r.userCount.toString()),
      (s.caption = xd.isEventViewMode(this._viewMode) ? r.roomAdName : r.roomName),
      (o.id = r.flatId),
      o.addEventListener(u.CLICK, this._ra15d96930b149e(this._r5c01d6b493247c.bind(this))),
      o.addEventListener(
        u.OVER,
        this._ra15d96930b149e(t ? this._recb5a6fbea7078.bind(this) : this._r898536fcb9b396.bind(this)),
      ),
      (d.id = r.flatId),
      d.addEventListener(u.CLICK, this._ra15d96930b149e(this._r2b55688a30d438.bind(this))),
      d.addEventListener(u.OVER, this._ra15d96930b149e(this._rf9a0326c053a65.bind(this))),
      (this._r2d49dcb9e13606(e, "room_info_usercount_border").color = _ibbd7d859e63c97._rccac1f9055f4ea(
        r.userCount,
        r._ra66356507ed6a4,
      )),
      (this._r2d49dcb9e13606(e, "doormode_icon").assetUri = RoomEntryUtils.getDoorModeIconAsset(r._rf742cf771d167a)));
  }
  _r5c01d6b493247c(e) {
    let r = e.window;
    r != null && this._navigator.goToRoom(r.id);
  }
  _r2b55688a30d438(e) {
    let r = e.window;
    if (r == null) return;
    let t = new D(),
      i = this._navigator._r863f575e329672?.findGuestRoom(r.id);
    (r.getGlobalRectangle(t),
      i && this._navigator.view.showRoomInfoBubbleAt(i, t.right, (t.bottom - t.top) / 2 + t.top));
  }
  _rf9a0326c053a65(e) {
    if (!this._navigator.view._rac155c1dbd00e7) return;
    let r = e.window;
    if (r == null) return;
    let t = new D(),
      i = this._navigator._r863f575e329672?.findGuestRoom(r.id);
    (r.getGlobalRectangle(t),
      i && this._navigator.view.showRoomInfoBubbleAt(i, t.right, (t.bottom - t.top) / 2 + t.top, !0));
  }
  _recb5a6fbea7078(e) {
    if (!this._navigator.view._rac155c1dbd00e7) return;
    let r = e.window;
    if (r == null) return;
    let t = new D(),
      i = this._navigator._r863f575e329672?.findGuestRoom(r.id);
    (r.getGlobalRectangle(t),
      i &&
        this._navigator.view.showRoomInfoBubbleAt(i, t.right - 6, (t.bottom - t.top) / 2 + t.top + 56, !0));
  }
  _r898536fcb9b396(e) {
    if (!this._navigator.view._rac155c1dbd00e7) return;
    let r = e.window;
    if (r == null) return;
    let t = new D(),
      i = this._navigator._r863f575e329672?.findGuestRoom(r.id);
    (r.getGlobalRectangle(t),
      i && this._navigator.view.showRoomInfoBubbleAt(i, t.right + 20, (t.bottom - t.top) / 2 + t.top, !0));
  }
  _r2d49dcb9e13606(e, r) {
    let t = e.findChildByName(r);
    if (t == null) throw new Error(`Missing room entry child window: ${r}`);
    return t;
  }
  _ra15d96930b149e(e) {
    return e;
  }
}
