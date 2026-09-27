// Estratto da HabboAirLauncher.deobf.js, riga 274530.

class a extends bb {
  static {
    n(this, "_ie92d044e1c1dc6");
  }
  static _ra81f8f7b3a282d = "avatar";
  static _r34b3d69a0cb073 = -0.01;
  static _rc852943d826391 = 0.001;
  static _rfaf665f8574119 = -0.409;
  static _r9125af23b02d04 = 0;
  static _raffd4e811afa2e = 1;
  static _r563bfb752995eb = 1e3;
  static _r453376c1b74971 = 2;
  static _rbec68d70345341 = [0, 0, 0];
  static _r58e44b5358b7ce = 97;
  static _re38a656cd44768 = 218;
  static _redaab5d3a4de02 = 3;
  static _r7b7ef2780ac063 = [
    new ColorMatrixFilter_([0.9, 0, 0, 0, 0, 0, 1, 0, 0, 40, 0, 0, 1, 0, 80, 0, 0, 0, 0.85, 0]),
    new _ibaf84c0aa91c5d(12318714, 1, 4, 4, 4, 1, !0, !1),
  ];
  static _rab627f1b71ace8 = 2;
  static _rb4420ef10878b5 = 1;
  static _rfe8f87678bb325 = 2;
  static _r53f8bfddfbe7a3 = 3;
  static _r833fc8a494d908 = 4;
  static _r4efe42a69404ad = 5;
  static _r39a0d4579dcac6 = 6;
  static _r398196f5b0db80 = 7;
  static _r0f49d226ceff16 = 8;
  static _r76acfe719da302 = 9;
  _r7e6615d61ae595 = -1e3;
  _r42468ec42b7bb7 = 41;
  _r720835ba72b9a5 = null;
  var_521 = null;
  _rd4182ec46fd1f6 = new B();
  _ra917c878e8be14 = new B();
  _r940b9dc9ef2ef3 = 0;
  _r085693c651631c = !1;
  var_1129 = "";
  var_106 = "";
  _r346e6d91a6cab3 = 0;
  _rd40db28077e769 = null;
  _r563bd9f08d7334 = !1;
  _rfb47123225ac07 = Math.random() * 200 + 200;
  _r086a68caf8fcd8 = -1;
  _r363dd77f9f9381 = -1;
  _rd1ae822132ba8f = -1;
  _r428e15ccf0fc58 = 0;
  _rd78ec7fef94c7d = a._rab627f1b71ace8;
  _r46e9cadbd8892c = null;
  var_3208 = -1;
  _r1a0817d476ba8a = -1;
  _re5e46f7cf26b20 = new class_3399();
  var_391 = "";
  _r8e1697369c9471 = "";
  _rdfd55e2a01a14a = !1;
  _r452518d14f9cc7 = !1;
  _r6e9f46804ee84e = !1;
  var_3211 = 0;
  var_3186 = 0;
  var_3484 = 0;
  _r34482860c07a15 = 0;
  _r11f6a322fff48e = null;
  _r0709b01ceab3df = !1;
  _r9d2d80187dadf9 = !1;
  _r91b01b00a04036 = -1;
  var_857 = !1;
  _re477ddae7d0afc = 0;
  _rc496f7b478b2c2 = 0;
  _ra56cc135f3ac22 = 0;
  _rd8b41aa1577dba = 0;
  _r00141cccb8b9db = 0;
  _r9f847e8f7912a4 = !1;
  _reb904fa8a52486 = !1;
  _r07cf0d2d7eba81 = !1;
  _r21f88afff2544f = null;
  _r0d305a49024149 = !1;
  _alphaMultiplier = 1;
  _disposed = !1;
  static _r6c447879aae1c6 = new WeakMap();
  static _rb53f7af5fd5680(e) {
    return Number.isFinite(e) ? Math.trunc(e) : 0;
  }
  get disposed() {
    return this._disposed;
  }
  get angle() {
    return this._r363dd77f9f9381;
  }
  get posture() {
    return this.var_391;
  }
  get _r9565a565aaacbd() {
    return this._r21f88afff2544f == null ? 0 : a._rab5f23a3bc0282(this._r21f88afff2544f.getDirection());
  }
  set roomData(e) {
    this.var_521 = e;
  }
  get roomData() {
    return this.var_521;
  }
  static _rab5f23a3bc0282(e) {
    return ((e = (((e | 0) % 8) + 8) % 8), e <= 2 ? 1 : e >= 4 && e <= 6 ? -1 : 0);
  }
  static _r3c4af8b31bb34c(e) {
    return (((e | 0) % 360) + 360) % 360;
  }
  dispose() {
    if (
      (this._r83903fc1ca2f50(),
      this._rd4182ec46fd1f6.dispose(),
      this._ra917c878e8be14.dispose(),
      (this._r720835ba72b9a5 = null),
      (this.var_521 = null),
      (this._re5e46f7cf26b20 = null),
      (this._rd40db28077e769 = null),
      this._r46e9cadbd8892c != null)
    ) {
      for (let e of this._r46e9cadbd8892c.getValues()) e.dispose();
      this._r46e9cadbd8892c = null;
    }
    (super.dispose(), (this._disposed = !0));
  }
  initialize(e) {
    return ((this._r720835ba72b9a5 = e), this._r68dbc243d37d4a(a._rab627f1b71ace8), !0);
  }
  getSpriteList() {
    let e = this._r21f88afff2544f;
    if (e == null) return null;
    let r = this.getSprite(a._raffd4e811afa2e),
      t = null;
    r != null &&
      ((t = new RoomObjectSpriteData()),
      (t.alpha = r.alpha),
      (t.x = r.offsetX),
      (t.y = r.offsetY),
      (t.name = r.assetName.length > 0 ? r.assetName : r.libraryAssetName),
      (t.width = r.width),
      (t.height = r.height));
    let i = e._r3c8bfbd447e55f();
    for (let o of e._r83474000dfec82()) {
      let d = new RoomObjectSpriteData(),
        c = e.getLayerData(o),
        f = 0,
        l = e.getDirection(),
        b = o._rec16170e9b85f5(l),
        _ = o.getDirectionOffsetY(l),
        h = o.getDirectionOffsetZ(l),
        p = 0;
      (o.hasDirections && (p = l),
        c != null && ((f = c.animationFrame), (b += c.dx), (_ += c.dy), (p += c.directionOffset)));
      let m = 64;
      (m < 48 && ((b /= 2), (_ /= 2)), p < 0 ? (p += 8) : p > 7 && (p -= 8));
      let v = `${e.getScale()}_${o.member}_${p}_${f}`,
        w = e.getAsset(v);
      if (w == null) continue;
      ((d.x = -w.offset.x - m / 2 + b),
        (d.y = -w.offset.y + _),
        o._rea41af9bc7ea1c && (d.y += (this._r00141cccb8b9db * m) / (2 * a._r563bfb752995eb)),
        o.ink === 33 && (d.blendMode = ie.ADD),
        (d.name = v),
        (d.z = this._reb904fa8a52486
          ? a._rfaf665f8574119 - 0.001 * this._r07cfc8b3f013c3 * h
          : -(0.001 * this._r07cfc8b3f013c3 * h)));
      let I = w.rectangle;
      (I == null ? ((d.width = 60), (d.height = 60)) : ((d.width = I.width), (d.height = I.height)),
        i.push(d));
    }
    let s = e._r7aef753936d8e9;
    if (s != null && s.paletteIsGrayscale) {
      let o = String(s.reds[0] ?? "");
      for (let d of i) !d.name.startsWith("h_std_fx") && !d.name.startsWith("h_std_sd") && (d.color = o);
    }
    return (t != null && i.push(t), i);
  }
  getAvatarRendererAsset(e) {
    return this._r720835ba72b9a5?.getAvatarRendererAsset(e) ?? null;
  }
  avatarImageReady(e) {
    this._r563bd9f08d7334 = !0;
  }
  _r0e8cddaada61e0(e) {
    this._r563bd9f08d7334 = !0;
  }
  _ra3363b9d7c2d0c(e) {
    if (
      (this._r46e9cadbd8892c == null && (this._r46e9cadbd8892c = new B()), this._r46e9cadbd8892c.hasKey(e.id))
    )
      throw new Error(`Avatar addition with index ${e.id} already exists!`);
    return (this._r46e9cadbd8892c.add(e.id, e), e);
  }
  _r980f6d8e9e4c6a(e) {
    return this._r46e9cadbd8892c?.getValue(e) ?? null;
  }
  _r65774b13c7784a(e) {
    let r = this._r980f6d8e9e4c6a(e);
    r == null || this._r46e9cadbd8892c == null || (this._r46e9cadbd8892c.remove(e), r.dispose());
  }
  update(e, r, t, i) {
    let s = this.object,
      o = s?.getStringToStringMap();
    if (s == null || o == null || this._r720835ba72b9a5 == null) return;
    --this._rfb47123225ac07 <= 0 &&
      this._r21f88afff2544f != null &&
      (this._r21f88afff2544f._r8b53045f3d7614(), (this._rfb47123225ac07 = 500));
    let d = r >= this._r7e6615d61ae595 + this._r42468ec42b7bb7;
    d &&
      ((this._r7e6615d61ae595 += this._r42468ec42b7bb7),
      this._r7e6615d61ae595 + this._r42468ec42b7bb7 < r &&
        (this._r7e6615d61ae595 = r - this._r42468ec42b7bb7));
    let c = e.scale,
      f = !1,
      l = !1,
      b = !1,
      _ = this._re477ddae7d0afc,
      h = this._alphaMultiplier,
      p = !1,
      m = !1,
      v = this.updateModel(o, c, t);
    if (
      (this._r563bd9f08d7334 && (this._r83903fc1ca2f50(), (this._r563bd9f08d7334 = !1)),
      v || c !== this.var_201 || this._r21f88afff2544f == null)
    ) {
      if (
        (c !== this.var_201 && ((l = !0), this._r6ef2aa1542ec55(c)),
        _ !== this._re477ddae7d0afc && (p = !0),
        h !== this._alphaMultiplier && (m = !0),
        l || this._r21f88afff2544f == null || p || m)
      ) {
        if (
          ((this._r21f88afff2544f = this._r71e78bb24c1268(c, this._re477ddae7d0afc)),
          this._r21f88afff2544f == null)
        )
          return;
        f = !0;
      }
      if (this._r21f88afff2544f == null) return;
      if (
        (p && this._r21f88afff2544f._rfb21bdee490567 && this._r21f88afff2544f._rcf37a11d3cf43b(),
        this._r2ea34352846466(c),
        (b = this.updateObject(s, e, t, !0)),
        this._r449b626ad44655(this._r21f88afff2544f),
        this._r46e9cadbd8892c != null)
      ) {
        let C = this._rd78ec7fef94c7d;
        for (let W of this._r46e9cadbd8892c.getValues()) W.update(this.getSprite(C++), c);
      }
      this.var_201 = c;
    } else b = this.updateObject(s, e, t);
    if (d && this._r46e9cadbd8892c != null) {
      let C = this._rd78ec7fef94c7d;
      for (let W of this._r46e9cadbd8892c.getValues())
        W.animate(this.getSprite(C++)) && this._r3c19972967c83f();
      this._r71f93203366ef9() && this._r3c19972967c83f();
    }
    let w = b || v || l,
      I = (this._r085693c651631c || this._r346e6d91a6cab3 > 0) && t && d;
    if ((w && (this._r346e6d91a6cab3 = a._r453376c1b74971), !(!w && !I))) {
      if (
        (this._r3c19972967c83f(),
        d && (this._r346e6d91a6cab3--, this._r940b9dc9ef2ef3--),
        this._r940b9dc9ef2ef3 <= 0 || l || v || f)
      )
        (this._r21f88afff2544f?._r8d8e6e810979ae(1), (this._r940b9dc9ef2ef3 = a._r453376c1b74971));
      else return;
      (this._rf3d489994e70d1(c), this._r54a5e8550bddec(c));
    }
  }
  updateModel(e, r, t) {
    let i = this.var_521?._r48caee1c574b09?.updateId ?? -1;
    if (e.getUpdateID() === this.var_302 && i === this._r1a0817d476ba8a) return !1;
    let s = !1,
      o = a._rb53f7af5fd5680,
      d = n((C, W, R) => (C === R ? !1 : (W(C), !0)), "_i0b789f200c046f");
    d(
      e._ra3dc9a405b5c73(RoomObjectVariableEnum.AVATAR_TALK) > 0 && t,
      (C) => {
        this._rdfd55e2a01a14a = C;
      },
      this._rdfd55e2a01a14a,
    ) && (s = !0);
    let c = o(e._ra3dc9a405b5c73(RoomObjectVariableEnum.const_456));
    (c !== this.var_3211 && ((this.var_3211 = c), (s = !0)),
      d(
        e._ra3dc9a405b5c73(RoomObjectVariableEnum.const_307) > 0,
        (C) => {
          this._r452518d14f9cc7 = C;
        },
        this._r452518d14f9cc7,
      ) && (s = !0),
      d(
        e._ra3dc9a405b5c73(RoomObjectVariableEnum.const_579) > 0 && t,
        (C) => {
          this._r6e9f46804ee84e = C;
        },
        this._r6e9f46804ee84e,
      ) && (s = !0));
    let f = o(e._ra3dc9a405b5c73(RoomObjectVariableEnum.AVATAR_GESTURE));
    f !== this.var_3186 && ((this.var_3186 = f), (s = !0));
    let l = e.getString(RoomObjectVariableEnum.AVATAR_POSTURE);
    l !== this.var_391 && ((this.var_391 = l), (s = !0));
    let b = e.getString(RoomObjectVariableEnum.AVATAR_POSTURE_PARAMETER);
    (b !== this._r8e1697369c9471 && ((this._r8e1697369c9471 = b), (s = !0)),
      d(
        e._ra3dc9a405b5c73(RoomObjectVariableEnum.const_332) > 0,
        (C) => {
          this._r9f847e8f7912a4 = C;
        },
        this._r9f847e8f7912a4,
      ) && (s = !0));
    let _ = o(e._ra3dc9a405b5c73(RoomObjectVariableEnum.const_1013) * a._r563bfb752995eb);
    _ !== this._r00141cccb8b9db && ((this._r00141cccb8b9db = _), (s = !0));
    let h = o(e._ra3dc9a405b5c73(RoomObjectVariableEnum.const_1195));
    h !== this.var_3484 && ((this.var_3484 = h), (s = !0));
    let p = o(e._ra3dc9a405b5c73(RoomObjectVariableEnum.const_123));
    p !== this._re477ddae7d0afc && ((this._re477ddae7d0afc = p), (s = !0));
    let m = o(e._ra3dc9a405b5c73(RoomObjectVariableEnum.const_1257));
    (m !== this._rc496f7b478b2c2 && ((this._rc496f7b478b2c2 = m), (s = !0)),
      (this._ra56cc135f3ac22 =
        this._rc496f7b478b2c2 > 0 && e._ra3dc9a405b5c73(RoomObjectVariableEnum.const_182) > 0 ? this._rc496f7b478b2c2 : 0));
    let v = o(e._ra3dc9a405b5c73(RoomObjectVariableEnum.const_1078));
    v !== this._r086a68caf8fcd8 && ((this._r086a68caf8fcd8 = v), (s = !0));
    let w = e._ra3dc9a405b5c73(RoomObjectVariableEnum.AVATAR_ALPHA_MULTIPLIER);
    (Number.isNaN(w) && (w = 1),
      w !== this._alphaMultiplier && ((this._alphaMultiplier = w), (s = !0)),
      (s = this._rcf8dedd6c5ee3d(e, r) || s),
      this._r6ef2aa1542ec55(r));
    let I = e.getString(RoomObjectVariableEnum.AVATAR_GENDER);
    if (
      (I !== this.var_106 && ((this.var_106 = I), (s = !0)),
      this.updateFigure(e.getString(RoomObjectVariableEnum.AVATAR_FIGURE)) && (s = !0),
      e._ra3412bd0673156(RoomObjectVariableEnum.AVATAR_SIGN))
    ) {
      let C = o(e._ra3dc9a405b5c73(RoomObjectVariableEnum.AVATAR_SIGN));
      C !== this._r91b01b00a04036 && ((this._r91b01b00a04036 = C), (s = !0));
    }
    if (
      (e._ra3412bd0673156(RoomObjectVariableEnum.const_1336) &&
        this._r8841bd32b9fec8(e._ra3dc9a405b5c73(RoomObjectVariableEnum.const_1336) > 0) &&
        (s = !0),
      d(
        e._ra3dc9a405b5c73(RoomObjectVariableEnum.const_1299) > 0,
        (C) => {
          this._r0709b01ceab3df = C;
        },
        this._r0709b01ceab3df,
      ) && (s = !0),
      this._r0709b01ceab3df)
    ) {
      let C = o(e._ra3dc9a405b5c73(RoomObjectVariableEnum.AVATAR_MOUSE_HIGHLIGHT));
      C !== this._r34482860c07a15 && ((this._r34482860c07a15 = C), (s = !0));
    }
    return (
      d(
        e._ra3dc9a405b5c73(RoomObjectVariableEnum.AVATAR_WIRED_VARIABLE_HOLDER_HIGHLIGHT) > 0,
        (C) => {
          this._r9d2d80187dadf9 = C;
        },
        this._r9d2d80187dadf9,
      ) && (s = !0),
      d(
        e._ra3dc9a405b5c73(RoomObjectVariableEnum.AVATAR_OWN_USER) > 0,
        (C) => {
          this._r0d305a49024149 = C;
        },
        this._r0d305a49024149,
      ) && (s = !0),
      (this.var_302 = e.getUpdateID()),
      (this._r1a0817d476ba8a = i),
      s
    );
  }
  _rcf8dedd6c5ee3d(e, r) {
    let t = !1,
      i = this._r980f6d8e9e4c6a(a._rb4420ef10878b5);
    (this._r452518d14f9cc7
      ? (i == null && this._ra3363b9d7c2d0c(new Zge(a._rb4420ef10878b5, this)), (t = !0))
      : i != null && this._r65774b13c7784a(a._rb4420ef10878b5),
      e._ra3dc9a405b5c73(RoomObjectVariableEnum.const_611) > 0
        ? (this._r980f6d8e9e4c6a(a._r39a0d4579dcac6) == null &&
            this._ra3363b9d7c2d0c(new MutedBubble(a._r39a0d4579dcac6, this)),
          this._r65774b13c7784a(a._rfe8f87678bb325),
          (t = !0))
        : (this._r980f6d8e9e4c6a(a._r39a0d4579dcac6) != null &&
            (this._r65774b13c7784a(a._r39a0d4579dcac6), (t = !0)),
          e._ra3dc9a405b5c73(RoomObjectVariableEnum.AVATAR_IS_TYPING) > 0
            ? (this._r980f6d8e9e4c6a(a._rfe8f87678bb325) == null &&
                this._ra3363b9d7c2d0c(new TypingBubble(a._rfe8f87678bb325, this)),
              (t = !0))
            : this._r980f6d8e9e4c6a(a._rfe8f87678bb325) != null &&
              this._r65774b13c7784a(a._rfe8f87678bb325)));
    let o = a._rb53f7af5fd5680(e._ra3dc9a405b5c73(RoomObjectVariableEnum.AVATAR_GUIDE_STATUS));
    (o !== _i3dbacb638b8f29.NONE
      ? (this._r65774b13c7784a(a._r398196f5b0db80),
        this._ra3363b9d7c2d0c(new GuideStatusBubble(a._r398196f5b0db80, this, o)),
        (t = !0))
      : this._r980f6d8e9e4c6a(a._r398196f5b0db80) != null &&
        (this._r65774b13c7784a(a._r398196f5b0db80), (t = !0)),
      e._ra3dc9a405b5c73(RoomObjectVariableEnum.AVATAR_IS_PLAYING_GAME) > 0
        ? (this._r980f6d8e9e4c6a(a._r4efe42a69404ad) == null &&
            this._ra3363b9d7c2d0c(new qge(a._r4efe42a69404ad)),
          (t = !0))
        : this._r980f6d8e9e4c6a(a._r4efe42a69404ad) != null && this._r65774b13c7784a(a._r4efe42a69404ad));
    let d = a._rb53f7af5fd5680(e._ra3dc9a405b5c73(RoomObjectVariableEnum.const_1043));
    d > 0
      ? (this._r980f6d8e9e4c6a(a._r833fc8a494d908) == null &&
          this._ra3363b9d7c2d0c(new NumberBubble(a._r833fc8a494d908, d, this)),
        (t = !0))
      : this._r980f6d8e9e4c6a(a._r833fc8a494d908) != null && this._r65774b13c7784a(a._r833fc8a494d908);
    let c = a._rb53f7af5fd5680(e._ra3dc9a405b5c73(RoomObjectVariableEnum.const_1201)),
      f = a._rb53f7af5fd5680(e._ra3dc9a405b5c73(RoomObjectVariableEnum.const_308)),
      l = this._r4757b728329994(c > 0),
      b = l?.habbicon ?? null;
    (c > 0
      ? ((b == null || b.habbiconId !== c || b._r47e12203f3598e !== f) &&
          l._r47711d6e5422fd(new tve(a._r0f49d226ceff16, c, f, this)),
        (t = !0))
      : b != null && (l._r0e191030018184(), l.isEmpty && this._r65774b13c7784a(a._r76acfe719da302), (t = !0)),
      this._r05043aaa722877(_ib619bfd98fe9f2.as({ value: e.getObject(RoomObjectVariableEnum.VARIABLE_FX_STATUSES), _r35f8c7df03c28f: U6 })) &&
        (t = !0));
    let _ = a._rb53f7af5fd5680(e._ra3dc9a405b5c73(RoomObjectVariableEnum.AVATAR_HABBICON_SPIN_OFFSET));
    return (
      _ !== this._r428e15ccf0fc58 && ((this._r428e15ccf0fc58 = _), (t = !0)),
      this.var_3211 > 0
        ? this._r980f6d8e9e4c6a(a._r53f8bfddfbe7a3) == null &&
          this._ra3363b9d7c2d0c($ge.make(a._r53f8bfddfbe7a3, this.var_3211, this))
        : this._r980f6d8e9e4c6a(a._r53f8bfddfbe7a3) != null && this._r65774b13c7784a(a._r53f8bfddfbe7a3),
      t
    );
  }
  updateFigure(e) {
    return this.var_1129 === e ? !1 : ((this.var_1129 = e), this._r83903fc1ca2f50(), !0);
  }
  _r05043aaa722877(e) {
    let r =
        e != null &&
        e.statusesByConfig.length > 0 &&
        this.var_521 != null &&
        this.var_521._r48caee1c574b09 != null,
      t = this._r4757b728329994(r);
    return t == null
      ? !1
      : this._re5e46f7cf26b20.reconcile(
          e,
          this.var_521?._r48caee1c574b09 ?? null,
          this.var_521?._r56c7191bd7adc5 ?? null,
          this.var_521?._r4f8149f8fd691b ?? null,
          t.stack,
          LQ.LAYER_VARIABLE_FX,
          _ia411d8d8194a3a(),
        );
  }
  _r4757b728329994(e) {
    let r = _ib619bfd98fe9f2.as({ value: this._r980f6d8e9e4c6a(a._r76acfe719da302), _r35f8c7df03c28f: LQ });
    return (r == null && e && ((r = new LQ(a._r76acfe719da302, this)), this._ra3363b9d7c2d0c(r)), r);
  }
  _r71f93203366ef9() {
    let e = this._r4757b728329994(!1);
    return e == null || !e.isEmpty
      ? !1
      : (this._r65774b13c7784a(a._r76acfe719da302), (this._r563bd9f08d7334 = !0), !0);
  }
  _r8841bd32b9fec8(e) {
    return this.var_857 === e ? !1 : ((this.var_857 = e), this._r83903fc1ca2f50(), !0);
  }
  _r83903fc1ca2f50() {
    (this._r11f6a322fff48e?.dispose(), (this._r11f6a322fff48e = null));
    for (let e of this._rd4182ec46fd1f6.getValues()) e.dispose();
    for (let e of this._ra917c878e8be14.getValues()) e.dispose();
    (this._rd4182ec46fd1f6.reset(), this._ra917c878e8be14.reset(), (this._r21f88afff2544f = null));
    for (let e = 0; e < this._r07cfc8b3f013c3; e++) {
      let r = this.getSprite(e);
      r != null &&
        ((r.asset = null), (r.nativeTexture = null), (r.filters = null), (r.visible = !1), (r.alpha = 255));
    }
  }
  _r6ef2aa1542ec55(e) {
    (e < 48 && (this._r6e9f46804ee84e = !1),
      (this._rd8b41aa1577dba =
        this.var_391 === "sit" || this.var_391 === "lay" ? e / 2 : 0),
      (this._r07cf0d2d7eba81 =
        this.var_391 === "lay" && Number.parseInt(this._r8e1697369c9471, 10) < 0),
      (this._reb904fa8a52486 = this.var_391 === "lay"));
  }
  _r71e78bb24c1268(e, r) {
    let t = `avatarImage${e}`,
      i;
    return (
      r === 0
        ? (i = this._rd4182ec46fd1f6.getValue(t))
        : ((t += `-${r}`), (i = this._ra917c878e8be14.getValue(t)), i?._rab95816396e50e()),
      i ??
        ((i =
          this._r720835ba72b9a5?.getAvatar(
            this.var_1129,
            e,
            this.var_106,
            this,
            this,
            this.var_857,
          ) ?? null),
        i == null
          ? null
          : (r === 0
              ? this._rd4182ec46fd1f6.add(t, i)
              : (this._ra917c878e8be14.length >= a._redaab5d3a4de02 &&
                  this._ra917c878e8be14.remove(this._ra917c878e8be14.getKey(0) ?? "")?.dispose(),
                this._ra917c878e8be14.add(t, i)),
            i))
    );
  }
  updateObject(e, r, t, i = !1) {
    if (!i && this.var_1914 === e.getUpdateID() && this.var_3208 === r.updateId)
      return !1;
    let s = t,
      o = ((((e.getDirection()?.x ?? 0) - r.direction.x) % 360) + 360) % 360;
    this.var_391 === "sit" && this._r9f847e8f7912a4 && (o -= (o % 90) - 45);
    let d = this.var_391 === "float" ? o : this._r086a68caf8fcd8 - r.direction.x;
    return (
      (d = ((d % 360) + 360) % 360),
      ((this.var_391 === "sit" && this._r9f847e8f7912a4) ||
        this.var_391 === ve.POSTURE_SNOWWAR_DIE_BACK ||
        this.var_391 === ve.POSTURE_SNOWWAR_DIE_FRONT) &&
        (d -= (d % 90) - 45),
      this._r428e15ccf0fc58 !== 0 &&
        ((o = a._r3c4af8b31bb34c(o + this._r428e15ccf0fc58)),
        (d = a._r3c4af8b31bb34c(d + this._r428e15ccf0fc58))),
      (o !== this._r363dd77f9f9381 || i) &&
        ((s = !0),
        (this._r363dd77f9f9381 = o),
        (o = (o - 135 + 22.5 + 360) % 360),
        this._r21f88afff2544f?._rc2bce416d009cf(class_2123.const_252, o)),
      (d !== this._rd1ae822132ba8f || i) &&
        ((s = !0),
        (this._rd1ae822132ba8f = d),
        this._rd1ae822132ba8f !== this._r363dd77f9f9381 &&
          ((d = (d - 135 + 22.5 + 360) % 360), this._r21f88afff2544f?._rc2bce416d009cf(class_2123.HEAD, d))),
      (this.var_1914 = e.getUpdateID()),
      (this.var_3208 = r.updateId),
      s
    );
  }
  _r2ea34352846466(e) {
    let r = this.getSprite(a._raffd4e811afa2e);
    if (r == null || this._r21f88afff2544f == null) return;
    let t =
      this.var_391 === ve.POSTURE_WALK ||
      this.var_391 === ve.POSTURE_STAND ||
      (this.var_391 === ve.POSTURE_SIT && this._r9f847e8f7912a4);
    if (
      ((this._re477ddae7d0afc === a._r58e44b5358b7ce || this._re477ddae7d0afc === a._re38a656cd44768) &&
        (t = !1),
      !t)
    ) {
      r.visible = !1;
      return;
    }
    ((r.visible = !0),
      e < 48
        ? ((r.libraryAssetName = "sh_std_sd_1_0_0"),
          (this._rd40db28077e769 = this._r21f88afff2544f.getAsset(r.libraryAssetName)),
          (r.offsetX = -8),
          (r.offsetY = this._r9f847e8f7912a4 ? 6 : -3))
        : ((r.libraryAssetName = "h_std_sd_1_0_0"),
          (this._rd40db28077e769 = this._r21f88afff2544f.getAsset(r.libraryAssetName)),
          (r.offsetX = -17),
          (r.offsetY = this._r9f847e8f7912a4 ? 10 : -7)));
    let i = this._rd40db28077e769?.nativeTexture ?? null;
    if (i == null) {
      r.visible = !1;
      return;
    }
    ((r.asset = null),
      (r.nativeTexture = i),
      (r.alpha = 50 * this._alphaMultiplier),
      (r._relativeDepth = 1));
  }
  _r449b626ad44655(e) {
    if (
      (e._reb381248d47816(),
      e._r66a0b6869b9038(ve.POSTURE, this.var_391, this._r8e1697369c9471),
      this.var_3186 > 0 &&
        e._r66a0b6869b9038(ve.GESTURE, ve.getExpression(this.var_3186)),
      this.var_3484 > 0 && e._r66a0b6869b9038(ve.DANCE, this.var_3484),
      this._r91b01b00a04036 > -1 && e._r66a0b6869b9038(ve.SIGN, this._r91b01b00a04036),
      this._rc496f7b478b2c2 > 0 && e._r66a0b6869b9038(ve.CARRY_OBJECT, this._rc496f7b478b2c2),
      this._ra56cc135f3ac22 > 0 && e._r66a0b6869b9038(ve.USE_OBJECT, this._ra56cc135f3ac22),
      this._rdfd55e2a01a14a && e._r66a0b6869b9038(ve.TALK),
      (this._r452518d14f9cc7 || this._r6e9f46804ee84e) && e._r66a0b6869b9038(ve.SLEEP),
      this.var_3211 > 0)
    ) {
      let s = ve.getGesture(this.var_3211);
      s.length > 0 &&
        (s === ve._r951881d2fcf861
          ? e._r66a0b6869b9038(ve._r951881d2fcf861, 2)
          : s === ve.EXPRESSION_67
            ? e._r66a0b6869b9038(ve.DANCE, "sixseven")
            : e._r66a0b6869b9038(s));
    }
    (this._re477ddae7d0afc > 0 && e._r66a0b6869b9038(ve.const_118, this._re477ddae7d0afc),
      e.endActionAppends(),
      (this._r085693c651631c = e._ree2ed64c3ae370()));
    let r = 0;
    for (let s of this._r21f88afff2544f?._r83474000dfec82() ?? []) s.id !== a._ra81f8f7b3a282d && r++;
    this._rd78ec7fef94c7d = a._rab627f1b71ace8 + r;
    let t = this._r46e9cadbd8892c?.length ?? 0,
      i = this._rd78ec7fef94c7d + t;
    i !== this._r07cfc8b3f013c3 && this._r68dbc243d37d4a(i);
  }
  _rf3d489994e70d1(e) {
    let r = this.getSprite(a._r9125af23b02d04),
      t = this._r21f88afff2544f?._ra5a790118f7d32() ?? a._rbec68d70345341;
    if (r == null || this._r21f88afff2544f == null) return;
    let i = this._r34482860c07a15 > 0 || this._r9d2d80187dadf9,
      s = this._r21f88afff2544f._r6dd67be339c829(class_2123.const_252, i);
    if (s != null) {
      try {
        if (this._r34482860c07a15 > 0) s.applyFilter(s, s.rect, new E(0, 0), new _ibaf84c0aa91c5d(16777215, 1, 6, 6));
        else if (this._r9d2d80187dadf9)
          for (let c of a._r7b7ef2780ac063) s.applyFilter(s, s.rect, new E(0, 0), c);
      } catch (c) {
        throw (i && s.dispose(), c);
      }
      let d = this._r11f6a322fff48e;
      ((this._r11f6a322fff48e = i ? s : null), (r.asset = s), (r.nativeTexture = null), d?.dispose());
    }
    r.asset != null
      ? ((r.offsetX = a._rb53f7af5fd5680(-e / 2 + t[0] - (r.asset.width - e) / 2)),
        (r.offsetY = a._rb53f7af5fd5680(-r.asset.height + e / 4 + t[1] + this._rd8b41aa1577dba)),
        (this.var_391 === ve.POSTURE_SNOWWAR_DIE_BACK || this.var_391 === ve.POSTURE_SNOWWAR_DIE_FRONT) &&
          (r.offsetY += a._rb53f7af5fd5680((20 * e) / 32)),
        (r._relativeDepth = this._r11cdaaa96b4b1e(t[2])),
        this._r21f88afff2544f._re9580ee607591e()
          ? (r.color = this._r21f88afff2544f.isBlocked() ? 6710886 : 16777215)
          : (r.color = 16777215),
        (r.alpha =
          (this._r21f88afff2544f._re9580ee607591e() || this._r21f88afff2544f.isBlocked() ? 150 : 255) *
          this._alphaMultiplier),
        (r.spriteType = this._r0d305a49024149 ? RoomObjectSpriteType.var_5494 : RoomObjectSpriteType.AVATAR),
        (r.tag = a._ra81f8f7b3a282d),
        (r._re7ddc55c344f53 = class_3682.MATCH_OPAQUE_PIXELS),
        (r.blendMode = ie.NORMAL),
        (r.filters = null),
        (r.flipH = !1),
        (r.visible = !0))
      : (r.visible = !1);
    let o = this._r980f6d8e9e4c6a(a._rfe8f87678bb325);
    o instanceof TypingBubble &&
      (o._relativeDepth = this._reb904fa8a52486
        ? a._rfaf665f8574119 - 0.01 + t[2]
        : a._r34b3d69a0cb073 - 0.01 + t[2]);
  }
  _r54a5e8550bddec(e) {
    let r = this._r21f88afff2544f;
    if (r == null) return;
    let t = r.getDirection(),
      i = a._rab627f1b71ace8;
    for (let s of r._r83474000dfec82()) {
      if (s.id === a._ra81f8f7b3a282d) {
        let W = this.getSprite(a._r9125af23b02d04);
        if (W == null) continue;
        let R = r.getLayerData(s),
          T = s._rec16170e9b85f5(t),
          S = s.getDirectionOffsetY(t);
        (R != null && ((T += R.dx), (S += R.dy)),
          e < 48 && ((T /= 2), (S /= 2)),
          this._r9f847e8f7912a4 || ((W.offsetX += T), (W.offsetY += S)));
        continue;
      }
      let o = this.getSprite(i++);
      if (o == null) continue;
      ((o._re7ddc55c344f53 = class_3682.MATCH_NOTHING), (o.visible = !0));
      let d = s._rec16170e9b85f5(t),
        c = s.getDirectionOffsetY(t),
        f = s.getDirectionOffsetZ(t),
        l = s.hasDirections ? t : 0,
        b = 0,
        _ = r.getLayerData(s);
      (_ != null && ((b = _.animationFrame), (d += _.dx), (c += _.dy), (l += _.directionOffset)),
        e < 48 && ((d /= 2), (c /= 2)),
        l < 0 ? (l += 8) : l > 7 && (l -= 8));
      let h = `${r.getScale()}_${s.member}_${l}_${b}`,
        p = r.getAsset(h),
        m = !1;
      if (
        (p == null &&
          r.getScale() === fr.SMALL &&
          ((h = `${fr.LARGE}_${s.member}_${l}_${b}`), (p = r.getAsset(h)), (m = p != null)),
        p == null)
      )
        continue;
      let v = m ? p.offset.x / 2 : p.offset.x,
        w = m ? p.offset.y / 2 : p.offset.y,
        I = r.getScale() === fr.SMALL ? 32 : 64,
        C = m ? a._ra2382a0e38c6b7(p.nativeTexture, 0.5) : p.nativeTexture;
      C != null &&
        ((o.asset = null),
        (o.nativeTexture = C),
        (o.offsetX = -v - I / 2 + d),
        (o.offsetY =
          -w +
          c +
          (s._rea41af9bc7ea1c
            ? (this._r00141cccb8b9db * e) / (2 * a._r563bfb752995eb)
            : this._rd8b41aa1577dba)),
        (o._relativeDepth = this._reb904fa8a52486
          ? a._rfaf665f8574119 - 0.001 * this._r07cfc8b3f013c3 * f
          : a._r34b3d69a0cb073 - 0.001 * this._r07cfc8b3f013c3 * f),
        (o.alpha = 255 * this._alphaMultiplier),
        (o.blendMode = s.ink === 33 ? ie.ADD : ie.NORMAL));
    }
  }
  _r11cdaaa96b4b1e(e) {
    let r = this._reb904fa8a52486
      ? this._r07cf0d2d7eba81
        ? -0.5
        : a._rfaf665f8574119 + e
      : a._r34b3d69a0cb073 + e;
    return (this._r0d305a49024149 && (r -= a._rc852943d826391), r);
  }
  static _ra2382a0e38c6b7(e, r) {
    if (e == null) return null;
    if (r === 1) return e;
    let t = this._r6c447879aae1c6.get(e);
    if (t != null) return t;
    let i = new Jt(e);
    i.scale.set(r, r);
    let s = this._rd74c98cd7ebc45(
      i,
      Math.max(1, Math.round(e.width * r)),
      Math.max(1, Math.round(e.height * r)),
    );
    return (i.destroy(), s == null ? null : (this._r6c447879aae1c6.set(e, s), s));
  }
  static _rd74c98cd7ebc45(e, r, t) {
    let i = this._rc69159143cb42b();
    if (i?.render == null) return null;
    let s = sn.create({ width: Math.max(1, Math.round(r)), height: Math.max(1, Math.round(t)) });
    return (i.render({ container: e, target: s, clear: !0 }), s);
  }
  static _rc69159143cb42b() {
    return globalThis.__habboAirLauncher?.application?.renderer ?? null;
  }
}
