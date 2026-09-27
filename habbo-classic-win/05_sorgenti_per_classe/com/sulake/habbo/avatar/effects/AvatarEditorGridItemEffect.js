// Estratto da HabboAirLauncher.deobf.js, riga 164878.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/effects/AvatarEditorGridItemEffect.as
// Nome offuscato: _i17c5851d19d086

class {
  static {
    n(this, "AvatarEditorGridItemEffect");
  }
  _window;
  var_989;
  var_2619 = !1;
  _rbe43e9e1aa3487;
  constructor(e, r, t) {
    let i = t.getAssetByName("avatar_editor_effect_griditem_xml");
    ((this._window = r.buildFromXML(i.content)),
      (this.var_989 = this._window.findChildByTag("BG_COLOR")),
      (this._rbe43e9e1aa3487 = e),
      e != null
        ? ((this.bitmap = e.icon),
          (this.amount = e.amountInInventory),
          e.isPermanent
            ? this.setSecondsLeft(e.duration, e.duration)
            : e.isActive && this.setSecondsLeft(e.secondsLeft, e.duration))
        : ((this.bitmap = r.assets.getAssetByName("avatar_editor_generic_remove_selection")?.content),
          (this.amount = 1)),
      (this.selected = !1),
      this._window.addEventListener(u.OVER, this._rad325cc53260a0),
      this._window.addEventListener(u.OUT, this.onMousetOut));
  }
  get effectType() {
    return this._rbe43e9e1aa3487?.type ?? -1;
  }
  get window() {
    return this._window;
  }
  set selected(e) {
    ((this.var_2619 = e),
      this.var_989 != null &&
        ((this.var_989.visible = this.var_2619), (this.var_989.blend = 1)));
  }
  set bitmap(e) {
    let r = this._window.findChildByName("bitmap");
    r != null && (r.bitmap = e);
  }
  set amount(e) {
    let r = this._window.findChildByName("effect_amount_bg1"),
      t = this._window.findChildByName("effect_amount");
    (r != null && (r.visible = e > 1), t != null && (t.text = e.toString()));
  }
  setSecondsLeft(e, r) {
    let t = this._window.findChildByName("duration_container"),
      i = this._window.findChildByName("progress_bar");
    if (t == null || i == null) return;
    t.visible = !0;
    let s = new A(i.width, i.height, !1, 0),
      o = new D(0, 0, Math.trunc(s.width * (Number(e) / r)), s.height);
    (s.fillRect(o, 2146080), (i.bitmap = s));
  }
  onMousetOut = n((e) => {
    (!this.var_2619 && this.var_989 != null && (this.var_989.visible = !1),
      this.var_989 != null && (this.var_989.blend = 1));
  }, "onMousetOut");
  _rad325cc53260a0 = n((e) => {
    !this.var_2619 &&
      this.var_989 != null &&
      ((this.var_989.visible = !0), (this.var_989.blend = 0.5));
  }, "_rad325cc53260a0");
}
