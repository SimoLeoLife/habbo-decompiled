// Estratto da HabboAirLauncher.deobf.js, riga 31086.

class extends ViewContainer {
  static {
    n(this, "AbstractText");
  }
  constructor(e, r) {
    let { text: t, resolution: i, style: s, anchor: o, width: d, height: c, roundPixels: f, ...l } = e;
    (super({ ...l }),
      (this.batched = !0),
      (this._resolution = null),
      (this._autoResolution = !0),
      (this._didTextUpdate = !0),
      (this._styleClass = r),
      (this.text = t ?? ""),
      (this.style = s),
      (this.resolution = i ?? null),
      (this.allowChildren = !1),
      (this._anchor = new Kn({
        _onUpdate: n(() => {
          this.onViewUpdate();
        }, "_onUpdate"),
      })),
      o && (this.anchor = o),
      (this.roundPixels = f ?? !1),
      d !== void 0 && (this.width = d),
      c !== void 0 && (this.height = c));
  }
  get anchor() {
    return this._anchor;
  }
  set anchor(e) {
    typeof e == "number" ? this._anchor.set(e) : this._anchor.copyFrom(e);
  }
  set text(e) {
    ((e = e.toString()), this._text !== e && ((this._text = e), this.onViewUpdate()));
  }
  get text() {
    return this._text;
  }
  set resolution(e) {
    ((this._autoResolution = e === null), (this._resolution = e), this.onViewUpdate());
  }
  get resolution() {
    return this._resolution;
  }
  get style() {
    return this._style;
  }
  set style(e) {
    (e || (e = {}),
      this._style?.off("update", this.onViewUpdate, this),
      e instanceof this._styleClass ? (this._style = e) : (this._style = new this._styleClass(e)),
      this._style.on("update", this.onViewUpdate, this),
      this.onViewUpdate());
  }
  get width() {
    return Math.abs(this.scale.x) * this.bounds.width;
  }
  set width(e) {
    this._setWidth(e, this.bounds.width);
  }
  get height() {
    return Math.abs(this.scale.y) * this.bounds.height;
  }
  set height(e) {
    this._setHeight(e, this.bounds.height);
  }
  getSize(e) {
    return (
      e || (e = {}),
      (e.width = Math.abs(this.scale.x) * this.bounds.width),
      (e.height = Math.abs(this.scale.y) * this.bounds.height),
      e
    );
  }
  setSize(e, r) {
    (typeof e == "object" ? ((r = e.height ?? e.width), (e = e.width)) : (r ?? (r = e)),
      e !== void 0 && this._setWidth(e, this.bounds.width),
      r !== void 0 && this._setHeight(r, this.bounds.height));
  }
  containsPoint(e) {
    let r = this.bounds.width,
      t = this.bounds.height,
      i = -r * this.anchor.x,
      s = 0;
    return e.x >= i && e.x <= i + r && ((s = -t * this.anchor.y), e.y >= s && e.y <= s + t);
  }
  onViewUpdate() {
    (this.didViewUpdate || (this._didTextUpdate = !0), super.onViewUpdate());
  }
  destroy(e = !1) {
    (super.destroy(e),
      (this.owner = null),
      (this._bounds = null),
      (this._anchor = null),
      (typeof e == "boolean" ? e : e?.style) && this._style.destroy(e),
      (this._style = null),
      (this._text = null));
  }
  get styleKey() {
    return `${this._text}:${this._style.styleKey}:${this._resolution}`;
  }
}
