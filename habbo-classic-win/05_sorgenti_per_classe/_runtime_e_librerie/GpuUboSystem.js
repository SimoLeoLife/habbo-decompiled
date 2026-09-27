// Estratto da HabboAirLauncher.deobf.js, riga 15041.

class extends UboSystem {
      static {
        n(this, "GpuUboSystem");
      }
      constructor() {
        super({ createUboElements: createUboElementsWGSL, generateUboSync: createUboSyncFunctionWGSL });
      }
    }
