// Extracted from HabboAirLauncher.deobf.js, line 31627.

class {
  static {
    n(this, "AbstractTextSystem");
  }
  constructor(e, r) {
    ((this._activeTextures = {}), (this._renderer = e), (this._retainCanvasContext = r));
  }
  getTexture(e, r, t, i) {
    (typeof e == "string" &&
      (Zr("8.0.0", "CanvasTextSystem.getTexture: Use object TextOptions instead of separate arguments"),
      (e = { text: e, style: t, resolution: r })),
      e.style instanceof u6 || (e.style = new u6(e.style)),
      e.textureStyle instanceof E_ || (e.textureStyle = new E_(e.textureStyle)),
      typeof e.text != "string" && (e.text = e.text.toString()));
    let { text: s, style: o, textureStyle: d, autoGenerateMipmaps: c } = e,
      f = e.resolution ?? this._renderer.resolution,
      { frame: l, canvasAndContext: b } = t2.getCanvasAndContext({ text: s, style: o, resolution: f }),
      _ = getPo2TextureFromSource(b.canvas, l.width, l.height, f, c);
    if (
      (d && (_.source.style = d),
      o.trim && (l.pad(o.padding), _.frame.copyFrom(l), _.frame.scale(1 / f), _.updateUvs()),
      o.filters)
    ) {
      let h = this._applyFilters(_, o.filters);
      return (this.returnTexture(_), t2.returnCanvasAndContext(b), h);
    }
    return (
      this._renderer.texture.initSource(_._source),
      this._retainCanvasContext || t2.returnCanvasAndContext(b),
      _
    );
  }
  returnTexture(e) {
    let r = e.source,
      t = r.resource;
    if (this._retainCanvasContext && t?.getContext) {
      let i = t.getContext("2d");
      i && t2.returnCanvasAndContext({ canvas: t, context: i });
    }
    ((r.resource = null),
      (r.uploadMethodId = "unknown"),
      (r.alphaMode = "no-premultiply-alpha"),
      po.returnTexture(e, !0));
  }
  renderTextToCanvas() {
    Zr(
      "8.10.0",
      "CanvasTextSystem.renderTextToCanvas: no longer supported, use CanvasTextSystem.getTexture instead",
    );
  }
  getManagedTexture(e) {
    e._resolution = e._autoResolution ? this._renderer.resolution : e.resolution;
    let r = e.styleKey;
    if (this._activeTextures[r]) return (this._increaseReferenceCount(r), this._activeTextures[r].texture);
    let t = this.getTexture({
      text: e.text,
      style: e.style,
      resolution: e._resolution,
      textureStyle: e.textureStyle,
      autoGenerateMipmaps: e.autoGenerateMipmaps,
    });
    return ((this._activeTextures[r] = { texture: t, usageCount: 1 }), t);
  }
  decreaseReferenceCount(e) {
    let r = this._activeTextures[e];
    r &&
      (r.usageCount--,
      r.usageCount === 0 && (this.returnTexture(r.texture), (this._activeTextures[e] = null)));
  }
  getReferenceCount(e) {
    return this._activeTextures[e]?.usageCount ?? 0;
  }
  _increaseReferenceCount(e) {
    this._activeTextures[e].usageCount++;
  }
  _applyFilters(e, r) {
    let t = this._renderer.renderTarget.renderTarget,
      i = this._renderer.filter.generateFilteredTexture({ texture: e, filters: r });
    return (this._renderer.renderTarget.bind(t, !1), i);
  }
  destroy() {
    this._renderer = null;
    for (let e in this._activeTextures)
      this._activeTextures[e] && this.returnTexture(this._activeTextures[e].texture);
    this._activeTextures = null;
  }
}
