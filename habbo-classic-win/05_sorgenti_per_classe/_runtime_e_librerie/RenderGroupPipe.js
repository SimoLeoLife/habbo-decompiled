// Estratto da HabboAirLauncher.deobf.js, riga 11566.

class {
      static {
        n(this, "RenderGroupPipe");
      }
      constructor(e) {
        this._renderer = e;
      }
      addRenderGroup(e, r) {
        e.isCachedAsTexture ? this._addRenderableCacheAsTexture(e, r) : this._addRenderableDirect(e, r);
      }
      execute(e) {
        e.isRenderable && (e.isCachedAsTexture ? this._executeCacheAsTexture(e) : this._executeDirect(e));
      }
      destroy() {
        this._renderer = null;
      }
      _addRenderableDirect(e, r) {
        (this._renderer.renderPipes.batch.break(r),
          e._batchableRenderGroup && (ds.return(e._batchableRenderGroup), (e._batchableRenderGroup = null)),
          r.add(e));
      }
      _addRenderableCacheAsTexture(e, r) {
        let t = e._batchableRenderGroup ?? (e._batchableRenderGroup = ds.get(BatchableSprite));
        ((t.renderable = e.root),
          (t.transform = e.root.relativeGroupTransform),
          (t.texture = e.texture),
          (t.bounds = e._textureBounds),
          r.add(e),
          this._renderer.renderPipes.blendMode.pushBlendMode(e, e.root.groupBlendMode, r),
          this._renderer.renderPipes.batch.addToBatch(t, r),
          this._renderer.renderPipes.blendMode.popBlendMode(r));
      }
      _executeCacheAsTexture(e) {
        if (e.textureNeedsUpdate) {
          e.textureNeedsUpdate = !1;
          let r = new Ze().translate(-e._textureBounds.x, -e._textureBounds.y);
          (this._renderer.renderTarget.push(e.texture, !0, null, e.texture.frame),
            this._renderer.globalUniforms.push({
              worldTransformMatrix: r,
              worldColor: 4294967295,
              offset: { x: 0, y: 0 },
            }),
            executeInstructions(e, this._renderer.renderPipes),
            this._renderer.renderTarget.finishRenderPass(),
            this._renderer.renderTarget.pop(),
            this._renderer.globalUniforms.pop());
        }
        (e._batchableRenderGroup._batcher.updateElement(e._batchableRenderGroup),
          e._batchableRenderGroup._batcher.geometry.buffers[0].update());
      }
      _executeDirect(e) {
        (this._renderer.globalUniforms.push({
          worldTransformMatrix: e.inverseParentTextureTransform,
          worldColor: e.worldColorAlpha,
        }),
          executeInstructions(e, this._renderer.renderPipes),
          this._renderer.globalUniforms.pop());
      }
    }
