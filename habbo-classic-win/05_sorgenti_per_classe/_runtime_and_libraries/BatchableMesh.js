// Extracted from HabboAirLauncher.deobf.js, line 30397.

class {
  static {
    n(this, "BatchableMesh");
  }
  constructor() {
    ((this.batcherName = "default"),
      (this.packAsQuad = !1),
      (this.indexOffset = 0),
      (this.attributeOffset = 0),
      (this.roundPixels = 0),
      (this._batcher = null),
      (this._batch = null),
      (this._textureMatrixUpdateId = -1),
      (this._uvUpdateId = -1));
  }
  get blendMode() {
    return this.renderable.groupBlendMode;
  }
  get topology() {
    return this._topology || this.geometry.topology;
  }
  set topology(e) {
    this._topology = e;
  }
  reset() {
    ((this.renderable = null),
      (this.texture = null),
      (this._batcher = null),
      (this._batch = null),
      (this.geometry = null),
      (this._uvUpdateId = -1),
      (this._textureMatrixUpdateId = -1));
  }
  setTexture(e) {
    this.texture !== e && ((this.texture = e), (this._textureMatrixUpdateId = -1));
  }
  get uvs() {
    let r = this.geometry.getBuffer("aUV"),
      t = r.data,
      i = t,
      s = this.texture.textureMatrix;
    return (
      s.isSimple ||
        ((i = this._transformedUvs),
        (this._textureMatrixUpdateId !== s._updateID || this._uvUpdateId !== r._updateID) &&
          ((!i || i.length < t.length) && (i = this._transformedUvs = new Float32Array(t.length)),
          (this._textureMatrixUpdateId = s._updateID),
          (this._uvUpdateId = r._updateID),
          s.multiplyUvs(t, i))),
      i
    );
  }
  get positions() {
    return this.geometry.positions;
  }
  get indices() {
    return this.geometry.indices;
  }
  get color() {
    return this.renderable.groupColorAlpha;
  }
  get groupTransform() {
    return this.renderable.groupTransform;
  }
  get attributeSize() {
    return this.geometry.positions.length / 2;
  }
  get indexSize() {
    return this.geometry.indices.length;
  }
}
