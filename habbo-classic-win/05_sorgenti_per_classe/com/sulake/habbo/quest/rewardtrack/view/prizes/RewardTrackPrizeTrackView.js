// Estratto da HabboAirLauncher.deobf.js, riga 266885.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/rewardtrack/view/prizes/RewardTrackPrizeTrackView.as
// Nome offuscato: _i70bd76c774522a

class a {
  constructor(e, r, t, i, s, o, d, c, f, l, b, _) {
    this.var_63 = e;
    this.var_292 = r;
    this._content = t;
    this.var_3192 = i;
    this.var_3128 = s;
    this.var_2650 = o;
    this.var_3034 = d;
    this.var_2712 = c;
    this.var_2418 = f;
    this.var_2312 = l;
    this.var_2989 = b;
    this.var_2660 = _;
    ((this._r834034b605f603 = new RewardTrackMainProgressBarView(this.var_3128)),
      this.var_2418.addEventListener(u.CLICK, this._re2dc2b2b8eee8b),
      this.var_2312.addEventListener(u.CLICK, this.onNextClicked),
      this.refresh(!1, !0));
  }
  static {
    n(this, "RewardTrackPrizeTrackView");
  }
  static MIN_PRIZE_SPACING = 15;
  _layout = new mge();
  _r834034b605f603;
  var_2568 = [];
  var_2573 = [];
  var_1672 = [];
  var_1361 = [];
  _freePagePrizes = null;
  _premiumPagePrizes = null;
  _pagePointValues = null;
  var_193 = 0;
  _disposed = !1;
  refresh(e, r) {
    (this._layout.rebuild(
      this.var_292,
      this._content.width,
      this.var_2650.width,
      a.MIN_PRIZE_SPACING,
    ),
      this.buildPageData(),
      this.ensurePrizeSlots(
        this.var_2568,
        this.var_2650,
        this.maxPrizeCount(this._freePagePrizes),
      ),
      this.ensurePrizeSlots(
        this.var_2573,
        this.var_3034,
        this.maxPrizeCount(this._premiumPagePrizes),
      ),
      this.ensurePointIndicatorSlots(this.maxPointIndicatorCount()),
      r && (this.var_193 = this._layout._ref57e3f92d4bb7(this.var_292.points)),
      (this.var_193 = Math.max(
        0,
        Math.min(this._layout._r3afa55440b125a - 1, this.var_193),
      )),
      this.refreshPage(e));
  }
  var_1298(e) {
    (this._reef8ef0645c944(),
      this._re34fe87c572ffc(),
      this._r834034b605f603.refreshByX(
        this._layout._r2152ec0ab1a1e2(this.var_292.points, this.var_193),
        e,
      ),
      this._r96c1079d7f49ef());
  }
  _r194481619afab8(e) {
    let r = this._ra8c449a69567d4(e);
    (r !== null ? r.refreshState() : this._reef8ef0645c944(), this._r96c1079d7f49ef());
  }
  _r3ab41ca62e950f(e) {
    this.var_1298(e);
  }
  update(e) {
    this._r834034b605f603.update(e);
  }
  buildPageData() {
    ((this._freePagePrizes = this._re38680d2af34e5()),
      (this._premiumPagePrizes = this._re38680d2af34e5()),
      (this._pagePointValues = this._r385a76e91a8d66()));
    let e = [];
    for (let r = 0; r < this._layout._r3afa55440b125a; r++) e.push(new Map());
    for (let r of this.var_292.prizes) {
      let t = this._layout._ref57e3f92d4bb7(r.requiredPoints);
      ((r.premium ? this._premiumPagePrizes : this._freePagePrizes)[t].push(r),
        e[t].get(r.requiredPoints) ||
          (e[t].set(r.requiredPoints, !0), this._pagePointValues[t].push(r.requiredPoints)));
    }
  }
  _re38680d2af34e5() {
    let e = [];
    for (let r = 0; r < this._layout._r3afa55440b125a; r++) e.push([]);
    return e;
  }
  _r385a76e91a8d66() {
    let e = [];
    for (let r = 0; r < this._layout._r3afa55440b125a; r++) e.push([]);
    return e;
  }
  ensurePrizeSlots(e, r, t) {
    for (; e.length < t;) {
      let i = new vge(r);
      ((i.window.visible = !1), this._content.addChild(i.window), e.push(i), this.var_1672.push(i));
    }
  }
  ensurePointIndicatorSlots(e) {
    for (; this.var_1361.length < e;) {
      let r = new RewardTrackPointIndicatorView(this.var_2712);
      ((r.window.visible = !1), this.var_3192.addChild(r.window), this.var_1361.push(r));
    }
  }
  refreshPage(e) {
    (this._rf39debd346ed08(this.var_2568, this._freePagePrizes[this.var_193]),
      this._rf39debd346ed08(this.var_2573, this._premiumPagePrizes[this.var_193]),
      this._rb82c5a633c46fc(this._pagePointValues[this.var_193]),
      this._r834034b605f603.refreshByX(
        this._layout._r2152ec0ab1a1e2(this.var_292.points, this.var_193),
        e,
      ),
      this._r86201aadc7caa2());
  }
  _rf39debd346ed08(e, r) {
    for (let t = 0; t < e.length; t++) {
      let i = e[t];
      if (t >= r.length) i.clear();
      else {
        let s = r[t];
        i.initialize(this.var_63, this.var_292, s);
        let o = this._layout._r2152ec0ab1a1e2(s.requiredPoints, this.var_193);
        ((i.window.x = Math.round(o - i.window.width / 2)), (i.window.visible = !0));
      }
    }
  }
  _rb82c5a633c46fc(e) {
    for (let r = 0; r < this.var_1361.length; r++) {
      let t = this.var_1361[r];
      if (r >= e.length) t.clear();
      else {
        t.initialize(this.var_292, e[r]);
        let i = this._layout._r2152ec0ab1a1e2(e[r], this.var_193);
        ((t.window.x = Math.round(i - t.window.width / 2)), (t.window.visible = !0));
      }
    }
  }
  maxPrizeCount(e) {
    let r = 0;
    for (let t of e) r = Math.max(r, t.length);
    return r;
  }
  maxPointIndicatorCount() {
    let e = 0;
    for (let r of this._pagePointValues) e = Math.max(e, r.length);
    return e;
  }
  _reef8ef0645c944() {
    for (let e of this.var_1672) e._r881e49e8dab487 !== null && e.refreshState();
  }
  _re34fe87c572ffc() {
    for (let e of this.var_1361) e.refreshAvailability();
  }
  _ra8c449a69567d4(e) {
    for (let r of this.var_1672) if (r._r881e49e8dab487 === e) return r;
    return null;
  }
  _r86201aadc7caa2() {
    (WindowUtils.disableSection(this.var_2418, this.var_193 <= 0),
      WindowUtils.disableSection(
        this.var_2312,
        this.var_193 >= this._layout._r3afa55440b125a - 1,
      ),
      this._r96c1079d7f49ef());
  }
  _r96c1079d7f49ef() {
    let e = 0,
      r = 0;
    for (let t of this.var_292.prizes)
      !t._r4cb1003f91383f(this.var_292) ||
        this._r40459f45f7f27a(t, this.var_193) ||
        (this._layout._ref57e3f92d4bb7(t.requiredPoints) < this.var_193 ? e++ : r++);
    (this._r2d42a2596f6dd2(this.var_2989, this.previousUnclaimedCountText, e),
      this._r2d42a2596f6dd2(this.var_2660, this.nextUnclaimedCountText, r));
  }
  _r40459f45f7f27a(e, r) {
    return (e.premium ? this._premiumPagePrizes[r] : this._freePagePrizes[r]).indexOf(e) >= 0;
  }
  _r2d42a2596f6dd2(e, r, t) {
    ((e.visible = t > 0), t > 0 && (r.text = String(t)));
  }
  _re2dc2b2b8eee8b = n(() => {
    this.var_193 <= 0 || (this.var_193--, this.refreshPage(!1));
  }, "_re2dc2b2b8eee8b");
  onNextClicked = n(() => {
    this.var_193 >= this._layout._r3afa55440b125a - 1 ||
      (this.var_193++, this.refreshPage(!1));
  }, "onNextClicked");
  dispose() {
    if (!this._disposed) {
      ((this._disposed = !0),
        this.var_2418.removeEventListener(u.CLICK, this._re2dc2b2b8eee8b),
        this.var_2312.removeEventListener(u.CLICK, this.onNextClicked));
      for (let e of this.var_1672) e.dispose();
      for (let e of this.var_1361) e.dispose();
      (this._r834034b605f603.dispose(),
        (this.var_2568 = null),
        (this.var_2573 = null),
        (this.var_1672 = null),
        (this.var_1361 = null),
        (this._freePagePrizes = null),
        (this._premiumPagePrizes = null),
        (this._pagePointValues = null),
        (this._r834034b605f603 = null),
        (this._layout = null),
        (this.var_63 = null),
        (this.var_292 = null),
        (this._content = null),
        (this.var_3192 = null),
        (this.var_3128 = null),
        (this.var_2650 = null),
        (this.var_3034 = null),
        (this.var_2712 = null),
        (this.var_2418 = null),
        (this.var_2312 = null),
        (this.var_2989 = null),
        (this.var_2660 = null));
    }
  }
  get disposed() {
    return this._disposed;
  }
  get previousUnclaimedCountText() {
    return this.var_2989.findChildByName("previous_unclaimed_count");
  }
  get nextUnclaimedCountText() {
    return this.var_2660.findChildByName("next_unclaimed_count");
  }
}
