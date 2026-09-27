// Estratto da HabboAirLauncher.deobf.js, riga 18561.

class {
      static {
        n(this, "GlUniformGroupSystem");
      }
      constructor(e) {
        ((this._cache = {}),
          (this._uniformGroupSyncHash = {}),
          (this._renderer = e),
          (this.gl = null),
          (this._cache = {}));
      }
      contextChange(e) {
        this.gl = e;
      }
      updateUniformGroup(e, r, t) {
        let i = this._renderer.shader._getProgramData(r);
        (!e.isStatic || e._dirtyId !== i.uniformDirtyGroups[e.uid]) &&
          ((i.uniformDirtyGroups[e.uid] = e._dirtyId),
          this._getUniformSyncFunction(e, r)(i.uniformData, e.uniforms, this._renderer, t));
      }
      _getUniformSyncFunction(e, r) {
        return this._uniformGroupSyncHash[e._signature]?.[r._key] || this._createUniformSyncFunction(e, r);
      }
      _createUniformSyncFunction(e, r) {
        let t = this._uniformGroupSyncHash[e._signature] || (this._uniformGroupSyncHash[e._signature] = {}),
          i = this._getSignature(e, r._uniformData, "u");
        return (
          this._cache[i] || (this._cache[i] = this._generateUniformsSync(e, r._uniformData)),
          (t[r._key] = this._cache[i]),
          t[r._key]
        );
      }
      _generateUniformsSync(e, r) {
        return generateUniformsSync(e, r);
      }
      _getSignature(e, r, t) {
        let i = e.uniforms,
          s = [`${t}-`];
        for (let o in i) (s.push(o), r[o] && s.push(r[o].type));
        return s.join("-");
      }
      destroy() {
        ((this._renderer = null), (this._cache = null));
      }
    }
