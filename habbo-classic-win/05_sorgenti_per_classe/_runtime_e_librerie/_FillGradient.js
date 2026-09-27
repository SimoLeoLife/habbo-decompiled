// Estratto da HabboAirLauncher.deobf.js, riga 20218.

class MDe {
        static {
          n(this, "_FillGradient");
        }
        constructor(...e) {
          ((this.uid = uid_("fillGradient")), (this._tick = 0), (this.type = "linear"), (this.colorStops = []));
          let r = ensureGradientOptions(e);
          ((r = {
            ...(r.type === "radial" ? MDe.defaultRadialOptions : MDe.defaultLinearOptions),
            ...definedProps(r),
          }),
            (this._textureSize = r.textureSize),
            (this._wrapMode = r.wrapMode),
            r.type === "radial"
              ? ((this.center = r.center),
                (this.outerCenter = r.outerCenter ?? this.center),
                (this.innerRadius = r.innerRadius),
                (this.outerRadius = r.outerRadius),
                (this.scale = r.scale),
                (this.rotation = r.rotation))
              : ((this.start = r.start), (this.end = r.end)),
            (this.textureSpace = r.textureSpace),
            (this.type = r.type),
            r.colorStops.forEach((i) => {
              this.addColorStop(i.offset, i.color);
            }));
        }
        addColorStop(e, r) {
          return (this.colorStops.push({ offset: e, color: na.shared.setValue(r).toHexa() }), this);
        }
        buildLinearGradient() {
          if (this.texture) return;
          let { x: e, y: r } = this.start,
            { x: t, y: i } = this.end,
            s = t - e,
            o = i - r,
            d = s < 0 || o < 0;
          if (this._wrapMode === "clamp-to-edge") {
            if (s < 0) {
              let v = e;
              ((e = t), (t = v), (s *= -1));
            }
            if (o < 0) {
              let v = r;
              ((r = i), (i = v), (o *= -1));
            }
          }
          let c = this.colorStops.length ? this.colorStops : WXe,
            f = this._textureSize,
            { canvas: l, context: b } = getCanvas_(f, 1),
            _ = d
              ? b.createLinearGradient(this._textureSize, 0, 0, 0)
              : b.createLinearGradient(0, 0, this._textureSize, 0);
          (addColorStops(_, c),
            (b.fillStyle = _),
            b.fillRect(0, 0, f, 1),
            (this.texture = new Texture({ source: new ImageSource({ resource: l, addressMode: this._wrapMode }) })));
          let h = Math.sqrt(s * s + o * o),
            p = Math.atan2(o, s),
            m = new Ze();
          (m.scale(h / f, 1),
            m.rotate(p),
            m.translate(e, r),
            this.textureSpace === "local" && m.scale(f, f),
            (this.transform = m));
        }
        buildGradient() {
          (this.texture || this._tick++,
            this.type === "linear" ? this.buildLinearGradient() : this.buildRadialGradient());
        }
        buildRadialGradient() {
          if (this.texture) return;
          let e = this.colorStops.length ? this.colorStops : WXe,
            r = this._textureSize,
            { canvas: t, context: i } = getCanvas_(r, r),
            { x: s, y: o } = this.center,
            { x: d, y: c } = this.outerCenter,
            f = this.innerRadius,
            l = this.outerRadius,
            b = d - l,
            _ = c - l,
            h = r / (l * 2),
            p = (s - b) * h,
            m = (o - _) * h,
            v = i.createRadialGradient(p, m, f * h, (d - b) * h, (c - _) * h, l * h);
          (addColorStops(v, e),
            (i.fillStyle = e[e.length - 1].color),
            i.fillRect(0, 0, r, r),
            (i.fillStyle = v),
            i.translate(p, m),
            i.rotate(this.rotation),
            i.scale(1, this.scale),
            i.translate(-p, -m),
            i.fillRect(0, 0, r, r),
            (this.texture = new Texture({ source: new ImageSource({ resource: t, addressMode: this._wrapMode }) })));
          let w = new Ze();
          (w.scale(1 / h, 1 / h),
            w.translate(b, _),
            this.textureSpace === "local" && w.scale(r, r),
            (this.transform = w));
        }
        destroy() {
          (this.texture?.destroy(!0),
            (this.texture = null),
            (this.transform = null),
            (this.colorStops = []),
            (this.start = null),
            (this.end = null),
            (this.center = null),
            (this.outerCenter = null));
        }
        get styleKey() {
          return `fill-gradient-${this.uid}-${this._tick}`;
        }
      }
