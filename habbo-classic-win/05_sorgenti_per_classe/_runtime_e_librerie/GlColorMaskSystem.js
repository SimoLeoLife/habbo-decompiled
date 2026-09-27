// Estratto da HabboAirLauncher.deobf.js, riga 17383.

class {
      static {
        n(this, "GlColorMaskSystem");
      }
      constructor(e) {
        ((this._colorMaskCache = 15), (this._renderer = e));
      }
      setMask(e) {
        this._colorMaskCache !== e &&
          ((this._colorMaskCache = e),
          this._renderer.gl.colorMask(!!(e & 8), !!(e & 4), !!(e & 2), !!(e & 1)));
      }
    }
