// Extracted from HabboAirLauncher.deobf.js, line 257020.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/roomsettings/RoomFilterCtrl.as
// Obfuscated name: _i84e9dc9209830e

class {
  constructor(e) {
    this._navigator = e;
  }
  static {
    n(this, "RoomFilterCtrl");
  }
  _flatId = 0;
  var_376 = -1;
  _window = null;
  _rfd03bc8894bb8c = [];
  _rb4d50006335087 = null;
  var_1358 = null;
  get disposed() {
    return this._navigator == null;
  }
  _rfb82ac3cc29c70(e) {
    ((this._flatId = e),
      this._navigator?.send(new class_3386(this._flatId)),
      this.refreshWindow());
  }
  _r2fbab0812f6364(e) {
    for (let r of e) this._rfd03bc8894bb8c.includes(r) || this._rfd03bc8894bb8c.push(r);
    this._rb4d50006335087 != null && (this._rb4d50006335087.removeListItems(), this._r686719edca9055());
  }
  close() {
    ((this._flatId = 0), this._window != null && (this._window.visible = !1));
  }
  disposeWindow() {
    (this._window != null &&
      ((this._window.visible = !1), this._window.dispose(), (this._window = null)),
      this._rb4d50006335087?.removeListItems(),
      this._rb4d50006335087?.dispose(),
      (this._rb4d50006335087 = null),
      this.var_1358?.dispose(),
      (this.var_1358 = null),
      (this._rfd03bc8894bb8c.length = 0));
  }
  dispose() {
    this.disposed || (this.disposeWindow(), (this._navigator = null));
  }
  refreshWindow() {
    this._navigator?.data._rd27e27c96c37cd != null &&
      (this.prepareWindow(),
      this._window != null &&
        ((this._window.visible = !0),
        this._window.invalidate(),
        this._window.activate(),
        this._navigator.tracking._rff30e139de703a("InterfaceExplorer", "open", "room.filter.seen")));
  }
  prepareWindow() {
    if (!(this._window != null || this._navigator == null)) {
      if (
        ((this._window = this._navigator.getXmlWindow("iro_room_filter_framed")),
        this._window == null)
      )
        throw new Error("Failed to build iro_room_filter_framed");
      (this._window
        .findChildByName("badword_remove_btn")
        ?.addEventListener(u.CLICK, this._r7f5822d23b3305),
        this._window
          .findChildByName("badword_add_btn")
          ?.addEventListener(u.CLICK, this._rdcd864de560f2d),
        this._window.findChildByTag("close")?.addEventListener(u.CLICK, this.onCloseButtonClick),
        (this.var_1358 = this._window.findChildByName("roomfilter_addword_txt")),
        (this._rb4d50006335087 = this._window.findChildByName("badwords_itemlist")),
        this._r686719edca9055(),
        this._window.center());
    }
  }
  _r686719edca9055() {
    if (this._rb4d50006335087 != null) {
      this._rb4d50006335087.autoArrangeItems = !1;
      for (let e = 0; ; e++) {
        let r = this._rb4d50006335087.getListItemAt(e);
        if (r == null) {
          if (this._rfd03bc8894bb8c[e] == null || ((r = this.getListEntry(e)), r == null)) break;
          this._rb4d50006335087.addListItem(r);
        }
        let t = this._rfd03bc8894bb8c[e];
        t != null
          ? ((r.color = this.getBgColor(e, !1)),
            this.refreshEntryDetails(r, t),
            (r.visible = !0),
            (r.height = 20))
          : ((r.height = 0), (r.visible = !1));
      }
      ((this._rb4d50006335087.autoArrangeItems = !0), this._rb4d50006335087.invalidate());
    }
  }
  refreshEntryDetails(e, r) {
    e.findChildByName("badword_txt").caption = r;
  }
  onCloseButtonClick = n((e) => {
    this.disposeWindow();
  }, "onCloseButtonClick");
  _rdcd864de560f2d = n((e) => {
    this.addBadWord(this.var_1358?.text ?? "");
  }, "_rdcd864de560f2d");
  addBadWord(e) {
    this.var_1358 == null ||
      this.var_1358.text.length <= 0 ||
      (this._navigator?.send(new class_2787(this._flatId, class_2787._r07008965ee7870, e)),
      this._navigator?.send(new class_3386(this._flatId)),
      (this.var_1358.text = "bobba"));
  }
  _r7f5822d23b3305 = n((e) => {
    if (this.var_376 < 0 || this._rb4d50006335087 == null) return;
    let r = this._rb4d50006335087.getListItemAt(this.var_376);
    if (r == null) return;
    let t = r.findChildByName("badword_txt")?.caption ?? "";
    ((r.height = 0), (r.visible = !1));
    let i = this._rfd03bc8894bb8c.indexOf(t);
    (i >= 0 && this._rfd03bc8894bb8c.splice(i, 1),
      this._navigator?.send(new class_2787(this._flatId, class_2787._r975f702d3e4585, t)));
  }, "_r7f5822d23b3305");
  refreshColorsAfterClick(e) {
    for (let r = 0; r < this._rfd03bc8894bb8c.length; r++) {
      let t = e.getListItemAt(r);
      t != null && (t.color = this.getBgColor(r, !1));
    }
  }
  getListEntry(e) {
    let r = this._navigator?.getXmlWindow("ros_badword");
    if (r == null) return null;
    let t = r.findChildByName("bg_region");
    return (
      t?.addEventListener(u.CLICK, this.onBgMouseClick),
      t?.addEventListener(u.OVER, this._re5021c6e476088),
      t?.addEventListener(u.OUT, this._r6f3f82f820fc78),
      (r.id = e),
      r
    );
  }
  getBgColor(e, r) {
    return e === this.var_376 ? 4288329945 : r ? 4290173439 : e % 2 !== 0 ? 4294967295 : 4293519841;
  }
  onBgMouseClick = n((e) => {
    let r = e.target,
      t = r?.parent,
      i = r?.findParentByName("badwords_itemlist");
    t == null || i == null || ((this.var_376 = t.id), this.refreshColorsAfterClick(i));
  }, "onBgMouseClick");
  _re5021c6e476088 = n((e) => {
    let r = e.target?.parent;
    r != null && (r.color = this.getBgColor(-1, !0));
  }, "_re5021c6e476088");
  _r6f3f82f820fc78 = n((e) => {
    let r = e.target?.parent;
    r != null && (r.color = this.getBgColor(r.id, !1));
  }, "_r6f3f82f820fc78");
}
