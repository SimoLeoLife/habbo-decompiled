// Estratto da HabboAirLauncher.deobf.js, riga 16666.

class {
      static {
        n(this, "GlBuffer");
      }
      constructor(e, r) {
        ((this._lastBindBaseLocation = -1),
          (this._lastBindCallId = -1),
          (this.buffer = e || null),
          (this.updateID = -1),
          (this.byteLength = -1),
          (this.type = r));
      }
      destroy() {
        ((this.buffer = null),
          (this.updateID = -1),
          (this.byteLength = -1),
          (this.type = -1),
          (this._lastBindBaseLocation = -1),
          (this._lastBindCallId = -1));
      }
    }
