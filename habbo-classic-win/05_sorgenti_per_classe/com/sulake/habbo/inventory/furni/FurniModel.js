// Estratto da HabboAirLauncher.deobf.js, riga 238411.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/inventory/furni/FurniModel.as
// Nome offuscato: _i3a19c4e25517aa

class {
  constructor(e, r, t, i, s, o, d, c) {
    this.var_63 = e;
    this._windowManager = r;
    this._communication = t;
    this._assets = i;
    this._roomEngine = s;
    this._catalog = o;
    this._soundManager = d;
    this._localization = c;
    (this._roomEngine?.events.addEventListener?.(RoomEngineObjectEvent.PLACED, this._rc2775dcd5b5ae0),
      (this._r7e003d57594a60 =
        this.var_63
          ?.getProperty("catalog.preview.alignment.bottom", "")
          ?.split(",")
          .filter((f) => f.length > 0) ?? []),
      this._r4ec286ff6f66f4.set(class_2106.FURNITURE, null),
      this._r4ec286ff6f66f4.set(class_2106.RENTABLES, null),
      (this._view = new Y7e(this)));
  }
  static {
    n(this, "FurniModel");
  }
  _view = null;
  var_86 = [];
  _disposed = !1;
  _r0403e521e8a250 = -1;
  _r8dd23a7063ef2f = !1;
  _rfd41642392fc2d = !1;
  _r7e003d57594a60;
  _re1e94f7a673569 = !1;
  _r4ec286ff6f66f4 = new Map();
  var_163 = class_2106.FURNITURE;
  _r6a0bbd21c7687c = null;
  _ra34ffd8c2126ff = !1;
  _imageUpdateCumulativeTime = !0;
  _r3373e9e32eebca = new Map();
  var_4923 = class_2245.EMPTY;
  get disposed() {
    return this._disposed;
  }
  get controller() {
    if (this.var_63 == null) throw new Error("FurniModel has been disposed.");
    return this.var_63;
  }
  get localization() {
    return this._localization;
  }
  get _r60deda082a8b90() {
    return this.var_4923 === class_2245.TRADING || this.var_4923 === class_2245.WIRED_TRADING;
  }
  get _r2eac8239a09fe7() {
    return this.var_63?._r2eac8239a09fe7 ?? null;
  }
  get roomEngine() {
    return this._roomEngine;
  }
  get furniData() {
    return this.var_86;
  }
  get musicController() {
    return this._soundManager;
  }
  get _ra4f614c5fb9a2b() {
    return this._re1e94f7a673569;
  }
  get _rdca128b55f9b8b() {
    return this._imageUpdateCumulativeTime;
  }
  set categorySelection(e) {
    this._r4ec286ff6f66f4.set(this.var_163, e);
  }
  dispose() {
    if (!this._disposed) {
      this._disposed = !0;
      for (let e of this.var_86) e.dispose();
      ((this.var_86 = []),
        this._view?.dispose(),
        (this._view = null),
        this._roomEngine?.events.removeEventListener?.(RoomEngineObjectEvent.PLACED, this._rc2775dcd5b5ae0),
        (this._roomEngine = null),
        (this._communication = null),
        (this._assets = null),
        (this._windowManager = null),
        (this._catalog = null),
        (this._soundManager = null),
        (this._localization = null),
        (this.var_63 = null));
      for (let e of this._r3373e9e32eebca.values()) e.dispose();
      this._r3373e9e32eebca.clear();
    }
  }
  _rd826d7115c1be7(e) {
    let r = this._r3373e9e32eebca.get(e);
    if (r != null) return r.clone();
    let i = this._assets?.getAssetByName(e)?.content;
    if (i == null) return null;
    let s = this._windowManager?.buildFromXML(i);
    return s == null ? null : (this._r3373e9e32eebca.set(e, s), s.clone());
  }
  _r43dcc106eff89b(e) {
    let r = this.var_63?._rb2c2fb6f23bc56(class_2106.FURNITURE) ?? !1,
      t = new Set(this._r9c7d8d585f70ac()),
      i = e.getKeys(),
      s = i.filter((c) => !t.has(c)),
      o = Array.from(t.values()).filter((c) => !i.includes(c)),
      d = t.size === 0;
    for (let c of o) this._r85e234df2a2b2d(c);
    for (let c of s) {
      let f = e.getValue(c);
      f != null && this._r284ebd645419b3(new FurnitureItem(f), !0);
    }
    (!d && s.length > 0 && this._rc4b19b364e6310(),
      this._rec872260ff5419(),
      this._view?._rdf9ec8b6a4661b(this.var_86),
      this.getSelectedItem() == null && this._re41779987e9be1(),
      this._r45a066185859ea(),
      r && this.var_63?._rf085caf479da12());
  }
  _r90309e30b37f25() {
    return this._rfd41642392fc2d;
  }
  _rec872260ff5419() {
    this._rfd41642392fc2d = !0;
  }
  createGroupItem(e, r, t, i = Number.NaN, s = !1) {
    let o = null;
    r === class_1901.WALL_PAPER
      ? (o = this._r55ef8370d66b57("inventory_furni_icon_wallpaper"))
      : r === class_1901.FLOOR
        ? (o = this._r55ef8370d66b57("inventory_furni_icon_floor"))
        : r === class_1901.LANDSCAPE && (o = this._r55ef8370d66b57("inventory_furni_icon_landscape"));
    let d = "center",
      c = this._roomEngine?._redc62c3bf823c2(e) ?? "";
    return (
      this._r7e003d57594a60.includes(c) && (d = "bottom"),
      new cQ(this, e, r, this._roomEngine, !1, t, i, o, s, d)
    );
  }
  _rbc62c1855f8d34(e) {
    return new fQ(this, this._windowManager?.assets ?? null, this._roomEngine, e);
  }
  requestInitialization() {
    this._communication?.connection != null &&
      (this._ra34ffd8c2126ff
        ? this._communication.connection.send(new class_3710())
        : this._communication.connection.send(new class_3590()));
  }
  categorySwitch(e) {
    this.var_63?.isVisible &&
      (e === class_2106.FURNITURE || e === class_2106.RENTABLES) &&
      ((this.var_163 = e),
      (this._re1e94f7a673569 = e === class_2106.RENTABLES),
      this._view?.resetFilters(e),
      this._rb359480dc8bf80(),
      this._rc4b19b364e6310());
  }
  getWindowContainer() {
    return (
      this.var_63?._r9fc90ede19317b(class_2106.MARKETPLACE),
      this._view?.getWindowContainer() ?? null
    );
  }
  closingInventoryView() {
    this._view?.isVisible && this._r89f1d7f95c6807();
  }
  _rc4b19b364e6310() {
    let e = [],
      r = this.var_63?._r6d077d4f38b3d9 ?? null;
    (r != null && e.push(...r._rae12c5b2a7f2fb()),
      this.var_63?._r34b7e698fbdaf3 != null &&
        e.push(...this.var_63._r34b7e698fbdaf3._rb0de4dcc7f92fc()));
    let t = this.var_63?._rfa660cefb72529?._rfff55da31bf48d() ?? [];
    if ((t.length > 0 && e.push(...t), e.length === 0)) {
      this._rb824f9b00e558b();
      return;
    }
    for (let i of this.var_86) i._r076cab1feac2f9(e);
    this._view?.updateActionView();
  }
  _r2970e34f6ea16f(e) {
    for (let r of this.var_86) r._r2970e34f6ea16f(e);
    this._view?.updateActionView();
  }
  _ra57b905430d0ae(e) {
    for (let r of this.var_86) r._ra57b905430d0ae(e);
    this._view?.updateActionView();
  }
  _r8e40a37d54a851(e) {
    let r = e._r8e40a37d54a851();
    return (this._view?.updateActionView(), r);
  }
  _r55b21c7d0e6744(e, r) {
    (e._r9277bcff471fb5(r), this._view?.updateActionView());
  }
  _r3dea0695a334e2(e) {
    for (let r of this.var_86) r._r3dea0695a334e2 = e;
    this._view?.updateActionView();
  }
  _r06ee7951f73d17() {
    for (let e of this.var_86) e.dispose();
    ((this.var_86 = []), this._view?._r15056513ab3ca5());
  }
  _rc192f9aaf6c144(e) {
    let r = this.var_63?._r349ca5f2f69601,
      t = this._re64782e7366593(e);
    if (r == null || t == null) return !1;
    let i = this.var_163 === class_2106.RENTABLES ? $t.RENTED_FURNI : $t.OWNED_FURNI;
    if (!r.isUnseen(i, e)) return !1;
    let s = r._r1726cb679cf29b(i, e);
    return (s && r._r2d59b93ea65720(i), s);
  }
  _r31a2969868bba5(e) {
    return this.var_86.find((r) => r.getItem(e) != null) ?? null;
  }
  _r60b05ff8e49760(e, r) {
    return this.var_86.find((t) => t.type === e && r === t.isWallItem) ?? null;
  }
  _r284ebd645419b3(e, r) {
    let t =
      !e.groupable &&
      e.category !== class_1901.MONSTERPLANT_SEED &&
      e.category !== class_1901.FURNI_CHEST &&
      e.category !== class_1901.COINS_CHEST
        ? this._r737b838f69b8f4(e, r)
        : this.addOrUpdateGroupableItem(e, r);
    return (
      r || (t._r91862e626cc051 = !0),
      t.isSelected && this._view?.updateActionView(),
      this._catalog?._r754963cee9e311?.(e.type, e.id, e.category),
      this._catalog?._r93bfd6c6424c93._r754963cee9e311?.(e.type, e.id, e.isWallItem),
      t
    );
  }
  _r45a066185859ea() {
    this._view?._r45a066185859ea();
  }
  _r85e234df2a2b2d(e) {
    for (let r = 0; r < this.var_86.length; r++) {
      let t = this.var_86[r],
        i = t.remove(e);
      if (i != null)
        return (
          t._rafb6b19888a65c() <= 0
            ? (this.var_86.splice(r, 1),
              this._view?.grid?._r181fe97e12e0b5(t),
              t.isSelected && this._re41779987e9be1(),
              t.dispose())
            : this._view?.updateActionView(),
          this._view?._r45a066185859ea(),
          this._catalog?._r93bfd6c6424c93._r499c0961ae0910?.(i.type, i.id, i.isWallItem),
          t
        );
    }
    return null;
  }
  _rbd698cc768e426(e) {
    let r = !1;
    for (let t of e) r = this._r85e234df2a2b2d(t) != null || r;
    return (r && this._view?.updateGridFilters(), r);
  }
  getSelectedItem() {
    return this.var_86.find((e) => e.isSelected) ?? null;
  }
  _re41779987e9be1() {
    this._r10c361fe7c03d7();
    let e =
      this.var_86.find((r) => r.isRented === this._re1e94f7a673569) ??
      this.var_86[0] ??
      null;
    (e != null
      ? ((e.isSelected = !0), (e.getAt = -1), (this.categorySelection = e))
      : (this.categorySelection = null),
      this._view?.updateActionView());
  }
  _r10c361fe7c03d7() {
    for (let e of this.var_86) e.isSelected = !1;
  }
  _r8f79b32ee20188(e = !1, r = !0) {
    let t = this.getSelectedItem();
    if (t == null || t._r4f43a2c8b314a4() === 0) return !1;
    t.getAt < 0 && r && (t.getAt = t._rafb6b19888a65c() - 1);
    let i = t._r7823981d08072b(t.getAt);
    if (i == null || (i.isRented && i.flatId > -1)) return !1;
    if (i.category === class_1901.WALL_PAPER || i.category === class_1901.FLOOR || i.category === class_1901.LANDSCAPE) {
      if (e) return !1;
      this._communication?.connection.send(new _idc6ac4c1b9aa02(i.id));
    } else this._r50430888e52269(i);
    return (this._view?.updateActionView(), !0);
  }
  _r5b66fd8c34c30c() {
    (this._roomEngine?._r3840271e334f01(), (this._r8dd23a7063ef2f = !1), (this._r0403e521e8a250 = -1));
  }
  _r772cb89cb8bdd3() {
    let e = this.var_63?._r34b7e698fbdaf3 ?? null;
    if (e != null && e.running) {
      e._r2470a3d341b2ac();
      return;
    }
    if (this._r60deda082a8b90) {
      this.requestSelectedFurniToTrading();
      return;
    }
    this._r8f79b32ee20188(!1);
  }
  requestSelectedFurniToTrading(e = 1, r = null) {
    let t = this.getSelectedItem();
    if (t == null) return;
    let i = t.getItemsForTrade(e);
    if (i.length === 0) return;
    let s = null,
      o = [];
    for (let c of i) (o.push(c.id), s == null && (s = c));
    if (s == null) return;
    let d = this.var_63?._r6d077d4f38b3d9 ?? null;
    (d != null
      ? d._rae12c5b2a7f2fb().length + o.length <= 1500
        ? (r != null && (r.caption = String(o.length)),
          d.requestAddItemsToTrading(
            o,
            s.isWallItem,
            s.type,
            s.category,
            s.groupable,
            s.stuffData,
          ))
        : (r != null && (r.caption = "1"),
          this._windowManager?.alert(
            "${trading.items.too_many_items.title}",
            "${trading.items.too_many_items.desc}",
            0,
            (...f) => {
              f[0]?.dispose();
            },
          ))
      : r != null && (r.caption = "1"),
      this._view?.updateActionView());
  }
  _rd7204f812e7d7f() {
    let e = this.getSelectedItem();
    e == null || e._r674cd6d940b6f9() == null || this.var_63?._rfa660cefb72529?._rcb5911238817f8(e);
  }
  _r1eb551585cedeb() {
    let r = this.getSelectedItem()?._r5168e2e6f8dba0() ?? null;
    return r == null ? null : (this._view?.updateActionView(), r);
  }
  gotoRoom() {
    let e = this.getSelectedItem()?.peek() ?? null;
    e == null ||
      this._communication?.connection == null ||
      (this._communication.connection.send(new _if635b6d25e2848(e.flatId)), (this._r6a0bbd21c7687c = e));
  }
  _r0d46ac32fd030a() {
    let e = this.getSelectedItem()?.peek() ?? null;
    e != null && this._roomEngine?._r0d46ac32fd030a(e.ref, e.type);
  }
  _r5256e536cf5e9d() {
    let r = this.getSelectedItem()?.peek() ?? null;
    if (r == null) return;
    let t =
      this.var_63?.products(
        r.type,
        r.isWallItem ? class_1803.PRODUCT_TYPE_ITEM : class_1803.PRODUCT_TYPE_STUFF,
      ) ?? null;
    t != null && this._catalog?._r2e315061469868(t, !1, -1, r.id);
  }
  _rbd8c58caa622c0() {
    let r = this.getSelectedItem()?.peek() ?? null;
    if (r == null) return;
    let t =
      this.var_63?.products(
        r.type,
        r.isWallItem ? class_1803.PRODUCT_TYPE_ITEM : class_1803.PRODUCT_TYPE_STUFF,
      ) ?? null;
    t != null && this._catalog?._r2e315061469868(t, !0, -1, r.id);
  }
  subCategorySwitch(e) {
    switch (((this.var_4923 = e), e)) {
      case class_2245.WIRED_TRADING:
      case class_2245.TRADING:
        (this._r5b66fd8c34c30c(),
          this._view != null &&
            this._imageUpdateCumulativeTime &&
            this.controller.web3tradeEnabled &&
            ((this._imageUpdateCumulativeTime = !1), this._view.updateGridFilters()),
          this._view?.updateActionView());
        break;
      case class_2245.EMPTY:
        (this._rb824f9b00e558b(),
          this._view != null &&
            !this._imageUpdateCumulativeTime &&
            this.controller.web3tradeEnabled &&
            ((this._imageUpdateCumulativeTime = !0), this._view.updateGridFilters()),
          this._view?.updateActionView());
        break;
    }
  }
  updateActionView() {
    this._view?.updateActionView();
  }
  updateView() {
    (this._view?.updateActionView(), this._view?.updateGridFilters());
  }
  _rcee4eb8ebc6d4a() {
    return this.var_63?._rcee4eb8ebc6d4a() ?? !1;
  }
  _r89f1d7f95c6807() {
    let e = this.var_163 === class_2106.RENTABLES ? $t.RENTED_FURNI : $t.OWNED_FURNI;
    this.var_63?._r349ca5f2f69601._r76597cac57aa73(e);
    for (let r of this.var_86)
      r._r91862e626cc051 &&
        r.isRented === (this.var_163 === class_2106.RENTABLES) &&
        (r._r91862e626cc051 = !1);
    this.var_63?._rf085caf479da12();
  }
  _r9afefab38edea3(e = null, r = !0) {
    if (this._view?.grid == null) return;
    let t = this.var_63?._r349ca5f2f69601._r2431cf4ae71bf9($t.OWNED_FURNI) ?? [],
      i = this.var_63?._r349ca5f2f69601._r2431cf4ae71bf9($t.RENTED_FURNI) ?? [],
      s = new Set();
    for (let c of t) s.add(c);
    for (let c of i) s.add(c);
    if (s.size === 0) return;
    let o = [],
      d = e ?? this.var_86;
    for (let c of d) {
      let f = [],
        l = [],
        b = c._rcdb6bfc66b42d1(),
        _ = !1,
        h = !1;
      for (let p of b)
        if (s.has(p)) {
          ((_ = !0),
            (this.var_63?._r349ca5f2f69601._reb06f4808721ea($t.OWNED_FURNI, p) ?? !1) ||
              ((h = !0), f.push(p)),
            (this.var_63?._r349ca5f2f69601._reb06f4808721ea($t.RENTED_FURNI, p) ?? !1) ||
              ((h = !0), l.push(p)));
          break;
        }
      !_ ||
        (c._r91862e626cc051 && !h) ||
        ((c._r91862e626cc051 = !0),
        o.push(c),
        h &&
          (this._r5ee79ba062c34e(c),
          this.var_63?._r349ca5f2f69601._r6692701be4ddd8($t.OWNED_FURNI, f),
          this.var_63?._r349ca5f2f69601._r6692701be4ddd8($t.RENTED_FURNI, l)));
    }
    o.length > 0 && r && this._view.grid._r234349e6ecd869(o);
  }
  _r0ff913ec7096db() {
    if (((this._ra34ffd8c2126ff = !0), this._r6a0bbd21c7687c != null)) {
      let e = this._r6a0bbd21c7687c.isWallItem ? 20 : 10;
      (this._roomEngine?._r5def02e220e83a(
        this._r6a0bbd21c7687c.flatId,
        Math.abs(this._r6a0bbd21c7687c.id),
        e,
      ),
        (this._r6a0bbd21c7687c = null));
    }
  }
  _rd542f3aec5735e() {
    this._ra34ffd8c2126ff = !1;
  }
  selectItemById(e) {
    let r = Number.parseInt(e, 10),
      t = this._re64782e7366593(r) ?? this._re64782e7366593(-r);
    t != null && (this.categorySelection = t);
  }
  _rb824f9b00e558b() {
    for (let e of this.var_86) e._rb824f9b00e558b();
  }
  _rc2775dcd5b5ae0 = n((e) => {
    let r = e instanceof RoomEngineObjectPlacedEvent ? e : null;
    r == null ||
      !this._r8dd23a7063ef2f ||
      r.type !== RoomEngineObjectEvent.PLACED ||
      ((this._r8dd23a7063ef2f = !1),
      r._r176bfeda3ea21e
        ? this.var_163 === class_2106.RENTABLES
          ? this.var_63?.showView()
          : ((r._r176bfeda3ea21e && r._rc4f9efa2c236ab && -r.objectId === this._r0403e521e8a250) ||
              (r._r8b4764feb43833 && r.objectId === this._r0403e521e8a250)) &&
            this._r3da5a3e69f152f()
        : (this.var_63?.showView(), this._r5b66fd8c34c30c()));
  }, "_rc2775dcd5b5ae0");
  _r55ef8370d66b57(e) {
    return this._windowManager?.assets.getAssetByName(e)?.content?.clone() ?? null;
  }
  _r9c7d8d585f70ac() {
    let e = [];
    for (let r of this.var_86) e.push(...r._rcdb6bfc66b42d1());
    return e;
  }
  _re64782e7366593(e) {
    return this.var_86.find((r) => r.getItem(e) != null) ?? null;
  }
  _r50430888e52269(e) {
    let r = e.isWallItem ? RoomObjectCategoryEnum.const_909 : RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE,
      t = !1;
    return (
      e.category === class_1901.POSTER || this._rb7bcc1fa3de9ad(e)
        ? (t =
            this._roomEngine?._re608f4ba68bdcb(
              RoomObjectPlacementSource.INVENTORY,
              e.id,
              r,
              e.type,
              e.stuffData.getLegacyString(),
              null,
              -1,
              -1,
              null,
              !0,
            ) ?? !1)
        : (t =
            this._roomEngine?._re608f4ba68bdcb(
              RoomObjectPlacementSource.INVENTORY,
              e.id,
              r,
              e.type,
              String(e.extra),
              e.stuffData,
              e.stuffData.state,
              -1,
              null,
              !0,
            ) ?? !1),
      t &&
        ((this._r0403e521e8a250 = e.ref),
        this.var_63?._r34b7e698fbdaf3?.running || this.var_63?._rcf87bdca169c00(),
        (this._r8dd23a7063ef2f = !0)),
      t
    );
  }
  _r3da5a3e69f152f() {
    let e = this.getSelectedItem();
    if (e == null) return;
    let r = -1;
    if (e.category === class_1901.POST_IT) e._rafb6b19888a65c() > 1 && (r = 0);
    else {
      let i = e.getAt;
      for (let s = i - 1; s >= 0; s--) {
        let o = e._r7823981d08072b(s);
        if (o != null && !o.locked) {
          r = s;
          break;
        }
      }
    }
    let t = !1;
    (r !== -1 ? ((e.getAt = r), (t = !this._r8f79b32ee20188(!1, !1))) : (t = !0),
      t && ((e.getAt = -1), this._r5b66fd8c34c30c(), this.var_63?.showView()));
  }
  _rb7bcc1fa3de9ad(e) {
    return (
      (this.var_63?.products(e.type, class_1803.PRODUCT_TYPE_ITEM) ?? null)?._rde6b5b86b285ca ?? !1
    );
  }
  isUnseen(e) {
    let r = e.isRented ? $t.RENTED_FURNI : $t.OWNED_FURNI;
    return this.var_63?._r349ca5f2f69601.isUnseen(r, e.id) ?? !1;
  }
  _r737b838f69b8f4(e, r) {
    for (let s of this.var_86) if (s.type === e.type && s.getItem(e.id) != null) return s;
    let t = this.isUnseen(e),
      i = this.createGroupItem(e.type, e.category, e.stuffData, e.extra, r);
    return (
      i.push(e, t),
      t ? ((i._r91862e626cc051 = !0), this._r1daf721857f83c(i)) : this._rb8670544fafdb2(i),
      this._view?.grid?._r181fe97e12e0b5(i),
      i
    );
  }
  addOrUpdateGroupableItem(e, r) {
    let t = this.isUnseen(e),
      i = null;
    for (let o of this.var_86)
      if (!(o.type !== e.type || o.isWallItem !== e.isWallItem)) {
        if (e.category === class_1901.MONSTERPLANT_SEED) {
          if (o.stuffData.rarityLevel === e.stuffData.rarityLevel) {
            i = o;
            break;
          }
        } else if (e.category === class_1901.COINS_CHEST || e.category === class_1901.FURNI_CHEST)
          o.stuffData.contentsCount === 0 &&
            e.stuffData.contentsCount === 0 &&
            o.stuffData.chestName === "" &&
            e.stuffData.chestName === "" &&
            (i = o);
        else if (o.isGroupable)
          if (e.category === class_1901.POSTER) {
            if (o.stuffData.getLegacyString() === e.stuffData.getLegacyString()) {
              i = o;
              break;
            }
          } else if (e.category === class_1901.GUILD_FURNI) {
            if (e.stuffData.compare(o.stuffData)) {
              i = o;
              break;
            }
          } else {
            i = o;
            break;
          }
      }
    if (i != null)
      return (
        i.push(e, t),
        t && ((i._r91862e626cc051 = !0), this._r5ee79ba062c34e(i)),
        this._view?.grid?._r181fe97e12e0b5(i),
        i
      );
    let s = this.createGroupItem(e.type, e.category, e.stuffData, e.extra, r);
    return (
      s.push(e, t),
      t ? ((s._r91862e626cc051 = !0), this._r1daf721857f83c(s)) : this._rb8670544fafdb2(s),
      this._view?.grid?._r181fe97e12e0b5(s),
      s
    );
  }
  _rb359480dc8bf80() {
    this._r10c361fe7c03d7();
    let e = this._r4ec286ff6f66f4.get(this.var_163) ?? null;
    (e != null && this.var_86.includes(e)
      ? ((e.isSelected = !0), (e.getAt = -1))
      : this._re41779987e9be1(),
      this._view?.updateActionView());
  }
  _r1daf721857f83c(e) {
    this.var_86.unshift(e);
  }
  _rb8670544fafdb2(e) {
    this.var_86.push(e);
  }
  removeItem(e) {
    let r = this.var_86.indexOf(e);
    r > -1 && this.var_86.splice(r, 1);
  }
  _r5ee79ba062c34e(e) {
    (this.removeItem(e), this._r1daf721857f83c(e));
  }
}
