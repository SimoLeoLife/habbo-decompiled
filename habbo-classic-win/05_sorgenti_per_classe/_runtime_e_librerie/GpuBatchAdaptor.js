// Estratto da HabboAirLauncher.deobf.js, riga 11447.

class {
        static {
          n(this, "GpuBatchAdaptor");
        }
        start(e, r, t) {
          let i = e.renderer,
            s = i.encoder,
            o = t.gpuProgram;
          ((this._shader = t),
            (this._geometry = r),
            s.setGeometry(r, o),
            ($re.blendMode = "normal"),
            i.pipeline.getPipeline(r, o, $re));
          let d = i.globalUniforms.bindGroup;
          (s.resetBindGroup(1), s.setBindGroup(0, d, o));
        }
        execute(e, r) {
          let t = this._shader.gpuProgram,
            i = e.renderer,
            s = i.encoder;
          if (!r.bindGroup) {
            let c = r.textures;
            r.bindGroup = getTextureBatchBindGroup(c.textures, c.count, i.limits.maxBatchableTextures);
          }
          $re.blendMode = r.blendMode;
          let o = i.bindGroup.getBindGroup(r.bindGroup, t, 1),
            d = i.pipeline.getPipeline(this._geometry, t, $re, r.topology);
          (r.bindGroup._touch(i.gc.now, i.tick),
            s.setPipeline(d),
            s.renderPassEncoder.setBindGroup(1, o),
            s.renderPassEncoder.drawIndexed(r.size, 1, r.start));
        }
      }
