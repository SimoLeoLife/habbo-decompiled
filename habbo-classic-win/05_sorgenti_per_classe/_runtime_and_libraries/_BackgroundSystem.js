// Extracted from HabboAirLauncher.deobf.js, line 13126.

class Eje {
      static {
        n(this, "_BackgroundSystem");
      }
      constructor() {
        ((this.clearBeforeRender = !0),
          (this._backgroundColor = new na(0)),
          (this.color = this._backgroundColor),
          (this.alpha = 1));
      }
      init(e) {
        ((e = { ...Eje.defaultOptions, ...e }),
          (this.clearBeforeRender = e.clearBeforeRender),
          (this.color = e.background || e.backgroundColor || this._backgroundColor),
          (this.alpha = e.backgroundAlpha),
          this._backgroundColor.setAlpha(e.backgroundAlpha));
      }
      get color() {
        return this._backgroundColor;
      }
      set color(e) {
        (na.shared.setValue(e).alpha < 1 &&
          this._backgroundColor.alpha === 1 &&
          warn_(
            "Cannot set a transparent background on an opaque canvas. To enable transparency, set backgroundAlpha < 1 when initializing your Application.",
          ),
          this._backgroundColor.setValue(e));
      }
      get alpha() {
        return this._backgroundColor.alpha;
      }
      set alpha(e) {
        this._backgroundColor.setAlpha(e);
      }
      get colorRgba() {
        return this._backgroundColor.toArray();
      }
      destroy() {}
    }
