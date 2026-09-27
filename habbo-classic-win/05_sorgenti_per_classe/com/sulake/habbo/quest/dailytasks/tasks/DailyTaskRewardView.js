// Extracted from HabboAirLauncher.deobf.js, line 265437.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/dailytasks/tasks/DailyTaskRewardView.as
// Obfuscated name: _idfc820d7a5d493

class {
  constructor(e, r) {
    this.var_2027 = e;
    this.var_63 = r;
    let t = this.var_63.view?._r34ac8385061496;
    ((this._window = t?.clone()), this.initializeUI());
  }
  static {
    n(this, "DailyTaskRewardView");
  }
  _window = null;
  _disposed = !1;
  get reward() {
    return this.var_2027;
  }
  get window() {
    return this._window;
  }
  dispose() {
    this._disposed ||
      (this._window?.dispose(),
      (this._window = null),
      (this.var_63 = null),
      (this.var_2027 = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  initializeUI() {
    let e = this.rewardAmountBorder,
      r = this.rewardAmountText,
      t = this.rewardDisplayWidget;
    if (e == null || r == null || t == null) return;
    ((e.visible = this.var_2027.amount > 1), (r.caption = `x${this.var_2027.amount}`));
    let i = t.widget;
    (i != null && (i.productInfo = new RewardDisplayWrapper(this.var_2027)),
      e.visible || (t.y = (t.parent?.height ?? t.height) / 2 - t.height / 2));
  }
  get rewardDisplayWidget() {
    return this._window?.findChildByName("reward_display_widget");
  }
  get rewardAmountBorder() {
    return this._window?.findChildByName("reward_amount_border");
  }
  get rewardAmountText() {
    return this._window?.findChildByName("reward_amount_text");
  }
}
