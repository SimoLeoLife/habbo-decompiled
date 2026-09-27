// Extracted from HabboAirLauncher.deobf.js, line 313667.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/effects/EffectView.as
// Obfuscated name: _ie84ecdd93597f7

class a {
  static {
    n(this, "EffectView");
  }
  static UPDATE_TIMER_MS = 1e3;
  var_17;
  _window = null;
  _re4a60c8cec49dc;
  _r926b34cbc298a3 = null;
  _maxWidth = 0;
  _r943822adc3c07a = null;
  var_382;
  _ree84245fec3b2d = null;
  constructor(e, r) {
    ((this._re4a60c8cec49dc = r),
      (this.var_17 = e),
      (this.var_382 = new UnkEventDispatcherWrapperSubclass_05394e(a.UPDATE_TIMER_MS)),
      this.var_382.addEventListener(DeBouncer.addEventListener, this.onUpdate),
      this.update());
  }
  get effect() {
    return this._re4a60c8cec49dc;
  }
  dispose() {
    (this.var_382?.stop(),
      this.var_382?.removeEventListener(DeBouncer.addEventListener, this.onUpdate),
      (this.var_382 = null),
      (this.var_17 = null),
      (this._re4a60c8cec49dc = null),
      (this._r926b34cbc298a3 = null),
      (this._r943822adc3c07a = null),
      (this._ree84245fec3b2d = null),
      this._window?.dispose(),
      (this._window = null));
  }
  get window() {
    return this._window;
  }
  onUpdate = n((e = null) => {
    if (this._r926b34cbc298a3 == null || this._re4a60c8cec49dc == null) {
      this.var_382?.stop();
      return;
    }
    if (this._re4a60c8cec49dc.isActive) {
      let r = this._re4a60c8cec49dc.secondsLeft / Number(this._re4a60c8cec49dc.duration);
      this._r926b34cbc298a3.width = r * this._maxWidth;
    } else ((this._r926b34cbc298a3.width = 0), this.var_382?.stop());
    this.setTimeLeft();
  }, "onUpdate");
  setTimeLeft() {
    if (
      this._window == null ||
      this._re4a60c8cec49dc == null ||
      this.var_17 == null ||
      (this._r943822adc3c07a == null &&
        ((this._r943822adc3c07a = this._window.findChildByName("time_left")),
        this._r943822adc3c07a == null))
    )
      return;
    if (!this._re4a60c8cec49dc.isActive) {
      this._r943822adc3c07a.caption = "${widgets.memenu.effects.activate}";
      return;
    }
    let e;
    if (this._re4a60c8cec49dc.secondsLeft > 3600 * 24) {
      ((this._r943822adc3c07a.caption = "${widgets.memenu.effects.active.daysleft}"),
        (e = this._r943822adc3c07a.text));
      let r = Math.floor(this._re4a60c8cec49dc.secondsLeft / (3600 * 24));
      e = e.replace("%days_left%", String(r));
    } else {
      ((this._r943822adc3c07a.caption = "${widgets.memenu.effects.active.timeleft}"),
        (e = this._r943822adc3c07a.text));
      let r = this._re4a60c8cec49dc.secondsLeft,
        t = Math.floor(r / 3600),
        i = Math.floor(r / 60) % 60,
        s = r % 60,
        o = t < 10 ? "0" : "",
        d = i < 10 ? "0" : "",
        c = s < 10 ? "0" : "";
      t > 0
        ? (e = e.replace("%time_left%", `${o}${t}:${d}${i}:${c}${s}`))
        : (e = e.replace("%time_left%", `${d}${i}:${c}${s}`));
    }
    this._r943822adc3c07a.text = e;
  }
  update() {
    if (
      this.var_17 == null ||
      this._re4a60c8cec49dc == null ||
      (this._window == null &&
        (this._window = this.var_17.windowManager?.createWindow(
          "",
          "",
          HabboWindowType.CONTAINER,
          HabboWindowStyle.DEFAULT,
          class_2094._r5f5ff9955e2bf4,
        )),
      this._window == null)
    )
      return;
    for (; this._window.numChildren > 0;) this._window.removeChildAt(0)?.dispose();
    ((this._r926b34cbc298a3 = null), (this._ree84245fec3b2d = null), (this._r943822adc3c07a = null));
    let e = "";
    this._re4a60c8cec49dc._r780270c6ffe49b
      ? (e = "memenu_effect_selected")
      : this._re4a60c8cec49dc.isActive
        ? (e = "memenu_effect_unselected")
        : (e = "memenu_effect_inactive");
    let r = this.var_17.assets?.getAssetByName(e),
      t = this.var_17.windowManager?.buildFromXML(r?.content);
    if (t == null) return;
    this._window.addChild(t);
    let i = this._window.findChildByName("effect_name");
    i != null && (i.caption = "${fx_" + this._re4a60c8cec49dc.type + "}");
    let s = this._window.findChildByName("effect_amount");
    s != null && (s.caption = String(this._re4a60c8cec49dc.amountInInventory));
    let o = this._window.findChildByName("effect_amount_bg1");
    (this._re4a60c8cec49dc.amountInInventory < 2 && o != null && (o.visible = !1),
      e === "memenu_effect_inactive"
        ? this._window
            .findChildByName("activate_effect")
            ?.addEventListener(u.CLICK, this._r7972d0b08e8494)
        : (t.addEventListener(u.CLICK, this._r7972d0b08e8494),
          this._re4a60c8cec49dc.isActive &&
            (t.addEventListener(u.OVER, this._r7972d0b08e8494),
            t.addEventListener(u.OUT, this._r7972d0b08e8494)),
          this.setElementImage(
            "effect_hilite",
            this._re4a60c8cec49dc._r780270c6ffe49b ? "memenu_fx_pause" : "memenu_fx_play",
          ),
          (this._ree84245fec3b2d = this._window.findChildByName("effect_hilite")),
          this._ree84245fec3b2d != null && (this._ree84245fec3b2d.visible = !1)),
      this.setTimeLeft(),
      (this._r926b34cbc298a3 = this._window.findChildByName("loader_bar")),
      this._r926b34cbc298a3 != null &&
        ((this._maxWidth = this._r926b34cbc298a3.width),
        this.var_382?.start(),
        this.onUpdate()),
      this._re4a60c8cec49dc.icon != null && this.var_213("effect_icon", this._re4a60c8cec49dc.icon),
      (this._window.rectangle = t.rectangle));
  }
  var_213(e, r) {
    if (this._window == null) return;
    let t = this._window.findChildByName(e);
    t != null &&
      (t.bitmap?.dispose(),
      (t.bitmap = new A(t.width, t.height, !0, 0)),
      t.bitmap.copyPixels(r, r.rect, new E(0, 0)));
  }
  _r7972d0b08e8494 = n((e) => {
    if (!(this._re4a60c8cec49dc == null || this.var_17 == null))
      switch (e.type) {
        case u.OVER:
          this._ree84245fec3b2d != null && (this._ree84245fec3b2d.visible = !0);
          break;
        case u.OUT:
          this._ree84245fec3b2d != null && (this._ree84245fec3b2d.visible = !1);
          break;
        case u.CLICK:
          this.var_17.selectEffect(
            this._re4a60c8cec49dc.type,
            this._re4a60c8cec49dc._r780270c6ffe49b,
          );
          break;
      }
  }, "_r7972d0b08e8494");
  setElementImage(e, r) {
    if (this.var_17 == null) return;
    let i = this.var_17.assets?.getAssetByName(r)?.content;
    i != null && this.var_213(e, i);
  }
}
