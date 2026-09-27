// Extracted from HabboAirLauncher.deobf.js, line 81714.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i48176f978a742c

class a {
  static {
    n(this, "UnkClass_48176f");
  }
  static _r528a1e29a645f7 = 1;
  static _rac01e85472a11f = 1;
  static _r95c48cd8331f7f = 2;
  static _r81257b1dfba890 = 2;
  static _ra610f9d5df1af4 = new k(0.5, 2.3, 1.8);
  static _r83e649af86a94e = 90;
  static _r87b15f70a0d826 = 180;
  static _rcc5c6f36309bbd = 0.25;
  static _rff0e4db193867d = 64;
  static _r3f08dab6b5736f = 32;
  static _ra14043029461a6 = 2500;
  _roomEngine;
  _re5a84698bad2b2;
  _r348b44f3af83e4 = 0;
  _rd80133aa81903f = RoomObjectCategoryEnum.const_434;
  _ra51e8a3cf77408 = "";
  _rcf2bfdd188cda9 = null;
  _r97dd7b16c037ca = 0;
  _r2eab5a3d54f5b5 = 0;
  _rc7aa99c59b24e9 = a._rff0e4db193867d;
  _re205a4cca7f482 = !1;
  _r2962b4d4fead71 = !1;
  _rc2f131221f78c6 = 0;
  _ra686527f1cb55e = new E(0, 0);
  _r45fbe6ae4360ea = !1;
  constructor(e, r = 1) {
    ((this._roomEngine = e),
      (this._re5a84698bad2b2 = u9._rceb3d67cf4572e(r)),
      this._roomEngine != null &&
        (this._roomEngine.events.addEventListener?.(RoomEngineObjectEvent.ADDED, this.onRoomObjectAdded),
        this._roomEngine.events.addEventListener?.(RoomEngineObjectEvent.CONTENT_UPDATED, this.onRoomObjectAdded),
        this._roomEngine.events.addEventListener?.(RoomEngineEvent.ROOM_INITIALIZED, this.onRoomInitialized)));
  }
  dispose() {
    (this.reset(!0),
      this._roomEngine?.events != null &&
        (this._roomEngine.events.removeEventListener?.(RoomEngineObjectEvent.ADDED, this.onRoomObjectAdded),
        this._roomEngine.events.removeEventListener?.(RoomEngineObjectEvent.CONTENT_UPDATED, this.onRoomObjectAdded),
        this._roomEngine.events.removeEventListener?.(RoomEngineEvent.ROOM_INITIALIZED, this.onRoomInitialized)));
  }
  _r02eeec29a202f2() {
    if (this._roomEngine == null) return;
    let e = 7,
      r = new rs();
    r._r9e8cc905e77402(e + 2, e + 2);
    for (let t = 1; t < 1 + e; t++) for (let i = 1; i < 1 + e; i++) r.setTileHeight(i, t, 0);
    (r.initializeFromTileData(),
      this._roomEngine._rd4c6f2a06f0225(this._re5a84698bad2b2, r.getXML()),
      r.dispose());
  }
  reset(e) {
    (this._roomEngine != null &&
      (this._roomEngine.disposeObjectFurniture(this._re5a84698bad2b2, a._rac01e85472a11f),
      this._roomEngine._rd7e85a509c569e(this._re5a84698bad2b2, a._rac01e85472a11f),
      this._roomEngine._rc8445f4451c0a0(this._re5a84698bad2b2, a._rac01e85472a11f),
      e || this._r7314b55e8d0d86()),
      (this._rd80133aa81903f = RoomObjectCategoryEnum.const_434));
  }
  _r0ead309682028b(e, r, t = null, i = null) {
    let s = -1,
      o = t ?? new mi();
    if (!this._r7800b4141964cc || this._roomEngine == null) return s;
    if (this._rd80133aa81903f === RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE && this._r348b44f3af83e4 === e)
      return a._rac01e85472a11f;
    if (
      (this.reset(!1),
      (this._r348b44f3af83e4 = e),
      (this._rd80133aa81903f = RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE),
      (this._ra51e8a3cf77408 = ""),
      this._roomEngine._r5f200af79cf909(
        this._re5a84698bad2b2,
        a._rac01e85472a11f,
        e,
        new k(a._r95c48cd8331f7f, a._r81257b1dfba890, 0),
        r,
        0,
        o,
        Number.NaN,
        -1,
        0,
        0,
        "",
        !0,
        !1,
      ))
    ) {
      ((this._rc2f131221f78c6 = _ia411d8d8194a3a()), (this._r2962b4d4fead71 = !0), (s = a._rac01e85472a11f));
      let d = this._roomEngine._ra1f5cb56d0c2d8(
        this._re5a84698bad2b2,
        a._rac01e85472a11f,
        this._rd80133aa81903f,
      );
      (d != null &&
        (i != null && d.getStringToStringMap()?.setString(RoomObjectVariableEnum.FURNITURE_EXTRAS, i), this._rfe2f2684450b1d(d)),
        this._r7314b55e8d0d86());
    }
    return s;
  }
  _r60b193098c1ff5() {
    let e = this._r843a489e86c564();
    return e != null && e.length > 1;
  }
  _r6c4ecfa6e5fa45(e) {
    let r = this._r2a401374483052();
    if (r == null) return !1;
    let t = this._rd3819677b9dc5e(r, e);
    return t === (r.getDirection()?.x ?? 0)
      ? !1
      : (r.setDirection(new k(t)), this._r7314b55e8d0d86(!0), this._rc61293181668df(), !0);
  }
  _raf2c7b0b73fe43() {
    return this._re2affa6b1c69b6() != null;
  }
  _r669492ac62c9b7() {
    let e = this._re2affa6b1c69b6();
    if (e == null) return !1;
    let r = this._r0f1ed3e48c6bf4(e.getDirection()?.x ?? 0) ? a._r83e649af86a94e : a._r87b15f70a0d826;
    return (
      e.setDirection(new k(r)),
      this._r701c869f1e2b50(e),
      (this._rcf2bfdd188cda9 = null),
      this._r7314b55e8d0d86(!0),
      this._rc61293181668df(),
      !0
    );
  }
  _r57da83c688d864(e, r, t) {
    let i = -1;
    if (!this._r7800b4141964cc || this._roomEngine == null) return i;
    if (
      this._rd80133aa81903f === RoomObjectCategoryEnum.const_909 &&
      this._r348b44f3af83e4 === e &&
      this._ra51e8a3cf77408 === t
    )
      return a._rac01e85472a11f;
    if (
      (this.reset(!1),
      (this._r348b44f3af83e4 = e),
      (this._rd80133aa81903f = RoomObjectCategoryEnum.const_909),
      (this._ra51e8a3cf77408 = t),
      this._roomEngine._r7feb9ada4ab53f(
        this._re5a84698bad2b2,
        a._rac01e85472a11f,
        e,
        new k(0.5, 2.3, 1.8),
        r,
        0,
        t,
        0,
        0,
        "",
        -1,
        !1,
      ))
    ) {
      ((this._rc2f131221f78c6 = _ia411d8d8194a3a()), (this._r2962b4d4fead71 = !0), (i = a._rac01e85472a11f));
      let s = this._roomEngine._ra1f5cb56d0c2d8(
        this._re5a84698bad2b2,
        a._rac01e85472a11f,
        this._rd80133aa81903f,
      );
      s != null && this._rfe2f2684450b1d(s);
    }
    return i;
  }
  _r7f4d6e609cfa14(e, r) {
    return !this._r7800b4141964cc || this._roomEngine == null
      ? -1
      : (this.reset(!1),
        (this._r348b44f3af83e4 = 1),
        (this._rd80133aa81903f = RoomObjectCategoryEnum.OBJECT_CATEGORY_USER),
        (this._ra51e8a3cf77408 = e),
        this._roomEngine._r03c1f621ae28e1(
          this._re5a84698bad2b2,
          a._rac01e85472a11f,
          new k(a._r95c48cd8331f7f, a._r81257b1dfba890, 0),
          new k(90, 0, 0),
          135,
          1,
          e,
        ) &&
          ((this._rc2f131221f78c6 = _ia411d8d8194a3a()),
          (this._r2962b4d4fead71 = !0),
          this._rf4444c22760e43(1),
          this._r808192b43b7cc1(r),
          this._r58fa9683fec13b("std")),
        this._r7314b55e8d0d86(),
        a._rac01e85472a11f);
  }
  _r58fa9683fec13b(e, r = "") {
    this._r7800b4141964cc &&
      this._roomEngine?._r51ee69fcf18546(this._re5a84698bad2b2, a._rac01e85472a11f, e, r);
  }
  _rf4444c22760e43(e) {
    this._r7800b4141964cc &&
      this._roomEngine?._r13a7bbc799ce01(this._re5a84698bad2b2, a._rac01e85472a11f, e);
  }
  _r808192b43b7cc1(e) {
    this._r7800b4141964cc &&
      this._roomEngine?._r75c3b4e7c11b82(this._re5a84698bad2b2, a._rac01e85472a11f, e);
  }
  _r39decb54edd284(e, r = null, t = null, i = !1) {
    return !this._r7800b4141964cc || this._roomEngine == null
      ? !1
      : this._roomEngine._r39decb54edd284(this._re5a84698bad2b2, a._rac01e85472a11f, e, r, t, i);
  }
  _r93fc9f432e7394(e, r, t = null) {
    this._r7800b4141964cc &&
      this._roomEngine?._r93fc9f432e7394(this._re5a84698bad2b2, a._rac01e85472a11f, e, r, t);
  }
  _rc0038b776af704() {
    this._r7800b4141964cc &&
      this._roomEngine != null &&
      ((this._r2962b4d4fead71 = !1),
      this._rd80133aa81903f !== RoomObjectCategoryEnum.OBJECT_CATEGORY_USER &&
        this._roomEngine._r14e4651178594c(
          this._re5a84698bad2b2,
          a._rac01e85472a11f,
          this._rd80133aa81903f,
        ));
  }
  _re632c269e317f0(e, r) {
    if (this._roomEngine == null) return null;
    let t = this._roomEngine._re115c7593c2d32(
      this._re5a84698bad2b2,
      a._r528a1e29a645f7,
      e,
      r,
      this._rc7aa99c59b24e9,
    );
    return (
      this._roomEngine._rac4781fa4fafb3(this._re5a84698bad2b2, a._r528a1e29a645f7, !0),
      this._roomEngine
        ._rcc830c76c83ba6(this._re5a84698bad2b2, a._r528a1e29a645f7)
        ?._r558119346e8e8f(new k(a._r95c48cd8331f7f, a._r81257b1dfba890, 0), 30),
      (this._r97dd7b16c037ca = e),
      (this._r2eab5a3d54f5b5 = r),
      t
    );
  }
  modifyRoomCanvas(e, r) {
    this._roomEngine != null &&
      ((this._r97dd7b16c037ca = e),
      (this._r2eab5a3d54f5b5 = r),
      this._roomEngine.modifyRoomCanvas(this._re5a84698bad2b2, a._r528a1e29a645f7, e, r));
  }
  set _ra7728c300f10df(e) {
    this._ra686527f1cb55e = e;
  }
  get _ra7728c300f10df() {
    return this._ra686527f1cb55e;
  }
  _rd122c761245a59() {
    if (!this._r7800b4141964cc || this._roomEngine == null) {
      this._rc7aa99c59b24e9 = a._rff0e4db193867d;
      return;
    }
    this._roomEngine.getBoolean("zoom.enabled") &&
      this._roomEngine._rd969872ccb7fc1(this._re5a84698bad2b2, a._r528a1e29a645f7, 1);
    let e = this._roomEngine._rcc830c76c83ba6(this._re5a84698bad2b2, a._r528a1e29a645f7);
    e != null && (e._r2bd6b90b6fb50d(), (this._rc7aa99c59b24e9 = a._rff0e4db193867d));
  }
  _r7767b6699675c9() {
    if (!this._r7800b4141964cc || this._roomEngine == null) {
      this._rc7aa99c59b24e9 = a._r3f08dab6b5736f;
      return;
    }
    if (this._roomEngine.getBoolean("zoom.enabled"))
      this._roomEngine._rd969872ccb7fc1(this._re5a84698bad2b2, a._r528a1e29a645f7, 0.5);
    else {
      let e = this._roomEngine._rcc830c76c83ba6(this._re5a84698bad2b2, a._r528a1e29a645f7);
      if (e == null) return;
      e._r77a8181546f2a5();
    }
    this._rc7aa99c59b24e9 = a._r3f08dab6b5736f;
  }
  _r24062446e99225(e, r) {
    this._r57314f7f668654(e, r);
  }
  _r57314f7f668654(e, r, t = null) {
    !this._r7800b4141964cc ||
      this._roomEngine == null ||
      ((t ??= new k(a._r95c48cd8331f7f, a._r81257b1dfba890, 0)),
      this._roomEngine._rc74c4cf6e79eda(
        this._re5a84698bad2b2,
        a._rac01e85472a11f,
        t,
        t,
        !1,
        0,
        new k(e * 45, 0, 0),
        r * 45,
      ));
  }
  _r20d16d1bfd889e(e = null, r = null, t = null, i = !1) {
    return !this._r7800b4141964cc || this._roomEngine == null
      ? !1
      : this._roomEngine._r20d16d1bfd889e(this._re5a84698bad2b2, e, r, t, i);
  }
  _r9c3331ac1bb690(e, r = !0) {
    this._r7800b4141964cc && this._roomEngine?._rb767e17f9cef31(this._re5a84698bad2b2, e, r);
  }
  _r7314b55e8d0d86(e = !1) {
    if (
      (this._r45fbe6ae4360ea && !e) ||
      (this._r7887fa7ba4bd23(), !this._r7800b4141964cc || this._roomEngine == null)
    )
      return;
    let r = this._roomEngine._r0349bd197496ad(this._re5a84698bad2b2, a._r528a1e29a645f7);
    if (r == null || (this._r3301a8c24c7618(r), this._rcf2bfdd188cda9 == null)) return;
    let t = this._rc7aa99c59b24e9,
      i = this._rc0e5d653add014(r),
      s = this._r96486cb092027d(i);
    (s != null && this._roomEngine._r555de154e48981(this._re5a84698bad2b2, a._r528a1e29a645f7, s),
      this._rc7aa99c59b24e9 !== t && (this._rcf2bfdd188cda9 = null));
  }
  set _rf3433368466f6a(e) {
    this._r45fbe6ae4360ea = e;
  }
  set _rb83c58a3835da8(e) {
    this._r7800b4141964cc && this._roomEngine != null && (this._roomEngine._rf3433368466f6a = e);
  }
  get _rdca96106365ddc() {
    return this._re5a84698bad2b2;
  }
  _rc61293181668df() {
    this._r7800b4141964cc && this._roomEngine?._r2dbf9f58349954();
  }
  _ra5bef405f056da(e, r, t, i, s, o = 0, d = null, c = null, f = -1, l = -1, b = null) {
    return !this._r7800b4141964cc || this._roomEngine == null
      ? null
      : this._roomEngine._ra5bef405f056da(e, r, t, i, s, o, d, c, f, l, b);
  }
  _r935bceb9c0dcea(e, r, t, i, s = 0) {
    return !this._r7800b4141964cc || this._roomEngine == null
      ? null
      : this._roomEngine._r935bceb9c0dcea(this._re5a84698bad2b2, a._rac01e85472a11f, e, r, t, i, s);
  }
  _rc6fd00952715b8() {
    if (!this._r7800b4141964cc || this._roomEngine == null) return null;
    let e = this._roomEngine._ra1f5cb56d0c2d8(
      this._re5a84698bad2b2,
      a._rac01e85472a11f,
      RoomObjectCategoryEnum.OBJECT_CATEGORY_USER,
    );
    return e == null ? null : (e.getVisualization()?._rb09602dca8db26(16777215, -1) ?? null);
  }
  get _r7800b4141964cc() {
    return this._roomEngine != null && this._roomEngine.isInitialized;
  }
  _r7887fa7ba4bd23() {
    if (!this._r2962b4d4fead71 || this._roomEngine == null) return;
    let e = _ia411d8d8194a3a();
    e > this._rc2f131221f78c6 + a._ra14043029461a6 &&
      ((this._rc2f131221f78c6 = e),
      this._r7800b4141964cc &&
        this._roomEngine._r14e4651178594c(
          this._re5a84698bad2b2,
          a._rac01e85472a11f,
          this._rd80133aa81903f,
        ));
  }
  _r3301a8c24c7618(e) {
    if (this._roomEngine == null) return;
    let r = this._roomEngine._r37626001a0be81(
      this._re5a84698bad2b2,
      a._rac01e85472a11f,
      this._rd80133aa81903f,
      a._r528a1e29a645f7,
    );
    if (r == null) return;
    if (
      (r.offset(-(this._r97dd7b16c037ca >> 1), -(this._r2eab5a3d54f5b5 >> 1)),
      r.offset(-e.x, -e.y),
      this._rcf2bfdd188cda9 == null)
    ) {
      this._rcf2bfdd188cda9 = r;
      return;
    }
    let t = this._rcf2bfdd188cda9.union(r);
    (t.width - this._rcf2bfdd188cda9.width > (this._r97dd7b16c037ca - this._rcf2bfdd188cda9.width) >> 1 ||
      t.height - this._rcf2bfdd188cda9.height > (this._r2eab5a3d54f5b5 - this._rcf2bfdd188cda9.height) >> 1 ||
      this._rcf2bfdd188cda9.width < 1 ||
      this._rcf2bfdd188cda9.height < 1) &&
      (this._rcf2bfdd188cda9 = t);
  }
  _rc0e5d653add014(e) {
    if (
      this._rcf2bfdd188cda9 == null ||
      this._rcf2bfdd188cda9.width < 1 ||
      this._rcf2bfdd188cda9.height < 1 ||
      !this._r7800b4141964cc ||
      this._roomEngine == null
    )
      return e;
    let r = this._roomEngine._rcc830c76c83ba6(this._re5a84698bad2b2, a._r528a1e29a645f7);
    return (
      this._rcf2bfdd188cda9.width > this._r97dd7b16c037ca * (1 + a._rcc5c6f36309bbd) ||
      this._rcf2bfdd188cda9.height > this._r2eab5a3d54f5b5 * (1 + a._rcc5c6f36309bbd)
        ? this._roomEngine.getBoolean("zoom.enabled")
          ? this._roomEngine._r3e7c4a46b1689b(this._re5a84698bad2b2, a._r528a1e29a645f7) !== 0.5 &&
            (this._roomEngine._rd969872ccb7fc1(
              this._re5a84698bad2b2,
              a._r528a1e29a645f7,
              0.5,
              null,
              null,
              !1,
              !1,
              !0,
            ),
            (this._rc7aa99c59b24e9 = a._r3f08dab6b5736f),
            (this._re205a4cca7f482 = !0),
            (e.x >>= 1),
            (e.y >>= 1),
            (this._rcf2bfdd188cda9.left >>= 2),
            (this._rcf2bfdd188cda9.right >>= 2),
            (this._rcf2bfdd188cda9.top >>= 2),
            (this._rcf2bfdd188cda9.bottom >>= 2))
          : r?._re45c1d93943a81() &&
            (r._r77a8181546f2a5(),
            (this._rc7aa99c59b24e9 = a._r3f08dab6b5736f),
            (this._re205a4cca7f482 = !0),
            (e.x >>= 1),
            (e.y >>= 1),
            (this._rcf2bfdd188cda9.left >>= 2),
            (this._rcf2bfdd188cda9.right >>= 2),
            (this._rcf2bfdd188cda9.top >>= 2),
            (this._rcf2bfdd188cda9.bottom >>= 2))
        : this._rcf2bfdd188cda9.width << 1 < this._r97dd7b16c037ca * (1 + a._rcc5c6f36309bbd) - 5 &&
          this._rcf2bfdd188cda9.height << 1 < this._r2eab5a3d54f5b5 * (1 + a._rcc5c6f36309bbd) - 5 &&
          (this._roomEngine.getBoolean("zoom.enabled")
            ? this._roomEngine._r3e7c4a46b1689b(this._re5a84698bad2b2, a._r528a1e29a645f7) !== 1 &&
              !this._re205a4cca7f482 &&
              (this._roomEngine._rd969872ccb7fc1(
                this._re5a84698bad2b2,
                a._r528a1e29a645f7,
                1,
                null,
                null,
                !1,
                !1,
                !0,
              ),
              (this._rc7aa99c59b24e9 = a._rff0e4db193867d),
              (e.x <<= 1),
              (e.y <<= 1))
            : r != null &&
              !r._re45c1d93943a81() &&
              !this._re205a4cca7f482 &&
              (r._r2bd6b90b6fb50d(), (this._rc7aa99c59b24e9 = a._rff0e4db193867d), (e.x <<= 1), (e.y <<= 1))),
      e
    );
  }
  _r96486cb092027d(e) {
    if (this._rcf2bfdd188cda9 == null || this._rcf2bfdd188cda9.width < 1 || this._rcf2bfdd188cda9.height < 1)
      return e;
    let r = -((this._rcf2bfdd188cda9.left + this._rcf2bfdd188cda9.right) >> 1),
      t = -((this._rcf2bfdd188cda9.top + this._rcf2bfdd188cda9.bottom) >> 1),
      i = (this._r2eab5a3d54f5b5 - this._rcf2bfdd188cda9.height) >> 1;
    (i > 10
      ? (t += Math.min(15, i - 10))
      : this._rd80133aa81903f !== RoomObjectCategoryEnum.OBJECT_CATEGORY_USER
        ? (t += 5 - Math.max(0, i / 2))
        : (t -= 5 - Math.min(0, i / 2)),
      (t += this._ra686527f1cb55e.y),
      (r += this._ra686527f1cb55e.x));
    let s = r - e.x,
      o = t - e.y;
    if (s === 0 && o === 0) return null;
    let d = Math.sqrt(s * s + o * o);
    return (
      d > 10 && ((r = Math.trunc(e.x + (s * 10) / d)), (t = Math.trunc(e.y + (o * 10) / d))),
      new E(r, t)
    );
  }
  onRoomInitialized = n((e) => {
    e.type === RoomEngineEvent.ROOM_INITIALIZED &&
      e.roomId === this._re5a84698bad2b2 &&
      this._roomEngine != null &&
      this._roomEngine._r20d16d1bfd889e(this._re5a84698bad2b2, "110", "99999");
  }, "onRoomInitialized");
  onRoomObjectAdded = n((e) => {
    if (
      this._roomEngine == null ||
      e.roomId !== this._re5a84698bad2b2 ||
      e.objectId !== a._rac01e85472a11f ||
      e.category !== this._rd80133aa81903f
    )
      return;
    ((this._rcf2bfdd188cda9 = null), (this._re205a4cca7f482 = !1));
    let r = this._roomEngine._ra1f5cb56d0c2d8(e.roomId, e.objectId, e.category);
    (r != null && this._rfe2f2684450b1d(r),
      r != null &&
        r.getStringToStringMap() != null &&
        e.category === RoomObjectCategoryEnum.const_909 &&
        this._r701c869f1e2b50(r));
  }, "onRoomObjectAdded");
  _rfe2f2684450b1d(e) {
    e?.getStringToStringMap()?.setNumber(RoomObjectVariableEnum.FURNITURE_INVISIBLE_LAYER, 1);
  }
  _r2a401374483052() {
    return !this._r7800b4141964cc || this._rd80133aa81903f !== RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE
      ? null
      : this._roomEngine?._ra1f5cb56d0c2d8(
          this._re5a84698bad2b2,
          a._rac01e85472a11f,
          this._rd80133aa81903f,
        );
  }
  _r843a489e86c564() {
    let e = this._r2a401374483052();
    return e == null || e.getStringToStringMap() == null
      ? null
      : (e.getStringToStringMap()?._r90cb3676fb77dd(RoomObjectVariableEnum.const_1272) ?? null);
  }
  _rd3819677b9dc5e(e, r) {
    if (e == null || e.getStringToStringMap() == null) return 0;
    let t = e.getStringToStringMap()?._r90cb3676fb77dd(RoomObjectVariableEnum.const_1272) ?? null,
      i = e.getDirection()?.x ?? 0;
    if (t != null && t.length > 0) {
      let s = t.indexOf(i);
      if (s < 0) {
        s = 0;
        for (let o = 0; o < t.length && !(i <= t[o]); o++) s++;
        s %= t.length;
      }
      (r ? (s = (s + 1) % t.length) : (s = (s - 1 + t.length) % t.length), (i = t[s]));
    }
    return i;
  }
  _re2affa6b1c69b6() {
    return !this._r7800b4141964cc || this._rd80133aa81903f !== RoomObjectCategoryEnum.const_909
      ? null
      : this._roomEngine?._ra1f5cb56d0c2d8(
          this._re5a84698bad2b2,
          a._rac01e85472a11f,
          this._rd80133aa81903f,
        );
  }
  _r0f1ed3e48c6bf4(e) {
    return ((e = ((e % 360) + 360) % 360), e === a._r87b15f70a0d826);
  }
  _r701c869f1e2b50(e) {
    if (e == null || this._roomEngine == null) return;
    let r = this._r0f1ed3e48c6bf4(e.getDirection()?.x ?? 0),
      t = r ? a._ra610f9d5df1af4.y : a._ra610f9d5df1af4.x,
      i = r ? a._ra610f9d5df1af4.x : a._ra610f9d5df1af4.y;
    this._roomEngine._r261fb2f3c13d8d(
      this._re5a84698bad2b2,
      a._rac01e85472a11f,
      new k(t, i, this._r5ec94deb1e3ae6(e)),
    );
  }
  _r5ec94deb1e3ae6(e) {
    if (e?.getStringToStringMap() != null) {
      let t = e.getStringToStringMap()?._ra3dc9a405b5c73(RoomObjectVariableEnum.const_357) ?? Number.NaN,
        i = e.getStringToStringMap()?._ra3dc9a405b5c73(RoomObjectVariableEnum.const_292) ?? Number.NaN;
      if (!Number.isNaN(t) && !Number.isNaN(i)) return (3.6 - t) / 2 + i;
    }
    let r = e?.getLocation() ?? null;
    return r != null && !Number.isNaN(r.z) ? r.z : a._ra610f9d5df1af4.z;
  }
}
