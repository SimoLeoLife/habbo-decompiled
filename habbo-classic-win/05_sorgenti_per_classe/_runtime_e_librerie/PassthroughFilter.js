// Estratto da HabboAirLauncher.deobf.js, riga 8857.

class extends wc {
      static {
        n(this, "PassthroughFilter");
      }
      constructor() {
        let e = ls.from({
            vertex: { source: rSe, entryPoint: "mainVertex" },
            fragment: { source: rSe, entryPoint: "mainFragment" },
            name: "passthrough-filter",
          }),
          r = fs.from({ vertex: Tre, fragment: SUe, name: "passthrough-filter" });
        super({ gpuProgram: e, glProgram: r });
      }
    }
