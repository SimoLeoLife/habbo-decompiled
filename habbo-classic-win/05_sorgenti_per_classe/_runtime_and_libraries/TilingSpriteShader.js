// Extracted from HabboAirLauncher.deobf.js, line 30702.

class extends Qd {
    static {
      n(this, "TilingSpriteShader");
    }
    constructor() {
      (cLe ?? (cLe = compileHighShaderGpuProgram({ name: "tiling-sprite-shader", bits: [iv, oKe, K5] })),
        fLe ?? (fLe = compileHighShaderGlProgram({ name: "tiling-sprite-shader", bits: [Nx, dKe, $5] })));
      let e = new Zi({
        uMapCoord: { value: new Ze(), type: "mat3x3<f32>" },
        uClampFrame: { value: new Float32Array([0, 0, 1, 1]), type: "vec4<f32>" },
        uClampOffset: { value: new Float32Array([0, 0]), type: "vec2<f32>" },
        uTextureTransform: { value: new Ze(), type: "mat3x3<f32>" },
        uSizeAnchor: { value: new Float32Array([100, 100, 0.5, 0.5]), type: "vec4<f32>" },
      });
      super({
        glProgram: fLe,
        gpuProgram: cLe,
        resources: {
          localUniforms: new Zi({
            uTransformMatrix: { value: new Ze(), type: "mat3x3<f32>" },
            uColor: { value: new Float32Array([1, 1, 1, 1]), type: "vec4<f32>" },
            uRound: { value: 0, type: "f32" },
          }),
          tilingUniforms: e,
          uTexture: Texture.EMPTY.source,
          uSampler: Texture.EMPTY.source.style,
        },
      });
    }
    updateUniforms(e, r, t, i, s, o) {
      let d = this.resources.tilingUniforms,
        c = o.width,
        f = o.height,
        l = o.textureMatrix,
        b = d.uniforms.uTextureTransform;
      (b.set((t.a * c) / e, (t.b * c) / r, (t.c * f) / e, (t.d * f) / r, t.tx / e, t.ty / r),
        b.invert(),
        (d.uniforms.uMapCoord = l.mapCoord),
        (d.uniforms.uClampFrame = l.uClampFrame),
        (d.uniforms.uClampOffset = l.uClampOffset),
        (d.uniforms.uTextureTransform = b),
        (d.uniforms.uSizeAnchor[0] = e),
        (d.uniforms.uSizeAnchor[1] = r),
        (d.uniforms.uSizeAnchor[2] = i),
        (d.uniforms.uSizeAnchor[3] = s),
        o && ((this.resources.uTexture = o.source), (this.resources.uSampler = o.source.style)));
    }
  }
