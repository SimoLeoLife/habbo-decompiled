// Estratto da HabboAirLauncher.deobf.js, riga 31985.

class extends BlendModeFilter {
  static {
    n(this, "_i8443ad8ce98ea5");
  }
  static extension = { name: "invert", type: X.BlendMode };
  constructor() {
    super({
      gl: {
        functions: "",
        main: `
          finalColor = vec4(mix(back.rgb, 1.0 - back.rgb, front.a), blendedAlpha) * uBlend;
        `,
      },
      gpu: {
        functions: "",
        main: `
          out = vec4<f32>(mix(back.rgb, 1.0 - back.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
        `,
      },
    });
  }
}
