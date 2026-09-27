// Extracted from HabboAirLauncher.deobf.js, line 202484.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/freeflowchat/viewer/visualization/PooledChatBubble.as

class a extends Sprite {
  constructor(r) {
    super();
    this.var_82 = r;
    ((this.var_596 = new UnkClass_3a5c6f()),
      (this.var_1173 = new UnkClass_3a5c6f()),
      (this.var_440 = new UnkClass_3a5c6f()),
      (this.var_73 = new Pt()),
      (this._rd3f248527b7263 = new Sprite()),
      this.addEventListener(M._scrollBar, this.onAddedToStage),
      this.addEventListener(M._r4b0396f57c9367, this._rd23ba8186ebaa0));
  }
  static {
    n(this, "PooledChatBubble");
  }
  static MAX_WIDTH_DEFAULT = 300;
  static DESKTOP_MARGIN_LEFT = 85;
  static DESKTOP_MARGIN_RIGHT = 190;
  static LINEAR_INTERPOLATION_MS = 150;
  static MAX_HEIGHT = 108;
  static const_1053 = 28;
  static POINTER_DEFAULT_MARGIN_RIGHT = 15;
  static ZERO_POINT = new E(0, 0);
  var_198 = null;
  _background = null;
  var_596;
  var_1173;
  var_440;
  var_1496 = null;
  var_73;
  _style = null;
  _rd3f248527b7263;
  var_906 = 0;
  var_4456 = 0;
  var_1906 = 0;
  _r6f4eb5b2951063 = 0;
  var_5199 = 0;
  _rc1a6d08cd14fd8 = 0;
  var_4883 = 0;
  _rf1f5f172bad483 = 0;
  _r6112356986fc40 = !1;
  _r4a3fa3e4c76bcc = 0;
  _r018041b1e6ae29 = 0;
  _r1324c0d98ac9ba = !1;
  _r6a38b6a2c10c12 = !1;
  var_555 = -1;
  onAddedToStage = n((r) => {
    this.addEventListener(UnkClass_fd7c12.CLICK, this.var_734);
  }, "onAddedToStage");
  _rd23ba8186ebaa0 = n((r) => {
    this.removeEventListener(UnkClass_fd7c12.CLICK, this.var_734);
  }, "_rd23ba8186ebaa0");
  onTextLinkEvent = n((r) => {
    if (r.text.length === 0) return;
    let t = "highlight/";
    if (r.text.indexOf(t) > -1) {
      let i = r.target,
        s = new E(i?.mouseX ?? 0, i?.mouseY ?? 0),
        o = i?._r87bd5864f2eca8(s) ?? s,
        d = new D(o.x, o.y),
        c = r.text.substring(r.text.indexOf(t) + t.length);
      (this.var_82.windowManager?.hideHint(),
        this.var_82.windowManager?.showHint(c.toLocaleUpperCase(), d));
      return;
    }
    this.var_82._r6b6c989018eb05(r.text);
  }, "onTextLinkEvent");
  var_734 = n((r) => {
    this._style?.alpha ||
      this.var_198 == null ||
      this.var_82._rde8455fb19faa3(r) ||
      (this.var_82._rb9493b8bf41984(this.var_198), r.stopImmediatePropagation());
  }, "var_734");
  set _r08afc3ed230b1f(r) {
    this.var_198 = r;
  }
  set face(r) {
    this.var_1496 = r;
  }
  set style(r) {
    this._style = r;
  }
  recreate(r, t, i = !1, s = -1) {
    if (this.var_198 == null || this._style == null) return;
    ((this._background = this._style._r3abb3c4d9f4245(t)),
      (this.var_596.bitmapData = this._style.pointer),
      (this._r1324c0d98ac9ba = i));
    let o = Math.trunc(a.MAX_HEIGHT * this.var_82._re843269b33bec5),
      d = a.MAX_WIDTH_DEFAULT;
    this.var_198._r16bf11e1236c9d !== at.const_1293
      ? (d = cb.accordingToRoomChatSetting(this.var_198._r16bf11e1236c9d))
      : this.var_82._r94d9ef5efd2e7e != null &&
        (d = cb.accordingToRoomChatSetting(this.var_82._r94d9ef5efd2e7e._rf1cd22369f58e1));
    let c = d - this._style.textFieldMargins.x - this._style.textFieldMargins.width;
    ((this.var_73.width = c),
      (this.var_73.multiline = !0),
      (this.var_73.wordWrap = !0),
      (this.var_73.selectable = !1),
      (this.var_73.thickness = -15),
      (this.var_73.sharpness = 80),
      (this.var_73.antiAliasType = "advanced"),
      (this.var_73.embedFonts = !0),
      (this.var_73.gridFitType = "pixel"),
      (this.var_73.cacheAsBitmap = !this._style.allowHTML),
      (this.var_73.styleSheet = null),
      (this.var_73.defaultTextFormat = this._reaf5b87f0cad4a(
        this._style._r39fa5000b657f2,
        this.var_82._re843269b33bec5,
      )),
      (this.var_73.styleSheet = this._style.styleSheet),
      this.var_73.addEventListener(UnkClass_6d7150.LINK, this.onTextLinkEvent));
    let f = this.var_198.chatType === xr.CHAT_TYPE_SPEAK,
      l = this.var_198.chatType === xr.CHAT_TYPE_SHOUT,
      b = !f && !l && !this._style.alpha;
    this.var_73.alpha = b ? 0.6 : 1;
    let _ = `${b ? "<i>" : ""}${this._style.alpha ? "" : `<b>${r}: </b>`}`;
    if (
      ((_ += `${l ? "<b>" : ""}${this.var_198.text}${l ? "</b>" : ""}`),
      (_ += b ? "</i>" : ""),
      this.var_198.links == null || this.var_198.links[0] == null)
    )
      this.var_73.htmlText = _;
    else {
      for (let I = 0; I < this.var_198.links.length; I++) {
        let C = this.var_198.links[I];
        if (!Array.isArray(C) || !Array.isArray(C[0])) continue;
        let W = String(C[0][1] ?? "");
        _ = _.replace(`{${I}}`, `<a href="${W}">${W}</a>`);
      }
      this.var_73.htmlText = _;
    }
    this.var_555 = s;
    let h = Math.min(
        d,
        this.var_73.textWidth + this._style.textFieldMargins.x + this._style.textFieldMargins.width,
      ),
      p =
        this.var_73.textHeight +
        this._style.textFieldMargins.y +
        this._style.textFieldMargins.height,
      m = this.var_73._r99f9b16cafb2f2 > 1;
    (this._style._r16cfd05b0ddda9 || (p = Math.min(o, p)),
      s !== -1 && (p = Math.max(s, p)),
      (h = Math.max(h, this._background.width)),
      (p = Math.max(p, this._background.height)),
      (this._background.width = h),
      (this._background.height = p),
      (this._background.x = 0),
      (this._background.y = 0),
      (this._background.cacheAsBitmap = !0),
      this.addChild(this._background));
    let v = this._style._r92826090b9bdba(m),
      w = this._style.getEmblem(m);
    if (
      (v != null && w != null
        ? ((this.var_1173.bitmapData = v),
          (this.var_1173.x = w.x),
          (this.var_1173.y = w.y),
          this.addChild(this.var_1173))
        : (this.var_1173.bitmapData = null),
      !this._style.alpha &&
        this.var_596.bitmapData != null &&
        ((this.var_596.x = Math.max(
          this._style._r899d4d870cbac2(a.const_1053),
          Math.min(
            this._background.width - this._style._r65da3bd2926418(a.POINTER_DEFAULT_MARGIN_RIGHT),
            this._r4906a54bbd825f,
          ),
        )),
        (this.var_596.y = p - this._style._r7685c14b89e55a),
        this.addChild(this.var_596)),
      this.var_1496 != null && this._style.max != null)
    ) {
      let I = this.var_1496;
      (this.var_1496.height > p &&
        ((I = new A(this.var_1496.width, p, !0, 0)),
        I.copyPixels(
          this.var_1496,
          new D(0, this.var_1496.height - p, this.var_1496.width, p),
          new E(0, 0),
        )),
        (this.var_440.bitmapData = I),
        (this.var_440.x = this._style.max.x - I.width / 2),
        (this.var_440.y = Math.max(1, this._style.max.y - I.height / 2)),
        this.addChild(this.var_440));
    }
    ((this.var_73.width = Math.min(
      c,
      this.var_73.textWidth + this._style.textFieldMargins.width,
    )),
      (this.var_73.height = this.var_73.textHeight + this._style.textFieldMargins.height),
      (this.var_73.x = this._style.textFieldMargins.x),
      (this.var_73.y = this._style.textFieldMargins.y),
      this.addChild(this.var_73),
      !this._style._r16cfd05b0ddda9 && this.var_73.textHeight > o
        ? (this._rd3f248527b7263.graphics.clear(),
          this._rd3f248527b7263.graphics.beginFill(16777215),
          this._rd3f248527b7263.graphics.drawRect(
            0,
            0,
            this.var_73.textWidth + 5,
            o - this._style.textFieldMargins.height,
          ),
          this._rd3f248527b7263.graphics.endFill(),
          (this.var_73.mask = this._rd3f248527b7263),
          this.addChild(this._rd3f248527b7263),
          (this._rd3f248527b7263.x = this.var_73.x),
          (this._rd3f248527b7263.y = this.var_73.y))
        : (this._rd3f248527b7263.graphics.clear(), (this.var_73.mask = null)),
      this._style.mask &&
        this.var_440.bitmapData != null &&
        ((this.var_440.y = Math.max(
          1,
          this.height / 2 - this.var_440.bitmapData.height / 2,
        )),
        (this.var_440.x -= 0.5),
        this._style.alpha || (this.var_440.y -= this.var_596.height / 2 - 1)),
      (this.cacheAsBitmap = !this._style.allowHTML),
      (this._r6112356986fc40 = !1),
      (this.var_906 = 0),
      (this.visible = !1));
  }
  unregister() {
    ((this.cacheAsBitmap = !1),
      this.removeEventListener(UnkClass_fd7c12.CLICK, this.var_734),
      this._rd3f248527b7263.parent === this && this.removeChild(this._rd3f248527b7263),
      this.var_73.parent === this && this.removeChild(this.var_73),
      this.var_440.parent === this &&
        (this.removeChild(this.var_440), (this.var_440.bitmapData = null)),
      this.var_1173.parent === this &&
        (this.removeChild(this.var_1173), (this.var_1173.bitmapData = null)),
      this.var_596.parent === this && this.removeChild(this.var_596),
      this._background?.parent === this && this.removeChild(this._background),
      this.var_73.removeEventListener(UnkClass_6d7150.LINK, this.onTextLinkEvent));
  }
  get _re57a77ac735086() {
    return this._style?._r16cfd05b0ddda9
      ? this.height
      : Math.min(Math.trunc(a.MAX_HEIGHT * this.var_82._re843269b33bec5), this.height);
  }
  moveTo(r, t) {
    (this.var_1906 !== r || this._r6f4eb5b2951063 !== t) &&
      ((this.var_4456 = this.var_906),
      (this.var_5199 = this.proxyX),
      (this._rc1a6d08cd14fd8 = this.y),
      (this.var_1906 = r),
      (this._r6f4eb5b2951063 = t),
      (this.var_4883 = (r - this.proxyX) / a.LINEAR_INTERPOLATION_MS),
      (this._rf1f5f172bad483 = (t - this.y) / a.LINEAR_INTERPOLATION_MS));
  }
  _rb8123e5e5241b9(r, t) {
    ((this.var_1906 = r),
      (this._r6f4eb5b2951063 = t),
      (this.proxyX = r),
      (this.y = t),
      this.repositionPointer());
  }
  update(r) {
    if (
      ((this.var_906 += r),
      this.proxyX !== this.var_1906 || this.y !== this._r6f4eb5b2951063)
    ) {
      let t = this.var_906 - this.var_4456;
      t < a.LINEAR_INTERPOLATION_MS && t > 0
        ? ((this.proxyX = Math.trunc(this.var_5199 + t * this.var_4883)),
          (this.y = Math.trunc(this._rc1a6d08cd14fd8 + t * this._rf1f5f172bad483)))
        : ((this.proxyX = this.var_1906), (this.y = this._r6f4eb5b2951063));
    }
    (this.repositionPointer(),
      this.var_906 > a.LINEAR_INTERPOLATION_MS && !this.visible && (this.visible = !0));
  }
  get proxyX() {
    return this._r018041b1e6ae29;
  }
  set proxyX(r) {
    if (((this._r018041b1e6ae29 = r), this._r1324c0d98ac9ba && this.stage != null)) {
      let t = this._r018041b1e6ae29 + this._r4a3fa3e4c76bcc;
      this._r6a38b6a2c10c12 = !1;
      let i = this.stage.stageWidth - a.DESKTOP_MARGIN_RIGHT - this.width;
      (t > i && ((t = i), (this._r6a38b6a2c10c12 = !0)),
        t < a.DESKTOP_MARGIN_LEFT && ((t = a.DESKTOP_MARGIN_LEFT), (this._r6a38b6a2c10c12 = !0)),
        (this.x = t));
      return;
    }
    this.x = this._r018041b1e6ae29 + this._r4a3fa3e4c76bcc;
  }
  repositionPointer() {
    this._style != null &&
      this.var_596.parent != null &&
      ((this.var_596.x = Math.max(
        this._style._r899d4d870cbac2(a.const_1053),
        Math.min(
          (this._background?.width ?? 0) - this._style._r65da3bd2926418(a.POINTER_DEFAULT_MARGIN_RIGHT),
          this._r4906a54bbd825f,
        ),
      )),
      (this.var_596.y = (this._background?.height ?? 0) - this._style._r7685c14b89e55a));
  }
  get readyToRecycle() {
    return this._r6112356986fc40;
  }
  set readyToRecycle(r) {
    ((this._r6112356986fc40 = r), r && this.removeEventListener(UnkClass_fd7c12.CLICK, this.var_734));
  }
  get timeStamp() {
    return this.var_198?.timeStamp ?? 0;
  }
  set component(r) {
    this.var_82 = r;
  }
  get _rbabed0715e971c() {
    if (this.var_198 == null) return a.ZERO_POINT;
    if (this.var_198._rc4683ef9b98824 != null) {
      let r = this.var_82.displayObject?.stage;
      return r == null
        ? a.ZERO_POINT
        : new E(r.stageWidth / 2 + Number(this.var_198._rc4683ef9b98824), 500);
    }
    return (
      this.var_82.getScreenPointFromRoomLocation(
        this.var_198.roomId,
        this.var_198._rfdeef2469c3edb,
      ) ?? a.ZERO_POINT
    );
  }
  get _r1356d391a0091c() {
    if (this.var_198 == null || this.var_198._rc4683ef9b98824 != null)
      return this._rbabed0715e971c;
    let r =
      this.var_82.roomEngine?._ra1f5cb56d0c2d8(
        this.var_198.roomId,
        this.var_198.userId,
        RoomObjectCategoryEnum.OBJECT_CATEGORY_USER,
      ) ?? null;
    return r != null
      ? (this.var_82.getScreenPointFromRoomLocation(this.var_198.roomId, r.getLocation()) ??
          this._rbabed0715e971c)
      : this._rbabed0715e971c;
  }
  get scrolledUserPositionX() {
    if (this.var_198 == null) return 0;
    let r = this.var_82.roomEngine?._r0349bd197496ad(this.var_198.roomId) ?? null;
    return this._rbabed0715e971c.x - (r?.x ?? 0);
  }
  get roomId() {
    return this.var_198?.roomId ?? 0;
  }
  set roomPanOffsetX(r) {
    this._r4a3fa3e4c76bcc !== r &&
      ((this._r4a3fa3e4c76bcc = r), this._rb8123e5e5241b9(this.var_1906, this._r6f4eb5b2951063));
  }
  get roomPanOffsetX() {
    return this._r4a3fa3e4c76bcc;
  }
  get overlap() {
    return this._style?.overlap ?? null;
  }
  get _rcd017dc41de16b() {
    return this._r6a38b6a2c10c12;
  }
  get minHeight() {
    return this.var_555;
  }
  _r266563b7fb4912(r) {
    let t = this._background?.getChildAt(0);
    (t?.bitmapData != null &&
      r.draw(t.bitmapData, new Pe(1, 0, 0, 1, this._background?.x ?? 0, this._background?.y ?? 0)),
      this.var_596.bitmapData != null &&
        this.var_596.parent != null &&
        r.draw(
          this.var_596.bitmapData,
          new Pe(1, 0, 0, 1, this.var_596.x, this.var_596.y),
        ),
      this.var_1173.bitmapData != null &&
        this.var_1173.parent != null &&
        r.draw(
          this.var_1173.bitmapData,
          new Pe(1, 0, 0, 1, this.var_1173.x, this.var_1173.y),
        ),
      this.var_440.bitmapData != null &&
        this.var_440.parent != null &&
        r.draw(
          this.var_440.bitmapData,
          new Pe(1, 0, 0, 1, this.var_440.x, this.var_440.y),
        ),
      r.draw(this.var_73, new Pe(1, 0, 0, 1, this.var_73.x, this.var_73.y)));
  }
  get _r4906a54bbd825f() {
    return this._r1356d391a0091c.x - this.x;
  }
  _reaf5b87f0cad4a(r, t) {
    let i = r?.clone() ?? new _i(),
      s = i.size == null ? 12 : Number(i.size);
    return ((i.size = Math.max(1, s * t)), i);
  }
}
