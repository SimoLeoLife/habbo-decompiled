// Extracted from HabboAirLauncher.deobf.js, line 11400.

class {
      static {
        n(this, "GpuMeshAdapter");
      }
      init() {
        let e = compileHighShaderGpuProgram({ name: "mesh", bits: [iv, GGe, K5] });
        this._shader = new Qd({
          gpuProgram: e,
          resources: {
            uTexture: Texture.EMPTY._source,
            uSampler: Texture.EMPTY._source.style,
            textureUniforms: { uTextureMatrix: { type: "mat3x3<f32>", value: new Ze() } },
          },
        });
      }
      execute(e, r) {
        let t = e.renderer,
          i = r._shader;
        if (!i) ((i = this._shader), (i.groups[2] = t.texture.getTextureBindGroup(r.texture)));
        else if (!i.gpuProgram) {
          warn_("Mesh shader has no gpuProgram", r.shader);
          return;
        }
        let s = i.gpuProgram;
        if (
          (s.autoAssignGlobalUniforms && (i.groups[0] = t.globalUniforms.bindGroup),
          s.autoAssignLocalUniforms)
        ) {
          let o = e.localUniforms;
          i.groups[1] = t.renderPipes.uniformBatch.getUniformBindGroup(o, !0);
        }
        t.encoder.draw({ geometry: r._geometry, shader: i, state: r.state });
      }
      destroy() {
        (this._shader.destroy(!0), (this._shader = null));
      }
    }
