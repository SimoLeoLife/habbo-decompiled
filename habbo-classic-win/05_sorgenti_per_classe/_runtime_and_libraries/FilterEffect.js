// Extracted from HabboAirLauncher.deobf.js, line 1793.

class {
      static {
        n(this, "FilterEffect");
      }
      constructor() {
        ((this.pipe = "filter"), (this.priority = 1));
      }
      destroy() {
        for (let e = 0; e < this.filters.length; e++) this.filters[e].destroy();
        ((this.filters = null), (this.filterArea = null));
      }
    }
