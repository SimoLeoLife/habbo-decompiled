// Extracted from HabboAirLauncher.deobf.js, line 21508.

class ODe {
        static {
          n(this, "_GraphicsContextSystem");
        }
        constructor(e) {
          ((this._renderer = e),
            (this._managedContexts = new GCManagedHash({ renderer: e, type: "resource", name: "graphicsContext" })));
        }
        init(e) {
          ODe.defaultOptions.bezierSmoothness = e?.bezierSmoothness ?? ODe.defaultOptions.bezierSmoothness;
        }
        getContextRenderData(e) {
          return e._gpuData[this._renderer.uid].graphicsData || this._initContextRenderData(e);
        }
        updateGpuContext(e) {
          let r = !!e._gpuData[this._renderer.uid],
            t = e._gpuData[this._renderer.uid] || this._initContext(e);
          if (e.dirty || !r) {
            (r && t.reset(), buildContextBatches(e, t));
            let i = e.batchMode;
            (e.customShader || i === "no-batch"
              ? (t.isBatchable = !1)
              : i === "auto"
                ? (t.isBatchable = t.geometryData.vertices.length < 400)
                : (t.isBatchable = !0),
              (e.dirty = !1));
          }
          return t;
        }
        getGpuContext(e) {
          return e._gpuData[this._renderer.uid] || this._initContext(e);
        }
        _initContextRenderData(e) {
          let r = ds.get(GraphicsContextRenderData, { maxTextures: this._renderer.limits.maxBatchableTextures }),
            t = e._gpuData[this._renderer.uid],
            { batches: i, geometryData: s } = t;
          t.graphicsData = r;
          let o = s.vertices.length,
            d = s.indices.length;
          for (let b = 0; b < i.length; b++) i[b].applyTransform = !1;
          let c = r.batcher;
          (c.ensureAttributeBuffer(o), c.ensureIndexBuffer(d), c.begin());
          for (let b = 0; b < i.length; b++) {
            let _ = i[b];
            c.add(_);
          }
          c.finish(r.instructions);
          let f = c.geometry;
          (f.indexBuffer.setDataWithSize(c.indexBuffer, c.indexSize, !0),
            f.buffers[0].setDataWithSize(c.attributeBuffer.float32View, c.attributeSize, !0));
          let l = c.batches;
          for (let b = 0; b < l.length; b++) {
            let _ = l[b];
            _.bindGroup = getTextureBatchBindGroup(
              _.textures.textures,
              _.textures.count,
              this._renderer.limits.maxBatchableTextures,
            );
          }
          return r;
        }
        _initContext(e) {
          let r = new GpuGraphicsContext();
          return ((r.context = e), (e._gpuData[this._renderer.uid] = r), this._managedContexts.add(e), r);
        }
        destroy() {
          (this._managedContexts.destroy(), (this._renderer = null));
        }
      }
