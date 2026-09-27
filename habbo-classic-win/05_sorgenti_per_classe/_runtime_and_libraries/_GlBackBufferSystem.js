// Extracted from HabboAirLauncher.deobf.js, line 17294.

class tQe {
        static {
          n(this, "_GlBackBufferSystem");
        }
        constructor(e) {
          ((this.useBackBuffer = !1), (this._useBackBufferThisRender = !1), (this._renderer = e));
        }
        init(e = {}) {
          let { useBackBuffer: r, antialias: t } = { ...tQe.defaultOptions, ...e };
          ((this.useBackBuffer = r),
            (this._antialias = t),
            this._renderer.context.supports.msaa ||
              (warn_("antialiasing, is not supported on when using the back buffer"), (this._antialias = !1)),
            (this._state = ed.for2d()));
          let i = new fs({
            vertex: `
                attribute vec2 aPosition;
                out vec2 vUv;

                void main() {
                    gl_Position = vec4(aPosition, 0.0, 1.0);

                    vUv = (aPosition + 1.0) / 2.0;

                    // flip dem UVs
                    vUv.y = 1.0 - vUv.y;
                }`,
            fragment: `
                in vec2 vUv;
                out vec4 finalColor;

                uniform sampler2D uTexture;

                void main() {
                    finalColor = texture(uTexture, vUv);
                }`,
            name: "big-triangle",
          });
          this._bigTriangleShader = new Qd({ glProgram: i, resources: { uTexture: Texture.WHITE.source } });
        }
        renderStart(e) {
          let r = this._renderer.renderTarget.getRenderTarget(e.target);
          if (
            ((this._useBackBufferThisRender = this.useBackBuffer && !!r.isRoot),
            this._useBackBufferThisRender)
          ) {
            let t = this._renderer.renderTarget.getRenderTarget(e.target);
            ((this._targetTexture = t.colorTexture), (e.target = this._getBackBufferTexture(t.colorTexture)));
          }
        }
        renderEnd() {
          this._presentBackBuffer();
        }
        _presentBackBuffer() {
          let e = this._renderer;
          (e.renderTarget.finishRenderPass(),
            this._useBackBufferThisRender &&
              (e.renderTarget.bind(this._targetTexture, !1),
              (this._bigTriangleShader.resources.uTexture = this._backBufferTexture.source),
              e.encoder.draw({ geometry: uor, shader: this._bigTriangleShader, state: this._state })));
        }
        _getBackBufferTexture(e) {
          return (
            (this._backBufferTexture =
              this._backBufferTexture ||
              new Texture({
                source: new Wi({
                  width: e.width,
                  height: e.height,
                  resolution: e._resolution,
                  antialias: this._antialias,
                }),
              })),
            this._backBufferTexture.source.resize(e.width, e.height, e._resolution),
            this._backBufferTexture
          );
        }
        destroy() {
          this._backBufferTexture && (this._backBufferTexture.destroy(), (this._backBufferTexture = null));
        }
      }
