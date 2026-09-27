// Estratto da HabboAirLauncher.deobf.js, riga 276417.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/furniture/FurnitureVisualization.as
// Nome offuscato: _id8cbc56f599d85

class a extends bb {
  static {
    n(this, "FurnitureVisualization");
  }
  static _rc0c635bfe7f853 = Math.sqrt(0.5);
  static UPDATE_INTERVAL_MS = 41;
  static VARIABLE_FX_SPRITE_TAG = "variable_fx";
  static VARIABLE_FX_ASSET_NAME = "variable_fx_stack";
  static _rd458c1d69fca93 = 0;
  static VARIABLE_FX_STACK_GAP = 4;
  static _rec470fbd1c9e7d = -2;
  static _ref9d40ae8d4ac2 = null;
  static _r08e8b4838eaa0e(e) {
    return Number.isFinite(e) ? e | 0 : 0;
  }
  _rd5b25ad4c3f288 = -1e3;
  _r41ac888dc9fda5 = !0;
  layerCount = 0;
  _r7706d5c5d64808 = -1;
  var_81 = -1;
  _r90057bdda06425 = Number.NaN;
  _r030ed67ff9dd5e = -1;
  alphaMultiplier = 1;
  var_3574 = null;
  _rd6b3ded75e43d5 = !1;
  _data = null;
  _type = "";
  var_521 = null;
  _r0c6190c3c71822 = new ig();
  _re5e46f7cf26b20 = new class_3399();
  _r1a0817d476ba8a = a._rec470fbd1c9e7d;
  _re970120dfa0edc = -1;
  _r101bd768e60e25 = 0;
  _r37844c9efe2e91 = 0;
  _assetNames = [];
  _assetNamesFrame = [];
  _r857d67c11aa960 = 0;
  _r9e4f2084f6972c = -1;
  _r5977490a1b1c71 = -1;
  var_827 = [];
  var_629 = [];
  _spriteColors = [];
  var_756 = [];
  var_786 = [];
  var_781 = [];
  _spriteMouseCaptures = [];
  var_769 = [];
  _rdacfcda065a0dc = 0;
  _r2783d264c76417 = 0;
  _r096d8b9d013a0b = !1;
  _r9acd873bd4276a = !1;
  _filters = null;
  _rfe008cb7c04271 = !1;
  _r0eda1e1e96e158 = !1;
  get direction() {
    return this.var_81;
  }
  set direction(e) {
    this.var_81 = e;
  }
  get type() {
    return this._type;
  }
  set roomData(e) {
    ((this.var_521 = e), (this._r1a0817d476ba8a = a._rec470fbd1c9e7d));
  }
  constructor() {
    (super(), this.reset(), a._ref9d40ae8d4ac2 == null && (a._ref9d40ae8d4ac2 = new zv()));
  }
  dispose() {
    (this._r0c6190c3c71822?.dispose(),
      (this._r0c6190c3c71822 = null),
      (this._re5e46f7cf26b20 = null),
      super.dispose(),
      (this._data = null),
      (this.var_521 = null),
      (this._assetNames = []),
      (this._assetNamesFrame = []),
      (this.var_827 = []),
      (this.var_629 = []),
      (this._spriteColors = []),
      (this.var_756 = []),
      (this.var_786 = []),
      (this.var_781 = []),
      (this._spriteMouseCaptures = []),
      (this.var_769 = []),
      (this._filters = null));
  }
  reset() {
    (super.reset(),
      (this.direction = -1),
      (this._data = null),
      this.resetVariableFxStack(),
      (this._assetNames = []),
      (this._assetNamesFrame = []),
      (this.var_827 = []),
      (this.var_629 = []),
      (this._spriteColors = []),
      (this.var_756 = []),
      (this.var_786 = []),
      (this.var_781 = []),
      (this._spriteMouseCaptures = []),
      (this.var_769 = []),
      this._r454dff0918e60f());
  }
  initialize(e) {
    return (this.reset(), e instanceof FurnitureVisualizationData ? ((this._data = e), (this._type = e.getType()), !0) : !1);
  }
  update(e, r, t, i) {
    if (e == null || r < this._rd5b25ad4c3f288 + a.UPDATE_INTERVAL_MS) return;
    ((this._rd5b25ad4c3f288 += a.UPDATE_INTERVAL_MS),
      this._rd5b25ad4c3f288 + a.UPDATE_INTERVAL_MS < r && (this._rd5b25ad4c3f288 = r - a.UPDATE_INTERVAL_MS));
    let s = e.scale,
      o = !1;
    (this.updateObject(s, e.direction.x) && (o = !0),
      this.updateModel(s) && (o = !0),
      this._r9acd873bd4276a && ((o = !0), (this._r9acd873bd4276a = !1)),
      this._rfe008cb7c04271 && ((o = !0), (this._rfe008cb7c04271 = !1)));
    let d = 0;
    i && this._rdacfcda065a0dc === 0
      ? (this._rdacfcda065a0dc |= this._rccf505c78518d1(s))
      : ((d = this._rccf505c78518d1(s) | this._rdacfcda065a0dc), (this._rdacfcda065a0dc = 0));
    let c = o || d !== 0;
    (c && (this._r1225543a2cc71f(s, o, d), (this.var_201 = s), this._r3c19972967c83f()),
      this._r76a4c75ead482e(s, c) && this._r3c19972967c83f());
  }
  _r1225543a2cc71f(e, r, t) {
    if ((this.layerCount !== this._r07cfc8b3f013c3 && this._r68dbc243d37d4a(this.layerCount), r))
      for (let i = this._r07cfc8b3f013c3 - 1; i >= 0; i--) this.updateSprite(e, i);
    else {
      let i = 0;
      for (; t > 0;) ((t & 1) !== 0 && this.updateSprite(e, i), i++, (t >>= 1));
    }
    this._r41ac888dc9fda5 = !1;
  }
  updateSprite(e, r) {
    if (r === this._re970120dfa0edc) {
      this._r499d8acf2a8127(this.getSprite(r));
      return;
    }
    let t = this.getSpriteAssetName(e, r),
      i = this.getSprite(r);
    if (i != null) {
      if (t != null && t !== "") {
        let s = this.getAsset(t, r),
          o = s?.nativeTexture ?? null,
          d = o == null ? s?.asset?.content : null;
        if (s != null && (o != null || d != null)) {
          ((i.visible = !0),
            (i.objectType = this._type),
            (i.skipMouseHandling = !1),
            (i.nativeTexture = o),
            (i.asset = d),
            (i.flipH = s.flipH),
            (i.flipV = s.flipV),
            (i.direction = this.direction));
          let c = 0;
          (r !== this._r7706d5c5d64808
            ? ((i.tag = this.getSpriteTag(e, this.direction, r)),
              (i.alpha = this.getSpriteAlpha(e, this.direction, r)),
              (i.color = this.getSpriteColor(e, r, this._r030ed67ff9dd5e)),
              (i.offsetX = s.offsetX + this.getSpriteXOffset(e, this.direction, r)),
              (i.offsetY = s.offsetY + this.getSpriteYOffset(e, this.direction, r)),
              (i._re7ddc55c344f53 = this._rddb79ec03402f8(e, this.direction, r)
                ? class_3682.MATCH_OPAQUE_PIXELS
                : class_3682.MATCH_NOTHING),
              (i.blendMode = this._r51ca86a0ee82e2(this._r32e488dea66198(e, this.direction, r))),
              this._rd5cf11ef94da6b(e, this.direction, r) && (i.flipH = !i.flipH),
              this._r0eda1e1e96e158 &&
                i.tag === "invisible" &&
                ((i.alpha = 0), (i._re7ddc55c344f53 = class_3682.MATCH_NOTHING)),
              (c = this._rff74d56770433c(e, this.direction, r) - r * 0.001))
            : ((i.offsetX = s.offsetX),
              (i.offsetY = s.offsetY + this.getSpriteYOffset(e, this.direction, r)),
              (i.alpha = Math.trunc(48 * this.alphaMultiplier)),
              (i._re7ddc55c344f53 = class_3682.MATCH_NOTHING),
              (c = 1)),
            this._r096d8b9d013a0b && (i.alpha = Math.trunc(i.alpha * 0.2)),
            (i._relativeDepth = c * a._rc0c635bfe7f853),
            (i.assetName = s.assetName),
            (i.libraryAssetName = this.getLibraryAssetNameForSprite(s, i)),
            (i._r74223fbabfd8b0 = this.getPostureForAssetFile(e, s.libraryAssetName) ?? ""),
            (i.clickHandling = this._rd6b3ded75e43d5),
            this._r9d781a6d048d1f(e, i, r));
          return;
        }
      }
      this._r5b81ba6270a32e(i, r);
    }
  }
  _r51ca86a0ee82e2(e) {
    switch (e) {
      case qt.INK_ADD:
        return ie.ADD;
      case qt.INK_DARKEN:
        return ie.DARKEN;
      case qt.INK_DIFFERENCE:
        return ie.DIFFERENCE;
      case qt.INK_MULTIPLY:
        return ie.MULTIPLY;
      case qt.INK_SUBTRACT:
        return ie.SUBTRACT;
      case qt.INK_INVERT:
        return ie.INVERT;
      case qt.INK_SCREEN:
        return ie.SCREEN;
      default:
        return ie.NORMAL;
    }
  }
  updateObject(e, r) {
    let t = this.object,
      i = t?.getDirection();
    if (t == null || i == null) return !1;
    if (
      this.var_1914 !== t.getUpdateID() ||
      e !== this.var_201 ||
      r !== this._r90057bdda06425
    ) {
      let s = i.x - (r + 135);
      return (
        (s = ((s % 360) + 360) % 360),
        this._data != null && (this.direction = this._data.getDirectionValue(e, s)),
        (this.var_1914 = t.getUpdateID()),
        (this._r90057bdda06425 = r),
        (this.var_201 = e),
        this._rfbd0305c03e41d(e, this.direction),
        !0
      );
    }
    return !1;
  }
  updateModel(e) {
    let r = this.object?.getStringToStringMap();
    if (r == null) return !1;
    let t = this._r6be5f66bfaa5d5(),
      i = r.getUpdateID(),
      s = this.var_302 !== i,
      o = t !== this._r1a0817d476ba8a;
    if (s || o) {
      if (s) {
        this._r030ed67ff9dd5e = r._ra3dc9a405b5c73(RoomObjectVariableEnum.const_167);
        let c = r._ra3dc9a405b5c73(RoomObjectVariableEnum.FURNITURE_ALPHA_MULTIPLIER);
        (Number.isNaN(c) && (c = 1),
          c !== this.alphaMultiplier && ((this.alphaMultiplier = c), (this._r41ac888dc9fda5 = !0)));
        let f = r._ra3dc9a405b5c73(RoomObjectVariableEnum.FURNITURE_INVISIBLE_LAYER) > 0;
        (f !== this._r0eda1e1e96e158 && ((this._r0eda1e1e96e158 = f), (this._r41ac888dc9fda5 = !0)),
          (this.var_3574 = this.getAdClickUrl(r)),
          (this._rd6b3ded75e43d5 =
            this.var_3574 != null &&
            this.var_3574 !== "" &&
            this.var_3574.startsWith("http")),
          (this._r2783d264c76417 = r._ra3dc9a405b5c73(RoomObjectVariableEnum.const_1137)));
      }
      let d = this._r05043aaa722877(
        _ib619bfd98fe9f2.as({ value: r.getObject(RoomObjectVariableEnum.VARIABLE_FX_STATUSES), _r35f8c7df03c28f: U6 }),
      );
      return ((this._r1a0817d476ba8a = t), (this.var_302 = i), d || s);
    }
    return !1;
  }
  getAdClickUrl(e) {
    return e.getString(RoomObjectVariableEnum.const_601);
  }
  _rccf505c78518d1(e) {
    return 0;
  }
  _r54d29d249f37ac(e, r) {
    let t = this._ra258350da86294(r);
    ((this.layerCount = e), (this._r7706d5c5d64808 = t > 0 ? e - t : -1), this._r24cbf5255bb56f());
  }
  _r24cbf5255bb56f() {
    ((this._re970120dfa0edc = this._r7706d5c5d64808 >= 0 ? this._r7706d5c5d64808 + 1 : this.layerCount),
      this.layerCount++);
  }
  _r6be5f66bfaa5d5() {
    return this.var_521?._r48caee1c574b09?.updateId ?? -1;
  }
  _r05043aaa722877(e) {
    return (
      (this._r0c6190c3c71822 ??= new ig()),
      (this._re5e46f7cf26b20 ??= new class_3399()),
      this._re5e46f7cf26b20.reconcile(
        e,
        this.var_521?._r48caee1c574b09 ?? null,
        this.var_521?._r56c7191bd7adc5 ?? null,
        this.var_521?._r4f8149f8fd691b ?? null,
        this._r0c6190c3c71822,
        a._rd458c1d69fca93,
        _ia411d8d8194a3a(),
      )
    );
  }
  resetVariableFxStack() {
    (this._r0c6190c3c71822?.dispose(),
      (this._r0c6190c3c71822 = new ig()),
      (this._re5e46f7cf26b20 = new class_3399()),
      (this._r1a0817d476ba8a = a._rec470fbd1c9e7d),
      (this._re970120dfa0edc = -1),
      (this._r101bd768e60e25 = 0),
      (this._r37844c9efe2e91 = 0));
  }
  _r76a4c75ead482e(e, r) {
    let t = this._r0c6190c3c71822;
    if (t == null || (!r && t.isCachedIdle)) return !1;
    let i = this._rdfd5f01dd23a06();
    if (i == null || (t.isEmpty && !i.visible) || (!r && t._r8b6e69dd2a0cae && !i.visible)) return !1;
    let s = i.updateId;
    if ((this._rb40ecefb7c534b(i), !this._r83e3ef4ffdb80a())) {
      let c = t.animate(i, 0);
      return (this._r499d8acf2a8127(i), c || i.updateId !== s);
    }
    let o = r ? t.update(i, e, this._r101bd768e60e25) : t.animate(i, this._r101bd768e60e25),
      d = r || o || i.updateId !== s;
    return (
      this._rb40ecefb7c534b(i),
      i.visible && i.asset != null && d
        ? (i.offsetX += this._r37844c9efe2e91)
        : i.visible || (i.asset = null),
      o || i.updateId !== s
    );
  }
  _r83e3ef4ffdb80a() {
    let e = !1,
      r = 0,
      t = 0,
      i = 0,
      s = this._r7706d5c5d64808 >= 0 ? this._r7706d5c5d64808 : this._re970120dfa0edc;
    for (let o = 0; o < s; o++) {
      let d = this.getSprite(o);
      if (
        d == null ||
        !d.visible ||
        (d.asset == null && d.nativeTexture == null) ||
        d.alpha <= 0 ||
        d.width <= 0 ||
        d.height <= 0
      )
        continue;
      let c = Math.trunc(d.offsetX),
        f = Math.trunc(c + d.width);
      e
        ? ((r = Math.min(r, c)), (t = Math.max(t, f)), (i = Math.min(i, Math.trunc(d.offsetY))))
        : ((r = c), (t = f), (i = Math.trunc(d.offsetY)), (e = !0));
    }
    return e
      ? ((this._r37844c9efe2e91 = Math.round((r + t) / 2)),
        (this._r101bd768e60e25 = i - a.VARIABLE_FX_STACK_GAP),
        !0)
      : !1;
  }
  _rb40ecefb7c534b(e) {
    e != null &&
      ((e.objectType = this._type),
      (e.assetName = a.VARIABLE_FX_ASSET_NAME),
      (e.libraryAssetName = a.VARIABLE_FX_ASSET_NAME),
      (e._r74223fbabfd8b0 = ""),
      (e.tag = a.VARIABLE_FX_SPRITE_TAG),
      (e.color = k0.DEFAULT_COLOR),
      (e.blendMode = ie.NORMAL),
      (e.flipH = !1),
      (e.flipV = !1),
      (e.direction = this.var_81),
      (e._re7ddc55c344f53 = class_3682.MATCH_NOTHING),
      (e.clickHandling = !1),
      (e.skipMouseHandling = !0),
      (e.filters = null),
      (e.spriteType = RoomObjectSpriteType.DEFAULT),
      (e.varyingDepth = !1),
      (e.planeId = 0),
      (e.nativeTexture = null));
  }
  _r499d8acf2a8127(e) {
    e != null &&
      (this._rb40ecefb7c534b(e),
      (e.asset = null),
      (e.visible = !1),
      (e.alpha = 0),
      (e.offsetX = 0),
      (e.offsetY = 0),
      (e._relativeDepth = 0));
  }
  _rdfd5f01dd23a06() {
    return this.getSprite(this._re970120dfa0edc);
  }
  _ra258350da86294(e) {
    return 1;
  }
  getFrameNumber(e, r) {
    return 0;
  }
  getPostureForAssetFile(e, r) {
    return null;
  }
  getAsset(e, r = -1) {
    return this.assetCollection?.getAsset(e) ?? null;
  }
  getSpriteAssetName(e, r) {
    if (this._data == null || r >= FurnitureVisualizationData._r59c89ffb81405c.length) return "";
    let t = this._assetNames[r] ?? "",
      i = this._assetNamesFrame[r] ?? !1;
    return (
      t.length === 0 && ((t = this._rb43c6cc5c4899b(e, r, !0)), (i = this._r9e4f2084f6972c !== 1)),
      i ? `${t}${this.getFrameNumber(e, r)}` : t
    );
  }
  _rb43c6cc5c4899b(e, r, t) {
    let i = t ? this._r9e4f2084f6972c : this.getSize(e),
      s = i === 1,
      o = r !== this._r7706d5c5d64808 ? (FurnitureVisualizationData._r59c89ffb81405c[r] ?? "") : "sd";
    if (s) return `${this._type}${a.ICON_LAYER_ID}${o}`;
    let d = a._ref9d40ae8d4ac2 ?? new zv();
    ((a._ref9d40ae8d4ac2 = d),
      (d.length = 0),
      d._re3d019ce93a301(this._type),
      d._re3d019ce93a301(a.const_640),
      d._re3d019ce93a301(i),
      d._re3d019ce93a301(a.const_640),
      d._re3d019ce93a301(o),
      d._re3d019ce93a301(a.const_640),
      d._re3d019ce93a301(this.direction),
      d._re3d019ce93a301(a.const_640));
    let c = d.toString();
    return (t && ((this._assetNames[r] = c), (this._assetNamesFrame[r] = !s)), c);
  }
  getSpriteTag(e, r, t) {
    if (this.var_827[t] != null) return this.var_827[t];
    let i = this._data?.getTag(e, r, t) ?? "";
    return ((this.var_827[t] = i), i);
  }
  _r17f04410da1bfe(e, r, t) {
    return null;
  }
  getSpriteAlpha(e, r, t) {
    if (this.var_629[t] != null && !this._r41ac888dc9fda5) return this.var_629[t];
    let i = a._r08e8b4838eaa0e(
      Math.trunc((this._data?._rdcf30128fdeaa9(e, r, t) ?? qt._r867909bf9f4491) * this.alphaMultiplier),
    );
    return ((this.var_629[t] = i), i);
  }
  getSpriteColor(e, r, t) {
    if (this._spriteColors[r] != null) return this._spriteColors[r];
    let i = this._data?.getColor(e, r, t) ?? k0.DEFAULT_COLOR;
    return ((this._spriteColors[r] = i), i);
  }
  getSpriteXOffset(e, r, t) {
    if (this.var_756[t] != null) return this.var_756[t];
    let i = a._r08e8b4838eaa0e(this._data?._r2acf02aae84c5e(e, r, t) ?? qt._r870d6a59ee15e6);
    return ((this.var_756[t] = i), i);
  }
  getSpriteYOffset(e, r, t) {
    if (t === this._r7706d5c5d64808) return a._r08e8b4838eaa0e(Math.ceil(this._r2783d264c76417 * (e / 2)));
    if (this.var_786[t] != null) return this.var_786[t];
    let i = a._r08e8b4838eaa0e(this._data?._r39e48c695dc1c1(e, r, t) ?? qt._r5ac5d65538c4b0);
    return ((this.var_786[t] = i), i);
  }
  _rddb79ec03402f8(e, r, t) {
    if (this._spriteMouseCaptures[t] != null) return this._spriteMouseCaptures[t];
    let i = !(this._data?._refa91ef7deb9e0(e, r, t) ?? !1);
    return ((this._spriteMouseCaptures[t] = i), i);
  }
  _r32e488dea66198(e, r, t) {
    if (this.var_769[t] != null) return this.var_769[t];
    let i = a._r08e8b4838eaa0e(this._data?._rfcbae7e0d7ff05(e, r, t) ?? qt._rb70b6db4a5082b);
    return ((this.var_769[t] = i), i);
  }
  _rff74d56770433c(e, r, t) {
    if (this.var_781[t] != null) return this.var_781[t];
    let i = this._data?._r3cb1c15a773382(e, r, t) ?? qt._rb6be903bbb8b1e;
    return ((this.var_781[t] = i), i);
  }
  _rd5cf11ef94da6b(e, r, t) {
    return !1;
  }
  getSize(e) {
    return this._data?.getSize(e) ?? e;
  }
  get data() {
    return this._data;
  }
  set lookThrough(e) {
    this._r096d8b9d013a0b !== e && ((this._r096d8b9d013a0b = e), (this._r9acd873bd4276a = !0));
  }
  set filters(e) {
    ((this._filters = e), (this._rfe008cb7c04271 = !0));
  }
  get filters() {
    return this._filters;
  }
  getLibraryAssetNameForSprite(e, r) {
    return e.libraryAssetName;
  }
  _r9d781a6d048d1f(e, r, t) {
    if (r.blendMode === ie.ADD) {
      r.filters = null;
      return;
    }
    let i = this._r17f04410da1bfe(e, this.direction, t);
    if (i == null || i.length === 0) {
      r.filters = this._filters;
      return;
    }
    if (this._filters == null || this._filters.length === 0) {
      r.filters = i;
      return;
    }
    a.concatListWillEqual(this._filters, i, r.filters) || (r.filters = [...this._filters, ...i]);
  }
  static concatListWillEqual(e, r, t) {
    if (t == null || e.length + r.length !== t.length) return !1;
    for (let i = 0; i < e.length; i++) if (e[i] !== t[i]) return !1;
    for (let i = 0; i < r.length; i++) if (r[i] !== t[e.length + i]) return !1;
    return !0;
  }
  _r5b81ba6270a32e(e, r) {
    ((e.nativeTexture = null),
      (e.asset = null),
      (e.assetName = ""),
      (e.libraryAssetName = ""),
      (e._r74223fbabfd8b0 = ""),
      (e._rcc3a6c8a5111d8 = ""),
      (e.alpha = 0),
      (e.tag = ""),
      (e.flipH = !1),
      (e.flipV = !1),
      (e.offsetX = 0),
      (e.offsetY = 0),
      (e._relativeDepth = 0),
      (e.clickHandling = !1),
      (e.filters = null),
      this._r41ac888dc9fda5 && delete this.var_629[r]);
  }
  _rfbd0305c03e41d(e, r) {
    (this._r5977490a1b1c71 !== r || this._r857d67c11aa960 !== e) &&
      ((this._assetNames = []),
      (this._assetNamesFrame = []),
      (this.var_827 = []),
      (this.var_629 = []),
      (this._spriteColors = []),
      (this.var_756 = []),
      (this.var_786 = []),
      (this.var_781 = []),
      (this._spriteMouseCaptures = []),
      (this.var_769 = []),
      (this._r5977490a1b1c71 = r),
      (this._r857d67c11aa960 = e),
      (this._r9e4f2084f6972c = this.getSize(e)),
      this._data != null &&
        this._r54d29d249f37ac(this._data._rf96292fa4b48da(e) + this._ra258350da86294(e), e));
  }
}
