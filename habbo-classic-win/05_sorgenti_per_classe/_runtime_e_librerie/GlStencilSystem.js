// Estratto da HabboAirLauncher.deobf.js, riga 17465.

class {
      static {
        n(this, "GlStencilSystem");
      }
      constructor(e) {
        ((this._stencilCache = { enabled: !1, stencilReference: 0, stencilMode: bs.NONE }),
          (this._renderTargetStencilState = Object.create(null)),
          e.renderTarget.onRenderTargetChange.add(this));
      }
      contextChange(e) {
        ((this._gl = e),
          (this._comparisonFuncMapping = {
            always: e.ALWAYS,
            never: e.NEVER,
            equal: e.EQUAL,
            "not-equal": e.NOTEQUAL,
            less: e.LESS,
            "less-equal": e.LEQUAL,
            greater: e.GREATER,
            "greater-equal": e.GEQUAL,
          }),
          (this._stencilOpsMapping = {
            keep: e.KEEP,
            zero: e.ZERO,
            replace: e.REPLACE,
            invert: e.INVERT,
            "increment-clamp": e.INCR,
            "decrement-clamp": e.DECR,
            "increment-wrap": e.INCR_WRAP,
            "decrement-wrap": e.DECR_WRAP,
          }),
          this.resetState());
      }
      onRenderTargetChange(e) {
        if (this._activeRenderTarget === e) return;
        this._activeRenderTarget = e;
        let r = this._renderTargetStencilState[e.uid];
        (r || (r = this._renderTargetStencilState[e.uid] = { stencilMode: bs.DISABLED, stencilReference: 0 }),
          this.setStencilMode(r.stencilMode, r.stencilReference));
      }
      resetState() {
        ((this._stencilCache.enabled = !1),
          (this._stencilCache.stencilMode = bs.NONE),
          (this._stencilCache.stencilReference = 0));
      }
      setStencilMode(e, r) {
        let t = this._renderTargetStencilState[this._activeRenderTarget.uid],
          i = this._gl,
          s = Wh[e],
          o = this._stencilCache;
        if (((t.stencilMode = e), (t.stencilReference = r), e === bs.DISABLED)) {
          this._stencilCache.enabled && ((this._stencilCache.enabled = !1), i.disable(i.STENCIL_TEST));
          return;
        }
        (this._stencilCache.enabled || ((this._stencilCache.enabled = !0), i.enable(i.STENCIL_TEST)),
          (e !== o.stencilMode || o.stencilReference !== r) &&
            ((o.stencilMode = e),
            (o.stencilReference = r),
            i.stencilFunc(this._comparisonFuncMapping[s.stencilBack.compare], r, 255),
            i.stencilOp(i.KEEP, i.KEEP, this._stencilOpsMapping[s.stencilBack.passOp])));
      }
    }
