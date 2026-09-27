// Extracted from HabboAirLauncher.deobf.js, line 187054.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/special_items_display/SpecialItemsController.as
// Obfuscated name: _id40d4536cc14db

class a extends ue {
  static {
    n(this, "SpecialItemsController");
  }
  static ITEM_TYPE_FURNI = "furni";
  static CLAIM_STATE_NOT_APPLICABLE = 0;
  static CLAIM_STATE_FETCHING = 1;
  static CLAIM_STATE_BROWSING = 2;
  static CLAIM_STATE_CLAIMABLE = 3;
  static CLAIM_STATE_CLAIMED = 4;
  _key = "";
  _items = [];
  _freeClaim = "";
  _r6ccb8ce9dd56d3 = a.CLAIM_STATE_NOT_APPLICABLE;
  _view = null;
  constructor(e, r = 0, t = null) {
    super(e, r, t);
  }
  get dependencies() {
    return super.dependencies.concat([
      new ComponentDependency(new IIDSessionDataManager(), (e) => {
        this._sessionDataManager = e;
      }),
      new ComponentDependency(new IIDHabboWindowManager(), (e) => {
        this._windowManager = e;
      }),
      new ComponentDependency(new IIDHabboLocalizationManager(), (e) => {
        this._localizationManager = e;
      }),
      new ComponentDependency(
        new IIDRoomEngine(),
        (e) => {
          this._roomEngine = e;
        },
        !1,
      ),
      new ComponentDependency(new IIDHabboCatalog(), (e) => {
        this._catalog = e;
      }),
      new ComponentDependency(new IIDHabboCommunicationManager(), (e) => {
        this._communication = e;
      }),
    ]);
  }
  initComponent() {
    let e = n((r) => this.onHasClaimedProductResponse(r), "_i86f27b2cdc88eb");
    (this.context._r7e43d9f4706607(this), (this._messageEvents = [new class_2859(e)]));
    for (let r of this._messageEvents) this.addMessageEvent(r);
  }
  get linkPattern() {
    return "special_items_display/";
  }
  linkReceived(e) {
    let r = e.split("/");
    r.length < 2 || ((this._key = r[1] ?? ""), this.initialize());
  }
  initialize() {
    this.parseSpecialItems() &&
      (this._freeClaim.length > 0
        ? ((this._r6ccb8ce9dd56d3 = a.CLAIM_STATE_FETCHING),
          this._communication?.connection?.send(new UnkMessageComposer_1args_efb9c5(this._freeClaim)))
        : (this._r6ccb8ce9dd56d3 = a.CLAIM_STATE_NOT_APPLICABLE),
      this.openView());
  }
  _r08d284c3336eba() {
    this._freeClaim.length === 0 ||
      this._r6ccb8ce9dd56d3 !== a.CLAIM_STATE_BROWSING ||
      ((this._r6ccb8ce9dd56d3 = a.CLAIM_STATE_CLAIMABLE),
      this._view?.isShowing() && this._view.updateClaimState());
  }
  _r58e83b7bd599ce() {
    this._freeClaim.length !== 0 &&
      ((this._r6ccb8ce9dd56d3 !== a.CLAIM_STATE_CLAIMABLE && this._r6ccb8ce9dd56d3 !== a.CLAIM_STATE_BROWSING) ||
        (this._communication?.connection?.send(new UnkMessageComposer_1args_61003c(this._freeClaim)),
        (this._r6ccb8ce9dd56d3 = a.CLAIM_STATE_CLAIMED),
        this._view?.isShowing() && this._view.updateClaimState()));
  }
  addMessageEvent(e) {
    this._communication?._r2e106e2349a0b6(e);
  }
  removeMessageEvent(e) {
    this._communication?._r7668362bf55fdd(e);
  }
  get catalog() {
    return this._catalog;
  }
  get localizationManager() {
    return this._localizationManager;
  }
  get sessionDataManager() {
    return this._sessionDataManager;
  }
  get windowManager() {
    return this._windowManager;
  }
  get roomEngine() {
    return this._roomEngine;
  }
  get key() {
    return this._key;
  }
  get items() {
    return this._items;
  }
  get _r61922ccea07ab3() {
    return this._r6ccb8ce9dd56d3;
  }
  get view() {
    return this._view;
  }
  dispose() {
    if (!this.disposed) {
      (this._view?.dispose(), (this._view = null));
      for (let e of this._messageEvents ?? []) this.removeMessageEvent(e);
      ((this._messageEvents = null),
        (this._catalog = null),
        (this._sessionDataManager = null),
        (this._communication = null),
        (this._windowManager = null),
        (this._localizationManager = null),
        (this._roomEngine = null),
        super.dispose());
    }
  }
  onHasClaimedProductResponse(e) {
    let r = e.getParser();
    r?.claimId !== this._freeClaim ||
      this._r6ccb8ce9dd56d3 !== a.CLAIM_STATE_FETCHING ||
      ((this._r6ccb8ce9dd56d3 = r._r94c576b7cbc573 ? a.CLAIM_STATE_CLAIMED : a.CLAIM_STATE_BROWSING),
      this._view?.isShowing() && this._view.updateClaimState());
  }
  parseSpecialItems() {
    let e = [],
      t = this.getProperty(`special_items.${this._key}.items`).split(";"),
      i = 0;
    for (let s of t) {
      let o = s.split(",", 3),
        d = o[0] ?? "",
        c = o[1] ?? "",
        f = o[2] ?? "",
        l = null;
      switch (c) {
        case a.ITEM_TYPE_FURNI:
          l = new FurniSpecialItem(i, this._key, d, this, f);
          break;
      }
      l?.isValid && (e.push(l), (i += 1));
    }
    return (
      (this._items = e),
      (this._freeClaim = this.getProperty(`special_items.${this._key}.free_claim`)),
      e.length > 0
    );
  }
  openView() {
    (this._view == null && (this._view = new e5e(this)),
      this._view.displayNewData(),
      this._view.isShowing() || this._view.show());
  }
}
