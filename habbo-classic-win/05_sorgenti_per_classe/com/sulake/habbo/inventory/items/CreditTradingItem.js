// Extracted from HabboAirLauncher.deobf.js, line 237220.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/inventory/items/CreditTradingItem.as
// Obfuscated name: _i8bd67609db18c3

class a extends cQ {
  constructor(r, t, i, s) {
    super(r, 0, class_1901.CREDIT_FURNI, i, !1, new mi(), Number.NaN, a._rbced4079c8b965(t), !1, "center");
    this._assets = t;
    this._ra4e299d8276f31 = s;
  }
  static {
    n(this, "CreditTradingItem");
  }
  static THUMB_WINDOW_LAYOUT = "inventory_thumb_credits_xml";
  dispose() {
    ((this._assets = null), super.dispose());
  }
  getItemTooltipText() {
    return "${purse_coins}";
  }
  _r6da3b69712f70a() {
    return this._ra4e299d8276f31;
  }
  get isGroupable() {
    return !0;
  }
  _rafb6b19888a65c() {
    return this._r6da3b69712f70a();
  }
  _r4f43a2c8b314a4() {
    return this._r6da3b69712f70a();
  }
  _r540b7d76237e1f() {
    return 1;
  }
  createWindow() {
    this._window = this.var_38._rd826d7115c1be7(a.THUMB_WINDOW_LAYOUT);
  }
  static _rbced4079c8b965(r) {
    return r?.getAssetByName("inventory_furni_icon_credits")?.content?.clone() ?? null;
  }
}
