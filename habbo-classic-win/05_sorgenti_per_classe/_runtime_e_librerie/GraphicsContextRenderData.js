// Estratto da HabboAirLauncher.deobf.js, riga 21483.

class {
        static {
          n(this, "GraphicsContextRenderData");
        }
        constructor() {
          this.instructions = new InstructionSet();
        }
        init(e) {
          let r = e.maxTextures;
          (this.batcher ? this.batcher._updateMaxTextures(r) : (this.batcher = new gK({ maxTextures: r })),
            this.instructions.reset());
        }
        get geometry() {
          return (
            Zr(dHe, "GraphicsContextRenderData#geometry is deprecated, please use batcher.geometry instead."),
            this.batcher.geometry
          );
        }
        destroy() {
          (this.batcher.destroy(),
            this.instructions.destroy(),
            (this.batcher = null),
            (this.instructions = null));
        }
      }
