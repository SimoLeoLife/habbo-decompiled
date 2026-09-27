// Extracted from HabboAirLauncher.deobf.js, line 13874.

class jje {
      static {
        n(this, "_RenderableGCSystem");
      }
      constructor(e) {
        this._renderer = e;
      }
      init(e) {
        ((e = { ...jje.defaultOptions, ...e }), (this.maxUnusedTime = e.renderableGCMaxUnusedTime));
      }
      get enabled() {
        return (
          Zr("8.15.0", "RenderableGCSystem.enabled is deprecated, please use the GCSystem.enabled instead."),
          this._renderer.gc.enabled
        );
      }
      set enabled(e) {
        (Zr("8.15.0", "RenderableGCSystem.enabled is deprecated, please use the GCSystem.enabled instead."),
          (this._renderer.gc.enabled = e));
      }
      addManagedHash(e, r) {
        (Zr(
          "8.15.0",
          "RenderableGCSystem.addManagedHash is deprecated, please use the GCSystem.addCollection instead.",
        ),
          this._renderer.gc.addCollection(e, r, "hash"));
      }
      addManagedArray(e, r) {
        (Zr(
          "8.15.0",
          "RenderableGCSystem.addManagedArray is deprecated, please use the GCSystem.addCollection instead.",
        ),
          this._renderer.gc.addCollection(e, r, "array"));
      }
      addRenderable(e) {
        (Zr("8.15.0", "RenderableGCSystem.addRenderable is deprecated, please use the GCSystem instead."),
          this._renderer.gc.addResource(e, "renderable"));
      }
      run() {
        (Zr("8.15.0", "RenderableGCSystem.run is deprecated, please use the GCSystem instead."),
          this._renderer.gc.run());
      }
      destroy() {
        this._renderer = null;
      }
    }
