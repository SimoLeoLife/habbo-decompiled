// Extracted from HabboAirLauncher.deobf.js, line 280690.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/pet/AnimatedPetVisualization.as
// Obfuscated name: _i10ea9725fdaead

class a extends Pa {
  static {
    n(this, "AnimatedPetVisualization");
  }
  static HEAD_SPRITE_TAG = "head";
  static SADDLE_SPRITE_TAG = "saddle";
  static HAIR_SPRITE_TAG = "hair";
  static _re809f159931d37 = 1;
  static EXPERIENCE_BUBBLE_VISIBLE_IN_MS = 1e3;
  static EXPERIENCE_BUBBLE_ASSET_NAME = "pet_experience_bubble_png";
  static _r28ab18222fb2af = 0;
  static _r90266dd0516054 = 1;
  static const_555 = 2;
  _r28d1b398ef4b8a = "";
  _r78e8126ccf82b7 = "";
  _r452518d14f9cc7 = !1;
  _headDirection = 0;
  _r384896ba38a5c0 = null;
  _rbcb76974f3ea2f = 0;
  var_4471 = 0;
  _r9ba3422aae35c5 = null;
  _r4936343165e59f = "";
  _rbe9ec5bc58f4b5 = -1;
  _rf6b382cddcf1ee = [];
  var_3343 = [];
  var_3215 = [];
  _color = 16777215;
  _headOnly = !1;
  var_4578 = !1;
  AnimationStateData = [];
  _rc15525e3db2132 = !1;
  _r8fd628ec50cdc0 = [];
  _r09ae9beb51ef62 = [];
  _r74987fe902af4a = [];
  _re8fbd19f5694d9 = -1;
  constructor() {
    for (super(); this.AnimationStateData.length < a.const_555;) this.AnimationStateData.push(new AnimationStateData());
  }
  dispose() {
    super.dispose();
    for (let e of this.AnimationStateData) e.dispose();
    (this._r384896ba38a5c0?.dispose(), (this._r384896ba38a5c0 = null), (this._r9ba3422aae35c5 = null));
  }
  _rc44d75b416497c(e) {
    return e.animationId;
  }
  initialize(e) {
    if (!(e instanceof AnimatedPetVisualizationData)) return !1;
    this._r9ba3422aae35c5 = e;
    let r = e.commonAssets?.getAssetByName(a.EXPERIENCE_BUBBLE_ASSET_NAME);
    return (r != null && (this._r384896ba38a5c0 = new Uve(r)), super.initialize(e));
  }
  set direction(e) {
    super.direction !== e && ((super.direction = e), (this._rbc9a3e3bcbfc8a = !0));
  }
  get direction() {
    return super.direction;
  }
  update(e, r, t, i) {
    (super.update(e, r, t, i), this.updateExperienceBubble(r));
  }
  _rccf505c78518d1(e) {
    let r = this.object?.getDirection()?.x ?? 0;
    return (
      r !== this._re8fbd19f5694d9 && ((this._re8fbd19f5694d9 = r), this.resetAllAnimationFrames()),
      super._rccf505c78518d1(e)
    );
  }
  updateModel(e) {
    let r = this.object,
      t = r?.getStringToStringMap();
    if (r == null || t == null) return !1;
    if (t.getUpdateID() !== this.var_302 && this._r9ba3422aae35c5 != null) {
      let s = t.getString(RoomObjectVariableEnum.AVATAR_POSTURE),
        o = t.getString(RoomObjectVariableEnum.AVATAR_GESTURE),
        d = t._ra3dc9a405b5c73(RoomObjectVariableEnum.AVATAR_POSTURE);
      if (!Number.isNaN(d)) {
        let p = this._r9ba3422aae35c5._r4ab498fd84bcaf(this.var_201);
        p > 0 &&
          ((s = this._r9ba3422aae35c5.getPostureForAnimation(this.var_201, d % p, !0) ?? s), (o = ""));
      }
      let c = t._ra3dc9a405b5c73(RoomObjectVariableEnum.AVATAR_GESTURE);
      if (!Number.isNaN(c)) {
        let p = this._r9ba3422aae35c5._rbbcfa957424c0a(this.var_201);
        p > 0 && (o = this._r9ba3422aae35c5._r9a4755b7650147(this.var_201, c % p) ?? o);
      }
      this._r6ef2aa1542ec55(s, o);
      let f = t._ra3dc9a405b5c73(RoomObjectVariableEnum.FURNITURE_ALPHA_MULTIPLIER);
      (Number.isNaN(f) && (f = 1),
        f !== this.alphaMultiplier && ((this.alphaMultiplier = f), (this._r41ac888dc9fda5 = !0)),
        (this._r452518d14f9cc7 = t._ra3dc9a405b5c73(RoomObjectVariableEnum.const_307) > 0));
      let l = t._ra3dc9a405b5c73(RoomObjectVariableEnum.const_1078);
      ((this._headDirection =
        !Number.isNaN(l) && this._r9ba3422aae35c5._r179f81fe927633 ? l : (r.getDirection()?.x ?? 0)),
        (this._rbcb76974f3ea2f = t._ra3dc9a405b5c73(RoomObjectVariableEnum.AVATAR_EXPERIENCE_TIMESTAMP)),
        (this.var_4471 = t._ra3dc9a405b5c73(RoomObjectVariableEnum.const_1157)));
      let b = t._ra3dc9a405b5c73(RoomObjectVariableEnum.PET_PALETTE_INDEX);
      (b !== this._rbe9ec5bc58f4b5 &&
        ((this._rbe9ec5bc58f4b5 = b), (this._r4936343165e59f = String(this._rbe9ec5bc58f4b5))),
        (this._rf6b382cddcf1ee = t._r90cb3676fb77dd(RoomObjectVariableEnum.PET_CUSTOM_LAYER_IDS) ?? []),
        (this.var_3343 = t._r90cb3676fb77dd(RoomObjectVariableEnum.PET_CUSTOM_PART_IDS) ?? []),
        (this.var_3215 = t._r90cb3676fb77dd(RoomObjectVariableEnum.PET_CUSTOM_PALETTE_IDS) ?? []));
      let _ = t._ra3dc9a405b5c73(RoomObjectVariableEnum.PET_IS_RIDING);
      this.var_4578 = !Number.isNaN(_) && _ > 0;
      let h = t._ra3dc9a405b5c73(RoomObjectVariableEnum.PET_COLOR);
      (!Number.isNaN(h) && h !== this._color && (this._color = h),
        (this._headOnly = t._ra3dc9a405b5c73(RoomObjectVariableEnum.PET_HEAD_ONLY) > 0));
    }
    return super.updateModel(e);
  }
  _r54d29d249f37ac(e, r) {
    (super._r54d29d249f37ac(e, r),
      (this._r8fd628ec50cdc0 = []),
      (this._r09ae9beb51ef62 = []),
      (this._r74987fe902af4a = []));
  }
  _ra258350da86294(e) {
    return super._ra258350da86294(e) + a._re809f159931d37;
  }
  setAnimation(e) {}
  resetAllAnimationFrames() {
    this._rc15525e3db2132 = !1;
    for (let e of this.AnimationStateData) e._rc57552f61a74d5(this._r7e3477306821f2);
  }
  _re38d1c4ef1ce7e(e) {
    if (this._rc15525e3db2132) return 0;
    let r = !0,
      t = 0;
    for (let i = 0; i < this.AnimationStateData.length; i++) {
      let s = this.AnimationStateData[i];
      s == null ||
        s._re7aea0e68e415e ||
        ((t |= this._rd966a6000a4156(s, e)),
        s._re7aea0e68e415e
          ? (ho._r08d3170c533a96(s.animationId) || ho._r40a627647568f0(s.animationId)) &&
            (this._r6aa30c8cadf202(i, s._ra40f096043de66), (r = !1))
          : (r = !1));
    }
    return ((this._rc15525e3db2132 = r), t);
  }
  getFrameNumber(e, r) {
    for (let t = this.AnimationStateData.length - 1; t >= 0; t--) {
      let i = this.AnimationStateData[t]?.getFrame(r);
      if (i != null) return i.id;
    }
    return super.getFrameNumber(e, r);
  }
  getPostureForAssetFile(e, r) {
    let t = r.split("_"),
      i = t.length;
    for (let d = 0; d < t.length; d++)
      if (t[d] === "64" || t[d] === "32") {
        i = d + 3;
        break;
      }
    if (i >= t.length || this._r9ba3422aae35c5 == null) return null;
    let s = (t[i] ?? "").split("@")[0] ?? "",
      o = Number.parseInt(s, 10) / 100;
    return this._r9ba3422aae35c5.getPostureForAnimation(e, o, !1) ?? this._r9ba3422aae35c5._rd0e34ea4fa9508(e, o);
  }
  getSpriteXOffset(e, r, t) {
    let i = super.getSpriteXOffset(e, r, t);
    for (let s = this.AnimationStateData.length - 1; s >= 0; s--)
      i += this.AnimationStateData[s]?.getFrame(t)?.x ?? 0;
    return i;
  }
  getSpriteYOffset(e, r, t) {
    let i = super.getSpriteYOffset(e, r, t);
    for (let s = this.AnimationStateData.length - 1; s >= 0; s--)
      i += this.AnimationStateData[s]?.getFrame(t)?.y ?? 0;
    return i;
  }
  getAsset(e, r = -1) {
    if (this.assetCollection == null) return null;
    let t = this._rf6b382cddcf1ee.indexOf(r),
      i = this._r4936343165e59f,
      s = -1;
    if (t > -1) {
      s = this.var_3343[t] ?? -1;
      let o = this.var_3215[t] ?? -1;
      i = o > -1 ? String(o) : this._r4936343165e59f;
    }
    return (s > -1 && (e += `_${s}`), this.assetCollection.getAssetWithPalette(e, i));
  }
  _rff74d56770433c(e, r, t) {
    return this._r9ba3422aae35c5?._r3cb1c15a773382(e, this.getDirection(e, t), t) ?? qt._rb6be903bbb8b1e;
  }
  getSpriteAssetName(e, r) {
    if (
      (this._headOnly && this.isNonHeadSprite(r)) ||
      (this.var_4578 && this._r40e338a0a62ec2(r)) ||
      r > this._r7706d5c5d64808
    )
      return "";
    let t = this.getSize(e);
    if (r < this._r7706d5c5d64808) {
      if (r >= FurnitureVisualizationData._r59c89ffb81405c.length) return "";
      let i = FurnitureVisualizationData._r59c89ffb81405c[r] ?? "";
      return t === 1
        ? `${this.type}_icon_${i}`
        : `${this.type}_${t}_${i}_${this.getDirection(e, r)}_${this.getFrameNumber(t, r)}`;
    }
    return `${this.type}_${t}_sd_${this.getDirection(e, r)}_0`;
  }
  getSpriteColor(e, r, t) {
    return r < this._r7706d5c5d64808 ? this._color : 16777215;
  }
  updateExperienceBubble(e) {
    if (this._r384896ba38a5c0 == null || ((this._r384896ba38a5c0.alpha = 0), this._rbcb76974f3ea2f <= 0))
      return;
    let r = e - this._rbcb76974f3ea2f;
    r < a.EXPERIENCE_BUBBLE_VISIBLE_IN_MS
      ? ((this._r384896ba38a5c0.alpha = Math.trunc(Math.sin((r / a.EXPERIENCE_BUBBLE_VISIBLE_IN_MS) * Math.PI) * 255)),
        this._r384896ba38a5c0._rc833ecd569fec3(this.var_4471))
      : (this._rbcb76974f3ea2f = 0);
    let t = this.getSprite(this._r07cfc8b3f013c3 - 1);
    t != null &&
      (this._r384896ba38a5c0.alpha > 0 && this._r384896ba38a5c0.nativeTexture != null
        ? ((t.asset = null),
          (t.nativeTexture = this._r384896ba38a5c0.nativeTexture),
          (t.offsetX = -20),
          (t.offsetY = -80),
          (t.alpha = this._r384896ba38a5c0.alpha),
          (t.visible = !0))
        : ((t.asset = null), (t.nativeTexture = null), (t.visible = !1)));
  }
  _r6ef2aa1542ec55(e, r) {
    this._r9ba3422aae35c5 != null &&
      (e !== this._r28d1b398ef4b8a &&
        ((this._r28d1b398ef4b8a = e),
        this._r6aa30c8cadf202(
          a._r28ab18222fb2af,
          this._r9ba3422aae35c5._rac5052e541a5c2(this.var_201, e),
        )),
      this._r9ba3422aae35c5.getGestureDisabled(this.var_201, e) && (r = ""),
      r !== this._r78e8126ccf82b7 &&
        ((this._r78e8126ccf82b7 = r),
        this._r6aa30c8cadf202(
          a._r90266dd0516054,
          this._r9ba3422aae35c5._r2d43f7d91e32f5(this.var_201, r),
        )));
  }
  _r6aa30c8cadf202(e, r) {
    let t = this.AnimationStateData[e];
    t != null && this._r1901e6411cd238(t, r) && (this._rc15525e3db2132 = !1);
  }
  getDirection(e, r) {
    return this._r259a590c344d38(r)
      ? (this._r9ba3422aae35c5?.getDirectionValue(e, this._headDirection) ?? this.direction)
      : this.direction;
  }
  _r259a590c344d38(e) {
    if (this._r8fd628ec50cdc0[e] == null) {
      let r = this._r9ba3422aae35c5?.getTag(this.var_201, DirectionData.USE_DEFAULT_DIRECTION, e) ?? "";
      this._r8fd628ec50cdc0[e] = r === a.HEAD_SPRITE_TAG || r === a.HAIR_SPRITE_TAG;
    }
    return this._r8fd628ec50cdc0[e] ?? !1;
  }
  isNonHeadSprite(e) {
    if (this._r09ae9beb51ef62[e] == null)
      if (e < this._r7706d5c5d64808) {
        let r = this._r9ba3422aae35c5?.getTag(this.var_201, DirectionData.USE_DEFAULT_DIRECTION, e) ?? "";
        this._r09ae9beb51ef62[e] = r.length > 0 && r !== a.HEAD_SPRITE_TAG && r !== a.HAIR_SPRITE_TAG;
      } else this._r09ae9beb51ef62[e] = !0;
    return this._r09ae9beb51ef62[e] ?? !1;
  }
  _r40e338a0a62ec2(e) {
    if (this._r74987fe902af4a[e] == null) {
      let r = this._r9ba3422aae35c5?.getTag(this.var_201, DirectionData.USE_DEFAULT_DIRECTION, e) ?? "";
      this._r74987fe902af4a[e] = r === a.SADDLE_SPRITE_TAG;
    }
    return this._r74987fe902af4a[e] ?? !1;
  }
}
