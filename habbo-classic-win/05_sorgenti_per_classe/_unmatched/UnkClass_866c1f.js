// Extracted from HabboAirLauncher.deobf.js, line 46202.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i866c1f14b44091

class a extends Uc {
  static {
    n(this, "UnkClass_866c1f");
  }
  static _r2d4bb49367926b = "high";
  static _rfaad45d5a2181e = !1;
  static _rbd29be2ad3d442 = 2;
  static _rd5300c4d903c9e = 6;
  static _r1e1dea291b69b0 = new Y$();
  static _r3b2ccde20be56a = "Arial";
  static _rac85bc38c1be66 = 12;
  static _r38e3b4804d3f2c = 2;
  static _r888a45c3502493 = 1;
  static _ra0c3f0b8595ac3 = 1;
  static _r24dd91ea55b85c = 2;
  static _ra02924de529467 = 4;
  static _r871c3a6e39265f = 8;
  static _rb6d0f8bed44db0 = 0;
  static _r01c340fb328a89 = 2;
  static _r6116f1301c088c = 1;
  static _ra6bbfdf9795350 = /[~%&!\\;:"',<>?#\s.\-()=\[\]{}\^_]/;
  static _r6a7f2e1ea33800 = 4096;
  static _rd9915ca69e6b88 = _i295affcc6e4d03(1, 1);
  static _ra2e0aab05f01c3 = _i5183d3213c4d99(a._rd9915ca69e6b88);
  _r952cf349dfef2b;
  _r08fcb1befe0a8e;
  _r7819a17c61b4b7;
  _r2005c12fec614a;
  _rfc96e607defcc0;
  _rf6dcaeaf206627;
  _r4e88bc5f8be34b = new Wae();
  _text = "";
  _rdc024e79a4dec7 = "";
  _r28e863b07726a4 = !1;
  _re9beef9346a252 = null;
  _r5d36b3c14a8289 = [];
  _textColor = null;
  _r95924cff37cc3c = 100;
  _r27bd3ec1cffb1b = 20;
  _ra16e18884bf848 = 0;
  _r260984f991cac7 = 0;
  _r8fd1af60c8f1b5 = 0;
  _rdbd9f47dc0563e = 0;
  _rc56b7c501206ec = 0;
  _r6dab365c53b700 = 0;
  _hasFocus = !1;
  _r08207a905d897f = !1;
  _rd7e425c1ea75ac = "character";
  _recd505971dcbbf = null;
  _hovering = !1;
  _r8589325e11b1fb = null;
  _r1432f27bb7f58f = !1;
  _r939e55cdf585fa = 0;
  _rba6e163dd7d0d2 = 0;
  _r4f91b7f2660afd = !1;
  _r7f6043f81a7770 = null;
  _rf1be0424a55186 = _i295affcc6e4d03(1, 1);
  _r81e3c34b2c36cf = this._rf1be0424a55186 != null ? _i5183d3213c4d99(this._rf1be0424a55186) : null;
  _r774aa2909827be;
  _r0b369ca9b3b5b1 = !1;
  _r1a26097622dde8 = !1;
  _r2ba055067b87b8 = null;
  _r4d0f4ac59bf25c = null;
  _rbb8faece1ce55e = null;
  _r989f2374956755 = null;
  _r543073a813c265 = null;
  _rfe6270475c444d = null;
  _r6ad1a8ea9c634c = new Map();
  _r121ff5990edf83 = null;
  _r4be5699911c66f = Number.NaN;
  _r7d53f6982aa1ca = Number.NaN;
  _ra6df8b488c719a = 0;
  var_940 = 1;
  type = eo.var_4430;
  var_2160 = !0;
  selectable = !0;
  multiline = !1;
  wordWrap = !1;
  _r0694eee6c169a5 = nr.NONE;
  antiAliasType = "advanced";
  gridFitType = "pixel";
  sharpness = 0;
  thickness = 0;
  embedFonts = !1;
  border = !1;
  borderColor = 0;
  _r4c2336e24c69cc = 0;
  background = !1;
  backgroundColor = 16777215;
  _rbf8a933bf67bb1 = !0;
  _r631e445de700b8 = !1;
  _rac4732cd1a883c = !1;
  restrict = null;
  _rfd454f4d33a88a = !1;
  _r91f15adc15f137 = !1;
  var_5058 = null;
  defaultTextFormat = new _i(a._r3b2ccde20be56a, a._rac85bc38c1be66, 0);
  constructor() {
    let e = new Text_({ text: "", resolution: 1, roundPixels: !0 });
    super();
    let r =
      this._rf1be0424a55186 != null
        ? Texture.from({ resource: this._rf1be0424a55186, autoGarbageCollect: !0 }, !0)
        : Texture.EMPTY;
    r.dynamic = !0;
    let t = new Jt(r),
      i = new Cl(),
      s = new Cl(),
      o = new Cl(),
      d = new Cl();
    ((this._r952cf349dfef2b = e),
      (this._r08fcb1befe0a8e = t),
      (this._r7819a17c61b4b7 = i),
      (this._r2005c12fec614a = s),
      (this._rfc96e607defcc0 = o),
      (this._rf6dcaeaf206627 = d),
      (this._r774aa2909827be = r),
      this._r0203ab2933f479().addChild(this._r952cf349dfef2b),
      this._r0203ab2933f479().addChild(this._r08fcb1befe0a8e),
      this._r0203ab2933f479().addChild(this._r7819a17c61b4b7),
      this._r0203ab2933f479().addChild(this._r2005c12fec614a),
      this._r0203ab2933f479().addChild(this._rfc96e607defcc0),
      this._r0203ab2933f479().addChild(this._rf6dcaeaf206627),
      (this._r952cf349dfef2b.mask = this._rfc96e607defcc0),
      (this._r08fcb1befe0a8e.mask = this._rfc96e607defcc0),
      (this._r7819a17c61b4b7.mask = this._rfc96e607defcc0),
      (this._r2005c12fec614a.mask = this._rf6dcaeaf206627),
      (this._r952cf349dfef2b.resolution = 1),
      (this._r952cf349dfef2b.roundPixels = !0));
    let c = this._r952cf349dfef2b.textureStyle;
    c != null && (c.scaleMode = "nearest");
    let f = this._r952cf349dfef2b;
    ((f.eventMode = "none"), (f.cursor = "default"));
    let l = this._r08fcb1befe0a8e;
    ((l.eventMode = "none"), (l.cursor = "default"), (l.roundPixels = !0));
    let b = this._r7819a17c61b4b7;
    ((b.eventMode = "none"), (b.cursor = "default"));
    let _ = this._r0203ab2933f479();
    ((_.eventMode = "static"),
      (_.cursor = "default"),
      _.on?.("pointertap", this._ree80e141df2229),
      _.on?.("pointerdown", this._rfce229ff38a1d2),
      _.on?.("pointermove", this._r92c4cebccbcfe4),
      _.on?.("pointerup", this._rdd9b08f6d34f64),
      _.on?.("pointerupoutside", this._rdd9b08f6d34f64),
      _.on?.("pointerover", this._r5e97eac213717c),
      _.on?.("pointerout", this._rfba123150e9e39),
      _.on?.("dblclick", this._rb759ab50f5009a),
      _.on?.("added", this._rd573bf99e00b1a),
      this.addEventListener(FocusManager._rd3be293e25cc6a, this._r90afd1f99fa06b),
      this.addEventListener(FocusManager._r8365d86c670be6, this._rb820d64d43e940),
      this.addEventListener(M._re9c5159721d60d, this._ra5ccba1e347a96),
      this.addEventListener(UnkClass_fd7c12._r9001c395573374, this._ra2392916df2aec),
      this.addEventListener(UnkClass_fd7c12.var_370, this._r063deefec1fad5),
      this.addEventListener(UnkClass_fd7c12._ra93f33360c3a28, this._r1acf27e9365839),
      this.addEventListener(UnkClass_fd7c12.DOUBLE_CLICK, this._r6584b445fb0886),
      (this._r08fcb1befe0a8e.visible = !1),
      (this._r95924cff37cc3c = Math.max(1, this._r952cf349dfef2b.width || 100)),
      (this._r27bd3ec1cffb1b = Math.max(1, this._r952cf349dfef2b.height || 20)),
      this._r47da4cd593a5d7(),
      this.updateStyle());
  }
  _r88277e583821a5() {
    return !1;
  }
  dispose() {
    this._r1a26097622dde8 ||
      ((this._r1a26097622dde8 = !0),
      this._r7f6043f81a7770?.focus === this && (this._r7f6043f81a7770.focus = null),
      this.parent?.removeChild(this),
      (this.stage = null),
      (this.mask = null),
      (this._r23c53d131d31fd = null),
      this._r0203ab2933f479().destroy({ children: !0 }),
      this._r4d0f4ac59bf25c?.destroy(!1),
      (this._r4d0f4ac59bf25c = null),
      this._r774aa2909827be !== Texture.EMPTY && this._r774aa2909827be.destroy(!0),
      (this._r774aa2909827be = Texture.EMPTY),
      this._rf1be0424a55186 != null &&
        ((this._rf1be0424a55186.width = 1), (this._rf1be0424a55186.height = 1)),
      (this._rf1be0424a55186 = null),
      (this._r81e3c34b2c36cf = null));
  }
  _r4871e480745859() {
    return this._r3371a61a31c39d();
  }
  _rf82950eda7e75c(e) {
    let r =
      e == null ? null : new D(Math.trunc(e.x), Math.trunc(e.y), Math.trunc(e.width), Math.trunc(e.height));
    this._r88beb34191c47e(this._r121ff5990edf83, r) ||
      ((this._r121ff5990edf83 = r),
      this._r3371a61a31c39d() && (this._rd78675388d2959(), this._rfd8e5d395fd48e()));
  }
  _r320de7fa50b95a(e) {
    ((this._r08fcb1befe0a8e.mask = this._rfc96e607defcc0),
      (this._r7819a17c61b4b7.mask = this._rfc96e607defcc0),
      (this._r0203ab2933f479().mask = e));
  }
  get text() {
    return this._text;
  }
  set text(e) {
    let r = e ?? "";
    if (this.restrict != null && this.restrict.length > 0) {
      let t = new RegExp(`[^${this.restrict}]`, "g");
      r = r.replace(t, "");
    }
    (this._r4c2336e24c69cc > 0 && (r = r.slice(0, this._r4c2336e24c69cc)),
      (this._rdc024e79a4dec7 = ""),
      (this._r28e863b07726a4 = !1),
      (this._re9beef9346a252 = null),
      (this._r5d36b3c14a8289 = []),
      this._rbb8e6be681262a(),
      (this._text = r),
      this._ra16e18884bf848 > r.length && (this._ra16e18884bf848 = r.length),
      this._r260984f991cac7 > r.length && (this._r260984f991cac7 = r.length),
      this._r8fd1af60c8f1b5 > r.length && (this._r8fd1af60c8f1b5 = r.length),
      this._rdbd9f47dc0563e > r.length && (this._rdbd9f47dc0563e = r.length),
      this._rc56b7c501206ec > r.length && (this._rc56b7c501206ec = r.length),
      (this._rdbd9f47dc0563e = this._ra16e18884bf848),
      (this._rc56b7c501206ec = this._r260984f991cac7),
      this.updateStyle());
  }
  get htmlText() {
    return this._rdc024e79a4dec7;
  }
  set htmlText(e) {
    this._rdc024e79a4dec7 = e ?? "";
    let r = X$._r5bb1bc535599ec(this._rdc024e79a4dec7);
    ((this._r5d36b3c14a8289 = r._r4192ed2fd4b240),
      (this._re9beef9346a252 = r.runs),
      (this._r28e863b07726a4 = r._r62680cf370763a),
      this._r4f72be59b5fac9(r.text));
  }
  get styleSheet() {
    return this.var_5058;
  }
  set styleSheet(e) {
    this.var_5058 !== e && ((this.var_5058 = e), this._rbb8e6be681262a(), this.updateStyle());
  }
  get stage() {
    return super.stage;
  }
  set stage(e) {
    super.stage !== e &&
      (this._re5ce230b034e38(this._r7f6043f81a7770),
      (super.stage = e),
      (this._r7f6043f81a7770 = e),
      this._r33e0b4489f91d6(e));
  }
  get width() {
    return this._r6169b45d7460ee()
      ? this.wordWrap && this._r95924cff37cc3c > 0
        ? this._r95924cff37cc3c
        : this.autoSize === nr.NONE
          ? this._r95924cff37cc3c
          : this._r1db367de7fe78a().width
      : this.wordWrap && this._r95924cff37cc3c > 0
        ? this._r95924cff37cc3c
        : this.autoSize === nr.NONE
          ? this._r95924cff37cc3c
          : this._r55ac6e84ef8ab3().width;
  }
  set width(e) {
    (this.autoSize !== nr.NONE && !this.wordWrap) ||
      ((this._r95924cff37cc3c = Math.max(0, e)), this._rbb8e6be681262a(), this.updateStyle());
  }
  get height() {
    return this._r6169b45d7460ee()
      ? this.autoSize === nr.NONE
        ? this._r27bd3ec1cffb1b
        : this._r1db367de7fe78a().height
      : this.autoSize === nr.NONE
        ? this._r27bd3ec1cffb1b
        : this._r55ac6e84ef8ab3().height;
  }
  set height(e) {
    this.autoSize === nr.NONE &&
      ((this._r27bd3ec1cffb1b = Math.max(0, e)), this._rbb8e6be681262a(), this.updateStyle());
  }
  get autoSize() {
    return this._r0694eee6c169a5;
  }
  set autoSize(e) {
    if (this._r0694eee6c169a5 === e) return;
    let r = this._r0694eee6c169a5,
      t = r === nr.NONE ? this._r95924cff37cc3c : this.width,
      i = r === nr.NONE ? this._r27bd3ec1cffb1b : this.height;
    ((this._r0694eee6c169a5 = e),
      e === nr.NONE && r !== nr.NONE && ((this._r95924cff37cc3c = t), (this._r27bd3ec1cffb1b = i)),
      this._rbb8e6be681262a(),
      this.updateStyle());
  }
  get textColor() {
    return (
      this._textColor ??
      (typeof this.defaultTextFormat.color == "number" ? this.defaultTextFormat.color : 0)
    );
  }
  set textColor(e) {
    ((this._textColor = e), this.updateStyle());
  }
  get textWidth() {
    return this._r6169b45d7460ee()
      ? Math.max(0, this._r1db367de7fe78a().textWidth)
      : Math.max(0, this._r55ac6e84ef8ab3().textWidth);
  }
  get textHeight() {
    return this._r6169b45d7460ee()
      ? Math.max(0, this._r1db367de7fe78a().textHeight)
      : Math.max(0, this._r55ac6e84ef8ab3().textHeight);
  }
  get scrollH() {
    return this._ra6df8b488c719a;
  }
  set scrollH(e) {
    let r = Math.max(0, Math.min(Math.trunc(e), this._radb221318b5180));
    this._ra6df8b488c719a !== r && ((this._ra6df8b488c719a = r), this._r47da4cd593a5d7(), this.updateStyle());
  }
  get var_46() {
    return this.var_940;
  }
  set var_46(e) {
    let r = Math.max(1, Math.min(Math.trunc(e), this._r5733287651adec));
    this.var_940 !== r && ((this.var_940 = r), this._r47da4cd593a5d7(), this.updateStyle());
  }
  get length() {
    return this._text.length;
  }
  get _r99f9b16cafb2f2() {
    return this._ra8fb4f921bb3f0().length;
  }
  get _r4e8cc4f8d5d64a() {
    return this._r412ed8c2678b5a()._r4e8cc4f8d5d64a;
  }
  get _radb221318b5180() {
    let e = Math.max(1, this.width - (a._r24dd91ea55b85c + this._rf3d8cf7ed09cc5())),
      r = Math.max(0, this.textWidth - e);
    return Math.ceil(r);
  }
  get _r5733287651adec() {
    return this._r412ed8c2678b5a()._r5733287651adec;
  }
  get _rfaf84453b22a8b() {
    return this._ra16e18884bf848;
  }
  get _r10903ebf1592aa() {
    return this._r260984f991cac7;
  }
  get _r57733ec36e34c0() {
    return this._r8fd1af60c8f1b5;
  }
  set _r57733ec36e34c0(e) {
    this._re296549b20a6b9(e);
  }
  get editable() {
    return this.var_2160;
  }
  set editable(e) {
    this.var_2160 = e;
  }
  _r343b6b28614e99() {
    return this._r4fd6bb468fe519() && this.selectable && this.var_2160;
  }
  appendText(e) {
    this.text = this._text + e;
  }
  _r07c2bdbe43b8d8(e, r, t) {
    let i = Math.max(0, e),
      s = Math.max(i, r);
    this.text = this._text.slice(0, i) + t + this._text.slice(s);
  }
  _rd835b98973eaf7(e = -1, r = -1) {
    return this.defaultTextFormat.clone();
  }
  _rf728d1a4d87da8(e, r = -1, t = -1) {
    ((this.defaultTextFormat = e.clone()), this.updateStyle());
  }
  _r1c386c8571c5d9(e, r) {
    ((this._ra16e18884bf848 = Math.max(0, Math.min(e, this.length))),
      (this._r260984f991cac7 = Math.max(this._ra16e18884bf848, Math.min(r, this.length))),
      (this._rdbd9f47dc0563e = this._ra16e18884bf848),
      (this._rc56b7c501206ec = this._r260984f991cac7),
      (this._r8fd1af60c8f1b5 = this._r260984f991cac7),
      this._r47da4cd593a5d7(),
      this._r67fa066a717cf2(),
      this._rfd8e5d395fd48e());
  }
  _re296549b20a6b9(e, r = !1) {
    let t = Math.max(0, Math.min(Math.trunc(e), this.length));
    ((this._r8fd1af60c8f1b5 = t),
      r ||
        ((this._rdbd9f47dc0563e = t),
        (this._rc56b7c501206ec = t),
        (this._ra16e18884bf848 = t),
        (this._r260984f991cac7 = t)),
      this._r47da4cd593a5d7(),
      this._r67fa066a717cf2(),
      this._rfd8e5d395fd48e());
  }
  setSelectionRange(e, r) {
    let t = Math.max(0, Math.min(Math.trunc(e), this.length)),
      i = Math.max(0, Math.min(Math.trunc(r), this.length));
    ((this._rdbd9f47dc0563e = t),
      (this._rc56b7c501206ec = i),
      (this._ra16e18884bf848 = Math.min(t, i)),
      (this._r260984f991cac7 = Math.max(t, i)),
      (this._r8fd1af60c8f1b5 = i),
      this._r47da4cd593a5d7(),
      this._r67fa066a717cf2(),
      this._rfd8e5d395fd48e());
  }
  _r51ca7b2f45a835() {
    (this.setSelectionRange(this._r8fd1af60c8f1b5, this._r8fd1af60c8f1b5), this._rfd8e5d395fd48e());
  }
  _r8efbde12b3bb4a() {
    return this._ra16e18884bf848 !== this._r260984f991cac7;
  }
  _r1de667fbad49ff() {
    return this._r8efbde12b3bb4a() ? this._text.slice(this._ra16e18884bf848, this._r260984f991cac7) : "";
  }
  _r4fd6bb468fe519() {
    return this.type === eo.INPUT;
  }
  _r6484e75913e815() {
    return this._r4fd6bb468fe519() && this.var_2160;
  }
  _rd87db66412cd96(e) {
    let r = e ?? "";
    if (
      (this.multiline || (r = r.replace(/[\r\n]+/g, "")), this.restrict != null && this.restrict.length > 0)
    ) {
      let t = new RegExp(`[^${this.restrict}]`, "g");
      r = r.replace(t, "");
    }
    return r;
  }
  _r628187976cd952(e) {
    let r = this._rd87db66412cd96(e),
      t = this._ra16e18884bf848,
      i = this._r260984f991cac7,
      s = this._text,
      o = s.slice(0, t) + r + s.slice(i);
    if (this._r4c2336e24c69cc > 0 && o.length > this._r4c2336e24c69cc) {
      let d = Math.max(0, this._r4c2336e24c69cc - (s.length - (i - t)));
      return d <= 0 ? !1 : this._r628187976cd952(r.slice(0, d));
    }
    return o === s
      ? (this._re296549b20a6b9(t + r.length), !1)
      : ((this._text = o),
        (this._rdc024e79a4dec7 = ""),
        (this._r28e863b07726a4 = !1),
        (this._re9beef9346a252 = null),
        (this._r5d36b3c14a8289 = []),
        this._rbb8e6be681262a(),
        (this._ra16e18884bf848 = t + r.length),
        (this._r260984f991cac7 = this._ra16e18884bf848),
        (this._rdbd9f47dc0563e = this._ra16e18884bf848),
        (this._rc56b7c501206ec = this._r260984f991cac7),
        (this._r8fd1af60c8f1b5 = this._r260984f991cac7),
        this._r47da4cd593a5d7(),
        this.updateStyle(),
        this.dispatchEvent(new M(M._ra3d93f66ba77c2)),
        this._r67fa066a717cf2(),
        this._rfd8e5d395fd48e(),
        !0);
  }
  _r34ed764abb1a04(e) {
    if (!this._r6484e75913e815()) return !1;
    let r = this._rd87db66412cd96(e);
    if (r.length === 0) return !1;
    let t = new UnkClass_6d7150(UnkClass_6d7150.TEXT_INPUT, !0, !0, r);
    return !this.dispatchEvent(t) || t.isDefaultPrevented() ? !1 : this._r628187976cd952(t.text);
  }
  _r5e6188200b7a1c() {
    return this._r8efbde12b3bb4a()
      ? ((this._text = this._text.slice(0, this._ra16e18884bf848) + this._text.slice(this._r260984f991cac7)),
        (this._rdc024e79a4dec7 = ""),
        (this._r28e863b07726a4 = !1),
        (this._re9beef9346a252 = null),
        (this._r5d36b3c14a8289 = []),
        this._rbb8e6be681262a(),
        (this._r8fd1af60c8f1b5 = this._ra16e18884bf848),
        (this._r260984f991cac7 = this._ra16e18884bf848),
        (this._rdbd9f47dc0563e = this._ra16e18884bf848),
        (this._rc56b7c501206ec = this._ra16e18884bf848),
        this._r47da4cd593a5d7(),
        this.updateStyle(),
        this.dispatchEvent(new M(M._ra3d93f66ba77c2)),
        this._r67fa066a717cf2(),
        this._rfd8e5d395fd48e(),
        !0)
      : !1;
  }
  _r25003e17dfff6e(e, r = !1) {
    let t = Math.max(0, Math.min(Math.trunc(e), this.length));
    if (r) {
      this.setSelectionRange(this._rdbd9f47dc0563e, t);
      return;
    }
    this._re296549b20a6b9(t);
  }
  dispatchEvent(e) {
    let r = super.dispatchEvent(e);
    return (
      !(e instanceof KeyboardControl) ||
        e.target !== this ||
        e.isDefaultPrevented() ||
        (e.type === KeyboardControl._re9c7558bf2dcfb && this._r0ae36963451ebe(e)),
      r
    );
  }
  _rab748482ca88f4(e, r) {
    if (this._r5d36b3c14a8289.length === 0) return null;
    let t = this._r7b0201ad66b552(e, r);
    if (t < 0) return null;
    for (let i of this._r5d36b3c14a8289) if (t >= i.start && t < i.end) return i.href;
    return null;
  }
  _r90afd1f99fa06b = n((e) => {
    ((this._hasFocus = !0), this._r47da4cd593a5d7(), this._r67fa066a717cf2(), this.updateStyle());
  }, "_r90afd1f99fa06b");
  _rb820d64d43e940 = n((e) => {
    ((this._hasFocus = !1),
      (this._r08207a905d897f = !1),
      (this._r1432f27bb7f58f = !1),
      this._r1c386c8571c5d9(this._r8fd1af60c8f1b5, this._r8fd1af60c8f1b5),
      this.updateStyle());
  }, "_rb820d64d43e940");
  _ra5ccba1e347a96 = n((e) => {
    if ((this._r2b9734155f20dc(), !this._hasFocus)) return;
    let r = Date.now(),
      t =
        r - this._rba6e163dd7d0d2 < 500
          ? !0
          : r - this._r939e55cdf585fa < 500
            ? this._r1432f27bb7f58f
            : !this._r1432f27bb7f58f;
    if (t !== this._r1432f27bb7f58f) {
      ((this._r1432f27bb7f58f = t), (this._r939e55cdf585fa = r), this._rf252f6127e25c1());
      return;
    }
  }, "_ra5ccba1e347a96");
  _r0ae36963451ebe(e) {
    if (!this._r4fd6bb468fe519()) return;
    if ((this._r47da4cd593a5d7(), e._r13edd2174835db))
      switch (e.keyCode) {
        case 65:
          this.selectable && this.setSelectionRange(0, this.length);
          return;
        case 67:
          this._r8efbde12b3bb4a() && Bi._r8c1ed48897d9d3(this._r1de667fbad49ff());
          return;
        case 88:
          this._r6484e75913e815() &&
            this._r8efbde12b3bb4a() &&
            (Bi._r8c1ed48897d9d3(this._r1de667fbad49ff()), this._r5e6188200b7a1c());
          return;
        case 86:
          this._r6484e75913e815() && this._rb60e40de9d56fb();
          return;
      }
    switch (e.keyCode) {
      case 9:
        (e.preventDefault(), this.stage?._r641047ad08c1c3(this, e.shiftKey));
        return;
      case 8:
        this._r6484e75913e815() &&
          !this._r5e6188200b7a1c() &&
          this._r8fd1af60c8f1b5 > 0 &&
          (this.setSelectionRange(
            e.ctrlKey ? this._r639e8b023800d3(this._r8fd1af60c8f1b5) : this._r8fd1af60c8f1b5 - 1,
            this._r8fd1af60c8f1b5,
          ),
          this._r5e6188200b7a1c());
        return;
      case 46:
        this._r6484e75913e815() &&
          !this._r5e6188200b7a1c() &&
          this._r8fd1af60c8f1b5 < this.length &&
          (this.setSelectionRange(this._r8fd1af60c8f1b5, this._r8fd1af60c8f1b5 + 1), this._r5e6188200b7a1c());
        return;
      case 37:
        this._r25003e17dfff6e(
          e.ctrlKey
            ? this._r639e8b023800d3(this._r8fd1af60c8f1b5)
            : this._r41acf51fb45a6f(this._r8fd1af60c8f1b5),
          e.shiftKey,
        );
        return;
      case 39:
        this._r25003e17dfff6e(
          e.ctrlKey
            ? this._r2298f9be7c3200(this._r8fd1af60c8f1b5)
            : this._r000f29174a9970(this._r8fd1af60c8f1b5),
          e.shiftKey,
        );
        return;
      case 36:
        this._r25003e17dfff6e(this._ra579f436c1f9a2(this._r8fd1af60c8f1b5), e.shiftKey);
        return;
      case 35:
        this._r25003e17dfff6e(this._r74e8becfda3c55(this._r8fd1af60c8f1b5), e.shiftKey);
        return;
      case 38:
        (this.multiline || this.wordWrap) &&
          this._r25003e17dfff6e(this._r7e28a6077fb69e(this._r8fd1af60c8f1b5), e.shiftKey);
        return;
      case 40:
        (this.multiline || this.wordWrap) &&
          this._r25003e17dfff6e(this._r9e75b84805dec2(this._r8fd1af60c8f1b5), e.shiftKey);
        return;
      case 13:
        this._r6484e75913e815() &&
          this.multiline &&
          this._r34ed764abb1a04(`
`);
        return;
      default:
        break;
    }
    if (!this._r6484e75913e815()) return;
    let r = e.charCode > 0 ? String.fromCharCode(e.charCode) : "";
    r.length === 1 && this._r34ed764abb1a04(r);
  }
  _ra2392916df2aec = n((e) => {
    if (!this.selectable) return;
    let r = this._rffeb3c81249210(e);
    (this._r47da4cd593a5d7(), this._r5fd47907798bcb());
    let t = this._ra6c332ecf03f64(r.x, r.y),
      i = this._rfd85cf53c2777f(e);
    if (
      ((this._r08207a905d897f = !0),
      (this._rd7e425c1ea75ac = "character"),
      (this._recd505971dcbbf = null),
      e.shiftKey)
    ) {
      this.setSelectionRange(this._rdbd9f47dc0563e, t);
      return;
    }
    if (i >= 3) {
      let s = this._rd7e300fde6446b(r.x, r.y);
      ((this._rd7e425c1ea75ac = "line"), (this._recd505971dcbbf = s), this.setSelectionRange(s.start, s.end));
      return;
    }
    if (i === 2) {
      let s = this._rbf937453187877(r.x, r.y);
      ((this._rd7e425c1ea75ac = "word"), (this._recd505971dcbbf = s), this.setSelectionRange(s.start, s.end));
      return;
    }
    this.setSelectionRange(t, t);
  }, "_ra2392916df2aec");
  _r063deefec1fad5 = n((e) => {
    if (!this._r08207a905d897f || !this.selectable) return;
    let r = this._rffeb3c81249210(e);
    if ((this._r47da4cd593a5d7(), this._rd7e425c1ea75ac === "word" && this._recd505971dcbbf != null)) {
      this._rba202a97081d05(r.x, r.y);
      return;
    }
    if (this._rd7e425c1ea75ac === "line" && this._recd505971dcbbf != null) {
      this._ra5ccc4bd877914(r.x, r.y);
      return;
    }
    this.setSelectionRange(this._rdbd9f47dc0563e, this._ra6c332ecf03f64(r.x, r.y));
  }, "_r063deefec1fad5");
  _r1acf27e9365839 = n((e) => {
    ((this._r08207a905d897f = !1),
      (this._rd7e425c1ea75ac = "character"),
      (this._recd505971dcbbf = null),
      this._r47da4cd593a5d7());
  }, "_r1acf27e9365839");
  _r6584b445fb0886 = n((e) => {
    if (!this.selectable || e.clickCount >= 2) return;
    let r = this._rffeb3c81249210(e);
    (this._r5fd47907798bcb(), this._r4a20f2cb5f404b(r.x, r.y));
  }, "_r6584b445fb0886");
  _r5e97eac213717c = n((e) => {
    ((this._hovering = !0), this._r4ac25d8350e524());
  }, "_r5e97eac213717c");
  _rfba123150e9e39 = n((e) => {
    ((this._hovering = !1), this._r4ac25d8350e524());
  }, "_rfba123150e9e39");
  _rf3f347d0b615d2 = n((e) => {
    !this.selectable ||
      !this._rd2e2ea5ecb6992(e.stageX, e.stageY) ||
      ((this._r4f91b7f2660afd = !0), this._ra2392916df2aec(this._r1be5ddb137b95e(UnkClass_fd7c12._r9001c395573374, e, !0)));
  }, "_rf3f347d0b615d2");
  _r49c67624b0b5e3 = n((e) => {
    this._r4f91b7f2660afd && this._r063deefec1fad5(this._r1be5ddb137b95e(UnkClass_fd7c12.var_370, e, !0));
  }, "_r49c67624b0b5e3");
  _rb39726d43f7cc1 = n((e) => {
    this._r4f91b7f2660afd &&
      ((this._r4f91b7f2660afd = !1), this._r1acf27e9365839(this._r1be5ddb137b95e(UnkClass_fd7c12._ra93f33360c3a28, e, !1)));
  }, "_rb39726d43f7cc1");
  _re5e84214b9fe2c = n((e) => {
    !this.selectable ||
      !this._rd2e2ea5ecb6992(e.stageX, e.stageY) ||
      this._r6584b445fb0886(this._r1be5ddb137b95e(UnkClass_fd7c12.DOUBLE_CLICK, e, !1));
  }, "_re5e84214b9fe2c");
  _rfce229ff38a1d2 = n((e) => {
    let r = a._re4a4f8c26393ce(e);
    if (r == null) return;
    let t = this._r0203ab2933f479().toLocal(r);
    this._ra2392916df2aec(
      new UnkClass_fd7c12(UnkClass_fd7c12._r9001c395573374, !1, !1, t.x, t.y, null, !1, !1, !1, !0, 0, r.x, r.y, a._r6a648881a93f17(e)),
    );
  }, "_rfce229ff38a1d2");
  _r92c4cebccbcfe4 = n((e) => {
    let r = a._re4a4f8c26393ce(e);
    if (r == null) return;
    let t = this._r0203ab2933f479().toLocal(r);
    this._r063deefec1fad5(
      new UnkClass_fd7c12(UnkClass_fd7c12.var_370, !1, !1, t.x, t.y, null, !1, !1, !1, !0, 0, r.x, r.y, a._r6a648881a93f17(e)),
    );
  }, "_r92c4cebccbcfe4");
  _rdd9b08f6d34f64 = n((e) => {
    let r = a._re4a4f8c26393ce(e);
    if (r == null) return;
    let t = this._r0203ab2933f479().toLocal(r);
    this._r1acf27e9365839(
      new UnkClass_fd7c12(UnkClass_fd7c12._ra93f33360c3a28, !1, !1, t.x, t.y, null, !1, !1, !1, !1, 0, r.x, r.y, a._r6a648881a93f17(e)),
    );
  }, "_rdd9b08f6d34f64");
  _rb759ab50f5009a = n((e) => {
    let r = a._re4a4f8c26393ce(e);
    if (r == null) return;
    let t = this._r0203ab2933f479().toLocal(r);
    this._r6584b445fb0886(
      new UnkClass_fd7c12(UnkClass_fd7c12.DOUBLE_CLICK, !1, !1, t.x, t.y, null, !1, !1, !1, !1, 0, r.x, r.y, a._r6a648881a93f17(e)),
    );
  }, "_rb759ab50f5009a");
  _r4a20f2cb5f404b(e, r) {
    if (!this.selectable) return;
    let t = this._rbf937453187877(e, r);
    this.setSelectionRange(t.start, t.end);
  }
  _r5fd47907798bcb() {
    let e = this.stage;
    e != null && e.focus !== this && (e.focus = this);
  }
  _r33e0b4489f91d6(e) {
    e != null &&
      (e.addEventListener(UnkClass_fd7c12._r9001c395573374, this._rf3f347d0b615d2),
      e.addEventListener(UnkClass_fd7c12.var_370, this._r49c67624b0b5e3),
      e.addEventListener(UnkClass_fd7c12._ra93f33360c3a28, this._rb39726d43f7cc1),
      e.addEventListener(UnkClass_fd7c12.DOUBLE_CLICK, this._re5e84214b9fe2c));
  }
  _re5ce230b034e38(e) {
    e != null &&
      (e.removeEventListener(UnkClass_fd7c12._r9001c395573374, this._rf3f347d0b615d2),
      e.removeEventListener(UnkClass_fd7c12.var_370, this._r49c67624b0b5e3),
      e.removeEventListener(UnkClass_fd7c12._ra93f33360c3a28, this._rb39726d43f7cc1),
      e.removeEventListener(UnkClass_fd7c12.DOUBLE_CLICK, this._re5e84214b9fe2c));
  }
  _rd2e2ea5ecb6992(e, r) {
    let t = this._r4695c96d3c9ad8(new E(e, r));
    return this._r98beeeead727ae().contains(t.x, t.y);
  }
  _r47da4cd593a5d7() {
    let e = Date.now();
    ((this._r1432f27bb7f58f = !0), (this._rba6e163dd7d0d2 = e), (this._r939e55cdf585fa = e));
  }
  _r4ac25d8350e524() {
    let e =
        this._r5d36b3c14a8289.length > 0
          ? Ws.BUTTON
          : this._r4fd6bb468fe519() && this.var_2160
            ? Ws.IBEAM
            : Ws._ra2fbbf5cdb86ed,
      r = this._r0203ab2933f479();
    ((r.cursor = e === Ws.BUTTON ? "pointer" : e === Ws.IBEAM ? "text" : "default"),
      this._hovering
        ? (UnkClass_db4c11.cursor = e)
        : (UnkClass_db4c11.cursor === Ws.IBEAM || UnkClass_db4c11.cursor === Ws.BUTTON) &&
          (UnkClass_db4c11.cursor = Ws._ra2fbbf5cdb86ed));
  }
  _r98beeeead727ae() {
    let e = Math.max(
        1,
        this.autoSize === nr.NONE
          ? this._r95924cff37cc3c
          : this._r6169b45d7460ee()
            ? this._r1db367de7fe78a().width
            : this._r55ac6e84ef8ab3().width,
      ),
      r = Math.max(
        1,
        this.autoSize === nr.NONE
          ? this._r27bd3ec1cffb1b
          : this._r6169b45d7460ee()
            ? this._r1db367de7fe78a().height
            : this._r55ac6e84ef8ab3().height,
      );
    return new D(0, 0, e, r);
  }
  _rffeb3c81249210(e) {
    return this.stage != null && Number.isFinite(e.stageX) && Number.isFinite(e.stageY)
      ? this._r4695c96d3c9ad8(new E(e.stageX, e.stageY))
      : new E(e.localX, e.localY);
  }
  _r1be5ddb137b95e(e, r, t) {
    let i = this._rffeb3c81249210(r);
    return new UnkClass_fd7c12(
      e,
      !1,
      !1,
      i.x,
      i.y,
      null,
      r.ctrlKey,
      r.altKey,
      r.shiftKey,
      t,
      r.delta,
      r.stageX,
      r.stageY,
      r.clickCount,
    );
  }
  _rfd85cf53c2777f(e) {
    return e.clickCount > 0 ? Math.max(1, Math.trunc(e.clickCount)) : 1;
  }
  async _rb60e40de9d56fb() {
    let e = await globalThis.navigator?.clipboard?.readText?.();
    typeof e == "string" && e.length > 0 && this._r34ed764abb1a04(e);
  }
  _r601a063da6bfb9(e) {
    if (e < 0 || e >= this.length) return null;
    let r = this._r1af71960ff3657(e);
    return new D(r.x - this.scrollH, r.y - this._r45d103f104a109(), r.width, r.height);
  }
  _r7b0201ad66b552(e, r) {
    let t = this._ra8fb4f921bb3f0(),
      i = e + this.scrollH,
      s = r + this._r45d103f104a109();
    for (let o of t)
      if (s >= o.y && s < o.y + o.height) {
        if (!this._r6169b45d7460ee()) {
          let d = this._r8ce353e663f719(o),
            c = this._r29f93dcb12ff25(o);
          for (let f = 0; f < o.text.length; f++) {
            let l = c + d[f],
              b = c + Math.max(d[f] + 1, d[f + 1]);
            if (i >= l && i < b) return o.start + f;
          }
          return o.start + Math.max(0, o.text.length - 1);
        }
        for (let d = 0; d < o.text.length; d++) {
          let c = this._r1af71960ff3657(o.start + d);
          if (i >= c.x && i < c.x + c.width) return o.start + d;
        }
        return o.start + Math.max(0, o.text.length - 1);
      }
    return -1;
  }
  _r366a2254ac478b(e) {
    let r = Math.max(0, Math.min(e, this.length)),
      t = this._text.lastIndexOf(
        `
`,
        Math.max(0, r - 1),
      );
    return t >= 0 ? t + 1 : 0;
  }
  _r85fe8292acb387(e) {
    return null;
  }
  _r291d4718f54b85(e, r) {
    let t = this._ra8fb4f921bb3f0(),
      i = r + this._r45d103f104a109();
    return t.findIndex((s) => i >= s.y && i < s.y + s.height);
  }
  _reb75aeced95039(e) {
    return this._ra8fb4f921bb3f0().findIndex((r) => e >= r.start && e < r.start + r.text.length);
  }
  _rdfb40d86a717f7(e) {
    return this._r97006b8973bc3b(e)?.text.length ?? 0;
  }
  _r6a97a2ac65f8d7(e) {
    let r = this._r97006b8973bc3b(e),
      t = r?.metrics ?? this._re1b2a098aa2c81();
    return this._r19eaa0f3c46151()
      ? new UnkClass_637152(2, r?.width ?? 0, t.lineHeight, t.ascent, t.descent, this._r62eee119fd2dbb())
      : _ibf96973eeaf82f(r?.width ?? 0, t, this._r62eee119fd2dbb());
  }
  _rfba353da9d7496(e) {
    return this._r97006b8973bc3b(e)?.start ?? -1;
  }
  _r4020e8798d5842(e) {
    return this._r97006b8973bc3b(e)?.text ?? "";
  }
  _r1489a67197b3cf(e) {
    let r = this._r366a2254ac478b(e),
      t = this._text.indexOf(
        `
`,
        r,
      );
    return (t >= 0 ? t : this.length) - r;
  }
  _r41acf51fb45a6f(e) {
    return Math.max(0, Math.min(this.length, Math.trunc(e) - 1));
  }
  _r000f29174a9970(e) {
    return Math.max(0, Math.min(this.length, Math.trunc(e) + 1));
  }
  _r639e8b023800d3(e) {
    let r = Math.max(0, Math.min(this.length, Math.trunc(e)));
    for (; r > 0 && this._r774dd1083480bc(this._text.charAt(r - 1));) r--;
    for (; r > 0 && !this._r774dd1083480bc(this._text.charAt(r - 1));) r--;
    return r;
  }
  _r2298f9be7c3200(e) {
    let r = Math.max(0, Math.min(this.length, Math.trunc(e)));
    for (; r < this.length && this._r774dd1083480bc(this._text.charAt(r));) r++;
    for (; r < this.length && !this._r774dd1083480bc(this._text.charAt(r));) r++;
    return r;
  }
  _r774dd1083480bc(e) {
    return e.length === 0 || a._ra6bbfdf9795350.test(e);
  }
  _rbf937453187877(e, r) {
    if (this.length === 0) return { start: 0, end: 0 };
    let t = this._r7b0201ad66b552(e, r);
    if (t >= 0 && !this._r774dd1083480bc(this._text.charAt(t))) return this._r23176c0910d41e(t, "forward");
    let i = this._ra6c332ecf03f64(e, r),
      s = i <= 0 ? "forward" : "backward";
    return this._r2cad3b34e4b478(i, s);
  }
  _r23176c0910d41e(e, r) {
    if (this.length === 0) return { start: 0, end: 0 };
    let t = Math.max(0, Math.min(Math.trunc(e), this.length - 1));
    if (this._r774dd1083480bc(this._text.charAt(t)))
      if (r === "forward") {
        for (; t < this.length && this._r774dd1083480bc(this._text.charAt(t));) t++;
        if (t >= this.length) return { start: this.length, end: this.length };
      } else {
        for (; t >= 0 && this._r774dd1083480bc(this._text.charAt(t));) t--;
        if (t < 0) return { start: 0, end: 0 };
      }
    let i = t,
      s = t + 1;
    for (; i > 0 && !this._r774dd1083480bc(this._text.charAt(i - 1));) i--;
    for (; s < this.length && !this._r774dd1083480bc(this._text.charAt(s));) s++;
    return { start: i, end: s };
  }
  _r2cad3b34e4b478(e, r) {
    let t = Math.max(0, Math.min(Math.trunc(e), this.length));
    return this.length === 0
      ? { start: 0, end: 0 }
      : r === "backward"
        ? t <= 0
          ? { start: 0, end: 0 }
          : this._r23176c0910d41e(t - 1, "backward")
        : t >= this.length
          ? { start: this.length, end: this.length }
          : this._r23176c0910d41e(t, "forward");
  }
  _rd7e300fde6446b(e, r) {
    let t = this._ra8fb4f921bb3f0();
    if (t.length === 0) return { start: 0, end: 0 };
    let i = this._r291d4718f54b85(e, r),
      s = i >= 0 ? t[i] : r < t[0].y ? t[0] : t[t.length - 1];
    return s == null ? { start: 0, end: 0 } : { start: s.start, end: s.start + s.text.length };
  }
  _rba202a97081d05(e, r) {
    let t = this._recd505971dcbbf;
    if (t == null) return;
    let i = this._ra6c332ecf03f64(e, r);
    if (i < t.start) {
      this._ra77eeaa55803ca(t, this._r2cad3b34e4b478(i, "backward"));
      return;
    }
    if (i > t.end) {
      this._ra77eeaa55803ca(t, this._r2cad3b34e4b478(i, "forward"));
      return;
    }
    this.setSelectionRange(t.start, t.end);
  }
  _ra5ccc4bd877914(e, r) {
    let t = this._recd505971dcbbf;
    t != null && this._ra77eeaa55803ca(t, this._rd7e300fde6446b(e, r));
  }
  _ra77eeaa55803ca(e, r) {
    if (r.end <= e.start) {
      this.setSelectionRange(e.end, r.start);
      return;
    }
    if (r.start >= e.end) {
      this.setSelectionRange(e.start, r.end);
      return;
    }
    if (r.start < e.start) {
      this.setSelectionRange(e.end, r.start);
      return;
    }
    if (r.end > e.end) {
      this.setSelectionRange(e.start, r.end);
      return;
    }
    this.setSelectionRange(e.start, e.end);
  }
  _ra579f436c1f9a2(e) {
    return this._rc110fd8e821c17(e)?.start ?? 0;
  }
  _r74e8becfda3c55(e) {
    let r = this._rc110fd8e821c17(e);
    return r == null ? this.length : r.start + r.text.length;
  }
  _r7e28a6077fb69e(e) {
    let r = this._rf14ecd094a8e9e(e);
    if (r <= 0) return this._ra579f436c1f9a2(e);
    let t = this._rf446bee3f2dc99(e),
      i = this._r97006b8973bc3b(r - 1);
    return i == null ? this._ra579f436c1f9a2(e) : this._rb65621b26fb6b7(i, t.x + this.scrollH);
  }
  _r9e75b84805dec2(e) {
    let r = this._rf14ecd094a8e9e(e),
      t = this._ra8fb4f921bb3f0();
    if (r < 0 || r >= t.length - 1) return this._r74e8becfda3c55(e);
    let i = this._rf446bee3f2dc99(e),
      s = t[r + 1] ?? null;
    return s == null ? this._r74e8becfda3c55(e) : this._rb65621b26fb6b7(s, i.x + this.scrollH);
  }
  _rf14ecd094a8e9e(e) {
    let r = Math.max(0, Math.min(Math.trunc(e), this.length)),
      t = this._ra8fb4f921bb3f0();
    for (let i = 0; i < t.length; i++) {
      let s = t[i],
        o = s.start + s.text.length,
        d = t[i + 1] ?? null;
      if (r < s.start || r < o) return i;
      if (r === o) {
        if (d != null && d.start === r) continue;
        return i;
      }
    }
    return Math.max(0, t.length - 1);
  }
  _rc110fd8e821c17(e) {
    let r = this._ra8fb4f921bb3f0(),
      t = Math.max(0, Math.min(Math.trunc(e), this.length));
    for (let i = 0; i < r.length; i++) {
      let s = r[i],
        o = s.start + s.text.length,
        d = r[i + 1] ?? null;
      if (t < s.start || t < o) return s;
      if (t === o) {
        if (d != null && d.start === t) continue;
        return s;
      }
    }
    return r[r.length - 1] ?? null;
  }
  _ra6c332ecf03f64(e, r) {
    let t = this._ra8fb4f921bb3f0();
    if (t.length === 0) return 0;
    let i = this._r291d4718f54b85(e, r),
      s = i >= 0 ? t[i] : r < t[0].y ? t[0] : t[t.length - 1];
    return s == null ? 0 : this._rb65621b26fb6b7(s, e + this.scrollH);
  }
  _rb65621b26fb6b7(e, r) {
    if (e.text.length === 0) return e.start;
    let t = this._r29f93dcb12ff25(e),
      i = r - t;
    if (!this._r6169b45d7460ee()) {
      let o = this._r8ce353e663f719(e);
      for (let d = 0; d < e.text.length; d++) {
        let c = o[d],
          f = Math.max(c + 1, o[d + 1]),
          l = c + (f - c) / 2;
        if (i < l) return e.start + d;
      }
      return e.start + e.text.length;
    }
    let s = 0;
    for (let o = 0; o < e.text.length; o++) {
      let d = e.start + o,
        c = this._r1af71960ff3657(d),
        f = Math.max(1, c.width),
        l = s + f / 2;
      if (i < l) return d;
      s += f;
    }
    return e.start + e.text.length;
  }
  _r12c1762d42d039(e) {
    let r = this._rc110fd8e821c17(e);
    if (r == null)
      return { x: a._r24dd91ea55b85c, y: a._r38e3b4804d3f2c, width: 1, height: this._rc1b1657a416212() };
    let t = Math.max(0, Math.min(Math.trunc(e) - r.start, r.text.length)),
      i = this._r29f93dcb12ff25(r) + this._rf1c9fd8293cfd8(r, t),
      s = r.y;
    return { x: Math.round(i), y: Math.round(s), width: 1, height: r.height };
  }
  _rf446bee3f2dc99(e) {
    let r = this._r12c1762d42d039(e);
    return {
      x: Math.round(r.x - this.scrollH),
      y: Math.round(r.y - this._r45d103f104a109()),
      width: r.width,
      height: r.height,
    };
  }
  _r5e1c3dcbc409ba(e, r) {
    let t = Math.max(0, Math.min(e, r)),
      i = Math.max(t, Math.max(e, r));
    if (t === i) return [];
    let s = [];
    for (let o of this._ra8fb4f921bb3f0()) {
      let d = o.start,
        c = o.start + o.text.length,
        f = Math.max(t, d),
        l = Math.min(i, c);
      if (f >= l) continue;
      let b = f - d,
        _ = l - d,
        h = this._r29f93dcb12ff25(o) + this._rf1c9fd8293cfd8(o, b) - this.scrollH,
        p = this._r29f93dcb12ff25(o) + this._rf1c9fd8293cfd8(o, _) - this.scrollH;
      s.push({
        x: Math.round(h),
        y: Math.round(o.y - this._r45d103f104a109()),
        width: Math.max(1, Math.round(p - h)),
        height: o.height,
      });
    }
    return s;
  }
  _r67fa066a717cf2() {
    let e = this._r12c1762d42d039(this._r8fd1af60c8f1b5),
      r = this._r16fc4b06e9c55a(),
      t = this._r412ed8c2678b5a(r),
      i = Math.max(1, this.width - (a._r24dd91ea55b85c + this._rf3d8cf7ed09cc5())),
      s = this._ra2acd65e93d238(),
      o = a._r24dd91ea55b85c,
      d = a._r24dd91ea55b85c + i - 1,
      c = Math.max(0, Math.ceil(e.x - d)),
      f = Math.max(0, Math.floor(e.x - o));
    this.scrollH < c
      ? (this.scrollH = c)
      : this.scrollH > f && (this.scrollH = f);
    let l = this._rf14ecd094a8e9e(this._r8fd1af60c8f1b5),
      b = r.lines[l] ?? null;
    if (l < t._rcccaa9fbeaeb40) {
      this.var_46 = Math.max(1, l + 1);
      return;
    }
    if (b == null) {
      this.var_46 = Math.max(1, l + 1);
      return;
    }
    if (!this._rc3e7ce03c2c0e8(b, t._r8f5cc3bff7f662, s)) {
      let _ = this._r7e0256f40a8fbf(b, r, s);
      this.var_46 = this._rdb0062fb269194(_, r);
    }
  }
  _r45d103f104a109() {
    return this._r412ed8c2678b5a()._r8f5cc3bff7f662;
  }
  _rae3a460d730327() {
    return Math.max(1, this.height - (a._r38e3b4804d3f2c + this._re373c382db1dfb()));
  }
  _r05837f5f701fc4(e = this._r16fc4b06e9c55a(), r = 0) {
    let t = r,
      i = this._rae3a460d730327();
    return (this._r6169b45d7460ee(), i);
  }
  _ra2acd65e93d238() {
    return this._r05837f5f701fc4(this._r16fc4b06e9c55a(), this._r45d103f104a109());
  }
  _r16fc4b06e9c55a() {
    return this._r6169b45d7460ee() ? this._r1db367de7fe78a() : this._r55ac6e84ef8ab3();
  }
  _ra2c3eeff0c8f54(e = this._r45d103f104a109()) {
    return a._r38e3b4804d3f2c;
  }
  _rd5e7bc778f9f81(e = this._r55ac6e84ef8ab3(), r = this._r45d103f104a109()) {
    return this._r05837f5f701fc4(e, r);
  }
  _r663c3e7aec7fe4(e = this._r45d103f104a109()) {
    return this._ra2c3eeff0c8f54(e);
  }
  _r0474c33b3ced7f(e = this._r55ac6e84ef8ab3(), r = this._r663c3e7aec7fe4()) {
    return r === a._r38e3b4804d3f2c && e._r60357ca5ecd4df != null
      ? e._r60357ca5ecd4df
      : e.lines.map((t) => ({
          text: t.text,
          start: t.start,
          width: t.width,
          height: t.height,
          y: t.y + r,
          metrics: t.metrics,
          fragments: t.fragments,
          _r90ee472f62f1e0: t._r90ee472f62f1e0,
        }));
  }
  _rb9358e6664bfbd(e, r) {
    let t = 0;
    for (let i = 1; i < r.length && r[i].y <= e; i++) t = i;
    return t;
  }
  _rdb0062fb269194(e, r = this._r16fc4b06e9c55a()) {
    let t = r.lines;
    return t.length === 0 ? 1 : Math.min(this._rb52bf60cd31b51(r), this._rb9358e6664bfbd(e, t) + 1);
  }
  _rb52bf60cd31b51(e = this._r16fc4b06e9c55a()) {
    let r = e.lines;
    if (r.length === 0) return 1;
    if (!this._r6169b45d7460ee()) {
      let i = this._racc5ddca6ff16a(e);
      return Math.max(1, r.length - i + 1);
    }
    let t = this._r409f7b1f8ed9e5(e);
    return this._rb9358e6664bfbd(t, r) + 1;
  }
  _r409f7b1f8ed9e5(e = this._r16fc4b06e9c55a()) {
    if (!this._r6169b45d7460ee()) {
      let r = this._rb52bf60cd31b51(e),
        t = e.lines[Math.max(0, r - 1)] ?? null;
      return Math.max(0, t?.y ?? 0);
    }
    return Math.max(0, e.textHeight - this._r05837f5f701fc4(e, 0));
  }
  _r0043d3dfa47b08(e, r, t) {
    let i = r,
      s = r + t,
      o = Math.max(e.y, i),
      d = Math.min(e.y + e.height, s);
    return Math.max(0, d - o);
  }
  _rdfd7cae0cfc21b(e, r) {
    let t = Math.min(e.height, r);
    return Math.max(1, t - 0.5);
  }
  _rc3e7ce03c2c0e8(e, r, t) {
    return this._r0043d3dfa47b08(e, r, t) >= this._rdfd7cae0cfc21b(e, t);
  }
  _r7e0256f40a8fbf(e, r, t) {
    let i = this._r409f7b1f8ed9e5(r);
    return this._r6169b45d7460ee()
      ? Math.max(0, Math.min(e.y + e.height - t, i))
      : Math.max(0, Math.min(e.y, i));
  }
  _racc5ddca6ff16a(e = this._r55ac6e84ef8ab3()) {
    let r = e.lines;
    if (r.length === 0) return 1;
    let t = this._r05837f5f701fc4(e, 0),
      i = 0;
    for (let s of r) {
      if (!this._rc3e7ce03c2c0e8(s, 0, t)) break;
      i++;
    }
    return Math.max(1, i);
  }
  _r412ed8c2678b5a(e = this._r16fc4b06e9c55a()) {
    let r = e.lines;
    if (r.length === 0)
      return {
        _rcccaa9fbeaeb40: 0,
        _r744b15abfdffd7: 0,
        _r756e39c0779e02: 1,
        _r8f5cc3bff7f662: 0,
        _r4e8cc4f8d5d64a: 1,
        _r5733287651adec: 1,
      };
    if (!this._r6169b45d7460ee()) {
      let b = this._rb52bf60cd31b51(e),
        _ = Math.max(0, Math.min(this.var_940 - 1, b - 1)),
        h = Math.max(0, r[_]?.y ?? 0),
        p = this._r05837f5f701fc4(e, h),
        m = _;
      for (; m < r.length && this._rc3e7ce03c2c0e8(r[m], h, p);) m++;
      return (
        m === _ && (m = Math.min(r.length, _ + 1)),
        {
          _rcccaa9fbeaeb40: _,
          _r744b15abfdffd7: m,
          _r756e39c0779e02: Math.max(1, m - _),
          _r8f5cc3bff7f662: h,
          _r4e8cc4f8d5d64a: Math.max(1, m),
          _r5733287651adec: b,
        }
      );
    }
    let t = this._rb52bf60cd31b51(e),
      i = Math.max(0, Math.min(this.var_940 - 1, t - 1)),
      s = this._r409f7b1f8ed9e5(e),
      o = Math.max(0, r[i]?.y ?? 0),
      d = i === t - 1 ? s : o,
      c = this._r05837f5f701fc4(e, d),
      f = d + c,
      l = i;
    for (; l < r.length && !(r[l].y >= f);) l++;
    return (
      l === i && (l = Math.min(r.length, i + 1)),
      {
        _rcccaa9fbeaeb40: i,
        _r744b15abfdffd7: l,
        _r756e39c0779e02: Math.max(1, l - i),
        _r8f5cc3bff7f662: d,
        _r4e8cc4f8d5d64a: Math.max(1, l),
        _r5733287651adec: t,
      }
    );
  }
  _r29f93dcb12ff25(e) {
    let r = this._rb3eefeff40be63();
    return a._r24dd91ea55b85c + this._r72c21dbd646ead(e.width, r);
  }
  _r8ce353e663f719(e) {
    if (e._r90ee472f62f1e0 != null) return e._r90ee472f62f1e0;
    let r = UnkClass_f7e6bd._r90ee472f62f1e0(e.text, this._rd76fb3dd0485f0());
    if (r) return ((e._r90ee472f62f1e0 = r), r);
    let t = new Array(e.text.length + 1);
    t[0] = 0;
    for (let i = 1; i <= e.text.length; i++) t[i] = this._r0093021364853a(e.text.slice(0, i));
    return ((e._r90ee472f62f1e0 = t), t);
  }
  _rf1c9fd8293cfd8(e, r) {
    let t = Math.max(0, Math.min(Math.trunc(r), e.text.length));
    if (this._r6169b45d7460ee()) {
      let i = e.fragments ?? [],
        s = 0;
      for (let o of i) {
        if (t <= o.start) break;
        let d = Math.min(t, o.end),
          c = Math.max(o.start, 0),
          f = o.text.slice(0, Math.max(0, d - c));
        if (((s += this._r2161d17fcc2ba6(f, o.style)), t < o.end)) break;
      }
      return s;
    }
    return this._r8ce353e663f719(e)[t];
  }
  updateStyle() {
    let e = this._rfd454f4d33a88a ? "*".repeat(this._text.length) : this._text,
      r = this.defaultTextFormat.font ?? a._r3b2ccde20be56a,
      t = this._r3bb994c7cf1eb2(),
      i = _i89b91ec0bcecb2(
        this._textColor ??
          (typeof this.defaultTextFormat.color == "number" ? this.defaultTextFormat.color : 0),
      ),
      s = Math.max(1, this._r95924cff37cc3c - (a._r24dd91ea55b85c + this._rf3d8cf7ed09cc5())),
      o = this._r3371a61a31c39d(),
      d = this._r7435e58e7ba88e(o),
      c = d && this._r46648aff737fe5(),
      f = d ? this._r4b8281e14dde43(c) : e;
    ((this._r952cf349dfef2b.style = new u6({
      fontFamily: r,
      fontSize: t,
      fill: i,
      fontWeight: this.defaultTextFormat.bold ? "bold" : "normal",
      fontStyle: this.defaultTextFormat.italic ? "italic" : "normal",
      wordWrap: this.wordWrap && !d,
      wordWrapWidth: this.wordWrap && !d && this._r95924cff37cc3c > 0 ? s : void 0,
      align: typeof this.defaultTextFormat.align == "string" ? this.defaultTextFormat.align : "left",
      breakWords: !1,
      stroke: { width: 0, join: "miter", miterLimit: 10 },
      padding: a._rb6d0f8bed44db0,
      lineHeight: this._raa30908ed7ca9b(),
    })),
      (this._r952cf349dfef2b.resolution = 1),
      (this._r952cf349dfef2b.roundPixels = !0));
    let l = this._r952cf349dfef2b.textureStyle;
    (l != null && (l.scaleMode = "nearest"),
      this._r4ac25d8350e524(),
      o
        ? ((this._r952cf349dfef2b.visible = !1),
          (this._r08fcb1befe0a8e.visible = !0),
          (this._r952cf349dfef2b.text = ""),
          this._rd78675388d2959())
        : ((this._r08fcb1befe0a8e.visible = !1),
          this._rb93c9f9b6be1cd(1, 0),
          (this._r952cf349dfef2b.visible = !0),
          (this._r952cf349dfef2b.text = f),
          (this._r952cf349dfef2b.x = Math.round(a._r24dd91ea55b85c - this.scrollH)),
          (this._r952cf349dfef2b.y = c
            ? this._r663c3e7aec7fe4()
            : this._r663c3e7aec7fe4() - this._r45d103f104a109())),
      this._rfd8e5d395fd48e(),
      this._r2b9734155f20dc(!0));
  }
  _r1788c3d55fb3d1() {
    return this.antiAliasType !== "advanced" ||
      this.background ||
      this.border ||
      this._hasFocus ||
      this._r8efbde12b3bb4a()
      ? !1
      : this._r6169b45d7460ee()
        ? this._r8e8a370033abe0().every((e) =>
            UnkClass_f7e6bd.supports(this._rd76fb3dd0485f0(e.style), e.text.replace(/[\r\n]/g, "")),
          )
        : UnkClass_f7e6bd.supports(
            this._rd76fb3dd0485f0(),
            (this._rfd454f4d33a88a ? "*".repeat(this._text.length) : this._text).replace(/[\r\n]/g, ""),
          );
  }
  _ra4a8b23e4d0f03(e, r, t, i, s) {
    if (!this._r1788c3d55fb3d1() || !Number.isInteger(r) || !Number.isInteger(t)) return !1;
    let o = Math.max(0, r, Math.ceil(s?.x ?? 0)),
      d = Math.max(0, t, Math.ceil(s?.y ?? 0)),
      c = Math.min(e.canvas.width, r + Math.ceil(this.width), Math.floor(s?.right ?? e.canvas.width)),
      f = Math.min(e.canvas.height, t + Math.ceil(this.height), Math.floor(s?.bottom ?? e.canvas.height));
    if (c <= o || f <= d) return !0;
    if ((c - o) * (f - d) > 2 * 1024 * 1024) return !1;
    let l = e.getImageData(o, d, c - o, f - d);
    UnkClass_f7e6bd.premultiply(l.data);
    let b = this._r16fc4b06e9c55a(),
      _ = this._r412ed8c2678b5a(b),
      h = n((p, m, v, w) => {
        let I = { ...this._rd76fb3dd0485f0(m), ...(i ? { colorTransform: i } : {}) },
          C = UnkClass_f7e6bd.metrics(I);
        UnkClass_f7e6bd._re8a0a4624d00b0(p, I, {
          pixels: l.data,
          width: l.width,
          height: l.height,
          offsetX: r + Math.round(v) - 2 - o,
          offsetY: t + Math.round(w) - (C.baseline + 2) - d,
        });
      }, "render");
    for (let p = _._rcccaa9fbeaeb40; p < _._r744b15abfdffd7; p++) {
      let m = b.lines[p],
        v = a._r38e3b4804d3f2c + m.y + m.metrics.baseline - _._r8f5cc3bff7f662,
        w =
          a._r24dd91ea55b85c +
          this._r72c21dbd646ead(m.width, this._rb3eefeff40be63()) -
          this.scrollH;
      if (this._r6169b45d7460ee()) for (let I of m.fragments) h(I.text, I.style, w + I.x, v);
      else h(m.text, this._r13af17502d9fae(), w, v);
    }
    return (UnkClass_f7e6bd._r02cbff7ef0bf66(l.data), e.putImageData(l, o, d), !0);
  }
  _r468945e844d33f(e = null) {
    let r = this._r2ba055067b87b8;
    this._r2ba055067b87b8 = e;
    try {
      return this._r0042dee4ded2c4();
    } finally {
      this._r2ba055067b87b8 = r;
    }
  }
  _r0042dee4ded2c4() {
    let e = Math.max(1, Math.ceil(this.width || 1)),
      r = Math.max(1, Math.ceil(this.height || 1)),
      t = _i295affcc6e4d03(e, r),
      i = _i5183d3213c4d99(t);
    if (t == null || i == null) return null;
    let s = this._rf897c91d9e7c25();
    if (s <= 1) return (this._r43d822bc80ae0b(t, i, e, r), t);
    let o = _i295affcc6e4d03(Math.max(1, Math.ceil(e * s)), Math.max(1, Math.ceil(r * s))),
      d = _i5183d3213c4d99(o);
    return o == null || d == null
      ? (this._r43d822bc80ae0b(t, i, e, r), t)
      : (this._r43d822bc80ae0b(o, d, e, r, s),
        i.setTransform(1, 0, 0, 1, 0, 0),
        i.clearRect(0, 0, e, r),
        (i.imageSmoothingEnabled = !0),
        (i.imageSmoothingQuality = "high"),
        i.drawImage(o, 0, 0, e, r),
        this._rc0009f483d6244() && this._r167446e2d26e84(i, e, r),
        t);
  }
  _ree80e141df2229 = n((e) => {
    if (this._r5d36b3c14a8289.length === 0) return;
    let r = a._re4a4f8c26393ce(e);
    if (r == null) return;
    let t = this._r0203ab2933f479().toLocal(r),
      i = this._r7b0201ad66b552(t.x, t.y);
    if (!(i < 0)) {
      for (let s of this._r5d36b3c14a8289)
        if (!(i < s.start || i >= s.end)) {
          this.dispatchEvent(new UnkClass_6d7150(UnkClass_6d7150.LINK, !1, !1, s.href));
          break;
        }
    }
  }, "_ree80e141df2229");
  static _r6a648881a93f17(e) {
    let r = Number(e?.detail);
    return !Number.isFinite(r) || r <= 0 ? 0 : Math.trunc(r);
  }
  static _re4a4f8c26393ce(e) {
    let r = e?.global ?? e?.data?.global ?? null;
    return r == null ? null : { x: r.x, y: r.y };
  }
  _rfd8e5d395fd48e() {
    let e = this._r3371a61a31c39d(),
      r = this._r3e7c8451ca6fc9(),
      t = Math.max(
        1,
        this.autoSize === nr.NONE
          ? this._r95924cff37cc3c
          : e
            ? this._r3be9e7704bd859()
            : this._r952cf349dfef2b.width,
      ),
      i = Math.max(
        1,
        this.autoSize === nr.NONE
          ? this._r27bd3ec1cffb1b
          : e
            ? this._r5a6ed7ec19f3a0()
            : this._r952cf349dfef2b.height,
      );
    (this.graphics.clear(),
      this.graphics.endFill(),
      this.graphics.lineStyle(0, 0, 0),
      this._r7819a17c61b4b7.clear(),
      this.background &&
        (this.graphics.beginFill(this.backgroundColor),
        this.graphics.drawRect(0, 0, t, i),
        this.graphics.endFill()),
      this.border &&
        (this.graphics.lineStyle(1, this.borderColor),
        this.graphics.drawRect(0.5, 0.5, Math.max(0, t - 1), Math.max(0, i - 1)),
        this.graphics.lineStyle(0, 0, 0)),
      !this._r3371a61a31c39d() && this.defaultTextFormat.underline === !0 && this._r463c2dd6cf964f(),
      this._rc0009f483d6244() && this._r0199a11acde0c0(t, i));
    let s = Math.max(1, t - (a._r24dd91ea55b85c + this._rf3d8cf7ed09cc5())),
      o = e ? null : this._r55ac6e84ef8ab3(),
      d = e ? 0 : this._r45d103f104a109(),
      c =
        !e && o != null
          ? this._rd5e7bc778f9f81(o, d)
          : Math.max(1, i - (a._r38e3b4804d3f2c + this._re373c382db1dfb())),
      f = e ? a._r38e3b4804d3f2c : this._ra2c3eeff0c8f54(d),
      l = this._r0203ab2933f479();
    ((l.hitArea = { contains: n((b, _) => b >= 0 && _ >= 0 && b < t && _ < i, "contains") }),
      this._rfc96e607defcc0.clear(),
      this._r8fc15fe95fb45f(this._rfc96e607defcc0, a._r24dd91ea55b85c, f, s, c, 16777215, 1),
      this._r320de7fa50b95a(r),
      this._rf6dcaeaf206627.clear(),
      this._r8fc15fe95fb45f(
        this._rf6dcaeaf206627,
        a._r24dd91ea55b85c,
        f,
        s + (this._r4fd6bb468fe519() ? a._r01c340fb328a89 : 0),
        c,
        16777215,
        1,
      ),
      this._rf252f6127e25c1());
  }
  _rff2edd19ea2bf7() {}
  _r8fc15fe95fb45f(e, r, t, i, s, o, d = 1) {
    e.rect(r, t, i, s).fill({ color: _i89b91ec0bcecb2(o), alpha: d });
  }
  _r2b9734155f20dc(e = !1) {
    if (!this._r3371a61a31c39d()) {
      ((this._r4be5699911c66f = Number.NaN), (this._r7d53f6982aa1ca = Number.NaN));
      return;
    }
    if (
      this._r08fcb1befe0a8e.mask !== this._rfc96e607defcc0 ||
      this._r7819a17c61b4b7.mask !== this._rfc96e607defcc0
    ) {
      ((this._r4be5699911c66f = Number.NaN), (this._r7d53f6982aa1ca = Number.NaN));
      return;
    }
    let r = this._r08fcb1befe0a8e.worldTransform ?? null,
      t = r?.tx ?? 0,
      i = r?.ty ?? 0;
    (!e && this._r4be5699911c66f === t && this._r7d53f6982aa1ca === i) ||
      ((this._r4be5699911c66f = t),
      (this._r7d53f6982aa1ca = i),
      (this._r08fcb1befe0a8e.mask = null),
      (this._r08fcb1befe0a8e.mask = this._rfc96e607defcc0),
      (this._r7819a17c61b4b7.mask = null),
      (this._r7819a17c61b4b7.mask = this._rfc96e607defcc0));
  }
  _rf252f6127e25c1() {
    if ((this._r2005c12fec614a.clear(), !!this._r4fd6bb468fe519())) {
      if ((this._hasFocus || this._r631e445de700b8) && this._r8efbde12b3bb4a()) {
        let e = this._r5e1c3dcbc409ba(this._ra16e18884bf848, this._r260984f991cac7);
        if (e.length > 0) {
          let r = this._hasFocus ? 689407 : 8947848;
          for (let t of e) this._r8fc15fe95fb45f(this._r2005c12fec614a, t.x, t.y, t.width, t.height, r, 0.35);
        }
      }
      if (this._hasFocus && this._r1432f27bb7f58f) {
        let e = this._rf446bee3f2dc99(this._r8fd1af60c8f1b5);
        this._r8fc15fe95fb45f(
          this._r2005c12fec614a,
          Math.round(e.x),
          Math.round(e.y),
          1,
          Math.max(1, Math.round(e.height)),
          0,
          1,
        );
      }
    }
  }
  _r3bb994c7cf1eb2() {
    return typeof this.defaultTextFormat.size == "number" ? this.defaultTextFormat.size : a._rac85bc38c1be66;
  }
  _r62eee119fd2dbb() {
    return Number(this.defaultTextFormat.leading ?? 0);
  }
  _raa30908ed7ca9b() {
    return Math.max(1, this._re1b2a098aa2c81().lineHeight);
  }
  _re1b2a098aa2c81(e = this._r13af17502d9fae()) {
    let r = UnkClass_f7e6bd.metrics(this._rd76fb3dd0485f0(e));
    if (r) return r;
    let t = e.fontFamily,
      i = e.bold ? "700" : "400",
      s = e.italic ? "italic" : "normal",
      o = _i642146d57f4e3e(t, i, s);
    if (o != null) {
      let c = _i3ab7afc58684f5(o, e.fontSize, e.leading);
      return (this._r6dd2562f33dd58(t, i, s, e.fontSize, e.leading, o, c), c);
    }
    let d = this._r5d799721d5f9b2(e);
    return (this._r6dd2562f33dd58(t, i, s, e.fontSize, e.leading, null, d), d);
  }
  _r5d799721d5f9b2(e) {
    let r = Mb.measureFont(this._rbe7819b6bd729d(e)),
      t = Math.max(0, r.ascent ?? e.fontSize),
      i = Math.max(0, r.descent ?? 0);
    return { ascent: t, descent: i, lineGap: 0, lineHeight: t + i + e.leading, baseline: t };
  }
  _r6dd2562f33dd58(e, r, t, i, s, o, d) {
    if (!a._rfaad45d5a2181e) return;
    let c = [e, r, t, o?.source ?? "fallback-canvas", i, s].join("|");
    this._r8589325e11b1fb !== c &&
      ((this._r8589325e11b1fb = c),
      console.debug("[TextField.fontMetrics]", {
        family: e,
        weight: r,
        style: t,
        fontSize: i,
        leading: s,
        source: o?.source ?? "fallback-canvas",
        parsedMetrics: o,
        pixelMetrics: d,
      }));
  }
  _ra8fb4f921bb3f0() {
    return this._r6169b45d7460ee()
      ? this._r1db367de7fe78a().lines.map((e) => ({
          text: e.text,
          start: e.start,
          width: e.width,
          height: e.height,
          y: e.y + a._r38e3b4804d3f2c,
          metrics: e.metrics,
          fragments: e.fragments,
          _r90ee472f62f1e0: e._r90ee472f62f1e0,
        }))
      : this._r0474c33b3ced7f();
  }
  _r97006b8973bc3b(e) {
    return this._ra8fb4f921bb3f0()[e] ?? null;
  }
  _r1af71960ff3657(e) {
    if (this._r6169b45d7460ee()) return this._r72747b2cc01e6b(e);
    let r = this._ra8fb4f921bb3f0();
    for (let t of r) {
      let i = t.start + t.text.length;
      if (e >= t.start && e < i) {
        let s = e - t.start,
          o = this._r8ce353e663f719(t),
          d = this._r29f93dcb12ff25(t) + o[s],
          c = Math.max(1, o[s + 1] - o[s]);
        return { x: d, y: t.y, width: c, height: t.height };
      }
    }
    return {
      x: 0,
      y: 0,
      width: Math.max(1, this._r0093021364853a(" ")),
      height: this._re1b2a098aa2c81().lineHeight,
    };
  }
  _r11c1ad4bb0b3aa(e, r, t) {
    if (e.length === 0) return [{ text: "", start: r, width: 0 }];
    let i = e.split(/(\s+)/).filter((_) => _.length > 0),
      s = [],
      o = "",
      d = 0,
      c = r,
      f = r,
      l = n(() => {
        (s.push({ text: o, start: c, width: d }), (o = ""), (d = 0), (c = f));
      }, "_i68fdb0d6290118"),
      b = n((_) => this._r0093021364853a(o + _), "_i6a761cc45b43e7");
    for (let _ of i) {
      let h = /^\s+$/.test(_),
        p = _;
      for (; p.length > 0;) {
        let m = b(p);
        if (m <= t) {
          ((o += p), (d = m), (f += p.length), (p = ""));
          break;
        }
        if (o.length > 0) {
          if (h) {
            let I = this._ref87d05d3544f5(o, p, t);
            if (I > 0) {
              let C = p.slice(0, I);
              ((o += C), (d = this._r0093021364853a(o)), (f += I), (p = p.slice(I)));
            }
          }
          l();
          continue;
        }
        let v = this._ref87d05d3544f5("", p, t);
        v <= 0 && (v = 1);
        let w = p.slice(0, v);
        ((o = w), (d = this._r0093021364853a(w)), (f += v), (p = p.slice(v)), l());
      }
    }
    return ((o.length > 0 || s.length === 0) && s.push({ text: o, start: c, width: d }), s);
  }
  _ref87d05d3544f5(e, r, t) {
    let i = 0,
      s = r.length;
    for (; i < s;) {
      let o = Math.floor((i + s + 1) / 2),
        d = e + r.slice(0, o);
      this._r0093021364853a(d) <= t ? (i = o) : (s = o - 1);
    }
    return i;
  }
  _r0093021364853a(e) {
    return this._r2161d17fcc2ba6(e, this._r13af17502d9fae());
  }
  _r2161d17fcc2ba6(e, r) {
    if (e.length === 0) return 0;
    let t = `${this._r1c6ae22725a208(r)}|${e}`,
      i = this._r6ad1a8ea9c634c.get(t);
    if (i != null) return i;
    let s = UnkClass_f7e6bd.measure(e, this._rd76fb3dd0485f0(r));
    if (s != null) return (this._r6f8dc7db1003b9(t, s), s);
    let o = this._r4e88bc5f8be34b._r0093021364853a(e, this._r9fe6638708eabc(r));
    if (o != null) return (this._r6f8dc7db1003b9(t, o), o);
    let d = a._ra2e0aab05f01c3;
    if (d == null) return 0;
    d.font = this._rbe7819b6bd729d(r);
    let c = d.measureText(e),
      f = Number(this.defaultTextFormat.letterSpacing ?? 0),
      l = f !== 0 && e.length > 1 ? f * (e.length - 1) : 0,
      b = Math.max(0, Math.ceil(c.width + l));
    return (this._r6f8dc7db1003b9(t, b), b);
  }
  _rbe7819b6bd729d(e) {
    let r = e.fontSize,
      t = e.fontFamily,
      i = e.italic ? "italic " : "",
      s = e.bold ? "bold " : "";
    return `${i}${s}${r}px ${t}`;
  }
  _r2b44e4360f3df7() {
    return Number(this.defaultTextFormat.letterSpacing ?? 0);
  }
  _r9fe6638708eabc(e) {
    return {
      fontFamily: e.fontFamily,
      fontSize: e.fontSize,
      bold: e.bold,
      italic: e.italic,
      color: e.color,
      antiAliasType: this.antiAliasType,
      letterSpacing: this._r2b44e4360f3df7(),
    };
  }
  _r1c6ae22725a208(e) {
    return [
      e.fontFamily,
      e.fontSize,
      e.bold === !0 ? 1 : 0,
      e.italic === !0 ? 1 : 0,
      e.leading,
      this._r2b44e4360f3df7(),
      this.antiAliasType,
      this.gridFitType,
      this.defaultTextFormat.kerning,
      this.stage?.quality ?? a._r2d4bb49367926b,
      UnkClass_f7e6bd.revision,
    ].join("|");
  }
  _r6f8dc7db1003b9(e, r) {
    for (
      this._r6ad1a8ea9c634c.has(e) && this._r6ad1a8ea9c634c.delete(e), this._r6ad1a8ea9c634c.set(e, r);
      this._r6ad1a8ea9c634c.size > a._r6a7f2e1ea33800;
    ) {
      let t = this._r6ad1a8ea9c634c.keys().next().value;
      if (t == null) break;
      this._r6ad1a8ea9c634c.delete(t);
    }
  }
  _r4f72be59b5fac9(e) {
    let r = e ?? "";
    if (this.restrict != null && this.restrict.length > 0) {
      let t = new RegExp(`[^${this.restrict}]`, "g");
      r = r.replace(t, "");
    }
    (this._r4c2336e24c69cc > 0 && (r = r.slice(0, this._r4c2336e24c69cc)),
      (this._text = r),
      this._ra16e18884bf848 > r.length && (this._ra16e18884bf848 = r.length),
      this._r260984f991cac7 > r.length && (this._r260984f991cac7 = r.length),
      this._r8fd1af60c8f1b5 > r.length && (this._r8fd1af60c8f1b5 = r.length),
      this._rdbd9f47dc0563e > r.length && (this._rdbd9f47dc0563e = r.length),
      this._rc56b7c501206ec > r.length && (this._rc56b7c501206ec = r.length),
      (this._rdbd9f47dc0563e = this._ra16e18884bf848),
      (this._rc56b7c501206ec = this._r260984f991cac7),
      this._rbb8e6be681262a(),
      this.updateStyle());
  }
  _r6169b45d7460ee() {
    return !this._rfd454f4d33a88a && this._r28e863b07726a4;
  }
  _r3371a61a31c39d() {
    return (
      this._r19eaa0f3c46151() || this._r6169b45d7460ee() || this._rc407fc18633de6() || this._r9f6b10612522ab()
    );
  }
  _r7435e58e7ba88e(e) {
    return !e && this.wordWrap && this._r95924cff37cc3c > 0;
  }
  _r46648aff737fe5() {
    return this.autoSize === nr.NONE;
  }
  _ra520920db5059b(e = this._r55ac6e84ef8ab3()) {
    let r = this._r412ed8c2678b5a(e);
    return this._r0474c33b3ced7f(e).slice(r._rcccaa9fbeaeb40, r._r744b15abfdffd7);
  }
  _r4b8281e14dde43(e = !1) {
    return e
      ? this._ra520920db5059b().map((r) => r.text).join(`
`)
      : this._ra8fb4f921bb3f0().map((r) => r.text).join(`
`);
  }
  _re91dfaede51ee6(e, r) {
    let t = Math.max(1, Math.trunc(e)),
      i = Math.max(1, Math.trunc(r));
    if (this._r121ff5990edf83 == null) return new D(0, 0, t, i);
    let s = Math.max(0, Math.min(t - 1, Math.trunc(this._r121ff5990edf83.x))),
      o = Math.max(0, Math.min(i - 1, Math.trunc(this._r121ff5990edf83.y))),
      d = Math.max(1, Math.min(t - s, Math.trunc(this._r121ff5990edf83.width))),
      c = Math.max(1, Math.min(i - o, Math.trunc(this._r121ff5990edf83.height)));
    return new D(s, o, d, c);
  }
  _r88beb34191c47e(e, r) {
    return e == null || r == null
      ? e == null && r == null
      : e.x === r.x && e.y === r.y && e.width === r.width && e.height === r.height;
  }
  _r9f6b10612522ab() {
    return a._rbd29be2ad3d442 > 1 && !this._r19eaa0f3c46151() && !this._rc407fc18633de6();
  }
  _rf897c91d9e7c25() {
    return this._r9f6b10612522ab() ? a._rbd29be2ad3d442 : 1;
  }
  _ref9a0c5062a9f5(e) {
    return 1 / Math.max(1, e);
  }
  _r98e0ea352d3ff1(e) {
    return this._r19eaa0f3c46151(e) || !this._r9f6b10612522ab()
      ? 1
      : a._r1e1dea291b69b0._r00808c3405df26(this._rf24de38fbcf858(e));
  }
  _r85b8f83252c3a9(e, r, t) {
    if (this._r19eaa0f3c46151(t) || !this._r9f6b10612522ab()) return e;
    let i = this._rf24de38fbcf858(t),
      s = a._r1e1dea291b69b0._rb7405b37102287(i);
    return Y$._rdde846d2517979(e, s);
  }
  _rf24de38fbcf858(e) {
    let r = { ...e, italic: !1 };
    return {
      fontFamily: r.fontFamily,
      fontSize: r.fontSize,
      bold: r.bold,
      font: this._rbe7819b6bd729d(r),
      _r1f9f493146f958: this._rf897c91d9e7c25(),
      _r80ea365068f77f: Math.max(this._rf897c91d9e7c25(), a._rd5300c4d903c9e),
    };
  }
  _rc407fc18633de6() {
    return this._r4e88bc5f8be34b._r3df055ad2d150a(this.defaultTextFormat.font);
  }
  _rd76fb3dd0485f0(e = this._r13af17502d9fae()) {
    return {
      ...(this._r2ba055067b87b8 ? { colorTransform: this._r2ba055067b87b8 } : {}),
      ...e,
      antiAliasType: this.antiAliasType,
      gridFitType: this.gridFitType,
      sharpness: this.sharpness,
      thickness: this.thickness,
      letterSpacing: this._r2b44e4360f3df7(),
      kerning: this.defaultTextFormat.kerning === !0,
      stageQuality: (this.stage?.quality ?? a._r2d4bb49367926b).toLowerCase() === "low" ? "low" : "high",
    };
  }
  _r19eaa0f3c46151(e = this._r13af17502d9fae()) {
    return UnkClass_f7e6bd.supports(this._rd76fb3dd0485f0(e));
  }
  _rc844fb5e1441ba(e, r) {
    return this.antiAliasType === "advanced" && UnkClass_f7e6bd.supports(this._rd76fb3dd0485f0(e), r);
  }
  _rf3d8cf7ed09cc5() {
    return this._r19eaa0f3c46151() ? 2 : a._r888a45c3502493;
  }
  _re373c382db1dfb() {
    return this._r19eaa0f3c46151() ? 2 : a._ra0c3f0b8595ac3;
  }
  _r09e36590213b3b(e) {
    return this._r19eaa0f3c46151()
      ? Math.round((e + 4 + (this._text.length ? UnkClass_f7e6bd._rff2380c6592875(this._rd76fb3dd0485f0()) : 0)) * 20) / 20
      : Math.ceil(e + a._r24dd91ea55b85c + this._rf3d8cf7ed09cc5());
  }
  _ra395c05651b697(e) {
    return this._r19eaa0f3c46151() ? e + 4 : Math.ceil(e + a._r38e3b4804d3f2c + this._re373c382db1dfb());
  }
  _rbb8e6be681262a() {
    ((this._rbb8faece1ce55e = null),
      (this._r989f2374956755 = null),
      (this._r543073a813c265 = null),
      (this._rfe6270475c444d = null));
  }
  _r5723ea09b99cf6() {
    return {
      text: this._rfd454f4d33a88a ? "*".repeat(this._text.length) : this._text,
      multiline: this.multiline,
      wordWrap: this.wordWrap,
      autoSize: this.autoSize,
      explicitWidth: this._r95924cff37cc3c,
      explicitHeight: this._r27bd3ec1cffb1b,
      styleKey: this._r1c6ae22725a208(this._r13af17502d9fae()),
    };
  }
  _rb4ede954ef6c55(e, r) {
    return (
      e != null &&
      e.text === r.text &&
      e.multiline === r.multiline &&
      e.wordWrap === r.wordWrap &&
      e.autoSize === r.autoSize &&
      e.explicitWidth === r.explicitWidth &&
      e.explicitHeight === r.explicitHeight &&
      e.styleKey === r.styleKey
    );
  }
  _r13af17502d9fae() {
    return {
      bold: this.defaultTextFormat.bold === !0,
      italic: this.defaultTextFormat.italic === !0,
      underline: this.defaultTextFormat.underline === !0,
      color: this.textColor,
      href: null,
      cssClass: null,
      fontFamily: this.defaultTextFormat.font ?? a._r3b2ccde20be56a,
      fontSize: this._r3bb994c7cf1eb2(),
      leading: this._r62eee119fd2dbb(),
    };
  }
  _r3be9e7704bd859() {
    return this._re39622dc1ba772();
  }
  _r5a6ed7ec19f3a0() {
    return this._r6169b45d7460ee() ? this._r1db367de7fe78a().height : this._r55ac6e84ef8ab3().height;
  }
  _re39622dc1ba772() {
    return this.autoSize === nr.NONE
      ? this._r95924cff37cc3c
      : this.wordWrap && this._r95924cff37cc3c > 0
        ? this._r95924cff37cc3c
        : this._r6169b45d7460ee()
          ? this._r1db367de7fe78a().width
          : this._r55ac6e84ef8ab3().width;
  }
  _rb3eefeff40be63() {
    return Math.max(1, this._re39622dc1ba772() - (a._r24dd91ea55b85c + this._rf3d8cf7ed09cc5()));
  }
  _rd78675388d2959() {
    if (this._r0203ab2933f479().parent == null && this._r19eaa0f3c46151()) {
      this._r0b369ca9b3b5b1 = !0;
      return;
    }
    this._r0b369ca9b3b5b1 = !1;
    let e = Math.max(
        1,
        Math.ceil(this.autoSize === nr.NONE ? this._r95924cff37cc3c : this._r3be9e7704bd859()),
      ),
      r = Math.max(1, Math.ceil(this.autoSize === nr.NONE ? this._r27bd3ec1cffb1b : this._r5a6ed7ec19f3a0())),
      t = this._rf897c91d9e7c25(),
      i = Math.max(1, Math.ceil(e * t)),
      s = Math.max(1, Math.ceil(r * t));
    if (
      (this._rf1be0424a55186 == null &&
        ((this._rf1be0424a55186 = _i295affcc6e4d03(i, s)),
        (this._r81e3c34b2c36cf = this._rf1be0424a55186 != null ? _i5183d3213c4d99(this._rf1be0424a55186) : null)),
      this._rf1be0424a55186 == null || this._r81e3c34b2c36cf == null)
    )
      return;
    ((this._rf1be0424a55186.width !== i || this._rf1be0424a55186.height !== s) &&
      ((this._rf1be0424a55186.width = i), (this._rf1be0424a55186.height = s)),
      this._r43d822bc80ae0b(this._rf1be0424a55186, this._r81e3c34b2c36cf, e, r, t));
    let o = this._r774aa2909827be;
    (o.source?.update?.(), o.update?.(), this._rcfeab058833469(e, r, t), this._rb93c9f9b6be1cd(t, e, r));
  }
  _rd573bf99e00b1a = n(() => {
    this._r0b369ca9b3b5b1 && !this._r1a26097622dde8 && (this._rd78675388d2959(), this._r2b9734155f20dc(!0));
  }, "_rd573bf99e00b1a");
  _rcfeab058833469(e, r, t) {
    let i = this._re91dfaede51ee6(e, r);
    if (!(i.x > 0 || i.y > 0 || i.width < e || i.height < r)) {
      (this._r4d0f4ac59bf25c?.destroy(!1),
        (this._r4d0f4ac59bf25c = null),
        (this._r08fcb1befe0a8e.texture = this._r774aa2909827be));
      return;
    }
    (this._r4d0f4ac59bf25c?.destroy(!1), (this._r4d0f4ac59bf25c = null));
    let o = new xa(i.x * t, i.y * t, i.width * t, i.height * t),
      d = new xa(0, 0, o.width, o.height),
      c = new Texture({ source: this._r774aa2909827be.source, frame: o, orig: d, dynamic: !0 });
    ((this._r4d0f4ac59bf25c = c), (this._r08fcb1befe0a8e.texture = c));
  }
  _rb93c9f9b6be1cd(e, r = 0, t = 0) {
    let i = this._r08fcb1befe0a8e,
      s = this._ref9a0c5062a9f5(e),
      o = this._re91dfaede51ee6(r, t);
    (i.scale?.set != null ? i.scale.set(s, s) : i.scale != null && ((i.scale.x = s), (i.scale.y = s)),
      (this._r08fcb1befe0a8e.x = o.x),
      (this._r08fcb1befe0a8e.y = o.y),
      (i.roundPixels = !0));
    let d = this._r774aa2909827be.source;
    d != null && (d.scaleMode = e > 1 ? "linear" : "nearest");
  }
  _r43d822bc80ae0b(e, r, t, i, s = 1) {
    if (
      (r.setTransform(1, 0, 0, 1, 0, 0),
      r.clearRect(0, 0, e.width, e.height),
      (r.imageSmoothingEnabled = !1),
      r.setTransform(s, 0, 0, s, 0, 0),
      this.background &&
        ((r.fillStyle = `#${_i89b91ec0bcecb2(this.backgroundColor).toString(16).padStart(6, "0")}`),
        r.fillRect(0, 0, t, i)),
      this.border &&
        ((r.strokeStyle = `#${_i89b91ec0bcecb2(this.borderColor).toString(16).padStart(6, "0")}`),
        (r.lineWidth = 1),
        r.strokeRect(0.5, 0.5, Math.max(0, t - 1), Math.max(0, i - 1))),
      (r.textBaseline = "alphabetic"),
      this._r6169b45d7460ee())
    ) {
      (this._r1426cd30fa6bbf(r, t, i, s), r.setTransform(1, 0, 0, 1, 0, 0));
      return;
    }
    let o = this._r55ac6e84ef8ab3(),
      d = this._r13af17502d9fae(),
      c = this._r0474c33b3ced7f(o),
      f = this._r412ed8c2678b5a(o),
      l = Math.max(1, t - (a._r24dd91ea55b85c + this._rf3d8cf7ed09cc5()));
    if (
      !this._r4fd6bb468fe519() &&
      (this._r631e445de700b8 || this._hasFocus) &&
      this._r8efbde12b3bb4a()
    ) {
      let b = this._hasFocus ? "rgba(0, 120, 215, 0.35)" : "rgba(136, 136, 136, 0.35)";
      for (let _ of this._r5e1c3dcbc409ba(this._ra16e18884bf848, this._r260984f991cac7))
        _.y + _.height < 0 || _.y > i || ((r.fillStyle = b), r.fillRect(_.x, _.y, _.width, _.height));
    }
    ((r.font = this._rbe7819b6bd729d(d)), (r.fillStyle = `#${_i89b91ec0bcecb2(d.color).toString(16).padStart(6, "0")}`));
    for (let b = f._rcccaa9fbeaeb40; b < f._r744b15abfdffd7; b++) {
      let _ = c[b],
        h = _.metrics ?? this._re1b2a098aa2c81(d),
        p = _.y + h.baseline - f._r8f5cc3bff7f662,
        m = this._r19eaa0f3c46151(d) ? p : Math.round(p),
        v = Math.round(this._r29f93dcb12ff25(_) - this.scrollH),
        w = this._r98e0ea352d3ff1(d),
        I = this._r85b8f83252c3a9(m, h.ascent, d);
      if (
        (this._r7d921b9cedac16(r, s, I, w, () => {
          this._rc735bbc75160fc(r, d, _.text, v, m, h, l);
        }),
        !this._rc0009f483d6244() &&
          !this._rc844fb5e1441ba(d, _.text) &&
          d.underline &&
          _.text.trim().length > 0)
      ) {
        let C = Math.round(m + Math.max(1, Math.round(h.descent * 0.5))) + 0.5;
        (r.beginPath(),
          (r.strokeStyle = `#${_i89b91ec0bcecb2(d.color).toString(16).padStart(6, "0")}`),
          (r.lineWidth = 1),
          r.moveTo(v, C),
          r.lineTo(Math.round(v + _.width + a._r6116f1301c088c), C),
          r.stroke());
      }
    }
    if (!this._r4fd6bb468fe519() && this._hasFocus) {
      let b = this._rf446bee3f2dc99(this._r8fd1af60c8f1b5),
        _ = Math.round(b.x),
        h = Math.round(b.y),
        p = Math.max(1, b.height);
      this._r1432f27bb7f58f && ((r.fillStyle = "#000000"), r.fillRect(_, h, 1, p));
    }
  }
  _r463c2dd6cf964f() {
    let e = this._ra8fb4f921bb3f0(),
      r = Math.max(1, this.width - (a._r24dd91ea55b85c + this._rf3d8cf7ed09cc5())),
      t = _i89b91ec0bcecb2(this.textColor);
    this.graphics.beginFill(t);
    for (let i of e) {
      if (i.text.trim().length === 0 || i.width <= 0) continue;
      let s = this._r72c21dbd646ead(i.width, r),
        o = Math.round(a._r24dd91ea55b85c + s - this.scrollH),
        d =
          Math.round(
            i.y +
              (i.metrics?.baseline ?? i.height) +
              Math.max(1, Math.round((i.metrics?.descent ?? 0) * 0.5)) -
              this._r45d103f104a109(),
          ) + 0.5;
      this.graphics.drawRect(o, d, Math.max(1, Math.round(i.width) + a._r6116f1301c088c), 1);
    }
    this.graphics.endFill();
  }
  _r1426cd30fa6bbf(e, r, t, i) {
    let s = this._r1db367de7fe78a(),
      o = this._r412ed8c2678b5a(s);
    if (
      !this._r4fd6bb468fe519() &&
      (this._r631e445de700b8 || this._hasFocus) &&
      this._r8efbde12b3bb4a()
    )
      for (let d of this._r5e1c3dcbc409ba(this._ra16e18884bf848, this._r260984f991cac7))
        d.y + d.height < 0 ||
          d.y > t ||
          ((e.fillStyle = this._hasFocus ? "rgba(0, 120, 215, 0.35)" : "rgba(136, 136, 136, 0.35)"),
          e.fillRect(d.x, d.y, d.width, d.height));
    for (let d = o._rcccaa9fbeaeb40; d < o._r744b15abfdffd7; d++) {
      let c = s.lines[d],
        f = this._r72c21dbd646ead(c.width, this._rb3eefeff40be63()),
        l = a._r38e3b4804d3f2c + c.y + c.metrics.baseline - o._r8f5cc3bff7f662,
        b = this._r19eaa0f3c46151() ? l : Math.round(l);
      for (let _ of c.fragments) {
        let h = Math.round(a._r24dd91ea55b85c + f + _.x - this.scrollH),
          p = _i89b91ec0bcecb2(_.style.color),
          m = this._r98e0ea352d3ff1(_.style),
          v = this._r85b8f83252c3a9(b, c.metrics.ascent, _.style);
        if (
          (this._r7d921b9cedac16(e, i, v, m, () => {
            ((e.font = this._rbe7819b6bd729d(_.style)),
              (e.fillStyle = `#${p.toString(16).padStart(6, "0")}`),
              this._rc735bbc75160fc(e, _.style, _.text, h, b, c.metrics));
          }),
          !this._rc0009f483d6244() &&
            !this._rc844fb5e1441ba(_.style, _.text) &&
            _.style.underline &&
            _.text.trim().length > 0)
        ) {
          let w = Math.round(b + Math.max(1, Math.round(c.metrics.descent * 0.5))) + 0.5;
          (e.beginPath(),
            (e.strokeStyle = `#${p.toString(16).padStart(6, "0")}`),
            (e.lineWidth = 1),
            e.moveTo(h, w),
            e.lineTo(Math.round(h + _.width + a._r6116f1301c088c), w),
            e.stroke());
        }
      }
    }
    if (!this._r4fd6bb468fe519() && this._hasFocus) {
      let d = this._rf446bee3f2dc99(this._r8fd1af60c8f1b5);
      ((e.fillStyle = "#000000"),
        this._r1432f27bb7f58f && e.fillRect(Math.round(d.x), Math.round(d.y), 1, Math.max(1, d.height)));
    }
    e.setTransform(1, 0, 0, 1, 0, 0);
  }
  _r72c21dbd646ead(e, r) {
    switch (this.defaultTextFormat.align) {
      case "center":
        return Math.max(0, (r - e) / 2);
      case "right":
        return Math.max(0, r - e);
      default:
        return 0;
    }
  }
  _r1db367de7fe78a() {
    let e = JSON.stringify([this._r5723ea09b99cf6(), this.textColor]);
    if (this._rbb8faece1ce55e != null && this._r989f2374956755 === e) return this._rbb8faece1ce55e;
    let r = this._r13af17502d9fae(),
      t = this._r8e8a370033abe0(),
      i =
        this.wordWrap && this._r95924cff37cc3c > 0
          ? Math.max(1, this._r95924cff37cc3c - (a._r24dd91ea55b85c + this._rf3d8cf7ed09cc5()))
          : Number.POSITIVE_INFINITY,
      s = [],
      o = [],
      d = "",
      c = 0,
      f = r.leading,
      l = this._re1b2a098aa2c81(r),
      b = l.lineHeight,
      _ = 0,
      h = 0,
      p = 0,
      m = n(() => {
        (s.push({ start: p, text: d, width: c, height: b, y: _, metrics: l, fragments: o }),
          (_ += b),
          (o = []),
          (d = ""),
          (c = 0),
          (f = r.leading),
          (l = this._re1b2a098aa2c81(r)),
          (b = l.lineHeight),
          (p = h));
      }, "_i6c974d7138c6e3"),
      v = n((T) => {
        let S = this._re1b2a098aa2c81(T);
        (o.length === 0 && d.length === 0
          ? ((f = T.leading), (l = S))
          : ((f = Math.max(f, T.leading)), (l = _i386713ebfb98fc([l, S], f))),
          (b = l.lineHeight));
      }, "_i294cb17fa98e18"),
      w = n((T, S) => {
        if (T.length === 0) return;
        let z = this._r2161d17fcc2ba6(T, S),
          K = o[o.length - 1] ?? null;
        (K != null &&
        K.style.bold === S.bold &&
        K.style.italic === S.italic &&
        K.style.underline === S.underline &&
        K.style.color === S.color &&
        K.style.href === S.href &&
        K.style.cssClass === S.cssClass &&
        K.style.fontFamily === S.fontFamily &&
        K.style.fontSize === S.fontSize &&
        K.style.leading === S.leading &&
        K.end === h
          ? ((K.text += T), (K.end += T.length), (K.width += z))
          : o.push({ text: T, start: h, end: h + T.length, x: c, width: z, style: S }),
          (d += T),
          (c += z),
          (h += T.length),
          v(S));
      }, "appendText");
    for (let T of t)
      for (let S of T.text.split(/(\n)/)) {
        if (
          S ===
          `
`
        ) {
          (v(T.style), m(), (h += 1), (p = h));
          continue;
        }
        for (let z of S.split(/(\s+)/)) {
          if (z.length === 0) continue;
          let K = /^\s+$/.test(z),
            $ = this._r2161d17fcc2ba6(z, T.style);
          if ((this.wordWrap && Number.isFinite(i) && !K && c > 0 && c + $ > i && m(), K && c === 0)) {
            ((h += z.length), (p = h));
            continue;
          }
          if (this.wordWrap && Number.isFinite(i) && !K && $ > i) {
            for (let Y of z) {
              let oe = this._r2161d17fcc2ba6(Y, T.style);
              (c > 0 && c + oe > i && m(), w(Y, T.style));
            }
            continue;
          }
          w(z, T.style);
        }
      }
    (o.length > 0 || s.length === 0) && m();
    let I = this._text.length === 0,
      C = I && this._r4fd6bb468fe519(),
      W = s.reduce((T, S) => Math.max(T, S.width), 0),
      R = I && !C ? 0 : s.reduce((T, S) => T + S.height, 0);
    return (
      (this._r989f2374956755 = e),
      (this._rbb8faece1ce55e = {
        width:
          this.autoSize === nr.NONE
            ? this._r95924cff37cc3c
            : Math.max(C ? a._r871c3a6e39265f : I ? a._ra02924de529467 : 1, this._r09e36590213b3b(W)),
        height:
          this.autoSize === nr.NONE
            ? this._r27bd3ec1cffb1b
            : Math.max(I && !C ? a._ra02924de529467 : 1, this._ra395c05651b697(R)),
        textWidth: W,
        textHeight: R,
        lines: s,
      }),
      this._rbb8faece1ce55e
    );
  }
  _r55ac6e84ef8ab3() {
    let e = this._r5723ea09b99cf6();
    if (this._r543073a813c265 != null && this._rb4ede954ef6c55(this._rfe6270475c444d, e))
      return this._r543073a813c265;
    let r = e.text,
      t = r.length > 0 ? r.split(/\r\n|\r|\n/) : [""],
      i = this._r13af17502d9fae(),
      s = this._re1b2a098aa2c81(i),
      o = Math.max(1, this._r95924cff37cc3c - (a._r24dd91ea55b85c + this._rf3d8cf7ed09cc5())),
      d = this.wordWrap && this._r95924cff37cc3c > 0 ? o : Number.POSITIVE_INFINITY,
      c = [],
      f = [],
      l = 0,
      b = 0;
    for (let v of t) {
      let w = this.multiline ? [v] : [v.replace(/[\r\n]+/g, "")];
      for (let I of w) {
        let C =
          this.wordWrap && Number.isFinite(d)
            ? this._r11c1ad4bb0b3aa(I, b, d)
            : [{ text: I, start: b, width: this._r0093021364853a(I) }];
        for (let W of C)
          (c.push({
            start: W.start,
            text: W.text,
            width: W.width,
            height: s.lineHeight,
            y: l,
            metrics: s,
            fragments: [],
            _r90ee472f62f1e0: null,
          }),
            f.push({
              text: W.text,
              start: W.start,
              width: W.width,
              height: s.lineHeight,
              y: l + a._r38e3b4804d3f2c,
              metrics: s,
              _r90ee472f62f1e0: null,
            }),
            (l += s.lineHeight));
        b += I.length + 1;
      }
    }
    c.length === 0 &&
      (c.push({
        start: 0,
        text: "",
        width: 0,
        height: s.lineHeight,
        y: 0,
        metrics: s,
        fragments: [],
        _r90ee472f62f1e0: null,
      }),
      f.push({
        text: "",
        start: 0,
        width: 0,
        height: s.lineHeight,
        y: a._r38e3b4804d3f2c,
        metrics: s,
        _r90ee472f62f1e0: null,
      }));
    let _ = r.length === 0,
      h = _ && this._r4fd6bb468fe519(),
      p = 0,
      m = 0;
    for (let v of c) ((p = Math.max(p, v.width)), (!_ || h) && (m = Math.max(m, v.y + v.height)));
    return (
      (this._r543073a813c265 = {
        width:
          this.autoSize === nr.NONE
            ? this._r95924cff37cc3c
            : Math.max(h ? a._r871c3a6e39265f : _ ? a._ra02924de529467 : 1, this._r09e36590213b3b(p)),
        height:
          this.autoSize === nr.NONE
            ? this._r27bd3ec1cffb1b
            : Math.max(_ && !h ? a._ra02924de529467 : 1, this._ra395c05651b697(m)),
        textWidth: p,
        textHeight: m,
        lines: c,
        _r60357ca5ecd4df: f,
      }),
      (this._rfe6270475c444d = e),
      this._r543073a813c265
    );
  }
  _r8e8a370033abe0() {
    let e = this._r13af17502d9fae();
    return X$._r8e8a370033abe0(this._re9beef9346a252, this._text, e, this.styleSheet);
  }
  _r700a6ceacc05fe(e) {
    return this._re1b2a098aa2c81(e).lineHeight;
  }
  _rc1b1657a416212() {
    return this._re1b2a098aa2c81().lineHeight;
  }
  _rc735bbc75160fc(e, r, t, i, s, o, d) {
    if (UnkClass_f7e6bd.draw(e, t, i, s, this._rd76fb3dd0485f0(r))) return;
    let c = n(() => {
      d != null ? e.fillText(t, i, Math.round(s), d) : e.fillText(t, i, Math.round(s));
    }, "_i3758f260af528e");
    this._r4e88bc5f8be34b._r6d7809b8b87286(e, t, i, s, o, this._r9fe6638708eabc(r), c) || c();
  }
  _r7d921b9cedac16(e, r, t, i, s) {
    if (!Number.isFinite(i) || Math.abs(i - 1) <= Number.EPSILON) {
      s();
      return;
    }
    let o = Math.max(1, r),
      d = o * o * i,
      c = Math.max(0, t),
      f = o * c * (1 - o * i);
    (e.save(), e.setTransform(o, 0, 0, d, 0, f), s(), e.restore());
  }
  _rc0009f483d6244() {
    return this._r9f6b10612522ab();
  }
  _r0199a11acde0c0(e, r) {
    let t = this._rb87af309ebf016(e, r);
    if (t.length !== 0)
      for (let i of t) this._r8fc15fe95fb45f(this._r7819a17c61b4b7, i.x, i.y, i.width, 1, i.color);
  }
  _r167446e2d26e84(e, r, t) {
    let i = this._rb87af309ebf016(r, t);
    if (i.length !== 0) {
      (e.save(), e.setTransform(1, 0, 0, 1, 0, 0), (e.imageSmoothingEnabled = !1));
      for (let s of i)
        ((e.fillStyle = `#${_i89b91ec0bcecb2(s.color).toString(16).padStart(6, "0")}`), e.fillRect(s.x, s.y, s.width, 1));
      e.restore();
    }
  }
  _rb87af309ebf016(e, r) {
    if (!this._r3371a61a31c39d()) return [];
    if (this._r6169b45d7460ee()) return this._r4fdcc889dc2c54(e, r);
    let t = this._r13af17502d9fae();
    if (!t.underline) return [];
    let i = [],
      s = this._r55ac6e84ef8ab3(),
      o = this._r0474c33b3ced7f(s),
      d = this._r412ed8c2678b5a(s);
    for (let c = d._rcccaa9fbeaeb40; c < d._r744b15abfdffd7; c++) {
      let f = o[c],
        l = f.metrics ?? this._re1b2a098aa2c81(t);
      if (f.text.trim().length === 0 || f.width <= 0) continue;
      let b = Math.round(this._r29f93dcb12ff25(f) - this.scrollH),
        _ = this._rd12cb994089086(Math.round(f.y + l.baseline - d._r8f5cc3bff7f662), l.descent);
      this._r0026ca2f540515(i, b, _, f.width, t.color, e, r);
    }
    return i;
  }
  _r4fdcc889dc2c54(e, r) {
    let t = this._r1db367de7fe78a(),
      i = [],
      s = this._r412ed8c2678b5a(t);
    for (let o = s._rcccaa9fbeaeb40; o < s._r744b15abfdffd7; o++) {
      let d = t.lines[o],
        c = this._r72c21dbd646ead(d.width, this._rb3eefeff40be63()),
        f = Math.round(a._r38e3b4804d3f2c + d.y + d.metrics.baseline - s._r8f5cc3bff7f662),
        l = this._rd12cb994089086(f, d.metrics.descent);
      for (let b of d.fragments) {
        if (!b.style.underline || b.text.trim().length === 0 || b.width <= 0) continue;
        let _ = Math.round(a._r24dd91ea55b85c + c + b.x - this.scrollH);
        this._r0026ca2f540515(i, _, l, b.width, b.style.color, e, r);
      }
    }
    return i;
  }
  _r0026ca2f540515(e, r, t, i, s, o, d) {
    let c = Math.round(t),
      f = Math.max(0, Math.round(r)),
      l = Math.min(o, Math.round(r + Math.max(1, i) + a._r6116f1301c088c));
    c < 0 || c >= d || l <= f || e.push({ x: f, y: c, width: l - f, color: s });
  }
  _rd12cb994089086(e, r) {
    return Math.round(e + Math.max(1, Math.round(r * 0.5)));
  }
  _r72747b2cc01e6b(e) {
    let r = this._r1db367de7fe78a();
    for (let t of r.lines) {
      let i = this._r72c21dbd646ead(t.width, this._rb3eefeff40be63());
      for (let s of t.fragments) {
        if (e < s.start || e >= s.end) continue;
        let o = e - s.start,
          d = s.text.slice(0, o),
          c = s.text.charAt(o),
          f = a._r24dd91ea55b85c + i + s.x + this._r2161d17fcc2ba6(d, s.style),
          l = Math.max(1, this._r2161d17fcc2ba6(c, s.style));
        return { x: f, y: a._r38e3b4804d3f2c + t.y, width: l, height: t.height };
      }
    }
    return { x: 0, y: 0, width: Math.max(1, this._r0093021364853a(" ")), height: this._rc1b1657a416212() };
  }
}
