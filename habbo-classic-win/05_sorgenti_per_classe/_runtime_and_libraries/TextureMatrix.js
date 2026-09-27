// Extracted from HabboAirLauncher.deobf.js, line 3242.

class {
        static {
          n(this, "TextureMatrix");
        }
        constructor(e, r) {
          ((this.mapCoord = new Ze()),
            (this.uClampFrame = new Float32Array(4)),
            (this.uClampOffset = new Float32Array(2)),
            (this._textureID = -1),
            (this._updateID = 0),
            (this.clampOffset = 0),
            typeof r > "u" ? (this.clampMargin = e.width < 10 ? 0 : 0.5) : (this.clampMargin = r),
            (this.isSimple = !1),
            (this.texture = e));
        }
        get texture() {
          return this._texture;
        }
        set texture(e) {
          this.texture !== e &&
            (this._texture?.removeListener("update", this.update, this),
            (this._texture = e),
            this._texture.addListener("update", this.update, this),
            this.update());
        }
        multiplyUvs(e, r) {
          r === void 0 && (r = e);
          let t = this.mapCoord;
          for (let i = 0; i < e.length; i += 2) {
            let s = e[i],
              o = e[i + 1];
            ((r[i] = s * t.a + o * t.c + t.tx), (r[i + 1] = s * t.b + o * t.d + t.ty));
          }
          return r;
        }
        update() {
          let e = this._texture;
          this._updateID++;
          let r = e.uvs;
          this.mapCoord.set(r.x1 - r.x0, r.y1 - r.y0, r.x3 - r.x0, r.y3 - r.y0, r.x0, r.y0);
          let t = e.orig,
            i = e.trim;
          i &&
            (zHe.set(t.width / i.width, 0, 0, t.height / i.height, -i.x / i.width, -i.y / i.height),
            this.mapCoord.append(zHe));
          let s = e.source,
            o = this.uClampFrame,
            d = this.clampMargin / s._resolution,
            c = this.clampOffset / s._resolution;
          return (
            (o[0] = (e.frame.x + d + c) / s.width),
            (o[1] = (e.frame.y + d + c) / s.height),
            (o[2] = (e.frame.x + e.frame.width - d + c) / s.width),
            (o[3] = (e.frame.y + e.frame.height - d + c) / s.height),
            (this.uClampOffset[0] = this.clampOffset / s.pixelWidth),
            (this.uClampOffset[1] = this.clampOffset / s.pixelHeight),
            (this.isSimple = e.frame.width === s.width && e.frame.height === s.height && e.rotate === 0),
            !0
          );
        }
      }
