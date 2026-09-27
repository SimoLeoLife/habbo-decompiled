// Estratto da HabboAirLauncher.deobf.js, riga 195307.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/SpinnerCatalogWidget.as
// Nome offuscato: _i1740dc4d4a05d8

class a extends CatalogWidget {
  static {
    n(this, "SpinnerCatalogWidget");
  }
  static SPIN_BUTTONDOWN_HOLD_VALUE_STEP_DELAY_MS = 75;
  static const_1365 = 35;
  _catalog;
  _value = 1;
  name_3 = 1;
  name_4 = 100;
  var_991 = null;
  _r0f7d59e0e95698 = !1;
  _r0e0923f7d0daa6 = !1;
  _r28bb7e514311d2 = !1;
  _r382f96b8e3e97c = 1;
  var_2741 = [];
  _rb52710dbb0ac27 = null;
  constructor(e, r) {
    (super(e), (this._catalog = r));
  }
  init() {
    return super.init()
      ? (this._rd7318259311b4b(CatalogWidgetEnum.SPINNER),
        this.window != null && ((this.window.visible = !1), (this.window.procedure = this._r63098f24f7fea7)),
        this._catalog.multiplePurchaseEnabled &&
          (this.window
            ?.findChildByName("text_value")
            ?.addEventListener(sr.const_900, this._rf4cc61a4937b14),
          this.events?.addEventListener?.(CatalogWidgetSpinnerEvent.RESET, this._r26a34be8f3e20b),
          this.events?.addEventListener?.(CatalogWidgetSpinnerEvent.SHOW, this._r9ea7de2c6a2f03),
          this.events?.addEventListener?.(CatalogWidgetSpinnerEvent.HIDE, this._r59caeaad847e0b),
          this.events?.addEventListener?.(CatalogWidgetSpinnerEvent.const_735, this._r350e2593e4fbc1),
          this.events?.addEventListener?.(CatalogWidgetSpinnerEvent.SET_MIN, this._r8ca17ac44cf087),
          (this.var_991 = new _i05394ecc0c0c4d(a.SPIN_BUTTONDOWN_HOLD_VALUE_STEP_DELAY_MS)),
          this.var_991.addEventListener(DeBouncer.addEventListener, this.onSpinnerTimerEvent),
          (this._rb52710dbb0ac27 = this.window?.findChildByName("promo.info") ?? null)),
        !0)
      : !1;
  }
  dispose() {
    (this.disposed ||
      (this.var_991?.stop(),
      this.var_991?.removeEventListener(DeBouncer.addEventListener, this.onSpinnerTimerEvent),
      (this.var_991 = null),
      this.window
        ?.findChildByName("text_value")
        ?.removeEventListener(sr.const_900, this._rf4cc61a4937b14),
      this.events?.removeEventListener?.(CatalogWidgetSpinnerEvent.RESET, this._r26a34be8f3e20b),
      this.events?.removeEventListener?.(CatalogWidgetSpinnerEvent.SHOW, this._r9ea7de2c6a2f03),
      this.events?.removeEventListener?.(CatalogWidgetSpinnerEvent.HIDE, this._r59caeaad847e0b),
      this.events?.removeEventListener?.(CatalogWidgetSpinnerEvent.const_735, this._r350e2593e4fbc1),
      this.events?.removeEventListener?.(CatalogWidgetSpinnerEvent.SET_MIN, this._r8ca17ac44cf087)),
      super.dispose());
  }
  refresh() {
    if (
      ((this._value = Math.max(this._value, this.name_3)),
      (this._value = Math.min(this._value, this.name_4)),
      this.events?.dispatchEvent?.(new CatalogWidgetSpinnerEvent(CatalogWidgetSpinnerEvent.VALUE_CHANGED, this._value)),
      this.setValueText(String(this._value)),
      this._rb52710dbb0ac27 != null && this._catalog._promoInfo)
    ) {
      let e = this._catalog.utils._r98742a906d6f96(this._value),
        r = this.window?.findChildByName("discountContainer");
      (r != null && (r.visible = e > 0),
        this._catalog.localization?._r43eae9731f5b27("shop.bonus.items.count", "amount", String(e)));
    }
  }
  _r7943d784fdd9b5() {
    let e = this._value + 1;
    for (; this.var_2741.indexOf(e) !== -1;) e++;
    this._value = e;
  }
  _r6e9153dd88dbc7() {
    let e = this._value - 1;
    for (; this.var_2741.indexOf(e) !== -1;) e--;
    this._value = e;
  }
  setValueText(e) {
    let r = this._window?.findChildByName("text_value");
    r != null && (r.caption = e);
  }
  _r26a34be8f3e20b = n((e) => {
    ((this._value = e.value), (this.var_2741 = e.skipSteps ?? []), this.refresh());
  }, "_r26a34be8f3e20b");
  _r9ea7de2c6a2f03 = n((e) => {
    this.window != null && (this.window.visible = !0);
  }, "_r9ea7de2c6a2f03");
  _r59caeaad847e0b = n((e) => {
    this.window != null && (this.window.visible = !1);
  }, "_r59caeaad847e0b");
  _r350e2593e4fbc1 = n((e) => {
    this.name_4 = e.value;
  }, "_r350e2593e4fbc1");
  _r8ca17ac44cf087 = n((e) => {
    this.name_3 = e.value;
  }, "_r8ca17ac44cf087");
  onSpinnerTimerEvent = n((e) => {
    this.disposed ||
      ((this._r28bb7e514311d2 = !0),
      this._r0f7d59e0e95698 &&
        (this._r7943d784fdd9b5(),
        this._value - this._r382f96b8e3e97c > a.const_1365 && this._r7943d784fdd9b5()),
      this._r0e0923f7d0daa6 &&
        (this._r6e9153dd88dbc7(),
        this._r382f96b8e3e97c - this._value > a.const_1365 && this._r6e9153dd88dbc7()),
      this.refresh());
  }, "onSpinnerTimerEvent");
  _r63098f24f7fea7 = n((e) => {
    if (e.type !== u.CLICK && e.type !== u.DOWN && e.type !== u.UP && e.type !== u.UP_OUTSIDE) return;
    let r = e.target;
    if (r != null)
      switch (r.name) {
        case "button_less":
          switch (e.type) {
            case u.DOWN:
              ((this._r0e0923f7d0daa6 = !0),
                (this._r382f96b8e3e97c = this._value),
                this.var_991?.start());
              break;
            case u.UP:
            case u.UP_OUTSIDE:
              ((this._r0e0923f7d0daa6 = !1), this.var_991?.stop());
              break;
            case u.CLICK:
              (this._r28bb7e514311d2 || this._r6e9153dd88dbc7(),
                this.refresh(),
                (this._r28bb7e514311d2 = !1));
              break;
          }
          break;
        case "button_more":
          switch (e.type) {
            case u.DOWN:
              ((this._r0f7d59e0e95698 = !0),
                (this._r382f96b8e3e97c = this._value),
                this.var_991?.start());
              break;
            case u.UP:
            case u.UP_OUTSIDE:
              ((this._r0f7d59e0e95698 = !1), this.var_991?.stop());
              break;
            case u.CLICK:
              (this._r28bb7e514311d2 || this._r7943d784fdd9b5(),
                this.refresh(),
                (this._r28bb7e514311d2 = !1));
              break;
          }
          break;
      }
  }, "_r63098f24f7fea7");
  _rf4cc61a4937b14 = n((e) => {
    let r = e.target,
      t = Number.parseInt(r?.caption ?? "", 10);
    Number.isNaN(t) || ((this._value = t), this.refresh());
  }, "_rf4cc61a4937b14");
}
