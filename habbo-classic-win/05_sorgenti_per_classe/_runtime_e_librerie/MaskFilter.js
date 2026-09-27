// Estratto da HabboAirLauncher.deobf.js, riga 12802.

class extends wc {
      static {
        n(this, "MaskFilter");
      }
      constructor(e) {
        let { sprite: r, ...t } = e,
          i = new TextureMatrix(r.texture),
          s = new Zi({
            uFilterMatrix: { value: new Ze(), type: "mat3x3<f32>" },
            uMaskClamp: { value: i.uClampFrame, type: "vec4<f32>" },
            uAlpha: { value: 1, type: "f32" },
            uInverse: { value: e.inverse ? 1 : 0, type: "f32" },
          }),
          o = ls.from({
            vertex: { source: SSe, entryPoint: "mainVertex" },
            fragment: { source: SSe, entryPoint: "mainFragment" },
          }),
          d = fs.from({ vertex: vje, fragment: mje, name: "mask-filter" });
        (super({
          ...t,
          gpuProgram: o,
          glProgram: d,
          clipToViewport: !1,
          resources: { filterUniforms: s, uMaskTexture: r.texture.source },
        }),
          (this.sprite = r),
          (this._textureMatrix = i));
      }
      set inverse(e) {
        this.resources.filterUniforms.uniforms.uInverse = e ? 1 : 0;
      }
      get inverse() {
        return this.resources.filterUniforms.uniforms.uInverse === 1;
      }
      apply(e, r, t, i) {
        ((this._textureMatrix.texture = this.sprite.texture),
          e
            .calculateSpriteMatrix(this.resources.filterUniforms.uniforms.uFilterMatrix, this.sprite)
            .prepend(this._textureMatrix.mapCoord),
          (this.resources.uMaskTexture = this.sprite.texture.source),
          e.applyFilter(this, r, t, i));
      }
    }
