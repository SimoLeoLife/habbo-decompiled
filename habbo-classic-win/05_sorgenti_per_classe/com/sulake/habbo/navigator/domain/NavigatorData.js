// Extracted from HabboAirLauncher.deobf.js, line 251897.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/domain/NavigatorData.as
// Obfuscated name: _i70590f4ef2a6de

class {
  constructor(e) {
    this._navigator = e;
  }
  static {
    n(this, "NavigatorData");
  }
  _r0aa5250451451e = null;
  _r7bb0273fc1dc61 = null;
  _rb9eb56039cf539 = !1;
  _r07f6fd95e1664b = !1;
  _r26630c59850938 = !1;
  var_19 = 0;
  var_3798 = 0;
  _r09c52696c2a421 = null;
  _re74cf9b86d1c65 = !1;
  _r6b577c4ef294d3 = 0;
  _rd71d0fda9f6712 = !1;
  var_3130 = 0;
  _r7cd6931cbfb748 = !1;
  _allCategories = [];
  _visibleCategories = [];
  _r1cb022c2160ad7 = [];
  _rab1863225bc141 = [];
  _r7769008dca5658 = 0;
  _rc85955016bac6c = 0;
  _re741d611c6244d = new Map();
  _r3877d911b26c99 = !1;
  _ra9eff897ec9100 = 0;
  _rc5a6f2b22f7136 = !1;
  _r1ab5e40bd9b893 = !1;
  _rbd5056f74cdce6 = 0;
  _r61b8f1c4cb1248 = null;
  _rec5aece80b807b = null;
  _friendList = new UnkClass_844c8a();
  _r1f79efdc17b8a0 = null;
  _r88ae272e237517 = null;
  get _r88d864d5d2406e() {
    return this._r09c52696c2a421 != null && !this._r26630c59850938;
  }
  get _rce664b644acc4a() {
    return (
      this._r09c52696c2a421 != null &&
      (this._r26630c59850938 || this._navigator.sessionData.hasSecurity(class_1794.MODERATOR))
    );
  }
  onRoomEnter(e) {
    ((this._r09c52696c2a421 = null),
      (this._r26630c59850938 = !1),
      (this._r26630c59850938 = e.owner),
      (this.var_19 = e.guestRoomId));
  }
  onRoomExit() {
    (this._r7bb0273fc1dc61?.dispose(),
      (this._r7bb0273fc1dc61 = null),
      this._r09c52696c2a421?.dispose(),
      (this._r09c52696c2a421 = null),
      (this._r26630c59850938 = !1));
  }
  set _r3ec3385fd4a25b(e) {
    (this._r09c52696c2a421?.dispose(), (this._r09c52696c2a421 = e));
  }
  set _rb6c91108c7cf2d(e) {
    (this._r7bb0273fc1dc61?.dispose(), (this._r7bb0273fc1dc61 = e));
  }
  get _rb3b92a0295b076() {
    return this._r0aa5250451451e instanceof class_3815;
  }
  get _r048adf31515a93() {
    return this._r0aa5250451451e instanceof class_2979;
  }
  get _r2f1b8d0154c68e() {
    return this._r0aa5250451451e instanceof UnkClass_db4946;
  }
  get _r9096f7d9d00725() {
    return this._r0aa5250451451e instanceof UnkClass_058c8f;
  }
  set _rf09e8697962ff2(e) {
    (this._rab759f6049bfa3(),
      (this._r0aa5250451451e = e),
      (this._r61b8f1c4cb1248 = e.ad),
      (this._r3877d911b26c99 = !1));
  }
  set _rf7fd60d8951b6a(e) {
    (this._rab759f6049bfa3(), (this._r0aa5250451451e = e), (this._r3877d911b26c99 = !1));
  }
  set _r9df01b7c78bf2d(e) {
    (this._rab759f6049bfa3(), (this._r0aa5250451451e = e), (this._r3877d911b26c99 = !1));
  }
  set _rda9bf5a0280319(e) {
    (this._rab759f6049bfa3(), (this._r0aa5250451451e = e), (this._r3877d911b26c99 = !1));
  }
  _rab759f6049bfa3() {
    (this._r0aa5250451451e?.dispose(), (this._r0aa5250451451e = null));
  }
  set _ra175262e310a69(e) {
    this._r61b8f1c4cb1248 = e;
  }
  set _r814554d59f42ae(e) {
    this._rec5aece80b807b = e;
  }
  get _ra175262e310a69() {
    return this._r61b8f1c4cb1248;
  }
  get _rf09e8697962ff2() {
    return this._r0aa5250451451e;
  }
  get _rf7fd60d8951b6a() {
    return this._r0aa5250451451e;
  }
  get _r9df01b7c78bf2d() {
    return this._r0aa5250451451e;
  }
  get _rda9bf5a0280319() {
    return this._r0aa5250451451e;
  }
  get _r814554d59f42ae() {
    return this._rec5aece80b807b;
  }
  get _rb6c91108c7cf2d() {
    return this._r7bb0273fc1dc61;
  }
  get avatarId() {
    return this.var_3798;
  }
  get _r428cd24285caa7() {
    return this._rb9eb56039cf539;
  }
  get _rbeec5eed3d63af() {
    return this._r07f6fd95e1664b;
  }
  get _r9eda1e1e8e08ba() {
    return this._r26630c59850938;
  }
  get _rd27e27c96c37cd() {
    return this._r09c52696c2a421;
  }
  get _rca20e8202f5fc1() {
    return this._re74cf9b86d1c65;
  }
  get _r2a7631cbfb3c51() {
    return this._r6b577c4ef294d3;
  }
  get _r3dfd89b26af6cd() {
    return this.var_3130;
  }
  get _r5e21136e23e09c() {
    return this._rd71d0fda9f6712;
  }
  get _rd8d11d6fc471c1() {
    return this._ra9eff897ec9100;
  }
  get _r43a02485c61e00() {
    return this._rc5a6f2b22f7136;
  }
  get _raef9ebdeb67451() {
    return this._r7cd6931cbfb748;
  }
  get _rf806c62c486d4f() {
    return this._rbd5056f74cdce6;
  }
  get _r4af9c5e837edd4() {
    return this._r1ab5e40bd9b893;
  }
  get _ra9e7830c65d383() {
    return this.var_19;
  }
  set avatarId(e) {
    this.var_3798 = e;
  }
  set _r2a7631cbfb3c51(e) {
    this._r6b577c4ef294d3 = e;
  }
  set _rca20e8202f5fc1(e) {
    this._re74cf9b86d1c65 = e;
  }
  set _r428cd24285caa7(e) {
    this._rb9eb56039cf539 = e;
  }
  set _rbeec5eed3d63af(e) {
    this._r07f6fd95e1664b = e;
  }
  set _r5e21136e23e09c(e) {
    this._rd71d0fda9f6712 = e;
  }
  set _r3dfd89b26af6cd(e) {
    this.var_3130 = e;
  }
  set _rd8d11d6fc471c1(e) {
    this._ra9eff897ec9100 = e;
  }
  set _r43a02485c61e00(e) {
    this._rc5a6f2b22f7136 = e;
  }
  set _raef9ebdeb67451(e) {
    this._r7cd6931cbfb748 = e;
  }
  set _rf806c62c486d4f(e) {
    this._rbd5056f74cdce6 = e;
  }
  set _r4af9c5e837edd4(e) {
    this._r1ab5e40bd9b893 = e;
  }
  set categories(e) {
    ((this._allCategories = e), (this._visibleCategories = []));
    for (let r of this._allCategories) r.visible && this._visibleCategories.push(r);
  }
  get _r0e0ffd0291afb3() {
    return this._allCategories;
  }
  get _r9da3e74587beda() {
    return this._visibleCategories;
  }
  _r372804c525e4b2(e) {
    for (let r of this._allCategories) if (r.nodeId === e) return r;
    return null;
  }
  set _rce09be3c985bc6(e) {
    ((this._r1cb022c2160ad7 = e), (this._rab1863225bc141 = []));
    for (let r of this._r1cb022c2160ad7) r.visible && this._rab1863225bc141.push(r);
  }
  get _rc814b37f8dadbb() {
    return this._r1cb022c2160ad7;
  }
  get _r34ab8227ed918d() {
    return this._rab1863225bc141;
  }
  _rc9cb13eb106d3d(e) {
    for (let r of this._r1cb022c2160ad7) if (r.categoryId === e) return r;
    return null;
  }
  _r81675265dd4528(e) {
    ((this._r7769008dca5658 = e.limit),
      (this._rc85955016bac6c = e.favouriteRoomIds.length),
      (this._re741d611c6244d = new Map()));
    for (let r of e.favouriteRoomIds) this._re741d611c6244d.set(r, "yes");
  }
  favouriteChanged(e, r) {
    (this._re741d611c6244d.set(e, r ? "yes" : null), (this._rc85955016bac6c += r ? 1 : -1));
  }
  _r68b74684d223fc() {
    let e = this._r09c52696c2a421?.flatId ?? -1;
    return this._re741d611c6244d.get(e) != null;
  }
  _r58971aaaf3f85a() {
    return this._r09c52696c2a421 == null
      ? !1
      : this.var_3130 === this._r09c52696c2a421.flatId;
  }
  _rc263ba8eeb2e0b(e) {
    return this._re741d611c6244d.get(e) != null;
  }
  _r9298e394bc1a75() {
    return this._rc85955016bac6c >= this._r7769008dca5658;
  }
  _r15f67a9e1b27c9(e) {
    return e === this.var_3130;
  }
  _rb9609c27f0f8a2() {
    this._r3877d911b26c99 = !0;
  }
  _rb1888e9019ee7c() {
    return this._r3877d911b26c99;
  }
  get friendList() {
    return this._friendList;
  }
  _r76cc0dd11132a9() {
    let e = this._r1f79efdc17b8a0;
    return ((this._r1f79efdc17b8a0 = null), e);
  }
  set _r82660da00997c0(e) {
    this._r1f79efdc17b8a0 = e;
  }
  get _r296e1461c77065() {
    return this._r88ae272e237517;
  }
  set _r296e1461c77065(e) {
    this._r88ae272e237517 = e;
  }
}
