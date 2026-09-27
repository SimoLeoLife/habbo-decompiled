// Estratto da HabboAirLauncher.deobf.js, riga 11486.

class {
      static {
        n(this, "CustomRenderPipe");
      }
      constructor(e) {
        this._renderer = e;
      }
      updateRenderable() {}
      destroyRenderable() {}
      validateRenderable() {
        return !1;
      }
      addRenderable(e, r) {
        (this._renderer.renderPipes.batch.break(r), r.add(e));
      }
      execute(e) {
        e.isRenderable && e.render(this._renderer);
      }
      destroy() {
        this._renderer = null;
      }
    }
