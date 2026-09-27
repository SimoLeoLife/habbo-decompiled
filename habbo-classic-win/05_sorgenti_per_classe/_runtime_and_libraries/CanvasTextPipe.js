// Extracted from HabboAirLauncher.deobf.js, line 31528.

class {
  static {
    n(this, "CanvasTextPipe");
  }
  constructor(e) {
    ((this._renderer = e),
      e.runners.resolutionChange.add(this),
      (this._managedTexts = new GCManagedHash({
        renderer: e,
        type: "renderable",
        onUnload: this.onTextUnload.bind(this),
        name: "canvasText",
      })));
  }
  resolutionChange() {
    for (let e in this._managedTexts.items) {
      let r = this._managedTexts.items[e];
      r?._autoResolution && r.onViewUpdate();
    }
  }
  validateRenderable(e) {
    let r = this._getGpuText(e),
      t = e.styleKey;
    return r.currentKey !== t ? !0 : e._didTextUpdate;
  }
  addRenderable(e, r) {
    let t = this._getGpuText(e);
    if (e._didTextUpdate) {
      let i = e._autoResolution ? this._renderer.resolution : e.resolution;
      ((t.currentKey !== e.styleKey || e._resolution !== i) && this._updateGpuText(e),
        (e._didTextUpdate = !1),
        updateTextBounds(t, e));
    }
    this._renderer.renderPipes.batch.addToBatch(t, r);
  }
  updateRenderable(e) {
    let r = this._getGpuText(e);
    r._batcher.updateElement(r);
  }
  _updateGpuText(e) {
    let r = this._getGpuText(e);
    (r.texture && this._renderer.canvasText.decreaseReferenceCount(r.currentKey),
      (e._resolution = e._autoResolution ? this._renderer.resolution : e.resolution),
      (r.texture = this._renderer.canvasText.getManagedTexture(e)),
      (r.currentKey = e.styleKey));
  }
  _getGpuText(e) {
    return e._gpuData[this._renderer.uid] || this.initGpuText(e);
  }
  initGpuText(e) {
    let r = new BatchableText();
    return (
      (r.currentKey = "--"),
      (r.renderable = e),
      (r.transform = e.groupTransform),
      (r.bounds = { minX: 0, maxX: 1, minY: 0, maxY: 0 }),
      (r.roundPixels = this._renderer._roundPixels | e._roundPixels),
      (e._gpuData[this._renderer.uid] = r),
      this._managedTexts.add(e),
      r
    );
  }
  onTextUnload(e) {
    let r = e._gpuData[this._renderer.uid];
    if (!r) return;
    let { canvasText: t } = this._renderer;
    t.getReferenceCount(r.currentKey) > 0
      ? t.decreaseReferenceCount(r.currentKey)
      : r.texture && t.returnTexture(r.texture);
  }
  destroy() {
    (this._managedTexts.destroy(), (this._renderer = null));
  }
}
