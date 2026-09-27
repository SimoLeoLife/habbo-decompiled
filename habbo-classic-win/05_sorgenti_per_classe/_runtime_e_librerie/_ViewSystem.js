// Estratto da HabboAirLauncher.deobf.js, riga 14134.

class Zje {
      static {
        n(this, "_ViewSystem");
      }
      get autoDensity() {
        return this.texture.source.autoDensity;
      }
      set autoDensity(e) {
        this.texture.source.autoDensity = e;
      }
      get resolution() {
        return this.texture.source._resolution;
      }
      set resolution(e) {
        this.texture.source.resize(this.texture.source.width, this.texture.source.height, e);
      }
      init(e) {
        ((e = { ...Zje.defaultOptions, ...e }),
          e.view && (Zr(Va, "ViewSystem.view has been renamed to ViewSystem.canvas"), (e.canvas = e.view)),
          (this.screen = new xa(0, 0, e.width, e.height)),
          (this.canvas = e.canvas || yt.get().createCanvas()),
          (this.antialias = !!e.antialias),
          (this.texture = getCanvasTexture(this.canvas, e)),
          (this.renderTarget = new MK({ colorTextures: [this.texture], depth: !!e.depth, isRoot: !0 })),
          (this.texture.source.transparent = e.backgroundAlpha < 1),
          (this.resolution = e.resolution));
      }
      resize(e, r, t) {
        (this.texture.source.resize(e, r, t),
          (this.screen.width = this.texture.frame.width),
          (this.screen.height = this.texture.frame.height));
      }
      destroy(e = !1) {
        ((typeof e == "boolean" ? e : !!e?.removeView) &&
          this.canvas.parentNode &&
          this.canvas.parentNode.removeChild(this.canvas),
          this.texture.destroy());
      }
    }
