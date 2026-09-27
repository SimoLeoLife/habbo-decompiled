// Extracted from HabboAirLauncher.deobf.js, line 170606.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/AvatarStructure.as
// Obfuscated name: _i3fe91d088edba1

class extends Ft {
  static {
    n(this, "AvatarStructure");
  }
  var_789;
  _geometry = null;
  _rae7b83e2110f94 = null;
  var_748;
  getPartDefinition;
  _r47a40efdf7a1d9;
  getAnimation;
  _r45c95f8cc0a732 = null;
  ActiveActionData = null;
  _r2e56808b20c155 = new Map();
  constructor(e) {
    (super(),
      (this.var_789 = e),
      (this.var_748 = new FigureSetData()),
      (this.getPartDefinition = new UnkClass_a45b6f()),
      (this._r47a40efdf7a1d9 = new UnkClass_b6e351__()),
      (this.getAnimation = new UnkClass_bffd1c()));
  }
  dispose() {
    this.disposed ||
      (super.dispose(),
      (this.var_789 = null),
      (this._geometry = null),
      (this._rae7b83e2110f94 = null),
      (this._r45c95f8cc0a732 = null),
      (this.ActiveActionData = null),
      this._r2e56808b20c155.clear());
  }
  init() {
    this._r2e56808b20c155 = new Map();
  }
  AvatarStructure(e) {
    e != null && (this._geometry = new AvatarModelGeometry(e));
  }
  _re6b7e7ea8a3895(e, r) {
    r != null &&
      ((this._rae7b83e2110f94 = new UnkClass_9ccc9a(e, r)),
      (this._r45c95f8cc0a732 = this._rae7b83e2110f94._ra5d8add229f4fa()),
      (this.ActiveActionData = this._rae7b83e2110f94._r540d0ec15d9bc6()));
  }
  _r449b626ad44655(e) {
    (this._rae7b83e2110f94?._r449b626ad44655(e),
      (this._r45c95f8cc0a732 = this._rae7b83e2110f94?._ra5d8add229f4fa() ?? null),
      (this.ActiveActionData = this._rae7b83e2110f94?._r540d0ec15d9bc6() ?? null));
  }
  initPartSets(e) {
    return e == null
      ? !1
      : this.getPartDefinition.parse(e)
        ? ((this.getPartDefinition.var_895("ri").appendToFigure = !0),
          (this.getPartDefinition.var_895("li").appendToFigure = !0),
          !0)
        : !1;
  }
  _r71bfd6e99e9d4c(e) {
    return e == null ? !1 : this._r47a40efdf7a1d9.parse(e);
  }
  _r38540d5840f7e7(e) {
    return e == null ? !1 : this.var_748.parse(e);
  }
  _rcd39fca6b6f83a(e) {
    this.var_748._rc1baf5b2431737(e);
  }
  _r630ff1b5ca951c(e, r = "fx", t = 200) {
    for (let i = 0; i < t; i++) {
      let s = `${r}${i}`;
      if (!e.hasAsset(s)) continue;
      let o = e.getAssetByName(s)?.content;
      o != null && this.getAnimation._re86089c94947df(this, o);
    }
  }
  _re86089c94947df(e) {
    this.getAnimation._re86089c94947df(this, e);
  }
  _r4164d8e733b31b(e, r, t = 0) {
    let i = e.getPartColorIds(r);
    if (i == null || i.length < t) return null;
    let s = this.var_748.getSetType(r);
    if (s == null) return null;
    let o = this.var_748.getPalette(s.paletteID);
    return o == null ? null : o.getColor(i[t]);
  }
  _r6e51f0f378a34d(e, r, t) {
    return this.getAnimation.getLayerData(e, r, t);
  }
  var_1666(e) {
    return this.getAnimation.var_1666(e);
  }
  _r0f956505679c69(e) {
    return this._rae7b83e2110f94?._r0f956505679c69(e) ?? null;
  }
  getDefaultActionDefinition() {
    return this._r45c95f8cc0a732;
  }
  _r00b45048c0de59() {
    return this.ActiveActionData;
  }
  _r69ec619b8d88e9(e) {
    return this._rae7b83e2110f94?._r69ec619b8d88e9(e) ?? null;
  }
  _r77f8ed88339b2c(e) {
    return this._geometry?._r77f8ed88339b2c(e) ?? !1;
  }
  _r0ed60cceb9843a(e) {
    return this._rae7b83e2110f94?._r0ed60cceb9843a(e) ?? [];
  }
  maxFrames(e) {
    let r = 0;
    for (let t of e)
      t.definition != null && (r = Math.max(r, this._r47a40efdf7a1d9._r1bfe292376adf6(t.definition)));
    return r;
  }
  _r19bcbb82e4be75(e, r) {
    let t = this._r2e56808b20c155.get(e);
    t == null && ((t = new Map()), this._r2e56808b20c155.set(e, t));
    let i = t.get(r);
    if (i != null) return i;
    let s = this.var_748._r19bcbb82e4be75(e, r);
    return (t.set(r, s), s);
  }
  getDefaultPartSet(e, r) {
    return this.var_748.getDefaultPartSet(e, r);
  }
  _ra5a790118f7d32(e, r, t) {
    return this._rae7b83e2110f94?._ra5a790118f7d32(e, r, t) ?? null;
  }
  getCanvas(e, r) {
    return this._geometry?.getCanvas(e, r) ?? null;
  }
  _r797a1ed39c1895(e) {
    this._geometry?._r797a1ed39c1895(e);
  }
  _rae2d4421d14b8b(e, r) {
    let t = [],
      i = [],
      s = e.definition?.geometryType ?? "";
    if (e.definition?.isAnimation) {
      let o = `${e.definition.state}.${e.actionParameter}`,
        d = this.getAnimation.var_1666(o);
      if (d != null) {
        t.push(...d.getAnimatedBodyPartIds(0, e.overridingAction));
        for (let c of d._r0357ae1667dbaf) {
          let f = this._geometry?._r992ede4a5ca34e(s, c, r) ?? null;
          f != null && !i.includes(f.id) && i.push(f.id);
        }
        if (d._r4c53b3a0849ab8())
          for (let c of d._r18bc0f7c1954f6) {
            let f = this._geometry?.getBodyPartIdsInAvatarSet(s, c.align) ?? null;
            if (f != null) {
              let l = new DOMParser().parseFromString(
                  `<item id="${c.id}" x="0" y="0" z="0" radius="0.01" nx="0" ny="0" nz="-1" double="1" />`,
                  "text/xml",
                ),
                b = new DOMParser().parseFromString(`<part set-type="${c.id}" />`, "text/xml");
              f.addPart(l.documentElement, r);
              let _ = this.getPartDefinition._rd040bdbb1924fd(b.documentElement);
              ((_.appendToFigure = !0), c.base === "" && (_.staticId = 1), i.includes(f.id) || i.push(f.id));
            }
          }
      }
      for (let c of t) {
        let f = this._geometry?.getBodyPartIdsInAvatarSet(s, c) ?? null;
        f != null && !i.includes(f.id) && i.push(f.id);
      }
    } else if (e.definition != null) {
      t.push(...this.getPartDefinition._rbc7a5eb771dd56(e.definition));
      for (let o of t) {
        let d = this._geometry?._r992ede4a5ca34e(s, o, r) ?? null;
        d != null && !i.includes(d.id) && i.push(d.id);
      }
    }
    return i;
  }
  _rcf4273ac73e1c9(e) {
    return this._geometry?._r79c72680a84ca2(e) ?? [];
  }
  _r34ad31bc624ae6(e, r, t) {
    let i = AvatarDirectionAngle._r29c131bcceac78[t] ?? 0;
    return this._geometry?._r01f094e78f9b61(e, i, r) ?? [];
  }
  getFrameBodyPartOffset(e, r, t, i) {
    if (e.definition == null) return xm.DEFAULT_OFFSET;
    let s = this._r47a40efdf7a1d9.getAction(e.definition);
    return s != null ? s.getFrameBodyPartOffset(r, t, i) : xm.DEFAULT_OFFSET;
  }
  getParts(e, r, t, i, s, o, d, c = null) {
    if (t == null || t.definition == null) return null;
    let f = this.getPartDefinition._rbc7a5eb771dd56(t.definition),
      l = null,
      b = [],
      _ = [0],
      h = this._r47a40efdf7a1d9.getAction(t.definition);
    if (t.definition.isAnimation) {
      let w = `${t.definition.state}.${t.actionParameter}`;
      if (((l = this.getAnimation.var_1666(w)), l != null)) {
        _ = this.getPopulatedArray(l.frameCount(t.overridingAction));
        for (let I of l.getAnimatedBodyPartIds(0, t.overridingAction))
          if (I === e) {
            let C = this._geometry?.getBodyPartIdsInAvatarSet(i, I) ?? null;
            if (C != null) for (let W of C.getDynamicParts(d)) f.push(W.id);
          }
      }
    }
    let p = this._geometry?.getParts(i, e, s, f, d) ?? [],
      m = r.getPartTypeIds();
    for (let w of m) {
      if (c?.get(w) != null) continue;
      let I = r.getPartSetId(w),
        C = r.getPartColorIds(w),
        W = this.var_748.getSetType(w);
      if (W == null) continue;
      let R = this.var_748.getPalette(W.paletteID);
      if (R == null) continue;
      let T = W.getPartSet(I);
      if (T != null) {
        o = o.concat(T.hiddenLayers);
        for (let S of T.parts) {
          if (!p.includes(S.type)) continue;
          let z = _;
          if (h != null) {
            let be = h.getPart(S.type);
            be != null && (z = be.frames);
          }
          let K = t.definition;
          f.includes(S.type) ||
            (K =
              t.definition.geometryType === class_2536.HORIZONTAL
                ? (this.ActiveActionData ?? t.definition)
                : (this._r45c95f8cc0a732 ?? t.definition));
          let $ = this.getPartDefinition.var_895(S.type),
            Y = $ == null ? S.type : $.flippedSetType;
          Y === "" && (Y = S.type);
          let oe = null;
          (C != null &&
            C.length > S._rf7b43ebbad6f14 - 1 &&
            (oe = R.getColor(C[S._rf7b43ebbad6f14 - 1])),
            b.push(new AvatarImagePartContainer(e, S.type, String(S.id), oe, z, K, S._rf7b43ebbad6f14 > 0, S.paletteMap, Y)));
        }
      }
    }
    let v = [];
    for (let w of p) {
      let I = !1,
        C = null,
        W = c?.get(w) != null;
      for (let Y of b) Y.partType === w && (W ? (C = Y.color) : ((I = !0), o.includes(w) || v.push(Y)));
      if (I) continue;
      if (W) {
        let Y = c?.get(w) ?? "",
          oe = _;
        if (h != null) {
          let be = h.getPart(w);
          be != null && (oe = be.frames);
        }
        v.push(new AvatarImagePartContainer(e, w, Y, C, oe, t.definition, C != null, -1, w, !1, 1));
        continue;
      }
      if (!f.includes(w)) continue;
      let R = this._geometry?._r992ede4a5ca34e(i, w, d) ?? null;
      if (R == null || e !== R.id) continue;
      let T = this.getPartDefinition.var_895(w);
      if (T == null || !T.appendToFigure) continue;
      let S = t.actionParameter !== "" ? t.actionParameter : "1";
      T.hasStaticId() && (S = String(T.staticId));
      let z = !1,
        K = 1;
      if (l != null) {
        let Y = l.getAddData(w);
        Y != null && ((z = Y.isBlended), (K = Y.blend));
      }
      let $ = _;
      if (h != null) {
        let Y = h.getPart(w);
        Y != null && ($ = Y.frames);
      }
      v.push(new AvatarImagePartContainer(e, w, S, null, $, t.definition, !1, -1, w, z, K));
    }
    return v;
  }
  get figureData() {
    return this.var_748;
  }
  get _r43413fcfc7ae10() {
    return this.getAnimation;
  }
  get _r298e6c07107d27() {
    return this.var_789;
  }
  getPopulatedArray(e) {
    let r = [];
    for (let t = 0; t < e; t++) r.push(t);
    return r;
  }
  displayGeometry(e) {
    let r = new A(960, 540, !1, 4294967295),
      t = new UnkClass_3a5c6f();
    ((t.bitmapData = r), e.addChild(t));
    let i = r.width / 2,
      s = r.height / 2,
      o = 200;
    for (let d of this._geometry?._r79c72680a84ca2("full") ?? []) {
      let c = this._geometry?.getBodyPartIdsInAvatarSet("vertical", d) ?? null;
      if (c == null) continue;
      let f = c.location.x * o,
        l = c.location.z * o,
        b = c.radius * o,
        _ = new UnkClass_c6b6cd();
      (_.graphics.lineStyle(1, 4294901760, 1),
        _.graphics.drawRect(0, 0, Math.max(2, b), Math.max(2, b)),
        (_.x = i + f),
        (_.y = s + l),
        e.addChild(_));
      let h = new Pt();
      ((h.text = d),
        (h.textColor = 4294901760),
        (h.x = i + f + b - h.textWidth - 5),
        (h.y = s + l - 5),
        e.addChild(h));
    }
  }
  getItemIds() {
    let e = this._rae7b83e2110f94?._r0f956505679c69("CarryItem");
    return e instanceof Gj ? Array.from(e.params.keys()) : [];
  }
}
