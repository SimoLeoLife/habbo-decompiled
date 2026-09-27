// Estratto da HabboAirLauncher.deobf.js, riga 6877.

class HY {
      static {
        n(this, "_Spritesheet");
      }
      constructor(e, r) {
        this.linkedSheets = [];
        let t = e;
        e?.source instanceof Wi && (t = { texture: e, data: r });
        let { texture: i, data: s, cachePrefix: o = "" } = t;
        ((this.cachePrefix = o),
          (this._texture = i instanceof Texture ? i : null),
          (this.textureSource = i.source),
          (this.textures = {}),
          (this.animations = {}),
          (this.data = s));
        let d = parseFloat(s.meta.scale);
        (d
          ? ((this.resolution = d), (i.source.resolution = this.resolution))
          : (this.resolution = i.source._resolution),
          (this._frames = this.data.frames),
          (this._frameKeys = Object.keys(this._frames)),
          (this._batchIndex = 0),
          (this._callback = null));
      }
      parse() {
        return new Promise((e) => {
          ((this._callback = e),
            (this._batchIndex = 0),
            this._frameKeys.length <= HY.BATCH_SIZE
              ? (this._processFrames(0), this._processAnimations(), this._parseComplete())
              : this._nextBatch());
        });
      }
      parseSync() {
        return (this._processFrames(0, !0), this._processAnimations(), this.textures);
      }
      _processFrames(e, r = !1) {
        let t = e,
          i = r ? 1 / 0 : HY.BATCH_SIZE;
        for (; t - e < i && t < this._frameKeys.length;) {
          let s = this._frameKeys[t],
            o = this._frames[s],
            d = o.frame;
          if (d) {
            let c = null,
              f = null,
              l = o.trimmed !== !1 && o.sourceSize ? o.sourceSize : o.frame,
              b = new xa(0, 0, Math.floor(l.w) / this.resolution, Math.floor(l.h) / this.resolution);
            (o.rotated
              ? (c = new xa(
                  Math.floor(d.x) / this.resolution,
                  Math.floor(d.y) / this.resolution,
                  Math.floor(d.h) / this.resolution,
                  Math.floor(d.w) / this.resolution,
                ))
              : (c = new xa(
                  Math.floor(d.x) / this.resolution,
                  Math.floor(d.y) / this.resolution,
                  Math.floor(d.w) / this.resolution,
                  Math.floor(d.h) / this.resolution,
                )),
              o.trimmed !== !1 &&
                o.spriteSourceSize &&
                (f = new xa(
                  Math.floor(o.spriteSourceSize.x) / this.resolution,
                  Math.floor(o.spriteSourceSize.y) / this.resolution,
                  Math.floor(d.w) / this.resolution,
                  Math.floor(d.h) / this.resolution,
                )),
              (this.textures[s] = new Texture({
                source: this.textureSource,
                frame: c,
                orig: b,
                trim: f,
                rotate: o.rotated ? 2 : 0,
                defaultAnchor: o.anchor,
                defaultBorders: o.borders,
                label: s.toString(),
              })));
          }
          t++;
        }
      }
      _processAnimations() {
        let e = this.data.animations || {};
        for (let r in e) {
          this.animations[r] = [];
          for (let t = 0; t < e[r].length; t++) {
            let i = e[r][t];
            this.animations[r].push(this.textures[i]);
          }
        }
      }
      _parseComplete() {
        let e = this._callback;
        ((this._callback = null), (this._batchIndex = 0), e.call(this, this.textures));
      }
      _nextBatch() {
        (this._processFrames(this._batchIndex * HY.BATCH_SIZE),
          this._batchIndex++,
          setTimeout(() => {
            this._batchIndex * HY.BATCH_SIZE < this._frameKeys.length
              ? this._nextBatch()
              : (this._processAnimations(), this._parseComplete());
          }, 0));
      }
      destroy(e = !1) {
        for (let r in this.textures) this.textures[r].destroy();
        ((this._frames = null),
          (this._frameKeys = null),
          (this.data = null),
          (this.textures = null),
          e && (this._texture?.destroy(), this.textureSource.destroy()),
          (this._texture = null),
          (this.textureSource = null),
          (this.linkedSheets = []));
      }
    }
