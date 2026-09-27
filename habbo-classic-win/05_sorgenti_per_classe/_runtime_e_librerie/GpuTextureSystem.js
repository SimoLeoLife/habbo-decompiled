// Estratto da HabboAirLauncher.deobf.js, riga 16289.

class {
        static {
          n(this, "GpuTextureSystem");
        }
        constructor(e) {
          ((this._gpuSamplers = Object.create(null)),
            (this._bindGroupHash = Object.create(null)),
            (this._renderer = e),
            e.gc.addCollection(this, "_bindGroupHash", "hash"),
            (this._managedTextures = new GCManagedHash({
              renderer: e,
              type: "resource",
              onUnload: this.onSourceUnload.bind(this),
              name: "gpuTextureSource",
            })));
          let r = { image: pte, buffer: Wze, video: Sze, compressed: Aze };
          this._uploads = { ...r, cube: createGpuUploadCubeTextureResource(r) };
        }
        get managedTextures() {
          return Object.values(this._managedTextures.items);
        }
        contextChange(e) {
          this._gpu = e;
        }
        initSource(e) {
          return e._gpuData[this._renderer.uid]?.gpuTexture || this._initSource(e);
        }
        _initSource(e) {
          if (e.autoGenerateMipmaps) {
            let f = Math.max(e.pixelWidth, e.pixelHeight);
            e.mipLevelCount = Math.floor(Math.log2(f)) + 1;
          }
          let r = GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST;
          e.uploadMethodId !== "compressed" &&
            ((r |= GPUTextureUsage.RENDER_ATTACHMENT), (r |= GPUTextureUsage.COPY_SRC));
          let t = nDe[e.format] || { blockBytes: 4, blockWidth: 1, blockHeight: 1 },
            i = Math.ceil(e.pixelWidth / t.blockWidth) * t.blockWidth,
            s = Math.ceil(e.pixelHeight / t.blockHeight) * t.blockHeight,
            o = {
              label: e.label,
              size: { width: i, height: s, depthOrArrayLayers: e.arrayLayerCount },
              format: e.format,
              sampleCount: e.sampleCount,
              mipLevelCount: e.mipLevelCount,
              dimension: e.dimension,
              usage: r,
            },
            d = this._gpu.device.createTexture(o);
          return (
            (e._gpuData[this._renderer.uid] = new GPUTextureGpuData(d)),
            this._managedTextures.add(e) &&
              (e.on("update", this.onSourceUpdate, this),
              e.on("resize", this.onSourceResize, this),
              e.on("updateMipmaps", this.onUpdateMipmaps, this)),
            this.onSourceUpdate(e),
            d
          );
        }
        onSourceUpdate(e) {
          let r = this.getGpuSource(e);
          r &&
            (this._uploads[e.uploadMethodId] && this._uploads[e.uploadMethodId].upload(e, r, this._gpu),
            e.autoGenerateMipmaps && e.mipLevelCount > 1 && this.onUpdateMipmaps(e));
        }
        onUpdateMipmaps(e) {
          this._mipmapGenerator || (this._mipmapGenerator = new GpuMipmapGenerator(this._gpu.device));
          let r = this.getGpuSource(e);
          this._mipmapGenerator.generateMipmap(r);
        }
        onSourceUnload(e) {
          (e.off("update", this.onSourceUpdate, this),
            e.off("resize", this.onSourceResize, this),
            e.off("updateMipmaps", this.onUpdateMipmaps, this));
        }
        onSourceResize(e) {
          e._gcLastUsed = this._renderer.gc.now;
          let r = e._gpuData[this._renderer.uid],
            t = r?.gpuTexture;
          t
            ? (t.width !== e.pixelWidth || t.height !== e.pixelHeight) &&
              (r.destroy(),
              (this._bindGroupHash[e.uid] = null),
              (e._gpuData[this._renderer.uid] = null),
              this.initSource(e))
            : this.initSource(e);
        }
        _initSampler(e) {
          return (
            (this._gpuSamplers[e._resourceId] = this._gpu.device.createSampler(e)),
            this._gpuSamplers[e._resourceId]
          );
        }
        getGpuSampler(e) {
          return this._gpuSamplers[e._resourceId] || this._initSampler(e);
        }
        getGpuSource(e) {
          return (
            (e._gcLastUsed = this._renderer.gc.now),
            e._gpuData[this._renderer.uid]?.gpuTexture || this.initSource(e)
          );
        }
        getTextureBindGroup(e) {
          return this._bindGroupHash[e.uid] || this._createTextureBindGroup(e);
        }
        _createTextureBindGroup(e) {
          let r = e.source;
          return (
            (this._bindGroupHash[e.uid] = new BindGroup({
              0: r,
              1: r.style,
              2: new Zi({ uTextureMatrix: { type: "mat3x3<f32>", value: e.textureMatrix.mapCoord } }),
            })),
            this._bindGroupHash[e.uid]
          );
        }
        getTextureView(e) {
          let r = e.source;
          r._gcLastUsed = this._renderer.gc.now;
          let t = r._gpuData[this._renderer.uid];
          return (
            t || (this.initSource(r), (t = r._gpuData[this._renderer.uid])),
            t.textureView || (t.textureView = t.gpuTexture.createView({ dimension: r.viewDimension })),
            t.textureView
          );
        }
        generateCanvas(e) {
          let r = this._renderer,
            t = r.gpu.device.createCommandEncoder(),
            i = yt.get().createCanvas();
          ((i.width = e.source.pixelWidth), (i.height = e.source.pixelHeight));
          let s = i.getContext("webgpu");
          return (
            s.configure({
              device: r.gpu.device,
              usage: GPUTextureUsage.COPY_DST | GPUTextureUsage.COPY_SRC,
              format: yt.get().getNavigator().gpu.getPreferredCanvasFormat(),
              alphaMode: "premultiplied",
            }),
            t.copyTextureToTexture(
              { texture: r.texture.getGpuSource(e.source), origin: { x: 0, y: 0 } },
              { texture: s.getCurrentTexture() },
              { width: i.width, height: i.height },
            ),
            r.gpu.device.queue.submit([t.finish()]),
            i
          );
        }
        getPixels(e) {
          let r = this.generateCanvas(e),
            t = bv.getOptimalCanvasAndContext(r.width, r.height),
            i = t.context;
          i.drawImage(r, 0, 0);
          let { width: s, height: o } = r,
            d = i.getImageData(0, 0, s, o),
            c = new Uint8ClampedArray(d.data.buffer);
          return (bv.returnCanvasAndContext(t), { pixels: c, width: s, height: o });
        }
        destroy() {
          this._managedTextures.destroy();
          for (let e of Object.keys(this._bindGroupHash)) {
            let r = Number(e);
            this._bindGroupHash[r]?.destroy();
          }
          ((this._renderer = null),
            (this._gpu = null),
            (this._mipmapGenerator = null),
            (this._gpuSamplers = null),
            (this._bindGroupHash = null));
        }
      }
