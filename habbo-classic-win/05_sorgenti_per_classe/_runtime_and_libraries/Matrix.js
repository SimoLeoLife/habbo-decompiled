// Extracted from HabboAirLauncher.deobf.js, line 1107.

class a {
      static {
        n(this, "Matrix");
      }
      constructor(e = 1, r = 0, t = 0, i = 1, s = 0, o = 0) {
        ((this.array = null),
          (this.a = e),
          (this.b = r),
          (this.c = t),
          (this.d = i),
          (this.tx = s),
          (this.ty = o));
      }
      fromArray(e) {
        ((this.a = e[0]),
          (this.b = e[1]),
          (this.c = e[3]),
          (this.d = e[4]),
          (this.tx = e[2]),
          (this.ty = e[5]));
      }
      set(e, r, t, i, s, o) {
        return ((this.a = e), (this.b = r), (this.c = t), (this.d = i), (this.tx = s), (this.ty = o), this);
      }
      toArray(e, r) {
        this.array || (this.array = new Float32Array(9));
        let t = r || this.array;
        return (
          e
            ? ((t[0] = this.a),
              (t[1] = this.b),
              (t[2] = 0),
              (t[3] = this.c),
              (t[4] = this.d),
              (t[5] = 0),
              (t[6] = this.tx),
              (t[7] = this.ty),
              (t[8] = 1))
            : ((t[0] = this.a),
              (t[1] = this.c),
              (t[2] = this.tx),
              (t[3] = this.b),
              (t[4] = this.d),
              (t[5] = this.ty),
              (t[6] = 0),
              (t[7] = 0),
              (t[8] = 1)),
          t
        );
      }
      apply(e, r) {
        r = r || new Ha();
        let t = e.x,
          i = e.y;
        return ((r.x = this.a * t + this.c * i + this.tx), (r.y = this.b * t + this.d * i + this.ty), r);
      }
      applyInverse(e, r) {
        r = r || new Ha();
        let t = this.a,
          i = this.b,
          s = this.c,
          o = this.d,
          d = this.tx,
          c = this.ty,
          f = 1 / (t * o + s * -i),
          l = e.x,
          b = e.y;
        return (
          (r.x = o * f * l + -s * f * b + (c * s - d * o) * f),
          (r.y = t * f * b + -i * f * l + (-c * t + d * i) * f),
          r
        );
      }
      translate(e, r) {
        return ((this.tx += e), (this.ty += r), this);
      }
      scale(e, r) {
        return (
          (this.a *= e),
          (this.d *= r),
          (this.c *= e),
          (this.b *= r),
          (this.tx *= e),
          (this.ty *= r),
          this
        );
      }
      rotate(e) {
        let r = Math.cos(e),
          t = Math.sin(e),
          i = this.a,
          s = this.c,
          o = this.tx;
        return (
          (this.a = i * r - this.b * t),
          (this.b = i * t + this.b * r),
          (this.c = s * r - this.d * t),
          (this.d = s * t + this.d * r),
          (this.tx = o * r - this.ty * t),
          (this.ty = o * t + this.ty * r),
          this
        );
      }
      append(e) {
        let r = this.a,
          t = this.b,
          i = this.c,
          s = this.d;
        return (
          (this.a = e.a * r + e.b * i),
          (this.b = e.a * t + e.b * s),
          (this.c = e.c * r + e.d * i),
          (this.d = e.c * t + e.d * s),
          (this.tx = e.tx * r + e.ty * i + this.tx),
          (this.ty = e.tx * t + e.ty * s + this.ty),
          this
        );
      }
      appendFrom(e, r) {
        let t = e.a,
          i = e.b,
          s = e.c,
          o = e.d,
          d = e.tx,
          c = e.ty,
          f = r.a,
          l = r.b,
          b = r.c,
          _ = r.d;
        return (
          (this.a = t * f + i * b),
          (this.b = t * l + i * _),
          (this.c = s * f + o * b),
          (this.d = s * l + o * _),
          (this.tx = d * f + c * b + r.tx),
          (this.ty = d * l + c * _ + r.ty),
          this
        );
      }
      setTransform(e, r, t, i, s, o, d, c, f) {
        return (
          (this.a = Math.cos(d + f) * s),
          (this.b = Math.sin(d + f) * s),
          (this.c = -Math.sin(d - c) * o),
          (this.d = Math.cos(d - c) * o),
          (this.tx = e - (t * this.a + i * this.c)),
          (this.ty = r - (t * this.b + i * this.d)),
          this
        );
      }
      prepend(e) {
        let r = this.tx;
        if (e.a !== 1 || e.b !== 0 || e.c !== 0 || e.d !== 1) {
          let t = this.a,
            i = this.c;
          ((this.a = t * e.a + this.b * e.c),
            (this.b = t * e.b + this.b * e.d),
            (this.c = i * e.a + this.d * e.c),
            (this.d = i * e.b + this.d * e.d));
        }
        return ((this.tx = r * e.a + this.ty * e.c + e.tx), (this.ty = r * e.b + this.ty * e.d + e.ty), this);
      }
      decompose(e) {
        let r = this.a,
          t = this.b,
          i = this.c,
          s = this.d,
          o = e.pivot,
          d = -Math.atan2(-i, s),
          c = Math.atan2(t, r),
          f = Math.abs(d + c);
        return (
          f < 1e-5 || Math.abs(iHe - f) < 1e-5
            ? ((e.rotation = c), (e.skew.x = e.skew.y = 0))
            : ((e.rotation = 0), (e.skew.x = d), (e.skew.y = c)),
          (e.scale.x = Math.sqrt(r * r + t * t)),
          (e.scale.y = Math.sqrt(i * i + s * s)),
          (e.position.x = this.tx + (o.x * r + o.y * i)),
          (e.position.y = this.ty + (o.x * t + o.y * s)),
          e
        );
      }
      invert() {
        let e = this.a,
          r = this.b,
          t = this.c,
          i = this.d,
          s = this.tx,
          o = e * i - r * t;
        return (
          (this.a = i / o),
          (this.b = -r / o),
          (this.c = -t / o),
          (this.d = e / o),
          (this.tx = (t * this.ty - i * s) / o),
          (this.ty = -(e * this.ty - r * s) / o),
          this
        );
      }
      isIdentity() {
        return this.a === 1 && this.b === 0 && this.c === 0 && this.d === 1 && this.tx === 0 && this.ty === 0;
      }
      identity() {
        return ((this.a = 1), (this.b = 0), (this.c = 0), (this.d = 1), (this.tx = 0), (this.ty = 0), this);
      }
      clone() {
        let e = new a();
        return (
          (e.a = this.a),
          (e.b = this.b),
          (e.c = this.c),
          (e.d = this.d),
          (e.tx = this.tx),
          (e.ty = this.ty),
          e
        );
      }
      copyTo(e) {
        return (
          (e.a = this.a),
          (e.b = this.b),
          (e.c = this.c),
          (e.d = this.d),
          (e.tx = this.tx),
          (e.ty = this.ty),
          e
        );
      }
      copyFrom(e) {
        return (
          (this.a = e.a),
          (this.b = e.b),
          (this.c = e.c),
          (this.d = e.d),
          (this.tx = e.tx),
          (this.ty = e.ty),
          this
        );
      }
      equals(e) {
        return (
          e.a === this.a &&
          e.b === this.b &&
          e.c === this.c &&
          e.d === this.d &&
          e.tx === this.tx &&
          e.ty === this.ty
        );
      }
      toString() {
        return `[pixi.js:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`;
      }
      static get IDENTITY() {
        return Onr.identity();
      }
      static get shared() {
        return Nnr.identity();
      }
    }
