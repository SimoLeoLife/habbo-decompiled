// Estratto da HabboAirLauncher.deobf.js, riga 7378.

class extends Wi {
      static {
        n(this, "CanvasSource");
      }
      constructor(e) {
        (e.resource || (e.resource = yt.get().createCanvas()),
          e.width || ((e.width = e.resource.width), e.autoDensity || (e.width /= e.resolution)),
          e.height || ((e.height = e.resource.height), e.autoDensity || (e.height /= e.resolution)),
          super(e),
          (this.uploadMethodId = "image"),
          (this.autoDensity = e.autoDensity),
          this.resizeCanvas(),
          (this.transparent = !!e.transparent));
      }
      resizeCanvas() {
        (this.autoDensity &&
          "style" in this.resource &&
          ((this.resource.style.width = `${this.width}px`),
          (this.resource.style.height = `${this.height}px`)),
          (this.resource.width !== this.pixelWidth || this.resource.height !== this.pixelHeight) &&
            ((this.resource.width = this.pixelWidth), (this.resource.height = this.pixelHeight)));
      }
      resize(e = this.width, r = this.height, t = this._resolution) {
        let i = super.resize(e, r, t);
        return (i && this.resizeCanvas(), i);
      }
      static test(e) {
        return (
          (globalThis.HTMLCanvasElement && e instanceof HTMLCanvasElement) ||
          (globalThis.OffscreenCanvas && e instanceof OffscreenCanvas)
        );
      }
      get context2D() {
        return this._context2D || (this._context2D = this.resource.getContext("2d"));
      }
    }
