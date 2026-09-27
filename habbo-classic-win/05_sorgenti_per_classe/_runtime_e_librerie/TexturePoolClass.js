// Estratto da HabboAirLauncher.deobf.js, riga 3454.

class {
        static {
          n(this, "TexturePoolClass");
        }
        constructor(e) {
          ((this._poolKeyHash = Object.create(null)),
            (this._texturePool = {}),
            (this.textureOptions = e || {}),
            (this.enableFullScreen = !1),
            (this.textureStyle = new E_(this.textureOptions)));
        }
        createTexture(e, r, t, i) {
          let s = new Wi({
            ...this.textureOptions,
            width: e,
            height: r,
            resolution: 1,
            antialias: t,
            autoGarbageCollect: !1,
            autoGenerateMipmaps: i,
          });
          return new Texture({ source: s, label: `texturePool_${jnr++}` });
        }
        getOptimalTexture(e, r, t = 1, i, s = !1) {
          let o = Math.ceil(e * t - 1e-6),
            d = Math.ceil(r * t - 1e-6);
          ((o = nextPow2(o)), (d = nextPow2(d)));
          let c = i ? 1 : 0,
            f = s ? 1 : 0,
            l = (o << 17) + (d << 2) + (f << 1) + c;
          this._texturePool[l] || (this._texturePool[l] = []);
          let b = this._texturePool[l].pop();
          return (
            b || (b = this.createTexture(o, d, i, s)),
            (b.source._resolution = t),
            (b.source.width = o / t),
            (b.source.height = d / t),
            (b.source.pixelWidth = o),
            (b.source.pixelHeight = d),
            (b.frame.x = 0),
            (b.frame.y = 0),
            (b.frame.width = e),
            (b.frame.height = r),
            b.updateUvs(),
            (this._poolKeyHash[b.uid] = l),
            b
          );
        }
        getSameSizeTexture(e, r = !1) {
          let t = e.source;
          return this.getOptimalTexture(e.width, e.height, t._resolution, r);
        }
        returnTexture(e, r = !1) {
          let t = this._poolKeyHash[e.uid];
          (r && (e.source.style = this.textureStyle), this._texturePool[t].push(e));
        }
        clear(e) {
          if (((e = e !== !1), e))
            for (let r in this._texturePool) {
              let t = this._texturePool[r];
              if (t) for (let i = 0; i < t.length; i++) t[i].destroy(!0);
            }
          this._texturePool = {};
        }
      }
