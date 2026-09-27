// Estratto da HabboAirLauncher.deobf.js, riga 325760.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/roomtools/RoomToolsInfoCtrl.as
// Nome offuscato: _id442b9f2ff4cc7

class a extends RoomToolsCtrlBase {
  static {
    n(this, "RoomToolsInfoCtrl");
  }
  static MARGIN = 12;
  static TAG_COLOR = 1800619;
  static TAG_COLOR_HOVER = 4696294;
  _r9179f51dd9e0fa = [];
  _r47db2bfc974a3b = null;
  constructor(e, r, t) {
    super(e, r, t);
  }
  showRoomInfo(e, r, t, i) {
    if (this._window == null) {
      let s = this._assets?.getAssetByName("room_tools_info_xml")?.content;
      if (
        ((this._window = s != null ? this.var_17?.windowManager?.buildFromXML(s) : null),
        this._window == null)
      )
        return;
      ((this._window.procedure = this.onWindowEvent),
        this._window.addEventListener(u.OVER, this.onWindowEvent),
        this._window.addEventListener(u.OUT, this.onWindowEvent));
    }
    (this._r29ee9e5815d628(),
      this._r61a7436ffcef19(),
      (this.var_223 = !0),
      this.updatePosition(),
      (this._window.findChildByName("room_name").caption = r),
      (this._window.findChildByName("room_owner").caption = t),
      i != null &&
        ((this._r9179f51dd9e0fa = i),
        (this._window.findChildByName("tag1_border").visible = i.length >= 1),
        (this._window.findChildByName("tag2_border").visible = i.length >= 2),
        i.length >= 1 &&
          (this._window.findChildByName("tag1").caption = `#${this.trimTag(i[0])}`),
        i.length >= 2 &&
          (this._window.findChildByName("tag2").caption = `#${this.trimTag(i[1])}`),
        this.setCollapsed(!1)));
  }
  updatePosition() {
    if (this._window == null) return;
    let e =
        (this.var_223 ? -this._window.width : 0) +
        this.var_17._rcf65342580ee18() +
        a.MARGIN,
      r = this._window.desktop.height - RoomToolsCtrlBase.DISTANCE_FROM_BOTTOM - this._window.height,
      t = this.var_17.getChatInputY();
    (t < r + this._window.height && (r = t - this._window.height - a.MARGIN),
      (this._window.position = new E(e, r)));
  }
  hide() {
    (this._r29ee9e5815d628(),
      (this.var_223 = !0),
      this.updatePosition(),
      this._window?.visible && (this._window.visible = !1));
  }
  setCollapsed(e) {
    if (
      this.var_223 === e ||
      ((this.var_223 = e),
      this.var_223 || this._r85ef1af7aa9b4b(),
      this._window == null)
    )
      return;
    this._window.visible = !0;
    let r =
      (this.var_223 ? -this._window.width : 0) +
      this.var_17._rcf65342580ee18() +
      a.MARGIN;
    (this._r29ee9e5815d628(),
      (this._r47db2bfc974a3b = new _iebb480f306747f(
        new _i7dc350c0d8a790(new _i67c9fd08696d20(this._window, RoomToolsCtrlBase.const_1320, r, this._window.y), 1),
        new _ic903bebd8997c3(this._r0043e7291c3eaf),
      )),
      us.DropBounce(this._r47db2bfc974a3b));
  }
  _rf67102dd6ce352(e) {
    this._window != null &&
      (this.setCollapsed(e),
      this._r29ee9e5815d628(),
      (this._r47db2bfc974a3b = new _i7dc350c0d8a790(
        new _i67c9fd08696d20(
          this._window,
          RoomToolsCtrlBase.const_1320,
          this.var_17._rcf65342580ee18() + a.MARGIN,
          this._window.y,
        ),
        1,
      )),
      us.DropBounce(this._r47db2bfc974a3b));
  }
  get right() {
    return this._window != null ? this._window.width + this._window.x : 0;
  }
  _r29ee9e5815d628() {
    this._r47db2bfc974a3b != null &&
      (us._ra35d4cb6bea218(this._r47db2bfc974a3b), (this._r47db2bfc974a3b = null));
  }
  _r0043e7291c3eaf = n((e) => {
    ((this._r47db2bfc974a3b = null),
      this.var_223 && this._window != null && (this._window.visible = !1));
  }, "_r0043e7291c3eaf");
  trimTag(e) {
    return e.length > 16 ? `${e.slice(0, 16)}...` : e;
  }
  onWindowEvent = n((e, r) => {
    if (e.type === y.const_411) {
      this.updatePosition();
      return;
    }
    switch (e.type) {
      case u.CLICK:
        this.setCollapsed(!0);
        break;
      case u.OVER:
        this._r6f672a0f6ac3b6();
        break;
      case u.OUT:
        this._r999d9c31dd995e();
        break;
    }
    if (!(e instanceof u) || this._window == null) return;
    let t = null,
      i = "";
    if (
      (r.name === "tag1_region"
        ? ((t = this._window.findChildByName("tag1")), (i = this._r9179f51dd9e0fa[0] ?? ""))
        : r.name === "tag2_region" &&
          ((t = this._window.findChildByName("tag2")), (i = this._r9179f51dd9e0fa[1] ?? "")),
      t != null)
    )
      switch (e.type) {
        case u.HOVERING:
        case u.OVER:
          t.textColor = a.TAG_COLOR_HOVER;
          break;
        case u.OUT:
          t.textColor = a.TAG_COLOR;
          break;
        case u.CLICK:
          this.handler?.navigator?.performTagSearch(i);
          break;
      }
  }, "onWindowEvent");
}
