// Extracted from HabboAirLauncher.deobf.js, line 372708.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_trading/chests/subcontrollers/CoinChestSubController.as
// Obfuscated name: _i670b609d82d317

class a extends AbstractChestSubController {
  static {
    n(this, "CoinChestSubController");
  }
  static _r512634eaae4083 = ["wf_storage_coins1"];
  static CHEST_STATES = a.initChestStates();
  static initChestStates() {
    let e = new B();
    return (e.add(0, "zero"), e.add(1, "low"), e.add(20, "medium"), e.add(100, "high"), e);
  }
  _view;
  var_1903 = 0;
  _chestState = "";
  _r67dbc1667780e4 = "";
  _classNameCache = null;
  constructor(e) {
    (super(e),
      (this._view = this._r41f5cc7d3516ce.getXmlWindow("coins_chest_contents")),
      this.addMessageEvent(new class_3742((r) => this.onCoinsMessage(r))),
      (this.withdrawInput.restrict = "0-9"),
      this.withdrawButton.addEventListener(u.CLICK, this.onWithdrawClick));
  }
  onWithdrawClick = n(() => {
    let e = Number.parseInt(this.withdrawInput.text, 10);
    Number.isNaN(e) || this.getFloorItemData.send(new UnkMessageComposer_2args_40e657(this._r154af520fc218d, e));
  }, "onWithdrawClick");
  onCoinsMessage(e) {
    let r = ClassUtils.getParser(e, class_4293);
    if (r == null) return;
    let t = r.chestId;
    if (r._r3534d65bc0f7d5) {
      if (this.getFloorItemData._r236c55808e31eb !== t) return;
      this.var_1903 = r.coins;
    } else {
      if (this.getFloorItemData._rd69e246bd6e5cf !== t) return;
      ((this.var_1903 = r.coins),
        (this._chestState = a.CHEST_STATES.getValue(0)),
        (this._classNameCache = null),
        this.getFloorItemData._rd408b13d550952(t, this));
    }
    ((this.coinAmountText.text = String(r.coins)),
      (this.balanceContainerList.x = this.balanceContainerList.parent.width / 2 - this.balanceContainerList.width / 2),
      (this._chestState = a.CHEST_STATES.getValue(0)));
    for (let i of a.CHEST_STATES.getKeys())
      r.coins >= i && (this._chestState = a.CHEST_STATES.getValue(i));
    ((this.backgroundImage.assetUri = `wired_chests_images_${this._r67dbc1667780e4}_coins_chest_balance_${this._chestState}`),
      this._ra76f57f5f89268.updateUI());
  }
  get type() {
    return class_4148.TYPE_COIN;
  }
  get title() {
    return this.localize("wiredchests.coin_chest");
  }
  get view() {
    return this._view;
  }
  get isEmpty() {
    return this.var_1903 <= 0;
  }
  get itemCount() {
    return this.var_1903;
  }
  clear() {
    ((this.var_1903 = 0), super.clear());
  }
  updateUI() {
    (we.disableSection(this.withdrawButton, !this.canWithdraw || this.isEmpty),
      (this._r67dbc1667780e4 = a._r512634eaae4083.indexOf(this.className) !== -1 ? "dark" : "light"),
      (this.backgroundImage.assetUri = `wired_chests_images_${this._r67dbc1667780e4}_coins_chest_balance_${this._chestState}`));
  }
  get className() {
    if (this._classNameCache != null) return this._classNameCache;
    if (this._ra76f57f5f89268._r039727dcdb4f36 == null)
      return ((this._classNameCache = ""), this._classNameCache);
    let e =
        this._ra76f57f5f89268._r039727dcdb4f36.getStringToStringMap()?._ra3dc9a405b5c73(RoomObjectVariableEnum.const_191) ?? 0,
      r = this.getFloorItemData.sessionDataManager.getFloorItemData(e);
    return r == null
      ? ((this._classNameCache = ""), this._classNameCache)
      : ((this._classNameCache = r.className), this._classNameCache);
  }
  get _r66a1da9835e6c4() {
    return !1;
  }
  dispose() {
    this.disposed || (this._view?.dispose(), (this._view = null), super.dispose());
  }
  get coinAmountText() {
    return this._view.findChildByName("coins_amount_txt");
  }
  get balanceContainerList() {
    return this._view.findChildByName("balance_container");
  }
  get backgroundImage() {
    return this._view.findChildByName("bg_img");
  }
  get withdrawInput() {
    return this._view.findChildByName("withdraw_input");
  }
  get withdrawButton() {
    return this._view.findChildByName("withdraw_btn");
  }
}
