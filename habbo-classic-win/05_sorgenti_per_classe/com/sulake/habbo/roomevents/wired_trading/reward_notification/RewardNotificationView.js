// Extracted from HabboAirLauncher.deobf.js, line 374059.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_trading/reward_notification/RewardNotificationView.as
// Obfuscated name: _i7991d24f82103d

class a extends AbstractUbuntuWiredUI {
  static {
    n(this, "RewardNotificationView");
  }
  var_1219;
  var_162 = null;
  var_179;
  var_3019;
  var_2399;
  var_3640;
  var_80 = 0;
  constructor(e, r) {
    (super(e._r41f5cc7d3516ce, r),
      (this.var_1219 = e),
      (this.var_179 = r.createText("", Se.DEFAULT)),
      (this.var_3019 = r.createNodeOverviewPreset("${wiredrewards.title}", this.onClickNode)),
      (this.var_2399 = r.createHtml(
        this.localization.getLocalization("wiredrewards.earnings"),
        Sg.DEFAULT,
      )),
      this.var_2399.window.initializeLinkStyle(),
      (this.var_3640 = r.createButton("${wiredrewards.ok}", this.class_2147)));
    let t = r.createSimpleListView(!0, [
        this.var_179,
        this.var_3019,
        this.var_2399,
        this.var_3640,
      ]),
      i = r._r5ce8ba4791791e(t, 7, 7, 7, 7);
    ((this.framePreset = r._r2c9ac233cf1a70([i], this._rf4d9b06810c6a7)),
      this.framePreset.resizeToWidth(276),
      (this.framePreset.title = "${wiredrewards.title}"));
  }
  onClickNode = n((e) => {
    this.var_1219.context._r6b6c989018eb05(
      e.type === xn.TYPE_COIN ? "habboUI/open/vault" : "inventory/open",
    );
  }, "onClickNode");
  class_2147 = n(() => {
    this._rf4d9b06810c6a7();
  }, "class_2147");
  hideFrame() {
    (super.hideFrame(), this.var_1219?._rea8c11a13d916f(this));
  }
  get isBoundToParentRect() {
    return !0;
  }
  show(e, r, t, i) {
    ((this.var_162 = e),
      (this.var_179.text =
        (e.rewardText ?? "").length === 0 ? "${wiredrewards.desc_default}" : e.rewardText),
      (this.var_3019.rule = e._rb8ba5dcaad6794),
      (this.var_2399.visible = a.hasCreditNode(e._rb8ba5dcaad6794)),
      this.showFrame(),
      (this.window.x += r),
      (this.window.y += t),
      (this.var_80 = i));
  }
  get _r7980528b5700ff() {
    return this.var_80;
  }
  static hasCreditNode(e) {
    for (let r of e.nodes) if (r.type === xn.TYPE_COIN) return !0;
    return !1;
  }
  get contents() {
    return this.var_162;
  }
  dispose() {
    this.disposed ||
      (this.isShowing() && this.hide(),
      (this.var_3640 = null),
      (this.var_3019 = null),
      (this.var_179 = null),
      (this.var_2399 = null),
      (this.var_1219 = null),
      super.dispose());
  }
}
