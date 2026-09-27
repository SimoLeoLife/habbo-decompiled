// Estratto da HabboAirLauncher.deobf.js, riga 50199.

class extends _ic61ee3647b706e {
  static {
    n(this, "_i92a395bc65c707");
  }
  _r8de4c089eaa96c = null;
  frameRate = 60;
  _quality = "high";
  get quality() {
    return this._quality;
  }
  set quality(e) {
    ((this._quality = e), (Pt._r2d4bb49367926b = e));
  }
  _r49789778c9fc3a = new E();
  get focus() {
    return this._r8de4c089eaa96c;
  }
  set focus(e) {
    if (this._r8de4c089eaa96c === e) return;
    let r = this._r8de4c089eaa96c;
    ((this._r8de4c089eaa96c = e),
      r?.dispatchEvent(new FocusManager(FocusManager._r8365d86c670be6, !0)),
      e != null && this._r8de4c089eaa96c === e && e.dispatchEvent(new FocusManager(FocusManager._rd3be293e25cc6a, !0)));
  }
  dispatchEvent(e) {
    let r = super.dispatchEvent(e);
    if (
      !(e instanceof KeyboardControl) ||
      e.type !== KeyboardControl._re9c7558bf2dcfb ||
      e.keyCode !== 9 ||
      e.isDefaultPrevented() ||
      (e.target instanceof Pt && e.target._r343b6b28614e99())
    )
      return r;
    e.preventDefault();
    let t = e.target instanceof Uc ? e.target : this.focus;
    return (this._r641047ad08c1c3(t, e.shiftKey), r);
  }
  get stage() {
    return this;
  }
  set stage(e) {}
  _r26b5781d08fe22() {
    return this;
  }
  _r88277e583821a5() {
    return !1;
  }
  get stageWidth() {
    return this.width;
  }
  get _rcc0ac91bd808af() {
    return this.height;
  }
  get mouseX() {
    return this._r49789778c9fc3a.x;
  }
  get mouseY() {
    return this._r49789778c9fc3a.y;
  }
  _r0abf6606b8af0e(e, r) {
    ((this._r49789778c9fc3a.x = e), (this._r49789778c9fc3a.y = r));
  }
  _r8027ab4f559ab9(e) {
    this.frameRate !== e && ((this.frameRate = e), this.dispatchEvent(new M(M._r2722be7520587b)));
  }
  _r641047ad08c1c3(e = null, r = !1) {
    let t = this._r6f6dbc4d104df0(e ?? this.focus, r);
    if (t == null) return !1;
    let i = e ?? this.focus ?? this,
      s = new FocusManager(FocusManager._rbd354e1c4b5e58, !0, !0);
    return (
      i.dispatchEvent(s),
      s.isDefaultPrevented() ? !1 : ((this.focus = t), t._r1c386c8571c5d9(0, t.length), !0)
    );
  }
  _r6f6dbc4d104df0(e, r) {
    let t = [];
    if ((this._r291f0e75618f4b(this, t), t.length === 0)) return null;
    let i = e == null ? -1 : t.indexOf(e);
    if (i >= 0) {
      let c = i + (r ? -1 : 1),
        f = r ? -1 : t.length,
        l = r ? -1 : 1;
      for (let b = c; b !== f; b += l) {
        let _ = t[b];
        if (_ !== e && this._r03d2dd819d0772(_)) return _;
      }
      return null;
    }
    let s = r ? t.length - 1 : 0,
      o = r ? -1 : t.length,
      d = r ? -1 : 1;
    for (let c = s; c !== o; c += d) {
      let f = t[c];
      if (this._r03d2dd819d0772(f)) return f;
    }
    return null;
  }
  _r291f0e75618f4b(e, r) {
    if (!(e !== this && !e.visible)) {
      r.push(e);
      for (let t of e._rce2b304e7f15e9()) this._r291f0e75618f4b(t, r);
    }
  }
  _r03d2dd819d0772(e) {
    return e instanceof Pt && e._r343b6b28614e99();
  }
}
