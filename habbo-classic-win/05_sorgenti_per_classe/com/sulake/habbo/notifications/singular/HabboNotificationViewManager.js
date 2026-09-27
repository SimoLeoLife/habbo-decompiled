// Estratto da HabboAirLauncher.deobf.js, riga 263226.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/notifications/singular/HabboNotificationViewManager.as
// Nome offuscato: _ib45a26d490a227

class a {
  constructor(e, r, t, i, s, o) {
    this._notifications = e;
    this.var_997 = r;
    this._windowManager = t;
    this._toolbar = i;
    this._styleConfig = s;
    this._viewConfig = o;
    (this._toolbar?.events?.addEventListener?.(ExtensionViewEvent.const_366, this._reb16f4855072cc),
      this._notifications.registerUpdateReceiver(this, 2));
  }
  static {
    n(this, "HabboNotificationViewManager");
  }
  static SPACING = 4;
  _r1731f6e00e666d = [];
  _disposed = !1;
  get disposed() {
    return this._disposed;
  }
  _r4d6d9266d10c8f(e) {
    for (let r of this._r1731f6e00e666d) r._r4d6d9266d10c8f(e);
  }
  dispose() {
    for (; this._r1731f6e00e666d.length > 0;) this._r1731f6e00e666d.pop()?.dispose();
    ((this.var_997 = null),
      (this._windowManager = null),
      this._styleConfig != null && (this._styleConfig.dispose(), (this._styleConfig = null)),
      this._viewConfig != null && (this._viewConfig.dispose(), (this._viewConfig = null)),
      this._toolbar != null &&
        (this._toolbar.events?.removeEventListener?.(ExtensionViewEvent.const_366, this._reb16f4855072cc),
        (this._toolbar = null)),
      this._notifications != null &&
        (this._notifications.removeUpdateReceiver(this), (this._notifications = null)),
      (this._disposed = !0));
  }
  showItem(e) {
    if (!this.isSpaceAvailable()) return !1;
    if (this.countVisibleItems() >= this.getDuplicateFadeThreshold()) {
      let o = this.findItemToReplace(e);
      o?.remove();
    }
    let r = e.style._r9030858cf2a66a ?? "layout_notification_xml",
      t = e.style.customLayout,
      i = t == null ? this._viewConfig.getValue("view") : this._viewConfig.getValue(t),
      s = new AQ(
        this._notifications.localization,
        this.var_997.getAssetByName(r),
        this._windowManager,
        this._styleConfig,
        i ?? new B(),
        e,
      );
    return (
      s.reposition(this._r8e5df6aa9ba944()),
      this._r1731f6e00e666d.push(s),
      this._r1731f6e00e666d.sort((o, d) => o._r8c35bc739bb80e - d._r8c35bc739bb80e),
      !0
    );
  }
  isSpaceAvailable() {
    return this._r8e5df6aa9ba944() + AQ.MAX_HEIGHT < (this._windowManager.getDesktop(0)?.height ?? 0);
  }
  _r3fbac2fae90974(e) {
    if (e == null) return !1;
    for (let r of this._r1731f6e00e666d) if (r.notificationId === e && !r._r0b35a9994bac96) return !0;
    return !1;
  }
  _r9424f972e18454(e) {
    if (e != null) for (let r of this._r1731f6e00e666d) r.notificationId === e && r.remove();
  }
  update(e) {
    this._r07dae8c446790f();
    for (let r of this._r1731f6e00e666d) r.update(e);
    for (let r = 0; r < this._r1731f6e00e666d.length; r++) {
      let t = this._r1731f6e00e666d[r];
      t?.ready && (t.dispose(), this._r1731f6e00e666d.splice(r, 1), r--);
    }
  }
  countVisibleItems() {
    let e = 0;
    for (let r of this._r1731f6e00e666d) r._r0b35a9994bac96 || e++;
    return e;
  }
  getDuplicateFadeThreshold() {
    let e = this.getVisibleCapacity();
    return e <= 0 ? Number.MAX_SAFE_INTEGER : Math.max(4, e * 0.65);
  }
  getVisibleCapacity() {
    if (this._windowManager == null || this._toolbar?.extensionView == null) return 0;
    let e = this._toolbar.extensionView.screenHeight + a.SPACING,
      t = (this._windowManager.getDesktop(0)?.height ?? 0) - e;
    if (t <= 0) return 0;
    let i = this._viewConfig.getValue("view"),
      s = Number(i?.getValue("height") ?? 0);
    return (
      s <= 0 && (s = AQ.MAX_HEIGHT),
      Math.max(0, Math.trunc((t + a.SPACING) / (s + a.SPACING)))
    );
  }
  findItemToReplace(e) {
    let r = new Set();
    this.findAllItemsToReplace(e, this._r1731f6e00e666d.length - 1, r);
    for (let t of this._r1731f6e00e666d) if (r.has(t)) return t;
    return null;
  }
  findAllItemsToReplace(e, r, t) {
    if (e != null) {
      for (let i = 0; i <= r; i++) {
        let s = this._r1731f6e00e666d[i];
        if (
          s != null &&
          !s._r0b35a9994bac96 &&
          s.styleName === e.style.styleName &&
          s.content === e.content &&
          !s.staysVisible
        ) {
          t.add(s);
          break;
        }
      }
      if (r >= 2) {
        this.findAllItemsToReplace(this._r1731f6e00e666d[r]?.item ?? null, r - 1, t);
        return;
      }
      if (t.size === 0)
        for (let i of this._r1731f6e00e666d) !i._r0b35a9994bac96 && !i.staysVisible && t.add(i);
    }
  }
  _r07dae8c446790f() {
    if (this._toolbar?.extensionView == null) return;
    let e = this._toolbar.extensionView.screenHeight + a.SPACING;
    for (let r of this._r1731f6e00e666d)
      r._r0b35a9994bac96 || (r._r8ac9eee45e0be4(e), (e += r.height + a.SPACING));
  }
  _r8e5df6aa9ba944() {
    if (this._toolbar?.extensionView == null) return a.SPACING;
    let e = this._toolbar.extensionView.screenHeight + a.SPACING;
    if (this._r1731f6e00e666d.length === 0) return e;
    let r = e;
    for (let t of this._r1731f6e00e666d) {
      if (r + t.height < t._r8c35bc739bb80e) return r;
      r = t._r8c35bc739bb80e + t.height + a.SPACING;
    }
    return r;
  }
  _reb16f4855072cc = n((e) => {
    if (this._toolbar?.extensionView == null) return;
    let r = this._toolbar.extensionView.screenHeight + a.SPACING;
    for (let t of this._r1731f6e00e666d)
      (t.reposition(r), (r = t._r8c35bc739bb80e + t.height + a.SPACING));
  }, "_reb16f4855072cc");
}
