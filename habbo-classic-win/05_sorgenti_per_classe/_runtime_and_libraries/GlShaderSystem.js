// Extracted from HabboAirLauncher.deobf.js, line 18302.

class {
        static {
          n(this, "GlShaderSystem");
        }
        constructor(e) {
          ((this._activeProgram = null),
            (this._programDataHash = Object.create(null)),
            (this._shaderSyncFunctions = Object.create(null)),
            (this._renderer = e));
        }
        contextChange(e) {
          ((this._gl = e),
            (this._programDataHash = Object.create(null)),
            (this._shaderSyncFunctions = Object.create(null)),
            (this._activeProgram = null));
        }
        bind(e, r) {
          if ((this._setProgram(e.glProgram), r)) return;
          ((Mte.textureCount = 0), (Mte.blockIndex = 0));
          let t = this._shaderSyncFunctions[e.glProgram._key];
          (t || (t = this._shaderSyncFunctions[e.glProgram._key] = this._generateShaderSync(e, this)),
            this._renderer.buffer.nextBindBase(!!e.glProgram.transformFeedbackVaryings),
            t(this._renderer, e, Mte));
        }
        updateUniformGroup(e) {
          this._renderer.uniformGroup.updateUniformGroup(e, this._activeProgram, Mte);
        }
        bindUniformBlock(e, r, t = 0) {
          let i = this._renderer.buffer,
            s = this._getProgramData(this._activeProgram),
            o = e._bufferResource;
          o || this._renderer.ubo.updateUniformGroup(e);
          let d = e.buffer,
            c = i.updateBuffer(d),
            f = i.freeLocationForBufferBase(c);
          if (o) {
            let { offset: b, size: _ } = e;
            b === 0 && _ === d.data.byteLength ? i.bindBufferBase(c, f) : i.bindBufferRange(c, f, b);
          } else i.getLastBindBaseLocation(c) !== f && i.bindBufferBase(c, f);
          let l = this._activeProgram._uniformBlockData[r].index;
          s.uniformBlockBindings[t] !== f &&
            ((s.uniformBlockBindings[t] = f), this._renderer.gl.uniformBlockBinding(s.program, l, f));
        }
        _setProgram(e) {
          if (this._activeProgram === e) return;
          this._activeProgram = e;
          let r = this._getProgramData(e);
          this._gl.useProgram(r.program);
        }
        _getProgramData(e) {
          return this._programDataHash[e._key] || this._createProgramData(e);
        }
        _createProgramData(e) {
          let r = e._key;
          return ((this._programDataHash[r] = generateProgram(this._gl, e)), this._programDataHash[r]);
        }
        destroy() {
          for (let e of Object.keys(this._programDataHash)) this._programDataHash[e].destroy();
          ((this._programDataHash = null),
            (this._shaderSyncFunctions = null),
            (this._activeProgram = null),
            (this._renderer = null),
            (this._gl = null));
        }
        _generateShaderSync(e, r) {
          return generateShaderSyncCode(e, r);
        }
        resetState() {
          this._activeProgram = null;
        }
      }
