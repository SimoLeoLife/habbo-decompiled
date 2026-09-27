// Estratto da HabboAirLauncher.deobf.js, riga 23947.

class {
      static {
        n(this, "CanvasStencilMaskPipe");
      }
      constructor(e) {
        ((this._warnedMaskTypes = new Set()), (this._canvasMaskStack = []), (this._renderer = e));
      }
      push(e, r, t) {
        (this._renderer.renderPipes.batch.break(t),
          t.add({
            renderPipeId: "stencilMask",
            action: "pushMaskBegin",
            mask: e,
            inverse: r._maskOptions.inverse,
            canBundle: !1,
          }));
      }
      pop(e, r, t) {
        (this._renderer.renderPipes.batch.break(t),
          t.add({
            renderPipeId: "stencilMask",
            action: "popMaskEnd",
            mask: e,
            inverse: r._maskOptions.inverse,
            canBundle: !1,
          }));
      }
      execute(e) {
        if (e.action !== "pushMaskBegin" && e.action !== "popMaskEnd") return;
        let r = this._renderer,
          t = r.canvasContext,
          i = t?.activeContext;
        if (!i) return;
        if (e.action === "popMaskEnd") {
          this._canvasMaskStack.pop() && i.restore();
          return;
        }
        e.inverse &&
          this._warnOnce(
            "inverse",
            "CanvasRenderer: inverse masks are not supported on Canvas2D; ignoring inverse flag.",
          );
        let s = e.mask.mask;
        if (!(s instanceof Cl)) {
          (this._warnOnce(
            "nonGraphics",
            "CanvasRenderer: only Graphics masks are supported in Canvas2D; skipping mask.",
          ),
            this._canvasMaskStack.push(!1));
          return;
        }
        let o = s,
          d = o.context?.instructions;
        if (!d?.length) {
          this._canvasMaskStack.push(!1);
          return;
        }
        (i.save(),
          t.setContextTransform(o.groupTransform, (r._roundPixels | o._roundPixels) === 1),
          i.beginPath());
        let c = !1,
          f = !1;
        for (let l = 0; l < d.length; l++) {
          let b = d[l],
            _ = b.action;
          if (_ !== "fill" && _ !== "stroke") continue;
          let p = b.data?.path?.shapePath;
          if (!p?.shapePrimitives?.length) continue;
          let m = p.shapePrimitives;
          for (let v = 0; v < m.length; v++) {
            let w = m[v];
            if (!w?.shape) continue;
            let I = w.transform,
              C = I && !I.isIdentity();
            (C && (i.save(), i.transform(I.a, I.b, I.c, I.d, I.tx, I.ty)),
              buildShapePath_(i, w.shape),
              (f = addHolePaths_(i, w.holes) || f),
              (c = !0),
              C && i.restore());
          }
        }
        if (!c) {
          (i.restore(), this._canvasMaskStack.push(!1));
          return;
        }
        (f ? i.clip("evenodd") : i.clip(), this._canvasMaskStack.push(!0));
      }
      destroy() {
        ((this._renderer = null), (this._warnedMaskTypes = null), (this._canvasMaskStack = null));
      }
      _warnOnce(e, r) {
        this._warnedMaskTypes.has(e) || (this._warnedMaskTypes.add(e), warn_(r));
      }
    }
