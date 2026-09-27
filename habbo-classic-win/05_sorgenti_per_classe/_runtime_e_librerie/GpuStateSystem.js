// Estratto da HabboAirLauncher.deobf.js, riga 15965.

class {
      static {
        n(this, "GpuStateSystem");
      }
      constructor() {
        ((this.defaultState = new ed()), (this.defaultState.blend = !0));
      }
      contextChange(e) {
        this.gpu = e;
      }
      getColorTargets(e, r) {
        let t = kf[e.blendMode] || kf.normal,
          i = [],
          s = { format: "bgra8unorm", writeMask: 0, blend: t };
        for (let o = 0; o < r; o++) i[o] = s;
        return i;
      }
      destroy() {
        this.gpu = null;
      }
    }
