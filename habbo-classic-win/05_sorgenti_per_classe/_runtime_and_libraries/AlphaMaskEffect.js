// Extracted from HabboAirLauncher.deobf.js, line 12862.

class extends FilterEffect {
        static {
          n(this, "AlphaMaskEffect");
        }
        constructor() {
          (super(),
            (this.filters = [
              new MaskFilter({ sprite: new Jt(Texture.EMPTY), inverse: !1, resolution: "inherit", antialias: "inherit" }),
            ]));
        }
        get sprite() {
          return this.filters[0].sprite;
        }
        set sprite(e) {
          this.filters[0].sprite = e;
        }
        get inverse() {
          return this.filters[0].inverse;
        }
        set inverse(e) {
          this.filters[0].inverse = e;
        }
      }
