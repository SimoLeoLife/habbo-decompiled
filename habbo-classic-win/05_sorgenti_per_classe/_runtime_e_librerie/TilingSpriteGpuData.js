// Estratto da HabboAirLauncher.deobf.js, riga 30813.

class {
    static {
      n(this, "TilingSpriteGpuData");
    }
    constructor() {
      ((this.canBatch = !0),
        (this.geometry = new Gte({
          indices: Kte.indices.slice(),
          positions: Kte.positions.slice(),
          uvs: Kte.uvs.slice(),
        })));
    }
    destroy() {
      (this.geometry.destroy(), this.shader?.destroy());
    }
  }
