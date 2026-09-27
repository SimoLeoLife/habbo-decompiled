// Extracted from HabboAirLauncher.deobf.js, line 327454.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i553898c59253ac

class {
  constructor(e) {
    this._windowManager = e;
  }
  static {
    n(this, "UnkClass_553898");
  }
  _window = null;
  _disposed = !1;
  _roomEngine = null;
  _avatarRenderManager = null;
  set _rf0eb5f07c94cfb(e) {
    this._avatarRenderManager = e;
  }
  set roomEngine(e) {
    this._roomEngine = e;
  }
  get caption() {
    return "Effect Selector";
  }
  set visible(e) {
    (this._window == null && e && this.createWindow(),
      this._window != null &&
        ((this._window.visible = e),
        e
          ? this._window.activate()
          : (this._window.dispose(), (this._window = null))));
  }
  get visible() {
    return this._window != null && this._window.visible;
  }
  dispose() {
    this._disposed ||
      (this._window?.dispose(),
      (this._window = null),
      (this._windowManager = null),
      (this._roomEngine = null),
      (this._avatarRenderManager = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  createWindow() {
    let e = this._windowManager?.assets.getAssetByName("effect_selector");
    if (
      ((this._window = this._windowManager?.buildFromXML(e?.content, 2)),
      this._window == null)
    )
      return;
    this._window
      .findChildByName("header_button_close")
      ?.addEventListener(u.CLICK, this.onClose);
    let r = this._window.findChildByName("effect_list");
    if (r == null || this._avatarRenderManager == null) return;
    let t = this._avatarRenderManager._re2ed9334dbcf82();
    if (t == null) return;
    let i = r.getListItemAt(0);
    if (i == null) return;
    let s = 0;
    for (let o of t.animations?.keys() ?? [])
      o.substring(0, 3) === "fx." && (s = Math.max(s, Number(o.substring(3))));
    for (let o = 1; o <= s; o++) {
      let d = i.clone();
      d.name = String(o);
      let c = t.animations?.get(`fx.${o}`) ?? null;
      ((d.caption = c == null ? "Empty effect" : `${c.toString()} (${o})`),
        d.addEventListener(u.CLICK, this._r0e3e447f3522f5),
        r.addListItem(d));
    }
  }
  onClose = n((e) => {
    this.visible = !1;
  }, "onClose");
  _r0e3e447f3522f5 = n((e) => {
    let r = e.target,
      t = Number(r?.name ?? 0);
    t > 0 && this._roomEngine?._rd271112e5404ac(t);
  }, "_r0e3e447f3522f5");
}
