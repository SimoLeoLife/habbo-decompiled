// Extracted from HabboAirLauncher.deobf.js, line 243964.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/inventory/wired_trading/requirements/WiredTradeRequirementsView.as
// Obfuscated name: _ic26873ce75a80d

class a {
  constructor(e) {
    this.var_38 = e;
    (this.claimRequirementsBubble(),
      this.requirementsButton?.addEventListener(u.CLICK, this._rd8b57816e477fe),
      (this._r2c9d4eeb5f9c7e = this.youGiveContainer?.getChildByName("offering_requirements_template")),
      this.initializeStretchingWithParent(this._r2c9d4eeb5f9c7e, !1),
      (this._r5aaf29fa29a183 =
        (this._r2c9d4eeb5f9c7e?.height ?? 0) -
        (this._r2c9d4eeb5f9c7e?.findChildByName("requirements_definition")?.height ?? 0)),
      this._r2c9d4eeb5f9c7e?.parent?.removeChild(this._r2c9d4eeb5f9c7e));
  }
  static {
    n(this, "WiredTradeRequirementsView");
  }
  static var_3559 = [];
  static MIN_BORDER_HEIGHT = 80;
  static BORDER_TOP_BOTTOM_OFFSET = 18;
  static MINIMALIZED_BORDER_WIDTH = 122;
  static NORMAL_BORDER_WIDTH = 180;
  _disposed = !1;
  _rb63197e10e4aa5 = null;
  _r2c9d4eeb5f9c7e = null;
  _r8e803549f52c02 = null;
  _rd0bfba5db3edd7 = null;
  _ra5a7980dd8bb88 = null;
  _r5aaf29fa29a183 = 0;
  _transitionTimer = null;
  get disposed() {
    return this._disposed;
  }
  get _r5a2088db32911f() {
    if (this.var_38 == null) throw new Error("WiredTradeRequirementsView has been disposed.");
    return this.var_38._r5a2088db32911f;
  }
  requirementsUpdated(e, r) {
    (this.clear(), (this._r8e803549f52c02 = e));
    let t = e.isPaymentOnly(),
      i = this._r5a2088db32911f.tradeTypeLocalization;
    this.bubbleTitle != null &&
      (this.bubbleTitle.text = this.localization.getLocalizationWithParams(
        "inventory.wired_trading.requirements.title",
        "",
        "type",
        i,
      ));
    let s =
      !t ||
      (this._r8e803549f52c02._r5c478e496e27d3 != null && this._r8e803549f52c02._r5c478e496e27d3.length > 0);
    if (
      (this.offeringContainersSeparator != null && (this.offeringContainersSeparator.visible = s),
      this.youGetContainer != null && (this.youGetContainer.visible = s),
      (this._rd0bfba5db3edd7 = a._offeringsTemplate(this._r2c9d4eeb5f9c7e)),
      this._rd0bfba5db3edd7.initialize(
        this.var_38,
        e.type,
        e.rules?._r6f70d655857f72 ?? null,
        null,
        bQ.TYPE_GIVE,
      ),
      this.youGiveContainer != null &&
        this._rd0bfba5db3edd7.window != null &&
        (this.youGiveContainer.addChild(this._rd0bfba5db3edd7.window),
        this.initializeStretchingWithParent(this._rd0bfba5db3edd7.window)),
      s)
    ) {
      let o = [];
      (this._r8e803549f52c02.rules?.youGiveRule != null &&
        o.push(this._r8e803549f52c02.rules.youGiveRule),
        (this._ra5a7980dd8bb88 = a._offeringsTemplate(this._r2c9d4eeb5f9c7e)),
        this._ra5a7980dd8bb88.initialize(
          this.var_38,
          e.type,
          o,
          this._r8e803549f52c02._r5c478e496e27d3,
          bQ.TYPE_RECEIVE,
        ),
        this.youGetContainer != null &&
          this._ra5a7980dd8bb88.window != null &&
          (this.youGetContainer.addChild(this._ra5a7980dd8bb88.window),
          this.initializeStretchingWithParent(this._ra5a7980dd8bb88.window)));
    }
    (this.requirementsStateUpdated(),
      this.disclaimerTextHtml != null &&
        ((this.disclaimerTextHtml.visible = t && s),
        this.disclaimerTextHtml.visible &&
          ((this.disclaimerTextHtml.text = this.localization.getLocalizationWithParams(
            "inventory.wired_trading.requirements.receive_text_disclaimer",
            "",
            "you_get_name",
            this.localization.getLocalization("inventory.wired_trading.requirements.receiving"),
          )),
          this._r2e167949bebd39(this.disclaimerTextHtml))),
      this._rb63197e10e4aa5 != null && (this._rb63197e10e4aa5.visible = r));
  }
  requirementsStateUpdated() {
    if (this._r8e803549f52c02 == null) return;
    let e = this._r5a2088db32911f._r1238571df4d291,
      r = this._r5a2088db32911f.extra;
    if (
      (this._r8e803549f52c02.rules?.type === class_4343.var_5774
        ? this.requirementsMetHtml != null &&
          (this.requirementsMetHtml.text = this.localization.getLocalizationWithParams(
            "inventory.wired_trading.requirements.indicator.multi",
            "",
            "times",
            String(this._r8e803549f52c02.rules.multiplier),
            "amount",
            String(r),
          ))
        : e
          ? this.requirementsMetHtml != null &&
            (this._r8e803549f52c02.rules?.type === class_4343._rca36b8a1fa6523 && r > 1
              ? (this.requirementsMetHtml.text = this.localization.getLocalizationWithParams(
                  "inventory.wired_trading.requirements.indicator.met_numbered",
                  "",
                  "amount",
                  String(r),
                ))
              : (this.requirementsMetHtml.text = this.localization.getLocalization(
                  "inventory.wired_trading.requirements.indicator.met",
                )))
          : this.requirementsMetHtml != null &&
            (this.requirementsMetHtml.text = this.localization.getLocalization(
              "inventory.wired_trading.requirements.indicator.not_met",
            )),
      this.requirementsMetHtml != null && this._r2e167949bebd39(this.requirementsMetHtml),
      this.requirementsMetIcon != null &&
        (this.requirementsMetIcon.assetUri = e ? "common_check_mark" : "common_cross_mark"),
      this.additionalTextHtml != null &&
        ((this.additionalTextHtml.visible = !1), this._r8e803549f52c02.rules?.type === class_4343._rca36b8a1fa6523))
    ) {
      this.additionalTextHtml.visible = !0;
      let t = this._r8e803549f52c02.isPaymentOnly()
        ? "inventory.wired_trading.requirements.auto_mode_hint_payment"
        : "inventory.wired_trading.requirements.auto_mode_hint_trade";
      ((this.additionalTextHtml.text = this.localization.getLocalizationWithParams(
        t,
        "",
        "amount",
        String(this._r8e803549f52c02.rules._r3a143a83eb1a1b),
      )),
        this._r2e167949bebd39(this.additionalTextHtml));
    }
    (this._r7aa5fcc04cf4ec(), this._rb3b82034634b89());
  }
  _ra83cb240bf3b47() {
    this.highlight();
  }
  dispose() {
    this._disposed ||
      (this.clear(),
      this._transitionTimer != null &&
        (this._transitionTimer.reset(),
        this._transitionTimer.removeEventListener(DeBouncer.addEventListener, this._r3e4619ebf51059),
        this._transitionTimer.removeEventListener(DeBouncer._rf33144eac61595, this._r732fd02dded7b6),
        (this._transitionTimer = null)),
      this.youGiveContainer != null &&
        this._r2c9d4eeb5f9c7e != null &&
        this.youGiveContainer.addChild(this._r2c9d4eeb5f9c7e),
      this.requirementsButton?.removeEventListener(u.CLICK, this._rd8b57816e477fe),
      (this._r2c9d4eeb5f9c7e = null),
      (this._rb63197e10e4aa5 = null),
      (this.var_38 = null),
      (this._r8e803549f52c02 = null),
      (this._disposed = !0));
  }
  claimRequirementsBubble() {
    let e = this._r5a2088db32911f.getWindowContainer();
    ((this._rb63197e10e4aa5 = e?.findChildByName("trade_requirements_bubble")),
      this._rb63197e10e4aa5 != null && ((this._rb63197e10e4aa5.visible = !1), this._rb3b82034634b89()));
  }
  static _offeringsTemplate(e) {
    let r = a.var_3559.pop();
    return r ?? new bQ(e?.clone());
  }
  static _rf3483384bef79a(e) {
    (e.recycle(), a.var_3559.push(e));
  }
  _rd8b57816e477fe = n(() => {
    this.toggleVisibility();
  }, "_rd8b57816e477fe");
  toggleVisibility() {
    this._rb63197e10e4aa5 != null && (this._rb63197e10e4aa5.visible = !this._rb63197e10e4aa5.visible);
  }
  _rb3b82034634b89() {
    let e = this.requirementsButton;
    this._rb63197e10e4aa5 == null ||
      e == null ||
      ((this._rb63197e10e4aa5.x = e.x + e.width + 4),
      (this._rb63197e10e4aa5.y = e.y + e.height / 2 - this._rb63197e10e4aa5.height / 2));
  }
  clear() {
    (this._rd0bfba5db3edd7 != null &&
      (this.youGiveContainer != null &&
        this._rd0bfba5db3edd7.window != null &&
        this.youGiveContainer.removeChild(this._rd0bfba5db3edd7.window),
      a._rf3483384bef79a(this._rd0bfba5db3edd7),
      (this._rd0bfba5db3edd7 = null)),
      this._ra5a7980dd8bb88 != null &&
        (this.youGetContainer != null &&
          this._ra5a7980dd8bb88.window != null &&
          this.youGetContainer.removeChild(this._ra5a7980dd8bb88.window),
        a._rf3483384bef79a(this._ra5a7980dd8bb88),
        (this._ra5a7980dd8bb88 = null)),
      (this._r8e803549f52c02 = null));
  }
  _r7aa5fcc04cf4ec() {
    let e = a.NORMAL_BORDER_WIDTH;
    (this.youGiveContainer?.visible &&
      this.youGetContainer?.visible &&
      this._rd0bfba5db3edd7?._r8c660db17e5d0a &&
      this._ra5a7980dd8bb88?._r8c660db17e5d0a &&
      (e = a.MINIMALIZED_BORDER_WIDTH),
      this.youGiveContainer != null && (this.youGiveContainer.width = e),
      this.youGetContainer != null && (this.youGetContainer.width = e));
    let r = this._rd0bfba5db3edd7?._r11979079a9869d ?? 0;
    ((this._ra5a7980dd8bb88?._r11979079a9869d ?? 0) > r && (r = this._ra5a7980dd8bb88?._r11979079a9869d ?? r),
      (r += 2 * a.BORDER_TOP_BOTTOM_OFFSET),
      r < a.MIN_BORDER_HEIGHT && (r = a.MIN_BORDER_HEIGHT),
      this.offeringContainersSeparator != null && (this.offeringContainersSeparator.height = r),
      (r += this._r5aaf29fa29a183),
      this.youGiveContainer != null && (this.youGiveContainer.height = r),
      this.youGetContainer != null && (this.youGetContainer.height = r),
      this._rd0bfba5db3edd7?.centerActiveElement(),
      this._ra5a7980dd8bb88?.centerActiveElement());
  }
  _r2e167949bebd39(e) {
    e.height = e._r99f9b16cafb2f2 * 15 + 2;
  }
  initializeStretchingWithParent(e, r = !0) {
    e != null &&
      (r && e.parent != null && ((e.width = e.parent.width), (e.height = e.parent.height)),
      e.setParamFlag(N._rf567d650b39a78, r),
      e.setParamFlag(N._r46a9ac2e4c9863, r));
  }
  static easeInOutCubic(e, r, t, i) {
    let s = e / i,
      o = -(s * 1.75 - 0.7) * (s * 1.75 - 0.7) + 1;
    return r + t * o;
  }
  highlight() {
    this._transitionTimer?.running && this._transitionTimer.stop();
    let e = this.highlightBorder;
    if (e == null) return;
    let r = 500,
      t = 1e3 / 60,
      i = r / t;
    ((e.visible = !0),
      (e.blend = 0),
      this._transitionTimer != null
        ? this._transitionTimer.reset()
        : ((this._transitionTimer = new UnkEventDispatcherWrapperSubclass_05394e(t, i)),
          this._transitionTimer.addEventListener(DeBouncer.addEventListener, this._r3e4619ebf51059),
          this._transitionTimer.addEventListener(DeBouncer._rf33144eac61595, this._r732fd02dded7b6)),
      this._transitionTimer.start());
  }
  _r3e4619ebf51059 = n(() => {
    this._transitionTimer == null ||
      this.highlightBorder == null ||
      (this.highlightBorder.blend = a.easeInOutCubic(
        this._transitionTimer._rdf3dbbec26e6b1,
        0,
        0.35,
        this._transitionTimer.repeatCount,
      ));
  }, "_r3e4619ebf51059");
  _r732fd02dded7b6 = n(() => {
    this.highlightBorder != null && (this.highlightBorder.visible = !1);
  }, "_r732fd02dded7b6");
  get localization() {
    return this._r5a2088db32911f.localization;
  }
  get requirementsButton() {
    return this.var_38?._r5a2088db32911f._r1e6236f9a053f8?.requirementsButton ?? null;
  }
  get bubbleTitle() {
    return this._rb63197e10e4aa5?.findChildByName("bubble_title");
  }
  get highlightBorder() {
    return this._rb63197e10e4aa5?.findChildByName("highlight_border");
  }
  get youGiveContainer() {
    return this._rb63197e10e4aa5?.findChildByName("you_give_container");
  }
  get offeringContainersSeparator() {
    return this._rb63197e10e4aa5?.findChildByName("offering_containers_separator");
  }
  get youGetContainer() {
    return this._rb63197e10e4aa5?.findChildByName("you_get_container");
  }
  get requirementsMetHtml() {
    return this._rb63197e10e4aa5?.findChildByName("req_met_text");
  }
  get requirementsMetIcon() {
    return this._rb63197e10e4aa5?.findChildByName("req_met_icon");
  }
  get additionalTextHtml() {
    return this._rb63197e10e4aa5?.findChildByName("additional_text");
  }
  get disclaimerTextHtml() {
    return this._rb63197e10e4aa5?.findChildByName("disclaimer_text");
  }
}
