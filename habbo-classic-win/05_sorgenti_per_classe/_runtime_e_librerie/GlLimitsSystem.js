// Estratto da HabboAirLauncher.deobf.js, riga 17441.

class {
      static {
        n(this, "GlLimitsSystem");
      }
      constructor(e) {
        this._renderer = e;
      }
      contextChange() {
        let e = this._renderer.gl;
        ((this.maxTextures = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)),
          (this.maxBatchableTextures = checkMaxIfStatementsInShader(this.maxTextures, e)));
        let r = this._renderer.context.webGLVersion === 2;
        this.maxUniformBindings = r ? e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
      }
      destroy() {}
    }
