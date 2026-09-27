// Estratto da HabboAirLauncher.deobf.js, riga 30829.

class {
    static {
      n(this, "TilingSpritePipe");
    }
    constructor(e) {
      ((this._state = ed.default2d),
        (this._renderer = e),
        (this._managedTilingSprites = new GCManagedHash({ renderer: e, type: "renderable", name: "tilingSprite" })));
    }
    validateRenderable(e) {
      let r = this._getTilingSpriteData(e),
        t = r.canBatch;
      this._updateCanBatch(e);
      let i = r.canBatch;
      if (i && i === t) {
        let { batchableMesh: s } = r;
        return !s._batcher.checkAndUpdateTexture(s, e.texture);
      }
      return t !== i;
    }
    addRenderable(e, r) {
      let t = this._renderer.renderPipes.batch;
      this._updateCanBatch(e);
      let i = this._getTilingSpriteData(e),
        { geometry: s, canBatch: o } = i;
      if (o) {
        i.batchableMesh || (i.batchableMesh = new BatchableMesh());
        let d = i.batchableMesh;
        (e.didViewUpdate &&
          (this._updateBatchableMesh(e),
          (d.geometry = s),
          (d.renderable = e),
          (d.transform = e.groupTransform),
          d.setTexture(e._texture)),
          (d.roundPixels = this._renderer._roundPixels | e._roundPixels),
          t.addToBatch(d, r));
      } else (t.break(r), i.shader || (i.shader = new TilingSpriteShader()), this.updateRenderable(e), r.add(e));
    }
    execute(e) {
      let r = this._renderer,
        { shader: t } = this._getTilingSpriteData(e);
      t.groups[0] = r.globalUniforms.bindGroup;
      let i = t.resources.localUniforms.uniforms;
      ((i.uTransformMatrix = e.groupTransform),
        (i.uRound = r._roundPixels | e._roundPixels),
        color32BitToUniform(e.groupColorAlpha, i.uColor, 0),
        (this._state.blendMode = getAdjustedBlendModeBlend(e.groupBlendMode, e.texture._source)),
        r.encoder.draw({ geometry: Kte, shader: t, state: this._state }));
    }
    updateRenderable(e) {
      let r = this._getTilingSpriteData(e),
        { canBatch: t } = r;
      if (t) {
        let { batchableMesh: i } = r;
        (e.didViewUpdate && this._updateBatchableMesh(e), i._batcher.updateElement(i));
      } else if (e.didViewUpdate) {
        let { shader: i } = r;
        i.updateUniforms(e.width, e.height, e._tileTransform.matrix, e.anchor.x, e.anchor.y, e.texture);
      }
    }
    _getTilingSpriteData(e) {
      return e._gpuData[this._renderer.uid] || this._initTilingSpriteData(e);
    }
    _initTilingSpriteData(e) {
      let r = new TilingSpriteGpuData();
      return ((r.renderable = e), (e._gpuData[this._renderer.uid] = r), this._managedTilingSprites.add(e), r);
    }
    _updateBatchableMesh(e) {
      let r = this._getTilingSpriteData(e),
        { geometry: t } = r,
        i = e.texture.source.style;
      (i.addressMode !== "repeat" && ((i.addressMode = "repeat"), i.update()),
        setUvs(e, t.uvs),
        setPositions(e, t.positions));
    }
    destroy() {
      (this._managedTilingSprites.destroy(), (this._renderer = null));
    }
    _updateCanBatch(e) {
      let r = this._getTilingSpriteData(e),
        t = e.texture,
        i = !0;
      return (
        this._renderer.type === Jo.WEBGL && (i = this._renderer.context.supports.nonPowOf2wrapping),
        (r.canBatch = t.textureMatrix.isSimple && (i || t.source.isPowerOfTwo)),
        r.canBatch
      );
    }
  }
