// Estratto da HabboAirLauncher.deobf.js, riga 340998.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/toolbar/abstractsubmenu/AbstractSubMenuController.as
// Nome offuscato: _id457b02a15b536

class {
  static {
    n(this, "AbstractSubMenuController");
  }
  _toolbar;
  var_114;
  _window;
  _r4019d2e39fcb84 = new B();
  var_4098;
  _disposed = !1;
  _r2732ad14df6852 = n((e) => this._rdd12af87bae3e7(e), "_r2732ad14df6852");
  constructor(e, r, t, i) {
    ((this._toolbar = e),
      (this.var_114 = r),
      (this.var_4098 = i),
      this._toolbar.events.addEventListener?.(HabboToolbarEvent.TOOLBAR_CLICK, this._r2732ad14df6852));
    let s = this._toolbar.assets.getAssetByName(t);
    if (
      ((this._window = this._toolbar.windowManager.buildFromXML(s?.content, 2)),
      this._window == null)
    )
      throw new Error(`Failed to construct toolbar submenu window "${t}".`);
    ((this._window.visible = !1), (this._window.procedure = this.windowProcedure));
  }
  get disposed() {
    return this._disposed;
  }
  get toolbar() {
    if (this._toolbar == null) throw new Error("Toolbar is not available.");
    return this._toolbar;
  }
  get _rf1ad795d6ea58d() {
    if (this.var_114 == null) throw new Error("Toolbar view is not available.");
    return this.var_114;
  }
  get window() {
    if (this._window == null) throw new Error("Submenu window is not available.");
    return this._window;
  }
  dispose() {
    this._disposed ||
      (this._toolbar?.events.removeEventListener?.(HabboToolbarEvent.TOOLBAR_CLICK, this._r2732ad14df6852),
      (this.var_114 = null),
      (this._toolbar = null),
      this._window?.dispose(),
      (this._window = null),
      this._r4019d2e39fcb84.dispose(),
      (this._disposed = !0));
  }
  toggleVisibility() {
    ((this.window.visible = !this.window.visible), this.reposition());
  }
  reposition() {
    ((this.window.x = 3), (this.window.y = this._rf1ad795d6ea58d.window.top - this.window.height));
  }
  _r4c671deebbca17(e) {
    let r = this.window.findChildByName(e);
    if (r == null) return null;
    let t = r.rectangle;
    return (
      (t.x += this.window.x + r.width / 2),
      (t.y += this.window.y + r.height / 2),
      (this.window.visible = !0),
      t
    );
  }
  _raa4dc20ed68e9a(e) {
    let r = this.window.findChildByName(e);
    return (r != null && (this.window.visible = !0), r);
  }
  _r901b64e71c4d8a(e) {
    let r = this._r4019d2e39fcb84.getValue(e) ?? null;
    if (r != null) return r;
    r = this.toolbar.windowManager.createUnseenItemCounter();
    let t = this.window.findChildByName(e);
    return (
      r != null &&
        t != null &&
        (t.addChild(r), (r.x = t.width - r.width - 5), (r.y = 5), this._r4019d2e39fcb84.add(e, r)),
      r
    );
  }
  setUnseenItemCount(e, r) {
    let t = this._r901b64e71c4d8a(e);
    if (t == null) return;
    let i = t.findChildByName("count");
    r < 0
      ? ((t.visible = !0), i != null && (i.caption = " "))
      : r > 0
        ? ((t.visible = !0), i != null && (i.caption = `${r}`))
        : (t.visible = !1);
  }
  onSubMenuItemClick(e) {}
  _rdd12af87bae3e7 = n((e) => {
    e._re9c693c8b69b04 === this.var_4098
      ? this.toggleVisibility()
      : this._window != null && (this._window.visible = !1);
  }, "_rdd12af87bae3e7");
  windowProcedure = n((e, r) => {
    if (!r) return;
    let t = r,
      i = t.findChildByName(`${r.name}_icon_color`),
      s = t.findChildByName(`${r.name}_icon_grey`),
      o = t.findChildByName("field_text");
    switch (e.type) {
      case u.OVER:
        i != null && s != null && ((i.visible = !0), (s.visible = !1), o != null && (o.textColor = 2215924));
        break;
      case u.OUT:
        i != null && s != null && ((i.visible = !1), (s.visible = !0), o != null && (o.textColor = 16777215));
        break;
      case u.CLICK:
        ((this.window.visible = !1), this.onSubMenuItemClick(r.name));
        break;
    }
  }, "windowProcedure");
}
