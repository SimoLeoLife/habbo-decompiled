// Extracted from HabboAirLauncher.deobf.js, line 8705.

class JPe extends Qd {
      static {
        n(this, "_Filter");
      }
      constructor(e) {
        ((e = { ...JPe.defaultOptions, ...e }),
          super(e),
          (this.enabled = !0),
          (this._state = ed.for2d()),
          (this.blendMode = e.blendMode),
          (this.padding = e.padding),
          typeof e.antialias == "boolean"
            ? (this.antialias = e.antialias ? "on" : "off")
            : (this.antialias = e.antialias),
          (this.resolution = e.resolution),
          (this.blendRequired = e.blendRequired),
          (this.clipToViewport = e.clipToViewport),
          this.addResource("uTexture", 0, 1),
          e.blendRequired && this.addResource("uBackTexture", 0, 3));
      }
      apply(e, r, t, i) {
        e.applyFilter(this, r, t, i);
      }
      get blendMode() {
        return this._state.blendMode;
      }
      set blendMode(e) {
        this._state.blendMode = e;
      }
      static from(e) {
        let { gpu: r, gl: t, ...i } = e,
          s,
          o;
        return (r && (s = ls.from(r)), t && (o = fs.from(t)), new JPe({ gpuProgram: s, glProgram: o, ...i }));
      }
    }
