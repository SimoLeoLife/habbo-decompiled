// Estratto da HabboAirLauncher.deobf.js, riga 214343.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/onBoardingHcSteps/AvatarEditor.as
// Nome offuscato: _i2aecae64b181bd

class a extends Sprite {
  constructor(r) {
    super();
    this._context = r;
    (this.addEventListener(M.ADDED, this.ChatHistoryScrollBar),
      this.addEventListener(M._r4b0396f57c9367, this._r8ab2e311a50996));
  }
  static {
    n(this, "AvatarEditor");
  }
  static _r3da5f1ce0028b3 = "M";
  static GENDER_FEMALE = "F";
  static GENDER_UNISEX = "U";
  static CHECK_FOR_HC_MEMBERSHIP_FUNCTION = "NewUserReception.newUserCheckHcMembership";
  static _re2bc194180de1b = 5;
  static _rd7712951ea20e0 = 5;
  static _r4f053deb8c63b8 = 4;
  static _re4f08dc39469f3 = [
    AvatarFigurePartType.HAIR,
    AvatarFigurePartType.HEAD,
    AvatarFigurePartType.CHEST,
    AvatarFigurePartType.const_94,
    AvatarFigurePartType.SHOES,
  ];
  static _rb10a18468d0e24 = [];
  static _ra0d8522d8de5cd = [
    "hr-891-34.hd-209-10.ch-255-71.lg-280-81",
    "hr-893-42.hd-209-19.ch-230-80.lg-3290-82.sh-906-64",
    "hr-889-34.hd-200-1.ch-3030-73.lg-3023-88.sh-300-64",
    "hr-145-42.hd-185-1.ch-230-66.lg-270-82.sh-290-81",
    "hr-110-38.hd-190-1.ch-3030-85.lg-275-84.sh-290-74",
    "hr-891-42.hd-190-14.ch-230-64.lg-3290-64.sh-906-64",
    "hr-110-35.hd-185-1.ch-3110-80-25.lg-270-84.sh-905-80",
    "hr-145-43.hd-209-1.ch-809-80.lg-275-82.sh-906-64",
    "hr-889-42.hd-207-1370.ch-230-80.lg-280-80.sh-906-64",
    "hr-891-48.hd-200-1370.ch-809-84.lg-3290-84.sh-300-84",
    "hd-190-30.ch-230-82.lg-275-72.sh-905-88",
    "hd-185-10.ch-3110-85-25.lg-275-82.sh-300-84",
    "hr-893-40.hd-200-14.ch-255-75.lg-280-75.sh-906-75",
    "hr-889-45.hd-190-1370.ch-255-68.lg-3023-88.sh-906-68",
    "hr-110-45.hd-200-1371.ch-255-85.lg-280-84.sh-3068-85-25",
    "hr-893-35.hd-185-10.ch-230-1408.lg-275-72",
    "hr-145-42.hd-200-10.ch-255-64.lg-3290-64.sh-906-64",
    "hr-889-42.hd-209-10.ch-809-81.lg-3290-64.sh-300-64",
    "hr-110-39.hd-190-1371.ch-3110-80-25.lg-275-81.sh-3068-83-25",
    "hr-891-48.hd-185-20.ch-3030-71.lg-3023-80.sh-300-81",
    "hr-145-37.hd-200-1.ch-3030-75.lg-270-80.sh-3068-83-25",
    "hr-891-44.hd-207-1.ch-809-76.lg-270-76.sh-3068-76-25",
    "hr-145-48.hd-185-20.ch-3110-76-25.lg-270-74.sh-290-75",
    "hr-110-44.hd-200-30.ch-809-83.lg-270-84.sh-300-64",
    "hr-891-34.hd-207-14.ch-230-81.lg-270-76.sh-290-80",
  ];
  static _r2cd5d144cf3b97 = [
    "hr-891-40.hd-627-1371.ch-665-66.lg-700-82.sh-3068-68-25",
    "hr-515-48.hd-628-1.ch-635-73.lg-695-81.sh-735-83",
    "hr-891-35.hd-625-8.ch-685-73.lg-715-73.sh-907-73",
    "hr-837-45.hd-627-14.ch-670-76.lg-695-71.sh-907-73",
    "hr-892-48.hd-605-14.ch-685-64.lg-700-72.sh-906-64",
    "hr-893-32.hd-628-20.ch-823-76.lg-710-82.sh-735-76",
    "hr-892-32.hd-628-1.ch-665-81.lg-700-80.sh-3068-81-25",
    "hr-893-40.hd-610-12.ch-670-81.lg-716-81-25.sh-725-83",
    "hr-891-42.hd-625-10.ch-635-64.lg-695-64.sh-906-64",
    "hd-625-1370.ch-823-72.lg-710-74.sh-725-74",
    "hr-515-45.hd-628-1.ch-823-75.lg-710-73.sh-3068-84-25",
    "hr-893-34.hd-605-19.ch-685-84.lg-695-85.sh-906-85",
    "hr-837-39.hd-610-1.ch-685-91.lg-695-90.sh-906-80",
    "hr-891-34.hd-610-1369.ch-635-74.lg-695-82.sh-906-71",
    "hr-892-39.hd-628-1370.ch-670-64.lg-716-64-25.sh-907-64",
    "hr-837-46.hd-627-20.ch-665-76.lg-716-68-25",
    "hr-892-37.hd-605-10.ch-665-88.lg-700-88",
    "hr-892-48.hd-628-1371.ch-823-82.lg-700-71.sh-725-81",
    "hr-891-36.hd-625-8.ch-670-80.lg-715-80.sh-907-80",
    "hr-891-48.hd-628-12.ch-823-64.lg-715-64.sh-907-76",
    "hr-837-48.hd-627-14.ch-685-73.lg-695-76.sh-907-82",
    "hr-893-48.hd-605-1371.ch-665-74.lg-700-72.sh-725-74",
    "hr-515-35.hd-625-10.ch-665-72.lg-695-72.sh-906-64",
    "hr-837-35.hd-628-1.ch-635-81.lg-710-75.sh-735-81",
    "hr-893-44.hd-628-30.ch-670-76.lg-715-76.sh-907-76",
  ];
  var_106 = a._r3da5f1ce0028b3;
  _r1b57c7bf6b5565 = new Map();
  _r0965e8b4af4e87 = new Map();
  _r37de1ab33c6524 = new Map();
  _r08f2a7559fbb20 = new Map();
  _rb1885a18b38d04 = AvatarFigurePartType.HAIR;
  var_605 = null;
  _r30d2a8267cd061 = null;
  _r7104889c863986 = null;
  _r598195a2143af4 = null;
  var_854 = null;
  _r35bf5db414c920 = null;
  var_533 = null;
  _ra62ba0221a247e = null;
  _r47ce5a7ef17dba = null;
  _rc5dd892036d53e = null;
  _showHcItems = !1;
  _r526378e9fcec80 = [];
  _r0c09095b052e41 = [];
  _r1d617941b9af99 = new Map();
  var_1878 = null;
  _rf363293a00054f = new Map();
  _re74cf9b86d1c65 = !1;
  _rfaf071d2aaa7dc = null;
  var_1271 = !1;
  get disposed() {
    return this.var_1271;
  }
  get gender() {
    return this.var_106;
  }
  _r16261aa40e97a2(r) {
    this._showHcItems = r;
  }
  dispose() {
    if (!this.var_1271) {
      for (
        this.removeEventListener(M.ADDED, this.ChatHistoryScrollBar),
          this.removeEventListener(M._r4b0396f57c9367, this._r8ab2e311a50996);
        this.numChildren > 0;
      )
        this.removeChildAt(0);
      (this._r1b57c7bf6b5565.clear(),
        this._r0965e8b4af4e87.clear(),
        this._r37de1ab33c6524.clear(),
        this._r08f2a7559fbb20.clear(),
        this._r1d617941b9af99.clear(),
        this._rf363293a00054f.clear(),
        (this._r526378e9fcec80 = []),
        (this._r0c09095b052e41 = []),
        (this.var_605 = null),
        (this._r30d2a8267cd061 = null),
        (this._r7104889c863986 = null),
        (this._r598195a2143af4 = null),
        (this.var_854 = null),
        (this._r35bf5db414c920 = null),
        (this.var_533 = null),
        (this._ra62ba0221a247e = null),
        (this._r47ce5a7ef17dba = null),
        (this._rc5dd892036d53e = null),
        (this.var_1878 = null),
        (this._rfaf071d2aaa7dc = null),
        (this.var_1271 = !0));
    }
  }
  avatarImageReady(r) {
    let t = this.getFigure(),
      i = r.replace("-25", "");
    if (r === t || i === t) {
      let s = this._context._rf0eb5f07c94cfb?._r274f6640e76241(r, fr.LARGE);
      s?.setDirection(class_2123.const_252, 4);
      let o = s?._rb09602dca8db26(class_2123.const_252, !1);
      (o != null && this._r598195a2143af4 != null && (this._r598195a2143af4.bitmapData = o), s?.dispose());
      return;
    }
    this._ra3685703b2fbc2(!1);
  }
  _re44b6842432d7c() {
    (Ae.closeWebPageAndRestoreClient(), ur.available && ur.call(a.CHECK_FOR_HC_MEMBERSHIP_FUNCTION));
  }
  checkForHcMembership(r) {
    r === "OK" &&
      ((this._re74cf9b86d1c65 = !0),
      this._rd6cd57b97f6af3(),
      this._rfaf071d2aaa7dc != null && (this._rfaf071d2aaa7dc.visible = !1));
  }
  _r4a2d148d355888(r = !1) {
    this._context._r33d3b7587c6dc1();
  }
  _r57ca4654a93050(r = !1) {
    (this.var_605 != null && (this.var_605.visible = r),
      this._r7104889c863986 != null && (this._r7104889c863986.visible = r),
      this._ra62ba0221a247e != null && (this._ra62ba0221a247e.visible = r),
      this._r47ce5a7ef17dba != null && (this._r47ce5a7ef17dba.visible = r),
      this.var_533 != null && (this.var_533.visible = r));
  }
  _r4e67552da03c91(r) {
    this.var_533 != null && (this.var_533.visible = r);
  }
  _r94e229b119ccb0 = n((r) => {
    this.setRandomFigure();
  }, "_r94e229b119ccb0");
  ChatHistoryScrollBar = n((r) => {
    (this._r09e195c24e7f24(),
      this.addHeaders(),
      this._r1d4d1df0d9875e(),
      (this.var_605 = new Sprite()),
      (this.var_605.x = 40),
      (this.var_605.y = 50),
      this.addChild(this.var_605),
      (this._r30d2a8267cd061 = new Sprite()),
      (this._r30d2a8267cd061.x = 40),
      (this._r30d2a8267cd061.y = 365),
      this.addChild(this._r30d2a8267cd061),
      (this._r7104889c863986 = new Sprite()),
      (this._r7104889c863986.x = 375),
      (this._r7104889c863986.y = 50),
      this.addChild(this._r7104889c863986),
      this._rd6cd57b97f6af3(),
      this._r45a678589ae12b(),
      this._ra62ba0221a247e != null && (this._ra62ba0221a247e.selected = !0),
      this._r6436eeb469a9ae(this.var_106),
      this.setRandomFigure());
  }, "ChatHistoryScrollBar");
  _r8ab2e311a50996 = n((r) => {}, "_r8ab2e311a50996");
  _r09e195c24e7f24() {
    let r = this._context._r878bcc7ad74c8f(),
      t = this._context._rbd0bee33837168();
    ((this._r598195a2143af4 = new _i3a5c6f457acdad()),
      (this._r598195a2143af4.x = r + Math.trunc(t / 2) + 15),
      (this._r598195a2143af4.y = 90),
      (this._r598195a2143af4.scaleX = 2),
      (this._r598195a2143af4.scaleY = 2));
    let i = _i7aee3baccc3600("avatar_halo_png");
    ((i.x = this._r598195a2143af4.x + 35), (i.y = 290), (i.blendMode = "overlay"));
    let s = _i7aee3baccc3600("avatar_glow_png");
    ((s.x = this._r598195a2143af4.x - 55),
      (s.y = 90),
      (s.blendMode = ie.ADD),
      this.addChild(i),
      this.addChild(s),
      this.addChild(this._r598195a2143af4),
      (this.var_1878 = new RandomAvatarCloudsAnimation()),
      (this.var_1878.x = this._r598195a2143af4.x),
      (this.var_1878.y = this._r598195a2143af4.y),
      (this.var_1878.visible = !1),
      this.addChild(this.var_1878));
  }
  addHeaders() {
    let r = Yi.createTextField("headerText", 24, Yi.HITCH_TEXT_BODY_COLOUR, !1, !0, !1, !1);
    ((r.width = 300),
      (r.thickness = 50),
      (r.htmlText = this._context.getLocalization("onboarding.your.looks", "Choose looks")),
      (r.x = 35),
      (r.y = 5),
      this.addChild(r));
    let t = Yi.createTextField("headerText", 24, Yi.HITCH_TEXT_BODY_COLOUR, !1, !0, !1, !1);
    ((t.width = 300),
      (t.thickness = 50),
      (t.htmlText = this._context.getLocalization("onboarding.your.colour", "Choose colour")),
      (t.x = 370),
      (t.y = 5),
      this.addChild(t));
    let i = Yi.createTextField("headerText", 24, Yi.HITCH_TEXT_BODY_COLOUR, !1, !0, !1, !1);
    ((i.width = 300),
      (i.thickness = 50),
      (i.htmlText = this._context.getLocalization("onboarding.this.is.your.habbo", "This is your Habbo")),
      (i.x = 650),
      (i.y = 5),
      this.addChild(i));
  }
  _r1d4d1df0d9875e() {
    let r = this._context._r878bcc7ad74c8f(),
      t = this._context._rbd0bee33837168(),
      i = new Sprite();
    ((i.y = 105),
      (this._rc5dd892036d53e = new RadioButtonGroup(this._r48acd042fc85a6)),
      (this._ra62ba0221a247e = new _i005ccc085f3c54(
        this._context.getLocalization("gender.male", "Male"),
        this._rc5dd892036d53e,
        Yi.STYLE_HITCH,
        _i7f2bcce9d34a42("button_boy_active_png"),
        _i7f2bcce9d34a42("button_boy_png"),
        8231575,
      )),
      (this._ra62ba0221a247e.name = a._r3da5f1ce0028b3),
      (this._r47ce5a7ef17dba = new _i005ccc085f3c54(
        this._context.getLocalization("gender.female", "Female"),
        this._rc5dd892036d53e,
        Yi.STYLE_HITCH,
        _i7f2bcce9d34a42("button_girl_active_png"),
        _i7f2bcce9d34a42("button_girl_png"),
        8231575,
      )),
      (this._r47ce5a7ef17dba.name = a.GENDER_FEMALE),
      i.addChild(this._ra62ba0221a247e),
      i.addChild(this._r47ce5a7ef17dba),
      (i.x = r + 120),
      this.addChild(i),
      (this.var_533 = new ColouredButton(
        ColouredButton.BUTTON_GREEN,
        this._context.getLocalization("onboarding.button.ready", "I'm ready"),
        new D(685, 435, 0, 40),
        !0,
        this._rc61b63090f2cf1,
        14211288,
      )),
      this.addChild(this.var_533),
      (this.var_533.x = r + Math.trunc((t - this.var_533.width) / 2) + 20),
      (this.var_854 = new _ia35e79954d9cca(0, -10, this._r94e229b119ccb0, 14211288)),
      i.addChild(this.var_854),
      Yi._ra6a743b365aafe(this._ra62ba0221a247e, 60, this._r47ce5a7ef17dba, 30, this.var_854));
    let s = Yi.createTextField("bottomText", 12, Yi.HITCH_TEXT_HIGHLIGHT_COLOUR, !0, !0, !1, !1);
    ((s.htmlText = this._context.getLocalization(
      "onboarding.cant.decide",
      "Can't decide? Don't worry, you can change your clothes later!",
    )),
      (s.width = 300),
      (s.x = 715),
      (s.y = 380),
      this.addChild(s));
  }
  _r48acd042fc85a6 = n(() => {
    let r = this._rc5dd892036d53e?.selected;
    r != null &&
      ((this.var_106 = r.name),
      this._context._r4204413afc3092(this.var_106 === a.GENDER_FEMALE),
      this._r6436eeb469a9ae(this.var_106),
      this.setRandomFigure());
  }, "_r48acd042fc85a6");
  _r7b4439d40682d9() {
    if (this.var_605 != null)
      for (; this.var_605.numChildren > 0;) this.var_605.removeChildAt(0);
    if (this._r30d2a8267cd061 != null)
      for (; this._r30d2a8267cd061.numChildren > 0;) this._r30d2a8267cd061.removeChildAt(0);
    ((this._r526378e9fcec80 = []), (this._r0c09095b052e41 = []), this._r1b57c7bf6b5565.clear());
  }
  _ra3685703b2fbc2(r) {
    (this._r7b4439d40682d9(), this._r5a9a6fe2e1cd2c());
    for (let t = 0; t < a._re4f08dc39469f3.length; t++) {
      let i = a._re4f08dc39469f3[t],
        s = this._r1b57c7bf6b5565.get(i) ?? [],
        o = this._r5c7220bea4f910(this.var_106).get(i) ?? [],
        d = Math.min(s.length, a._re2bc194180de1b);
      i === AvatarFigurePartType.HAIR && (this._r0c09095b052e41 = []);
      for (let c = 0; c < d; c++) {
        let l = (s[c] ?? "").split("-"),
          b = l[0] ?? "",
          _ = l[1] ?? "";
        o.length > 1 && this._rf363293a00054f.set(_, [...o]);
        let h = c * 50 + c * 10,
          p = t * 53 + t * 10,
          m = new _ic3aafb30a3697a(h, p, this._r617daa248473b0),
          v = r
            ? (this._context._rf0eb5f07c94cfb?._r274f6640e76241(
                l.concat(o).join("-"),
                fr.LARGE,
                null,
                this,
              ) ?? null)
            : (this._context._rf0eb5f07c94cfb?._r274f6640e76241(l.concat(o).join("-"), fr.LARGE) ??
              null),
          w = v?._rb2bd48e3b4d265(b === AvatarFigurePartType.HEAD ? class_2123.HEAD : class_2123.const_252);
        (this.var_605?.addChild(m),
          this._r526378e9fcec80.push(m),
          b === AvatarFigurePartType.HAIR && this._r0c09095b052e41.push(m),
          w != null && m._r7a02db81c355d9(w),
          v?.dispose(),
          (m.name = `${b}_${_}`),
          this._r35bf5db414c920 != null &&
            m.name === this._r35bf5db414c920.name &&
            (m.select(), (this._r35bf5db414c920 = m), this._r35bf5db414c920._r1fe4ed010bb986()));
      }
    }
    this.updateSelections();
  }
  updateFigure() {
    let r = this._context._rf0eb5f07c94cfb?._r274f6640e76241(
      this.getFigure(),
      fr.LARGE,
      this.var_106,
      this,
    );
    r?.setDirection(class_2123.const_252, 4);
    let t = r?._rb09602dca8db26(class_2123.const_252, !1);
    (t != null && this._r598195a2143af4 != null && (this._r598195a2143af4.bitmapData = t),
      r?.dispose(),
      this.updateSelections());
  }
  getFigure() {
    let r = [],
      t = this._r303930f2308955(this.var_106),
      i = this._r5c7220bea4f910(this.var_106);
    for (let [s, o] of t.entries()) {
      let d = [...(i.get(s) ?? [])];
      (d.length > 1 && (d[1] = "25"), r.push([s, o].concat(d).join("-")));
    }
    return r.join(".");
  }
  setRandomFigure() {
    let t = this.getCurrentlySelectedItems().split("."),
      i = this._r303930f2308955(this.var_106),
      s = this._r5c7220bea4f910(this.var_106),
      o = 0,
      d = "";
    for (let c of t) {
      let f = c.split("-");
      if (f.length < 3) continue;
      let l = f[0] ?? "",
        b = f[1] ?? "",
        _ = [f[2] ?? ""];
      (i.get(l) === b && o++, i.set(l, b), f.length > 3 && f[3] != null && _.push(f[3]), s.set(l, _));
      let h = this._r0965e8b4af4e87.get(l) ?? [];
      for (let p of h) p.name === `${l}_${f[2]}` && this._r5ea3444a7199a3(p);
      l === AvatarFigurePartType.HAIR && (d = `${l}_${b}`);
    }
    ((this._rb1885a18b38d04 = AvatarFigurePartType.HAIR),
      this._ra3685703b2fbc2(!1),
      this.updateFigure(),
      this._r45a678589ae12b());
    for (let c of this._r0c09095b052e41)
      if (c.name === d) {
        (c.select(), c._r1fe4ed010bb986(), (this._r35bf5db414c920 = c));
        break;
      }
    (this.var_1878 != null &&
      ((this.var_1878.visible = !0), this.var_1878.startAnimation()),
      o >= t.length - 1 && this.setRandomFigure());
  }
  getCurrentlySelectedItems() {
    let r = this.var_106 === a._r3da5f1ce0028b3 ? a._ra0d8522d8de5cd : a._r2cd5d144cf3b97,
      t = Math.floor(Math.random() * r.length);
    return r[t] ?? r[0] ?? "";
  }
  _r5a9a6fe2e1cd2c() {
    for (let r of a._re4f08dc39469f3) this._r1b57c7bf6b5565.set(r, this.populateCategory(r));
    (this._r1b57c7bf6b5565.set(AvatarFigurePartType.const_500, this.populateCategory(AvatarFigurePartType.const_500)),
      this._r1b57c7bf6b5565.set(AvatarFigurePartType.const_621, this.populateCategory(AvatarFigurePartType.const_621)),
      this._r1b57c7bf6b5565.set(AvatarFigurePartType.const_680, this.populateCategory(AvatarFigurePartType.const_680)));
  }
  _rd6cd57b97f6af3() {
    let r = this._context._rf0eb5f07c94cfb?._rfcf470f2a585c5();
    if ((this._r0965e8b4af4e87.clear(), r != null))
      for (let t of a._re4f08dc39469f3.concat(a._rb10a18468d0e24)) {
        let i = r.getSetType(t);
        if (i == null) continue;
        let s = r.getPalette(i.paletteID);
        if (s == null) continue;
        let o = [];
        for (let d of s.colors.values()) d.isSelectable && o.push(this._ra0b08a4d054377(d, t));
        (o.sort((d, c) => d.index - c.index), this._r0965e8b4af4e87.set(t, o));
      }
  }
  _ra0b08a4d054377(r, t) {
    let i = new _i87eab2e94f4a7a(0, 0, this._r5ea3444a7199a3, 16777215, r.rgb);
    return (
      (i.name = `${t}_${r.id}`),
      i.setColor(r.rgb),
      (i.index = r.index),
      (i.club = r.clubLevel > 0),
      i
    );
  }
  _r5ea3444a7199a3 = n((r) => {
    let t = r.name.split("_"),
      i = t[0] ?? "",
      o = [t[1] ?? ""],
      d = this._r303930f2308955(this.var_106).get(i),
      c = d != null ? this._rf363293a00054f.get(d) : null;
    (c != null && c.length > 1 && o.push("25"),
      this._r5c7220bea4f910(this.var_106).set(i, o),
      this._r1d617941b9af99.get(i)?.unselect(),
      this._r1d617941b9af99.set(i, r),
      r.select(),
      this._ra3685703b2fbc2(!0),
      this.updateFigure());
  }, "_r5ea3444a7199a3");
  _r45a678589ae12b() {
    if (this._r7104889c863986 == null) return;
    for (; this._r7104889c863986.numChildren > 0;) this._r7104889c863986.removeChildAt(0);
    let r = this._r0965e8b4af4e87.get(this._rb1885a18b38d04);
    if (r != null)
      for (let t = 0; t < r.length; t++) {
        let i = r[t],
          s = t % a._r4f053deb8c63b8,
          o = Math.trunc(t / a._r4f053deb8c63b8);
        ((i.x = s * 50 + s * 2), (i.y = o * 53 + o * 10), this._r7104889c863986.addChild(i));
      }
  }
  populateCategory(r) {
    let t = [],
      i = this._context._rf0eb5f07c94cfb?._rfcf470f2a585c5(),
      s = i?.getSetType(r) ?? null,
      o = s != null ? (i?.getPalette(s.paletteID) ?? null) : null;
    if (s == null || o == null) return t;
    let d = 0;
    for (let c of s.partSets.getValues()) {
      let f = !0;
      if (
        (c.clubLevel > 0 && (f = this._showHcItems),
        !(
          !f ||
          !c.isPreSelectable ||
          (c.gender !== this.var_106 && c.gender !== a.GENDER_UNISEX)
        ) && (t.push([r, c.id].join("-")), d++, d === a._rd7712951ea20e0))
      )
        break;
    }
    return t;
  }
  _rae536bf1278eca() {
    let r = [],
      t = this._r303930f2308955(this.var_106);
    for (let i of a._re4f08dc39469f3) {
      let s = t.get(i);
      s != null && r.push(s);
    }
    for (let i of a._rb10a18468d0e24) {
      let s = t.get(i);
      s != null && r.push(s);
    }
    return r;
  }
  updateSelections() {
    let r = this._rae536bf1278eca();
    for (let t of this._r526378e9fcec80) {
      let s = t.name.split("_")[1] ?? "";
      r.includes(s) ? t.select() : t.unselect();
    }
  }
  _r617daa248473b0 = n((r) => {
    let t = r.name.split("_"),
      i = t[0] ?? "",
      s = t[1] ?? "",
      o = this._rae536bf1278eca();
    this._r35bf5db414c920?.unselect();
    let d = o.includes(s);
    ((this._r35bf5db414c920 = r),
      (i === AvatarFigurePartType.HEAD ||
        i === AvatarFigurePartType.const_94 ||
        (this.var_106 === a.GENDER_FEMALE && i === AvatarFigurePartType.CHEST)) &&
        (d = !1),
      (this._rb1885a18b38d04 = i),
      d
        ? (this._r303930f2308955(this.var_106).delete(this._rb1885a18b38d04),
          (this._r35bf5db414c920 = null))
        : (this._r303930f2308955(this.var_106).set(this._rb1885a18b38d04, s),
          this._r35bf5db414c920.select(),
          this._r35bf5db414c920._r1fe4ed010bb986()),
      this.updateFigure(),
      this._r45a678589ae12b());
  }, "_r617daa248473b0");
  _rc61b63090f2cf1 = n((r) => {
    (this._context._rf3db13932bfb60?.connection.send(
      new _i4a93efd1b68d0b(this.getFigure(), this.var_106.toLowerCase()),
    ),
      this._context._re06c8ac1f787e4());
  }, "_rc61b63090f2cf1");
  _r6436eeb469a9ae(r) {
    (this._r303930f2308955(r), this._r5c7220bea4f910(r));
  }
  _r303930f2308955(r) {
    let t = this._r37de1ab33c6524.get(r);
    return (t == null && ((t = new Map()), this._r37de1ab33c6524.set(r, t)), t);
  }
  _r5c7220bea4f910(r) {
    let t = this._r08f2a7559fbb20.get(r);
    return (t == null && ((t = new Map()), this._r08f2a7559fbb20.set(r, t)), t);
  }
}
