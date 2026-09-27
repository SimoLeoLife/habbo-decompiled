// Estratto da HabboAirLauncher.deobf.js, riga 13938.

class nte {
      static {
        n(this, "_TextureGCSystem");
      }
      get count() {
        return this._renderer.tick;
      }
      get checkCount() {
        return this._checkCount;
      }
      set checkCount(e) {
        (Zr("8.15.0", "TextureGCSystem.run is deprecated, please use the GCSystem instead."),
          (this._checkCount = e));
      }
      get maxIdle() {
        return (this._renderer.gc.maxUnusedTime / 1e3) * 60;
      }
      set maxIdle(e) {
        (Zr("8.15.0", "TextureGCSystem.run is deprecated, please use the GCSystem instead."),
          (this._renderer.gc.maxUnusedTime = (e / 60) * 1e3));
      }
      get checkCountMax() {
        return Math.floor(this._renderer.gc._frequency / 1e3);
      }
      set checkCountMax(e) {
        Zr("8.15.0", "TextureGCSystem.run is deprecated, please use the GCSystem instead.");
      }
      get active() {
        return this._renderer.gc.enabled;
      }
      set active(e) {
        (Zr("8.15.0", "TextureGCSystem.run is deprecated, please use the GCSystem instead."),
          (this._renderer.gc.enabled = e));
      }
      constructor(e) {
        ((this._renderer = e), (this._checkCount = 0));
      }
      init(e) {
        (e.textureGCActive !== nte.defaultOptions.textureGCActive && (this.active = e.textureGCActive),
          e.textureGCMaxIdle !== nte.defaultOptions.textureGCMaxIdle && (this.maxIdle = e.textureGCMaxIdle),
          e.textureGCCheckCountMax !== nte.defaultOptions.textureGCCheckCountMax &&
            (this.checkCountMax = e.textureGCCheckCountMax));
      }
      run() {
        (Zr("8.15.0", "TextureGCSystem.run is deprecated, please use the GCSystem instead."),
          this._renderer.gc.run());
      }
      destroy() {
        this._renderer = null;
      }
    }
