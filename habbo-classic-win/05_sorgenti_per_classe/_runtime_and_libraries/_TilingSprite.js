// Extracted from HabboAirLauncher.deobf.js, line 30921.

class $te extends ViewContainer {
  static {
    n(this, "_TilingSprite");
  }
  constructor(...e) {
    let r = e[0] || {};
    (r instanceof Texture && (r = { texture: r }),
      e.length > 1 &&
        (Zr(Va, "use new TilingSprite({ texture, width:100, height:100 }) instead"),
        (r.width = e[1]),
        (r.height = e[2])),
      (r = { ...$te.defaultOptions, ...r }));
    let {
      texture: t,
      anchor: i,
      tilePosition: s,
      tileScale: o,
      tileRotation: d,
      width: c,
      height: f,
      applyAnchorToTexture: l,
      roundPixels: b,
      ..._
    } = r ?? {};
    (super({ label: "TilingSprite", ..._ }),
      (this.renderPipeId = "tilingSprite"),
      (this.batched = !0),
      (this.allowChildren = !1),
      (this._anchor = new Kn({
        _onUpdate: n(() => {
          this.onViewUpdate();
        }, "_onUpdate"),
      })),
      (this.applyAnchorToTexture = l),
      (this.texture = t),
      (this._width = c ?? t.width),
      (this._height = f ?? t.height),
      (this._tileTransform = new Transform({ observer: { _onUpdate: n(() => this.onViewUpdate(), "_onUpdate") } })),
      i && (this.anchor = i),
      (this.tilePosition = s),
      (this.tileScale = o),
      (this.tileRotation = d),
      (this.roundPixels = b ?? !1));
  }
  static from(e, r = {}) {
    return typeof e == "string" ? new $te({ texture: n6.get(e), ...r }) : new $te({ texture: e, ...r });
  }
  get uvRespectAnchor() {
    return (
      Zr(Va, "uvRespectAnchor is deprecated, please use applyAnchorToTexture instead"),
      this.applyAnchorToTexture
    );
  }
  set uvRespectAnchor(e) {
    (Zr(Va, "uvRespectAnchor is deprecated, please use applyAnchorToTexture instead"),
      (this.applyAnchorToTexture = e));
  }
  get clampMargin() {
    return this._texture.textureMatrix.clampMargin;
  }
  set clampMargin(e) {
    this._texture.textureMatrix.clampMargin = e;
  }
  get anchor() {
    return this._anchor;
  }
  set anchor(e) {
    typeof e == "number" ? this._anchor.set(e) : this._anchor.copyFrom(e);
  }
  get tilePosition() {
    return this._tileTransform.position;
  }
  set tilePosition(e) {
    this._tileTransform.position.copyFrom(e);
  }
  get tileScale() {
    return this._tileTransform.scale;
  }
  set tileScale(e) {
    typeof e == "number" ? this._tileTransform.scale.set(e) : this._tileTransform.scale.copyFrom(e);
  }
  set tileRotation(e) {
    this._tileTransform.rotation = e;
  }
  get tileRotation() {
    return this._tileTransform.rotation;
  }
  get tileTransform() {
    return this._tileTransform;
  }
  set texture(e) {
    e || (e = Texture.EMPTY);
    let r = this._texture;
    r !== e &&
      (r && r.dynamic && r.off("update", this.onViewUpdate, this),
      e.dynamic && e.on("update", this.onViewUpdate, this),
      (this._texture = e),
      this.onViewUpdate());
  }
  get texture() {
    return this._texture;
  }
  set width(e) {
    ((this._width = e), this.onViewUpdate());
  }
  get width() {
    return this._width;
  }
  set height(e) {
    ((this._height = e), this.onViewUpdate());
  }
  get height() {
    return this._height;
  }
  setSize(e, r) {
    (typeof e == "object" && ((r = e.height ?? e.width), (e = e.width)),
      (this._width = e),
      (this._height = r ?? e),
      this.onViewUpdate());
  }
  getSize(e) {
    return (e || (e = {}), (e.width = this._width), (e.height = this._height), e);
  }
  updateBounds() {
    let e = this._bounds,
      r = this._anchor,
      t = this._width,
      i = this._height;
    ((e.minX = -r._x * t), (e.maxX = e.minX + t), (e.minY = -r._y * i), (e.maxY = e.minY + i));
  }
  containsPoint(e) {
    let r = this._width,
      t = this._height,
      i = -r * this._anchor._x,
      s = 0;
    return e.x >= i && e.x <= i + r && ((s = -t * this._anchor._y), e.y >= s && e.y <= s + t);
  }
  destroy(e = !1) {
    if (
      (super.destroy(e),
      (this._anchor = null),
      (this._tileTransform = null),
      (this._bounds = null),
      typeof e == "boolean" ? e : e?.texture)
    ) {
      let t = typeof e == "boolean" ? e : e?.textureSource;
      this._texture.destroy(t);
    }
    this._texture = null;
  }
}
