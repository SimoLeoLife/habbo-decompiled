// Extracted from HabboAirLauncher.deobf.js, line 69650.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/habbicons/assets/HabbiconAssetManager.as
// Obfuscated name: _i4b0bcc7b5ec9d6

class a {
  static {
    n(this, "HabbiconAssetManager");
  }
  static const_694 = "habbicons.asset.root";
  static HABBICONS_ASSET_HASH = "habbicons.asset.hash";
  static const_548 = "habbicons.json";
  static const_625 = "habbicons_spritesheet.png";
  static COLLECTION_ICONS_SPRITESHEET_FILE = "collection_icons_spritesheet.png";
  static HABBICONS_ANIMATION_PATH = "animation/";
  static DEFAULT_FRAME_SIZE = 40;
  static DEFAULT_COLLECTION_ICON_SIZE = 18;
  static COLLECTION_ICON_OUTLINE_SIZE = 2;
  static COLLECTION_ICON_OUTLINE_COLOR = 4294967295;
  static ASSETS_LOADED = "habbicon_assets_loaded";
  static var_325 = null;
  static _configuration = null;
  static _events = new EventDispatcherWrapper();
  _isLoading = !1;
  _r16448e4c48eccd = !1;
  _rb52fac1cad633c = !1;
  _r2eb89557a8b00b = !1;
  _recf1789cde819b = !1;
  _r1633f4c872461d = new Map();
  _r4e7c41042d9fb3 = new Map();
  _r9a4727eaad6b98 = new Map();
  _r61e0617f00f6b4 = new Map();
  _rc09bd85899fa5d = new Map();
  _r0569705ff39f46 = new Map();
  _ra9e488b1df11d4 = new Map();
  _r588ae6ec721196 = new Map();
  _r789b4f57e4ea5d = new Map();
  _rb382bed7487483 = new Map();
  _r3e93eac993cfb4 = new Map();
  _r0a58a98d65297f = null;
  _r22b786f8631bc8 = null;
  _ree6dfb1e2b24fb = null;
  _ra0af4e3f832911 = new WeakMap();
  static getPreviewBitmap(e, r) {
    return this.getInstance()._r343a5a904d6465(e, r);
  }
  static getHabbiconNameKey(e) {
    return this.getInstance()._r0f9a012148cb3b(e);
  }
  static getCollectionIconBitmap(e) {
    return this.getInstance()._rb476661bb5f1e8(e);
  }
  static _ra1088bef97043d(e) {
    return this.getInstance()._rd284e37e2a6169(e);
  }
  static getRuntimeAsset(e) {
    return this.getInstance()._r4588ea5ea3d129(e);
  }
  static getDirection(e) {
    return this.getInstance()._r9984be48391aa7(e);
  }
  static configure(e) {
    ((this._configuration = e), this.getInstance().refreshAssetRoot());
  }
  static preload() {
    this.getInstance()._ra79da3ab77aec7();
  }
  static addEventListener(e, r) {
    this._events.addEventListener(e, r);
  }
  static removeEventListener(e, r) {
    this._events.removeEventListener(e, r);
  }
  static getInstance() {
    return (this.var_325 == null && (this.var_325 = new a()), this.var_325);
  }
  refreshAssetRoot() {
    let e = a._configuration;
    if (e == null) return this._ree6dfb1e2b24fb;
    let r = e.getProperty(a.const_694),
      t = e.getProperty(a.HABBICONS_ASSET_HASH);
    return r == null || r === ""
      ? this._ree6dfb1e2b24fb
      : ((r = this._r0cb06783fbb08d(r)),
        t != null && t !== "" && (r.includes("{hash}") || r.includes("%hash%"))
          ? (r = r.split("{hash}").join(t).split("%hash%").join(t))
          : t != null && t !== "" && !this._rda70c1e64ee250(r, t) && (r += "/" + t),
        (r += "/"),
        this._ree6dfb1e2b24fb !== r && (this._rf521ffe906695f(), (this._ree6dfb1e2b24fb = r)),
        this._ree6dfb1e2b24fb);
  }
  _rf521ffe906695f() {
    ((this._isLoading = !1),
      (this._r16448e4c48eccd = !1),
      (this._rb52fac1cad633c = !1),
      (this._r2eb89557a8b00b = !1),
      (this._recf1789cde819b = !1),
      (this._r1633f4c872461d = new Map()),
      (this._r4e7c41042d9fb3 = new Map()),
      (this._r9a4727eaad6b98 = new Map()),
      (this._r61e0617f00f6b4 = new Map()),
      (this._rc09bd85899fa5d = new Map()),
      (this._r0569705ff39f46 = new Map()),
      (this._ra9e488b1df11d4 = new Map()),
      (this._r588ae6ec721196 = new Map()),
      (this._r789b4f57e4ea5d = new Map()),
      (this._rb382bed7487483 = new Map()),
      (this._r3e93eac993cfb4 = new Map()),
      (this._r0a58a98d65297f = null),
      (this._r22b786f8631bc8 = null));
  }
  _r0cb06783fbb08d(e) {
    for (; e.length > 0 && e.charAt(e.length - 1) === "/";) e = e.substr(0, e.length - 1);
    return e;
  }
  _rda70c1e64ee250(e, r) {
    return e === r || e.lastIndexOf("/" + r) === e.length - r.length - 1;
  }
  _r343a5a904d6465(e, r) {
    this._ra79da3ab77aec7();
    let t = (r ? this._r61e0617f00f6b4 : this._r9a4727eaad6b98).get(e);
    if (t != null) return t;
    if (!this._r16448e4c48eccd || !this._rb52fac1cad633c || this._r0a58a98d65297f == null) return null;
    let i = this._r1633f4c872461d.get(e);
    if (i == null) return null;
    let s = this._r507eb5808458c6(i);
    if (s == null) return null;
    if ((this._r9a4727eaad6b98.set(e, s), r)) {
      let o = Qh.resampleBitmapData(s, 0.5);
      return (this._r61e0617f00f6b4.set(e, o), o);
    }
    return s;
  }
  _rb476661bb5f1e8(e) {
    this._ra79da3ab77aec7();
    let r = this._rc09bd85899fa5d.get(e);
    if (r != null) return r;
    if (!this._r16448e4c48eccd || !this._r2eb89557a8b00b || this._r22b786f8631bc8 == null) return null;
    let t = this._r4e7c41042d9fb3.get(e);
    if (t == null) return null;
    let i = this._r571e2b8886a782(this._r22b786f8631bc8, t);
    return (i != null && this._rc09bd85899fa5d.set(e, i), i);
  }
  _rd284e37e2a6169(e) {
    let r = this._r0569705ff39f46.get(e);
    if (r != null) return r;
    let t = this._rb476661bb5f1e8(e);
    return t == null
      ? null
      : ((r = a.createOutlinedBitmap(t, a.COLLECTION_ICON_OUTLINE_SIZE, a.COLLECTION_ICON_OUTLINE_COLOR)),
        this._r0569705ff39f46.set(e, r),
        r);
  }
  _r0f9a012148cb3b(e) {
    return (this._ra79da3ab77aec7(), this._ra9e488b1df11d4.get(e) ?? null);
  }
  _r9984be48391aa7(e) {
    return (this._ra79da3ab77aec7(), this._r588ae6ec721196.get(e)?.direction ?? 0);
  }
  _r4588ea5ea3d129(e) {
    this._ra79da3ab77aec7();
    let r = this._rb382bed7487483.get(e);
    if (r != null) return r;
    let t = this._r588ae6ec721196.get(e);
    return t == null
      ? null
      : (t.animated && this._r1c4744531ea5d4(e, t),
        (r = this._r789b4f57e4ea5d.get(e)),
        r == null && ((r = this._r13af5353c093be(e, t)), r != null && this._r789b4f57e4ea5d.set(e, r)),
        r ?? null);
  }
  _ra79da3ab77aec7() {
    if (
      this._isLoading ||
      (this._r16448e4c48eccd && this._rb52fac1cad633c && this._r2eb89557a8b00b) ||
      this._recf1789cde819b
    )
      return;
    let e = this.refreshAssetRoot();
    if (e == null || e === "") {
      this._rba20d1b2f63707();
      return;
    }
    this._isLoading = !0;
    let r = new UnkEventDispatcherWrapperSubclass_b182ac();
    ((r._rb1fac8ba8605e0 = UnkConstants_70a4b4.TEXT),
      r.addEventListener(M.ComponentDependency, this._r20e8b5f928e30a),
      r.addEventListener(UnkErrorEventSubclass_207e02._rb9739f8a5177c3, this._r3dce650f5f03ea),
      r.addEventListener(UnkErrorEventSubclass_30cc54._r5ff5ea8eb8799e, this._rf687aa43fea090),
      r.load(new UnkClass_636490(e + a.const_548)));
    let t = new UnkEventDispatcherWrapperSubclass_b182ac();
    ((t._rb1fac8ba8605e0 = UnkConstants_70a4b4.BINARY),
      t.addEventListener(M.ComponentDependency, this._rc4cbc8d0794eb0),
      t.addEventListener(UnkErrorEventSubclass_207e02._rb9739f8a5177c3, this._r3dce650f5f03ea),
      t.addEventListener(UnkErrorEventSubclass_30cc54._r5ff5ea8eb8799e, this._rf687aa43fea090),
      t.load(new UnkClass_636490(e + a.const_625)));
    let i = new UnkEventDispatcherWrapperSubclass_b182ac();
    ((i._rb1fac8ba8605e0 = UnkConstants_70a4b4.BINARY),
      i.addEventListener(M.ComponentDependency, this._r8255029b39907d),
      i.addEventListener(UnkErrorEventSubclass_207e02._rb9739f8a5177c3, this._r390a2c52855e8e),
      i.addEventListener(UnkErrorEventSubclass_30cc54._r5ff5ea8eb8799e, this._r43ae2a3616df78),
      i.load(new UnkClass_636490(e + a.COLLECTION_ICONS_SPRITESHEET_FILE)));
  }
  _r20e8b5f928e30a = n((e) => {
    let r = e.currentTarget;
    this._r2801db6f15d037(r);
    try {
      let t = JSON.parse(String(r.data));
      for (let i of Array.isArray(t?.habbicons) ? t.habbicons : []) {
        if (i == null || i.id == null) continue;
        let s = Number(i.id) | 0,
          o = this._r4152a3e5f682d9(i.width),
          d = this._r4152a3e5f682d9(i.height);
        (this._r1633f4c872461d.set(s, { x: Number(i.x) | 0, y: Number(i.y) | 0, width: o, height: d }),
          i.name != null && this._ra9e488b1df11d4.set(s, String(i.name)),
          this._r588ae6ec721196.set(s, this._r937867727b63cd(i, o, d)));
      }
      for (let i of Array.isArray(t?.collectionIcons) ? t.collectionIcons : [])
        i == null ||
          i.id == null ||
          this._r4e7c41042d9fb3.set(Number(i.id) | 0, {
            x: Number(i.x) | 0,
            y: Number(i.y) | 0,
            width: this._r4152a3e5f682d9(i.width, a.DEFAULT_COLLECTION_ICON_SIZE),
            height: this._r4152a3e5f682d9(i.height, a.DEFAULT_COLLECTION_ICON_SIZE),
          });
      ((this._r16448e4c48eccd = !0), this._rde1d4ffc5a6441());
    } catch {
      this._rba20d1b2f63707();
    }
  }, "_r20e8b5f928e30a");
  _r99b88983f795d4(e) {
    if (!(e.data instanceof re)) return null;
    try {
      return ((e.data.position = 0), new UnkClass_fdd920().decode(e.data));
    } catch {
      return null;
    }
  }
  _rc4cbc8d0794eb0 = n((e) => {
    let r = e.currentTarget;
    this._rf04126f2f17149(r);
    let t = this._r99b88983f795d4(r);
    if (t == null) {
      this._rba20d1b2f63707();
      return;
    }
    ((this._r0a58a98d65297f = t), (this._rb52fac1cad633c = !0), this._rde1d4ffc5a6441());
  }, "_rc4cbc8d0794eb0");
  _r8255029b39907d = n((e) => {
    let r = e.currentTarget;
    (this._rf04126f2f17149(r, this._r8255029b39907d, this._r390a2c52855e8e, this._r43ae2a3616df78),
      (this._r22b786f8631bc8 = this._r99b88983f795d4(r)),
      this._r22b786f8631bc8 == null,
      (this._r2eb89557a8b00b = !0),
      this._rde1d4ffc5a6441());
  }, "_r8255029b39907d");
  _r3dce650f5f03ea = n((e) => {
    this._rba20d1b2f63707();
  }, "_r3dce650f5f03ea");
  _rf687aa43fea090 = n((e) => {
    this._rba20d1b2f63707();
  }, "_rf687aa43fea090");
  _r390a2c52855e8e = n((e) => {
    (this._rf04126f2f17149(
      e.currentTarget,
      this._r8255029b39907d,
      this._r390a2c52855e8e,
      this._r43ae2a3616df78,
    ),
      (this._r2eb89557a8b00b = !0),
      this._rde1d4ffc5a6441());
  }, "_r390a2c52855e8e");
  _r43ae2a3616df78 = n((e) => {
    (this._rf04126f2f17149(
      e.currentTarget,
      this._r8255029b39907d,
      this._r390a2c52855e8e,
      this._r43ae2a3616df78,
    ),
      (this._r2eb89557a8b00b = !0),
      this._rde1d4ffc5a6441());
  }, "_r43ae2a3616df78");
  _rba20d1b2f63707() {
    ((this._isLoading = !1), (this._recf1789cde819b = !0));
  }
  _rde1d4ffc5a6441() {
    this._r16448e4c48eccd &&
      this._rb52fac1cad633c &&
      this._r2eb89557a8b00b &&
      ((this._isLoading = !1), a._events.dispatchEvent(new M(a.ASSETS_LOADED)));
  }
  _r937867727b63cd(e, r, t) {
    let i = Array.isArray(e.frameData) ? e.frameData : [],
      s = e.animation,
      o = Array.isArray(s?.steps) ? s.steps : [],
      d = s?.playbackSpeed != null ? Number(s.playbackSpeed) : 1;
    (Number.isNaN(d) || d <= 0) && (d = 1);
    let c = (Number(e.frameCount) | 0) > 1 && i.length > 0 && o.length > 0;
    return new UnkClass_a3b62c(
      r,
      t,
      this._r99ce61d7783423(e.dir),
      c,
      !!e.loop,
      this._rd61d8c25e20a94(i, r, t),
      this._r19fddbf6420644(o, d),
    );
  }
  _rd61d8c25e20a94(e, r, t) {
    let i = [];
    for (let s of e ?? [])
      s != null &&
        i.push({
          id: Number(s.id) | 0,
          x: Number(s.x) | 0,
          y: Number(s.y) | 0,
          width: this._r4152a3e5f682d9(s.width, r),
          height: this._r4152a3e5f682d9(s.height, t),
        });
    return (i.sort((s, o) => s.id - o.id), i);
  }
  _r19fddbf6420644(e, r) {
    let t = [];
    for (let i of e ?? []) {
      if (i == null || i.enabled === !1) continue;
      let s = Math.max(1, Number(i.durationMs) | 0);
      ((s = Math.max(1, s / r) | 0),
        t.push({ sourceFrame: Math.max(0, Number(i.sourceFrame) | 0), durationMs: s }));
    }
    return t;
  }
  _r13af5353c093be(e, r) {
    let t = this._r343a5a904d6465(e, !1),
      i = this._r343a5a904d6465(e, !0);
    return t == null
      ? null
      : {
          animated: !1,
          loop: !1,
          direction: r.direction | 0,
          baseWidth: t.width,
          baseHeight: t.height,
          frames: [{ bitmap: t, _rea73c74418f142: i ?? t, width: t.width, height: t.height }],
          steps: [{ sourceFrame: 0, durationMs: 0 }],
          _rdb0734ff045b3f: 0,
        };
  }
  _r1c4744531ea5d4(e, r) {
    if (r == null || !r.animated || this._r3e93eac993cfb4.get(e) || this._rb382bed7487483.get(e) != null)
      return;
    let t = this.refreshAssetRoot();
    if (t == null || t === "") return;
    this._r3e93eac993cfb4.set(e, !0);
    let i = new UnkEventDispatcherWrapperSubclass_b182ac();
    (this._ra0af4e3f832911.set(i, e),
      (i._rb1fac8ba8605e0 = UnkConstants_70a4b4.BINARY),
      i.addEventListener(M.ComponentDependency, this._r181430cd6d652f),
      i.addEventListener(UnkErrorEventSubclass_207e02._rb9739f8a5177c3, this._r481c350550dc65),
      i.addEventListener(UnkErrorEventSubclass_30cc54._r5ff5ea8eb8799e, this._r25f3729e6a4e6e),
      i.load(new UnkClass_636490(t + a.HABBICONS_ANIMATION_PATH + e + ".png")));
  }
  _r181430cd6d652f = n((e) => {
    let r = e.currentTarget,
      t = r != null ? this._r99b88983f795d4(r) : null,
      i = this._ra0af4e3f832911.get(r) ?? 0,
      s = this._r588ae6ec721196.get(i);
    (this._rf04126f2f17149(r, this._r181430cd6d652f, this._r481c350550dc65, this._r25f3729e6a4e6e),
      this._r3e93eac993cfb4.delete(i),
      !(t == null || s == null) && this._rb382bed7487483.set(i, this._r5db893d0a14492(s, t)));
  }, "_r181430cd6d652f");
  _r481c350550dc65 = n((e) => {
    let r = e.currentTarget;
    r != null &&
      (this._rf04126f2f17149(r, this._r181430cd6d652f, this._r481c350550dc65, this._r25f3729e6a4e6e),
      this._r3e93eac993cfb4.delete(this._ra0af4e3f832911.get(r) ?? 0));
  }, "_r481c350550dc65");
  _r25f3729e6a4e6e = n((e) => {
    let r = e.currentTarget;
    r != null &&
      (this._rf04126f2f17149(r, this._r181430cd6d652f, this._r481c350550dc65, this._r25f3729e6a4e6e),
      this._r3e93eac993cfb4.delete(this._ra0af4e3f832911.get(r) ?? 0));
  }, "_r25f3729e6a4e6e");
  _r5db893d0a14492(e, r) {
    if (e == null || r == null || e.frames == null || e.frames.length === 0) return null;
    let t = [],
      i = 0;
    for (let s of e.frames) {
      let o = this._r571e2b8886a782(r, s);
      if (o == null) continue;
      let d = Qh.resampleBitmapData(o, 0.5);
      t.push({ bitmap: o, _rea73c74418f142: d, width: o.width, height: o.height });
    }
    if (t.length === 0) return null;
    for (let s of e.steps) i += Math.max(1, s.durationMs | 0);
    return {
      animated: !0,
      loop: !!e.loop,
      direction: e.direction | 0,
      baseWidth: e._r0655c6efa70f25 | 0,
      baseHeight: e._r578c7df2dcda68 | 0,
      frames: t,
      steps: e.steps?.length > 0 ? e.steps : [{ sourceFrame: 0, durationMs: 0 }],
      _rdb0734ff045b3f: i,
    };
  }
  _r507eb5808458c6(e) {
    return this._r571e2b8886a782(this._r0a58a98d65297f, e);
  }
  _r571e2b8886a782(e, r) {
    let t = this.createValidRectForSheet(e, r.x | 0, r.y | 0, r.width | 0, r.height | 0);
    if (t == null || e == null) return null;
    let i = new A(t.width, t.height, !0, 0);
    return (i.copyPixels(e, t, new E(), null, null, !0), i);
  }
  static createOutlinedBitmap(e, r, t) {
    let i = new A(e.width + r * 2, e.height + r * 2, !0, 0),
      s = new A(e.width, e.height, !0, t),
      o = new E();
    s.copyChannel(e, e.rect, o, On.ALPHA, On.ALPHA);
    for (let d = -r; d <= r; d++)
      for (let c = -r; c <= r; c++)
        (d === 0 && c === 0) || ((o.x = r + d), (o.y = r + c), i.copyPixels(s, s.rect, o, null, null, !0));
    return (i.copyPixels(e, e.rect, new E(r, r), null, null, !0), s.dispose(), i);
  }
  createValidRectForSheet(e, r, t, i, s) {
    if (e == null) return null;
    let o = new D(r, e.height - t - s, i, s);
    return this._r5d26e0f040e054(e, o)
      ? o
      : ((o = new D(r, t, i, s)), this._r5d26e0f040e054(e, o) ? o : null);
  }
  _r5d26e0f040e054(e, r) {
    return e != null && r.x >= 0 && r.y >= 0 && r.right <= e.width && r.bottom <= e.height;
  }
  _r4152a3e5f682d9(e, r = a.DEFAULT_FRAME_SIZE) {
    let t = Number(e) | 0;
    return t > 0 ? t : r;
  }
  _r99ce61d7783423(e) {
    let r = Number(e) | 0;
    return r < 0 ? -1 : r > 0 ? 1 : 0;
  }
  _r2801db6f15d037(e) {
    e != null &&
      (e.removeEventListener(M.ComponentDependency, this._r20e8b5f928e30a),
      e.removeEventListener(UnkErrorEventSubclass_207e02._rb9739f8a5177c3, this._r3dce650f5f03ea),
      e.removeEventListener(UnkErrorEventSubclass_30cc54._r5ff5ea8eb8799e, this._rf687aa43fea090));
  }
  _rf04126f2f17149(e, r = this._rc4cbc8d0794eb0, t = this._r3dce650f5f03ea, i = this._rf687aa43fea090) {
    e != null &&
      (e.removeEventListener(M.ComponentDependency, r),
      e.removeEventListener(UnkErrorEventSubclass_207e02._rb9739f8a5177c3, t),
      e.removeEventListener(UnkErrorEventSubclass_30cc54._r5ff5ea8eb8799e, i));
  }
}
