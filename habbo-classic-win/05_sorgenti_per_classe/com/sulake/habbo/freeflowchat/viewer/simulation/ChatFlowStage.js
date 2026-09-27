// Extracted from HabboAirLauncher.deobf.js, line 201877.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/freeflowchat/viewer/simulation/ChatFlowStage.as
// Obfuscated name: _i8f2f265ef1ef61

class a {
  static {
    n(this, "ChatFlowStage");
  }
  static MOVE_UP_AMOUNT_PIXELS = 19;
  static CLEANUP_TIMER_DELAY = 5e3;
  static MOVE_UP_TIMER_DEFAULT = 1e4;
  static MAX_ITERATIONS = 20;
  static MAX_COLLISION_SIDEWAYS_IMPULSE = 15;
  static MOVE_UP_IMPULSE_LIMIT = 8;
  _r1b3805e2f602a8 = Hm.WIDERECT_WIDTH;
  var_82;
  _simulationTime = 0;
  var_3874 = 0;
  var_4386 = 0;
  getAttraction = new A1();
  _bubbles = [];
  _toRemove = [];
  _lineByLineMode = !1;
  var_2429 = a.MOVE_UP_TIMER_DEFAULT;
  var_4067 = !0;
  _r5aaecc82b3676b = !1;
  var_1430 = 0;
  constructor(e) {
    ((this.var_82 = e),
      this.var_82.registerUpdateReceiver(this, 2),
      this.refreshSettings());
  }
  refreshSettings() {
    let e = this.var_82?._r94d9ef5efd2e7e;
    if (e != null)
      switch (
        ((this._lineByLineMode = e.mode === at._rcc85521bbb9163),
        (this.var_4067 = !this._lineByLineMode),
        e._r874709b109d470)
      ) {
        case at._r54f8150a14dff0:
          this.var_2429 = 3e3;
          break;
        case at._rdac9c2703bca2d:
          this.var_2429 = 6e3;
          break;
        case at._r549ee4ca88cc2b:
          this.var_2429 = 12e3;
          break;
      }
    this._r5aaecc82b3676b = !1;
  }
  dispose() {
    this.var_82 != null &&
      (this.var_82.removeUpdateReceiver(this), (this.var_82 = null));
  }
  get disposed() {
    return this.var_82 == null;
  }
  insertBubble(e) {
    let r = this.var_82;
    this.var_1430 === 0 && (this.var_1430 = r._rd68b37e78824ba?.chatFlowViewer ?? 0);
    let t = r._r0349bd197496ad(e.roomId);
    e.roomPanOffsetX = t != null ? t.x : 0;
    let i;
    !this._lineByLineMode && e.width < this._r1b3805e2f602a8
      ? (i = new Hm(e))
      : (i = new c5(e, this._lineByLineMode));
    let s = new E(
      e._rbabed0715e971c.x - i._r6fab2a1c919ac9.width / 2,
      r._rd68b37e78824ba?.chatFlowViewer ?? 0,
    );
    if (
      (t != null && (s.x -= t.x),
      (s.y -= e.overlap?.y ?? 0),
      (s.x -= e.overlap?.x ?? 0),
      i.initializePosition(s.x, s.y),
      this.var_4067 && !this._lineByLineMode)
    ) {
      for (let f = 0; f < a.MAX_ITERATIONS / 2; f++) {
        let l = 0;
        for (let b of this._bubbles)
          l += this.getAttraction.var_2147(i, b, A1._r800d73f2140292, A1._r4b1b2fc41a0923);
        i.x += l;
      }
      let o = i.x,
        d = null,
        c = e._rbabed0715e971c.x - (t?.x ?? 0);
      if (i.x > c - A1.AREA_DIAMETER_SMALL) {
        if (((o = c - A1.AREA_DIAMETER_SMALL), i._rae7815e97af563)) {
          d = i;
          let f = i.x - o;
          ((d.wideRectOffset += f), (d.wideRectOffset = Math.min(0, d.wideRectOffset)));
        }
      } else if (
        i.x + i._r6fab2a1c919ac9.width < c + A1.AREA_DIAMETER_SMALL &&
        ((o = c - i._r6fab2a1c919ac9.width + A1.AREA_DIAMETER_SMALL), i._rae7815e97af563)
      ) {
        d = i;
        let f = i.x - o;
        ((d.wideRectOffset += f),
          (d.wideRectOffset = Math.max(
            -(d._r711128012627df.width - d._r6fab2a1c919ac9.width),
            d.wideRectOffset,
          )));
      }
      ((i.x = o), (s.x = o));
    }
    return (
      this._bubbles.push(i),
      (s.x -= e.overlap?.x ?? 0),
      this._lineByLineMode && (this.var_3874 = this._simulationTime),
      s
    );
  }
  update(e) {
    this._simulationTime += e;
    for (let r of this._bubbles) r.isSpacer || r.syncToUserScreenPosition();
    (this.simulate(),
      this.var_3874 + this.var_2429 < this._simulationTime &&
        (this.scrollUp(), (this.var_3874 = this._simulationTime)));
    for (let r = 0; r < this._bubbles.length; r++) {
      let t = this._bubbles[r];
      (t.syncToVisualization(),
        t.isSpacer ||
          ((t._r858d41d4d634c3 = !1),
          r > 0 &&
            t._r0a8498eb983f1d &&
            ((t._r858d41d4d634c3 = !0), (this._bubbles[r - 1]._r858d41d4d634c3 = !0))));
    }
    this.var_4386 + a.CLEANUP_TIMER_DELAY < this._simulationTime &&
      (this.cleanup(), (this.var_4386 = this._simulationTime));
  }
  clear() {
    let e = this.var_82;
    for (let r of this._bubbles) r.readyToRecycle = !0;
    (this.update(0), e?._rd68b37e78824ba?.update(0));
  }
  resize(e, r) {
    let t = this.var_82;
    if (t?._rd68b37e78824ba == null) return;
    let i = t._rd68b37e78824ba.chatFlowViewer;
    if (this.var_1430 !== i)
      if (this.var_1430 < i) {
        let s = i - this.var_1430;
        for (let o of this._bubbles) ((o.y += s), o.syncToVisualization(!0));
      } else {
        let s = this.var_1430 - i;
        for (let o of this._bubbles) ((o.y -= s), o.syncToVisualization(!0));
      }
    this.var_1430 = i;
  }
  simulate() {
    for (let e = 0; e < a.MAX_ITERATIONS; e++) {
      let r = [];
      for (let t of this._bubbles) {
        t.resetSimulationStep();
        for (let i of this._bubbles) t !== i && t.intersectsWith(i) && r.push(new UnkClass_94929b(t, i));
      }
      if (r.length === 0) break;
      if (this._lineByLineMode)
        for (let t of r) {
          if (!t.first._rffb3224cef3873(t.second) && !t.second._rffb3224cef3873(t.first))
            if (t._r8d650f7d8a922c) t.older.areSameY(-t.older._r711128012627df.height);
            else {
              let i = t.first._r12667c9395dd4c(t.second)
                ? t.top._r6fab2a1c919ac9.bottom
                : t.top._r711128012627df.bottom;
              t.top.areSameY(-(i - t.bottom.y + 1));
            }
          (t.first._r19a020ecf008cb(t.second), t.second._r19a020ecf008cb(t.first));
        }
      else
        for (let t of r)
          if (!t.first._rffb3224cef3873(t.second) && !t.second._rffb3224cef3873(t.first)) {
            let i = t.left instanceof Hm ? t.left.wideRectOffset + t.left.x : t.left.x,
              s = t.right instanceof Hm ? t.right.wideRectOffset + t.right.x : t.right.x,
              o = t.left instanceof Hm ? t.left._r711128012627df.width : t.left._r6fab2a1c919ac9.width,
              d = Math.abs(i + o - s) / 2;
            (d <= a.MAX_COLLISION_SIDEWAYS_IMPULSE
              ? (t.left._re2bfb5ef53d0a9(-d), t.right._re2bfb5ef53d0a9(d + 1))
              : t._r8d650f7d8a922c
                ? t.older.areSameY(-t.older._r6fab2a1c919ac9.height)
                : t.top.areSameY(-(t.top._r6fab2a1c919ac9.bottom - t.bottom.y + 1)),
              t.first._r19a020ecf008cb(t.second),
              t.second._r19a020ecf008cb(t.first));
          }
      for (let t of this._bubbles) t._r752738cd8e2097(a.MOVE_UP_IMPULSE_LIMIT);
    }
  }
  scrollUp() {
    let e = this.var_82;
    if (e?._rd68b37e78824ba != null) {
      for (let r of this._bubbles) {
        if (this.var_4067)
          for (let t of this._bubbles) r !== t && (r.x += this.getAttraction.var_2147(r, t));
        r.y -= a.MOVE_UP_AMOUNT_PIXELS;
      }
      if (this._lineByLineMode) {
        let r = e._r3b1002abd6af76?._r7ffc7431d354aa(a.MOVE_UP_AMOUNT_PIXELS);
        r != null &&
          (this.insertBubble(r),
          (this._bubbles[this._bubbles.length - 1]._r858d41d4d634c3 = !0),
          (this._bubbles[this._bubbles.length - 1].isSpacer = !0));
      }
      this.simulate();
    }
  }
  cleanup() {
    for (let e of this._bubbles)
      (e._r6fab2a1c919ac9.bottom < -10 || e.readyToRecycle) &&
        ((e.readyToRecycle = !0), this._toRemove.includes(e) || this._toRemove.push(e));
    if (this._toRemove.length > 0) {
      for (let e of this._toRemove) {
        let r = this._bubbles.indexOf(e);
        (e.dispose(), r >= 0 && this._bubbles.splice(r, 1));
      }
      this._toRemove = [];
    }
  }
}
