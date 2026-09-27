// Extracted from HabboAirLauncher.deobf.js, line 13028.

class {
      static {
        n(this, "StencilMaskPipe");
      }
      constructor(e) {
        ((this._maskStackHash = {}), (this._maskHash = new WeakMap()), (this._renderer = e));
      }
      push(e, r, t) {
        var i;
        let s = e,
          o = this._renderer;
        (o.renderPipes.batch.break(t),
          o.renderPipes.blendMode.setBlendMode(s.mask, "none", t),
          t.add({
            renderPipeId: "stencilMask",
            action: "pushMaskBegin",
            mask: e,
            inverse: r._maskOptions.inverse,
            canBundle: !1,
          }));
        let d = s.mask;
        ((d.includeInBuild = !0),
          this._maskHash.has(s) || this._maskHash.set(s, { instructionsStart: 0, instructionsLength: 0 }));
        let c = this._maskHash.get(s);
        ((c.instructionsStart = t.instructionSize),
          d.collectRenderables(t, o, null),
          (d.includeInBuild = !1),
          o.renderPipes.batch.break(t),
          t.add({
            renderPipeId: "stencilMask",
            action: "pushMaskEnd",
            mask: e,
            inverse: r._maskOptions.inverse,
            canBundle: !1,
          }));
        let f = t.instructionSize - c.instructionsStart - 1;
        c.instructionsLength = f;
        let l = o.renderTarget.renderTarget.uid;
        (i = this._maskStackHash)[l] ?? (i[l] = 0);
      }
      pop(e, r, t) {
        let i = e,
          s = this._renderer;
        (s.renderPipes.batch.break(t),
          s.renderPipes.blendMode.setBlendMode(i.mask, "none", t),
          t.add({
            renderPipeId: "stencilMask",
            action: "popMaskBegin",
            inverse: r._maskOptions.inverse,
            canBundle: !1,
          }));
        let o = this._maskHash.get(e);
        for (let d = 0; d < o.instructionsLength; d++)
          t.instructions[t.instructionSize++] = t.instructions[o.instructionsStart++];
        t.add({ renderPipeId: "stencilMask", action: "popMaskEnd", canBundle: !1 });
      }
      execute(e) {
        var r;
        let t = this._renderer,
          i = t,
          s = t.renderTarget.renderTarget.uid,
          o = (r = this._maskStackHash)[s] ?? (r[s] = 0);
        (e.action === "pushMaskBegin"
          ? (i.renderTarget.ensureDepthStencil(),
            i.stencil.setStencilMode(bs.RENDERING_MASK_ADD, o),
            o++,
            i.colorMask.setMask(0))
          : e.action === "pushMaskEnd"
            ? (e.inverse
                ? i.stencil.setStencilMode(bs.INVERSE_MASK_ACTIVE, o)
                : i.stencil.setStencilMode(bs.MASK_ACTIVE, o),
              i.colorMask.setMask(15))
            : e.action === "popMaskBegin"
              ? (i.colorMask.setMask(0),
                o !== 0
                  ? i.stencil.setStencilMode(bs.RENDERING_MASK_REMOVE, o)
                  : (i.renderTarget.clear(null, Xd.STENCIL), i.stencil.setStencilMode(bs.DISABLED, o)),
                o--)
              : e.action === "popMaskEnd" &&
                (e.inverse
                  ? i.stencil.setStencilMode(bs.INVERSE_MASK_ACTIVE, o)
                  : i.stencil.setStencilMode(bs.MASK_ACTIVE, o),
                i.colorMask.setMask(15)),
          (this._maskStackHash[s] = o));
      }
      destroy() {
        ((this._renderer = null), (this._maskStackHash = null), (this._maskHash = null));
      }
    }
