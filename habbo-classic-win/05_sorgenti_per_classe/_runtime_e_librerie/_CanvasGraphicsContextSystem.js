// Estratto da HabboAirLauncher.deobf.js, riga 23392.

class tLe {
        static {
          n(this, "_CanvasGraphicsContextSystem");
        }
        constructor(e) {
          ((this._renderer = e),
            (this._managedContexts = new GCManagedHash({ renderer: e, type: "resource", name: "graphicsContext" })));
        }
        init(e) {
          tLe.defaultOptions.bezierSmoothness = e?.bezierSmoothness ?? tLe.defaultOptions.bezierSmoothness;
        }
        getContextRenderData(e) {
          return this.getGpuContext(e).graphicsData || this._initContextRenderData(e);
        }
        updateGpuContext(e) {
          let r = e._gpuData,
            t = !!r[this._renderer.uid],
            i = r[this._renderer.uid] || this._initContext(e);
          return ((e.dirty || !t) && (t && i.reset(), (i.isBatchable = !1), (e.dirty = !1)), i);
        }
        getGpuContext(e) {
          return e._gpuData[this._renderer.uid] || this._initContext(e);
        }
        _initContextRenderData(e) {
          let r = new CanvasGraphicsContextRenderData(),
            t = this.getGpuContext(e);
          return ((t.graphicsData = r), r.init(), r);
        }
        _initContext(e) {
          let r = new CanvasGraphicsContext();
          return ((r.context = e), (e._gpuData[this._renderer.uid] = r), this._managedContexts.add(e), r);
        }
        destroy() {
          (this._managedContexts.destroy(), (this._renderer = null));
        }
      }
