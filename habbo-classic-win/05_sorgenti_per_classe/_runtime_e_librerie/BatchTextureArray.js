// Estratto da HabboAirLauncher.deobf.js, riga 12094.

class {
      static {
        n(this, "BatchTextureArray");
      }
      constructor() {
        ((this.ids = Object.create(null)), (this.textures = []), (this.count = 0));
      }
      clear() {
        for (let e = 0; e < this.count; e++) {
          let r = this.textures[e];
          ((this.textures[e] = null), (this.ids[r.uid] = null));
        }
        this.count = 0;
      }
    }
