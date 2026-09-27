// Extracted from HabboAirLauncher.deobf.js, line 31985.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i8443ad8ce98ea5

class extends BlendModeFilter {
  static {
    n(this, "UnkBlendModeFilterSubclass_8443ad");
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
