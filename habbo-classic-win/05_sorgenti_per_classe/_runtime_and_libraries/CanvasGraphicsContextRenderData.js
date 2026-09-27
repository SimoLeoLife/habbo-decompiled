// Extracted from HabboAirLauncher.deobf.js, line 23378.

class {
        static {
          n(this, "CanvasGraphicsContextRenderData");
        }
        constructor() {
          this.instructions = new InstructionSet();
        }
        init() {
          this.instructions.reset();
        }
        destroy() {
          (this.instructions.destroy(), (this.instructions = null));
        }
      }
