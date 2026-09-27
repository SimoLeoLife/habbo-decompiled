// Extracted from HabboAirLauncher.deobf.js, line 178953.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/habbicons/HabbiconView.as
// Obfuscated name: _i79b2db400fca6b

class a {
  constructor(e, r) {
    this.var_63 = e;
    this._windowManager = r;
    ((this._window = this._windowManager.buildFromXML(
      this.var_63.assets.getAssetByName("habbicon_view_xml").content,
      a.DESKTOP_WINDOW_LAYER,
    )),
      this._window.center(),
      this.extractTemplates(),
      this._r9d742043233bed(),
      this._r167abcd346cd3e(),
      this.var_63.registerUpdateReceiver(this, 1),
      this._r760fea1c5de1f8(!1));
  }
  static {
    n(this, "HabbiconView");
  }
  static DESKTOP_WINDOW_LAYER = 1;
  _window;
  _headerView;
  var_2189;
  _r8eb383bbdb002d;
  var_591;
  var_1228;
  var_237;
  var_2146;
  _emptyTileTemplate;
  getGridItemByName;
  var_2967;
  _r403be92f9ba73e = null;
  _r765386d4825f46 = HabbiconTabMode.ALL_SETS;
  var_148 = null;
  var_480 = null;
  _r742f6b9889e19c = !1;
  _disposed = !1;
  extractTemplates() {
    ((this.var_2146 = this.setGrid.getGridItemByName("tile_template")),
      this.setGrid.removeGridItem(this.var_2146),
      (this._emptyTileTemplate = this.setGrid.getGridItemByName("empty_tile_template")),
      this.setGrid.removeGridItem(this._emptyTileTemplate),
      (this.getGridItemByName = this.trayGroupList.getListItemByName("tray_group_template")),
      (this.var_2967 = this.getGridItemByName
        .findChildByName("tray_group_grid")
        .getGridItemByName("tray_tile_template")));
  }
  _r9d742043233bed() {
    ((this._headerView = new HabbiconAlbumHeaderView(this.var_63, this.albumHeader)),
      (this.var_2189 = new HabbiconTabView(this._window, (e) => this._rfcc7965e5ac210(e))),
      (this._r8eb383bbdb002d = new HabbiconSetRailView(this.allSetsContainer, (e) => this._recda3fe1fab059(e))),
      (this.var_591 = new p8e(
        this.var_63,
        this.setPageContainer,
        this.var_2146,
        this._emptyTileTemplate,
        (e) => this._r138052b15e32c0(e),
      )),
      (this.var_1228 = new HabbiconCollectionTrayView(
        this.var_63,
        this.trayContainer,
        this.getGridItemByName,
        this.var_2967,
        (e) => this._r138052b15e32c0(e),
      )),
      (this.var_237 = new v8e(
        this._window,
        (e, r) => this._ra62b4f0e0916cc(e, r),
        (e) => this._r9640d5befb9b6b(e),
        () => this._r3025b2d20cc285(),
        (e) => this._r4a18229ecd37ac(e),
        this.var_63.configuration,
        this.var_63.localizationManager,
      )));
  }
  _r167abcd346cd3e() {
    (this.headerButtonClose.addEventListener(u.CLICK, this._r91d64548efff8e),
      this.var_63.addEventListener(Mt.const_805, this._rb170ab7fd99dde),
      this.var_63.addEventListener(Mt.const_1213, this._rb170ab7fd99dde),
      this.var_63.addEventListener(Mt.SHOP_DATA_UPDATED, this._rb170ab7fd99dde));
  }
  _r8fc960787f9c36() {
    (this._window != null &&
      this.headerButtonClose.removeEventListener(u.CLICK, this._r91d64548efff8e),
      this.var_63 != null &&
        (this.var_63.removeEventListener(Mt.const_805, this._rb170ab7fd99dde),
        this.var_63.removeEventListener(Mt.const_1213, this._rb170ab7fd99dde),
        this.var_63.removeEventListener(Mt.SHOP_DATA_UPDATED, this._rb170ab7fd99dde)));
  }
  _rb170ab7fd99dde = n((e) => {
    if (e.habbiconId > 0) {
      this._recfc49d379ab37(e.habbiconId, e.collectionId, this._r32a65459db26f9());
      return;
    }
    (e.type === Mt.const_1213 || e.type === Mt.SHOP_DATA_UPDATED) &&
      (this._r403be92f9ba73e == null || this._r403be92f9ba73e.sets.length === 0
        ? this._r760fea1c5de1f8(!0)
        : this._r02aa6e9b2d1b55(this._r32a65459db26f9()));
  }, "_rb170ab7fd99dde");
  _r8be14c9457f47a(e) {
    let r = e && this.var_148 != null ? this.var_148.collectionId : 0;
    ((this._r403be92f9ba73e = this.buildAlbumFromController()),
      (this.var_148 = r > 0 ? this._r403be92f9ba73e._r62d05334eaf926(r) : null),
      this.var_148 == null &&
        this._r403be92f9ba73e.sets.length > 0 &&
        (this.var_148 = this._r403be92f9ba73e.sets[0]));
  }
  _r760fea1c5de1f8(e) {
    (this._r5624f4373bf0d0(),
      this._r8be14c9457f47a(e),
      this._headerView.refresh(this._r403be92f9ba73e.stats, !1),
      this._r8eb383bbdb002d._rabc98b14bc5b8d(this._r403be92f9ba73e.sets),
      this._r8eb383bbdb002d._rb83f00d271fc39(this.var_148),
      this._red574a5151ada4());
  }
  _recfc49d379ab37(e, r, t) {
    let i = t && this._r765386d4825f46 === HabbiconTabMode.ALL_SETS,
      s =
        this.var_237.visible &&
        this.var_237.activeTile != null &&
        this.var_237.activeTile.item != null,
      o = s ? this.var_237.activeTile.item.habbiconId : 0,
      d = this.buildAlbumFromController(),
      c = d._rde7c2364fbadfc(e),
      f = r > 0 ? d._r62d05334eaf926(r) : null;
    if (
      (f == null && c != null && (f = d._r62d05334eaf926(c.collectionId)),
      this._r403be92f9ba73e == null || f == null)
    ) {
      this._r760fea1c5de1f8(!0);
      return;
    }
    let l = this._r403be92f9ba73e._r62d05334eaf926(f.collectionId);
    if (l == null) {
      this._r760fea1c5de1f8(!0);
      return;
    }
    ((this._r403be92f9ba73e.stats = d.stats),
      (this._r403be92f9ba73e._ra5a59dfa5aaf5f = d._ra5a59dfa5aaf5f),
      (this._r403be92f9ba73e._r5f31375af05a8e = d._r5f31375af05a8e),
      this._r7bf5134fc9408d(l, f));
    let b = l;
    if (
      (this._headerView.refresh(this._r403be92f9ba73e.stats, t),
      this._r8eb383bbdb002d._rb83f00d271fc39(this.var_148),
      b != null && this._r8eb383bbdb002d.refreshSet(b, i),
      this._r765386d4825f46 === HabbiconTabMode.ALL_SETS)
    ) {
      (this._r3ff3d3c88d3c73(b, c, i),
        s &&
          o === e &&
          this.var_237.activeTile != null &&
          this.var_237.activeTile.item != null &&
          this.var_237._r44bc414841bf86(this.var_237.activeTile));
      return;
    }
    (this._r5624f4373bf0d0(), this._red574a5151ada4());
  }
  _r02aa6e9b2d1b55(e) {
    let r = this.buildAlbumFromController(),
      t = e && this._r765386d4825f46 === HabbiconTabMode.ALL_SETS;
    if (r.sets.length !== 0) {
      (this._r5528593b1691c5(this._r403be92f9ba73e.stats, r.stats)
        ? ((this._r403be92f9ba73e.stats = r.stats),
          this._headerView.refresh(this._r403be92f9ba73e.stats, e))
        : (this._r403be92f9ba73e.stats = r.stats),
        (this._r403be92f9ba73e._ra5a59dfa5aaf5f = r._ra5a59dfa5aaf5f),
        (this._r403be92f9ba73e._r5f31375af05a8e = r._r5f31375af05a8e));
      for (let i of r.sets) {
        let s = this._r403be92f9ba73e._r62d05334eaf926(i.collectionId);
        if (s == null) continue;
        let o = s.completed !== i.completed || s.total !== i.total,
          d = this._rd0fd302e51f7ff(s, i);
        (this._r7bf5134fc9408d(s, i),
          o &&
            (this._r8eb383bbdb002d.refreshSet(s, t),
            this.var_148 != null &&
              this.var_148.collectionId === s.collectionId &&
              this.var_591.refreshProgress(this.var_148, t)),
          (o || d) &&
            this.var_148 != null &&
            this.var_148.collectionId === s.collectionId &&
            this.var_591.refreshReward(this.var_148, t));
      }
    }
  }
  _r5528593b1691c5(e, r) {
    return (
      e == null ||
      r == null ||
      e._rb89e3e34d91de4 !== r._rb89e3e34d91de4 ||
      e._rdc57e6c52845bc !== r._rdc57e6c52845bc ||
      e.collected !== r.collected ||
      e.total !== r.total
    );
  }
  _rd0fd302e51f7ff(e, r) {
    return (
      e == null ||
      r == null ||
      e.canBuy !== r.canBuy ||
      e.priceCredits !== r.priceCredits ||
      e.priceActivityPoints !== r.priceActivityPoints ||
      e.activityPointType !== r.activityPointType ||
      this._reb544cb1f1c3cc(e.rewardHabbicon, r.rewardHabbicon)
    );
  }
  _reb544cb1f1c3cc(e, r) {
    return e == null || r == null
      ? e !== r
      : e.habbiconId !== r.habbiconId ||
          e.state !== r.state ||
          e.owned !== r.owned ||
          e.favorite !== r.favorite ||
          e.claimable !== r.claimable;
  }
  _r7bf5134fc9408d(e, r) {
    ((e.id = r.id),
      (e.collectionId = r.collectionId),
      (e.name = r.name),
      (e.title = r.title),
      (e.description = r.description),
      (e.var_2362 = r.var_2362),
      (e.habbicons = r.habbicons),
      (e.rewardHabbicon = r.rewardHabbicon),
      (e.completed = r.completed),
      (e.total = r.total),
      (e.priceCredits = r.priceCredits),
      (e.priceActivityPoints = r.priceActivityPoints),
      (e.activityPointType = r.activityPointType),
      (e.canBuy = r.canBuy));
  }
  _r3ff3d3c88d3c73(e, r, t) {
    this.var_148 == null ||
      e == null ||
      this.var_148.collectionId !== e.collectionId ||
      (this.var_591.refreshProgress(this.var_148, t),
      this.var_591.refreshReward(this.var_148, t),
      r != null && !r.isReward && this.var_591.refreshEntry(r));
  }
  _red574a5151ada4() {
    this._r403be92f9ba73e != null &&
      (this._r765386d4825f46 === HabbiconTabMode.ALL_SETS
        ? ((this.allSetsContainer.visible = !0),
          (this.trayContainer.visible = !1),
          this.var_591.refresh(this.var_148, !1))
        : this._r765386d4825f46 === HabbiconTabMode.const_101
          ? ((this.allSetsContainer.visible = !1),
            (this.trayContainer.visible = !0),
            this.var_1228.refresh(this._r765386d4825f46, this._r403be92f9ba73e._ra5a59dfa5aaf5f))
          : this._r765386d4825f46 === HabbiconTabMode.const_467 &&
            ((this.allSetsContainer.visible = !1),
            (this.trayContainer.visible = !0),
            this.var_1228.refresh(this._r765386d4825f46, this._r403be92f9ba73e._r5f31375af05a8e)));
  }
  _r89b64c42f3ad70(e) {
    ((this.var_148 = e),
      this._r5624f4373bf0d0(),
      this._r8eb383bbdb002d._rb83f00d271fc39(this.var_148),
      this._r765386d4825f46 === HabbiconTabMode.ALL_SETS &&
        this.var_591.refresh(this.var_148, !1));
  }
  _rfcc7965e5ac210(e) {
    ((this._r765386d4825f46 = e),
      this._r5624f4373bf0d0(),
      (this.allSetsContainer.visible = e === HabbiconTabMode.ALL_SETS),
      (this.trayContainer.visible = e !== HabbiconTabMode.ALL_SETS),
      e === HabbiconTabMode.const_101
        ? this.var_1228.refresh(e, this._r403be92f9ba73e._ra5a59dfa5aaf5f)
        : e === HabbiconTabMode.const_467
          ? this.var_1228.refresh(e, this._r403be92f9ba73e._r5f31375af05a8e)
          : this.var_591.refresh(this.var_148, !1));
  }
  _recda3fe1fab059(e) {
    this._r89b64c42f3ad70(e);
  }
  _r138052b15e32c0(e) {
    e == null ||
      e.item == null ||
      (this.var_480 != null &&
        this.var_480 !== e &&
        this.var_480.setActive(!1),
      (this.var_480 = e),
      this.var_480.setActive(!0),
      !e.item.isReward &&
        !e.item.owned &&
        !e.item.claimable &&
        this.var_63._r9b697375e236ac(e.item.habbiconId),
      this.var_237._r44bc414841bf86(e));
  }
  _ra62b4f0e0916cc(e, r) {
    if (!(e == null || e.item == null))
      switch (r) {
        case HabbiconPopupMode.CLAIM:
          e.item.claimable && this.var_63._r3834000326cc68(e.item.habbiconId);
          break;
        case HabbiconPopupMode.ADD_FAVORITE:
          e.item.owned && this.var_63._r3a275f7c15d08a(e.item.habbiconId);
          break;
        case HabbiconPopupMode.REMOVE_FAVORITE:
          e.item.favorite && this.var_63._rf55a4b18db56fb(e.item.habbiconId);
          break;
      }
  }
  _r9640d5befb9b6b(e) {
    e == null ||
      e.item == null ||
      (e.item.purchasable &&
        this._r5bea29e10215df(e.item) &&
        (this.var_63._r0b05c7dd52d654(e.item), this._r5624f4373bf0d0()));
  }
  _r3025b2d20cc285() {
    this._r9ed47fe25ad53a();
  }
  _r5624f4373bf0d0() {
    (this.var_237?.hide(!1), this._r9ed47fe25ad53a());
  }
  _r9ed47fe25ad53a() {
    this.var_480 != null &&
      (this.var_480.setActive(!1), (this.var_480 = null));
  }
  buildAlbumFromController() {
    let e = new HabbiconAlbumModel(),
      r = this.var_63.HabbiconAlbumModel;
    if (r == null || r.length === 0) return e;
    for (let t of r) {
      if (t == null) continue;
      let i = new HabbiconSetModel();
      if (
        ((i.collectionId = t.collectionId),
        (i.id = "collection_" + t.collectionId),
        (i.name = t.name),
        (i.title = this.resolveCollectionTitle(t)),
        (i.description = this.resolveCollectionDescription(t)),
        (i.priceCredits = t.priceCredits),
        (i.priceActivityPoints = t.priceActivityPoints),
        (i.activityPointType = t.activityPointType),
        (i.var_2362 = Dr.getCollectionIconBitmap(t.collectionId)),
        t.habbicons != null)
      )
        for (let s of t.habbicons) {
          let o = this.createEntryFromData(s, i);
          o != null && i.habbicons.push(o);
        }
      ((i.rewardHabbicon = this.createRewardEntry(t, i)),
        (i.canBuy = (t.priceCredits > 0 || t.priceActivityPoints > 0) && !t.completed),
        this._r2fbcc67457f3e2(i),
        e.sets.push(i));
    }
    return (
      this._r026ca12e0f845f(e),
      (e._ra5a59dfa5aaf5f = this._r65be38d2c0178c(e, !1)),
      (e._r5f31375af05a8e = this.createFavouriteTrayGroups(e)),
      e
    );
  }
  createEntryFromData(e, r) {
    if (e == null) return null;
    let t = new HabbiconEntryModel();
    return (
      (t.id = String(e.habbiconId)),
      (t.habbiconId = e.habbiconId),
      (t.collectionId = e.collectionId),
      (t.collectionName = r.name),
      (t.collectionTitle = r.title),
      (t.name = this.resolveHabbiconDisplayName(e.habbiconId, e.name)),
      (t.description = "Server-driven habbicon state and price."),
      (t._r5d9153ac05db39 = r.habbicons.length),
      (t.state = e.state),
      (t.favorite = t.state === HabbiconState.const_893),
      (t.owned = t.favorite || t.state === HabbiconState.const_101),
      (t.claimable = t.state === HabbiconState.CLAIMABLE),
      (t.isReward = !1),
      (t.priceCredits = e.priceCredits),
      (t.priceActivityPoints = e.priceActivityPoints),
      (t.activityPointType = e.activityPointType),
      (t.purchasable = t.state === HabbiconState.const_1008 && this._r5bea29e10215df(t)),
      (t.color = this.seededColor((t.habbiconId * 37 + t.collectionId * 11) | 0)),
      t
    );
  }
  createRewardEntry(e, r) {
    if (e.var_583 <= 0) return null;
    let t = e.var_2758,
      i = new HabbiconEntryModel();
    return (
      (i.id = "reward_" + e.var_583),
      (i.habbiconId = e.var_583),
      (i.collectionId = e.collectionId),
      (i.collectionName = r.name),
      (i.collectionTitle = r.title),
      (i.name = this.resolveHabbiconDisplayName(e.var_583)),
      (i.description = "Collection reward habbicon."),
      (i._r5d9153ac05db39 = r.habbicons.length),
      (i.state = t),
      (i.favorite = t === HabbiconState.const_893),
      (i.owned = i.favorite || t === HabbiconState.const_101),
      (i.claimable = t === HabbiconState.CLAIMABLE),
      (i.purchasable = !1),
      (i.isReward = !0),
      (i.priceCredits = 0),
      (i.priceActivityPoints = 0),
      (i.activityPointType = e.activityPointType),
      (i.color = this.seededColor((i.habbiconId * 37 + i.collectionId * 11) | 0)),
      i
    );
  }
  _r65be38d2c0178c(e, r) {
    let t = [];
    for (let i of e.sets) {
      let s = [];
      for (let o of i.habbicons) (r ? o.favorite : o.owned) && s.push(o);
      (i.rewardHabbicon != null &&
        (r ? i.rewardHabbicon.favorite : i.rewardHabbicon.owned) &&
        s.push(i.rewardHabbicon),
        s.length > 0 && t.push(this._r0e900097d4f242(i, s)));
    }
    return t;
  }
  createFavouriteTrayGroups(e) {
    let r = [],
      t = [];
    for (let i of e.sets) {
      for (let s of i.habbicons) s.favorite && t.push(s);
      i.rewardHabbicon != null && i.rewardHabbicon.favorite && t.push(i.rewardHabbicon);
    }
    if (t.length > 0) {
      let i = new HabbiconSetModel();
      ((i.id = "favourited"),
        (i.name = "favourited"),
        (i.title = "${habbicons.favourites.title}"),
        (i.habbicons = t),
        r.push(i));
    }
    return r;
  }
  _r0e900097d4f242(e, r) {
    let t = new HabbiconSetModel();
    return (
      (t.id = e.id),
      (t.collectionId = e.collectionId),
      (t.name = e.name),
      (t.title = e.title),
      (t.description = e.description),
      (t.var_2362 = e.var_2362),
      (t.habbicons = r),
      (t.rewardHabbicon = null),
      (t.completed = e.completed),
      (t.total = e.total),
      (t.priceCredits = e.priceCredits),
      (t.priceActivityPoints = e.priceActivityPoints),
      (t.activityPointType = e.activityPointType),
      (t.canBuy = e.canBuy),
      t
    );
  }
  _r2fbcc67457f3e2(e) {
    ((e.completed = 0), (e.total = 0));
    for (let r of e.habbicons) r.isReward || (e.total++, (r.owned || r.claimable) && e.completed++);
  }
  _r026ca12e0f845f(e) {
    e.stats = new HabbiconAlbumStats();
    for (let r of e.sets) {
      ((e.stats.total += r.total),
        (e.stats.collected += r.completed),
        r.complete && e.stats._rdc57e6c52845bc++);
      for (let t of r.habbicons) t.owned && e.stats._rb89e3e34d91de4++;
      r.rewardHabbicon != null &&
        (e.stats.total++, r.rewardHabbicon.owned && (e.stats.collected++, e.stats._rb89e3e34d91de4++));
    }
  }
  resolveCollectionTitle(e) {
    return e == null || e.name == null || e.name.length === 0
      ? "Habbicon Collection"
      : this.localize("habbicon_collection_" + e.name.toLowerCase() + "_name", e.name);
  }
  resolveCollectionDescription(e) {
    return e == null || e.name == null || e.name.length === 0
      ? ""
      : this.localize(
          "habbicon_collection_" + e.name.toLowerCase() + "_description",
          e.name + " set description",
        );
  }
  resolveHabbiconDisplayName(e, r = null) {
    let t = this.resolveHabbiconKey(e, r);
    return t == null || t.length === 0
      ? "Habbicon"
      : this.localize(
          "habbicon_" + t.toLowerCase() + "_name",
          r != null && r.length > 0 ? r : "Habbicon",
        );
  }
  resolveHabbiconKey(e, r = null) {
    let t = Dr.getHabbiconNameKey(e);
    return t != null && t.length > 0 ? t : (r ?? "");
  }
  localize(e, r) {
    let t = this.var_63 != null ? this.var_63.localizationManager : null,
      i = t != null ? t.getLocalization(e, r) : r;
    return i != null && i.length > 0 ? i : r;
  }
  formatPrice(e, r) {
    return e > 0 && r > 0 ? e + "c + " + r : e > 0 ? e.toString() : Math.max(0, r).toString();
  }
  _r5bea29e10215df(e) {
    return e != null && (e.priceCredits > 0 || e.priceActivityPoints > 0);
  }
  getPriceIconStyle(e, r, t) {
    return et.getIconStyleFor(r > 0 ? t : et.CREDITS, this.var_63.configuration, !1);
  }
  seededColor(e) {
    switch (e % 6) {
      case 0:
        return 16371247;
      case 1:
        return 15964719;
      case 2:
        return 15695663;
      case 3:
        return 9358143;
      case 4:
        return 5095656;
      default:
        return 12813557;
    }
  }
  _r91d64548efff8e = n((e) => {
    this.hide();
  }, "_r91d64548efff8e");
  hide() {
    (this.var_237 != null &&
      (this.var_237.hide(), this.var_237._re1efbc43736f2a()),
      this._windowManager != null &&
        this._window != null &&
        this._window.parent != null &&
        this._windowManager.getDesktop(a.DESKTOP_WINDOW_LAYER)?.removeChild(this._window));
  }
  showWindow() {
    let e = this._windowManager != null ? this._windowManager.getDesktop(a.DESKTOP_WINDOW_LAYER) : null;
    (this._windowManager != null &&
      this._window != null &&
      this._window.parent == null &&
      e != null &&
      e.addChild(this._window),
      this.var_237 != null && e != null && this.var_237._r78cc737ce85fa3(e),
      this._r742f6b9889e19c ||
        (this.var_2189.select(HabbiconTabMode.ALL_SETS),
        this._rfcc7965e5ac210(HabbiconTabMode.ALL_SETS),
        (this._r742f6b9889e19c = !0)),
      this._window != null && this._window.activate());
  }
  update(e) {
    this._r32a65459db26f9() &&
      (this._headerView.update(e),
      this._r765386d4825f46 === HabbiconTabMode.ALL_SETS &&
        (this._r8eb383bbdb002d.update(e), this.var_591.update(e)));
  }
  _r32a65459db26f9() {
    return this._window != null && this._window.parent != null;
  }
  _r4a18229ecd37ac(e) {
    return (
      this.var_480 != null &&
      this.var_480.window != null &&
      this.var_480.window.visible &&
      this._rc05fdfdcef7333(this.var_480.window, e)
    );
  }
  _rc05fdfdcef7333(e, r) {
    if (!e || !r) return !1;
    let t = new D();
    return (e.getGlobalRectangle(t), t.containsPoint(r));
  }
  dispose() {
    this._disposed ||
      (this.hide(),
      this._r8fc960787f9c36(),
      this.var_63.removeUpdateReceiver(this),
      this._headerView != null && (this._headerView.dispose(), (this._headerView = null)),
      this.var_2189 != null && (this.var_2189.dispose(), (this.var_2189 = null)),
      this._r8eb383bbdb002d != null && (this._r8eb383bbdb002d.dispose(), (this._r8eb383bbdb002d = null)),
      this.var_591 != null && (this.var_591.dispose(), (this.var_591 = null)),
      this.var_1228 != null && (this.var_1228.dispose(), (this.var_1228 = null)),
      this.var_237 != null && (this.var_237.dispose(), (this.var_237 = null)),
      this.disposeTemplate(this.var_2146),
      this.disposeTemplate(this._emptyTileTemplate),
      this.disposeTemplate(this.var_2967),
      this.disposeTemplate(this.getGridItemByName),
      (this.var_2146 = null),
      (this._emptyTileTemplate = null),
      (this.var_2967 = null),
      (this.getGridItemByName = null),
      this._window != null && (this._window.dispose(), (this._window = null)),
      (this._r403be92f9ba73e = null),
      (this.var_148 = null),
      (this.var_480 = null),
      (this.var_63 = null),
      (this._windowManager = null),
      (this._disposed = !0));
  }
  disposeTemplate(e) {
    e != null && !e.disposed && e.dispose();
  }
  get disposed() {
    return this._disposed;
  }
  get headerButtonClose() {
    return this._window.findChildByName("header_button_close");
  }
  get albumHeader() {
    return this._window.findChildByName("album_header");
  }
  get allSetsContainer() {
    return this._window.findChildByName("all_sets_container");
  }
  get setPageContainer() {
    return this._window.findChildByName("set_page_container");
  }
  get setGrid() {
    return this._window.findChildByName("set_grid");
  }
  get trayContainer() {
    return this._window.findChildByName("tray_container");
  }
  get trayGroupList() {
    return this._window.findChildByName("tray_group_list");
  }
}
