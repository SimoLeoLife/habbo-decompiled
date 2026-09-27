// Extracted from HabboAirLauncher.deobf.js, line 21990.

class {
        static {
          n(this, "ShapePath");
        }
        constructor(e) {
          ((this.shapePrimitives = []),
            (this._currentPoly = null),
            (this._bounds = new An()),
            (this._graphicsPath2D = e),
            (this.signed = e.checkForHoles));
        }
        moveTo(e, r) {
          return (this.startPoly(e, r), this);
        }
        lineTo(e, r) {
          this._ensurePoly();
          let t = this._currentPoly.points,
            i = t[t.length - 2],
            s = t[t.length - 1];
          return ((i !== e || s !== r) && t.push(e, r), this);
        }
        arc(e, r, t, i, s, o) {
          this._ensurePoly(!1);
          let d = this._currentPoly.points;
          return (buildArc(d, e, r, t, i, s, o), this);
        }
        arcTo(e, r, t, i, s) {
          this._ensurePoly();
          let o = this._currentPoly.points;
          return (buildArcTo(o, e, r, t, i, s), this);
        }
        arcToSvg(e, r, t, i, s, o, d) {
          let c = this._currentPoly.points;
          return (buildArcToSvg(c, this._currentPoly.lastX, this._currentPoly.lastY, o, d, e, r, t, i, s), this);
        }
        bezierCurveTo(e, r, t, i, s, o, d) {
          this._ensurePoly();
          let c = this._currentPoly;
          return (buildAdaptiveBezier(this._currentPoly.points, c.lastX, c.lastY, e, r, t, i, s, o, d), this);
        }
        quadraticCurveTo(e, r, t, i, s) {
          this._ensurePoly();
          let o = this._currentPoly;
          return (buildAdaptiveQuadratic(this._currentPoly.points, o.lastX, o.lastY, e, r, t, i, s), this);
        }
        closePath() {
          return (this.endPoly(!0), this);
        }
        addPath(e, r) {
          (this.endPoly(), r && !r.isIdentity() && ((e = e.clone(!0)), e.transform(r)));
          let t = this.shapePrimitives,
            i = t.length;
          for (let s = 0; s < e.instructions.length; s++) {
            let o = e.instructions[s];
            this[o.action](...o.data);
          }
          if (e.checkForHoles && t.length - i > 1) {
            let s = null;
            for (let o = i; o < t.length; o++) {
              let d = t[o];
              if (d.shape.type === "polygon") {
                let c = d.shape,
                  f = s?.shape;
                f && f.containsPolygon(c)
                  ? (s.holes || (s.holes = []), s.holes.push(d), t.copyWithin(o, o + 1), t.length--, o--)
                  : (s = d);
              }
            }
          }
          return this;
        }
        finish(e = !1) {
          this.endPoly(e);
        }
        rect(e, r, t, i, s) {
          return (this.drawShape(new xa(e, r, t, i), s), this);
        }
        circle(e, r, t, i) {
          return (this.drawShape(new Pre(e, r, t), i), this);
        }
        poly(e, r, t) {
          let i = new Bx(e);
          return ((i.closePath = r), this.drawShape(i, t), this);
        }
        regularPoly(e, r, t, i, s = 0, o) {
          i = Math.max(i | 0, 3);
          let d = (-1 * Math.PI) / 2 + s,
            c = (Math.PI * 2) / i,
            f = [];
          for (let l = 0; l < i; l++) {
            let b = d - l * c;
            f.push(e + t * Math.cos(b), r + t * Math.sin(b));
          }
          return (this.poly(f, !0, o), this);
        }
        roundPoly(e, r, t, i, s, o = 0, d) {
          if (((i = Math.max(i | 0, 3)), s <= 0)) return this.regularPoly(e, r, t, i, o);
          let c = t * Math.sin(Math.PI / i) - 0.001;
          s = Math.min(s, c);
          let f = (-1 * Math.PI) / 2 + o,
            l = (Math.PI * 2) / i,
            b = ((i - 2) * Math.PI) / i / 2;
          for (let _ = 0; _ < i; _++) {
            let h = _ * l + f,
              p = e + t * Math.cos(h),
              m = r + t * Math.sin(h),
              v = h + Math.PI + b,
              w = h - Math.PI - b,
              I = p + s * Math.cos(v),
              C = m + s * Math.sin(v),
              W = p + s * Math.cos(w),
              R = m + s * Math.sin(w);
            (_ === 0 ? this.moveTo(I, C) : this.lineTo(I, C), this.quadraticCurveTo(p, m, W, R, d));
          }
          return this.closePath();
        }
        roundShape(e, r, t = !1, i) {
          return e.length < 3 ? this : (t ? roundedShapeQuadraticCurve(this, e, r, i) : roundedShapeArc(this, e, r), this.closePath());
        }
        filletRect(e, r, t, i, s) {
          if (s === 0) return this.rect(e, r, t, i);
          let o = Math.min(t, i) / 2,
            d = Math.min(o, Math.max(-o, s)),
            c = e + t,
            f = r + i,
            l = d < 0 ? -d : 0,
            b = Math.abs(d);
          return this.moveTo(e, r + b)
            .arcTo(e + l, r + l, e + b, r, b)
            .lineTo(c - b, r)
            .arcTo(c - l, r + l, c, r + b, b)
            .lineTo(c, f - b)
            .arcTo(c - l, f - l, e + t - b, f, b)
            .lineTo(e + b, f)
            .arcTo(e + l, f - l, e, f - b, b)
            .closePath();
        }
        chamferRect(e, r, t, i, s, o) {
          if (s <= 0) return this.rect(e, r, t, i);
          let d = Math.min(s, Math.min(t, i) / 2),
            c = e + t,
            f = r + i,
            l = [e + d, r, c - d, r, c, r + d, c, f - d, c - d, f, e + d, f, e, f - d, e, r + d];
          for (let b = l.length - 1; b >= 2; b -= 2)
            l[b] === l[b - 2] && l[b - 1] === l[b - 3] && l.splice(b - 1, 2);
          return this.poly(l, !0, o);
        }
        ellipse(e, r, t, i, s) {
          return (this.drawShape(new Sre(e, r, t, i), s), this);
        }
        roundRect(e, r, t, i, s, o) {
          return (this.drawShape(new Lre(e, r, t, i, s), o), this);
        }
        drawShape(e, r) {
          return (this.endPoly(), this.shapePrimitives.push({ shape: e, transform: r }), this);
        }
        startPoly(e, r) {
          let t = this._currentPoly;
          return (t && this.endPoly(), (t = new Bx()), t.points.push(e, r), (this._currentPoly = t), this);
        }
        endPoly(e = !1) {
          let r = this._currentPoly;
          return (
            r && r.points.length > 2 && ((r.closePath = e), this.shapePrimitives.push({ shape: r })),
            (this._currentPoly = null),
            this
          );
        }
        _ensurePoly(e = !0) {
          if (!this._currentPoly && ((this._currentPoly = new Bx()), e)) {
            let r = this.shapePrimitives[this.shapePrimitives.length - 1];
            if (r) {
              let t = r.shape.x,
                i = r.shape.y;
              if (r.transform && !r.transform.isIdentity()) {
                let s = r.transform,
                  o = t;
                ((t = s.a * t + s.c * i + s.tx), (i = s.b * o + s.d * i + s.ty));
              }
              this._currentPoly.points.push(t, i);
            } else this._currentPoly.points.push(0, 0);
          }
        }
        buildPath() {
          let e = this._graphicsPath2D;
          ((this.shapePrimitives.length = 0), (this._currentPoly = null));
          for (let r = 0; r < e.instructions.length; r++) {
            let t = e.instructions[r];
            this[t.action](...t.data);
          }
          this.finish();
        }
        get bounds() {
          let e = this._bounds;
          e.clear();
          let r = this.shapePrimitives;
          for (let t = 0; t < r.length; t++) {
            let i = r[t],
              s = i.shape.getBounds(cdr);
            i.transform ? e.addRect(s, i.transform) : e.addRect(s);
          }
          return e;
        }
      }
