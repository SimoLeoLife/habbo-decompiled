// Extracted from HabboAirLauncher.deobf.js, line 14391.

class {
      static {
        n(this, "GpuColorMaskSystem");
      }
      constructor(e) {
        ((this._colorMaskCache = 15), (this._renderer = e));
      }
      setMask(e) {
        this._colorMaskCache !== e && ((this._colorMaskCache = e), this._renderer.pipeline.setColorMask(e));
      }
      destroy() {
        ((this._renderer = null), (this._colorMaskCache = null));
      }
    }
