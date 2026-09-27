// Estratto da HabboAirLauncher.deobf.js, riga 11842.

class {
      static {
        n(this, "SpritePipe");
      }
      constructor(e) {
        this._renderer = e;
      }
      addRenderable(e, r) {
        let t = this._getGpuSprite(e);
        (e.didViewUpdate && this._updateBatchableSprite(e, t),
          this._renderer.renderPipes.batch.addToBatch(t, r));
      }
      updateRenderable(e) {
        let r = this._getGpuSprite(e);
        (e.didViewUpdate && this._updateBatchableSprite(e, r), r._batcher.updateElement(r));
      }
      validateRenderable(e) {
        let r = this._getGpuSprite(e);
        return !r._batcher.checkAndUpdateTexture(r, e._texture);
      }
      _updateBatchableSprite(e, r) {
        ((r.bounds = e.visualBounds), (r.texture = e._texture));
      }
      _getGpuSprite(e) {
        return e._gpuData[this._renderer.uid] || this._initGPUSprite(e);
      }
      _initGPUSprite(e) {
        let r = new BatchableSprite();
        return (
          (r.renderable = e),
          (r.transform = e.groupTransform),
          (r.texture = e._texture),
          (r.bounds = e.visualBounds),
          (r.roundPixels = this._renderer._roundPixels | e._roundPixels),
          (e._gpuData[this._renderer.uid] = r),
          r
        );
      }
      destroy() {
        this._renderer = null;
      }
    }
