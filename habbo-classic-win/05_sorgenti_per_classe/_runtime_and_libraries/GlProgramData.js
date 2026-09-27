// Extracted from HabboAirLauncher.deobf.js, line 18002.

class {
      static {
        n(this, "GlProgramData");
      }
      constructor(e, r) {
        ((this.program = e),
          (this.uniformData = r),
          (this.uniformGroups = {}),
          (this.uniformDirtyGroups = {}),
          (this.uniformBlockBindings = {}));
      }
      destroy() {
        ((this.uniformData = null),
          (this.uniformGroups = null),
          (this.uniformDirtyGroups = null),
          (this.uniformBlockBindings = null),
          (this.program = null));
      }
    }
