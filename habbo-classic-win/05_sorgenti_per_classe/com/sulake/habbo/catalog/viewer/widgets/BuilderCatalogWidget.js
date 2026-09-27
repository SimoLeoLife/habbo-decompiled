// Estratto da HabboAirLauncher.deobf.js, riga 188175.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/BuilderCatalogWidget.as
// Nome offuscato: _id4eb1fa5394551

class extends CatalogWidget {
  constructor(r, t) {
    super(r);
    this._catalog = t;
  }
  static {
    n(this, "BuilderCatalogWidget");
  }
  _offer = null;
  _rf41d8647ee8a39 = null;
  dispose() {
    (this._rf41d8647ee8a39 != null &&
      (this._catalog?.connection?.removeMessageEvent(this._rf41d8647ee8a39),
      (this._rf41d8647ee8a39 = null)),
      this.events?.removeEventListener?.(CatalogWidgetEventEnum.SELECT_PRODUCT, this._rae8e17ddaeb413),
      this.events?.removeEventListener?.(CatalogWidgetEventEnum.ROOM_CHANGED, this._ra8566e4ea9292c),
      (this._offer = null),
      (this._catalog = null),
      super.dispose());
  }
  init() {
    return super.init()
      ? this._catalog._r28a444d88bee4d !== CatalogType.BUILDER
        ? (this._window != null && (this._window.visible = !1), !0)
        : (this._rf41d8647ee8a39 == null &&
            this._catalog.connection != null &&
            ((this._rf41d8647ee8a39 = new _i93d26d58cde8a4(this._r012a216d88af74)),
            this._catalog.connection.addMessageEvent(this._rf41d8647ee8a39)),
          this._rd7318259311b4b(CatalogWidgetEnum.BUILDER),
          this.updateButtons(),
          this._window != null && (this._window.procedure = this.windowProcedure),
          this.events?.addEventListener?.(CatalogWidgetEventEnum.SELECT_PRODUCT, this._rae8e17ddaeb413),
          this.events?.addEventListener?.(CatalogWidgetEventEnum.ROOM_CHANGED, this._ra8566e4ea9292c),
          !0)
      : !1;
  }
  _ra8566e4ea9292c = n(() => {
    this.updateButtons();
  }, "_ra8566e4ea9292c");
  _r012a216d88af74 = n(() => {
    this.updateButtons(!0);
  }, "_r012a216d88af74");
  _rae8e17ddaeb413 = n((r) => {
    ((this._offer = r.offer), this.updateButtons());
  }, "_rae8e17ddaeb413");
  windowProcedure = n((r, t) => {
    let i = r,
      s = t;
    if (!(i?.type !== u.CLICK || s == null || this._offer == null))
      switch (s.name) {
        case "place_one":
          this._catalog._r554b9a058961c3(null, this._offer);
          break;
        case "place_many":
          this._catalog._r554b9a058961c3(null, this._offer, !0);
          break;
        default:
          break;
      }
  }, "windowProcedure");
  updateButtons(r = !1) {
    if (this._window == null || !this._window.visible) return;
    let t = this._catalog._r4886fce2d9cf5b(this._offer);
    t === _i7f58a6295d71c9._r521743e2877155 && r && (t = _i7f58a6295d71c9._rb2488512c80ca7);
    let i = this._window.findChildByName("place_one"),
      s = this._window.findChildByName("place_many"),
      o = this._window.findChildByName("error_container"),
      d = this._window.findChildByName("error_icon"),
      c = this._window.findChildByName("error_message");
    if (t === _i7f58a6295d71c9._rb2488512c80ca7) {
      (i?.enable(), s?.enable(), o != null && (o.visible = !1));
      return;
    }
    switch ((i?.disable(), s?.disable(), o != null && (o.visible = !0), t)) {
      case _i7f58a6295d71c9._r2e2ab9b5b6918f:
        o != null && (o.visible = !1);
        break;
      case _i7f58a6295d71c9._r4a67fffe7b2e4a:
        (d && (d.assetUri = "icons_builder_error_furnilimit"),
          c && (c.caption = "${builder.placement_widget.error.limit_reached}"));
        break;
      case _i7f58a6295d71c9._r510144065b67f3:
        (d && (d.assetUri = "icons_builder_error_notroom"),
          c && (c.caption = "${builder.placement_widget.error.not_in_room}"));
        break;
      case _i7f58a6295d71c9._r521743e2877155:
        (d && (d.assetUri = "icons_builder_error_room"),
          c && (c.caption = "${builder.placement_widget.error.not_group_admin}"));
        break;
      case _i7f58a6295d71c9._rbc8ee12966cb3e:
        (d && (d.assetUri = "icons_builder_error_grouproom"),
          c && (c.caption = "${builder.placement_widget.error.group_room}"));
        break;
      case _i7f58a6295d71c9._r256230159e7116:
        (d && (d.assetUri = "icons_builder_error_userinroom"),
          c && (c.caption = "${builder.placement_widget.error.visitors}"));
        break;
    }
  }
}
