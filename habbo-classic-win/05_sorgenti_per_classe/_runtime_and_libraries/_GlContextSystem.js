// Extracted from HabboAirLauncher.deobf.js, line 16826.

class Kze {
      static {
        n(this, "_GlContextSystem");
      }
      constructor(e) {
        ((this.supports = {
          uint32Indices: !0,
          uniformBufferObject: !0,
          vertexArrayObject: !0,
          srgbTextures: !0,
          nonPowOf2wrapping: !0,
          msaa: !0,
          nonPowOf2mipmaps: !0,
        }),
          (this._renderer = e),
          (this.extensions = Object.create(null)),
          (this.handleContextLost = this.handleContextLost.bind(this)),
          (this.handleContextRestored = this.handleContextRestored.bind(this)));
      }
      get isLost() {
        return !this.gl || this.gl.isContextLost();
      }
      contextChange(e) {
        ((this.gl = e), (this._renderer.gl = e));
      }
      init(e) {
        e = { ...Kze.defaultOptions, ...e };
        let r = (this.multiView = e.multiView);
        if (
          (e.context &&
            r &&
            (warn_(
              "Renderer created with both a context and multiview enabled. Disabling multiView as both cannot work together.",
            ),
            (r = !1)),
          r
            ? (this.canvas = yt.get().createCanvas(this._renderer.canvas.width, this._renderer.canvas.height))
            : (this.canvas = this._renderer.view.canvas),
          e.context)
        )
          this.initFromContext(e.context);
        else {
          let t = this._renderer.background.alpha < 1,
            i = e.premultipliedAlpha ?? !0,
            s = e.antialias && !this._renderer.backBuffer.useBackBuffer;
          this.createContext(e.preferWebGLVersion, {
            alpha: t,
            premultipliedAlpha: i,
            antialias: s,
            stencil: !0,
            preserveDrawingBuffer: e.preserveDrawingBuffer,
            powerPreference: e.powerPreference ?? "default",
          });
        }
      }
      ensureCanvasSize(e) {
        if (!this.multiView) {
          e !== this.canvas && warn_("multiView is disabled, but targetCanvas is not the main canvas");
          return;
        }
        let { canvas: r } = this;
        (r.width < e.width || r.height < e.height) &&
          ((r.width = Math.max(e.width, e.width)), (r.height = Math.max(e.height, e.height)));
      }
      initFromContext(e) {
        ((this.gl = e),
          (this.webGLVersion = e instanceof yt.get().getWebGLRenderingContext() ? 1 : 2),
          this.getExtensions(),
          this.validateContext(e),
          this._renderer.runners.contextChange.emit(e));
        let r = this._renderer.view.canvas;
        (r.addEventListener("webglcontextlost", this.handleContextLost, !1),
          r.addEventListener("webglcontextrestored", this.handleContextRestored, !1));
      }
      createContext(e, r) {
        let t,
          i = this.canvas;
        if ((e === 2 && (t = i.getContext("webgl2", r)), !t && ((t = i.getContext("webgl", r)), !t)))
          throw new Error("This browser does not support WebGL. Try using the canvas renderer");
        ((this.gl = t), this.initFromContext(this.gl));
      }
      getExtensions() {
        let { gl: e } = this,
          r = {
            anisotropicFiltering: e.getExtension("EXT_texture_filter_anisotropic"),
            floatTextureLinear: e.getExtension("OES_texture_float_linear"),
            s3tc: e.getExtension("WEBGL_compressed_texture_s3tc"),
            s3tc_sRGB: e.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
            etc: e.getExtension("WEBGL_compressed_texture_etc"),
            etc1: e.getExtension("WEBGL_compressed_texture_etc1"),
            pvrtc:
              e.getExtension("WEBGL_compressed_texture_pvrtc") ||
              e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
            atc: e.getExtension("WEBGL_compressed_texture_atc"),
            astc: e.getExtension("WEBGL_compressed_texture_astc"),
            bptc: e.getExtension("EXT_texture_compression_bptc"),
            rgtc: e.getExtension("EXT_texture_compression_rgtc"),
            loseContext: e.getExtension("WEBGL_lose_context"),
          };
        if (this.webGLVersion === 1)
          this.extensions = {
            ...r,
            drawBuffers: e.getExtension("WEBGL_draw_buffers"),
            depthTexture: e.getExtension("WEBGL_depth_texture"),
            vertexArrayObject:
              e.getExtension("OES_vertex_array_object") ||
              e.getExtension("MOZ_OES_vertex_array_object") ||
              e.getExtension("WEBKIT_OES_vertex_array_object"),
            uint32ElementIndex: e.getExtension("OES_element_index_uint"),
            floatTexture: e.getExtension("OES_texture_float"),
            floatTextureLinear: e.getExtension("OES_texture_float_linear"),
            textureHalfFloat: e.getExtension("OES_texture_half_float"),
            textureHalfFloatLinear: e.getExtension("OES_texture_half_float_linear"),
            vertexAttribDivisorANGLE: e.getExtension("ANGLE_instanced_arrays"),
            srgb: e.getExtension("EXT_sRGB"),
          };
        else {
          this.extensions = { ...r, colorBufferFloat: e.getExtension("EXT_color_buffer_float") };
          let t = e.getExtension("WEBGL_provoking_vertex");
          t && t.provokingVertexWEBGL(t.FIRST_VERTEX_CONVENTION_WEBGL);
        }
      }
      handleContextLost(e) {
        (e.preventDefault(),
          this._contextLossForced &&
            ((this._contextLossForced = !1),
            setTimeout(() => {
              this.gl.isContextLost() && this.extensions.loseContext?.restoreContext();
            }, 0)));
      }
      handleContextRestored() {
        (this.getExtensions(), this._renderer.runners.contextChange.emit(this.gl));
      }
      destroy() {
        let e = this._renderer.view.canvas;
        ((this._renderer = null),
          e.removeEventListener("webglcontextlost", this.handleContextLost),
          e.removeEventListener("webglcontextrestored", this.handleContextRestored),
          this.gl.useProgram(null),
          this.extensions.loseContext?.loseContext());
      }
      forceContextLoss() {
        (this.extensions.loseContext?.loseContext(), (this._contextLossForced = !0));
      }
      validateContext(e) {
        let r = e.getContextAttributes();
        r &&
          !r.stencil &&
          warn_("Provided WebGL context does not have a stencil buffer, masks may not render correctly");
        let t = this.supports,
          i = this.webGLVersion === 2,
          s = this.extensions;
        ((t.uint32Indices = i || !!s.uint32ElementIndex),
          (t.uniformBufferObject = i),
          (t.vertexArrayObject = i || !!s.vertexArrayObject),
          (t.srgbTextures = i || !!s.srgb),
          (t.nonPowOf2wrapping = i),
          (t.nonPowOf2mipmaps = i),
          (t.msaa = i),
          t.uint32Indices ||
            warn_(
              "Provided WebGL context does not support 32 index buffer, large scenes may not render correctly",
            ));
      }
    }
