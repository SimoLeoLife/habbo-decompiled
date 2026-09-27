// Extracted from HabboAirLauncher.deobf.js, line 33215.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i7d627ce7146fee

class a extends EventDispatcherWrapper {
  static {
    n(this, "UnkEventDispatcherWrapperSubclass_7d627c");
  }
  _r81087cd81bc949;
  _graphics = null;
  _re5442c5afba7b5 = [];
  _r0ab78c61adef0e = [];
  _r4b57c84a636c0b = null;
  _blendMode = ie.NORMAL;
  _rda5aae86a8765b = null;
  _ra9636c67054616 = null;
  _r5bcfc326d83da4 = null;
  _r70fc54574e0298 = null;
  _r43ff9ad28a0dc2;
  _r4e502fa59c23e6 = null;
  _rb20b9c88ee07db = null;
  _rbbf2713e2022ea = !1;
  _r7e8b27bd064dda = !0;
  _r247ece9ec60b94 = !1;
  cacheAsBitmap = !1;
  _rf7acde73a68a47 = !1;
  _r144c32655ab2c4 = !0;
  constructor(e) {
    (super(),
      (this._r81087cd81bc949 = e ?? new Ii()),
      (this._r81087cd81bc949.roundPixels = 1),
      (this._r43ff9ad28a0dc2 = new Transform_(this)),
      this._r3abe7f4dc195e4());
  }
  get graphics() {
    return ((this._graphics ??= new oae(this)), this._graphics);
  }
  _rb6ed46fa961336(e) {
    this._r0e1e931b2967ef().addChildAt(e, 0);
  }
  _rb96b91dcbe2434() {
    return this._graphics == null ? 0 : 1;
  }
  _r0e1e931b2967ef() {
    return this._rb20b9c88ee07db ?? this._r81087cd81bc949;
  }
  _r0203ab2933f479() {
    return this._r81087cd81bc949;
  }
  _rce2b304e7f15e9() {
    return [];
  }
  addEventListener(e, r, t = !1, i = 0, s = !1) {
    (super.addEventListener(e, r, t, i, s),
      this._r88277e583821a5() && a._r53403ceb7e72f8(e) && this._r51b5eaea4d2a23());
  }
  dispatchEvent(e) {
    if (!(e instanceof M)) return !1;
    let r = super.dispatchEvent(e);
    return (e.bubbles && !e.propagationStoppedFlag && this.parent?.dispatchEvent(e), r);
  }
  _r26b5781d08fe22() {
    return this.stage;
  }
  get x() {
    return this._r81087cd81bc949.position.x;
  }
  set x(e) {
    this._r81087cd81bc949.position.x = e;
  }
  get y() {
    return this._r81087cd81bc949.position.y;
  }
  set y(e) {
    this._r81087cd81bc949.position.y = e;
  }
  get width() {
    return this._r81087cd81bc949.width;
  }
  set width(e) {
    this._r81087cd81bc949.width = e;
  }
  get height() {
    return this._r81087cd81bc949.height;
  }
  set height(e) {
    this._r81087cd81bc949.height = e;
  }
  get alpha() {
    return this._r81087cd81bc949.alpha;
  }
  set alpha(e) {
    ((this._r81087cd81bc949.alpha = e), this._rb9da3e68966ceb());
  }
  get scaleX() {
    return this._r81087cd81bc949.scale.x;
  }
  set scaleX(e) {
    this._r81087cd81bc949.scale.x = e;
  }
  get scaleY() {
    return this._r81087cd81bc949.scale.y;
  }
  set scaleY(e) {
    this._r81087cd81bc949.scale.y = e;
  }
  get visible() {
    return this._r81087cd81bc949.visible;
  }
  set visible(e) {
    this._r81087cd81bc949.visible = e;
  }
  get blendMode() {
    return this._blendMode;
  }
  set blendMode(e) {
    ((this._blendMode = e), (this._r81087cd81bc949.blendMode = e));
  }
  get name() {
    return this._r81087cd81bc949.label ?? "";
  }
  set name(e) {
    this._r81087cd81bc949.label = e;
  }
  get mouseEnabled() {
    return this._r7e8b27bd064dda;
  }
  set mouseEnabled(e) {
    ((this._r7e8b27bd064dda = e), this._r3abe7f4dc195e4());
  }
  get doubleClickEnabled() {
    return this._r247ece9ec60b94;
  }
  set doubleClickEnabled(e) {
    ((this._r247ece9ec60b94 = e), this._r3abe7f4dc195e4());
  }
  get filters() {
    return this._re5442c5afba7b5;
  }
  set filters(e) {
    ((this._re5442c5afba7b5 = e), (this._r0ab78c61adef0e = _ibcced7f266aba0(e)), this._r8de69ba50675e8());
  }
  get mask() {
    return this._rda5aae86a8765b;
  }
  set mask(e) {
    ((this._rda5aae86a8765b = e), this._r320de7fa50b95a(this._r3e7c8451ca6fc9()));
  }
  get _r23c53d131d31fd() {
    return this._r5bcfc326d83da4?.clone() ?? null;
  }
  set _r23c53d131d31fd(e) {
    ((this._r5bcfc326d83da4 = e?.clone() ?? null), this._r43b7f0ac8c0c00());
  }
  get parent() {
    return this._ra9636c67054616;
  }
  set parent(e) {
    this._ra9636c67054616 = e;
  }
  get stage() {
    return this._r70fc54574e0298;
  }
  set stage(e) {
    this._r70fc54574e0298 = e;
  }
  get transform() {
    return this._r43ff9ad28a0dc2;
  }
  _re4e28fda3940bb(e) {
    ((this._r4b57c84a636c0b = e), this._r8de69ba50675e8());
  }
  get mouseX() {
    let e = this.stage;
    return e === null ? 0 : this._r4695c96d3c9ad8(new E(e.mouseX, e.mouseY)).x;
  }
  get mouseY() {
    let e = this.stage;
    return e === null ? 0 : this._r4695c96d3c9ad8(new E(e.mouseX, e.mouseY)).y;
  }
  _r4695c96d3c9ad8(e) {
    let r = this._r81087cd81bc949.toLocal({ x: e.x, y: e.y });
    return new E(r.x, r.y);
  }
  _r87bd5864f2eca8(e) {
    let r = this._r81087cd81bc949.toGlobal({ x: e.x, y: e.y });
    return new E(r.x, r.y);
  }
  _r0c6ab6b4de6653() {
    return this._r7e8b27bd064dda ? (this._r247ece9ec60b94 ? "dynamic" : "static") : "none";
  }
  _rd2bd777aff467f() {
    return this._r81087cd81bc949;
  }
  _r3e7c8451ca6fc9() {
    return this._rda5aae86a8765b?._rd2bd777aff467f() ?? null;
  }
  _r320de7fa50b95a(e) {
    this._r81087cd81bc949.mask = e;
  }
  _r3abe7f4dc195e4() {
    this._r81087cd81bc949.eventMode = this._r0c6ab6b4de6653();
  }
  _r88277e583821a5() {
    return !0;
  }
  _r704cc8ac099894() {
    return !1;
  }
  _rf35065c8622007() {
    return a._rc50571ed1abd15() && this._r704cc8ac099894();
  }
  _r51b5eaea4d2a23() {
    if (this._rbbf2713e2022ea) return;
    let e = this._r81087cd81bc949;
    ((e.hitArea ??= {
      contains: n((r, t) => {
        if (this._r5bcfc326d83da4 != null)
          return r >= 0 && t >= 0 && r < this._r5bcfc326d83da4.width && t < this._r5bcfc326d83da4.height;
        let i = this._r81087cd81bc949.getLocalBounds();
        return !Number.isFinite(i.x) ||
          !Number.isFinite(i.y) ||
          !Number.isFinite(i.width) ||
          !Number.isFinite(i.height)
          ? !1
          : r >= i.x && t >= i.y && r < i.x + i.width && t < i.y + i.height;
      }, "contains"),
    }),
      e.on?.("pointerdown", (r) => this._r046dbc1a87f3df(UnkClass_fd7c12._r9001c395573374, r, !0)),
      e.on?.("pointermove", (r) => this._r046dbc1a87f3df(UnkClass_fd7c12.var_370, r, !0)),
      e.on?.("pointerup", (r) => this._r046dbc1a87f3df(UnkClass_fd7c12._ra93f33360c3a28, r, !1)),
      e.on?.("pointerover", (r) => this._r046dbc1a87f3df(UnkClass_fd7c12._r0f980b14ecbc94, r, !1)),
      e.on?.("pointerout", (r) => this._r046dbc1a87f3df(UnkClass_fd7c12._rbf5bc4e563fc08, r, !1)),
      this._rf35065c8622007() ||
        (e.on?.("click", (r) => this._r046dbc1a87f3df(UnkClass_fd7c12.CLICK, r, !1)),
        e.on?.("dblclick", (r) => this._r046dbc1a87f3df(UnkClass_fd7c12.DOUBLE_CLICK, r, !1))),
      (this._rbbf2713e2022ea = !0));
  }
  _r046dbc1a87f3df(e, r, t) {
    let i = a._rd54e7bc8495242(r);
    if (i == null) return;
    let s = this._r81087cd81bc949.toLocal(i),
      o = new UnkClass_fd7c12(
        e,
        !1,
        !1,
        s.x,
        s.y,
        null,
        a._rb08cb26d749ed2(r, "ctrlKey"),
        a._rb08cb26d749ed2(r, "altKey"),
        a._rb08cb26d749ed2(r, "shiftKey"),
        t,
        0,
        i.x,
        i.y,
        a._re3349231206a7c(r),
      );
    if (
      (this.dispatchEvent(o),
      o.propagationStoppedFlag || o.immediatePropagationStoppedFlag || o.isDefaultPrevented())
    ) {
      let d = r;
      (o.immediatePropagationStoppedFlag && d?.stopImmediatePropagation?.(),
        o.propagationStoppedFlag && d?.stopPropagation?.(),
        o.isDefaultPrevented() && d?.preventDefault?.());
    }
  }
  _r8de69ba50675e8() {
    let e =
      this._r4b57c84a636c0b == null
        ? this._r0ab78c61adef0e
        : [...this._r0ab78c61adef0e, this._r4b57c84a636c0b];
    for (let r of e) r.habboUpdateDisplayAlpha?.(this.alpha);
    this._r81087cd81bc949.filters = e.length > 0 ? e : null;
  }
  _rb9da3e68966ceb() {
    let e =
      this._r4b57c84a636c0b == null
        ? this._r0ab78c61adef0e
        : [...this._r0ab78c61adef0e, this._r4b57c84a636c0b];
    for (let r of e) r.habboUpdateDisplayAlpha?.(this.alpha);
  }
  _r43b7f0ac8c0c00() {
    if (this._r5bcfc326d83da4 == null) {
      this._r3bbe30fd1c816e();
      return;
    }
    let e = this._r1aa00e99a0de3c(),
      r = this._r45ebe03fd3757b();
    ((e.position.x = -this._r5bcfc326d83da4.x),
      (e.position.y = -this._r5bcfc326d83da4.y),
      (e.mask = r),
      r.clear(),
      this._r5bcfc326d83da4.width > 0 &&
        this._r5bcfc326d83da4.height > 0 &&
        r
          .rect(0, 0, this._r5bcfc326d83da4.width, this._r5bcfc326d83da4.height)
          .fill({ color: 16777215, alpha: 1 }));
  }
  _r1aa00e99a0de3c() {
    if (this._rb20b9c88ee07db != null) return this._rb20b9c88ee07db;
    let e = new Ii();
    e.roundPixels = 1;
    let r = [...this._r81087cd81bc949.children];
    for (let t of r) (this._r81087cd81bc949.removeChild(t), e.addChild(t));
    return (this._r81087cd81bc949.addChild(e), (this._rb20b9c88ee07db = e), e);
  }
  _r45ebe03fd3757b() {
    if (this._r4e502fa59c23e6 != null) return this._r4e502fa59c23e6;
    let e = new Cl();
    return (this._r81087cd81bc949.addChild(e), (this._r4e502fa59c23e6 = e), e);
  }
  _r3bbe30fd1c816e() {
    let e = this._rb20b9c88ee07db;
    if (e == null) return;
    ((e.mask = null), (e.position.x = 0), (e.position.y = 0));
    let r = [...e.children];
    for (let t of r) (e.removeChild(t), this._r81087cd81bc949.addChild(t));
    (e.parent === this._r81087cd81bc949 && this._r81087cd81bc949.removeChild(e),
      this._r4e502fa59c23e6 != null &&
        (this._r4e502fa59c23e6.clear(),
        this._r4e502fa59c23e6.parent === this._r81087cd81bc949 &&
          this._r81087cd81bc949.removeChild(this._r4e502fa59c23e6)),
      (this._rb20b9c88ee07db = null),
      (this._r4e502fa59c23e6 = null));
  }
  static _r53403ceb7e72f8(e) {
    return (
      e === UnkClass_fd7c12.CLICK ||
      e === UnkClass_fd7c12.DOUBLE_CLICK ||
      e === UnkClass_fd7c12._r9001c395573374 ||
      e === UnkClass_fd7c12.var_370 ||
      e === UnkClass_fd7c12._rbf5bc4e563fc08 ||
      e === UnkClass_fd7c12._r0f980b14ecbc94 ||
      e === UnkClass_fd7c12._ra93f33360c3a28
    );
  }
  static _rd54e7bc8495242(e) {
    let r = e?.global ?? e?.data?.global ?? null;
    return r == null ? null : { x: r.x, y: r.y };
  }
  static _re3349231206a7c(e) {
    let r = Number(e?.detail);
    return !Number.isFinite(r) || r <= 0 ? 0 : Math.trunc(r);
  }
  static _rb08cb26d749ed2(e, r) {
    return !!e?.[r];
  }
  static _rc50571ed1abd15() {
    return globalThis.__habboAirLauncherStageClickBridge === !0;
  }
}
