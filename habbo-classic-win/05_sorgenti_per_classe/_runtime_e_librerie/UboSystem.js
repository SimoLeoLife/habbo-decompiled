// Estratto da HabboAirLauncher.deobf.js, riga 14652.

class {
      static {
        n(this, "UboSystem");
      }
      constructor(e) {
        ((this._syncFunctionHash = Object.create(null)), (this._adaptor = e), this._systemCheck());
      }
      _systemCheck() {
        if (!unsafeEvalSupported())
          throw new Error(
            "Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.",
          );
      }
      ensureUniformGroup(e) {
        let r = this.getUniformGroupData(e);
        e.buffer ||
          (e.buffer = new Buffer_({ data: new Float32Array(r.layout.size / 4), usage: bi.UNIFORM | bi.COPY_DST }));
      }
      getUniformGroupData(e) {
        return this._syncFunctionHash[e._signature] || this._initUniformGroup(e);
      }
      _initUniformGroup(e) {
        let r = e._signature,
          t = this._syncFunctionHash[r];
        if (!t) {
          let i = Object.keys(e.uniformStructures).map((d) => e.uniformStructures[d]),
            s = this._adaptor.createUboElements(i),
            o = this._generateUboSync(s.uboElements);
          t = this._syncFunctionHash[r] = { layout: s, syncFunction: o };
        }
        return this._syncFunctionHash[r];
      }
      _generateUboSync(e) {
        return this._adaptor.generateUboSync(e);
      }
      syncUniformGroup(e, r, t) {
        let i = this.getUniformGroupData(e);
        e.buffer ||
          (e.buffer = new Buffer_({ data: new Float32Array(i.layout.size / 4), usage: bi.UNIFORM | bi.COPY_DST }));
        let s = null;
        return (
          r || ((r = e.buffer.data), (s = e.buffer.dataInt32)),
          t || (t = 0),
          i.syncFunction(e.uniforms, r, s, t),
          !0
        );
      }
      updateUniformGroup(e) {
        if (e.isStatic && !e._dirtyId) return !1;
        e._dirtyId = 0;
        let r = this.syncUniformGroup(e);
        return (e.buffer.update(), r);
      }
      destroy() {
        this._syncFunctionHash = null;
      }
    }
