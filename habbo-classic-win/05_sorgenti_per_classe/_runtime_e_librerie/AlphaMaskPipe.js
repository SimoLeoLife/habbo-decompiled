// Estratto da HabboAirLauncher.deobf.js, riga 12885.

class {
        static {
          n(this, "AlphaMaskPipe");
        }
        constructor(e) {
          ((this._activeMaskStage = []), (this._renderer = e));
        }
        push(e, r, t) {
          let i = this._renderer;
          if (
            (i.renderPipes.batch.break(t),
            t.add({
              renderPipeId: "alphaMask",
              action: "pushMaskBegin",
              mask: e,
              inverse: r._maskOptions.inverse,
              canBundle: !1,
              maskedContainer: r,
            }),
            (e.inverse = r._maskOptions.inverse),
            e.renderMaskToTexture)
          ) {
            let s = e.mask;
            ((s.includeInBuild = !0), s.collectRenderables(t, i, null), (s.includeInBuild = !1));
          }
          (i.renderPipes.batch.break(t),
            t.add({
              renderPipeId: "alphaMask",
              action: "pushMaskEnd",
              mask: e,
              maskedContainer: r,
              inverse: r._maskOptions.inverse,
              canBundle: !1,
            }));
        }
        pop(e, r, t) {
          (this._renderer.renderPipes.batch.break(t),
            t.add({
              renderPipeId: "alphaMask",
              action: "popMaskEnd",
              mask: e,
              inverse: r._maskOptions.inverse,
              canBundle: !1,
            }));
        }
        execute(e) {
          let r = this._renderer,
            t = e.mask.renderMaskToTexture;
          if (e.action === "pushMaskBegin") {
            let i = ds.get(AlphaMaskEffect);
            if (((i.inverse = e.inverse), t)) {
              e.mask.mask.measurable = !0;
              let s = getGlobalBounds(e.mask.mask, !0, Jsr);
              ((e.mask.mask.measurable = !1), s.ceil());
              let o = r.renderTarget.renderTarget.colorTexture.source,
                d = po.getOptimalTexture(s.width, s.height, o._resolution, o.antialias);
              (r.renderTarget.push(d, !0), r.globalUniforms.push({ offset: s, worldColor: 4294967295 }));
              let c = i.sprite;
              ((c.texture = d),
                (c.worldTransform.tx = s.minX),
                (c.worldTransform.ty = s.minY),
                this._activeMaskStage.push({
                  filterEffect: i,
                  maskedContainer: e.maskedContainer,
                  filterTexture: d,
                }));
            } else
              ((i.sprite = e.mask.mask),
                this._activeMaskStage.push({ filterEffect: i, maskedContainer: e.maskedContainer }));
          } else if (e.action === "pushMaskEnd") {
            let i = this._activeMaskStage[this._activeMaskStage.length - 1];
            (t &&
              (r.type === Jo.WEBGL && r.renderTarget.finishRenderPass(),
              r.renderTarget.pop(),
              r.globalUniforms.pop()),
              r.filter.push({
                renderPipeId: "filter",
                action: "pushFilter",
                container: i.maskedContainer,
                filterEffect: i.filterEffect,
                canBundle: !1,
              }));
          } else if (e.action === "popMaskEnd") {
            r.filter.pop();
            let i = this._activeMaskStage.pop();
            (t && po.returnTexture(i.filterTexture), ds.return(i.filterEffect));
          }
        }
        destroy() {
          ((this._renderer = null), (this._activeMaskStage = null));
        }
      }
