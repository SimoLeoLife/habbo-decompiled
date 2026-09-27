// Estratto da HabboAirLauncher.deobf.js, riga 4376.

class {
      static {
        n(this, "CanvasObserver");
      }
      constructor(e) {
        ((this._lastTransform = ""),
          (this._observer = null),
          (this._tickerAttached = !1),
          (this.updateTranslation = () => {
            if (!this._canvas) return;
            let r = this._canvas.getBoundingClientRect(),
              t = this._canvas.width,
              i = this._canvas.height,
              s = (r.width / t) * this._renderer.resolution,
              o = (r.height / i) * this._renderer.resolution,
              d = r.left,
              c = r.top,
              f = `translate(${d}px, ${c}px) scale(${s}, ${o})`;
            f !== this._lastTransform && ((this._domElement.style.transform = f), (this._lastTransform = f));
          }),
          (this._domElement = e.domElement),
          (this._renderer = e.renderer),
          !(globalThis.OffscreenCanvas && this._renderer.canvas instanceof OffscreenCanvas) &&
            ((this._canvas = this._renderer.canvas), this._attachObserver()));
      }
      get canvas() {
        return this._canvas;
      }
      ensureAttached() {
        !this._domElement.parentNode &&
          this._canvas.parentNode &&
          (this._canvas.parentNode.appendChild(this._domElement), this.updateTranslation());
      }
      _attachObserver() {
        "ResizeObserver" in globalThis
          ? (this._observer && (this._observer.disconnect(), (this._observer = null)),
            (this._observer = new ResizeObserver((e) => {
              for (let r of e) {
                if (r.target !== this._canvas) continue;
                let t = this.canvas.width,
                  i = this.canvas.height,
                  s = (r.contentRect.width / t) * this._renderer.resolution,
                  o = (r.contentRect.height / i) * this._renderer.resolution;
                (this._lastScaleX !== s || this._lastScaleY !== o) &&
                  (this.updateTranslation(), (this._lastScaleX = s), (this._lastScaleY = o));
              }
            })),
            this._observer.observe(this._canvas))
          : this._tickerAttached || vc.shared.add(this.updateTranslation, this, wh.HIGH);
      }
      destroy() {
        (this._observer
          ? (this._observer.disconnect(), (this._observer = null))
          : this._tickerAttached && vc.shared.remove(this.updateTranslation),
          (this._domElement = null),
          (this._renderer = null),
          (this._canvas = null),
          (this._tickerAttached = !1),
          (this._lastTransform = ""),
          (this._lastScaleX = null),
          (this._lastScaleY = null));
      }
    }
