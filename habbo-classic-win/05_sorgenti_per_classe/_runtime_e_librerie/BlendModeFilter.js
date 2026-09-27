// Estratto da HabboAirLauncher.deobf.js, riga 29567.

class extends wc {
  static {
    n(this, "BlendModeFilter");
  }
  constructor(e) {
    let r = e.gpu,
      t = compileBlendModeShader({ source: aGe, ...r }),
      i = ls.from({
        vertex: { source: t, entryPoint: "mainVertex" },
        fragment: { source: t, entryPoint: "mainFragment" },
      }),
      s = e.gl,
      o = compileBlendModeShader({ source: rGe, ...s }),
      d = fs.from({ vertex: tGe, fragment: o }),
      c = new Zi({ uBlend: { value: 1, type: "f32" } });
    super({
      gpuProgram: i,
      glProgram: d,
      blendRequired: !0,
      resources: { blendUniforms: c, uBackTexture: Texture.EMPTY },
    });
  }
}
