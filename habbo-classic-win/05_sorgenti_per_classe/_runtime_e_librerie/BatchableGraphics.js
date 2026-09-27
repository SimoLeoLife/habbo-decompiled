// Estratto da HabboAirLauncher.deobf.js, riga 20455.

class {
        static {
          n(this, "BatchableGraphics");
        }
        constructor() {
          ((this.packAsQuad = !1),
            (this.batcherName = "default"),
            (this.topology = "triangle-list"),
            (this.applyTransform = !0),
            (this.roundPixels = 0),
            (this._batcher = null),
            (this._batch = null));
        }
        get uvs() {
          return this.geometryData.uvs;
        }
        get positions() {
          return this.geometryData.vertices;
        }
        get indices() {
          return this.geometryData.indices;
        }
        get blendMode() {
          return this.renderable && this.applyTransform ? this.renderable.groupBlendMode : "normal";
        }
        get color() {
          let e = this.baseColor,
            r = (e >> 16) | (e & 65280) | ((e & 255) << 16),
            t = this.renderable;
          return t
            ? multiplyHexColors(r, t.groupColor) + ((this.alpha * t.groupAlpha * 255) << 24)
            : r + ((this.alpha * 255) << 24);
        }
        get transform() {
          return this.renderable?.groupTransform || Por;
        }
        copyTo(e) {
          ((e.indexOffset = this.indexOffset),
            (e.indexSize = this.indexSize),
            (e.attributeOffset = this.attributeOffset),
            (e.attributeSize = this.attributeSize),
            (e.baseColor = this.baseColor),
            (e.alpha = this.alpha),
            (e.texture = this.texture),
            (e.geometryData = this.geometryData),
            (e.topology = this.topology));
        }
        reset() {
          ((this.applyTransform = !0), (this.renderable = null), (this.topology = "triangle-list"));
        }
        destroy() {
          ((this.renderable = null),
            (this.texture = null),
            (this.geometryData = null),
            (this._batcher = null),
            (this._batch = null));
        }
      }
