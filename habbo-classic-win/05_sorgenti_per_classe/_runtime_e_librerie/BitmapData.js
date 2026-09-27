// Estratto da HabboAirLauncher.deobf.js, riga 48691.

class a {
    static {
      n(this, "BitmapData");
    }
    static _re7ff7beb582704 = 2;
    static _r0a52af92aacbc7(e, r, t) {
      let i = a._r28d127ccb05334(e, r, !0);
      return (i._recd5c9d08fdd11(t), i);
    }
    static _rf388c5f3d7975a(e, r, t, i = !0) {
      let s = a._r28d127ccb05334(e, r, i);
      return (s._r5b8ff57eb513a2(t), s);
    }
    static _rc15f29e588f4cb(e, r, t, i = !0, s = 0) {
      let o = a._r28d127ccb05334(e, r, i, s);
      return (t(o._re7c3b0cb59ee66, o.width, o.height), o._r3959c40c9faf3a(), o);
    }
    static _r28d127ccb05334(e, r, t, i = 0) {
      return new a(e, r, t, i, !0, !1);
    }
    static _r4152a3e5f682d9(e) {
      return Number.isFinite(e) ? Math.max(1, Math.trunc(e)) : 1;
    }
    width;
    height;
    transparent;
    _r117eeea1d6cf8d = !1;
    _re7c3b0cb59ee66;
    _ra6da44837ac2b0;
    _context;
    _rc15c5bf65dce50 = null;
    _rdfd96b42db8414;
    _r94b022029d4c58;
    _r94c95e4a15173f = !0;
    _r1565a4eb29606c = !1;
    _r8597e702d26207 = !1;
    _r1c738ef096d56f = 0;
    _rb857a6ae3ca950 = 0;
    _r22ca9de5da6d3a = 0;
    _r42779cf4d07275 = 0;
    _rceec0b70d45128 = 0;
    _r4562493826d15d = 0;
    _r23ad3d9ceddfcd = 0;
    _rbdde46c2ba0fd5 = 0;
    _r53e611b8eba585 = 0;
    constructor(e, r, t = !0, i = 4294967295, s = !0, o = !0) {
      if (!N0r) throw new Error("BitmapData browser bridge requires a little-endian platform.");
      (Object.defineProperty(this, Pqe, { value: !0, enumerable: !1, configurable: !1, writable: !1 }),
        (this.width = a._r4152a3e5f682d9(e)),
        (this.height = a._r4152a3e5f682d9(r)),
        (this.transparent = t),
        (this._re7c3b0cb59ee66 = new Uint32Array(this.width * this.height)));
      let d = this._ra50fb415385339(i >>> 0);
      (d !== 0 && this._re7c3b0cb59ee66.fill(d),
        (this._ra6da44837ac2b0 = _i295affcc6e4d03(this.width, this.height)),
        (this._context = _i5183d3213c4d99(this._ra6da44837ac2b0)),
        (this._r94b022029d4c58 = s),
        (this._rdfd96b42db8414 = this._ra6da44837ac2b0 && s ? Texture.from(this._ra6da44837ac2b0) : Texture.EMPTY),
        o
          ? (this._r3959c40c9faf3a(), this._r1030f5f4e5c1b9())
          : ((this._r94c95e4a15173f = !1), this._r09cb2f0baa8dac(), this._reb3f53ff475beb()));
    }
    static [Symbol.hasInstance](e) {
      return typeof e == "object" && e !== null && e[Pqe] === !0;
    }
    get rect() {
      return new D(0, 0, this.width, this.height);
    }
    get disposed() {
      return this._r117eeea1d6cf8d;
    }
    get texture() {
      return (
        this._rdfd96b42db8414 === Texture.EMPTY &&
          this._ra6da44837ac2b0 != null &&
          ((this._rdfd96b42db8414 = Texture.from(this._ra6da44837ac2b0)),
          (this._r94b022029d4c58 = !0),
          (this._r8597e702d26207 = !0)),
        this._r1030f5f4e5c1b9(),
        this._rb080a7cbfdc9cc(),
        this._rdfd96b42db8414
      );
    }
    lock() {
      this._r1c738ef096d56f += 1;
    }
    unlock() {
      (this._r1c738ef096d56f > 0 && ((this._r1c738ef096d56f -= 1), this._r1c738ef096d56f > 0)) ||
        (this._r1030f5f4e5c1b9(), this._rb080a7cbfdc9cc());
    }
    dispose() {
      this._r117eeea1d6cf8d ||
        ((this._r117eeea1d6cf8d = !0),
        this._rdfd96b42db8414 !== Texture.EMPTY && this._rdfd96b42db8414.destroy(!0),
        (this._rdfd96b42db8414 = Texture.EMPTY),
        (this._ra6da44837ac2b0 = null),
        (this._context = null),
        (this._rc15c5bf65dce50 = null));
    }
    setPixel32(e, r, t) {
      (this._rfc4cc04efb1542(),
        !(e < 0 || r < 0 || e >= this.width || r >= this.height) &&
          ((this._re7c3b0cb59ee66[r * this.width + e] = this._ra50fb415385339(t >>> 0)),
          this._rdaac9ec1f30efd(e, r)));
    }
    getPixel32(e, r) {
      return (
        this._rfc4cc04efb1542(),
        e < 0 || r < 0 || e >= this.width || r >= this.height
          ? 0
          : this._r9382ed973ebc21(this._re7c3b0cb59ee66[r * this.width + e] ?? 0)
      );
    }
    _rdb0731aca322b1(e) {
      this._rfc4cc04efb1542();
      let r = Math.max(0, Math.floor(e.x)),
        t = Math.max(0, Math.floor(e.y)),
        i = Math.min(this.width, Math.ceil(e.right)),
        s = Math.min(this.height, Math.ceil(e.bottom));
      if (r >= i || t >= s) return [];
      let o = i - r,
        d = new Uint32Array((s - t) * o),
        c = 0;
      for (let f = t; f < s; f++) {
        let l = f * this.width + r,
          b = l + o;
        (d.set(this._re7c3b0cb59ee66.subarray(l, b), c), (c += o));
      }
      return Array.from(d, (f) => this._r9382ed973ebc21(f >>> 0));
    }
    _r2d51a38bc8ae46(e, r) {
      this._rfc4cc04efb1542();
      let t = Math.max(0, Math.floor(e.x)),
        i = Math.max(0, Math.floor(e.y)),
        s = Math.min(this.width, Math.ceil(e.right)),
        o = Math.min(this.height, Math.ceil(e.bottom));
      if (t >= s || i >= o) return;
      let d = Uint32Array.from(r, (l) => this._ra50fb415385339(Number(l ?? 0) >>> 0)),
        c = s - t,
        f = 0;
      for (let l = i; l < o; l++) {
        let b = l * this.width + t,
          _ = d.subarray(f, f + c);
        (this._re7c3b0cb59ee66.set(_, b), (f += c));
      }
      this._re8ff48e34af929(t, i, s - t, o - i);
    }
    clone() {
      this._rfc4cc04efb1542();
      let e = new a(this.width, this.height, this.transparent, 0);
      return (e._re7c3b0cb59ee66.set(this._re7c3b0cb59ee66), e._re8ff48e34af929(0, 0, e.width, e.height), e);
    }
    hitTest(e, r, t) {
      let i = Math.floor(t.x - e.x),
        s = Math.floor(t.y - e.y);
      return i < 0 || s < 0 || i >= this.width || s >= this.height
        ? !1
        : this.transparent
          ? ((this.getPixel32(i, s) >>> 24) & 255) >= (r & 255)
          : !0;
    }
    _r0adb6e3e4060b8(e = 128) {
      this._rfc4cc04efb1542();
      let r = Math.max(0, Math.min(255, e | 0)),
        t = this.width * this.height,
        i = new Uint32Array(Math.ceil(t / 32));
      for (let s = 0; s < t; s++) {
        if ((((this._re7c3b0cb59ee66[s] ?? 0) >>> 24) & 255) < r) continue;
        let d = s % 32,
          c = (s / 32) | 0;
        i[c] |= 1 << d;
      }
      return i;
    }
    fillRect(e, r) {
      let t = Math.max(0, e.x | 0),
        i = Math.max(0, e.y | 0),
        s = Math.min(this.width, Math.ceil(e.x + e.width)),
        o = Math.min(this.height, Math.ceil(e.y + e.height));
      if (t >= s || i >= o) return;
      if (this._context != null && !this._r94c95e4a15173f) {
        (this._context.save(),
          this._context.beginPath(),
          this._context.rect(t, i, s - t, o - i),
          this._context.clip(),
          (this._context.globalCompositeOperation = "copy"),
          (this._context.fillStyle = this.getCanvasFillStyle(r >>> 0)),
          this._context.fillRect(t, i, s - t, o - i),
          this._context.restore(),
          this._r3784b889bc78b5(t, i, s - t, o - i));
        return;
      }
      let d = this._ra50fb415385339(r >>> 0);
      for (let c = i; c < o; c++) {
        let f = c * this.width + t,
          l = c * this.width + s;
        this._re7c3b0cb59ee66.fill(d, f, l);
      }
      this._re8ff48e34af929(t, i, s - t, o - i);
    }
    copyPixels(e, r, t, i, s, o = !1) {
      let d = i == null && !o && e.transparent && !this.transparent,
        c = Math.max(0, r.x | 0),
        f = Math.max(0, r.y | 0),
        l = Math.max(0, r.width | 0),
        b = Math.max(0, r.height | 0),
        _ = t.x | 0,
        h = t.y | 0;
      if (l <= 0 || b <= 0) return;
      if (
        i == null &&
        (this._r1030f5f4e5c1b9(), e._r1030f5f4e5c1b9(), this._context != null && e._ra6da44837ac2b0 != null)
      ) {
        (this._context.save(),
          (this._context.imageSmoothingEnabled = !1),
          this._context.beginPath(),
          this._context.rect(_, h, l, b),
          this._context.clip(),
          (this._context.globalCompositeOperation = d || o ? "source-over" : "copy"),
          this._context.drawImage(e._ra6da44837ac2b0, c, f, l, b, _, h, l, b),
          this._context.restore(),
          this._r3784b889bc78b5(_, h, l, b));
        return;
      }
      (this._rfc4cc04efb1542(), e._rfc4cc04efb1542(), i?._rfc4cc04efb1542());
      let p = c,
        m = f,
        v = l,
        w = b,
        I = (s?.x ?? 0) | 0,
        C = (s?.y ?? 0) | 0;
      if (_ < 0) {
        let W = -_;
        ((p += W), (I += W), (v -= W), (_ = 0));
      }
      if (h < 0) {
        let W = -h;
        ((m += W), (C += W), (w -= W), (h = 0));
      }
      if (
        ((v = Math.min(v, e.width - p, this.width - _)),
        (w = Math.min(w, e.height - m, this.height - h)),
        i != null && ((v = Math.min(v, i.width - I)), (w = Math.min(w, i.height - C))),
        !(v <= 0 || w <= 0))
      ) {
        for (let W = 0; W < w; W++) {
          let R = (m + W) * e.width,
            T = (h + W) * this.width,
            S = i != null ? (C + W) * i.width : 0;
          for (let z = 0; z < v; z++) {
            let K = R + p + z,
              $ = T + _ + z,
              Y = e._re7c3b0cb59ee66[K] ?? 0;
            if (i != null) {
              let oe = i._re7c3b0cb59ee66[S + I + z] ?? 0;
              Y = (Y & 16777215) | (oe & 4278190080);
            }
            this._re7c3b0cb59ee66[$] = o || d ? this._rad3c1b46ad538c(Y, this._re7c3b0cb59ee66[$] ?? 0) : Y;
          }
        }
        this._re8ff48e34af929(_, h, v, w);
      }
    }
    copyChannel(e, r, t, i, s) {
      (this._rfc4cc04efb1542(), e._rfc4cc04efb1542());
      let o = this._rae52427ddb8e09(i),
        d = this._rae52427ddb8e09(s),
        c = Math.max(0, r.x | 0),
        f = Math.max(0, r.y | 0),
        l = Math.max(0, r.width | 0),
        b = Math.max(0, r.height | 0);
      if (l <= 0 || b <= 0 || o == null || d == null) return;
      let _ = c,
        h = f,
        p = t.x | 0,
        m = t.y | 0,
        v = l,
        w = b;
      if (p < 0) {
        let C = -p;
        ((_ += C), (v -= C), (p = 0));
      }
      if (m < 0) {
        let C = -m;
        ((h += C), (w -= C), (m = 0));
      }
      if (
        ((v = Math.min(v, e.width - _, this.width - p)),
        (w = Math.min(w, e.height - h, this.height - m)),
        v <= 0 || w <= 0)
      )
        return;
      let I = ~(255 << d);
      for (let C = 0; C < w; C++) {
        let W = (h + C) * e.width,
          R = (m + C) * this.width;
        for (let T = 0; T < v; T++) {
          let S = W + _ + T,
            z = R + p + T,
            K = e._re7c3b0cb59ee66[S] ?? 0,
            $ = this._re7c3b0cb59ee66[z] ?? 0,
            Y = (K >>> o) & 255;
          this._re7c3b0cb59ee66[z] = ($ & I) | (Y << d);
        }
      }
      this._re8ff48e34af929(p, m, v, w);
    }
    paletteMap(e, r, t, i, s, o, d) {
      (this._rfc4cc04efb1542(), e._rfc4cc04efb1542());
      let c = Math.max(0, r.x | 0),
        f = Math.max(0, r.y | 0),
        l = t.x | 0,
        b = t.y | 0,
        _ = Math.max(0, r.width | 0),
        h = Math.max(0, r.height | 0);
      if (!(_ <= 0 || h <= 0)) {
        if (l < 0) {
          let p = -l;
          ((c += p), (_ -= p), (l = 0));
        }
        if (b < 0) {
          let p = -b;
          ((f += p), (h -= p), (b = 0));
        }
        if (
          ((_ = Math.min(_, e.width - c, this.width - l)),
          (h = Math.min(h, e.height - f, this.height - b)),
          !(_ <= 0 || h <= 0))
        ) {
          for (let p = 0; p < h; p++) {
            let m = (f + p) * e.width,
              v = (b + p) * this.width;
            for (let w = 0; w < _; w++) {
              let I = e._re7c3b0cb59ee66[m + c + w] ?? 0,
                C = I & 255,
                W = (I >>> 8) & 255,
                R = (I >>> 16) & 255,
                T = (I >>> 24) & 255,
                S =
                  ((i != null ? Number(i[C] ?? 0) >>> 0 : C << 16) +
                    (s != null ? Number(s[W] ?? 0) >>> 0 : W << 8) +
                    (o != null ? Number(o[R] ?? 0) >>> 0 : R) +
                    (d != null ? Number(d[T] ?? 0) >>> 0 : T << 24)) >>>
                  0;
              this._re7c3b0cb59ee66[v + l + w] = this._ra50fb415385339(S);
            }
          }
          this._re8ff48e34af929(l, b, _, h);
        }
      }
    }
    draw(e, r, t, i, s, o = !1) {
      this._r1030f5f4e5c1b9();
      let d = this._context,
        c = t != null && !this._r2691835dd27b49(t) ? t : null;
      if (
        e instanceof Pt &&
        d != null &&
        (!i || i === ie.NORMAL) &&
        (r?.a ?? 1) === 1 &&
        (r?.d ?? 1) === 1 &&
        !(r?.b ?? 0) &&
        !(r?.c ?? 0) &&
        e._ra4a8b23e4d0f03(d, r?.tx ?? 0, r?.ty ?? 0, c, s ?? null)
      ) {
        this._r3784b889bc78b5(r?.tx ?? 0, r?.ty ?? 0, e.width, e.height);
        return;
      }
      let f = e instanceof Pt && c != null && e._r1788c3d55fb3d1() ? c : null,
        l = this._r5c811681918c3a(e, f),
        b = l?.surface ?? null,
        _ = l?._r9db2f3b7734564 ?? 0,
        h = l?._rfbc2da458d8574 ?? 0,
        p = l?._rfa573fa72400cb ?? null,
        m = c != null && f == null && b != null ? this._re4ba7d3025a776(b, c) : b,
        v =
          _ !== 0 || h !== 0
            ? new Pe(
                r?.a ?? 1,
                r?.b ?? 0,
                r?.c ?? 0,
                r?.d ?? 1,
                (r?.tx ?? 0) + (r?.a ?? 1) * _ + (r?.c ?? 0) * h,
                (r?.ty ?? 0) + (r?.b ?? 0) * _ + (r?.d ?? 1) * h,
              )
            : r;
      try {
        if (d == null || m == null) return;
        let w =
            c != null && f == null && this._r2647dd674d0181(c)
              ? Math.max(0, Math.min(1, c.alphaMultiplier))
              : 1,
          I = this._rc20fee0bf70d43(i),
          C =
            e instanceof a && s == null
              ? a._r4e33d709a3105f(this.width, this.height, e.width, e.height, v)
              : null,
          W = this._re08d2d1727d4c3(i, w),
          R = s ?? C;
        if (e instanceof a && R != null)
          switch (W.type) {
            case "native-derived":
              if (this._r043b493b2da914(m, v, R, W.blendMode)) return;
              break;
            case "cpu-fallback":
              if (this._rdbae9de934d9ba(e, v, R, w, W.blendMode)) return;
              break;
          }
        if (
          e instanceof a &&
          ((s != null && this._rba233f5eb3dfb4(m, v, s, o, w, I)) ||
            (C != null && this._rba233f5eb3dfb4(m, v, C, o, w, I)))
        )
          return;
        (d.save(),
          (d.imageSmoothingEnabled = o),
          s != null &&
            (d.setTransform(1, 0, 0, 1, 0, 0), d.beginPath(), d.rect(s.x, s.y, s.width, s.height), d.clip()),
          d.setTransform(v?.a ?? 1, v?.b ?? 0, v?.c ?? 0, v?.d ?? 1, v?.tx ?? 0, v?.ty ?? 0),
          (d.globalAlpha = w),
          (d.globalCompositeOperation = I),
          d.drawImage(m, 0, 0),
          d.restore(),
          s != null
            ? this._r3784b889bc78b5(s.x, s.y, s.width, s.height)
            : this._r3784b889bc78b5(0, 0, this.width, this.height));
      } finally {
        p?.dispose();
      }
    }
    static _r4e33d709a3105f(e, r, t, i, s) {
      let o = s?.a ?? 1,
        d = s?.b ?? 0,
        c = s?.c ?? 0,
        f = s?.d ?? 1,
        l = s?.tx ?? 0,
        b = s?.ty ?? 0;
      if (d !== 0 || c !== 0 || f !== 1 || (o !== 1 && o !== -1)) return null;
      let _ = o === -1 ? l - t : l,
        h = o === -1 ? l : l + t,
        p = b,
        m = b + i,
        v = Math.max(0, _),
        w = Math.max(0, p),
        I = Math.min(e, h),
        C = Math.min(r, m);
      return I <= v || C <= w ? null : new D(v, w, I - v, C - w);
    }
    _r043b493b2da914(e, r, t, i) {
      if (t == null || this._context == null) return !1;
      let s = r?.a ?? 1,
        o = r?.b ?? 0,
        d = r?.c ?? 0,
        c = r?.d ?? 1,
        f = r?.tx ?? 0,
        l = r?.ty ?? 0;
      if (s !== 1 || o !== 0 || d !== 0 || c !== 1) return !1;
      let b = Math.max(0, Math.floor(t.x)),
        _ = Math.max(0, Math.floor(t.y)),
        h = Math.max(0, Math.ceil(t.width)),
        p = Math.max(0, Math.ceil(t.height)),
        m = Math.floor(t.x - f),
        v = Math.floor(t.y - l);
      if (h <= 0 || p <= 0) return !1;
      switch (i) {
        case ie.INVERT: {
          let w = this._r9f6301c67e9520(e, m, v, h, p);
          if (w == null) return !1;
          let I = this._r1d19034e4fad09(w, 16777215);
          return I == null ? !1 : this._r535603d15b9cf9(I, b, _, h, p, "difference");
        }
        default:
          return !1;
      }
    }
    _rdbae9de934d9ba(e, r, t, i, s) {
      if (t == null) return !1;
      let o = r?.a ?? 1,
        d = r?.b ?? 0,
        c = r?.c ?? 0,
        f = r?.d ?? 1,
        l = r?.tx ?? 0,
        b = r?.ty ?? 0;
      if (o !== 1 || d !== 0 || c !== 0 || f !== 1) return !1;
      let _ = Math.max(0, Math.floor(t.x)),
        h = Math.max(0, Math.floor(t.y)),
        p = Math.max(0, Math.ceil(t.width)),
        m = Math.max(0, Math.ceil(t.height)),
        v = Math.floor(t.x - l),
        w = Math.floor(t.y - b);
      if (p <= 0 || m <= 0 || v < 0 || w < 0 || v + p > e.width || w + m > e.height) return !1;
      (this._rfc4cc04efb1542(), e._rfc4cc04efb1542());
      let I = Math.max(0, Math.min(255, Math.round(i * 255)));
      for (let C = 0; C < m; C += 1) {
        let W = (w + C) * e.width,
          R = (h + C) * this.width;
        for (let T = 0; T < p; T += 1) {
          let S = e._re7c3b0cb59ee66[W + v + T] ?? 0,
            z = (S >>> 24) & 255;
          if (z <= 0) continue;
          let K = Math.max(0, Math.min(255, Math.round((z * I) / 255)));
          if (K <= 0) continue;
          let $ = R + _ + T,
            Y = this._re7c3b0cb59ee66[$] ?? 0,
            oe = (Y >>> 24) & 255,
            be = (Y >>> 16) & 255,
            ye = (Y >>> 8) & 255,
            ir = Y & 255,
            pe = ir,
            lr = ye,
            wr = be;
          switch (s) {
            case ie.SUBTRACT: {
              let de = (S >>> 16) & 255,
                Be = (S >>> 8) & 255,
                Ie = S & 255;
              ((pe = _if24e00f85f3cd9(ir - Math.round((Ie * K) / 255))),
                (lr = _if24e00f85f3cd9(ye - Math.round((Be * K) / 255))),
                (wr = _if24e00f85f3cd9(be - Math.round((de * K) / 255))));
              break;
            }
            case ie.INVERT:
              ((pe = Math.round((ir * (255 - K) + (255 - ir) * K) / 255)),
                (lr = Math.round((ye * (255 - K) + (255 - ye) * K) / 255)),
                (wr = Math.round((be * (255 - K) + (255 - be) * K) / 255)));
              break;
          }
          let q = this.transparent ? _if24e00f85f3cd9(K + Math.round((oe * (255 - K)) / 255)) : 255;
          this._re7c3b0cb59ee66[$] = ((q << 24) | (wr << 16) | (lr << 8) | pe) >>> 0;
        }
      }
      return (this._re8ff48e34af929(_, h, p, m), !0);
    }
    _rba233f5eb3dfb4(e, r, t, i, s, o) {
      if (this._context == null) return !1;
      let d = r?.a ?? 1,
        c = r?.b ?? 0,
        f = r?.c ?? 0,
        l = r?.d ?? 1,
        b = r?.tx ?? 0,
        _ = r?.ty ?? 0;
      if (c !== 0 || f !== 0 || l !== 1 || (d !== 1 && d !== -1)) return !1;
      let h = Math.max(0, Math.round(t.width)),
        p = Math.max(0, Math.round(t.height));
      if (h <= 0 || p <= 0) return !1;
      let m = t.x - b,
        v = t.y - _;
      d === -1 && (m = b - t.x - t.width);
      let w = Math.max(0, Math.round(e.width)),
        I = Math.max(0, Math.round(e.height));
      if (m >= 0 && v >= 0 && m + h <= w && v + p <= I)
        return (
          this._context.save(),
          (this._context.imageSmoothingEnabled = i),
          this._context.beginPath(),
          this._context.rect(t.x, t.y, t.width, t.height),
          this._context.clip(),
          (this._context.globalAlpha = s),
          (this._context.globalCompositeOperation = o),
          d === -1
            ? (this._context.setTransform(-1, 0, 0, 1, 0, 0),
              this._context.drawImage(e, m, v, h, p, -t.x - h, t.y, h, p))
            : (this._context.setTransform(1, 0, 0, 1, 0, 0),
              this._context.drawImage(e, m, v, h, p, t.x, t.y, h, p)),
          this._context.restore(),
          this._r3784b889bc78b5(t.x, t.y, t.width, t.height),
          !0
        );
      let W = this._r9f6301c67e9520(e, m, v, h, p);
      return W == null
        ? !1
        : (this._context.save(),
          (this._context.imageSmoothingEnabled = i),
          this._context.beginPath(),
          this._context.rect(t.x, t.y, t.width, t.height),
          this._context.clip(),
          (this._context.globalAlpha = s),
          (this._context.globalCompositeOperation = o),
          d === -1
            ? (this._context.setTransform(-1, 0, 0, 1, 0, 0), this._context.drawImage(W, -t.x - h, t.y, h, p))
            : (this._context.setTransform(1, 0, 0, 1, 0, 0), this._context.drawImage(W, t.x, t.y, h, p)),
          this._context.restore(),
          this._r3784b889bc78b5(t.x, t.y, t.width, t.height),
          !0);
    }
    _re08d2d1727d4c3(e, r = 1) {
      switch ((e ?? ie.NORMAL).toLowerCase()) {
        case ie.INVERT:
          return r === 1
            ? { type: "native-derived", blendMode: ie.INVERT }
            : { type: "cpu-fallback", blendMode: ie.INVERT };
        case ie.SUBTRACT:
          return { type: "cpu-fallback", blendMode: ie.SUBTRACT };
        default:
          return { type: "none" };
      }
    }
    _rc20fee0bf70d43(e) {
      switch ((e ?? ie.NORMAL).toLowerCase()) {
        case ie.ADD:
          return "lighter";
        case ie.DARKEN:
          return "darken";
        case ie.DIFFERENCE:
          return "difference";
        case ie._r655bcbf040f824:
          return "hard-light";
        case ie.MULTIPLY:
          return "multiply";
        case ie._r107d7b1bac2f9f:
          return "overlay";
        case ie.SCREEN:
          return "screen";
        default:
          return "source-over";
      }
    }
    _rae52427ddb8e09(e) {
      switch (e) {
        case On.RED:
          return 0;
        case On.GREEN:
          return 8;
        case On.BLUE:
          return 16;
        case On.ALPHA:
          return 24;
        default:
          return null;
      }
    }
    colorTransform(e, r) {
      if (this._r2691835dd27b49(r)) return;
      let t = Math.max(0, Math.floor(e.x)),
        i = Math.max(0, Math.floor(e.y)),
        s = Math.min(this.width, Math.ceil(e.right)),
        o = Math.min(this.height, Math.ceil(e.bottom));
      if (!(t >= s || i >= o)) {
        this._rfc4cc04efb1542();
        for (let d = i; d < o; d++) {
          let c = d * this.width;
          for (let f = t; f < s; f++) {
            let l = c + f,
              b = this._re7c3b0cb59ee66[l] ?? 0,
              _ = (b >>> 24) & 255,
              h = (b >>> 16) & 255,
              p = (b >>> 8) & 255,
              m = b & 255,
              v = _if24e00f85f3cd9(m * r.redMultiplier + r.redOffset),
              w = _if24e00f85f3cd9(p * r.greenMultiplier + r.greenOffset),
              I = _if24e00f85f3cd9(h * r.blueMultiplier + r.blueOffset),
              C = this.transparent ? _if24e00f85f3cd9(_ * r.alphaMultiplier + r.alphaOffset) : 255;
            this._re7c3b0cb59ee66[l] = ((C << 24) | (I << 16) | (w << 8) | v) >>> 0;
          }
        }
        this._re8ff48e34af929(t, i, s - t, o - i);
      }
    }
    applyFilter(e, r, t, i) {
      if (i instanceof ColorMatrixFilter_) {
        this._rb8c9bc730e6ef9(e, r, t, i);
        return;
      }
      if (i instanceof h6 && (i.quality === 0 || (i.blurX <= 1 && i.blurY <= 1))) {
        this.copyPixels(e, r, t);
        return;
      }
      if (
        i instanceof h6 &&
        (r.x !== 0 ||
          r.y !== 0 ||
          r.width !== e.width ||
          r.height !== e.height ||
          t.x !== 0 ||
          t.y !== 0 ||
          this.width !== e.width ||
          this.height !== e.height ||
          !e.transparent ||
          !this.transparent)
      )
        throw new Error(
          "BitmapData active BlurFilter only supports full transparent bitmaps of equal size at the origin",
        );
      if ((this._r1030f5f4e5c1b9(), e._r1030f5f4e5c1b9(), this._context == null)) {
        if (i instanceof h6) throw new Error("BitmapData BlurFilter requires a native canvas and renderer");
        return;
      }
      let s = e._r1450a5f82d6108(),
        o = Math.max(0, r.width | 0),
        d = Math.max(0, r.height | 0);
      if (s == null || o <= 0 || d <= 0) return;
      let c = this._r9f6301c67e9520(s, Math.max(0, r.x | 0), Math.max(0, r.y | 0), o, d);
      if (c == null) return;
      let f = i instanceof h6 ? _i9a0f6c96bf3f48(c, i) : (this._r02b662396e4f82(c, i) ?? c);
      if (f == null) throw new Error("BitmapData BlurFilter requires an initialized native renderer");
      (this._context.save(),
        this._context.beginPath(),
        this._context.rect(t.x, t.y, o, d),
        this._context.clip(),
        (this._context.globalCompositeOperation = "copy"),
        this._context.drawImage(f, t.x, t.y, o, d),
        this._context.restore(),
        this._r3784b889bc78b5(t.x, t.y, o, d));
    }
    _r1450a5f82d6108() {
      return (this._r1030f5f4e5c1b9(), this._ra6da44837ac2b0);
    }
    _r5c811681918c3a(e, r = null) {
      if (e instanceof a) {
        let t = e._r1450a5f82d6108();
        return t != null
          ? { surface: t, _r9db2f3b7734564: 0, _rfbc2da458d8574: 0, _rfa573fa72400cb: null }
          : null;
      }
      if (e instanceof _i3a5c6f457acdad) {
        let t = e.bitmapData?._r1450a5f82d6108() ?? null;
        return t != null
          ? { surface: t, _r9db2f3b7734564: 0, _rfbc2da458d8574: 0, _rfa573fa72400cb: null }
          : null;
      }
      if (e instanceof Pt) {
        let t = this._rc32d56ae62db76(e, r);
        return t != null
          ? { surface: t, _r9db2f3b7734564: 0, _rfbc2da458d8574: 0, _rfa573fa72400cb: null }
          : null;
      }
      return e instanceof Uc ? this._rb1019c691dce8f(e) : null;
    }
    _rb1019c691dce8f(e) {
      let r = _i16a41dd0d3e5f1()?.extract ?? null,
        t = e._r0203ab2933f479();
      if (r == null || t == null) return null;
      let i = t.visible,
        s = t.renderable;
      (i === !1 && (t.visible = !0), s === !1 && (t.renderable = !0));
      try {
        let o = t.getLocalBounds?.() ?? null,
          d = Number.isFinite(o?.x) ? (o?.x ?? 0) : 0,
          c = Number.isFinite(o?.y) ? (o?.y ?? 0) : 0,
          f = Math.max(1, Math.ceil(Number.isFinite(o?.width) ? (o?.width ?? 1) : Math.max(1, e.width))),
          l = Math.max(1, Math.ceil(Number.isFinite(o?.height) ? (o?.height ?? 1) : Math.max(1, e.height)));
        if (r.texture != null) {
          let _ = r.texture({ target: t, resolution: 1, antialias: !1, clearColor: "#00000000" });
          try {
            let h = _ia0a01f315b8c86(_);
            return h == null
              ? null
              : { surface: h, _r9db2f3b7734564: d, _rfbc2da458d8574: c, _rfa573fa72400cb: null };
          } finally {
            _.destroy(!0);
          }
        }
        let b = r.pixels?.(t) ?? null;
        if (b != null && b.length >= f * l * 4) {
          let _ = a._r0a52af92aacbc7(f, l, b),
            h = _._r1450a5f82d6108();
          if (h != null) return { surface: h, _r9db2f3b7734564: d, _rfbc2da458d8574: c, _rfa573fa72400cb: _ };
          _.dispose();
        }
        try {
          let _ = r.canvas?.({ target: t, resolution: 1, antialias: !1, clearColor: "#00000000" }) ?? null;
          if (_ != null)
            return { surface: _, _r9db2f3b7734564: d, _rfbc2da458d8574: c, _rfa573fa72400cb: null };
        } catch {
          return null;
        }
        return null;
      } finally {
        ((t.visible = i), (t.renderable = s));
      }
    }
    _rc32d56ae62db76(e, r = null) {
      return e._r468945e844d33f(r);
    }
    _re4ba7d3025a776(e, r) {
      if (this._r2647dd674d0181(r)) return e;
      if (this._rfa5c2cee13c6e4(r)) {
        let b = Math.max(1, Math.ceil(e.width || 1)),
          _ = Math.max(1, Math.ceil(e.height || 1)),
          h = _i295affcc6e4d03(b, _),
          p = _i5183d3213c4d99(h);
        return h == null || p == null
          ? e
          : (p.clearRect(0, 0, b, _),
            p.drawImage(e, 0, 0),
            (p.globalCompositeOperation = "source-in"),
            (p.fillStyle = _if7bbc31ff422c6(r.color, r.alphaMultiplier)),
            p.fillRect(0, 0, b, _),
            (p.globalCompositeOperation = "source-over"),
            h);
      }
      let t = r.redOffset !== 0 || r.greenOffset !== 0 || r.blueOffset !== 0,
        i = r.alphaOffset !== 0,
        s = Math.max(1, Math.ceil(e.width || 1)),
        o = Math.max(1, Math.ceil(e.height || 1)),
        d = _i295affcc6e4d03(s, o),
        c = _i5183d3213c4d99(d);
      if (d == null || c == null) return e;
      (c.clearRect(0, 0, s, o), c.drawImage(e, 0, 0));
      let f = r.redMultiplier !== 1 || r.greenMultiplier !== 1 || r.blueMultiplier !== 1,
        l = r.alphaMultiplier !== 1;
      if (
        (f &&
          ((c.globalCompositeOperation = "multiply"),
          (c.fillStyle = _if7bbc31ff422c6(
            ((_if24e00f85f3cd9(r.redMultiplier * 255) << 16) |
              (_if24e00f85f3cd9(r.greenMultiplier * 255) << 8) |
              _if24e00f85f3cd9(r.blueMultiplier * 255)) >>>
              0,
          )),
          c.fillRect(0, 0, s, o),
          (c.globalCompositeOperation = "destination-in"),
          (c.globalAlpha = 1),
          c.drawImage(e, 0, 0)),
        l &&
          ((c.globalCompositeOperation = "destination-in"),
          (c.fillStyle = `rgba(0, 0, 0, ${Math.max(0, Math.min(1, r.alphaMultiplier))})`),
          c.fillRect(0, 0, s, o)),
        t || i)
      ) {
        let b = _i295affcc6e4d03(s, o),
          _ = _i5183d3213c4d99(b);
        b != null &&
          _ != null &&
          (_.clearRect(0, 0, s, o),
          _.drawImage(e, 0, 0),
          (_.globalCompositeOperation = "source-in"),
          (_.fillStyle = _if7bbc31ff422c6(
            ((_if24e00f85f3cd9(r.redOffset) << 16) | (_if24e00f85f3cd9(r.greenOffset) << 8) | _if24e00f85f3cd9(r.blueOffset)) >>> 0,
            1,
          )),
          _.fillRect(0, 0, s, o),
          (c.globalCompositeOperation = "lighter"),
          c.drawImage(b, 0, 0));
      }
      return ((c.globalCompositeOperation = "source-over"), (c.globalAlpha = 1), d);
    }
    _r1d19034e4fad09(e, r, t = 1) {
      let i = Math.max(1, Math.ceil(e.width || 1)),
        s = Math.max(1, Math.ceil(e.height || 1)),
        o = _i295affcc6e4d03(i, s),
        d = _i5183d3213c4d99(o);
      return o == null || d == null
        ? null
        : (d.clearRect(0, 0, i, s),
          d.drawImage(e, 0, 0),
          (d.globalCompositeOperation = "source-in"),
          (d.fillStyle = _if7bbc31ff422c6(r, t)),
          d.fillRect(0, 0, i, s),
          (d.globalCompositeOperation = "source-over"),
          o);
    }
    _r9f6301c67e9520(e, r, t, i, s) {
      let o = Math.max(1, Math.ceil(i)),
        d = Math.max(1, Math.ceil(s)),
        c = _i295affcc6e4d03(o, d),
        f = _i5183d3213c4d99(c);
      if (c == null || f == null) return null;
      f.clearRect(0, 0, o, d);
      let l = Math.max(0, Math.floor(r)),
        b = Math.max(0, Math.floor(t)),
        _ = Math.max(0, -Math.floor(r)),
        h = Math.max(0, -Math.floor(t)),
        p = Math.max(0, Math.min(e.width - l, o - _)),
        m = Math.max(0, Math.min(e.height - b, d - h));
      return (p > 0 && m > 0 && f.drawImage(e, l, b, p, m, _, h, p, m), c);
    }
    _r535603d15b9cf9(e, r, t, i, s, o) {
      return this._context == null || i <= 0 || s <= 0
        ? !1
        : (this._context.save(),
          this._context.beginPath(),
          this._context.rect(r, t, i, s),
          this._context.clip(),
          (this._context.globalCompositeOperation = o),
          this._context.drawImage(e, r, t, i, s),
          this._context.restore(),
          this._r3784b889bc78b5(r, t, i, s),
          !0);
    }
    _r02b662396e4f82(e, r) {
      let t = Math.max(1, Math.ceil(e.width || 1)),
        i = Math.max(1, Math.ceil(e.height || 1)),
        s = _i295affcc6e4d03(t, i),
        o = _i5183d3213c4d99(s);
      if (s == null || o == null) return null;
      let d = Math.max(1, Math.round(r.quality * Math.max(1, r.strength))),
        c = Math.max(0, Math.max(r.blurX, r.blurY) / 2);
      (o.clearRect(0, 0, t, i),
        o.save(),
        (o.shadowColor = _if7bbc31ff422c6(r.color, r.alpha)),
        (o.shadowBlur = c),
        (o.shadowOffsetX = 0),
        (o.shadowOffsetY = 0));
      for (let f = 0; f < d; f++) o.drawImage(e, 0, 0);
      return (o.restore(), r.knockout || o.drawImage(e, 0, 0), s);
    }
    _r2691835dd27b49(e) {
      return (
        e.redMultiplier === 1 &&
        e.greenMultiplier === 1 &&
        e.blueMultiplier === 1 &&
        e.alphaMultiplier === 1 &&
        e.redOffset === 0 &&
        e.greenOffset === 0 &&
        e.blueOffset === 0 &&
        e.alphaOffset === 0
      );
    }
    _r2647dd674d0181(e) {
      return (
        e.redMultiplier === 1 &&
        e.greenMultiplier === 1 &&
        e.blueMultiplier === 1 &&
        e.redOffset === 0 &&
        e.greenOffset === 0 &&
        e.blueOffset === 0 &&
        e.alphaOffset === 0
      );
    }
    _rfa5c2cee13c6e4(e) {
      return (
        e.redMultiplier === 0 && e.greenMultiplier === 0 && e.blueMultiplier === 0 && e.alphaOffset === 0
      );
    }
    _r1030f5f4e5c1b9() {
      if (!this._r94c95e4a15173f || this._context == null || this._ra6da44837ac2b0 == null) return;
      let e = this._r3122dd4816594e();
      if (e == null) throw new Error("BitmapData surface image data is unavailable.");
      let r = this._rb857a6ae3ca950,
        t = this._r22ca9de5da6d3a,
        i = this._r42779cf4d07275 - r,
        s = this._rceec0b70d45128 - t;
      if (i <= 0 || s <= 0) {
        (this._r09cb2f0baa8dac(), (this._r94c95e4a15173f = !1));
        return;
      }
      (this._context.putImageData(e, 0, 0, r, t, i, s),
        (this._r94c95e4a15173f = !1),
        (this._r1565a4eb29606c = !1),
        (this._r8597e702d26207 = !0),
        this._r09cb2f0baa8dac(),
        this._reb3f53ff475beb());
    }
    _r6e01972d24519b() {
      if (this._context == null || !this._r1565a4eb29606c) return;
      let e = this._r4562493826d15d,
        r = this._r23ad3d9ceddfcd,
        t = this._rbdde46c2ba0fd5 - e,
        i = this._r53e611b8eba585 - r;
      if (t <= 0 || i <= 0) {
        (this._reb3f53ff475beb(), (this._r1565a4eb29606c = !1));
        return;
      }
      let s = this._context.getImageData(e, r, t, i),
        o = new Uint32Array(s.data.buffer);
      if (e === 0 && r === 0 && t === this.width && i === this.height) this._re7c3b0cb59ee66.set(o);
      else
        for (let d = 0; d < i; d++) {
          let c = d * t,
            f = (r + d) * this.width + e;
          this._re7c3b0cb59ee66.set(o.subarray(c, c + t), f);
        }
      ((this._r1565a4eb29606c = !1), this._reb3f53ff475beb());
    }
    _rb080a7cbfdc9cc() {
      !this._r8597e702d26207 ||
        !this._r94b022029d4c58 ||
        this._rdfd96b42db8414 === Texture.EMPTY ||
        (this._rdfd96b42db8414.source.update(), (this._r8597e702d26207 = !1));
    }
    _rfc4cc04efb1542() {
      this._r1565a4eb29606c && this._r6e01972d24519b();
    }
    _r3122dd4816594e() {
      return this._context == null
        ? null
        : this._rc15c5bf65dce50 != null
          ? this._rc15c5bf65dce50
          : ((this._rc15c5bf65dce50 = new ImageData(
              new Uint8ClampedArray(
                this._re7c3b0cb59ee66.buffer,
                this._re7c3b0cb59ee66.byteOffset,
                this._re7c3b0cb59ee66.byteLength,
              ),
              this.width,
              this.height,
            )),
            this._rc15c5bf65dce50);
    }
    _rb8c9bc730e6ef9(e, r, t, i) {
      (this._rfc4cc04efb1542(), e._rfc4cc04efb1542());
      let s = Math.max(0, r.x | 0),
        o = Math.max(0, r.y | 0),
        d = t.x | 0,
        c = t.y | 0,
        f = Math.max(0, r.width | 0),
        l = Math.max(0, r.height | 0);
      if (f <= 0 || l <= 0) return;
      if (d < 0) {
        let _ = -d;
        ((s += _), (f -= _), (d = 0));
      }
      if (c < 0) {
        let _ = -c;
        ((o += _), (l -= _), (c = 0));
      }
      if (
        ((f = Math.min(f, e.width - s, this.width - d)),
        (l = Math.min(l, e.height - o, this.height - c)),
        f <= 0 || l <= 0)
      )
        return;
      let b = i.matrix;
      for (let _ = 0; _ < l; _++) {
        let h = (o + _) * e.width,
          p = (c + _) * this.width;
        for (let m = 0; m < f; m++) {
          let v = e._re7c3b0cb59ee66[h + s + m] ?? 0,
            w = (v >>> 24) & 255,
            I = (v >>> 16) & 255,
            C = (v >>> 8) & 255,
            W = v & 255,
            R = _if24e00f85f3cd9(W * b[0] + C * b[1] + I * b[2] + w * b[3] + b[4]),
            T = _if24e00f85f3cd9(W * b[5] + C * b[6] + I * b[7] + w * b[8] + b[9]),
            S = _if24e00f85f3cd9(W * b[10] + C * b[11] + I * b[12] + w * b[13] + b[14]),
            z = this.transparent ? _if24e00f85f3cd9(W * b[15] + C * b[16] + I * b[17] + w * b[18] + b[19]) : 255;
          this._re7c3b0cb59ee66[p + d + m] = ((z << 24) | (S << 16) | (T << 8) | R) >>> 0;
        }
      }
      this._re8ff48e34af929(d, c, f, l);
    }
    _rad3c1b46ad538c(e, r) {
      let t = (e >>> 24) & 255;
      if (t <= 0) return this.transparent ? r : ((r & 16777215) | 4278190080) >>> 0;
      if (t >= 255 && this.transparent) return e;
      let i = this.transparent ? (r >>> 24) & 255 : 255,
        s = t / 255,
        o = i / 255,
        d = s + o * (1 - s);
      if (d <= 0) return 0;
      let c = e & 255,
        f = (e >>> 8) & 255,
        l = (e >>> 16) & 255,
        b = r & 255,
        _ = (r >>> 8) & 255,
        h = (r >>> 16) & 255,
        p = _if24e00f85f3cd9((c * s + b * o * (1 - s)) / d),
        m = _if24e00f85f3cd9((f * s + _ * o * (1 - s)) / d),
        v = _if24e00f85f3cd9((l * s + h * o * (1 - s)) / d);
      return (((this.transparent ? _if24e00f85f3cd9(d * 255) : 255) << 24) | (v << 16) | (m << 8) | p) >>> 0;
    }
    _r5b8ff57eb513a2(e) {
      let r = this.width * this.height;
      if (e.length < r)
        throw new Error("BitmapData native pixel source is smaller than the destination surface.");
      (this._re7c3b0cb59ee66.set(e.subarray(0, r)), this._r3959c40c9faf3a());
    }
    _recd5c9d08fdd11(e) {
      let r = this.width * this.height,
        t = r * 4;
      if (t <= 0) return;
      let i = this._rda994c357a9795(e, t);
      if (i != null) {
        (this._re7c3b0cb59ee66.set(new Uint32Array(i.buffer, i.byteOffset, r)), this._r3959c40c9faf3a());
        return;
      }
      let s = e,
        o = 0;
      for (let d = 0; d < r; d++) {
        let c = Number(s[o] ?? 0) & 255,
          f = Number(s[o + 1] ?? 0) & 255,
          l = Number(s[o + 2] ?? 0) & 255,
          b = Number(s[o + 3] ?? 0) & 255;
        ((this._re7c3b0cb59ee66[d] = ((b << 24) | (l << 16) | (f << 8) | c) >>> 0), (o += 4));
      }
      this._r3959c40c9faf3a();
    }
    _rda994c357a9795(e, r) {
      return e instanceof Uint8Array
        ? e.byteLength >= r && e.byteOffset % 4 === 0
          ? e.subarray(0, r)
          : null
        : e instanceof Uint8ClampedArray || e instanceof Int8Array
          ? e.byteLength >= r && e.byteOffset % 4 === 0
            ? new Uint8Array(e.buffer, e.byteOffset, r)
            : null
          : ArrayBuffer.isView(e) && e.byteLength >= r && e.byteOffset % 4 === 0
            ? new Uint8Array(e.buffer, e.byteOffset, r)
            : null;
    }
    _re8ff48e34af929(e, r, t, i) {
      let [s, o, d, c] = this._rd63b25e1e22d14(e, r, t, i);
      s >= d ||
        o >= c ||
        ((this._r94c95e4a15173f = !0),
        (this._r1565a4eb29606c = !1),
        (this._r8597e702d26207 = !1),
        this._r2c804a89305699(s, o, d, c),
        this._reb3f53ff475beb());
    }
    _rdaac9ec1f30efd(e, r) {
      ((this._r94c95e4a15173f = !0),
        (this._r1565a4eb29606c = !1),
        (this._r8597e702d26207 = !1),
        this._r42779cf4d07275 <= this._rb857a6ae3ca950 || this._rceec0b70d45128 <= this._r22ca9de5da6d3a
          ? ((this._rb857a6ae3ca950 = e),
            (this._r22ca9de5da6d3a = r),
            (this._r42779cf4d07275 = e + 1),
            (this._rceec0b70d45128 = r + 1))
          : ((this._rb857a6ae3ca950 = Math.min(this._rb857a6ae3ca950, e)),
            (this._r22ca9de5da6d3a = Math.min(this._r22ca9de5da6d3a, r)),
            (this._r42779cf4d07275 = Math.max(this._r42779cf4d07275, e + 1)),
            (this._rceec0b70d45128 = Math.max(this._rceec0b70d45128, r + 1))),
        this._reb3f53ff475beb());
    }
    _r3784b889bc78b5(e, r, t, i) {
      let [s, o, d, c] = this._rd63b25e1e22d14(e, r, t, i);
      s >= d ||
        o >= c ||
        ((this._r1565a4eb29606c = !0),
        (this._r94c95e4a15173f = !1),
        (this._r8597e702d26207 = !0),
        this._rbf3495d2ad733f(s, o, d, c),
        this._r09cb2f0baa8dac());
    }
    _rd63b25e1e22d14(e, r, t, i) {
      let s = Math.max(0, Math.floor(e)),
        o = Math.max(0, Math.floor(r)),
        d = Math.min(this.width, Math.ceil(e + t)),
        c = Math.min(this.height, Math.ceil(r + i));
      return [s, o, d, c];
    }
    _r2c804a89305699(e, r, t, i) {
      if (this._r42779cf4d07275 <= this._rb857a6ae3ca950 || this._rceec0b70d45128 <= this._r22ca9de5da6d3a) {
        ((this._rb857a6ae3ca950 = e),
          (this._r22ca9de5da6d3a = r),
          (this._r42779cf4d07275 = t),
          (this._rceec0b70d45128 = i));
        return;
      }
      ((this._rb857a6ae3ca950 = Math.min(this._rb857a6ae3ca950, e)),
        (this._r22ca9de5da6d3a = Math.min(this._r22ca9de5da6d3a, r)),
        (this._r42779cf4d07275 = Math.max(this._r42779cf4d07275, t)),
        (this._rceec0b70d45128 = Math.max(this._rceec0b70d45128, i)));
    }
    _rbf3495d2ad733f(e, r, t, i) {
      if (this._rbdde46c2ba0fd5 <= this._r4562493826d15d || this._r53e611b8eba585 <= this._r23ad3d9ceddfcd) {
        ((this._r4562493826d15d = e),
          (this._r23ad3d9ceddfcd = r),
          (this._rbdde46c2ba0fd5 = t),
          (this._r53e611b8eba585 = i));
        return;
      }
      ((this._r4562493826d15d = Math.min(this._r4562493826d15d, e)),
        (this._r23ad3d9ceddfcd = Math.min(this._r23ad3d9ceddfcd, r)),
        (this._rbdde46c2ba0fd5 = Math.max(this._rbdde46c2ba0fd5, t)),
        (this._r53e611b8eba585 = Math.max(this._r53e611b8eba585, i)));
    }
    _r3959c40c9faf3a() {
      ((this._r94c95e4a15173f = !0),
        (this._r1565a4eb29606c = !1),
        (this._r8597e702d26207 = !1),
        (this._rb857a6ae3ca950 = 0),
        (this._r22ca9de5da6d3a = 0),
        (this._r42779cf4d07275 = this.width),
        (this._rceec0b70d45128 = this.height),
        this._reb3f53ff475beb());
    }
    _r09cb2f0baa8dac() {
      ((this._rb857a6ae3ca950 = 0),
        (this._r22ca9de5da6d3a = 0),
        (this._r42779cf4d07275 = 0),
        (this._rceec0b70d45128 = 0));
    }
    _reb3f53ff475beb() {
      ((this._r4562493826d15d = 0),
        (this._r23ad3d9ceddfcd = 0),
        (this._rbdde46c2ba0fd5 = 0),
        (this._r53e611b8eba585 = 0));
    }
    _ra50fb415385339(e) {
      let r = this.transparent ? e & 4278190080 : 4278190080,
        t = (e >>> 16) & 255,
        i = e & 65280,
        s = (e & 255) << 16;
      return (r | s | i | t) >>> 0;
    }
    _r9382ed973ebc21(e) {
      let r = this.transparent ? e & 4278190080 : 4278190080,
        t = (e & 255) << 16,
        i = e & 65280,
        s = (e >>> 16) & 255;
      return (r | t | i | s) >>> 0;
    }
    getCanvasFillStyle(e) {
      let r = this.transparent ? ((e >>> 24) & 255) / 255 : 1,
        t = (e >>> 16) & 255,
        i = (e >>> 8) & 255,
        s = e & 255;
      return `rgba(${t}, ${i}, ${s}, ${r})`;
    }
  }
