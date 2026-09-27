// Extracted from HabboAirLauncher.deobf.js, line 16622.

class {
      static {
        n(this, "GlBatchAdaptor");
      }
      constructor() {
        ((this._tempState = ed.for2d()), (this._didUploadHash = {}));
      }
      init(e) {
        e.renderer.runners.contextChange.add(this);
      }
      contextChange() {
        this._didUploadHash = {};
      }
      start(e, r, t) {
        let i = e.renderer,
          s = this._didUploadHash[t.uid];
        (i.shader.bind(t, s),
          s || (this._didUploadHash[t.uid] = !0),
          i.shader.updateUniformGroup(i.globalUniforms.uniformGroup),
          i.geometry.bind(r, t.glProgram));
      }
      execute(e, r) {
        let t = e.renderer;
        ((this._tempState.blendMode = r.blendMode), t.state.set(this._tempState));
        let i = r.textures.textures;
        for (let s = 0; s < r.textures.count; s++) t.texture.bind(i[s], s);
        t.geometry.draw(r.topology, r.size, r.start);
      }
    }
