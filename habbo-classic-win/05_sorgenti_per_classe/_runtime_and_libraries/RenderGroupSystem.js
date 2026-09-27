// Extracted from HabboAirLauncher.deobf.js, line 11739.

class {
        static {
          n(this, "RenderGroupSystem");
        }
        constructor(e) {
          this._renderer = e;
        }
        render({ container: e, transform: r }) {
          let t = e.parent,
            i = e.renderGroup.renderGroupParent;
          ((e.parent = null), (e.renderGroup.renderGroupParent = null));
          let s = this._renderer,
            o = Ysr;
          r && (o.copyFrom(e.renderGroup.localTransform), e.renderGroup.localTransform.copyFrom(r));
          let d = s.renderPipes;
          (this._updateCachedRenderGroups(e.renderGroup, null),
            this._updateRenderGroups(e.renderGroup),
            s.globalUniforms.start({
              worldTransformMatrix: r ? e.renderGroup.localTransform : e.renderGroup.worldTransform,
              worldColor: e.renderGroup.worldColorAlpha,
            }),
            executeInstructions(e.renderGroup, d),
            d.uniformBatch && d.uniformBatch.renderEnd(),
            r && e.renderGroup.localTransform.copyFrom(o),
            (e.parent = t),
            (e.renderGroup.renderGroupParent = i));
        }
        destroy() {
          this._renderer = null;
        }
        _updateCachedRenderGroups(e, r) {
          if (((e._parentCacheAsTextureRenderGroup = r), e.isCachedAsTexture)) {
            if (!e.textureNeedsUpdate) return;
            r = e;
          }
          for (let t = e.renderGroupChildren.length - 1; t >= 0; t--)
            this._updateCachedRenderGroups(e.renderGroupChildren[t], r);
          if ((e.invalidateMatrices(), e.isCachedAsTexture)) {
            if (e.textureNeedsUpdate) {
              let t = e.root.getLocalBounds(),
                i = this._renderer,
                s = e.textureOptions.resolution || i.view.resolution,
                o = e.textureOptions.antialias ?? i.view.antialias,
                d = e.textureOptions.scaleMode ?? "linear",
                c = e.texture;
              (t.ceil(), e.texture && po.returnTexture(e.texture, !0));
              let f = po.getOptimalTexture(t.width, t.height, s, o);
              ((f._source.style = new E_({ scaleMode: d })),
                (e.texture = f),
                e._textureBounds || (e._textureBounds = new An()),
                e._textureBounds.copyFrom(t),
                c !== e.texture && e.renderGroupParent && (e.renderGroupParent.structureDidChange = !0));
            }
          } else e.texture && (po.returnTexture(e.texture, !0), (e.texture = null));
        }
        _updateRenderGroups(e) {
          let r = this._renderer,
            t = r.renderPipes;
          if (
            (e.runOnRender(r),
            (e.instructionSet.renderPipes = t),
            e.structureDidChange ? clearList(e.childrenRenderablesToUpdate.list, 0) : validateRenderables(e, t),
            updateRenderGroupTransforms(e),
            e.structureDidChange
              ? ((e.structureDidChange = !1), this._buildInstructions(e, r))
              : this._updateRenderables(e),
            (e.childrenRenderablesToUpdate.index = 0),
            r.renderPipes.batch.upload(e.instructionSet),
            !(e.isCachedAsTexture && !e.textureNeedsUpdate))
          )
            for (let i = 0; i < e.renderGroupChildren.length; i++)
              this._updateRenderGroups(e.renderGroupChildren[i]);
        }
        _updateRenderables(e) {
          let { list: r, index: t } = e.childrenRenderablesToUpdate;
          for (let i = 0; i < t; i++) {
            let s = r[i];
            s.didViewUpdate && e.updateRenderable(s);
          }
          clearList(r, t);
        }
        _buildInstructions(e, r) {
          let t = e.root,
            i = e.instructionSet;
          i.reset();
          let s = r.renderPipes ? r : r.batch.renderer,
            o = s.renderPipes;
          (o.batch.buildStart(i),
            o.blendMode.buildStart(),
            o.colorMask.buildStart(),
            t.sortableChildren && t.sortChildren(),
            t.collectRenderablesWithEffects(i, s, null),
            o.batch.buildEnd(i),
            o.blendMode.buildEnd(i));
        }
      }
