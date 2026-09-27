// Estratto da HabboAirLauncher.deobf.js, riga 16148.

class {
      static {
        n(this, "GpuMipmapGenerator");
      }
      constructor(e) {
        ((this.device = e), (this.sampler = e.createSampler({ minFilter: "linear" })), (this.pipelines = {}));
      }
      _getMipmapPipeline(e) {
        let r = this.pipelines[e];
        return (
          r ||
            (this.mipmapShaderModule ||
              (this.mipmapShaderModule = this.device.createShaderModule({
                code: `
                        var<private> pos : array<vec2<f32>, 3> = array<vec2<f32>, 3>(
                        vec2<f32>(-1.0, -1.0), vec2<f32>(-1.0, 3.0), vec2<f32>(3.0, -1.0));

                        struct VertexOutput {
                        @builtin(position) position : vec4<f32>,
                        @location(0) texCoord : vec2<f32>,
                        };

                        @vertex
                        fn vertexMain(@builtin(vertex_index) vertexIndex : u32) -> VertexOutput {
                        var output : VertexOutput;
                        output.texCoord = pos[vertexIndex] * vec2<f32>(0.5, -0.5) + vec2<f32>(0.5);
                        output.position = vec4<f32>(pos[vertexIndex], 0.0, 1.0);
                        return output;
                        }

                        @group(0) @binding(0) var imgSampler : sampler;
                        @group(0) @binding(1) var img : texture_2d<f32>;

                        @fragment
                        fn fragmentMain(@location(0) texCoord : vec2<f32>) -> @location(0) vec4<f32> {
                        return textureSample(img, imgSampler, texCoord);
                        }
                    `,
              })),
            (r = this.device.createRenderPipeline({
              layout: "auto",
              vertex: { module: this.mipmapShaderModule, entryPoint: "vertexMain" },
              fragment: {
                module: this.mipmapShaderModule,
                entryPoint: "fragmentMain",
                targets: [{ format: e }],
              },
            })),
            (this.pipelines[e] = r)),
          r
        );
      }
      generateMipmap(e) {
        let r = this._getMipmapPipeline(e.format);
        if (e.dimension === "3d" || e.dimension === "1d")
          throw new Error("Generating mipmaps for non-2d textures is currently unsupported!");
        let t = e,
          i = e.depthOrArrayLayers || 1,
          s = e.usage & GPUTextureUsage.RENDER_ATTACHMENT;
        if (!s) {
          let c = {
            size: { width: Math.ceil(e.width / 2), height: Math.ceil(e.height / 2), depthOrArrayLayers: i },
            format: e.format,
            usage:
              GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_SRC | GPUTextureUsage.RENDER_ATTACHMENT,
            mipLevelCount: e.mipLevelCount - 1,
          };
          t = this.device.createTexture(c);
        }
        let o = this.device.createCommandEncoder({}),
          d = r.getBindGroupLayout(0);
        for (let c = 0; c < i; ++c) {
          let f = e.createView({
              baseMipLevel: 0,
              mipLevelCount: 1,
              dimension: "2d",
              baseArrayLayer: c,
              arrayLayerCount: 1,
            }),
            l = s ? 1 : 0;
          for (let b = 1; b < e.mipLevelCount; ++b) {
            let _ = t.createView({
                baseMipLevel: l++,
                mipLevelCount: 1,
                dimension: "2d",
                baseArrayLayer: c,
                arrayLayerCount: 1,
              }),
              h = o.beginRenderPass({
                colorAttachments: [
                  { view: _, storeOp: "store", loadOp: "clear", clearValue: { r: 0, g: 0, b: 0, a: 0 } },
                ],
              }),
              p = this.device.createBindGroup({
                layout: d,
                entries: [
                  { binding: 0, resource: this.sampler },
                  { binding: 1, resource: f },
                ],
              });
            (h.setPipeline(r), h.setBindGroup(0, p), h.draw(3, 1, 0, 0), h.end(), (f = _));
          }
        }
        if (!s) {
          let c = { width: Math.ceil(e.width / 2), height: Math.ceil(e.height / 2), depthOrArrayLayers: i };
          for (let f = 1; f < e.mipLevelCount; ++f)
            (o.copyTextureToTexture({ texture: t, mipLevel: f - 1 }, { texture: e, mipLevel: f }, c),
              (c.width = Math.ceil(c.width / 2)),
              (c.height = Math.ceil(c.height / 2)));
        }
        return (this.device.queue.submit([o.finish()]), s || t.destroy(), e);
      }
    }
