// Extracted from HabboAirLauncher.deobf.js, line 31736.

class extends AbstractText {
  static {
    n(this, "Text");
  }
  constructor(...e) {
    let r = ensureTextOptions(e, "Text");
    (super(r, u6),
      (this.renderPipeId = "text"),
      r.textureStyle &&
        (this.textureStyle = r.textureStyle instanceof E_ ? r.textureStyle : new E_(r.textureStyle)),
      (this.autoGenerateMipmaps = r.autoGenerateMipmaps ?? Wi.defaultOptions.autoGenerateMipmaps));
  }
  updateBounds() {
    let e = this._bounds,
      r = this._anchor,
      t = 0,
      i = 0;
    if (this._style.trim) {
      let { frame: s, canvasAndContext: o } = t2.getCanvasAndContext({
        text: this.text,
        style: this._style,
        resolution: 1,
      });
      (t2.returnCanvasAndContext(o), (t = s.width), (i = s.height));
    } else {
      let s = Mb.measureText(this._text, this._style);
      ((t = s.width), (i = s.height));
    }
    ((e.minX = -r._x * t), (e.maxX = e.minX + t), (e.minY = -r._y * i), (e.maxY = e.minY + i));
  }
}
