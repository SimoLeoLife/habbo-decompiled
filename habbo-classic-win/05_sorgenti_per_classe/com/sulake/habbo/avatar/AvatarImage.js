// Extracted from HabboAirLauncher.deobf.js, line 167737.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/AvatarImage.as
// Obfuscated name: _i0a80381622f50a

class a {
  static {
    n(this, "AvatarImage");
  }
  static CHANNELS_EQUAL = "CHANNELS_EQUAL";
  static CHANNELS_UNIQUE = "CHANNELS_UNIQUE";
  static CHANNELS_RED = "CHANNELS_RED";
  static CHANNELS_GREEN = "CHANNELS_GREEN";
  static CHANNELS_BLUE = "CHANNELS_BLUE";
  static CHANNELS_SATURATED = "CHANNELS_SATURATED";
  static DEFAULT_DIR = 2;
  static _r4d337b3516a26f = class_2123.const_252;
  static _r57e646b46e0f6c = new E(0, 0);
  static MAX_IDLE_FRAMES = 8;
  static MAX_OTHER_FRAMES = 4;
  var_71;
  _scale;
  var_751 = 0;
  _headDirection = 0;
  var_186 = null;
  var_1271 = !1;
  _r8dad22ea491ca7 = [];
  _assets;
  _cache;
  var_1129;
  var_664 = null;
  var_346 = [];
  var_39 = null;
  _rfab1ccd8324256 = null;
  _r2ff12ec723e8b7 = null;
  _r45c95f8cc0a732 = null;
  ActiveActionData = null;
  _r898adddb17f144 = 0;
  directionData = 0;
  _changes = !0;
  _sprites = [];
  var_576 = !1;
  _r84beb534c73f11 = !1;
  var_1249 = !1;
  _rf69d6df994e38a = [];
  _rfdf3361c71c85e = "";
  _currentActionsStr = "";
  _r9156cdade11108 = new B();
  _r850a8fbeb0bf18 = new B();
  _r4ed56190c1b86c = null;
  var_1236 = !1;
  var_500 = -1;
  _r09b1812925fc08 = !1;
  _r9f05fd2470b0ff = -1;
  _r87380e36626a66 = null;
  _effectAnimationStartFrame = 0;
  _recc229f08d149f = 0;
  _rbf8ff41ec44880 = [];
  _r623c4b458aa823 = -1;
  _r4d85597d0c501d = null;
  _r9085bfecd33169 = null;
  _r16b2dcd20576d5;
  _r29171d8d82b04c;
  constructor(e, r, t, i, s, o) {
    ((this._r16b2dcd20576d5 = s),
      (this.var_71 = e),
      (this._assets = r),
      (this._scale = i ?? fr.LARGE),
      (this._r29171d8d82b04c = o));
    let d = !1;
    (this._scale === fr.LARGE_TO_SMALL && ((d = !0), (this._scale = fr.SMALL)),
      t == null && (t = new class_1984("hr-893-45.hd-180-2.ch-210-66.lg-270-82.sh-300-91.wa-2007-.ri-1-")),
      (this.var_1129 = t),
      (this._cache = new p6e(this.var_71, this, this._assets, this._scale, d)),
      this.setDirection(a._r4d337b3516a26f, a.DEFAULT_DIR),
      (this.var_346 = []),
      (this._r45c95f8cc0a732 = new ActiveActionData(ve.POSTURE_STAND)),
      (this._r45c95f8cc0a732.definition = this.var_71.getDefaultActionDefinition()),
      (this.ActiveActionData = new ActiveActionData(ve.POSTURE_LAY)),
      (this.ActiveActionData.definition = this.var_71._r00b45048c0de59()),
      this._r5004e483c5f13a());
  }
  _r3c8bfbd447e55f() {
    return (this._ra3523bf813f468(class_2123.const_252), this._cache?._r3c8bfbd447e55f() ?? []);
  }
  dispose() {
    if (!this.var_1271) {
      ((this.var_71 = null),
        (this._assets = null),
        (this.var_186 = null),
        (this.var_1129 = null),
        (this.var_664 = null),
        (this.var_346 = []),
        this.var_39 != null && this.var_39.dispose(),
        this.disposeCroppedTopImage(),
        this._r55463dcc5d4b6c(),
        this._cache?.dispose(),
        (this._cache = null));
      for (let e of this._r9156cdade11108.getValues()) e?.dispose();
      (this._r9156cdade11108.dispose(),
        (this.var_39 = null),
        this._r850a8fbeb0bf18.dispose(),
        (this._r2ff12ec723e8b7 = null),
        (this._r8dad22ea491ca7 = []),
        (this.var_1271 = !0));
    }
  }
  get disposed() {
    return this.var_1271;
  }
  getFigure() {
    return this.var_1129;
  }
  getScale() {
    return this._scale;
  }
  _r4164d8e733b31b(e) {
    return this.var_71 == null || this.var_1129 == null
      ? null
      : this.var_71._r4164d8e733b31b(this.var_1129, e);
  }
  setDirection(e, r) {
    ((r += this.directionData),
      r < AvatarDirectionAngle.const_1118 && (r = AvatarDirectionAngle.MAX_DIRECTION + (r + 1)),
      r > AvatarDirectionAngle.MAX_DIRECTION && (r = r - (AvatarDirectionAngle.MAX_DIRECTION + 1)),
      this.var_71?._r77f8ed88339b2c(e) && (this.var_751 = r),
      (e === class_2123.HEAD || e === class_2123.const_252) &&
        (e === class_2123.HEAD && this._r95b5e9ff13b2d0() && (r = this.var_751),
        (this._headDirection = r)),
      this._cache?.setDirection(e, r),
      this._rf1e738e381739a(),
      (this._changes = !0));
  }
  _rc2bce416d009cf(e, r) {
    this.setDirection(e, Math.trunc(r / 45));
  }
  _r83474000dfec82() {
    return this._sprites;
  }
  _ra5a790118f7d32() {
    return this._r8dad22ea491ca7;
  }
  getLayerData(e) {
    if (this.var_71 == null || e.animation == null) return null;
    let r = this._r898adddb17f144;
    return (
      e.animation.id === this._r87380e36626a66 && (r -= this._effectAnimationStartFrame),
      this.var_71._r6e51f0f378a34d(e.animation.id, r, e.id)
    );
  }
  _r8d8e6e810979ae(e = 1) {
    ((this._r898adddb17f144 += e), this._rf1e738e381739a(), (this._changes = !0));
  }
  _rcf37a11d3cf43b() {
    ((this._r898adddb17f144 = 0),
      (this._effectAnimationStartFrame = 0),
      this._rf1e738e381739a(),
      (this._changes = !0));
  }
  getFullImageCacheKey() {
    if (!this._r09b1812925fc08) return null;
    if (this._rf69d6df994e38a.length === 1 && this.var_751 === this._headDirection) {
      let e = 0;
      return (
        this._currentActionsStr === "std" || this._currentActionsStr === "lay" || this._currentActionsStr === "sit"
          ? (e = this._r898adddb17f144 % a.MAX_IDLE_FRAMES)
          : (e = this._r898adddb17f144 % a.MAX_OTHER_FRAMES),
        `${this.var_751}${this._currentActionsStr}${e}`
      );
    }
    if (this._rf69d6df994e38a.length === 2)
      for (let e of this._rf69d6df994e38a) {
        if (e.actionType === "fx" && ["33", "34", "35", "36"].includes(e.actionParameter))
          return `${this.var_751}${this._currentActionsStr}0`;
        if (e.actionType === "fx" && ["38", "39"].includes(e.actionParameter)) {
          let r = this._r898adddb17f144 % 11;
          return `${this.var_751}_${this._headDirection}${this._currentActionsStr}${r}`;
        }
      }
    return null;
  }
  _r34ad31bc624ae6(e, r, t) {
    return (
      (t !== this._r623c4b458aa823 || r !== this._r4d85597d0c501d || e !== this._r9085bfecd33169) &&
        ((this._r623c4b458aa823 = t),
        (this._r4d85597d0c501d = r),
        (this._r9085bfecd33169 = e),
        (this._rbf8ff41ec44880 = this.var_71?._r34ad31bc624ae6(e, r, t) ?? [])),
      this._rbf8ff41ec44880
    );
  }
  _ra3523bf813f468(e) {
    if (
      this.var_186 == null ||
      this.var_71?.getCanvas(this._scale, this.var_186.definition?.geometryType ?? "") ==
        null
    )
      return;
    let t = this._r34ad31bc624ae6(
      e,
      this.var_186.definition?.geometryType ?? "",
      this.var_751,
    );
    for (let i = t.length - 1; i >= 0; i--) this._cache?.getImageContainer(t[i], this._r898adddb17f144, !0);
  }
  _rb09602dca8db26(e, r, t = 1) {
    return this.getImageInternal(e, r, t, !1);
  }
  _r6dd67be339c829(e, r, t = 1) {
    return this.getImageInternal(e, r, t, !0);
  }
  getImageInternal(e, r, t, i) {
    if (!this._changes && this.var_39 != null)
      if (i)
        if (this.var_500 < 0) this._changes = !0;
        else return this.getCroppedTopImage(r);
      else return this.var_39;
    if (this.var_186 == null) return null;
    this.var_1249 || this.endActionAppends();
    let s = this.getFullImageCacheKey();
    if (s != null) {
      let l = this.getFullImage(s);
      if (l != null)
        return (
          (this._changes = !1),
          this.disposeCroppedTopImage(),
          (this.var_500 = Math.max(0, this.getFullImageTopCropY(s))),
          (this.var_39 = l),
          (this.var_1236 = !0),
          i ? this.getCroppedTopImage(r) : r ? l.clone() : this.var_39
        );
    }
    let o = this.var_71?.getCanvas(
      this._scale,
      this.var_186.definition?.geometryType ?? "",
    );
    if (o == null) return null;
    ((this.var_1236 ||
      this.var_39 == null ||
      this.var_39.width !== o.width ||
      this.var_39.height !== o.height) &&
      (this.var_39 != null && !this.var_1236 && this.var_39.dispose(),
      (this.var_39 = new A(o.width, o.height, !0, 0)),
      (this.var_1236 = !1)),
      this.disposeCroppedTopImage(),
      (this.var_500 = -1));
    let d = this._r34ad31bc624ae6(
      e,
      this.var_186.definition?.geometryType ?? "",
      this.var_751,
    );
    (this.var_39.lock(), this.var_39.fillRect(this.var_39.rect, 0));
    let c = !0,
      f = o.height;
    for (let l = d.length - 1; l >= 0; l--) {
      let b = d[l],
        _ = this._cache?.getImageContainer(b, this._r898adddb17f144) ?? null;
      if (_ == null) continue;
      c = c && _._r842a433ada7ed5;
      let h = _.image,
        p = _.regPoint.add(o.offset).add(o.regPoint);
      h != null &&
        (this.var_39.copyPixels(h, h.rect, p, null, null, !0), (f = Math.trunc(Math.min(f, p.y))));
    }
    if (
      ((this.var_500 = f === o.height ? 0 : Math.max(0, Math.min(o.height - 1, f))),
      this.var_39.unlock(),
      (this._changes = !1),
      this.var_664 != null)
    )
      if (this.var_664.paletteIsGrayscale) {
        let l = this._r00ada39ba6f5cf(this.var_39);
        (this.var_39.dispose(),
          (this.var_39 = l),
          this.var_39.paletteMap(
            this.var_39,
            this.var_39.rect,
            a._r57e646b46e0f6c,
            this.var_664.reds,
            [],
            [],
          ));
      } else
        this.var_39.copyChannel(
          this.var_39,
          this.var_39.rect,
          a._r57e646b46e0f6c,
          2,
          8,
        );
    return (
      s != null && c && this._r6af7e2875768ea(s, this.var_39.clone(), this.var_500),
      t !== 1 &&
        ((this.var_39 = Qh.resampleBitmapData(this.var_39, t)),
        (this.var_500 = Math.max(
          0,
          Math.min(this.var_39.height - 1, Math.trunc(Math.round(this.var_500 * t))),
        ))),
      i ? this.getCroppedTopImage(r) : r ? this.var_39.clone() : this.var_39
    );
  }
  getCroppedTopImage(e) {
    if (this.var_39 == null) return null;
    if (this.var_500 <= 0) return e ? this.var_39.clone() : this.var_39;
    let r = Math.max(1, this.var_39.height - this.var_500);
    this._rfab1ccd8324256 == null ||
    this._rfab1ccd8324256.width !== this.var_39.width ||
    this._rfab1ccd8324256.height !== r
      ? (this.disposeCroppedTopImage(), (this._rfab1ccd8324256 = new A(this.var_39.width, r, !0, 0)))
      : this._rfab1ccd8324256.fillRect(this._rfab1ccd8324256.rect, 0);
    let t = new D(0, this.var_500, this.var_39.width, r);
    return (
      this._rfab1ccd8324256.copyPixels(this.var_39, t, a._r57e646b46e0f6c, null, null, !0),
      e ? this._rfab1ccd8324256.clone() : this._rfab1ccd8324256
    );
  }
  disposeCroppedTopImage() {
    this._rfab1ccd8324256 != null && (this._rfab1ccd8324256.dispose(), (this._rfab1ccd8324256 = null));
  }
  _r44c78c77a2ceab(e, r = 1) {
    if (r !== 1 || this._cache == null || this.var_186 == null)
      return this._rb09602dca8db26(e, !1, r)?.texture ?? null;
    if (
      (this.var_1249 || this.endActionAppends(),
      !this._changes && this._r2ff12ec723e8b7 != null)
    )
      return this._r2ff12ec723e8b7;
    let t = this.var_71?.getCanvas(
      this._scale,
      this.var_186.definition?.geometryType ?? "",
    );
    if (t == null) return null;
    let i = a._rabc00691f33c37();
    if (i?.render == null) return null;
    this._r4ed56190c1b86c != null &&
      (Math.round(this._r4ed56190c1b86c.width) !== Math.round(t.width) ||
        Math.round(this._r4ed56190c1b86c.height) !== Math.round(t.height)) &&
      this._r55463dcc5d4b6c();
    let s = this._r34ad31bc624ae6(
        e,
        this.var_186.definition?.geometryType ?? "",
        this.var_751,
      ),
      o = new Ii(),
      d = [];
    try {
      for (let f = s.length - 1; f >= 0; f--) {
        let l = s[f],
          b = this._cache.getNativeImageContainer(l, this._r898adddb17f144);
        if (b == null) continue;
        let _ = b.nativeTexture;
        if (_ == null) return null;
        let h = b.regPoint.add(t.offset).add(t.regPoint),
          p = new Jt(_);
        p.position.set(h.x, h.y);
        let m = this._ra4b1c7e8acdd34();
        m != null && (p.tint = m);
        let v = this._r4db2beca481968();
        (v !== 1 && (p.alpha = v),
          o.addChild(p),
          d.push({
            texture: _,
            x: Math.round(h.x),
            y: Math.round(h.y),
            width: Math.max(1, Math.round(_.width)),
            height: Math.max(1, Math.round(_.height)),
            flipH: !1,
          }));
      }
      (this._r4ed56190c1b86c == null &&
        (this._r4ed56190c1b86c = sn.create({
          width: Math.max(1, Math.round(t.width)),
          height: Math.max(1, Math.round(t.height)),
        })),
        i.render({ container: o, target: this._r4ed56190c1b86c, clear: !0 }),
        a._rcb037a15dd80a9(
          this._r4ed56190c1b86c,
          Math.max(1, Math.round(t.width)),
          Math.max(1, Math.round(t.height)),
          d,
        ));
      let c = this._r4ed56190c1b86c;
      if (this.var_664?.paletteIsGrayscale) {
        let f = _if5f3c2bca69bec(this._r4ed56190c1b86c, this.var_664.reds, [], []);
        if (f == null) return null;
        (a._rfcca5b145b9d66(c, f),
          this._r2ff12ec723e8b7 != null &&
            this._r2ff12ec723e8b7 !== this._r4ed56190c1b86c &&
            a.destroyTexture(this._r2ff12ec723e8b7),
          (c = f));
      } else
        this._r2ff12ec723e8b7 != null &&
          this._r2ff12ec723e8b7 !== this._r4ed56190c1b86c &&
          a.destroyTexture(this._r2ff12ec723e8b7);
      return ((this._r2ff12ec723e8b7 = c), (this._changes = !1), this._r2ff12ec723e8b7);
    } finally {
      o.destroy({ children: !0 });
    }
  }
  _r60e8c898dc7634(e) {
    let r = this._cache?.getImageContainer(AvatarBodyPartType.HEAD, this._r898adddb17f144) ?? null;
    return r == null ? new E(0, 0) : new E(r.regPoint.x, r.regPoint.y);
  }
  _r5ac3e8006b5a9c(e) {
    let r = this._cache?.getImageContainer(AvatarBodyPartType.HEAD, this._r898adddb17f144) ?? null;
    return r == null || r.max == null
      ? new E(0, 0)
      : new E(r.max.x, r.max.y);
  }
  _rb2bd48e3b4d265(e, r = 1) {
    if (this.var_186 == null) return null;
    this.var_1249 || this.endActionAppends();
    let t = this.var_71?.getCanvas(
      this._scale,
      this.var_186.definition?.geometryType ?? "",
    );
    if (t == null) return null;
    let i = new A(t.width, t.height, !0, 16777215),
      s =
        this.var_71?._r34ad31bc624ae6(
          e,
          this.var_186.definition?.geometryType ?? "",
          this.var_751,
        ) ?? [],
      o = null,
      d = new D();
    for (let f = s.length - 1; f >= 0; f--) {
      let l = this._cache?.getImageContainer(s[f], this._r898adddb17f144) ?? null;
      if (l == null) continue;
      let b = l.image;
      if (b == null) return (i.dispose(), null);
      let _ = l.regPoint;
      (i.copyPixels(b, b.rect, _, null, null, !0),
        (d.x = _.x),
        (d.y = _.y),
        (d.width = b.width),
        (d.height = b.height),
        (o = o == null ? d.clone() : o.union(d)));
    }
    o == null && (o = new D(0, 0, 1, 1));
    let c = new A(o.width, o.height, !0, 16777215);
    return (
      c.copyPixels(i, o, a._r57e646b46e0f6c, null, null, !0),
      i.dispose(),
      r !== 1 && (c = Qh.resampleBitmapData(c, r)),
      c
    );
  }
  getFullImage(e) {
    return this._r9156cdade11108.getValue(e) ?? null;
  }
  getFullImageTopCropY(e) {
    return this._r850a8fbeb0bf18.getValue(e) ?? -1;
  }
  _r6af7e2875768ea(e, r, t) {
    (this._r9156cdade11108.getValue(e)?.dispose(),
      this._r9156cdade11108.remove(e),
      this._r850a8fbeb0bf18.remove(e),
      this._r9156cdade11108.add(e, r),
      this._r850a8fbeb0bf18.add(e, t | 0));
  }
  getAsset(e) {
    return UnkClass_b619bf.as({ value: this._assets?.getAssetByName(e) ?? null, _r35f8c7df03c28f: Qt });
  }
  _r3a5ff1651c302a(e) {
    return this.getAsset(e)?.nativeTexture ?? null;
  }
  getDirection() {
    return this.var_751;
  }
  _reb381248d47816() {
    ((this.var_346 = []),
      (this.var_1249 = !1),
      (this._currentActionsStr = ""),
      (this._r09b1812925fc08 = !1));
  }
  endActionAppends() {
    if (this._r0ed60cceb9843a()) {
      for (let e of this._rf69d6df994e38a)
        if (e.actionType === ve.const_118) {
          let r = Number.parseInt(e.actionParameter, 10);
          !Number.isNaN(r) &&
            !(this._r16b2dcd20576d5?.isReady(r) ?? !0) &&
            this._r16b2dcd20576d5?.loadEffectData(r, this);
        }
      (this._r5004e483c5f13a(), this.setActionsToParts());
    }
  }
  _r66a0b6869b9038(e, ...r) {
    this.var_1249 = !1;
    let t = typeof r[0] == "string" ? r[0] : String(r[0] ?? "");
    switch (e) {
      case ve.POSTURE:
        switch (t) {
          case ve.POSTURE_LAY:
            this.var_751 === 0
              ? this.setDirection(class_2123.const_252, 4)
              : this.setDirection(class_2123.const_252, 2);
          case ve.POSTURE_WALK:
          case ve.POSTURE_STAND:
          case ve.POSTURE_SIT:
            ((this._r09b1812925fc08 = !0), this._r5c81cf9ebce38c(t));
            break;
          case ve.POSTURE_SWIM:
          case ve.POSTURE_FLOAT:
          case ve.POSTURE_SNOWWAR_RUN:
          case ve.POSTURE_SNOWWAR_DIE_FRONT:
          case ve.POSTURE_SNOWWAR_DIE_BACK:
          case ve.POSTURE_SNOWWAR_PICK:
          case ve.POSTURE_SNOWWAR_THROW:
            ((this._r09b1812925fc08 = !1), this._r5c81cf9ebce38c(t));
            break;
          default:
            break;
        }
        break;
      case ve.GESTURE:
        switch (t) {
          case ve.GESTURE_AGGRAVATED:
          case ve.GESTURE_SAD:
          case ve.GESTURE_SMILE:
          case ve.GESTURE_SURPRISED:
            this._r5c81cf9ebce38c(t);
            break;
        }
        break;
      case ve.const_118:
        ["33", "34", "35", "36", "38", "39"].includes(t) && (this._r09b1812925fc08 = !0);
      case ve.DANCE:
      case ve.TALK:
      case ve.EXPRESSION_WAVE:
      case ve.SLEEP:
      case ve.SIGN:
      case ve.const_405:
      case ve.EXPRESSION_BLOW_A_KISS:
      case ve.EXPRESSION_67:
      case ve.EXPRESSION_LAUGH:
      case ve.const_636:
      case ve.const_1009:
      case ve.EXPRESSION_SNOWBOARD_OLLIE:
      case ve.EXPRESSION_SNOWBORD_360:
      case ve.EXPRESSION_RIDE_JUMP:
        this._r5c81cf9ebce38c(e, t);
        break;
      case ve.CARRY_OBJECT:
      case ve.USE_OBJECT: {
        let s = (this.var_71?._r69ec619b8d88e9(e) ?? null)?._r9e092fb3de98bc(t) ?? t;
        this._r5c81cf9ebce38c(e, s);
        break;
      }
    }
    return !0;
  }
  _r5c81cf9ebce38c(e, r = "") {
    for (let i of this.var_346) if (i.actionType === e && i.actionParameter === r) return;
    let t = this._r898adddb17f144;
    (e === ve.const_118 &&
      r === this._r9f05fd2470b0ff.toString() &&
      this._r87380e36626a66 != null &&
      (t = this._effectAnimationStartFrame),
      this.var_346.push(new ActiveActionData(e, r, t)));
  }
  _ree2ed64c3ae370() {
    return this.var_576 || this._recc229f08d149f > 1;
  }
  _r5004e483c5f13a() {
    return (
      (this._r84beb534c73f11 = !1),
      (this.var_576 = !1),
      (this._sprites = []),
      (this.var_664 = null),
      (this.directionData = 0),
      (this._r87380e36626a66 = null),
      (this._effectAnimationStartFrame = 0),
      this.var_71?._r797a1ed39c1895(this),
      (this.var_186 = this._r45c95f8cc0a732),
      this.var_186 != null &&
        ((this.var_186.definition = this._r45c95f8cc0a732?.definition ?? null),
        this._r4344ce490bd00b(this.var_186)),
      !0
    );
  }
  _r95b5e9ff13b2d0() {
    for (let e of this._rf69d6df994e38a ?? []) {
      let r = this.var_71?._r69ec619b8d88e9(e.actionType) ?? null;
      if (
        !(
          e.actionType === ve.SLEEP && this.var_186?.actionType !== ve.POSTURE_LAY
        ) &&
        r != null &&
        r.getPreventHeadTurn(e.actionParameter)
      )
        return !0;
    }
    return !1;
  }
  _r0ed60cceb9843a() {
    let e = !1;
    if (
      ((this._currentActionsStr = ""),
      (this._rf69d6df994e38a = this.var_71?._r0ed60cceb9843a(this.var_346) ?? []),
      (this._recc229f08d149f = this.var_71?.maxFrames(this._rf69d6df994e38a) ?? 0),
      this._rf69d6df994e38a.length === 0)
    )
      ((this._r8dad22ea491ca7 = [0, 0, 0]),
        this._rfdf3361c71c85e !== "" && ((e = !0), (this._rfdf3361c71c85e = "")));
    else {
      let r = !1,
        t = !1;
      this._r8dad22ea491ca7 = this.var_71?._ra5a790118f7d32(
        this._rf69d6df994e38a,
        this._scale,
        this.var_751,
      ) ?? [0, 0, 0];
      for (let i of this._rf69d6df994e38a)
        if (
          ((this._currentActionsStr += i.actionType + i.actionParameter), i.actionType === ve.const_118)
        ) {
          let s = Number.parseInt(i.actionParameter, 10);
          (this._r9f05fd2470b0ff !== s && (r = !0), (this._r9f05fd2470b0ff = s), (t = !0));
        }
      (t || (this._r9f05fd2470b0ff > -1 && (r = !0), (this._r9f05fd2470b0ff = -1)),
        r && this._cache?._rc7eadd004996d3(0),
        this._rfdf3361c71c85e !== this._currentActionsStr &&
          ((e = !0), (this._rfdf3361c71c85e = this._currentActionsStr)));
    }
    return ((this.var_1249 = !0), e);
  }
  setActionsToParts() {
    if (this._rf69d6df994e38a.length === 0) return;
    let e = this._rf69d6df994e38a.map((t) => t.actionType);
    for (let t of this._rf69d6df994e38a) {
      if (!t.definition?.isAnimation) continue;
      let i = this.var_71?.var_1666(`${t.definition.state}.${t.actionParameter}`);
      if (i?.hasOverriddenActions())
        for (let s of i.overriddenActionNames() ?? [])
          e.includes(s) && (t.overridingAction = i.overridingAction(s) ?? "");
      i?.resetOnToggle && (this._r84beb534c73f11 = !0);
    }
    let r = _ia411d8d8194a3a();
    for (let t of this._rf69d6df994e38a) {
      if (
        t.definition == null ||
        (t.definition.isAnimation && t.actionParameter === "" && (t.actionParameter = "1"),
        this._r8365c866fa0496(t, r),
        !t.definition.isAnimation)
      )
        continue;
      this.var_576 = t.definition.isAnimated(t.actionParameter);
      let i = this.var_71?.var_1666(`${t.definition.state}.${t.actionParameter}`);
      if (i == null) continue;
      t.actionType === ve.const_118 &&
        ((this._r87380e36626a66 = i.id), (this._effectAnimationStartFrame = t.startFrame));
      let s = i._rc0fcc8ad45e365;
      (s != null && (this._sprites = this._sprites.concat(s)),
        i.var_3626() && (this.directionData = i._r67275f6a7e1f5f?.offset ?? 0),
        i._r33d779b4902bcf() && (this.var_664 = i.avatarData));
    }
  }
  _r8365c866fa0496(e, r) {
    e.definition == null ||
      e.definition.assetPartDefinition === "" ||
      (e.definition.isMain &&
        ((this.var_186 = e), this._cache?._r3ad7c069fb8e13(e.definition.geometryType)),
      this._cache?.setAction(e, r),
      this._rf1e738e381739a(),
      (this._changes = !0));
  }
  _r4344ce490bd00b(e) {
    e.definition == null ||
      e.definition.assetPartDefinition === "" ||
      (e.definition.isMain &&
        ((this.var_186 = e), this._cache?._r3ad7c069fb8e13(e.definition.geometryType)),
      this._cache?._r4344ce490bd00b(e),
      this._rf1e738e381739a(),
      (this._changes = !0));
  }
  _ra4b1c7e8acdd34() {
    let e = this.var_664?.colorTransform;
    if (
      e == null ||
      this.var_664?.paletteIsGrayscale ||
      e.redOffset !== 0 ||
      e.greenOffset !== 0 ||
      e.blueOffset !== 0
    )
      return null;
    let r = Math.max(0, Math.min(255, Math.round(e.redMultiplier * 255))),
      t = Math.max(0, Math.min(255, Math.round(e.greenMultiplier * 255))),
      i = Math.max(0, Math.min(255, Math.round(e.blueMultiplier * 255)));
    return ((r << 16) | (t << 8) | i) >>> 0;
  }
  _r4db2beca481968() {
    return this.var_664?.colorTransform?.alphaMultiplier ?? 1;
  }
  _r55463dcc5d4b6c() {
    (this._r2ff12ec723e8b7 != null &&
      this._r2ff12ec723e8b7 !== this._r4ed56190c1b86c &&
      a.destroyTexture(this._r2ff12ec723e8b7),
      this._r4ed56190c1b86c != null && this._r4ed56190c1b86c.destroy(!0),
      (this._r2ff12ec723e8b7 = null),
      (this._r4ed56190c1b86c = null));
  }
  _rf1e738e381739a() {
    (this.var_39 != null &&
      (this.var_1236 || this.var_39.dispose(),
      (this.var_39 = null),
      (this.var_1236 = !1)),
      this._r2ff12ec723e8b7 != null &&
        this._r2ff12ec723e8b7 !== this._r4ed56190c1b86c &&
        a.destroyTexture(this._r2ff12ec723e8b7),
      (this._r2ff12ec723e8b7 = null));
  }
  static destroyTexture(e) {
    e.destroy?.(!0);
  }
  static _rabc00691f33c37() {
    return globalThis.__habboAirLauncher?.application?.renderer ?? null;
  }
  static _rcb037a15dd80a9(e, r, t, i) {
    let s = e.source;
    s != null && ((s._rfe7fbf9f945fb3 = void 0), (s._rda8f82deca7dcd = () => a._r3de3df5e2389a3(r, t, i)));
  }
  static _rfcca5b145b9d66(e, r) {
    let t = e.source,
      i = r.source;
    t == null ||
      i == null ||
      ((i._rfe7fbf9f945fb3 = void 0), (i._rda8f82deca7dcd = t._rda8f82deca7dcd ?? null));
  }
  static _r3de3df5e2389a3(e, r, t) {
    let i = Math.max(1, e) * Math.max(1, r),
      s = new Uint32Array(Math.ceil(i / 32));
    for (let o of t) {
      let d = Math.max(1, Math.round(o.width)),
        c = Math.max(1, Math.round(o.height));
      for (let f = 0; f < c; f++) {
        let l = o.y + f;
        if (!(l < 0 || l >= r))
          for (let b = 0; b < d; b++) {
            let _ = o.x + b;
            if (_ < 0 || _ >= e) continue;
            let h = o.flipH ? d - 1 - b : b;
            if (!a._r34808a3114c1ce(o.texture, h, f)) continue;
            let p = _ + l * e,
              m = p % 32,
              v = (p / 32) | 0;
            s[v] |= 1 << m;
          }
      }
    }
    return s;
  }
  static _r34808a3114c1ce(e, r, t) {
    let i = e.source;
    if (i == null) return !1;
    i._rfe7fbf9f945fb3 == null &&
      i._rda8f82deca7dcd != null &&
      (i._rfe7fbf9f945fb3 = i._rda8f82deca7dcd() ?? void 0);
    let s = i._rfe7fbf9f945fb3;
    if (s == null) return !1;
    let o = r + e.frame.x,
      d = t + e.frame.y;
    e.trim != null && ((o -= e.trim.x), (d -= e.trim.y));
    let c = i.resolution ?? 1,
      f = Math.max(1, Math.round((i.width ?? e.width) * c)),
      l = Math.round(o * c),
      b = Math.round(d * c);
    if (l < 0 || b < 0) return !1;
    let _ = l + b * f,
      h = _ % 32,
      p = (_ / 32) | 0;
    return (s[p] & (1 << h)) !== 0;
  }
  get _r7aef753936d8e9() {
    return this.var_664;
  }
  _r00ada39ba6f5cf(e, r = a.CHANNELS_EQUAL) {
    let t = 0.33,
      i = 0.33,
      s = 0.33;
    switch (r) {
      case a.CHANNELS_UNIQUE:
        ((t = 0.3), (i = 0.59), (s = 0.11));
        break;
      case a.CHANNELS_RED:
        ((t = 1), (i = 0), (s = 0));
        break;
      case a.CHANNELS_GREEN:
        ((t = 0), (i = 1), (s = 0));
        break;
      case a.CHANNELS_BLUE:
        ((t = 0), (i = 0), (s = 1));
        break;
      case "CHANNELS_DESATURATED":
      case a.CHANNELS_SATURATED:
        ((t = 0.3086), (i = 0.6094), (s = 0.082));
        break;
    }
    let o = new ColorMatrixFilter_([t, i, s, 0, 0, t, i, s, 0, 0, t, i, s, 0, 0, 0, 0, 0, 1, 0]),
      d = new A(e.width, e.height, e.transparent, 4294967295);
    return (
      d.copyPixels(e, e.rect, a._r57e646b46e0f6c, null, null, !1),
      d.applyFilter(d, d.rect, a._r57e646b46e0f6c, o),
      d
    );
  }
  _re9580ee607591e() {
    return !1;
  }
  isBlocked() {
    return !1;
  }
  _rab95816396e50e() {
    this._rfdf3361c71c85e = "";
  }
  get _rfb21bdee490567() {
    return this._r84beb534c73f11;
  }
  get _r141630159e5512() {
    return this.var_186?.actionType ?? "";
  }
  _r8b53045f3d7614() {
    this._cache?._rc7eadd004996d3();
  }
  _r0e8cddaada61e0(e) {
    e === this._r9f05fd2470b0ff &&
      (this._r5004e483c5f13a(),
      this.setActionsToParts(),
      (this._r84beb534c73f11 = !0),
      (this._changes = !0),
      this._r29171d8d82b04c != null &&
        !this._r29171d8d82b04c.disposed &&
        this._r29171d8d82b04c._r0e8cddaada61e0(e));
  }
  _r69ae4baa700b24() {
    this._cache?.reset();
    for (let e of this._r9156cdade11108.getValues()) e?.dispose();
    (this._r9156cdade11108.dispose(),
      (this._r9156cdade11108 = new B()),
      this._r850a8fbeb0bf18.dispose(),
      (this._r850a8fbeb0bf18 = new B()),
      (this._rbf8ff41ec44880 = []),
      (this._r623c4b458aa823 = -1),
      (this._r4d85597d0c501d = null),
      (this._r9085bfecd33169 = null),
      (this._rfdf3361c71c85e = ""),
      (this.var_1249 = !1),
      (this._changes = !0),
      (this.var_1236 = !1),
      this.var_39 != null && (this.var_39.dispose(), (this.var_39 = null)),
      this.disposeCroppedTopImage(),
      (this.var_500 = -1),
      (this._r898adddb17f144 = 0));
  }
}
