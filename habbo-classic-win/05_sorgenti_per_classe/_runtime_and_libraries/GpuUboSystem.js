// Extracted from HabboAirLauncher.deobf.js, line 15041.

class extends UboSystem {
      static {
        n(this, "GpuUboSystem");
      }
      constructor() {
        super({ createUboElements: createUboElementsWGSL, generateUboSync: createUboSyncFunctionWGSL });
      }
    }
