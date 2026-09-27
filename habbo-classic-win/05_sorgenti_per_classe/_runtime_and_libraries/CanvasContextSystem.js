// Extracted from HabboAirLauncher.deobf.js, line 24099.

class {
        static {
          n(this, "CanvasContextSystem");
        }
        constructor(e) {
          ((this.activeResolution = 1),
            (this.smoothProperty = "imageSmoothingEnabled"),
            (this.blendModes = mapCanvasBlendModesToPixi()),
            (this._activeBlendMode = "normal"),
            (this._projTransform = null),
            (this._outerBlend = !1),
            (this._warnedBlendModes = new Set()),
            (this._renderer = e));
        }
        resolutionChange(e) {
          this.activeResolution = e;
        }
        init() {
          let e = this._renderer.background.alpha < 1;
          if (
            ((this.rootContext = this._renderer.canvas.getContext("2d", { alpha: e })),
            (this.activeContext = this.rootContext),
            (this.activeResolution = this._renderer.resolution),
            !this.rootContext.imageSmoothingEnabled)
          ) {
            let r = this.rootContext;
            r.webkitImageSmoothingEnabled
              ? (this.smoothProperty = "webkitImageSmoothingEnabled")
              : r.mozImageSmoothingEnabled
                ? (this.smoothProperty = "mozImageSmoothingEnabled")
                : r.oImageSmoothingEnabled
                  ? (this.smoothProperty = "oImageSmoothingEnabled")
                  : r.msImageSmoothingEnabled && (this.smoothProperty = "msImageSmoothingEnabled");
          }
        }
        setContextTransform(e, r, t, i) {
          let s = i
              ? Ze.IDENTITY
              : this._renderer.globalUniforms.globalUniformData?.worldTransformMatrix || Ze.IDENTITY,
            o = wdr;
          (o.copyFrom(s), o.append(e));
          let d = this._projTransform,
            c = this.activeResolution;
          if (((t = t || c), d)) {
            let f = Ze.shared;
            (f.copyFrom(o), f.prepend(d), (o = f));
          }
          r
            ? this.activeContext.setTransform(
                o.a * t,
                o.b * t,
                o.c * t,
                o.d * t,
                (o.tx * c) | 0,
                (o.ty * c) | 0,
              )
            : this.activeContext.setTransform(o.a * t, o.b * t, o.c * t, o.d * t, o.tx * c, o.ty * c);
        }
        clear(e, r) {
          let t = this.activeContext,
            i = this._renderer;
          if ((t.clearRect(0, 0, i.width, i.height), e)) {
            let s = na.shared.setValue(e);
            ((t.globalAlpha = r ?? s.alpha),
              (t.fillStyle = s.toHex()),
              t.fillRect(0, 0, i.width, i.height),
              (t.globalAlpha = 1));
          }
        }
        setBlendMode(e) {
          if (this._activeBlendMode === e) return;
          ((this._activeBlendMode = e), (this._outerBlend = !1));
          let r = this.blendModes[e];
          if (!r) {
            (this._warnedBlendModes.has(e) ||
              (console.warn(
                `CanvasRenderer: blend mode "${e}" is not supported in Canvas2D; falling back to "source-over".`,
              ),
              this._warnedBlendModes.add(e)),
              (this.activeContext.globalCompositeOperation = "source-over"));
            return;
          }
          this.activeContext.globalCompositeOperation = r;
        }
        destroy() {
          ((this.rootContext = null), (this.activeContext = null), this._warnedBlendModes.clear());
        }
      }
