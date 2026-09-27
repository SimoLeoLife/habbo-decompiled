// Estratto da HabboAirLauncher.deobf.js, riga 306552.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/avatarinfo/BreedPetView.as
// Nome offuscato: _i4f4da9743c6149

class a extends AvatarContextInfoButtonView {
  static {
    n(this, "BreedPetView");
  }
  static MODE_NORMAL = 0;
  _mode = a.MODE_NORMAL;
  var_742 = null;
  var_4676 = !1;
  get objectId() {
    return this.var_742?.id ?? 0;
  }
  get requestRoomObjectId() {
    return this.var_742?.requestRoomObjectId ?? 0;
  }
  constructor(e) {
    (super(e), (this.var_231 = !1));
  }
  dispose() {
    (this._window != null &&
      (this._window.removeEventListener(u.OVER, this._r846ed7467efd50),
      this._window.removeEventListener(u.OUT, this._r846ed7467efd50)),
      this.var_742?.dispose(),
      (this.var_742 = null),
      super.dispose());
  }
  static setup(e, r, t, i, s, o = !1, d = !1) {
    ((e.var_742 = o instanceof UseProductItem ? o : null),
      (e.var_4676 = d),
      AvatarContextInfoButtonView.setup(e, r, t, i, s, !1));
  }
  resolveMode() {
    this._mode = a.MODE_NORMAL;
  }
  updateWindow() {
    let e = this.widget;
    if (e?.assets == null || e.windowManager == null) return;
    if ((this.resolveMode(), this.isMinimized)) {
      this.activeView = this._r264c5b40440e9c();
      return;
    }
    if (this._window == null) {
      let t = e.assets.getAssetByName("breed_pet_menu")?.content ?? null;
      if (
        ((this._window = t != null ? e.windowManager.buildFromXML(t, 0) : null),
        this._window == null)
      )
        return;
      (this._window.addEventListener(u.OVER, this._r846ed7467efd50),
        this._window.addEventListener(u.OUT, this._r846ed7467efd50),
        this._window.findChildByName("minimize")?.addEventListener(u.CLICK, this._r9f300ee1384194),
        this._window.findChildByName("minimize")?.addEventListener(u.OVER, this._r932b323057a22d),
        this._window.findChildByName("minimize")?.addEventListener(u.OUT, this._r932b323057a22d));
    }
    ((this.var_34 = this._window.findChildByName("buttons")),
      this.var_34 != null && (this.var_34.procedure = this._r8b6e9f027ac5db));
    let r = this._window;
    ((r.findChildByName("name").caption = this._userName),
      (r.visible = !1),
      (this.activeView = r),
      this.updateButtons());
  }
  updateButtons() {
    if (!(this._window == null || this.var_34 == null)) {
      this.var_34.autoArrangeItems = !1;
      for (let e = 0; e < this.var_34.numListItems; e++) {
        let r = this.var_34.getListItemAt(e);
        r != null && (r.visible = !1);
      }
      (this._mode === a.MODE_NORMAL &&
        this.var_4676 &&
        this.showButton("breed"),
        (this.var_34.autoArrangeItems = !0),
        (this.var_34.visible = !0));
    }
  }
  _rb8ed727c592c36(e, r) {
    if (this.disposed || this._window?.disposed !== !1) return;
    let t = !1;
    (e.type === u.CLICK
      ? r.name === "button" &&
        ((t = !0),
        r.parent?.name === "breed" &&
          this.widget?._r6e242f769fcd82(
            this.var_742?.requestRoomObjectId ?? 0,
            this.var_742?.targetRoomObjectId ?? 0,
            !1,
          ))
      : super._rb8ed727c592c36(e, r),
      t && this.widget?._r1f9f727e22e57a());
  }
  get widget() {
    return this.var_17;
  }
}
