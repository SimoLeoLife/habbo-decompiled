// Estratto da HabboAirLauncher.deobf.js, riga 202169.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/freeflowchat/viewer/visualization/ChatBubble.as

class a extends Sprite {
  constructor(r, t, i, s, o, d, c = -1, f = !1, l = -1) {
    super();
    this.var_198 = r;
    this._style = t;
    this.var_82 = d;
    this._r1324c0d98ac9ba = f;
    ((this._background = this._style._r3abb3c4d9f4245(o)),
      (this.var_596 = this._style.alpha ? null : new _i3a5c6f457acdad()),
      this.var_596 != null && (this.var_596.bitmapData = this._style.pointer));
    let b = Math.trunc(a.MAX_HEIGHT * this.var_82._re843269b33bec5),
      _ = a.MAX_WIDTH_DEFAULT;
    (c !== -1
      ? (_ = cb.accordingToRoomChatSetting(c))
      : this.var_82._r94d9ef5efd2e7e != null &&
        (_ = cb.accordingToRoomChatSetting(this.var_82._r94d9ef5efd2e7e._rf1cd22369f58e1)),
      (_ -= a._r128e160b6a594f),
      (this.cacheAsBitmap = !0));
    let h = _ - this._style.textFieldMargins.x - this._style.textFieldMargins.width;
    ((this.var_73 = new Pt()),
      (this.var_73.width = h),
      (this.var_73.multiline = !0),
      (this.var_73.wordWrap = !0),
      (this.var_73.selectable = !1),
      (this.var_73.thickness = -15),
      (this.var_73.sharpness = 80),
      (this.var_73.antiAliasType = "advanced"),
      (this.var_73.embedFonts = !0),
      (this.var_73.gridFitType = "pixel"),
      (this.var_73.cacheAsBitmap = !0));
    let p = this._reaf5b87f0cad4a(this._style._r39fa5000b657f2, this.var_82._re843269b33bec5);
    ((this.var_73.defaultTextFormat = p),
      (this.var_73.styleSheet = this._style.styleSheet),
      this.var_73.addEventListener(_i6d7150da12036f.LINK, this.onTextLinkEvent));
    let m = this.var_198.chatType === xr.CHAT_TYPE_SPEAK,
      v = this.var_198.chatType === xr.CHAT_TYPE_SHOUT,
      w = !m && !v && !this._style.alpha;
    w && (this.var_73.alpha = 0.6);
    let I = `${w ? "<i>" : ""}${this._style.alpha ? "" : `<b>${s}: </b>`}`;
    if (
      ((I += `${v ? "<b>" : ""}${this.var_198.text}${v ? "</b>" : ""}`),
      (I += w ? "</i>" : ""),
      this.var_198.links == null || this.var_198.links[0] == null)
    )
      this.var_73.htmlText = I;
    else {
      for (let z = 0; z < this.var_198.links.length; z++) {
        let K = this.var_198.links[z];
        if (!Array.isArray(K) || !Array.isArray(K[0])) continue;
        let $ = String(K[0][1] ?? "");
        I = I.replace(`{${z}}`, `<a href="${$}">${$}</a>`);
      }
      this.var_73.htmlText = I;
    }
    let C = Math.min(
        _,
        this.var_73.textWidth + this._style.textFieldMargins.x + this._style.textFieldMargins.width,
      ),
      W =
        this.var_73.textHeight +
        this._style.textFieldMargins.y +
        this._style.textFieldMargins.height,
      R = this.var_73._r99f9b16cafb2f2 > 1;
    (this._style._r16cfd05b0ddda9 || (W = Math.min(b, W)),
      l !== -1 && (W = Math.max(l, W)),
      (C = Math.max(C, this._background.width)),
      (W = Math.max(W, this._background.height)),
      (this._background.width = C),
      (this._background.height = W),
      (this._background.x = 0),
      (this._background.y = 0),
      (this._background.cacheAsBitmap = !0),
      this.addChild(this._background));
    let T = this._style._r92826090b9bdba(R),
      S = this._style.getEmblem(R);
    if (
      (T != null &&
        S != null &&
        ((this.var_1173 = new _i3a5c6f457acdad()),
        (this.var_1173.bitmapData = T),
        (this.var_1173.x = S.x),
        (this.var_1173.y = S.y),
        this.addChild(this.var_1173)),
      this.var_596 != null &&
        ((this.var_596.x = Math.max(
          this._style._r899d4d870cbac2(a.const_1053),
          Math.min(this._style._r65da3bd2926418(a.POINTER_DEFAULT_MARGIN_RIGHT), this._rad3fdbe3fac221),
        )),
        (this.var_596.y = W - this._style._r7685c14b89e55a),
        this.addChild(this.var_596)),
      i != null && this._style.max != null)
    ) {
      let z = i;
      (i.height > W &&
        ((z = new A(i.width, W, !0, 0)), z.copyPixels(i, new D(0, i.height - W, i.width, W), new E(0, 0))),
        (this.var_440 = new _i3a5c6f457acdad()),
        (this.var_440.bitmapData = z),
        (this.var_440.x = this._style.max.x - z.width / 2),
        (this.var_440.y = Math.max(1, this._style.max.y - z.height / 2)),
        this.addChild(this.var_440));
    }
    ((this.var_73.width = Math.min(
      h,
      this.var_73.textWidth + this._style.textFieldMargins.width,
    )),
      (this.var_73.height = this.var_73.textHeight + this._style.textFieldMargins.height),
      (this.var_73.x = this._style.textFieldMargins.x),
      (this.var_73.y = this._style.textFieldMargins.y),
      this.addChild(this.var_73),
      this._style.mask &&
        this.var_440?.bitmapData != null &&
        (this.var_440.y = Math.max(
          1,
          this.height / 2 - this.var_440.bitmapData.height / 2,
        )),
      !this._style._r16cfd05b0ddda9 &&
        this.var_73.textHeight > b &&
        ((this._rd3f248527b7263 = new Sprite()),
        this._rd3f248527b7263.graphics.clear(),
        this._rd3f248527b7263.graphics.beginFill(16777215),
        this._rd3f248527b7263.graphics.drawRect(
          0,
          0,
          this.var_73.textWidth + 5,
          b - this._style.textFieldMargins.height,
        ),
        (this.var_73.mask = this._rd3f248527b7263),
        this.addChild(this._rd3f248527b7263)),
      this.addEventListener(M._scrollBar, this.onAddedToStage));
  }
  static {
    n(this, "ChatBubble");
  }
  static MAX_WIDTH_DEFAULT = 300;
  static _r128e160b6a594f = 15;
  static DESKTOP_MARGIN_LEFT = 85;
  static DESKTOP_MARGIN_RIGHT = 190;
  static LINEAR_INTERPOLATION_MS = 150;
  static MAX_HEIGHT = 108;
  static const_1053 = 28;
  static POINTER_DEFAULT_MARGIN_RIGHT = 15;
  static ZERO_POINT = new E(0, 0);
  _background;
  var_596;
  var_1173 = null;
  var_440 = null;
  var_73;
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
  _r6a38b6a2c10c12 = !1;
  _rd3f248527b7263 = null;
  onAddedToStage = n((r) => {
    this.addEventListener(_ifd7c1208e3417e.CLICK, this.var_734);
  }, "onAddedToStage");
  onTextLinkEvent = n((r) => {
    r.text.length > 0 && this.var_82._r6b6c989018eb05(r.text);
  }, "onTextLinkEvent");
  var_734 = n((r) => {
    this._style.alpha ||
      this.var_82._rde8455fb19faa3(r) ||
      (this.var_82._rb9493b8bf41984(this.var_198), r.stopImmediatePropagation());
  }, "var_734");
  dispose() {
    (this.removeEventListener(M._scrollBar, this.onAddedToStage),
      this.removeEventListener(_ifd7c1208e3417e.CLICK, this.var_734),
      this._rd3f248527b7263?.parent === this && this.removeChild(this._rd3f248527b7263),
      this.var_73.removeEventListener(_i6d7150da12036f.LINK, this.onTextLinkEvent),
      this.var_73.parent === this && this.removeChild(this.var_73),
      this.var_73.dispose(),
      this.var_440?.parent === this && this.removeChild(this.var_440),
      this.var_1173?.parent === this && this.removeChild(this.var_1173),
      this.var_596?.parent === this && this.removeChild(this.var_596),
      this._background.parent === this && this.removeChild(this._background),
      (this._rd3f248527b7263 = null),
      (this.var_1173 = null),
      (this.var_440 = null),
      (this.var_596 = null));
  }
  get _re57a77ac735086() {
    return this._style._r16cfd05b0ddda9
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
      t < a.LINEAR_INTERPOLATION_MS
        ? ((this.proxyX = Math.trunc(this.var_5199 + t * this.var_4883)),
          (this.y = Math.trunc(this._rc1a6d08cd14fd8 + t * this._rf1f5f172bad483)))
        : ((this.proxyX = this.var_1906), (this.y = this._r6f4eb5b2951063));
    }
    this.repositionPointer();
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
    this.var_596?.parent != null &&
      ((this.var_596.x = Math.max(
        this._style._r899d4d870cbac2(a.const_1053),
        Math.min(
          this._background.width - this._style._r65da3bd2926418(a.POINTER_DEFAULT_MARGIN_RIGHT),
          this._rad3fdbe3fac221,
        ),
      )),
      (this.var_596.y = this._background.height - this._style._r7685c14b89e55a));
  }
  get readyToRecycle() {
    return this._r6112356986fc40;
  }
  set readyToRecycle(r) {
    ((this._r6112356986fc40 = r), r && this.removeEventListener(_ifd7c1208e3417e.CLICK, this.var_734));
  }
  get timeStamp() {
    return this.var_198.timeStamp;
  }
  set component(r) {
    this.var_82 = r;
  }
  get _rbabed0715e971c() {
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
  get roomId() {
    return this.var_198.roomId;
  }
  set roomPanOffsetX(r) {
    this._r4a3fa3e4c76bcc !== r &&
      ((this._r4a3fa3e4c76bcc = r), this._rb8123e5e5241b9(this.var_1906, this._r6f4eb5b2951063));
  }
  get overlap() {
    return this._style.overlap;
  }
  get _rcd017dc41de16b() {
    return this._r6a38b6a2c10c12;
  }
  _r266563b7fb4912(r) {
    r.draw(this);
  }
  get _rad3fdbe3fac221() {
    return this._rbabed0715e971c.x - this.x;
  }
  _reaf5b87f0cad4a(r, t) {
    let i = new _i();
    r != null &&
      ((i.font = r.font),
      (i.size = r.size),
      (i.color = r.color),
      (i.bold = r.bold),
      (i.italic = r.italic),
      (i.underline = r.underline),
      (i.url = r.url),
      (i.target = r.target),
      (i.align = r.align),
      (i.leftMargin = r.leftMargin),
      (i.rightMargin = r.rightMargin),
      (i.indent = r.indent),
      (i.leading = r.leading),
      (i.kerning = r.kerning),
      (i.letterSpacing = r.letterSpacing));
    let s = i.size == null ? 12 : Number(i.size);
    return ((i.size = Math.max(1, s * t)), i);
  }
}
