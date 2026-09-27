// Estratto da HabboAirLauncher.deobf.js, riga 32239.

class OKe extends wc {
    static {
      n(this, "_GlowFilter");
    }
    constructor(e) {
      e = { ...OKe.DEFAULT_OPTIONS, ...e };
      let r = e.distance ?? 10,
        t = e.quality ?? 0.1,
        i = ls.from({
          vertex: { source: SKe, entryPoint: "mainVertex" },
          fragment: { source: LKe, entryPoint: "mainFragment" },
        }),
        s = fs.from({
          vertex: PKe,
          fragment: DKe.replace(/__ANGLE_STEP_SIZE__/gi, `${(1 / t / r).toFixed(7)}`).replace(
            /__DIST__/gi,
            `${r.toFixed(0)}.0`,
          ),
          name: "glow-filter",
        });
      (super({
        gpuProgram: i,
        glProgram: s,
        resources: {
          glowUniforms: {
            uDistance: { value: r, type: "f32" },
            uStrength: { value: [e.innerStrength, e.outerStrength], type: "vec2<f32>" },
            uColor: { value: new Float32Array(3), type: "vec3<f32>" },
            uAlpha: { value: e.alpha, type: "f32" },
            uQuality: { value: t, type: "f32" },
            uKnockout: { value: (e?.knockout ?? !1) ? 1 : 0, type: "f32" },
          },
        },
        padding: r,
      }),
        yLe(this, "uniforms"),
        yLe(this, "_color"),
        (this.uniforms = this.resources.glowUniforms.uniforms),
        (this._color = new na()),
        (this.color = e.color ?? 16777215));
    }
    get distance() {
      return this.uniforms.uDistance;
    }
    set distance(e) {
      this.uniforms.uDistance = this.padding = e;
    }
    get innerStrength() {
      return this.uniforms.uStrength[0];
    }
    set innerStrength(e) {
      this.uniforms.uStrength[0] = e;
    }
    get outerStrength() {
      return this.uniforms.uStrength[1];
    }
    set outerStrength(e) {
      this.uniforms.uStrength[1] = e;
    }
    get color() {
      return this._color.value;
    }
    set color(e) {
      this._color.setValue(e);
      let [r, t, i] = this._color.toArray();
      ((this.uniforms.uColor[0] = r), (this.uniforms.uColor[1] = t), (this.uniforms.uColor[2] = i));
    }
    get alpha() {
      return this.uniforms.uAlpha;
    }
    set alpha(e) {
      this.uniforms.uAlpha = e;
    }
    get quality() {
      return this.uniforms.uQuality;
    }
    set quality(e) {
      this.uniforms.uQuality = e;
    }
    get knockout() {
      return this.uniforms.uKnockout === 1;
    }
    set knockout(e) {
      this.uniforms.uKnockout = e ? 1 : 0;
    }
  }
