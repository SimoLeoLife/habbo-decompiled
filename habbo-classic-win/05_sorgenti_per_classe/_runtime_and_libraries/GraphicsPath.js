// Extracted from HabboAirLauncher.deobf.js, line 22206.

class a {
      static {
        n(this, "GraphicsPath");
      }
      constructor(e, r = !1) {
        ((this.instructions = []),
          (this.uid = uid_("graphicsPath")),
          (this._dirty = !0),
          (this.checkForHoles = r),
          typeof e == "string" ? parseSVGPath(e, this) : (this.instructions = e?.slice() ?? []));
      }
      get shapePath() {
        return (
          this._shapePath || (this._shapePath = new ShapePath(this)),
          this._dirty && ((this._dirty = !1), this._shapePath.buildPath()),
          this._shapePath
        );
      }
      addPath(e, r) {
        return (
          (e = e.clone()),
          this.instructions.push({ action: "addPath", data: [e, r] }),
          (this._dirty = !0),
          this
        );
      }
      arc(...e) {
        return (this.instructions.push({ action: "arc", data: e }), (this._dirty = !0), this);
      }
      arcTo(...e) {
        return (this.instructions.push({ action: "arcTo", data: e }), (this._dirty = !0), this);
      }
      arcToSvg(...e) {
        return (this.instructions.push({ action: "arcToSvg", data: e }), (this._dirty = !0), this);
      }
      bezierCurveTo(...e) {
        return (this.instructions.push({ action: "bezierCurveTo", data: e }), (this._dirty = !0), this);
      }
      bezierCurveToShort(e, r, t, i, s) {
        let o = this.instructions[this.instructions.length - 1],
          d = this.getLastPoint(Ha.shared),
          c = 0,
          f = 0;
        if (!o || o.action !== "bezierCurveTo") ((c = d.x), (f = d.y));
        else {
          ((c = o.data[2]), (f = o.data[3]));
          let l = d.x,
            b = d.y;
          ((c = l + (l - c)), (f = b + (b - f)));
        }
        return (
          this.instructions.push({ action: "bezierCurveTo", data: [c, f, e, r, t, i, s] }),
          (this._dirty = !0),
          this
        );
      }
      closePath() {
        return (this.instructions.push({ action: "closePath", data: [] }), (this._dirty = !0), this);
      }
      ellipse(...e) {
        return (this.instructions.push({ action: "ellipse", data: e }), (this._dirty = !0), this);
      }
      lineTo(...e) {
        return (this.instructions.push({ action: "lineTo", data: e }), (this._dirty = !0), this);
      }
      moveTo(...e) {
        return (this.instructions.push({ action: "moveTo", data: e }), this);
      }
      quadraticCurveTo(...e) {
        return (this.instructions.push({ action: "quadraticCurveTo", data: e }), (this._dirty = !0), this);
      }
      quadraticCurveToShort(e, r, t) {
        let i = this.instructions[this.instructions.length - 1],
          s = this.getLastPoint(Ha.shared),
          o = 0,
          d = 0;
        if (!i || i.action !== "quadraticCurveTo") ((o = s.x), (d = s.y));
        else {
          ((o = i.data[0]), (d = i.data[1]));
          let c = s.x,
            f = s.y;
          ((o = c + (c - o)), (d = f + (f - d)));
        }
        return (
          this.instructions.push({ action: "quadraticCurveTo", data: [o, d, e, r, t] }),
          (this._dirty = !0),
          this
        );
      }
      rect(e, r, t, i, s) {
        return (this.instructions.push({ action: "rect", data: [e, r, t, i, s] }), (this._dirty = !0), this);
      }
      circle(e, r, t, i) {
        return (this.instructions.push({ action: "circle", data: [e, r, t, i] }), (this._dirty = !0), this);
      }
      roundRect(...e) {
        return (this.instructions.push({ action: "roundRect", data: e }), (this._dirty = !0), this);
      }
      poly(...e) {
        return (this.instructions.push({ action: "poly", data: e }), (this._dirty = !0), this);
      }
      regularPoly(...e) {
        return (this.instructions.push({ action: "regularPoly", data: e }), (this._dirty = !0), this);
      }
      roundPoly(...e) {
        return (this.instructions.push({ action: "roundPoly", data: e }), (this._dirty = !0), this);
      }
      roundShape(...e) {
        return (this.instructions.push({ action: "roundShape", data: e }), (this._dirty = !0), this);
      }
      filletRect(...e) {
        return (this.instructions.push({ action: "filletRect", data: e }), (this._dirty = !0), this);
      }
      chamferRect(...e) {
        return (this.instructions.push({ action: "chamferRect", data: e }), (this._dirty = !0), this);
      }
      star(e, r, t, i, s, o, d) {
        s || (s = i / 2);
        let c = (-1 * Math.PI) / 2 + o,
          f = t * 2,
          l = (Math.PI * 2) / f,
          b = [];
        for (let _ = 0; _ < f; _++) {
          let h = _ % 2 ? s : i,
            p = _ * l + c;
          b.push(e + h * Math.cos(p), r + h * Math.sin(p));
        }
        return (this.poly(b, !0, d), this);
      }
      clone(e = !1) {
        let r = new a();
        if (((r.checkForHoles = this.checkForHoles), !e)) r.instructions = this.instructions.slice();
        else
          for (let t = 0; t < this.instructions.length; t++) {
            let i = this.instructions[t];
            r.instructions.push({ action: i.action, data: i.data.slice() });
          }
        return r;
      }
      clear() {
        return ((this.instructions.length = 0), (this._dirty = !0), this);
      }
      transform(e) {
        if (e.isIdentity()) return this;
        let r = e.a,
          t = e.b,
          i = e.c,
          s = e.d,
          o = e.tx,
          d = e.ty,
          c = 0,
          f = 0,
          l = 0,
          b = 0,
          _ = 0,
          h = 0,
          p = 0,
          m = 0;
        for (let v = 0; v < this.instructions.length; v++) {
          let w = this.instructions[v],
            I = w.data;
          switch (w.action) {
            case "moveTo":
            case "lineTo":
              ((c = I[0]), (f = I[1]), (I[0] = r * c + i * f + o), (I[1] = t * c + s * f + d));
              break;
            case "bezierCurveTo":
              ((l = I[0]),
                (b = I[1]),
                (_ = I[2]),
                (h = I[3]),
                (c = I[4]),
                (f = I[5]),
                (I[0] = r * l + i * b + o),
                (I[1] = t * l + s * b + d),
                (I[2] = r * _ + i * h + o),
                (I[3] = t * _ + s * h + d),
                (I[4] = r * c + i * f + o),
                (I[5] = t * c + s * f + d));
              break;
            case "quadraticCurveTo":
              ((l = I[0]),
                (b = I[1]),
                (c = I[2]),
                (f = I[3]),
                (I[0] = r * l + i * b + o),
                (I[1] = t * l + s * b + d),
                (I[2] = r * c + i * f + o),
                (I[3] = t * c + s * f + d));
              break;
            case "arcToSvg":
              ((c = I[5]),
                (f = I[6]),
                (p = I[0]),
                (m = I[1]),
                (I[0] = r * p + i * m),
                (I[1] = t * p + s * m),
                (I[5] = r * c + i * f + o),
                (I[6] = t * c + s * f + d));
              break;
            case "circle":
              I[4] = adjustTransform(I[3], e);
              break;
            case "rect":
              I[4] = adjustTransform(I[4], e);
              break;
            case "ellipse":
              I[8] = adjustTransform(I[8], e);
              break;
            case "roundRect":
              I[5] = adjustTransform(I[5], e);
              break;
            case "addPath":
              I[0].transform(e);
              break;
            case "poly":
              I[2] = adjustTransform(I[2], e);
              break;
            default:
              warn_("unknown transform action", w.action);
              break;
          }
        }
        return ((this._dirty = !0), this);
      }
      get bounds() {
        return this.shapePath.bounds;
      }
      getLastPoint(e) {
        let r = this.instructions.length - 1,
          t = this.instructions[r];
        if (!t) return ((e.x = 0), (e.y = 0), e);
        for (; t.action === "closePath";) {
          if ((r--, r < 0)) return ((e.x = 0), (e.y = 0), e);
          t = this.instructions[r];
        }
        switch (t.action) {
          case "moveTo":
          case "lineTo":
            ((e.x = t.data[0]), (e.y = t.data[1]));
            break;
          case "quadraticCurveTo":
            ((e.x = t.data[2]), (e.y = t.data[3]));
            break;
          case "bezierCurveTo":
            ((e.x = t.data[4]), (e.y = t.data[5]));
            break;
          case "arc":
          case "arcToSvg":
            ((e.x = t.data[5]), (e.y = t.data[6]));
            break;
          case "addPath":
            t.data[0].getLastPoint(e);
            break;
        }
        return e;
      }
    }
