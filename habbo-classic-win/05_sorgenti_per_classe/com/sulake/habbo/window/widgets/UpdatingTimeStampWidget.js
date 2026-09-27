// Estratto da HabboAirLauncher.deobf.js, riga 152084.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/widgets/UpdatingTimeStampWidget.as
// Nome offuscato: _id3e67e47447751

class a {
  constructor(e, r) {
    this.var_220 = e;
    this._windowManager = r;
    ((this._rf8f9fc25599fa4 = this._windowManager?.create(
      "",
      class_2090.const_277,
      100,
      N.const_421,
      new D(),
    )),
      this._rf8f9fc25599fa4 != null && (this._rf8f9fc25599fa4.textColor = 5592405),
      this.var_220 != null && (this.var_220.rootWindow = this._rf8f9fc25599fa4),
      a.UPDATE_TIMER.addEventListener(DeBouncer.addEventListener, this.onTimerTick),
      this.reset());
  }
  static {
    n(this, "UpdatingTimeStampWidget");
  }
  static TYPE = "updating_timestamp";
  static UPDATE_TIMER = (() => {
    let e = new _i05394ecc0c0c4d(6e4);
    return (e.start(), e);
  })();
  _disposed = !1;
  _rf8f9fc25599fa4 = null;
  var_2810 = Date.now();
  reset() {
    ((this.var_2810 = Date.now()), this.onTimerTick());
  }
  get properties() {
    return [];
  }
  set properties(e) {}
  set align(e) {
    let r = this._rf8f9fc25599fa4;
    r?.defaultTextFormat != null && (r.defaultTextFormat.align = e);
  }
  dispose() {
    this._disposed ||
      (a.UPDATE_TIMER.removeEventListener(DeBouncer.addEventListener, this.onTimerTick),
      this._rf8f9fc25599fa4?.dispose(),
      (this._rf8f9fc25599fa4 = null),
      this.var_220 != null &&
        ((this.var_220.rootWindow = null), (this.var_220 = null)),
      (this._windowManager = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  get iterator() {
    return Lt.INSTANCE;
  }
  get timeStamp() {
    return this.var_2810;
  }
  set timeStamp(e) {
    ((this.var_2810 = e), this.onTimerTick());
  }
  onTimerTick = n((e = null) => {
    this._disposed ||
      this._rf8f9fc25599fa4 == null ||
      this._windowManager?.localization == null ||
      (this._rf8f9fc25599fa4.caption = ra.getFriendlyTime(
        this._windowManager.localization,
        (Date.now() - Math.abs(this.var_2810)) / 1e3,
        ".ago",
        1,
      ));
  }, "onTimerTick");
}
