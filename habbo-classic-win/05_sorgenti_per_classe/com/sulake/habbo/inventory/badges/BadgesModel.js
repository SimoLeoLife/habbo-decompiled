// Extracted from HabboAirLauncher.deobf.js, line 235133.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/inventory/badges/BadgesModel.as
// Obfuscated name: _ie6a84a3ab36ff9

class a {
  constructor(e, r, t, i) {
    this.var_63 = e;
    this._windowManager = r;
    this._communication = t;
    this._assets = i;
    ((this._view = new F7e(this, this._windowManager, this._assets)), this.initBadgeWindowAsset());
  }
  static {
    n(this, "BadgesModel");
  }
  static BADGES_ALL = -1;
  static BADGES_INACTIVE = 0;
  static BADGES_ACTIVE = 1;
  static MAX_ACTIVE_BADGE_COUNT = 5;
  _view;
  _badges = [];
  _r90413a0d61b111 = [];
  var_516 = new B();
  _rd4a0c3542ff901 = [];
  _rbc46886ef95b08 = !1;
  _disposed = !1;
  get disposed() {
    return this._disposed;
  }
  get controller() {
    return this.var_63;
  }
  dispose() {
    if (!this._disposed) {
      (h5.var_2689?.dispose(),
        (h5.var_2689 = null),
        (this._disposed = !0),
        (this.var_63 = null),
        (this._windowManager = null));
      for (let e of this._badges) e.dispose();
      ((this._badges = []),
        (this._r90413a0d61b111 = []),
        this.var_516?.dispose(),
        (this.var_516 = null),
        this._view?.dispose(),
        (this._view = null),
        (this._assets = null),
        (this._communication = null));
    }
  }
  requestInitialization() {
    this._communication?.connection.send(new class_2748());
  }
  _rd6597db707bc29() {
    return a.MAX_ACTIVE_BADGE_COUNT;
  }
  updateView() {
    this._view?.updateAll(null);
  }
  updateActionView() {
    this._view?.updateActionView();
  }
  _rfd292fa710d8a9(e) {
    this._r5db5f282c383f5(e);
  }
  _r5db5f282c383f5(e) {
    (this._r6bb29b496aff75(),
      (this._badges = []),
      (this._r90413a0d61b111 = []),
      (this.var_516 = new B()));
    for (let r of e.getKeys()) {
      let t = e.getValue(r) ?? null;
      if (t == null) continue;
      t.badgeId > 0 && this.var_516.add(r, t.badgeId);
      let i = this.var_63?._r349ca5f2f69601.isUnseen($t.BADGE, t.badgeId) ?? !1,
        s = this.controller.localization?.getBadgeName(r) ?? r,
        o = this.controller.localization?.getBadgeDesc(r) ?? "",
        d = new h5(this, r, s, o, i, t.ownerCount, t.badgeRarityId);
      i ? this._badges.unshift(d) : this._badges.push(d);
    }
    this.unseenItemTracker();
  }
  _r6a67c3dcb5d26b(e, r) {
    e != null &&
      this.updateBadge(e._rc9fc89e7eb27a7, r, e.badgeId, e.ownerCount, e.badgeRarityId);
  }
  updateBadge(e, r, t = 0, i = 0, s = vt.COMMON) {
    t > 0 && !this.var_516?.hasKey(e) && this.var_516?.add(e, t);
    let o = this.updateMetadata(e);
    if (o != null) {
      (o.isInUse(i, s),
        o._r780270c6ffe49b !== r && (r ? this.stopWearingBadge(o) : this._r85c8cc34e60115(o)),
        this.unseenItemTracker());
      return;
    }
    let d = this.var_63?._r349ca5f2f69601.isUnseen($t.BADGE, t) ?? !1,
      c = this.controller.localization?.getBadgeName(e) ?? e,
      f = this.controller.localization?.getBadgeDesc(e) ?? "",
      l = new h5(this, e, c, f, d, i, s);
    (d ? this._badges.unshift(l) : this._badges.push(l),
      r && this.stopWearingBadge(l),
      this.unseenItemTracker());
  }
  _rdbdea64f7f75db(e) {
    let r = this._badges.findIndex((t) => t.badgeId === e);
    if (r >= 0) {
      let t = this._badges[r];
      (this._badges.splice(r, 1),
        this._r85c8cc34e60115(t),
        this.unseenItemTracker(),
        this.updateView());
    }
  }
  _r0a19c06f3dca2c(e) {
    let r = this.updateMetadata(e);
    r != null &&
      (r._r780270c6ffe49b ? this._r85c8cc34e60115(r) : this.stopWearingBadge(r), this._rd767c96920145a());
  }
  _rd767c96920145a() {
    let e = new wO();
    for (let r of this.getBadges(a.BADGES_ACTIVE)) e._rdc4e92828720ba(r.badgeId);
    this._communication?.connection.send(e);
  }
  setBadgeSelected(e) {
    for (let r of this._badges) r.isSelected = r.badgeId === e;
    this.updateActionView();
  }
  _r28332e477e8c67() {
    let e = this._r070a63d30cc5cb();
    if (e != null) return;
    let r = this.getBadges(a.BADGES_INACTIVE);
    if (r.length > 0) {
      ((e = r[0]), this.setBadgeSelected(e.badgeId));
      return;
    }
    let t = this.getBadges(a.BADGES_ACTIVE);
    t.length > 0 && ((e = t[0]), this.setBadgeSelected(e.badgeId));
  }
  _r070a63d30cc5cb(e = a.BADGES_ALL) {
    return this.getBadges(e).find((r) => r.isSelected) ?? null;
  }
  getBadges(e = a.BADGES_ALL) {
    switch (e) {
      case a.BADGES_ALL:
        return this._badges;
      case a.BADGES_INACTIVE:
        return this._badges.filter((r) => !r._r780270c6ffe49b);
      case a.BADGES_ACTIVE:
        return this._r90413a0d61b111;
      default:
        return (
          console.warn("Unexpected filter. Returning an empty array to maintain backward compatibility"),
          []
        );
    }
  }
  _r9eb78d92c8e098(e) {
    return this._r9695b93d61831d(e, a.BADGES_ACTIVE);
  }
  _rd443f1c95da481(e) {
    return this._r9695b93d61831d(e, a.BADGES_INACTIVE);
  }
  _r9695b93d61831d(e, r = a.BADGES_ALL) {
    let t = this.getBadges(r);
    return e < 0 || e >= t.length ? null : (t[e] ?? null);
  }
  getWindowContainer() {
    return this._view?.getWindowContainer() ?? null;
  }
  _r08d57fe7a51c0c() {
    return this._rd4a0c3542ff901.concat();
  }
  _r2ee6103fd26564() {
    return this._rbc46886ef95b08;
  }
  isUncommonBadgeRarityEnabled() {
    return this.var_63?.getBoolean("badge_rarity.uncommon") ?? !1;
  }
  _rd6235c3b063492(e) {
    return vt.isStandaloneTier(e, this.isUncommonBadgeRarityEnabled());
  }
  closingInventoryView() {
    this._view?.isVisible && this._r89f1d7f95c6807();
  }
  categorySwitch(e) {
    e === class_2106.BADGES &&
      this.var_63?.isVisible &&
      this.var_63.events.dispatchEvent?.(new M(HabboInventoryTrackingEvent.HABBO_INVENTORY_TRACKING_EVENT_BADGES));
  }
  subCategorySwitch(e) {}
  _r89f1d7f95c6807() {
    if (this.var_63?._r06de92d20c9843) {
      this.var_63._r349ca5f2f69601._r76597cac57aa73($t.BADGE);
      for (let e of this._badges) e.isUnseen = !1;
      (this.updateView(), this.var_63._rf085caf479da12());
    }
  }
  selectItemById(e) {
    this.setBadgeSelected(e);
  }
  _r10c361fe7c03d7() {
    for (let e of this._badges) e.isSelected = !1;
  }
  initBadgeWindowAsset() {
    let r = this._assets?.getAssetByName("inventory_thumb_xml");
    h5.var_2689 == null &&
      r?.content != null &&
      (h5.var_2689 = this._windowManager?.buildFromXML(r.content));
  }
  stopWearingBadge(e) {
    (this._r90413a0d61b111.push(e), (e._r780270c6ffe49b = !0));
  }
  _r85c8cc34e60115(e) {
    let r = this._r90413a0d61b111.indexOf(e);
    r >= 0 && (this._r90413a0d61b111.splice(r, 1), (e._r780270c6ffe49b = !1));
  }
  _r6bb29b496aff75() {
    (this.var_516?.dispose(), (this.var_516 = null));
    for (let e of this._badges) e.dispose();
    ((this._badges = []),
      (this._r90413a0d61b111 = []),
      (this._rd4a0c3542ff901 = []),
      (this._rbc46886ef95b08 = !1));
  }
  updateMetadata(e) {
    return this._badges.find((r) => r.badgeId === e) ?? null;
  }
  unseenItemTracker() {
    ((this._rd4a0c3542ff901 = []), (this._rbc46886ef95b08 = !1));
    let e = [];
    for (let r of this._badges)
      if (r != null) {
        if (!this._rd6235c3b063492(r.badgeRarityId)) {
          this._rbc46886ef95b08 = !0;
          continue;
        }
        e[r.badgeRarityId] ||
          ((e[r.badgeRarityId] = !0), this._rd4a0c3542ff901.push(r.badgeRarityId));
      }
    this._rd4a0c3542ff901.sort((r, t) => r - t);
  }
}
