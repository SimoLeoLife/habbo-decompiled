// Extracted from HabboAirLauncher.deobf.js, line 236665.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/inventory/items/GroupItem.as
// Obfuscated name: _i3fd803214f862e

class a {
  constructor(e, r, t, i, s, o, d = Number.NaN, c = null, f = !1, l = "center") {
    this.var_38 = e;
    this._type = r;
    this.var_163 = t;
    this._roomEngine = i;
    this.var_2716 = s;
    this.var_2364 = o;
    this.var_3191 = d;
    this._icon = c;
    this._r6946e557938114 = f;
    this._alignment = l;
    switch (this.var_163) {
      case class_1901.WALL_PAPER:
        ((this._name =
          this.var_38.controller.localization?.getLocalization(
            "inventory.furni.item.wallpaper.name",
          ) ?? ""),
          (this._description =
            this.var_38.controller.localization?.getLocalization(
              "inventory.furni.item.wallpaper.desc",
            ) ?? ""));
        break;
      case class_1901.FLOOR:
        ((this._name =
          this.var_38.controller.localization?.getLocalization(
            "inventory.furni.item.floor.name",
          ) ?? ""),
          (this._description =
            this.var_38.controller.localization?.getLocalization(
              "inventory.furni.item.floor.desc",
            ) ?? ""));
        break;
      case class_1901.LANDSCAPE:
        ((this._name =
          this.var_38.controller.localization?.getLocalization(
            "inventory.furni.item.landscape.name",
          ) ?? ""),
          (this._description =
            this.var_38.controller.localization?.getLocalization(
              "inventory.furni.item.landscape.desc",
            ) ?? ""));
        break;
    }
    this.var_38.musicController?.events?.addEventListener?.(
      SongInfoReceivedEvent.TRAX_SONG_INFO_RECEIVED,
      this.onSongInfoReceivedEvent,
    );
  }
  static {
    n(this, "GroupItem");
  }
  static _rdc917a32e71086 = "inventory_thumb_xml";
  static THUMB_COLOR_NORMAL = 13421772;
  static THUMB_COLOR_UNSEEN = 10275685;
  static THUMB_BLEND_ITEMS_AVAILABLE = 1;
  static THUMB_BLEND_ITEMS_NOT_AVAILABLE = 0.2;
  _items = new B();
  _window = null;
  _locked = !1;
  _selected = !1;
  var_983 = 0;
  var_1072 = null;
  _rbe9aeb8d8b4c1e = !1;
  var_989 = null;
  _r911b2b22c4c133 = !1;
  _rcc6006cd556a23 = !1;
  var_217 = !1;
  _name = "";
  _description = "";
  _r7f814ff991da60 = -1;
  _ra3cf95ab451c3c = -1;
  _rca62b9cbddd69c = null;
  get _r1bc368633712e0() {
    return this.var_217 && this._rbe9aeb8d8b4c1e;
  }
  get _rfc7e823e5ebebc() {
    return this.var_983 === -1;
  }
  get window() {
    return (
      this.var_217 || this.initWindow(),
      this._window == null || this._window.disposed ? null : this._window
    );
  }
  get _r7732642648cab6() {
    return this._locked;
  }
  set _r7732642648cab6(e) {
    this._locked = e;
  }
  get isSelected() {
    return this._selected;
  }
  set isSelected(e) {
    this._selected !== e && ((this._selected = e), this.updateSelectionVisual());
  }
  get type() {
    return this._type;
  }
  get _r145cc0394d677f() {
    return this.var_1072;
  }
  set _r145cc0394d677f(e) {
    this.var_1072 = e;
  }
  get _rb1cbf84bd2e220() {
    return this.var_983;
  }
  set _rb1cbf84bd2e220(e) {
    this.var_983 = e;
  }
  get category() {
    return this.var_163;
  }
  get stuffData() {
    return this.var_2364;
  }
  get extra() {
    return this.var_3191;
  }
  set _r3dea0695a334e2(e) {
    this.var_2716 !== e && ((this.var_2716 = e), this.updateRecycleStatusVisual());
  }
  get _r91862e626cc051() {
    return this._r911b2b22c4c133;
  }
  set _r91862e626cc051(e) {
    this._r911b2b22c4c133 !== e && ((this._r911b2b22c4c133 = e), this.updateBackgroundVisual());
  }
  get alignment() {
    return this._alignment;
  }
  get isWallItem() {
    return this._r7823981d08072b(0)?.isWallItem ?? !1;
  }
  get flatId() {
    return this._r7823981d08072b(0)?.flatId ?? -1;
  }
  get isGroupable() {
    return this._r7823981d08072b(0)?.groupable ?? !0;
  }
  get isRented() {
    return this._r7823981d08072b(0)?.isRented ?? !1;
  }
  get name() {
    return this._name;
  }
  get description() {
    return this._description;
  }
  get furniData() {
    if (this._rca62b9cbddd69c != null) return this._rca62b9cbddd69c;
    let e = this.peek();
    if (e == null) return null;
    let r = e.isWallItem ? class_1803.PRODUCT_TYPE_ITEM : class_1803.PRODUCT_TYPE_STUFF;
    return (
      (this._rca62b9cbddd69c = this.var_38.controller.products(e.type, r)),
      this._rca62b9cbddd69c
    );
  }
  get className() {
    return this.furniData?.className ?? "";
  }
  dispose() {
    (this.var_38.musicController?.events?.removeEventListener?.(
      SongInfoReceivedEvent.TRAX_SONG_INFO_RECEIVED,
      this.onSongInfoReceivedEvent,
    ),
      (this._roomEngine = null),
      (this.var_989 = null),
      this._items.dispose(),
      this._window?.dispose(),
      (this._window = null));
  }
  removeIntervalProcedure() {
    this._window != null && (this._window.procedure = null);
  }
  _r1aa78f2f386113(e = !0) {
    if (this.var_1072 != null || this._rbe9aeb8d8b4c1e || this._roomEngine == null) return !1;
    let r;
    return (
      this.isWallItem
        ? (r = this._roomEngine.getWallItemDataByName(
            this._type,
            this,
            this.var_2364.getLegacyString(),
          ))
        : (r = this._roomEngine._r65a31a885a1252(
            this._type,
            this,
            String(this.var_3191),
            this.var_2364,
          )),
      r == null
        ? !1
        : (r.id > 0
            ? (e && this._re93842a17a40d5(r.data), (this.var_983 = r.id))
            : (this._rcab7fed908d5a6(r.data), (this.var_983 = -1)),
          (this._rbe9aeb8d8b4c1e = !0),
          r.id > 0)
    );
  }
  push(e, r = !1) {
    let t = this._items.getValue(e.id);
    (t == null ? this._items.add(e.id, e) : ((t.locked = !1), t.update(e)),
      this._name.length === 0 && (this._name = this.getFurniItemName()),
      this._description.length === 0 && (this._description = this.getFurniItemDesc()),
      r !== this._r911b2b22c4c133 && ((this._r911b2b22c4c133 = r), this.updateBackgroundVisual()),
      this.updateItemCountVisual(),
      this.updateSelectionVisual(),
      this.updateRentStateVisual());
  }
  unshift(e) {
    let r = this._items.getValue(e.id);
    (r == null ? this._items.unshift(e.id, e) : ((r.locked = !1), r.update(e)), this.updateAllThumbDataVisuals());
  }
  pop() {
    if (this._items.length === 0) return null;
    let e = this._items.getWithIndex(this._items.length - 1);
    return (e != null && this._items.remove(e.id), this.updateAllThumbDataVisuals(), e);
  }
  peek() {
    return this._ra3cf95ab451c3c >= 0 && this._ra3cf95ab451c3c < this._items.length
      ? this._items.getWithIndex(this._ra3cf95ab451c3c)
      : this._items.length > 0
        ? this._items.getWithIndex(this._items.length - 1)
        : null;
  }
  _r7823981d08072b(e) {
    return this._items.getWithIndex(e);
  }
  getItemsForTrade(e) {
    let r = [],
      t = this._r92b96c7815292f();
    if (t == null) return r;
    for (let i = 0; i < this._items.length && r.length < e; i++) {
      let s = this._items.getWithIndex(i);
      s != null && !s.locked && s.tradeable && s.type === t.type && r.push(s);
    }
    return r;
  }
  _r92b96c7815292f() {
    if (this._ra3cf95ab451c3c >= 0 && this._ra3cf95ab451c3c < this._items.length) {
      let e = this._items.getWithIndex(this._ra3cf95ab451c3c);
      if (e != null && !e.locked && e.tradeable) return e;
    }
    for (let e = 0; e < this._items.length; e++) {
      let r = this._items.getWithIndex(e);
      if (r != null && !r.locked && r.tradeable) return r;
    }
    return null;
  }
  _r5168e2e6f8dba0() {
    for (let e = 0; e < this._items.length; e++) {
      let r = this._items.getWithIndex(e);
      if (r != null && !r.locked && r.recyclable) return (this._r2970e34f6ea16f(r.id), r);
    }
    return null;
  }
  _r674cd6d940b6f9() {
    for (let e = 0; e < this._items.length; e++) {
      let r = this._items.getWithIndex(e);
      if (r != null && !r.locked && r.sellable) return r;
    }
    return null;
  }
  _rcdb6bfc66b42d1() {
    return this._items.getValues().map((e) => e.id);
  }
  _r993642385edd75() {
    return this._items
      .getValues()
      .filter((e) => !e.isRented)
      .map((e) => e.id);
  }
  _r8e40a37d54a851() {
    let e = [];
    for (let r of this._items.getValues()) r.sellable && !r.locked && ((r.locked = !0), e.push(r));
    return (this.updateItemCountVisual(), e);
  }
  _r9277bcff471fb5(e) {
    let r = !1;
    for (let t of this._items.getValues()) e.has(t.id) && ((t.locked = !1), (r = !0));
    r && (this.updateItemCountVisual(), this.updateRecycleStatusVisual());
  }
  _r2970e34f6ea16f(e) {
    let r = this._items.getValue(e);
    return r == null ? !1 : ((r.locked = !0), this.updateItemCountVisual(), !0);
  }
  _r076cab1feac2f9(e) {
    let r = !1;
    for (let t of this._items.getValues()) {
      let i = e.includes(t.ref);
      t.locked !== i && ((t.locked = i), (r = !0));
    }
    r && this.updateItemCountVisual();
  }
  _ra57b905430d0ae(e) {
    let r = this._items.getValue(e);
    return r == null ? !1 : ((r.locked = !1), this.updateItemCountVisual(), this.updateRecycleStatusVisual(), !0);
  }
  _rb824f9b00e558b() {
    let e = !1;
    for (let r of this._items.getValues()) r.locked && ((r.locked = !1), (e = !0));
    e && this.updateItemCountVisual();
  }
  _rafb6b19888a65c() {
    return this.var_163 === class_1901.POST_IT
      ? this._items
          .getValues()
          .reduce((e, r) => e + Number.parseInt(r.stuffData.getLegacyString(), 10), 0)
      : this._items.length;
  }
  getRecyclableCount() {
    return this._items.getValues().filter((e) => e.recyclable && !e.locked).length;
  }
  _rc274ef95328596(e = !0) {
    return this._items.getValues().filter((r) => r.tradeable && (!e || !r.locked)).length;
  }
  remove(e) {
    let r = this._items.remove(e);
    return (r != null && this.updateAllThumbDataVisuals(), r);
  }
  getItem(e) {
    return this._items.getValue(e) ?? null;
  }
  replaceItem(e, r) {
    (this._items.replace(e, r) || this._items.add(e, r), this.updateAllThumbDataVisuals());
  }
  _r540b7d76237e1f() {
    return 2;
  }
  _r4f43a2c8b314a4() {
    return this.var_163 === class_1901.POST_IT
      ? this._rafb6b19888a65c()
      : this._items.getValues().filter((e) => !e.locked).length;
  }
  updateAllThumbDataVisuals() {
    this._window == null ||
      this._window.disposed ||
      (this.updateItemImageVisual(),
      this.updateBackgroundVisual(),
      this.updateItemCountVisual(),
      this.updateRecycleStatusVisual(),
      this.updateSelectionVisual(),
      this.updateRentStateVisual());
  }
  imageReady(e, r) {
    this._window == null ||
      this._window.disposed ||
      this.var_983 !== e ||
      ((this.var_1072 = r), (this.var_983 = -1), this.updateItemImageVisual());
  }
  imageFailed(e) {}
  isNft() {
    return this.className.indexOf("nft_") === 0;
  }
  get getAt() {
    return (
      this._ra3cf95ab451c3c >= this._items.length &&
        (this._ra3cf95ab451c3c = Math.max(0, this._items.length - 1)),
      this._ra3cf95ab451c3c
    );
  }
  set getAt(e) {
    (e >= this._items.length && (e = 0), (this._ra3cf95ab451c3c = e));
  }
  createWindow() {
    this._window = this.var_38._rd826d7115c1be7(a._rdc917a32e71086);
  }
  _rcab7fed908d5a6(e) {
    ((this.var_1072 = e),
      (this._rbe9aeb8d8b4c1e = !0),
      (this.var_983 = -1),
      this.updateItemImageVisual());
  }
  _re93842a17a40d5(e) {
    ((this.var_1072 = e), (this._rbe9aeb8d8b4c1e = !0), this.updateItemImageVisual());
  }
  updateRentStateVisual() {
    if (this._window == null || this._window.disposed) return;
    let e = this._r7823981d08072b(0),
      r = this._window.findChildByName("rent_state");
    if (r == null || e == null || !this.isRented) {
      r != null && (r.visible = !1);
      return;
    }
    r.visible = !0;
    let t = this.var_38.controller.getInteger("purchase.rent.warning_duration_seconds", 172800);
    r.assetUri = e.hasRentPeriodStarted
      ? e.secondsToExpiration < t
        ? "inventory_thumb_rent_ending"
        : "inventory_thumb_rent_started"
      : "inventory_thumb_rent_not_started";
  }
  updateItemCountVisual() {
    if (this._window == null) return;
    let e = this._r4f43a2c8b314a4(),
      r = e >= this._r540b7d76237e1f(),
      t = this._window.findChildByName("number_container");
    t != null && (t.visible = r);
    let i = this._window.findChildByName("number");
    r && i != null && (i.text = String(e));
    let s = this._window.findChildByName("bitmap");
    s != null && (s.blend = e <= 0 ? a.THUMB_BLEND_ITEMS_NOT_AVAILABLE : a.THUMB_BLEND_ITEMS_AVAILABLE);
  }
  updateBackgroundVisual() {
    this._window != null &&
      (this.var_989 == null &&
        (this.var_989 = this._window.findChildByTag("BG_COLOR")),
      this.var_989 != null &&
        (this.var_989.color = this._r911b2b22c4c133 ? a.THUMB_COLOR_UNSEEN : a.THUMB_COLOR_NORMAL));
  }
  updateSelectionVisual() {
    if (this._window == null) return;
    let e = this._window.findChildByName("outline");
    e != null && (e.visible = this.isSelected);
  }
  updateRecycleStatusVisual() {
    if (this._window == null) return;
    let e = this._window.findChildByName("recyclable_container");
    e != null && (e.visible = this.var_2716 && this.getRecyclableCount() > 0);
  }
  updateItemImageVisual() {
    if (this._window == null) return;
    let e = this._window.findChildByName("unique_item_overlay_container"),
      r = this._window.findChildByName("rarity_item_overlay_container"),
      t = this._window.findChildByName("chest_overlay_container"),
      i = this._window.findChildByName("unique_item_background_bitmap"),
      s = this._window.findChildByName("chest_background_bitmap");
    if (
      (e != null && (e.visible = !1),
      r != null && (r.visible = !1),
      t != null && (t.visible = !1),
      i != null && (i.visible = !1),
      s != null && (s.visible = !1),
      this.var_2364.uniqueSerialNumber > 0 && e?.widget != null)
    ) {
      let d = e.widget;
      ((d.serialNumber = this.var_2364.uniqueSerialNumber),
        (d.seriesSize = this.var_2364.uniqueSeriesSize),
        (d.animated = !0),
        (e.visible = !0),
        i != null && (i.visible = !0));
    } else if (this.var_2364.rarityLevel >= 0 && r?.widget != null) {
      let d = r.widget;
      ((d.rarityLevel = this.var_2364.rarityLevel), (r.visible = !0));
    } else if (
      (this.var_163 === class_1901.COINS_CHEST || this.var_163 === class_1901.FURNI_CHEST) &&
      t?.widget != null
    ) {
      let d = t.widget,
        c = this.var_163 === class_1901.COINS_CHEST ? "gold" : "brown";
      ((d.contentsCount = this.var_2364.contentsCount),
        (d.color = c),
        (t.visible = !0),
        s != null && ((s.assetUri = `chest_overlay_${c}_background`), (s.visible = !0)));
    }
    let o = this._window.findChildByName("bitmap");
    o != null && (o.bitmap = this.var_1072);
  }
  _r3e15584731b5d1 = n((...e) => {
    let r = e[0];
    if (r != null)
      switch (r.type) {
        case u.UP:
          ((this._rcc6006cd556a23 = !1), this.var_38._r5b66fd8c34c30c());
          break;
        case u.DOWN:
          (this.var_38._r10c361fe7c03d7(),
            (this.isSelected = !0),
            (this._rcc6006cd556a23 = !0),
            this.var_38.updateActionView(),
            (this.var_38.categorySelection = this));
          break;
        case u.OUT:
          if (!this._rcc6006cd556a23 || this.var_38._r60deda082a8b90) return;
          this.var_38._r8f79b32ee20188(!0) && (this._rcc6006cd556a23 = !1);
          break;
        case u.CLICK:
          this._rcc6006cd556a23 = !1;
          break;
        case u.DOUBLE_CLICK:
          (this.var_38._r772cb89cb8bdd3(), (this._rcc6006cd556a23 = !1));
          break;
      }
  }, "_r3e15584731b5d1");
  initWindow() {
    (this.createWindow(),
      this._window != null &&
        (this._icon != null
          ? this._rcab7fed908d5a6(this._icon)
          : this._r6946e557938114 || this._r1aa78f2f386113(),
        (this._window.procedure = this._r3e15584731b5d1),
        this.updateBackgroundVisual(),
        this.updateItemCountVisual(),
        this.updateItemImageVisual(),
        this.updateRecycleStatusVisual(),
        this.updateSelectionVisual(),
        this.updateRentStateVisual(),
        (this.var_217 = !0)));
  }
  getFurniItemName() {
    let e = this.peek();
    if (e == null) return "";
    let r;
    switch (this.var_163) {
      case class_1901.POSTER:
        r = `poster_${e.stuffData.getLegacyString()}_name`;
        break;
      case class_1901.TRAX_SONG: {
        let t = this.var_38.musicController?.soundManager?._r716cd8f1931469(e.extra) ?? null;
        return t != null ? t.name : (this._r716cd8f1931469(e), "");
      }
      default:
        r = this.isWallItem ? `wallItem.name.${e.type}` : `roomItem.name.${e.type}`;
        break;
    }
    return this.var_38.controller.localization?.getLocalization(r) ?? "";
  }
  getFurniItemDesc() {
    let e = this.peek();
    if (e == null) return "";
    let r;
    switch (this.var_163) {
      case class_1901.POSTER:
        r = `poster_${e.stuffData.getLegacyString()}_desc`;
        break;
      case class_1901.TRAX_SONG: {
        let t = this.var_38.musicController?.soundManager?._r716cd8f1931469(e.extra) ?? null;
        return t != null ? t.creator : (this._r716cd8f1931469(e), "");
      }
      default:
        r = this.isWallItem ? `wallItem.desc.${e.type}` : `roomItem.desc.${e.type}`;
        break;
    }
    return this.var_38.controller.localization?.getLocalization(r) ?? "";
  }
  _r716cd8f1931469(e) {
    if (e == null || e.category !== class_1901.TRAX_SONG) return;
    let r = e.extra;
    (this.var_38.musicController?.soundManager?._r716cd8f1931469(r) ?? null) == null
      ? (this.var_38.musicController?.soundManager?._rbb1ae2f8cd13c9(r),
        (this._r7f814ff991da60 = r))
      : (this._r7f814ff991da60 = -1);
  }
  onSongInfoReceivedEvent = n((e) => {
    e.id === this._r7f814ff991da60 &&
      ((this._r7f814ff991da60 = -1),
      (this._name = this.getFurniItemName()),
      (this._description = this.getFurniItemDesc()),
      this.var_38.getSelectedItem() === this && this.var_38.updateActionView());
  }, "onSongInfoReceivedEvent");
}
