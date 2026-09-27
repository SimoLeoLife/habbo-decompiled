// Extracted from HabboAirLauncher.deobf.js, line 140242.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/components/ScrollBarController.as
// Obfuscated name: _i6aecf95d73a416

class a extends Ci {
  static {
    n(this, "ScrollBarController");
  }
  static SCROLL_STEP_SIZE = 15;
  static SCROLL_BUTTON_INCREMENT = "increment";
  static SCROLL_BUTTON_DECREMENT = "decrement";
  static SCROLL_SLIDER_TRACK = "slider_track";
  static SCROLL_SLIDER_BAR = "slider_bar";
  _offset = 0;
  var_4288 = 0.1;
  scrollV = null;
  var_482 = !1;
  _r1a58453101c08d = null;
  ScrollBarLiftController = !1;
  _r7a715d39d65463 = null;
  _r65be354a180006 = n((e, r) => this._rac81080a75251f(e, r), "_r65be354a180006");
  _raa7fe41dbbd21f = n((e) => this._rb447315c1d4495(e), "_raa7fe41dbbd21f");
  _r4e557c95d750d3 = n((e) => this._rac7816d2c630d9(e), "_r4e557c95d750d3");
  get scrollH() {
    return this.var_482 ? this._offset : 0;
  }
  get var_46() {
    return this.var_482 ? 0 : this._offset;
  }
  get scrollable() {
    return this.scrollV;
  }
  set scrollH(e) {
    this.var_482 && this.setScrollPosition(e, !0) && this._r7eb3f311cf8bd7();
  }
  set var_46(e) {
    !this.var_482 && this.setScrollPosition(e, !0) && this._r7eb3f311cf8bd7();
  }
  set scrollable(e) {
    (this.scrollV != null &&
      !this.scrollV.disposed &&
      (this.scrollV.removeEventListener(y.const_755, this._raa7fe41dbbd21f),
      this.scrollV.removeEventListener(y.const_362, this._r4e557c95d750d3)),
      (this.scrollV = e),
      this.scrollV != null &&
        !this.scrollV.disposed &&
        (this.scrollV.addEventListener(y.const_755, this._raa7fe41dbbd21f),
        this.scrollV.addEventListener(y.const_362, this._r4e557c95d750d3),
        this.setScrollPosition(
          this.var_482
            ? this.scrollV.scrollH
            : this.scrollV.var_46,
          !1,
        ),
        this._r7eb3f311cf8bd7()));
  }
  get horizontal() {
    return this.var_482;
  }
  get vertical() {
    return !this.var_482;
  }
  get properties() {
    let e = super.properties,
      r = this.scrollV?.name ?? this._r1a58453101c08d;
    return (
      r == null
        ? e.push(this.getDefaultProperty(class_3436.SCROLLABLE))
        : e.push(this.createProperty(class_3436.SCROLLABLE, r)),
      e
    );
  }
  set properties(e) {
    for (let r of e)
      r.key === class_3436.SCROLLABLE && ((this._r1a58453101c08d = r.value), (this.scrollV = null));
    super.properties = e;
  }
  get track() {
    return this.findChildByName(a.SCROLL_SLIDER_TRACK);
  }
  get lift() {
    return this.track?.findChildByName(a.SCROLL_SLIDER_BAR);
  }
  constructWindow(e, r, t, i, s, o, d, c, f = null, l = null, b = 0, _ = "") {
    (super.constructWindow(e, r, t, i, s, o, d, c, f, l, b, _),
      (this._r5e1a9574d869f6 = !1),
      (this.var_482 = r === class_2090.WINDOW_TYPE_SCROLLBAR_HORIZONTAL),
      (this._r7a715d39d65463 = new a1(
        this._rf66d2bbdfe110b.bind(this),
        this._r7778250fbf5a86.bind(this),
        this._r8d44ef544347f4.bind(this),
        200,
        60,
        !0,
        null,
        a.SCROLL_STEP_SIZE,
      )));
    let h = [];
    this.groupChildrenWithTag(st.TAG_INTERNAL, h, -1);
    for (let p of h) p.procedure = this._r65be354a180006;
    this._r7eb3f311cf8bd7();
  }
  dispose() {
    ((this.scrollable = null),
      this._r7a715d39d65463?.dispose(),
      (this._r7a715d39d65463 = null),
      super.dispose());
  }
  enable() {
    if (super.enable()) {
      let e = [];
      this.groupChildrenWithTag(st.TAG_INTERNAL, e, -1);
      for (let r of e) r.enable();
      return !0;
    }
    return !1;
  }
  disable() {
    if (super.disable()) {
      let e = [];
      this.groupChildrenWithTag(st.TAG_INTERNAL, e, -1);
      for (let r of e) r.disable();
      return !0;
    }
    return !1;
  }
  setScrollPosition(e, r, t = !1) {
    if ((this.scrollV == null || this.scrollV.disposed) && !this._r8f2efec1c78cb2())
      return !1;
    (e < 0 && (e = 0), e > 1 && (e = 1));
    let i = !1,
      s = e - this._offset;
    return (
      (this._offset = e),
      r &&
        this.scrollV != null &&
        (this.var_482
          ? ((i = this.scrollV.scrollH !== this._offset),
            i && (this.scrollV.scrollH = this._offset))
          : ((i = this.scrollV.var_46 !== this._offset),
            i && (this.scrollV.var_46 = this._offset))),
      !t &&
        this._r7a715d39d65463 != null &&
        this._r7a715d39d65463._r1bd7920e521eab &&
        this._r7a715d39d65463._r4b59d5020c3c2b(s),
      i
    );
  }
  update(e, r) {
    switch (e.name) {
      case a.SCROLL_SLIDER_BAR:
        if (r.type === y.const_1385 && !this.ScrollBarLiftController) {
          let i = e;
          this.var_482
            ? this.setScrollPosition(i.scrollbarOffsetX, !0)
            : this.setScrollPosition(i.scrollbarOffsetY, !0);
        }
        break;
    }
    let t = super.update(e, r);
    return (
      r.type === y.const_541 &&
        (this.scrollV != null &&
          this.scrollV.parent?.name === SubstituteParentController.NAME &&
          (this.scrollable = null),
        this.scrollV == null && this._r8f2efec1c78cb2()),
      e === this &&
        (r.type === y.const_755
          ? this._r7eb3f311cf8bd7()
          : r.type === u.const_974 && (this.WindowMouseEvent(r.delta), (t = !0))),
      t
    );
  }
  _r7eb3f311cf8bd7() {
    if (
      (this.scrollV == null || this.scrollV.disposed) &&
      (this._disposed || !this._r8f2efec1c78cb2())
    )
      return;
    let e = 1,
      r = this.track,
      t = this.lift;
    if (t !== null && r !== null && this.scrollV != null)
      if (this.var_482) {
        ((e = this.scrollV._rbab5041f1931e4.width / this.scrollV.visibleRegion.width),
          e > 1 && (e = 1));
        let i = e * r.width;
        ((t.width = i), (t.x = Math.round(this.scrollV.scrollH * (r.width - i))));
      } else {
        ((e = this.scrollV._rbab5041f1931e4.height / this.scrollV.visibleRegion.height),
          e > 1 && (e = 1));
        let i = e * r.height;
        ((t.height = i), (t.y = Math.round(this.scrollV.var_46 * (r.height - t.height))));
      }
    e === 1 ? this.disable() : this.enable();
  }
  _rac81080a75251f(e, r) {
    let t = !1;
    if (e.type === u.DOWN || e.type === Zn.const_473) {
      if (r.name === a.SCROLL_BUTTON_INCREMENT)
        this.scrollV != null &&
          ((this.ScrollBarLiftController = !0),
          this.var_482
            ? (this.scrollH += a.SCROLL_STEP_SIZE / this.scrollV._radb221318b5180)
            : (this.var_46 += a.SCROLL_STEP_SIZE / this.scrollV._r5733287651adec),
          (this.ScrollBarLiftController = !1));
      else if (r.name === a.SCROLL_BUTTON_DECREMENT)
        this.scrollV != null &&
          ((this.ScrollBarLiftController = !0),
          this.var_482
            ? (this.scrollH -= a.SCROLL_STEP_SIZE / this.scrollV._radb221318b5180)
            : (this.var_46 -= a.SCROLL_STEP_SIZE / this.scrollV._r5733287651adec),
          (this.ScrollBarLiftController = !1));
      else if (r.name === a.SCROLL_SLIDER_TRACK && this.scrollV != null) {
        let i = 0,
          s = 0;
        (e instanceof u || e instanceof Zn) && ((i = e.localX), (s = e.localY));
        let o = r.getChildByName(a.SCROLL_SLIDER_BAR);
        o !== null &&
          (this.var_482
            ? i < o.x
              ? (this.scrollH -=
                  (this.scrollV._rbab5041f1931e4.width - a.SCROLL_STEP_SIZE) /
                  this.scrollV._radb221318b5180)
              : i > o.right &&
                (this.scrollH +=
                  (this.scrollV._rbab5041f1931e4.width - a.SCROLL_STEP_SIZE) /
                  this.scrollV._radb221318b5180)
            : s < o.y
              ? (this.var_46 -=
                  (this.scrollV._rbab5041f1931e4.height - a.SCROLL_STEP_SIZE) /
                  this.scrollV._r5733287651adec)
              : s > o.bottom &&
                (this.var_46 +=
                  (this.scrollV._rbab5041f1931e4.height - a.SCROLL_STEP_SIZE) /
                  this.scrollV._r5733287651adec),
          (t = !0));
      }
    }
    (e.type === u.const_974 && (this.WindowMouseEvent(e.delta), (t = !0)),
      t && this._r7eb3f311cf8bd7());
  }
  _r8f2efec1c78cb2() {
    if (this.scrollV != null && !this.scrollV.disposed) return !0;
    if (this._r1a58453101c08d != null) {
      let e = this.findParentByName(this._r1a58453101c08d);
      if (_i99fe05e6e27483(e)) return ((this.scrollable = e), !0);
      if (_ia185fd1172d8db(this._parent) && !_i2bbe80883d316f(this._parent)) {
        let r = this._parent.findChildByName(this._r1a58453101c08d);
        if (_i99fe05e6e27483(r)) return ((this.scrollable = r), !0);
      }
    }
    if (_i99fe05e6e27483(this._parent)) return ((this.scrollable = this._parent), !0);
    if (_ia185fd1172d8db(this._parent) && !_i2bbe80883d316f(this._parent)) {
      let e = this._parent.numChildren;
      for (let r = 0; r < e; r++) {
        let t = this._parent.getChildAt(r);
        if (_i99fe05e6e27483(t)) return ((this.scrollable = t), !0);
      }
    }
    return !1;
  }
  _rb447315c1d4495(e) {
    (this._r7eb3f311cf8bd7(), this.setScrollPosition(this._offset, !1));
  }
  _rac7816d2c630d9(e) {
    (this.scrollV != null &&
      this.setScrollPosition(
        this.var_482
          ? this.scrollV.scrollH
          : this.scrollV.var_46,
        !1,
      ),
      this._r7eb3f311cf8bd7());
  }
  WindowMouseEvent(e) {
    return this._r7a715d39d65463 != null && this._r7a715d39d65463.WindowMouseEvent(e);
  }
  _rf66d2bbdfe110b() {
    return this._offset;
  }
  _r7778250fbf5a86(e) {
    this.setScrollPosition(e, !0, !0) && this._r7eb3f311cf8bd7();
  }
  _r8d44ef544347f4() {
    return a1._r268d120a4a4717 / this.var_4288;
  }
}
