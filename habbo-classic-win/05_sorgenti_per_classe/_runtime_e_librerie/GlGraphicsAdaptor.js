// Estratto da HabboAirLauncher.deobf.js, riga 16526.

class {
      static {
        n(this, "GlGraphicsAdaptor");
      }
      contextChange(e) {
        let r = new Zi({
            uColor: { value: new Float32Array([1, 1, 1, 1]), type: "vec4<f32>" },
            uTransformMatrix: { value: new Ze(), type: "mat3x3<f32>" },
            uRound: { value: 0, type: "f32" },
          }),
          t = e.limits.maxBatchableTextures,
          i = compileHighShaderGlProgram({ name: "graphics", bits: [zre, generateTextureBatchBitGl(t), Nx, $5] });
        this.shader = new Qd({ glProgram: i, resources: { localUniforms: r, batchSamplers: getBatchSamplersUniformGroup(t) } });
      }
      execute(e, r) {
        let t = r.context,
          i = t.customShader || this.shader,
          s = e.renderer,
          o = s.graphicsContext,
          { batcher: d, instructions: c } = o.getContextRenderData(t);
        ((i.groups[0] = s.globalUniforms.bindGroup),
          s.state.set(e.state),
          s.shader.bind(i),
          s.geometry.bind(d.geometry, i.glProgram));
        let f = c.instructions;
        for (let l = 0; l < c.instructionSize; l++) {
          let b = f[l];
          if (b.size) {
            for (let _ = 0; _ < b.textures.count; _++) s.texture.bind(b.textures.textures[_], _);
            s.geometry.draw(b.topology, b.size, b.start);
          }
        }
      }
      destroy() {
        (this.shader.destroy(!0), (this.shader = null));
      }
    }
