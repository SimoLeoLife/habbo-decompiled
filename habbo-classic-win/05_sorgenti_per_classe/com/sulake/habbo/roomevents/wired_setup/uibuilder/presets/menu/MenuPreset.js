// Extracted from HabboAirLauncher.deobf.js, line 352590.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/menu/MenuPreset.as
// Obfuscated name: _i14c4a30707b854

class extends WiredUIPreset {
  static {
    n(this, "MenuPreset");
  }
  static SPACER = new UnkInterface_39cf83();
  _container;
  _rae90ea214a7da9;
  _r86987cea8ca066;
  var_1158;
  _rec7af9e4b1585f = null;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r) {
    ((this._rec7af9e4b1585f = r), (this._container = this.var_40.createQuickMenu()));
    let t = this.menuList,
      i = this._container.width - t.width,
      s = this._container.height - t.height;
    ((this._rae90ea214a7da9 = t.removeListItem(t.findChildByName("menu_item_template"))),
      (this._r86987cea8ca066 = t.removeListItem(t.findChildByName("spacer_template"))),
      (this.var_1158 = []));
    let o = 0;
    for (let d of e) {
      let c = d instanceof MenuItem ? d : null,
        f = d instanceof UnkInterface_39cf83 ? d : null;
      if (c != null) {
        let l = new MenuItemView(this, c);
        (this.var_1158.push(l),
          t.addListItem(l.window),
          l._r374f56bc0af876 > o && (o = l._r374f56bc0af876));
      } else f != null && t.addListItem(this._r86987cea8ca066.clone());
    }
    ((this._container.width = o + i + this.var_40._r29dc4604529ee0),
      (this._container.height = t.height + s),
      this._container.addEventListener(y.const_210, this._r47d4bdc5fbafb8));
  }
  _r47d4bdc5fbafb8 = n((e) => {
    this.requestClose();
  }, "_r47d4bdc5fbafb8");
  _rea4647eff41e93() {
    let e = this._roomEvents.windowManager.getDesktop(1);
    e?.addChild(this._container);
    let r = new E();
    (this._rec7af9e4b1585f.getGlobalPosition(r),
      (this._container.x = r.x),
      (this._container.y = r.y + this._rec7af9e4b1585f.height),
      (this._container.visible = !0),
      this._container.activate());
  }
  requestClose() {
    let e = this._roomEvents.windowManager.getDesktop(1);
    e?.removeChild(this._container);
  }
  setSelected(e, r) {
    this.var_1158[e].selected = r;
  }
  getSelected(e) {
    return this.var_1158[e].selected;
  }
  _rd0d2a7f4f3ffe1(e, r) {
    this.var_1158[e].disabled = r;
  }
  _r75cb0953553dec(e) {
    return this.var_1158[e].disabled;
  }
  get window() {
    return this._container;
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e), (this._container.width = e));
  }
  hasStaticWidth() {
    return !1;
  }
  get staticWidth() {
    return this._container.width;
  }
  get childPresets() {
    return [];
  }
  dispose() {
    if (!this.disposed) {
      super.dispose();
      for (let e of this.var_1158) e.dispose();
      ((this.var_1158 = null),
        this._container.dispose(),
        (this._container = null),
        this._rae90ea214a7da9.dispose(),
        (this._rae90ea214a7da9 = null),
        this._r86987cea8ca066.dispose(),
        (this._r86987cea8ca066 = null),
        (this._rec7af9e4b1585f = null));
    }
  }
  get menuList() {
    return this._container.findChildByName("menu_list");
  }
  get _r230b0cd281c4db() {
    return this._rae90ea214a7da9;
  }
}
