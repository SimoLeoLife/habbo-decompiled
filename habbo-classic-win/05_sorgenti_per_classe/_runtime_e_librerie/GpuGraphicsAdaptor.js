// Estratto da HabboAirLauncher.deobf.js, riga 11282.

class {
      static {
        n(this, "GpuGraphicsAdaptor");
      }
      constructor() {
        this._maxTextures = 0;
      }
      contextChange(e) {
        let r = new Zi({
          uTransformMatrix: { value: new Ze(), type: "mat3x3<f32>" },
          uColor: { value: new Float32Array([1, 1, 1, 1]), type: "vec4<f32>" },
          uRound: { value: 0, type: "f32" },
        });
        this._maxTextures = e.limits.maxBatchableTextures;
        let t = compileHighShaderGpuProgram({ name: "graphics", bits: [jre, generateTextureBatchBit(this._maxTextures), VGe, K5] });
        this.shader = new Qd({ gpuProgram: t, resources: { localUniforms: r } });
      }
      execute(e, r) {
        let t = r.context,
          i = t.customShader || this.shader,
          s = e.renderer,
          o = s.graphicsContext,
          { batcher: d, instructions: c } = o.getContextRenderData(t),
          f = s.encoder;
        f.setGeometry(d.geometry, i.gpuProgram);
        let l = s.globalUniforms.bindGroup;
        f.setBindGroup(0, l, i.gpuProgram);
        let b = s.renderPipes.uniformBatch.getUniformBindGroup(i.resources.localUniforms, !0);
        f.setBindGroup(2, b, i.gpuProgram);
        let _ = c.instructions,
          h = null;
        for (let p = 0; p < c.instructionSize; p++) {
          let m = _[p];
          if (
            (m.topology !== h &&
              ((h = m.topology),
              f.setPipelineFromGeometryProgramAndState(d.geometry, i.gpuProgram, e.state, m.topology)),
            (i.groups[1] = m.bindGroup),
            !m.gpuBindGroup)
          ) {
            let v = m.textures;
            ((m.bindGroup = getTextureBatchBindGroup(v.textures, v.count, this._maxTextures)),
              (m.gpuBindGroup = s.bindGroup.getBindGroup(m.bindGroup, i.gpuProgram, 1)));
          }
          (f.setBindGroup(1, m.bindGroup, i.gpuProgram), f.renderPassEncoder.drawIndexed(m.size, 1, m.start));
        }
      }
      destroy() {
        (this.shader.destroy(!0), (this.shader = null));
      }
    }
