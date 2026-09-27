// Extracted from HabboAirLauncher.deobf.js, line 23438.

class {
      static {
        n(this, "CanvasGraphicsPipe");
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
        return !1;
      }
      addRenderable(e, r) {
        (this._managedGraphics.add(e), this.renderer.renderPipes.batch.break(r), r.add(e));
      }
      updateRenderable(e) {}
      execute(e) {
        e.isRenderable && this._adaptor.execute(this, e);
      }
      destroy() {
        (this._managedGraphics.destroy(),
          (this.renderer = null),
          this._adaptor.destroy(),
          (this._adaptor = null));
      }
    }
