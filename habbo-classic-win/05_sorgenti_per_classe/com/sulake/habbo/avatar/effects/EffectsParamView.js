// Extracted from HabboAirLauncher.deobf.js, line 163393.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/effects/EffectsParamView.as
// Obfuscated name: _i44b8785e749ba8

class {
  static {
    n(this, "EffectsParamView");
  }
  var_38;
  _container;
  _re8f4e7845696e0;
  var_1302;
  var_3910 = 0;
  _r39d334efd0e7d7 = null;
  constructor(e) {
    ((this.var_38 = e),
      (this._container = e.controller.view.effectsParamViewContainer),
      (this._re8f4e7845696e0 = e.controller.manager.getProperty(
        "avatareditor.effects.buy.button.catalog.page.name",
      )),
      (this.var_1302 = new UnkEventDispatcherWrapperSubclass_05394e(1e3)),
      this.var_1302.addEventListener(DeBouncer.addEventListener, this._rd3761468195ac5),
      this._container.findChildByName("get_more_button")?.addEventListener(u.CLICK, this.onBuyButtonClick),
      this.updateView(null));
  }
  dispose() {
    (this.var_1302?.stop(),
      this.var_1302?.removeEventListener(DeBouncer.addEventListener, this._rd3761468195ac5),
      (this.var_1302 = null),
      (this.var_38 = null));
  }
  get disposed() {
    return this.var_38 == null;
  }
  updateView(e) {
    ((this._r39d334efd0e7d7 = e), (this._container.visible = !0));
    let r = this._container.findChildByName("time_left_bg"),
      t = this._container.findChildByName("save_to_activate"),
      i = this._container.findChildByName("effect_name");
    if (e == null) {
      (r != null && (r.visible = !1), t != null && (t.visible = !1), i != null && (i.visible = !1));
      return;
    }
    (i != null && ((i.visible = !0), (i.caption = `$${"{fx_" + e.type + "}"}`)),
      !e.isActive && !e.isPermanent
        ? (r != null && (r.visible = !1), t != null && (t.visible = !0), this.var_1302?.stop())
        : ((this.var_3910 = e.secondsLeft),
          this.setSecondsLeft(e.secondsLeft, e.duration, e.isPermanent),
          r != null && (r.visible = !0),
          t != null && (t.visible = !1),
          this.var_1302?.start()));
  }
  setSecondsLeft(e, r, t) {
    let i = this._container.findChildByName("time_left_bg"),
      s = i?.findChildByName("progress_bar_bitmap"),
      o = i?.findChildByName("effect_time_left");
    if (i == null || s == null || o == null) return;
    let d = new A(s.width, s.height, !1, 0),
      c = t ? r : e,
      f = new D(0, 0, Math.trunc(d.width * (Number(c) / r)), d.height);
    (d.fillRect(f, 2146080), (s.bitmap = d));
    let l;
    if (t) ((o.caption = "${avatareditor.effects.active.permanent}"), (l = o.text));
    else if (e > 3600 * 24) {
      ((o.caption = "${avatareditor.effects.active.daysleft}"), (l = o.text));
      let b = Math.floor(e / (3600 * 24));
      l = l.replace("%days_left%", b.toString());
    } else {
      ((o.caption = "${avatareditor.effects.active.timeleft}"), (l = o.text));
      let b = e,
        _ = Math.floor(b / 3600),
        h = Math.floor(b / 60) % 60,
        p = b % 60,
        m = _ < 10 ? "0" : "",
        v = h < 10 ? "0" : "",
        w = p < 10 ? "0" : "";
      _ > 0
        ? (l = l.replace("%time_left%", `${m}${_}:${v}${h}:${w}${p}`))
        : (l = l.replace("%time_left%", `${v}${h}:${w}${p}`));
    }
    o.text = l;
  }
  onBuyButtonClick = n((e) => {
    this.var_38?.controller.manager.catalog?.openCatalogPage(this._re8f4e7845696e0);
  }, "onBuyButtonClick");
  _rd3761468195ac5 = n((e) => {
    this._r39d334efd0e7d7 != null &&
      this._r39d334efd0e7d7.isActive &&
      this.setSecondsLeft(
        this.var_3910--,
        this._r39d334efd0e7d7.duration,
        this._r39d334efd0e7d7.isPermanent,
      );
  }, "_rd3761468195ac5");
}
