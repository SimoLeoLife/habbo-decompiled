// Extracted from HabboAirLauncher.deobf.js, line 145615.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/HintManager.as
// Obfuscated name: _i7ae91cabdb3998

class a {
  constructor(e) {
    this._windowManager = e;
  }
  static {
    n(this, "HintManager");
  }
  static const_1010 = 10;
  static const_1243 = 400;
  static const_1396 = 15;
  _reda3ff25bbfb0c = new Map();
  _r0cc2cae8673924 = null;
  _hint = null;
  _r8007227a910863 = null;
  get disposed() {
    return this._windowManager == null;
  }
  dispose() {
    this.disposed ||
      (this.hideHint(),
      this._reda3ff25bbfb0c.clear(),
      (this._r0cc2cae8673924 = null),
      (this._windowManager = null));
  }
  registerWindow(e, r, t) {
    (this._reda3ff25bbfb0c.has(e) && this._rea6cb0c55524da(e),
      this._reda3ff25bbfb0c.set(e, new HintTarget(r, e, t)));
  }
  _rea6cb0c55524da(e) {
    (this.activeKey === e && this.hideHint(), this._reda3ff25bbfb0c.delete(e));
  }
  showHint(e, r = null) {
    let t = this._reda3ff25bbfb0c.get(e) ?? null;
    if (
      !(t == null || t.window == null || e === this.activeKey) &&
      (this.hideHint(),
      (this._hint = t.window.context?.create(
        "",
        "",
        class_2090.WINDOW_TYPE_STATIC_BITMAP_WRAPPER,
        0,
        0,
        null,
        null,
        null,
        0,
      )),
      this._hint != null)
    ) {
      if (
        ((this._hint.fitSizeToContents = !0),
        (this._hint.visible = !1),
        (this._hint.assetUri =
          t.style === UnkConstants_757e1b._r17bbd5485459ef ? "common_green_arrow_vertical" : "common_green_arrow_horizontal"),
        (this._r0cc2cae8673924 = t),
        (this._r8007227a910863 = this._r36da693d86657d(t.window)),
        this._r8007227a910863 == null)
      ) {
        this.hideHint();
        return;
      }
      if (r != null) {
        this._r14efb6764a3f19(r);
        return;
      }
      (this._windowManager?.registerUpdateReceiver(this, 10), this.update(0));
    }
  }
  hideHint() {
    if (
      (this._windowManager?.removeUpdateReceiver(this),
      (this._r0cc2cae8673924 = null),
      (this._r8007227a910863 = null),
      this._hint == null)
    )
      return;
    let e = us.runMotion(this._hint);
    (e != null && us._ra35d4cb6bea218(e), this._hint.dispose(), (this._hint = null));
  }
  _r7ff8f726debeae(e) {
    e === this.activeKey && this.hideHint();
  }
  update(e) {
    if (this._r0cc2cae8673924 == null || this._hint == null) return;
    let r = new E();
    if ((this._r0cc2cae8673924.window.getGlobalPosition(r), r.x === 0 && r.y === 0)) return;
    let t = this._hint.zoomX,
      i = this._hint.zoomY;
    switch (this._r0cc2cae8673924.style) {
      case UnkConstants_757e1b._r17bbd5485459ef: {
        if (r.y - this._hint.height - a.const_1010 > 0) {
          let s = r.y - this._hint.height;
          (this._hint.y === 0 &&
            (this._hint.y = Math.max(s - a.const_1243, a.const_1396)),
            s - this._hint.y > a.const_1396 + a.const_1010
              ? (this._hint.y += a.const_1396)
              : (this._hint.y = s - a.const_1010 - 5 * Math.abs(Math.sin(_ia411d8d8194a3a() * 0.003))),
            (this._hint.zoomY = 1));
        } else {
          let s = r.y + this._r0cc2cae8673924.window.height;
          if (this._hint.y === 0) {
            let o =
              this._windowManager?.context.dispatchEvent?.stage?._rcc0ac91bd808af ??
              this._windowManager?.context.dispatchEvent?.height ??
              this._hint.height;
            this._hint.y = Math.min(
              o - this._hint.height,
              this._hint.y + a.const_1243,
            );
          }
          (s - this._hint.y > a.const_1396 + a.const_1010
            ? (this._hint.y -= a.const_1396)
            : (this._hint.y = s + a.const_1010 + 5 * Math.abs(Math.sin(_ia411d8d8194a3a() * 0.003))),
            (this._hint.zoomY = -1));
        }
        this._hint.x =
          r.x + (this._r0cc2cae8673924.window.width - this._hint.width) / 2;
        break;
      }
      default:
        (r.x + this._r0cc2cae8673924.window.width / 2 > this._r0cc2cae8673924.window.desktop.width / 2
          ? ((this._hint.x =
              r.x - this._hint.width - a.const_1010 - 5 * Math.abs(Math.sin(_ia411d8d8194a3a() * 0.003))),
            (this._hint.zoomX = 1))
          : ((this._hint.x =
              r.x +
              this._r0cc2cae8673924.window.width +
              a.const_1010 +
              5 * Math.abs(Math.sin(_ia411d8d8194a3a() * 0.003))),
            (this._hint.zoomX = -1)),
          (this._hint.y =
            r.y + (this._r0cc2cae8673924.window.height - this._hint.height) / 2));
        break;
    }
    ((this._hint.zoomX !== t || this._hint.zoomY !== i) &&
      this._hint.invalidate(),
      (this._hint.visible = this._r0cc2cae8673924.window.visible));
  }
  _r14efb6764a3f19(e) {
    if (this._hint == null || this._r8007227a910863 == null) return;
    ((this._hint.x = e.x), (this._hint.y = e.y), (this._hint.visible = !0));
    let r = e.x - this._r8007227a910863.x,
      t = e.y - this._r8007227a910863.y,
      i = Math.sqrt(r * r + t * t),
      s = 500 - Math.abs((1 / Math.max(i, 1)) * 100 * 500 * 0.5),
      o = this._hint.width,
      d = this._hint.height;
    ((this._hint.width *= 0.4), (this._hint.height *= 0.4));
    let c = new UnkMotionSubclass_ebb480(
      new UnkMotionSubclass_5f3e1b(
        new UnkClass_7dc350(new UnkClass_67c9fd(this._hint, s, this._r8007227a910863.x, this._r8007227a910863.y), 1),
        new UnkClass_ffb4fb(this._hint, s, o, d),
      ),
      new UnkMotionSubclass_c903be(() => {
        (this._windowManager?.registerUpdateReceiver(this, 10), this.update(0));
      }),
    );
    us.DropBounce(c);
  }
  _r36da693d86657d(e) {
    if (this._hint == null || this._r0cc2cae8673924 == null) return null;
    let r = new D(),
      t = new E();
    switch ((e.getGlobalPosition(t), this._r0cc2cae8673924.style)) {
      case UnkConstants_757e1b._r17bbd5485459ef:
        (t.y - this._hint.height - a.const_1010 > 0
          ? (r.y = t.y - this._hint.height - a.const_1010)
          : (r.y = t.y + e.height + a.const_1010),
          (r.x = t.x + (e.width - this._hint.width) / 2));
        break;
      default:
        (t.x + e.width / 2 > e.desktop.width / 2
          ? (r.x = t.x - this._hint.width - a.const_1010)
          : (r.x = t.x + e.width + a.const_1010),
          (r.y = t.y + (e.height - this._hint.height) / 2));
        break;
    }
    return r;
  }
  get activeKey() {
    return this._r0cc2cae8673924?.key ?? null;
  }
}
