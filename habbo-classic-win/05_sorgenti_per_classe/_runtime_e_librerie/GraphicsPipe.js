// Estratto da HabboAirLauncher.deobf.js, riga 23500.

class {
        static {
          n(this, "GraphicsPipe");
        }
        constructor(e, r) {
          ((this.state = ed.for2d()),
            (this.renderer = e),
            (this._adaptor = r),
            this.renderer.runners.contextChange.add(this),
            (this._managedGraphics = new GCManagedHash({
              renderer: e,
              type: "renderable",
              priority: -1,
              name: "graphics",
            })));
        }
        contextChange() {
          this._adaptor.contextChange(this.renderer);
        }
        validateRenderable(e) {
          let r = e.context,
            t = !!e._gpuData,
            s = this.renderer.graphicsContext.updateGpuContext(r);
          return !!(s.isBatchable || t !== s.isBatchable);
        }
        addRenderable(e, r) {
          let i = this.renderer.graphicsContext.updateGpuContext(e.context);
          (e.didViewUpdate && this._rebuild(e),
            i.isBatchable ? this._addToBatcher(e, r) : (this.renderer.renderPipes.batch.break(r), r.add(e)));
        }
        updateRenderable(e) {
          let t = this._getGpuDataForRenderable(e).batches;
          for (let i = 0; i < t.length; i++) {
            let s = t[i];
            s._batcher.updateElement(s);
          }
        }
        execute(e) {
          if (!e.isRenderable) return;
          let r = this.renderer,
            t = e.context;
          if (!r.graphicsContext.getGpuContext(t).batches.length) return;
          let s = t.customShader || this._adaptor.shader;
          this.state.blendMode = e.groupBlendMode;
          let o = s.resources.localUniforms.uniforms;
          ((o.uTransformMatrix = e.groupTransform),
            (o.uRound = r._roundPixels | e._roundPixels),
            color32BitToUniform(e.groupColorAlpha, o.uColor, 0),
            this._adaptor.execute(this, e));
        }
        _rebuild(e) {
          let r = this._getGpuDataForRenderable(e),
            i = this.renderer.graphicsContext.updateGpuContext(e.context);
          (r.destroy(), i.isBatchable && this._updateBatchesForRenderable(e, r));
        }
        _addToBatcher(e, r) {
          let t = this.renderer.renderPipes.batch,
            i = this._getGpuDataForRenderable(e).batches;
          for (let s = 0; s < i.length; s++) {
            let o = i[s];
            t.addToBatch(o, r);
          }
        }
        _getGpuDataForRenderable(e) {
          return e._gpuData[this.renderer.uid] || this._initGpuDataForRenderable(e);
        }
        _initGpuDataForRenderable(e) {
          let r = new GraphicsGpuData();
          return ((e._gpuData[this.renderer.uid] = r), this._managedGraphics.add(e), r);
        }
        _updateBatchesForRenderable(e, r) {
          let t = e.context,
            s = this.renderer.graphicsContext.getGpuContext(t),
            o = this.renderer._roundPixels | e._roundPixels;
          r.batches = s.batches.map((d) => {
            let c = ds.get(BatchableGraphics);
            return (d.copyTo(c), (c.renderable = e), (c.roundPixels = o), c);
          });
        }
        destroy() {
          (this._managedGraphics.destroy(),
            (this.renderer = null),
            this._adaptor.destroy(),
            (this._adaptor = null),
            (this.state = null));
        }
      }
