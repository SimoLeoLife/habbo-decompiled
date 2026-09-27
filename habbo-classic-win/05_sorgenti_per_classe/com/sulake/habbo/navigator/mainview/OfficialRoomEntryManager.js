// Estratto da HabboAirLauncher.deobf.js, riga 256337.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/mainview/OfficialRoomEntryManager.as
// Nome offuscato: _i78a06652f62200

class a {
  constructor(e) {
    this._navigator = e;
    this._re08bf90c0b118d = new H1(e);
  }
  static {
    n(this, "OfficialRoomEntryManager");
  }
  static HOTTEST_GROUPS_TAG = "hottest_groups";
  static IMAGE_WIDTH_WIDE = 267;
  static IMAGE_WIDTH_NARROW = 65;
  _re08bf90c0b118d;
  _disposed = !1;
  get disposed() {
    return this._disposed;
  }
  dispose() {
    (this._re08bf90c0b118d.dispose(), (this._navigator = null), (this._disposed = !0));
  }
  refreshAdFooter(e) {
    if (this._navigator?.data._ra175262e310a69 == null) return;
    let r = e.getChildByName("ad_footer"),
      t = r?.getChildByName("ad_cont");
    if (r == null || t == null) return;
    t.numChildren < 1 && t.addChild(this.createEntry(!0));
    let i = t.getChildAt(0);
    i != null &&
      (this.refreshEntry(i, !0, this._navigator.data._ra175262e310a69),
      (r.visible = !0),
      this._navigator.data._rf806c62c486d4f++);
  }
  createEntry(e) {
    let r = this._navigator?.getXmlWindow("grs_official_room_row_phase_one");
    if (r == null) throw new Error("Failed to build official room entry window");
    let t = e ? "" : "_b",
      i = r.findChildByName("image_cont"),
      s = r.findChildByName("folder_cont");
    if (i != null) {
      (this._navigator?.refreshButton(i, `rico_rnd_l${t}`, !0, null, 0),
        this._navigator?.refreshButton(i, `rico_rnd_r${t}`, !0, null, 0));
      let o = i.findChildByName("rico_rnd_m");
      o != null &&
        ((o.bitmap = this._navigator?._r6bd8f6d6bfdbb5("rico_rnd_m") ?? null),
        (o.disposesBitmap = !1));
    }
    if (s != null) {
      (this._navigator?.refreshButton(s, `rico_rnd_l${t}`, !0, null, 0),
        this._navigator?.refreshButton(s, `rico_rnd_r${t}`, !0, null, 0));
      let o = s.findChildByName("rico_rnd_m");
      o != null &&
        ((o.bitmap = this._navigator?._r6bd8f6d6bfdbb5("rico_rnd_m") ?? null),
        (o.disposesBitmap = !1));
    }
    return (
      r.addEventListener(u.OVER, this._r5dca76843d79fe),
      r.addEventListener(u.OUT, this._r554c3cd1929c59),
      r.addEventListener(u.CLICK, this._r687216e6c5572a),
      (r.color = e ? 4294967295 : 4292797682),
      r
    );
  }
  refreshEntry(e, r, t) {
    if ((Fr.hideChildren(e), !r)) {
      ((e.height = 0), (e.visible = !1));
      return;
    }
    ((e.id = t.index),
      t.type === yu.const_166 ? this.refreshFolderEntry(e, t) : this._r3a12eb61569cfc(e, t),
      (e.visible = !0));
  }
  getPopupCaption(e) {
    return e._r7d18524fd7e75a != null && e._r7d18524fd7e75a !== ""
      ? e._r7d18524fd7e75a
      : e.guestRoomData != null
        ? e.guestRoomData.roomName
        : e.tag != null && e.tag !== ""
          ? e.tag
          : "NA";
  }
  getPopupDesc(e) {
    return e._r7d18524fd7e75a != null && e._r7d18524fd7e75a !== ""
      ? e._rdeb9307da3fb92
      : e.guestRoomData != null
        ? e.guestRoomData.description
        : "";
  }
  _r3a12eb61569cfc(e, r) {
    (this.refreshCell(e, r), this.refreshDetails(e, r), this.refreshUserCount(e, r), (e.height = 68));
  }
  refreshFolderEntry(e, r) {
    let t = e.findChildByName("folder_cont");
    if (t == null) return;
    t.visible = !0;
    let i = t.findChildByName("folder_name_text"),
      s = t.findChildByName("arrow_label");
    (i != null && (i.text = r._r7d18524fd7e75a),
      s != null && (s.text = r.open ? "${navigator.folder.hide}" : "${navigator.folder.show}"),
      this._navigator?.refreshButton(t, "arrow_down_white", r.open, null, 0),
      this._navigator?.refreshButton(t, "arrow_right_white", !r.open, null, 0),
      this.refreshFolderImage(t, r),
      (e.height = 68));
    let o = e.findChildByName("folderNameContainer");
    if (!(o == null || i == null)) {
      if (i.text === "") {
        o.visible = !1;
        return;
      }
      ((o.visible = !0),
        this._navigator.isPerkAllowed?.("NAVIGATOR_PHASE_ONE_2014") || (o.width = i.textWidth + 20));
    }
  }
  refreshUserCount(e, r) {
    r.showDetails &&
      r.type === yu.const_544 &&
      this._re08bf90c0b118d.refreshUserCount(
        r._r512120b0511d27,
        e,
        r.userCount,
        "${navigator.usercounttooltip.users}",
        e.width - 3 - 34,
        e.height - 3 - 13,
      );
  }
  refreshCell(e, r) {
    let t = e.findChildByName("image_cont");
    t != null &&
      ((t.visible = !0),
      (t.width = r.showDetails ? a.IMAGE_WIDTH_NARROW : a.IMAGE_WIDTH_WIDE),
      this.refreshPicText(t, r),
      this.refreshRoomImage(t, r));
  }
  refreshPicText(e, r) {
    let t = e.findChildByName("picTextContainer");
    if (t == null) return;
    if (r.picText === "" || r.showDetails) {
      t.visible = !1;
      return;
    }
    t.visible = !0;
    let i = t.findChildByName("picText");
    i != null && ((i.text = r.picText), (i.height = i.textHeight + 10), (t.height = i.height + 4));
  }
  refreshFolderImage(e, r) {
    let t = e.findChildByName("folder_image");
    t != null && ((t.visible = !1), r.picRef !== "" && this.refreshCustomImage(r, t));
  }
  refreshRoomImage(e, r) {
    let t = e.findChildByName("room_image");
    t != null &&
      ((t.visible = !1),
      r.picRef !== ""
        ? this.refreshCustomImage(r, t)
        : r.guestRoomData != null
          ? this.refreshGuestRoomImage(r, t)
          : this.refreshEmptyImage(t));
  }
  refreshCustomImage(e, r) {
    let t = `customImage.${e.picRef}`;
    if (r.tags[0] === t) {
      r.visible = !0;
      return;
    }
    ((r.x = 0),
      (r.visible = !1),
      new OfficialRoomImageLoader(this._navigator, e.picRef, r).startLoad(),
      r.tags.splice(0, r.tags.length),
      r.tags.push(t));
  }
  refreshGuestRoomImage(e, r) {
    let i = `guestRoom.${e.guestRoomData?.thumbnail.getAsString() ?? ""}`;
    if (r.tags[0] === i) {
      r.visible = !0;
      return;
    }
    ((r.x = 0),
      (r.width = 64),
      (r.bitmap = new A(64, 64)),
      r.bitmap.fillRect(r.bitmap.rect, 4294967295),
      r.tags.splice(0, r.tags.length),
      r.tags.push(i),
      (r.visible = !0));
  }
  refreshEmptyImage(e) {
    let r = "empty";
    if (e.tags[0] === r) {
      e.visible = !0;
      return;
    }
    ((e.x = 0),
      (e.width = 64),
      (e.bitmap = new A(64, 64, !1, 4291611852)),
      e.tags.splice(0, e.tags.length),
      e.tags.push(r),
      (e.visible = !0));
  }
  _r5dca76843d79fe = n((e) => {
    this.setEnterArrowVisibility(e.target, !0);
  }, "_r5dca76843d79fe");
  _r554c3cd1929c59 = n((e) => {
    this.setEnterArrowVisibility(e.target, !1);
  }, "_r554c3cd1929c59");
  _r687216e6c5572a = n((e) => {
    this._rc605f44b05d10b(e.target);
  }, "_r687216e6c5572a");
  setEnterArrowVisibility(e, r) {
    let i = e?.findChildByName("enter_room");
    if (i != null) {
      if (r) {
        (this._navigator?.refreshButton(i, "enter_room_l", !0, null, 0),
          this._navigator?.refreshButton(i, "enter_room_r", !0, null, 0));
        let s = i.findChildByName("enter_room_m");
        (s != null &&
          s.bitmap == null &&
          ((s.bitmap = this._navigator?._r6bd8f6d6bfdbb5("enter_room_m") ?? null),
          (s.disposesBitmap = !1)),
          this._navigator?.refreshButton(i, "enter_room_a", !0, null, 0));
      }
      i.visible = r;
    }
  }
  _rc605f44b05d10b(e) {
    let r = this.getEntry(e);
    r == null ||
      this._navigator == null ||
      (r.guestRoomData != null
        ? r.guestRoomData._rf742cf771d167a === class_3308.const_133
          ? this._navigator.passwordInput?.show(r.guestRoomData)
          : this._navigator.goToRoom(r.guestRoomData.flatId, !0)
        : r.tag != null
          ? r.tag === a.HOTTEST_GROUPS_TAG
            ? this._navigator.performGuildBaseSearch()
            : this._navigator._r970f774dfe2577?.startSearch(
                We._r54c62c548aaab8,
                We.SEARCHTYPE_TAG_SEARCH,
                r.tag,
              )
          : (r.toggleOpen(), this._navigator._r970f774dfe2577?.refresh()));
  }
  getEntry(e) {
    let r = e;
    return r == null || r.name !== "cont"
      ? null
      : r.parent?.name === "ad_cont"
        ? this.findAdEntry()
        : this._rec9b0f3772d729(r);
  }
  findAdEntry() {
    return this._navigator?.data._ra175262e310a69 ?? null;
  }
  _rec9b0f3772d729(e) {
    let r = this._navigator?.data._r9df01b7c78bf2d;
    if (r == null) return null;
    let t = e.id;
    for (let i of r.entries) if (i.index === t) return i;
    return null;
  }
  refreshDetails(e, r) {
    let t = e.findChildByName("details_container");
    t != null &&
      ((t.visible = r.showDetails),
      r.showDetails &&
        (Fr.hideChildren(t), this.refreshEntryCaption(t, r), this.refreshEntryDesc(t, r)));
  }
  refreshEntryCaption(e, r) {
    let t = e.getChildByName("entry_caption");
    t != null && ((t.visible = !0), (t.text = this.getPopupCaption(r)));
  }
  refreshEntryDesc(e, r) {
    let t = this.getPopupDesc(r);
    if (t === "") return;
    let i = e.getChildByName("entry_desc");
    i != null && ((i.text = t), (i.visible = !0));
  }
}
