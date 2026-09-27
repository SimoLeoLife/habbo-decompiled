// Estratto da HabboAirLauncher.deobf.js, riga 16577.

class {
      static {
        n(this, "GlMeshAdaptor");
      }
      init() {
        let e = compileHighShaderGlProgram({ name: "mesh", bits: [Nx, jGe, $5] });
        this._shader = new Qd({
          glProgram: e,
          resources: {
            uTexture: Texture.EMPTY.source,
            textureUniforms: { uTextureMatrix: { type: "mat3x3<f32>", value: new Ze() } },
          },
        });
      }
      execute(e, r) {
        let t = e.renderer,
          i = r._shader;
        if (i) {
          if (!i.glProgram) {
            warn_("Mesh shader has no glProgram", r.shader);
            return;
          }
        } else {
          i = this._shader;
          let s = r.texture,
            o = s.source;
          ((i.resources.uTexture = o),
            (i.resources.uSampler = o.style),
            (i.resources.textureUniforms.uniforms.uTextureMatrix = s.textureMatrix.mapCoord));
        }
        ((i.groups[100] = t.globalUniforms.bindGroup),
          (i.groups[101] = e.localUniformsBindGroup),
          t.encoder.draw({ geometry: r._geometry, shader: i, state: r.state }));
      }
      destroy() {
        (this._shader.destroy(!0), (this._shader = null));
      }
    }
