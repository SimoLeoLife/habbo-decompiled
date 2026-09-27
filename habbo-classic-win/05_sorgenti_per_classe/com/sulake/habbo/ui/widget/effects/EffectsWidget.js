// Extracted from HabboAirLauncher.deobf.js, line 313839.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/effects/EffectsWidget.as
// Obfuscated name: _icc92bbe42723f1

class a extends RoomWidgetBase {
  static {
    n(this, "EffectsWidget");
  }
  static LIST_HEIGHT_MAX = 320;
  static LIST_HEIGHT_MIN = 48;
  static TOOLBAR_MARGIN = 2;
  _view = null;
  var_122 = null;
  var_800;
  constructor(e, r, t) {
    (super(e, r, t), (this.handler.widget = this), (this.var_800 = new B()));
  }
  get handler() {
    return this._r16afd202c77c85;
  }
  dispose() {
    if (!this.disposed) {
      if (this.var_800 != null) {
        for (let e of this.var_800.getValues()) e.dispose();
        (this.var_800.dispose(), (this.var_800 = null));
      }
      ((this.var_122 = null), this._view?.dispose(), (this._view = null), super.dispose());
    }
  }
  open() {
    if (this._view == null) {
      let e = this.assets?.getAssetByName("effects_widget");
      if (((this._view = this.windowManager?.buildFromXML(e?.content)), this._view == null)) return;
      let r = this.handler.container?.toolbar?._ra9b27e4a11ddce() ?? new D();
      ((this._view.x = r.right + a.TOOLBAR_MARGIN),
        (this._view.y = r.bottom - this._view.height),
        (this.var_122 = this._view.findChildByName("list")),
        this._view.findChildByName("close")?.addEventListener(u.CLICK, this.onClose));
    }
    (this.update(), (this._view.visible = !0));
  }
  update() {
    let e = this.handler.container?.inventory?._r60766c255d6b8b();
    if (e == null || this.var_800 == null || this.var_122 == null || this._view == null)
      return;
    let r;
    for (let s of e)
      ((r = this.var_800.getValue(s.type) ?? null),
        r != null
          ? r.update()
          : ((r = new exe(this, s)),
            this.var_800.add(s.type, r),
            this.var_122.addListItem(r.window)));
    for (let s = this.var_800.length - 1; s >= 0; s--)
      ((r = this.var_800.getWithIndex(s)),
        !(r == null || e.indexOf(r.effect) !== -1) &&
          (this.var_122.removeListItem(r.window),
          this.var_800.remove(this.var_800.getKey(s)),
          r.dispose()));
    let t = this.var_122.visibleRegion.height;
    this.var_122.height = Math.max(Math.min(t, a.LIST_HEIGHT_MAX), a.LIST_HEIGHT_MIN);
    let i = this._view.findChildByName("no_effects");
    i != null && (i.visible = e.length === 0);
  }
  selectEffect(e, r) {
    r
      ? this.handler.container?.inventory?._r4f260cb2c62d21(e)
      : this.handler.container?.inventory?.setEffectSelected(e);
  }
  onClose = n((e) => {
    this._view != null && (this._view.visible = !1);
  }, "onClose");
}
