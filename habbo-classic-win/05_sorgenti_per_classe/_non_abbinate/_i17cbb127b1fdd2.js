// Estratto da HabboAirLauncher.deobf.js, riga 281365.

class extends wc {
    static {
      n(this, "_i17cbb127b1fdd2");
    }
    _r75d966327701b1;
    constructor(e) {
      let t = e.style ?? e.source.style ?? Texture.EMPTY.source.style,
        i = new Zi({ uMaskMatrix: { value: new Ze(), type: "mat3x3<f32>" } }),
        s = fs.from({ vertex: BEt, fragment: AEt, name: "habbo-room-plane-mask-combine-filter" }),
        o = ls.from({
          vertex: { source: _ir, entryPoint: "mainVertex" },
          fragment: { source: _ir, entryPoint: "mainFragment" },
          name: "habbo-room-plane-mask-combine-filter",
        });
      (super({
        glProgram: s,
        gpuProgram: o,
        resources: { filterUniforms: i, uMaskTexture: e.source, uMaskSampler: t },
      }),
        (this._r75d966327701b1 = new Jt(e)),
        (this._r75d966327701b1.renderable = !1));
    }
    apply(e, r, t, i) {
      (e.calculateSpriteMatrix(this.resources.filterUniforms.uniforms.uMaskMatrix, this._r75d966327701b1),
        (this.resources.uMaskTexture = this._r75d966327701b1.texture.source),
        e.applyFilter(this, r, t, i));
    }
    destroy() {
      (this._r75d966327701b1.destroy(), super.destroy());
    }
  }
