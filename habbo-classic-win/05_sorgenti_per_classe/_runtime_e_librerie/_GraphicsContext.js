// Estratto da HabboAirLauncher.deobf.js, riga 22932.

class Bh extends Yn {
        static {
          n(this, "_GraphicsContext");
        }
        constructor() {
          (super(...arguments),
            (this._gpuData = Object.create(null)),
            (this.autoGarbageCollect = !0),
            (this._gcLastUsed = -1),
            (this.uid = uid_("graphicsContext")),
            (this.dirty = !0),
            (this.batchMode = "auto"),
            (this.instructions = []),
            (this.destroyed = !1),
            (this._activePath = new W_()),
            (this._transform = new Ze()),
            (this._fillStyle = { ...Bh.defaultFillStyle }),
            (this._strokeStyle = { ...Bh.defaultStrokeStyle }),
            (this._stateStack = []),
            (this._tick = 0),
            (this._bounds = new An()),
            (this._boundsDirty = !0));
        }
        clone() {
          let e = new Bh();
          return (
            (e.batchMode = this.batchMode),
            (e.instructions = this.instructions.slice()),
            (e._activePath = this._activePath.clone()),
            (e._transform = this._transform.clone()),
            (e._fillStyle = { ...this._fillStyle }),
            (e._strokeStyle = { ...this._strokeStyle }),
            (e._stateStack = this._stateStack.slice()),
            (e._bounds = this._bounds.clone()),
            (e._boundsDirty = !0),
            e
          );
        }
        get fillStyle() {
          return this._fillStyle;
        }
        set fillStyle(e) {
          this._fillStyle = toFillStyle(e, Bh.defaultFillStyle);
        }
        get strokeStyle() {
          return this._strokeStyle;
        }
        set strokeStyle(e) {
          this._strokeStyle = toStrokeStyle(e, Bh.defaultStrokeStyle);
        }
        setFillStyle(e) {
          return ((this._fillStyle = toFillStyle(e, Bh.defaultFillStyle)), this);
        }
        setStrokeStyle(e) {
          return ((this._strokeStyle = toFillStyle(e, Bh.defaultStrokeStyle)), this);
        }
        texture(e, r, t, i, s, o) {
          return (
            this.instructions.push({
              action: "texture",
              data: {
                image: e,
                dx: t || 0,
                dy: i || 0,
                dw: s || e.frame.width,
                dh: o || e.frame.height,
                transform: this._transform.clone(),
                alpha: this._fillStyle.alpha,
                style: r || r === 0 ? na.shared.setValue(r).toNumber() : 16777215,
              },
            }),
            this.onUpdate(),
            this
          );
        }
        beginPath() {
          return ((this._activePath = new W_()), this);
        }
        fill(e, r) {
          let t,
            i = this.instructions[this.instructions.length - 1];
          return (
            this._tick === 0 && i?.action === "stroke" ? (t = i.data.path) : (t = this._activePath.clone()),
            t
              ? (e != null &&
                  (r !== void 0 &&
                    typeof e == "number" &&
                    (Zr(
                      Va,
                      "GraphicsContext.fill(color, alpha) is deprecated, use GraphicsContext.fill({ color, alpha }) instead",
                    ),
                    (e = { color: e, alpha: r })),
                  (this._fillStyle = toFillStyle(e, Bh.defaultFillStyle))),
                this.instructions.push({ action: "fill", data: { style: this.fillStyle, path: t } }),
                this.onUpdate(),
                this._initNextPathLocation(),
                (this._tick = 0),
                this)
              : this
          );
        }
        _initNextPathLocation() {
          let { x: e, y: r } = this._activePath.getLastPoint(Ha.shared);
          (this._activePath.clear(), this._activePath.moveTo(e, r));
        }
        stroke(e) {
          let r,
            t = this.instructions[this.instructions.length - 1];
          return (
            this._tick === 0 && t?.action === "fill" ? (r = t.data.path) : (r = this._activePath.clone()),
            r
              ? (e != null && (this._strokeStyle = toStrokeStyle(e, Bh.defaultStrokeStyle)),
                this.instructions.push({ action: "stroke", data: { style: this.strokeStyle, path: r } }),
                this.onUpdate(),
                this._initNextPathLocation(),
                (this._tick = 0),
                this)
              : this
          );
        }
        cut() {
          for (let e = 0; e < 2; e++) {
            let r = this.instructions[this.instructions.length - 1 - e],
              t = this._activePath.clone();
            if (r && (r.action === "stroke" || r.action === "fill"))
              if (r.data.hole) r.data.hole.addPath(t);
              else {
                r.data.hole = t;
                break;
              }
          }
          return (this._initNextPathLocation(), this);
        }
        arc(e, r, t, i, s, o) {
          this._tick++;
          let d = this._transform;
          return (this._activePath.arc(d.a * e + d.c * r + d.tx, d.b * e + d.d * r + d.ty, t, i, s, o), this);
        }
        arcTo(e, r, t, i, s) {
          this._tick++;
          let o = this._transform;
          return (
            this._activePath.arcTo(
              o.a * e + o.c * r + o.tx,
              o.b * e + o.d * r + o.ty,
              o.a * t + o.c * i + o.tx,
              o.b * t + o.d * i + o.ty,
              s,
            ),
            this
          );
        }
        arcToSvg(e, r, t, i, s, o, d) {
          this._tick++;
          let c = this._transform;
          return (
            this._activePath.arcToSvg(e, r, t, i, s, c.a * o + c.c * d + c.tx, c.b * o + c.d * d + c.ty),
            this
          );
        }
        bezierCurveTo(e, r, t, i, s, o, d) {
          this._tick++;
          let c = this._transform;
          return (
            this._activePath.bezierCurveTo(
              c.a * e + c.c * r + c.tx,
              c.b * e + c.d * r + c.ty,
              c.a * t + c.c * i + c.tx,
              c.b * t + c.d * i + c.ty,
              c.a * s + c.c * o + c.tx,
              c.b * s + c.d * o + c.ty,
              d,
            ),
            this
          );
        }
        closePath() {
          return (this._tick++, this._activePath?.closePath(), this);
        }
        ellipse(e, r, t, i) {
          return (this._tick++, this._activePath.ellipse(e, r, t, i, this._transform.clone()), this);
        }
        circle(e, r, t) {
          return (this._tick++, this._activePath.circle(e, r, t, this._transform.clone()), this);
        }
        path(e) {
          return (this._tick++, this._activePath.addPath(e, this._transform.clone()), this);
        }
        lineTo(e, r) {
          this._tick++;
          let t = this._transform;
          return (this._activePath.lineTo(t.a * e + t.c * r + t.tx, t.b * e + t.d * r + t.ty), this);
        }
        moveTo(e, r) {
          this._tick++;
          let t = this._transform,
            i = this._activePath.instructions,
            s = t.a * e + t.c * r + t.tx,
            o = t.b * e + t.d * r + t.ty;
          return i.length === 1 && i[0].action === "moveTo"
            ? ((i[0].data[0] = s), (i[0].data[1] = o), this)
            : (this._activePath.moveTo(s, o), this);
        }
        quadraticCurveTo(e, r, t, i, s) {
          this._tick++;
          let o = this._transform;
          return (
            this._activePath.quadraticCurveTo(
              o.a * e + o.c * r + o.tx,
              o.b * e + o.d * r + o.ty,
              o.a * t + o.c * i + o.tx,
              o.b * t + o.d * i + o.ty,
              s,
            ),
            this
          );
        }
        rect(e, r, t, i) {
          return (this._tick++, this._activePath.rect(e, r, t, i, this._transform.clone()), this);
        }
        roundRect(e, r, t, i, s) {
          return (this._tick++, this._activePath.roundRect(e, r, t, i, s, this._transform.clone()), this);
        }
        poly(e, r) {
          return (this._tick++, this._activePath.poly(e, r, this._transform.clone()), this);
        }
        regularPoly(e, r, t, i, s = 0, o) {
          return (this._tick++, this._activePath.regularPoly(e, r, t, i, s, o), this);
        }
        roundPoly(e, r, t, i, s, o) {
          return (this._tick++, this._activePath.roundPoly(e, r, t, i, s, o), this);
        }
        roundShape(e, r, t, i) {
          return (this._tick++, this._activePath.roundShape(e, r, t, i), this);
        }
        filletRect(e, r, t, i, s) {
          return (this._tick++, this._activePath.filletRect(e, r, t, i, s), this);
        }
        chamferRect(e, r, t, i, s, o) {
          return (this._tick++, this._activePath.chamferRect(e, r, t, i, s, o), this);
        }
        star(e, r, t, i, s = 0, o = 0) {
          return (this._tick++, this._activePath.star(e, r, t, i, s, o, this._transform.clone()), this);
        }
        svg(e) {
          return (this._tick++, SVGParser(e, this), this);
        }
        restore() {
          let e = this._stateStack.pop();
          return (
            e &&
              ((this._transform = e.transform),
              (this._fillStyle = e.fillStyle),
              (this._strokeStyle = e.strokeStyle)),
            this
          );
        }
        save() {
          return (
            this._stateStack.push({
              transform: this._transform.clone(),
              fillStyle: { ...this._fillStyle },
              strokeStyle: { ...this._strokeStyle },
            }),
            this
          );
        }
        getTransform() {
          return this._transform;
        }
        resetTransform() {
          return (this._transform.identity(), this);
        }
        rotate(e) {
          return (this._transform.rotate(e), this);
        }
        scale(e, r = e) {
          return (this._transform.scale(e, r), this);
        }
        setTransform(e, r, t, i, s, o) {
          return e instanceof Ze
            ? (this._transform.set(e.a, e.b, e.c, e.d, e.tx, e.ty), this)
            : (this._transform.set(e, r, t, i, s, o), this);
        }
        transform(e, r, t, i, s, o) {
          return e instanceof Ze
            ? (this._transform.append(e), this)
            : (DYe.set(e, r, t, i, s, o), this._transform.append(DYe), this);
        }
        translate(e, r = e) {
          return (this._transform.translate(e, r), this);
        }
        clear() {
          return (
            this._activePath.clear(),
            (this.instructions.length = 0),
            this.resetTransform(),
            this.onUpdate(),
            this
          );
        }
        onUpdate() {
          ((this._boundsDirty = !0), (this.dirty = !0), this.emit("update", this, 16));
        }
        get bounds() {
          if (!this._boundsDirty) return this._bounds;
          this._boundsDirty = !1;
          let e = this._bounds;
          e.clear();
          for (let r = 0; r < this.instructions.length; r++) {
            let t = this.instructions[r],
              i = t.action;
            if (i === "fill") {
              let s = t.data;
              e.addBounds(s.path.bounds);
            } else if (i === "texture") {
              let s = t.data;
              e.addFrame(s.dx, s.dy, s.dx + s.dw, s.dy + s.dh, s.transform);
            }
            if (i === "stroke") {
              let s = t.data,
                o = s.style.alignment,
                d = s.style.width * (1 - o);
              s.style.join === "miter" && (d *= getMaxMiterRatio(s.path, s.style.miterLimit));
              let c = s.path.bounds;
              e.addFrame(c.minX - d, c.minY - d, c.maxX + d, c.maxY + d);
            }
          }
          return (e.isValid || e.set(0, 0, 0, 0), e);
        }
        containsPoint(e) {
          if (!this.bounds.containsPoint(e.x, e.y)) return !1;
          let r = this.instructions,
            t = !1;
          for (let i = 0; i < r.length; i++) {
            let s = r[i],
              o = s.data,
              d = o.path;
            if (!s.action || !d) continue;
            let c = o.style,
              f = d.shapePath.shapePrimitives;
            for (let l = 0; l < f.length; l++) {
              let b = f[l].shape;
              if (!c || !b) continue;
              let _ = f[l].transform,
                h = _ ? _.applyInverse(e, mdr) : e;
              if (s.action === "fill") t = b.contains(h.x, h.y);
              else {
                let m = c;
                t = b.strokeContains(h.x, h.y, m.width, m.alignment);
              }
              let p = o.hole;
              if (p) {
                let m = p.shapePath?.shapePrimitives;
                if (m) for (let v = 0; v < m.length; v++) m[v].shape.contains(h.x, h.y) && (t = !1);
              }
              if (t) return !0;
            }
          }
          return t;
        }
        unload() {
          this.emit("unload", this);
          for (let e in this._gpuData) this._gpuData[e]?.destroy();
          this._gpuData = Object.create(null);
        }
        destroy(e = !1) {
          if (this.destroyed) return;
          if (
            ((this.destroyed = !0),
            (this._stateStack.length = 0),
            (this._transform = null),
            this.unload(),
            this.emit("destroy", this),
            this.removeAllListeners(),
            typeof e == "boolean" ? e : e?.texture)
          ) {
            let t = typeof e == "boolean" ? e : e?.textureSource;
            (this._fillStyle.texture &&
              (this._fillStyle.fill && "uid" in this._fillStyle.fill
                ? this._fillStyle.fill.destroy()
                : this._fillStyle.texture.destroy(t)),
              this._strokeStyle.texture &&
                (this._strokeStyle.fill && "uid" in this._strokeStyle.fill
                  ? this._strokeStyle.fill.destroy()
                  : this._strokeStyle.texture.destroy(t)));
          }
          ((this._fillStyle = null),
            (this._strokeStyle = null),
            (this.instructions = null),
            (this._activePath = null),
            (this._bounds = null),
            (this._stateStack = null),
            (this.customShader = null),
            (this._transform = null));
        }
      }
