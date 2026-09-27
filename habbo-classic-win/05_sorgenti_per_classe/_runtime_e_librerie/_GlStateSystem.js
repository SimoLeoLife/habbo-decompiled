// Estratto da HabboAirLauncher.deobf.js, riga 18656.

class vDe {
        static {
          n(this, "_GlStateSystem");
        }
        constructor(e) {
          ((this._invertFrontFace = !1),
            (this.gl = null),
            (this.stateId = 0),
            (this.polygonOffset = 0),
            (this.blendMode = "none"),
            (this._blendEq = !1),
            (this.map = []),
            (this.map[por] = this.setBlend),
            (this.map[mor] = this.setOffset),
            (this.map[gor] = this.setCullFace),
            (this.map[vor] = this.setDepthTest),
            (this.map[wor] = this.setFrontFace),
            (this.map[yor] = this.setDepthMask),
            (this.checks = []),
            (this.defaultState = ed.for2d()),
            e.renderTarget.onRenderTargetChange.add(this));
        }
        onRenderTargetChange(e) {
          ((this._invertFrontFace = !e.isRoot),
            this._cullFace ? this.setFrontFace(this._frontFace) : (this._frontFaceDirty = !0));
        }
        contextChange(e) {
          ((this.gl = e), (this.blendModesMap = mapWebGLBlendModesToPixi(e)), this.resetState());
        }
        set(e) {
          if ((e || (e = this.defaultState), this.stateId !== e.data)) {
            let r = this.stateId ^ e.data,
              t = 0;
            for (; r;) (r & 1 && this.map[t].call(this, !!(e.data & (1 << t))), (r >>= 1), t++);
            this.stateId = e.data;
          }
          for (let r = 0; r < this.checks.length; r++) this.checks[r](this, e);
        }
        forceState(e) {
          e || (e = this.defaultState);
          for (let r = 0; r < this.map.length; r++) this.map[r].call(this, !!(e.data & (1 << r)));
          for (let r = 0; r < this.checks.length; r++) this.checks[r](this, e);
          this.stateId = e.data;
        }
        setBlend(e) {
          (this._updateCheck(vDe._checkBlendMode, e), this.gl[e ? "enable" : "disable"](this.gl.BLEND));
        }
        setOffset(e) {
          (this._updateCheck(vDe._checkPolygonOffset, e),
            this.gl[e ? "enable" : "disable"](this.gl.POLYGON_OFFSET_FILL));
        }
        setDepthTest(e) {
          this.gl[e ? "enable" : "disable"](this.gl.DEPTH_TEST);
        }
        setDepthMask(e) {
          this.gl.depthMask(e);
        }
        setCullFace(e) {
          ((this._cullFace = e),
            this.gl[e ? "enable" : "disable"](this.gl.CULL_FACE),
            this._cullFace && this._frontFaceDirty && this.setFrontFace(this._frontFace));
        }
        setFrontFace(e) {
          ((this._frontFace = e), (this._frontFaceDirty = !1));
          let r = this._invertFrontFace ? !e : e;
          this._glFrontFace !== r && ((this._glFrontFace = r), this.gl.frontFace(this.gl[r ? "CW" : "CCW"]));
        }
        setBlendMode(e) {
          if ((this.blendModesMap[e] || (e = "normal"), e === this.blendMode)) return;
          this.blendMode = e;
          let r = this.blendModesMap[e],
            t = this.gl;
          (r.length === 2 ? t.blendFunc(r[0], r[1]) : t.blendFuncSeparate(r[0], r[1], r[2], r[3]),
            r.length === 6
              ? ((this._blendEq = !0), t.blendEquationSeparate(r[4], r[5]))
              : this._blendEq && ((this._blendEq = !1), t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD)));
        }
        setPolygonOffset(e, r) {
          this.gl.polygonOffset(e, r);
        }
        resetState() {
          ((this._glFrontFace = !1),
            (this._frontFace = !1),
            (this._cullFace = !1),
            (this._frontFaceDirty = !1),
            (this._invertFrontFace = !1),
            this.gl.frontFace(this.gl.CCW),
            this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1),
            this.forceState(this.defaultState),
            (this._blendEq = !0),
            (this.blendMode = ""),
            this.setBlendMode("normal"));
        }
        _updateCheck(e, r) {
          let t = this.checks.indexOf(e);
          r && t === -1 ? this.checks.push(e) : !r && t !== -1 && this.checks.splice(t, 1);
        }
        static _checkBlendMode(e, r) {
          e.setBlendMode(r.blendMode);
        }
        static _checkPolygonOffset(e, r) {
          e.setPolygonOffset(1, r.polygonOffset);
        }
        destroy() {
          ((this.gl = null), (this.checks.length = 0));
        }
      }
