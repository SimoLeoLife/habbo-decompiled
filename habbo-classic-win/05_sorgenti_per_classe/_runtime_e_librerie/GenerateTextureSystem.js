// Estratto da HabboAirLauncher.deobf.js, riga 13411.

class {
        static {
          n(this, "GenerateTextureSystem");
        }
        constructor(e) {
          this._renderer = e;
        }
        generateTexture(e) {
          e instanceof Ii && (e = { target: e, frame: void 0, textureSourceOptions: {}, resolution: void 0 });
          let r = e.resolution || this._renderer.resolution,
            t = e.antialias || this._renderer.view.antialias,
            i = e.target,
            s = e.clearColor;
          s ? (s = Array.isArray(s) && s.length === 4 ? s : na.shared.setValue(s).toArray()) : (s = tor);
          let o = e.frame?.copyTo(eor) || getLocalBounds_(i, ror).rectangle;
          ((o.width = Math.max(o.width, 1 / r) | 0), (o.height = Math.max(o.height, 1 / r) | 0));
          let d = sn.create({
              ...e.textureSourceOptions,
              width: o.width,
              height: o.height,
              resolution: r,
              antialias: t,
            }),
            c = Ze.shared.translate(-o.x, -o.y);
          return (
            this._renderer.render({ container: i, transform: c, target: d, clearColor: s }),
            d.source.updateMipmaps(),
            d
          );
        }
        destroy() {
          this._renderer = null;
        }
      }
