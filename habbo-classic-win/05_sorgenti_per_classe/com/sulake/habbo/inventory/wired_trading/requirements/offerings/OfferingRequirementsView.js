// Estratto da HabboAirLauncher.deobf.js, riga 243799.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/inventory/wired_trading/requirements/offerings/OfferingRequirementsView.as
// Nome offuscato: _if4d7201e223f85

class a {
  constructor(e) {
    this._window = e;
    this._r5ce51187f958c8 = this.rulesList?.removeListItemAt(0);
  }
  static {
    n(this, "OfferingRequirementsView");
  }
  static _r1c2068bf706ce9 = [];
  static TYPE_GIVE = 0;
  static TYPE_RECEIVE = 1;
  _disposed = !1;
  var_793 = null;
  var_1011 = 0;
  var_1855 = 0;
  _r5ce51187f958c8 = null;
  _rules = null;
  _text = null;
  _rabf0f30ceedadd = !1;
  var_413 = null;
  var_799 = [];
  get disposed() {
    return this._disposed;
  }
  get _r8c660db17e5d0a() {
    return this._rabf0f30ceedadd;
  }
  get _r11979079a9869d() {
    return this.var_413?.height ?? 0;
  }
  get window() {
    return this._window;
  }
  initialize(e, r, t, i, s) {
    ((this.var_793 = e),
      (this.var_1011 = r),
      (this._rules = t),
      (this._text = i),
      (this.var_1855 = s),
      (this.var_799 = []));
    for (let o = 0; o < (t?.length ?? 0); o++) {
      let d = t?.[o];
      if (d == null || this._r5ce51187f958c8 == null) continue;
      let c = a._r02a3dc7c8f7d3c(this._r5ce51187f958c8);
      (c.initialize(e, this, d, o), this.var_799.push(c));
    }
    this.initializeUI();
  }
  recycle() {
    ((this.var_793 = null),
      (this.var_1011 = 0),
      (this._rules = null),
      (this._text = null),
      (this.var_1855 = 0));
    for (let e of this.var_799) {
      let r = e.window?.parent;
      (r != null && e.window != null && r.removeChild(e.window), a.releaseRuleView(e));
    }
    ((this.var_799 = []), this.rulesList?.removeListItems());
  }
  centerActiveElement() {
    this.var_413 == null ||
      this.requirementsBorder == null ||
      ((this.var_413.y = this.requirementsBorder.height / 2 - this.var_413.height / 2),
      this.var_1011 === jf.var_3917 &&
        this.var_799.length === 1 &&
        this.var_799[0]?.center(this.requirementsBorder.width - (this.rulesList?.x ?? 0) * 2));
  }
  dispose() {
    if (!this._disposed) {
      this.rulesList?.removeListItems();
      for (let e of this.var_799) a.releaseRuleView(e);
      ((this.var_799 = []),
        (this.var_793 = null),
        this._window?.dispose(),
        (this._window = null),
        (this._rules = null),
        (this._text = null),
        this._r5ce51187f958c8?.dispose(),
        (this._r5ce51187f958c8 = null),
        (this._disposed = !0));
    }
  }
  get localization() {
    return this.var_793?._r5a2088db32911f.localization ?? null;
  }
  static _r02a3dc7c8f7d3c(e) {
    let r = a._r1c2068bf706ce9.pop();
    return r ?? new bpe(e.clone());
  }
  static releaseRuleView(e) {
    (e.recycle(), a._r1c2068bf706ce9.push(e));
  }
  initializeUI() {
    if (this._window != null) {
      if (
        (this.rulesList != null && (this.rulesList.visible = !1),
        this.customText != null && (this.customText.visible = !1),
        this.anyAllText != null && (this.anyAllText.visible = !1),
        this.anyCoinsText != null && (this.anyCoinsText.visible = !1),
        this.anyFurniText != null && (this.anyFurniText.visible = !1),
        (this._rabf0f30ceedadd = !1),
        (this.var_413 = null),
        this.var_1011 !== jf.var_3917 && this.var_1855 === a.TYPE_GIVE)
      )
        this.var_1011 === jf.var_5789
          ? (this.anyCoinsText != null && (this.anyCoinsText.visible = !0),
            (this.var_413 = this.anyCoinsText))
          : this.var_1011 === jf.var_5767
            ? (this.anyFurniText != null && (this.anyFurniText.visible = !0),
              (this.var_413 = this.anyFurniText))
            : this.var_1011 === jf.var_5775 &&
              (this.anyAllText != null && (this.anyAllText.visible = !0),
              (this.var_413 = this.anyAllText));
      else {
        if ((this._rules?.length ?? 0) > 0 && this.rulesList != null) {
          ((this.rulesList.visible = !0), (this.var_413 = this.rulesList));
          for (let e of this.var_799)
            e.window != null && this.rulesList.addListItem(e.window);
          this._rabf0f30ceedadd = !0;
          for (let e of this._rules ?? [])
            if ((e.nodes?.length ?? 0) !== 1) {
              this._rabf0f30ceedadd = !1;
              break;
            }
        }
        !(this.rulesList?.visible ?? !1) &&
          this._text != null &&
          this._text.length > 0 &&
          this.customText != null &&
          ((this.customText.visible = !0),
          (this.customText.text = this._text),
          (this.var_413 = this.customText),
          (this._rabf0f30ceedadd = this.customText.textWidth <= 100));
      }
      (this.title != null &&
        (this.title.text =
          this.var_1855 === a.TYPE_GIVE
            ? (this.localization?.getLocalization("inventory.wired_trading.requirements.offering") ?? "")
            : (this.localization?.getLocalization("inventory.wired_trading.requirements.receiving") ?? "")),
        this.centerActiveElement());
    }
  }
  get title() {
    return this._window?.findChildByName("offerings_title");
  }
  get requirementsBorder() {
    return this._window?.findChildByName("requirements_definition");
  }
  get rulesList() {
    return this._window?.findChildByName("rules_list");
  }
  get customText() {
    return this._window?.findChildByName("custom_text");
  }
  get anyFurniText() {
    return this._window?.findChildByName("any_furni_text");
  }
  get anyCoinsText() {
    return this._window?.findChildByName("any_coins_text");
  }
  get anyAllText() {
    return this._window?.findChildByName("any_all_text");
  }
}
