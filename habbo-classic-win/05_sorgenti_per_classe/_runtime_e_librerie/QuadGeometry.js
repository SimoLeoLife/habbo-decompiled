// Estratto da HabboAirLauncher.deobf.js, riga 30750.

class extends Gte {
  static {
    n(this, "QuadGeometry");
  }
  constructor() {
    super({
      positions: new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]),
      uvs: new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]),
      indices: new Uint32Array([0, 1, 2, 0, 2, 3]),
    });
  }
}
