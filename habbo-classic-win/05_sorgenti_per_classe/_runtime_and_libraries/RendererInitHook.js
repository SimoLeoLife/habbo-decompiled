// Extracted from HabboAirLauncher.deobf.js, line 11908.

class {
      static {
        n(this, "RendererInitHook");
      }
      constructor(e) {
        this._renderer = e;
      }
      init() {
        globalThis.__PIXI_RENDERER_INIT__?.(this._renderer, dK);
      }
      destroy() {
        this._renderer = null;
      }
    }
