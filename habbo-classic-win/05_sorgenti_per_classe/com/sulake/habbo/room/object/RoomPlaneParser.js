// Estratto da HabboAirLauncher.deobf.js, riga 80806.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/RoomPlaneParser.as
// Nome offuscato: _ib097b987258927

class a {
  static {
    n(this, "RoomPlaneParser");
  }
  static FLOOR_THICKNESS = 0.25;
  static WALL_THICKNESS = 0.25;
  static MAX_WALL_ADDITIONAL_HEIGHT = 20;
  static const_517 = -110;
  static const_498 = -100;
  var_702 = [];
  var_821 = [];
  _width = 0;
  _height = 0;
  var_662 = 0;
  var_613 = 0;
  var_694 = 0;
  var_622 = 0;
  _rac8ee552f8f91b = [];
  var_339 = [];
  _re0a4ea943ee935 = 3.6;
  _r45e3b5e6b13590 = 1;
  _r02ad9c4ed7f3ba = 1;
  var_1393 = -1;
  _floorHeight = 0;
  _r8503285c04f84a;
  var_548;
  _r02ed3dedfae586 = [];
  _rbb08481ba13524 = null;
  constructor() {
    ((this._r8503285c04f84a = new B()), (this.var_548 = new B()));
  }
  get minX() {
    return this.var_662;
  }
  get maxX() {
    return this.var_613;
  }
  get minY() {
    return this.var_694;
  }
  get maxY() {
    return this.var_622;
  }
  get _rf8dd3e24d4b2ae() {
    return this._width;
  }
  get _r79533347599cf0() {
    return this._height;
  }
  get _r5d845ae8dc989a() {
    return this._rac8ee552f8f91b.length;
  }
  get _reba6d9dec10c70() {
    return this.var_1393 !== -1 ? this.var_1393 : this._floorHeight;
  }
  get wallHeight() {
    return this.var_1393 !== -1 ? this.var_1393 + 3.6 : this._re0a4ea943ee935;
  }
  set wallHeight(e) {
    this._re0a4ea943ee935 = e < 0 ? 0 : e;
  }
  get _rd42fde7a8fe0db() {
    return this._r45e3b5e6b13590;
  }
  set _rd42fde7a8fe0db(e) {
    this._r45e3b5e6b13590 = e < 0 ? 0 : e;
  }
  get _r0337760c226f75() {
    return this._r02ad9c4ed7f3ba;
  }
  set _r0337760c226f75(e) {
    this._r02ad9c4ed7f3ba = e < 0 ? 0 : e;
  }
  dispose() {
    ((this._rac8ee552f8f91b = []),
      (this.var_339 = []),
      (this.var_702 = []),
      (this.var_821 = []),
      (this._r02ed3dedfae586 = []),
      (this._rbb08481ba13524 = null),
      this._r8503285c04f84a.dispose(),
      this.var_548.dispose());
  }
  reset() {
    ((this._rac8ee552f8f91b = []),
      (this.var_339 = []),
      (this.var_702 = []),
      (this.var_821 = []),
      (this._width = 0),
      (this._height = 0),
      (this.var_662 = 0),
      (this.var_613 = 0),
      (this.var_694 = 0),
      (this.var_622 = 0),
      (this._floorHeight = 0),
      (this._r02ed3dedfae586 = []),
      (this._rbb08481ba13524 = null));
  }
  _r9e8cc905e77402(e, r) {
    let t = Math.max(0, Math.trunc(e)),
      i = Math.max(0, Math.trunc(r));
    ((this.var_702 = []), (this.var_821 = []), (this._r02ed3dedfae586 = []));
    for (let s = 0; s < i; s++) {
      let o = [],
        d = [],
        c = [];
      for (let f = 0; f < t; f++) ((o[f] = a.const_517), (d[f] = a.const_517), (c[f] = !1));
      (this.var_702.push(o), this.var_821.push(d), this._r02ed3dedfae586.push(c));
    }
    return (
      (this._width = t),
      (this._height = i),
      (this.var_662 = this._width),
      (this.var_613 = -1),
      (this.var_694 = this._height),
      (this.var_622 = -1),
      !0
    );
  }
  setTileHeight(e, r, t) {
    if (e < 0 || e >= this._width || r < 0 || r >= this._height) return !1;
    let i = this.var_702[r];
    if (i == null) return !1;
    if (((i[e] = t), t >= 0))
      (e < this.var_662 && (this.var_662 = e),
        e > this.var_613 && (this.var_613 = e),
        r < this.var_694 && (this.var_694 = r),
        r > this.var_622 && (this.var_622 = r));
    else {
      if (e === this.var_662 || e === this.var_613) {
        let s = !1;
        for (let o = this.var_694; o < this.var_622; o++)
          if (this._ra6ddea47105f70(e, o) >= 0) {
            s = !0;
            break;
          }
        s ||
          (e === this.var_662 && this.var_662++,
          e === this.var_613 && this.var_613--);
      }
      if (r === this.var_694 || r === this.var_622) {
        let s = !1;
        for (let o = this.var_662; o < this.var_613; o++)
          if (this.getTileHeight(o, r) >= 0) {
            s = !0;
            break;
          }
        s ||
          (r === this.var_694 && this.var_694++,
          r === this.var_622 && this.var_622--);
      }
    }
    return !0;
  }
  getTileHeight(e, r) {
    if (e < 0 || e >= this._width || r < 0 || r >= this._height) return a.const_517;
    let t = this.var_702[r];
    return Math.abs(t?.[e] ?? a.const_517);
  }
  initializeFromTileData(e = -1) {
    this.var_1393 = e;
    for (let t = 0; t < this._height; t++)
      for (let i = 0; i < this._width; i++)
        (this.var_821[t] == null && (this.var_821[t] = []),
          (this.var_821[t][i] = this.var_702[t]?.[i] ?? a.const_517));
    let r = a._rda90929f0326d5(this.var_702);
    for (let t = 0; t < this._height; t++)
      for (let i = 0; i < this._width; i++)
        this._r02ed3dedfae586[t]?.[i] && this.setTileHeight(i, t, a.const_498);
    return this.initialize(r);
  }
  initializeHighlightArea(e, r, t, i) {
    (this._rf0001106da7c55(),
      this._rbb08481ba13524 != null &&
        this._r0690893d3d10c1(this._rbb08481ba13524, e * 4, r * 4, t * 4, i * 4, !0));
  }
  _rf0001106da7c55() {
    let e = this.var_339.length,
      r = Math.max(0, this._rac8ee552f8f91b.length - e);
    return (
      (this._rac8ee552f8f91b = this._rac8ee552f8f91b.slice(0, r)),
      (this.var_339.length = 0),
      e
    );
  }
  initializeFromXML(e) {
    if (e == null) return !1;
    (this.reset(), this._r4848f485c4a14c());
    let t = e.child("tileMap").toArray()[0];
    if (t == null || typeof t == "string" || !da.checkRequiredAttributes(t, ["width", "height", "wallHeight"]))
      return !1;
    let i = Number.parseInt(String(t.attribute("width")), 10),
      s = Number.parseInt(String(t.attribute("height")), 10),
      o = Number.parseFloat(String(t.attribute("wallHeight"))),
      d = String(t.attribute("fixedWallsHeight")),
      c = d !== "" ? Number.parseInt(d, 10) : -1;
    this._r9e8cc905e77402(i, s);
    let f = t.child("tileRow").toArray();
    for (let b = 0; b < f.length; b++) {
      let _ = f[b];
      if (_ == null || typeof _ == "string") continue;
      let h = _.child("tile").toArray();
      for (let p = 0; p < h.length; p++) {
        let m = h[p];
        if (m == null || typeof m == "string") continue;
        let v = Number.parseFloat(String(m.attribute("height")));
        this.setTileHeight(p, b, v);
      }
    }
    let l = e.child("holeMap").toArray();
    if (l.length > 0) {
      let b = l[0];
      if (b != null && typeof b != "string") {
        let _ = b.child("hole").toArray();
        for (let h of _)
          h == null ||
            typeof h == "string" ||
            !da.checkRequiredAttributes(h, ["id", "x", "y", "width", "height", "invert"]) ||
            this._r2013da28a384d9(
              Number.parseInt(String(h.attribute("id")), 10),
              Number.parseInt(String(h.attribute("x")), 10),
              Number.parseInt(String(h.attribute("y")), 10),
              Number.parseInt(String(h.attribute("width")), 10),
              Number.parseInt(String(h.attribute("height")), 10),
              String(h.attribute("invert")) === "true",
            );
        this._r518c0178c4ec34();
      }
    }
    return ((this.wallHeight = o), this.initializeFromTileData(c), !0);
  }
  var_105(e) {
    if (e < 0 || e >= this._r5d845ae8dc989a) return !1;
    let r = this._rac8ee552f8f91b[e];
    return r != null && this.var_339.includes(r);
  }
  getXML() {
    let e = _id7a5b884da4a02("roomData"),
      r = _id7a5b884da4a02("tileMap", {
        width: this._width,
        height: this._height,
        wallHeight: this._re0a4ea943ee935,
        fixedWallsHeight: this.var_1393,
      });
    for (let i = 0; i < this._height; i++) {
      let s = _id7a5b884da4a02("tileRow"),
        o = this.var_821[i] ?? [];
      for (let d = 0; d < this._width; d++)
        s.appendChildElement("tile", { height: o[d] ?? a.const_517 });
      r.appendChild(s);
    }
    let t = _id7a5b884da4a02("holeMap");
    for (let i = 0; i < this._r8503285c04f84a.length; i++) {
      let s = this._r8503285c04f84a.getWithIndex(i),
        o = this._r8503285c04f84a.getKey(i);
      s != null &&
        o != null &&
        t.appendChildElement("hole", { id: o, x: s.x, y: s.y, width: s.width, height: s.height, invert: !1 });
    }
    for (let i = 0; i < this.var_548.length; i++) {
      let s = this.var_548.getWithIndex(i),
        o = this.var_548.getKey(i);
      s != null &&
        o != null &&
        t.appendChildElement("hole", { id: o, x: s.x, y: s.y, width: s.width, height: s.height, invert: !0 });
    }
    return (
      e.appendChild(r),
      e.appendChild(t),
      e.appendChildElement("dimensions", {
        minX: this.minX,
        maxX: this.maxX,
        minY: this.minY,
        maxY: this.maxY,
      }),
      e
    );
  }
  _r19de74cbe6b168(e) {
    return this._r25c26bee31a886(e)?.loc ?? null;
  }
  _re21c56ebf7dac2(e) {
    return this._r25c26bee31a886(e)?.normal ?? null;
  }
  _rd9dd14744f7fcf(e) {
    return this._r25c26bee31a886(e)?.rightSide ?? null;
  }
  _r52519f85b09d9f(e) {
    return this._r25c26bee31a886(e)?.getScreenPoint ?? null;
  }
  _r873b7d53d9cbe6(e) {
    return this._r25c26bee31a886(e)?._rf401c37a5ece61 ?? null;
  }
  _r65fa552b3e557f(e) {
    let r = this._r25c26bee31a886(e);
    if (r == null) return null;
    let t = [];
    for (let i = 0; i < r._r8f76f0fbe8ad3b; i++) {
      let s = r._r57a5462004f79a(i);
      s != null && t.push(s);
    }
    return t;
  }
  _r5d2a261783db62(e) {
    return this._r25c26bee31a886(e)?.type ?? es.PLANE_UNDEFINED;
  }
  _re8c64075a93960(e) {
    return this._r25c26bee31a886(e)?.maskCount ?? 0;
  }
  _r84440c5bd22b7a(e, r) {
    return this._r25c26bee31a886(e)?._rc7d3c5d3e7fdc9(r) ?? -1;
  }
  _ra39732271f53ae(e, r) {
    return this._r25c26bee31a886(e)?._r5bd49c986a1e46(r) ?? -1;
  }
  _rc642831d632118(e, r) {
    return this._r25c26bee31a886(e)?._race01bab92c447(r) ?? -1;
  }
  _r6064f2c9a2fde3(e, r) {
    return this._r25c26bee31a886(e)?._rfdbab9eb6534a8(r) ?? -1;
  }
  _r2013da28a384d9(e, r, t, i, s, o = !1) {
    this._r8ff1158f880ba5(e);
    let d = new _i717b38cd59700b(r, t, i, s);
    o ? this.var_548.add(e, d) : this._r8503285c04f84a.add(e, d);
  }
  _r8ff1158f880ba5(e) {
    (this._r8503285c04f84a.remove(e), this.var_548.remove(e));
  }
  _r4848f485c4a14c() {
    (this._r8503285c04f84a.reset(), this.var_548.reset());
  }
  _rc7736c46ad9e2f(e, r) {
    return e < 0 || e >= this._width || r < 0 || r >= this._height
      ? a.const_517
      : this._r02ed3dedfae586[r]?.[e]
        ? a.const_498
        : (this.var_821[r]?.[e] ?? a.const_517);
  }
  _ra6ddea47105f70(e, r) {
    return e < 0 || e >= this._width || r < 0 || r >= this._height
      ? a.const_517
      : (this.var_702[r]?.[e] ?? a.const_517);
  }
  initialize(e) {
    let r = 0;
    (e != null &&
      ((r = this.getTileHeight(e.x, e.y)), this.setTileHeight(e.x, e.y, a.const_517)),
      (this._floorHeight = a._r91d2df6d9819fe(this.var_702)),
      this._re6fcd5eabf3d94());
    let t = this.var_702.map((i) => i.slice());
    return (
      a._r18b1864603d142(t),
      a._re7401748a8f3c4(t),
      a._rf4ab1abe5d9730(t),
      (this._rbb08481ba13524 = a._rcd8e7f620db196(t)),
      this._r0690893d3d10c1(this._rbb08481ba13524),
      e != null &&
        (this.setTileHeight(e.x, e.y, r),
        this.addFloor(
          new k(e.x + 0.5, e.y + 0.5, r),
          new k(-1, 0, 0),
          new k(0, -1, 0),
          !1,
          !1,
          !1,
          !1,
        )),
      !0
    );
  }
  static _r91d2df6d9819fe(e) {
    let r = 0;
    for (let t of e) for (let i of t) i > r && (r = i);
    return r;
  }
  static _rda90929f0326d5(e) {
    if (e == null || e.length === 0) return null;
    let r = [];
    for (let t = 0; t < e.length; t++) {
      let i = e[t];
      if (i == null || i.length === 0) return null;
      for (let s = 0; s < i.length; s++)
        if ((i[s] ?? a.const_517) >= 0) {
          r.push(s);
          break;
        }
      r.length < t + 1 && r.push(i.length + 1);
    }
    for (let t = 1; t < r.length - 1; t++) {
      let i = Math.trunc(r[t] ?? 0),
        s = Math.trunc(r[t - 1] ?? 0),
        o = Math.trunc(r[t + 1] ?? 0);
      if (i <= s - 1 && i <= o - 1) return new E(i, t);
    }
    return null;
  }
  _r63fea52ce4088c(e, r) {
    let t = new wu(),
      i = [
        this._r477ee098017d56.bind(this),
        this._r2a45a32d001032.bind(this),
        this._r121262d15a72cc.bind(this),
        this._r82939e25692a38.bind(this),
      ],
      s = 0,
      o = new E(e.x, e.y),
      d = 0;
    for (; d++ < 1e3;) {
      let c = !1,
        f = !1,
        l = s;
      (o.x < this.minX || o.x > this.maxX || o.y < this.minY || o.y > this.maxY) && (c = !0);
      let b = i[s]?.(o, r) ?? null;
      if (b == null) return null;
      let _ = Math.abs(b.x - o.x) + Math.abs(b.y - o.y);
      if (
        (o.x === b.x || o.y === b.y
          ? ((s = (s - 1 + i.length) % i.length), (_ += 1), (f = !0))
          : ((s = (s + 1) % i.length), (_ -= 1)),
        t.addWall(o, l, _, c, f),
        b.x === e.x && b.y === e.y && (b.x !== o.x || b.y !== o.y))
      )
        break;
      o = b;
    }
    return t.count === 0 ? null : t;
  }
  _rddd2a904a46a2f(e) {
    let r = 0;
    for (; r < e.count;) {
      let t = r,
        i = r,
        s = 0,
        o = !1;
      for (; r < e.count && !e._r640e41616744fa(r);)
        (e._rdf0586ff1cc3f0(r) ? s++ : s > 0 && s--, s > 1 && (o = !0), (i = r), r++);
      if (o) for (let d = t; d <= i; d++) e._rde5dd3c5899ece(d, !0);
      r++;
    }
  }
  _rdf863dd531d10b(e) {
    for (let r = 0; r < e.count; r++) {
      if (e._r2f9b98ef506813(r)) continue;
      let t = e._r21fd4edf06179f(r),
        i = e.getDirection(r),
        s = e.getLength(r),
        o = wu._r0658492f3842be[i],
        d = wu._r48a047fe8c2beb[i],
        c = 0;
      for (let f = 0; f < s; f++)
        if (this._ra6ddea47105f70(t.x + f * o.x - d.x, t.y + f * o.y - d.y) === a.const_498) {
          if (f > 0 && c === 0) {
            e._r469b305e0c7251(r, f);
            break;
          }
          c++;
        } else if (c > 0) {
          e._r41b50e33d0b8cf(r, c);
          break;
        }
      c === s && e._rde5dd3c5899ece(r, !0);
    }
  }
  _r6c84973c60ac65(e, r, t) {
    let i = Math.min(e.y, r.y),
      s = Math.max(e.y, r.y),
      o = Math.min(e.x, r.x),
      d = Math.max(e.x, r.x);
    for (let c = 0; c < t.count; c++) {
      let f = t._r21fd4edf06179f(c),
        l = t._rf28affe776e393(c);
      if (e.x === r.x) {
        if (f.x === e.x && l.x === e.x) {
          let b = Math.min(f.y, l.y),
            _ = Math.max(f.y, l.y);
          if (b <= i && s <= _) return c;
        }
      } else if (e.y === r.y && f.y === e.y && l.y === e.y) {
        let b = Math.min(f.x, l.x),
          _ = Math.max(f.x, l.x);
        if (b <= o && d <= _) return c;
      }
    }
    return -1;
  }
  _r827eebc213b2cc(e, r) {
    for (let t = 0; t < e.count; t++) {
      if (e._r2f9b98ef506813(t)) continue;
      let i = e._r21fd4edf06179f(t),
        s = new E(i.x, i.y),
        o = wu._r0658492f3842be[e.getDirection(t)],
        d = e.getLength(t);
      ((s.x += o.x * d), (s.y += o.y * d));
      let c = this._r6c84973c60ac65(i, s, r);
      c >= 0 ? r._r2f9b98ef506813(c) && e._rde5dd3c5899ece(t, !0) : e._rde5dd3c5899ece(t, !0);
    }
  }
  _rdab1ee50fe35e3(e, r) {
    (this._rddd2a904a46a2f(r), this._rdf863dd531d10b(e), this._r827eebc213b2cc(e, r));
  }
  _rfeabc2dbd4cb4b(e, r) {
    let t = e.count,
      i = r.count;
    for (let s = 0; s < t; s++) {
      if (e._r2f9b98ef506813(s)) continue;
      let o = e._r21fd4edf06179f(s),
        d = e.getDirection(s),
        c = e.getLength(s),
        f = wu._r0658492f3842be[d],
        l = wu._r48a047fe8c2beb[d],
        b = -1;
      for (let K = 0; K < c; K++) {
        let $ = this._ra6ddea47105f70(o.x + K * f.x + l.x, o.y + K * f.y + l.y);
        $ >= 0 && ($ < b || b < 0) && (b = $);
      }
      let _ = new k(o.x, o.y, b);
      ((_ = k.sum(_, k.product(l, 0.5))), (_ = k.sum(_, k.product(f, -0.5))));
      let h = this.wallHeight + Math.min(a.MAX_WALL_ADDITIONAL_HEIGHT, this._reba6d9dec10c70) - b,
        p = k.product(f, -c),
        m = new k(0, 0, h);
      _ = k.dif(_, p);
      let v = this._r6c84973c60ac65(o, e._rf28affe776e393(s), r),
        w = v >= 0 ? r.getDirection((v + 1) % i) : e.getDirection((s + 1) % t),
        I = v >= 0 ? r.getDirection((v - 1 + i) % i) : e.getDirection((s - 1 + t) % t),
        C = null;
      (w - d + 4) % 4 === 3
        ? (C = wu._r48a047fe8c2beb[w])
        : (d - I + 4) % 4 === 3 && (C = wu._r48a047fe8c2beb[I]);
      let W = e._rdf0586ff1cc3f0(s),
        R = e._rdf0586ff1cc3f0((s - 1 + t) % t),
        T = e._r2f9b98ef506813((s + 1) % t),
        S = e._r470989c1656366(s),
        z = e._rfe19ad4da15f7a(s);
      this.addWall(_, p, m, C, !R || S, !W || z, !T);
    }
  }
  _re6fcd5eabf3d94() {
    if (this.var_702.length === 0) return !1;
    for (let d of this.var_702) if (d == null || d.length === 0) return !1;
    let e = Math.min(
        a.MAX_WALL_ADDITIONAL_HEIGHT,
        this.var_1393 !== -1 ? this.var_1393 : a._r91d2df6d9819fe(this.var_702),
      ),
      r = this.minX,
      t = this.minY;
    for (t = this.minY; t <= this.maxY; t++)
      if (this._ra6ddea47105f70(r, t) > a.const_498) {
        t--;
        break;
      }
    if (t > this.maxY) return !1;
    let i = new E(r, t),
      s = this._r63fea52ce4088c(i, !0),
      o = this._r63fea52ce4088c(i, !1);
    s != null && o != null && (this._rdab1ee50fe35e3(s, o), this._rfeabc2dbd4cb4b(s, o));
    for (let d = 0; d < this._r79533347599cf0; d++)
      for (let c = 0; c < this._rf8dd3e24d4b2ae; c++)
        this._ra6ddea47105f70(c, d) < 0 && this.setTileHeight(c, d, -(e + this.wallHeight));
    return !0;
  }
  _r477ee098017d56(e, r) {
    if (e == null) return null;
    let t = 1,
      i = r ? a.const_498 : a.const_517;
    for (; t < 1e3;) {
      if (this._ra6ddea47105f70(e.x + t, e.y) > i) return new E(e.x + t - 1, e.y);
      if (this._ra6ddea47105f70(e.x + t, e.y + 1) <= i) return new E(e.x + t, e.y + 1);
      t++;
    }
    return null;
  }
  _r2a45a32d001032(e, r) {
    if (e == null) return null;
    let t = 1,
      i = r ? a.const_498 : a.const_517;
    for (; t < 1e3;) {
      if (this._ra6ddea47105f70(e.x, e.y + t) > i) return new E(e.x, e.y + t - 1);
      if (this._ra6ddea47105f70(e.x - 1, e.y + t) <= i) return new E(e.x - 1, e.y + t);
      t++;
    }
    return null;
  }
  _r121262d15a72cc(e, r) {
    if (e == null) return null;
    let t = 1,
      i = r ? a.const_498 : a.const_517;
    for (; t < 1e3;) {
      if (this._ra6ddea47105f70(e.x - t, e.y) > i) return new E(e.x - (t - 1), e.y);
      if (this._ra6ddea47105f70(e.x - t, e.y - 1) <= i) return new E(e.x - t, e.y - 1);
      t++;
    }
    return null;
  }
  _r82939e25692a38(e, r) {
    if (e == null) return null;
    let t = 1,
      i = r ? a.const_498 : a.const_517;
    for (; t < 1e3;) {
      if (this._ra6ddea47105f70(e.x, e.y - t) > i) return new E(e.x, e.y - (t - 1));
      if (this._ra6ddea47105f70(e.x + 1, e.y - t) <= i) return new E(e.x + 1, e.y - t);
      t++;
    }
    return null;
  }
  addWall(e, r, t, i, s, o, d) {
    (this._r5009c6796a3332(es.PLANE_WALL, e, r, t, [i]),
      this._r5009c6796a3332(es.PLANE_LANDSCAPE, e, r, t, [i]));
    let c = a.WALL_THICKNESS * this._r45e3b5e6b13590,
      f = a.FLOOR_THICKNESS * this._r02ad9c4ed7f3ba,
      l = k._rb3671a9c70d70f(r, t);
    if (l == null || l.length === 0) return;
    let b = k.product(l, (1 / l.length) * -c);
    if (
      (this._r5009c6796a3332(es.PLANE_WALL, k.sum(e, t), r, b, [l, i]),
      s &&
        this._r5009c6796a3332(
          es.PLANE_WALL,
          k.sum(k.sum(e, r), t),
          k.product(t, -(t.length + f) / t.length),
          b,
          [l, i],
        ),
      o &&
        (this._r5009c6796a3332(
          es.PLANE_WALL,
          k.sum(e, k.product(t, -f / t.length)),
          k.product(t, (t.length + f) / t.length),
          b,
          [l, i],
        ),
        d))
    ) {
      let _ = k.product(r, c / r.length);
      this._r5009c6796a3332(es.PLANE_WALL, k.sum(k.sum(e, t), k.product(_, -1)), _, b, [l, r, i]);
    }
  }
  addFloor(e, r, t, i, s, o, d, c = !1) {
    if (this._r5009c6796a3332(es.PLANE_FLOOR, e, r, t, null, c) == null) return;
    let l = a.FLOOR_THICKNESS * this._r02ad9c4ed7f3ba,
      b = new k(0, 0, l),
      _ = k.dif(e, b);
    (o && this._r5009c6796a3332(es.PLANE_FLOOR, _, r, b, null, c),
      d && this._r5009c6796a3332(es.PLANE_FLOOR, k.sum(_, k.sum(r, t)), k.product(r, -1), b, null, c),
      i && this._r5009c6796a3332(es.PLANE_FLOOR, k.sum(_, t), k.product(t, -1), b, null, c),
      s && this._r5009c6796a3332(es.PLANE_FLOOR, k.sum(_, r), t, b, null, c));
  }
  _r5009c6796a3332(e, r, t, i, s = null, o = !1) {
    if (t.length === 0 || i.length === 0) return null;
    let d = new es(e, r, t, i, s);
    return (this._rac8ee552f8f91b.push(d), o && this.var_339.push(d), d);
  }
  _r25c26bee31a886(e) {
    return e < 0 || e >= this._r5d845ae8dc989a ? null : (this._rac8ee552f8f91b[e] ?? null);
  }
  _r518c0178c4ec34() {
    let e = this.var_548.length > 0;
    for (let r = 0; r < this._height; r++) {
      let t = this._r02ed3dedfae586[r];
      if (t != null) for (let i = 0; i < this._width; i++) t[i] = e;
    }
    for (let r = 0; r < this.var_548.length; r++)
      this._rdec72f50de65bf(this.var_548.getWithIndex(r), !0);
    for (let r = 0; r < this._r8503285c04f84a.length; r++)
      this._rdec72f50de65bf(this._r8503285c04f84a.getWithIndex(r));
  }
  _rdec72f50de65bf(e, r = !1) {
    if (e == null) return;
    let t = e.x,
      i = e.x + e.width - 1,
      s = e.y,
      o = e.y + e.height - 1;
    ((t = t < 0 ? 0 : t),
      (i = i >= this._width ? this._width - 1 : i),
      (s = s < 0 ? 0 : s),
      (o = o >= this._height ? this._height - 1 : o));
    for (let d = s; d <= o; d++) {
      let c = this._r02ed3dedfae586[d];
      if (c != null) for (let f = t; f <= i; f++) c[f] = !r;
    }
  }
  _r0690893d3d10c1(e, r = 0, t = 0, i = -1, s = -1, o = !1) {
    let d = e.length,
      c = e[0]?.length ?? 0,
      f = s === -1 ? d : Math.min(d, t + s),
      l = i === -1 ? c : Math.min(c, r + i),
      b = Array.from({ length: f }, () => Array(l).fill(!1));
    for (let _ = t; _ < f; _++)
      for (let h = r; h < l; h++) {
        let p = e[_]?.[h] ?? a.const_517;
        if (p < 0 || b[_]?.[h]) continue;
        let m,
          v,
          w = h === 0 || e[_]?.[h - 1] !== p,
          I = _ === 0 || e[_ - 1]?.[h] !== p,
          C,
          W = !1;
        for (
          m = h + 1;
          m < l && !(e[_]?.[m] !== p || b[_]?.[m] || (_ > 0 && (e[_ - 1]?.[m] === p) === I));
          m++
        );
        C = m === c || e[_]?.[m] !== p;
        let R = !1;
        for (
          v = _ + 1;
          v <= f &&
          !R &&
          ((W = v === d || e[v]?.[h] !== p),
          (R = v === f || W || (h > 0 && (e[v]?.[h - 1] === p) === w) || (m < c && (e[v]?.[m] === p) === C)),
          v !== d);
          v++
        ) {
          for (let $ = h; $ < m; $++)
            if ((e[v]?.[$] === p) === W) {
              ((R = !0), (m = $));
              break;
            }
          if (R) break;
        }
        ((W ||= v === d), (C = m === c || e[_]?.[m] !== p));
        for (let $ = _; $ < v; $++) for (let Y = h; Y < m; Y++) b[$] != null && (b[$][Y] = !0);
        let T = h / 4 - 0.5,
          S = _ / 4 - 0.5,
          z = (m - h) / 4,
          K = (v - _) / 4;
        this.addFloor(new k(T + z, S + K, p / 4), new k(-z, 0, 0), new k(0, -K, 0), C, w, W, I, o);
      }
  }
  static _rcd8e7f620db196(e) {
    let r = e.length,
      t = e[0]?.length ?? 0,
      i = Array.from({ length: r * 4 }, () => Array(t * 4).fill(0)),
      s = 0;
    for (let o = 0; o < r; o++) {
      let d = 0;
      for (let c = 0; c < t; c++) {
        let f = e[o]?.[c] ?? a.const_517;
        if (f < 0 || f <= 255)
          for (let l = 0; l < 4; l++) for (let b = 0; b < 4; b++) i[s + l][d + b] = f < 0 ? f : f * 4;
        else {
          let l = (f & 255) * 4,
            b = l + ((f >> 11) & 1) * 3,
            _ = l + ((f >> 10) & 1) * 3,
            h = l + ((f >> 9) & 1) * 3,
            p = l + ((f >> 8) & 1) * 3;
          for (let m = 0; m < 3; m++) {
            let v = m + 1;
            ((i[s][d + m] = (b * (3 - m) + _ * m) / 3),
              (i[s + 3][d + v] = (h * (3 - v) + p * v) / 3),
              (i[s + v][d] = (b * (3 - v) + h * v) / 3),
              (i[s + m][d + 3] = (_ * (3 - m) + p * m) / 3));
          }
          ((i[s + 1][d + 1] = b > l ? l + 2 : l + 1),
            (i[s + 1][d + 2] = _ > l ? l + 2 : l + 1),
            (i[s + 2][d + 1] = h > l ? l + 2 : l + 1),
            (i[s + 2][d + 2] = p > l ? l + 2 : l + 1));
        }
        d += 4;
      }
      s += 4;
    }
    return i;
  }
  static _re7401748a8f3c4(e) {
    let r = e.length - 1,
      t = (e[0]?.length ?? 1) - 1;
    for (let i = 1; i < r; i++)
      for (let s = 1; s < t; s++) {
        let o = e[i]?.[s] ?? a.const_517;
        if (o < 0) continue;
        let d = (e[i - 1]?.[s - 1] ?? 0) & 255,
          c = (e[i - 1]?.[s] ?? 0) & 255,
          f = (e[i - 1]?.[s + 1] ?? 0) & 255,
          l = (e[i]?.[s - 1] ?? 0) & 255,
          b = (e[i]?.[s + 1] ?? 0) & 255,
          _ = (e[i + 1]?.[s - 1] ?? 0) & 255,
          h = (e[i + 1]?.[s] ?? 0) & 255,
          p = (e[i + 1]?.[s + 1] ?? 0) & 255,
          m = o + 1,
          v =
            (d === m || c === m || l === m ? 8 : 0) |
            (f === m || c === m || b === m ? 4 : 0) |
            (_ === m || h === m || l === m ? 2 : 0) |
            (p === m || h === m || b === m ? 1 : 0);
        (v === 15 && (v = 0), (e[i][s] = o | (v << 8)));
      }
  }
  static _rf4ab1abe5d9730(e) {
    (e.shift(), e.pop());
    for (let r of e) (r.shift(), r.pop());
  }
  static _r18b1864603d142(e) {
    for (let s of e) (s.push(a.const_517), s.unshift(a.const_517));
    let r = e[0]?.length ?? 0,
      t = Array(r).fill(a.const_517),
      i = Array(r).fill(a.const_517);
    (e.push(i), e.unshift(t));
  }
}
