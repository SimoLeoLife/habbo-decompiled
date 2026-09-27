// Estratto da HabboAirLauncher.deobf.js, riga 19295.

class {
        static {
          n(this, "GlTextureSystem");
        }
        constructor(e) {
          ((this._glSamplers = Object.create(null)),
            (this._boundTextures = []),
            (this._activeTextureLocation = -1),
            (this._boundSamplers = Object.create(null)),
            (this._premultiplyAlpha = !1),
            (this._useSeparateSamplers = !1),
            (this._renderer = e),
            (this._managedTextures = new GCManagedHash({
              renderer: e,
              type: "resource",
              onUnload: this.onSourceUnload.bind(this),
              name: "glTexture",
            })));
          let r = { image: Bte, buffer: YQe, video: aXe, compressed: $Qe };
          this._uploads = { ...r, cube: createGlUploadCubeTextureResource(r) };
        }
        get managedTextures() {
          return Object.values(this._managedTextures.items);
        }
        contextChange(e) {
          ((this._gl = e),
            this._mapFormatToInternalFormat ||
              ((this._mapFormatToInternalFormat = mapFormatToGlInternalFormat(e, this._renderer.context.extensions)),
              (this._mapFormatToType = mapFormatToGlType(e)),
              (this._mapFormatToFormat = mapFormatToGlFormat(e)),
              (this._mapViewDimensionToGlTarget = mapViewDimensionToGlTarget(e))),
            this._managedTextures.removeAll(!0),
            (this._glSamplers = Object.create(null)),
            (this._boundSamplers = Object.create(null)),
            (this._premultiplyAlpha = !1));
          for (let r = 0; r < 16; r++) this.bind(Texture.EMPTY, r);
        }
        initSource(e) {
          this.bind(e);
        }
        bind(e, r = 0) {
          let t = e.source;
          e
            ? (this.bindSource(t, r), this._useSeparateSamplers && this._bindSampler(t.style, r))
            : (this.bindSource(null, r), this._useSeparateSamplers && this._bindSampler(null, r));
        }
        bindSource(e, r = 0) {
          let t = this._gl;
          if (((e._gcLastUsed = this._renderer.gc.now), this._boundTextures[r] !== e)) {
            ((this._boundTextures[r] = e), this._activateLocation(r), e || (e = Texture.EMPTY.source));
            let i = this.getGlSource(e);
            t.bindTexture(i.target, i.texture);
          }
        }
        _bindSampler(e, r = 0) {
          let t = this._gl;
          if (!e) {
            ((this._boundSamplers[r] = null), t.bindSampler(r, null));
            return;
          }
          let i = this._getGlSampler(e);
          this._boundSamplers[r] !== i && ((this._boundSamplers[r] = i), t.bindSampler(r, i));
        }
        unbind(e) {
          let r = e.source,
            t = this._boundTextures,
            i = this._gl;
          for (let s = 0; s < t.length; s++)
            if (t[s] === r) {
              this._activateLocation(s);
              let o = this.getGlSource(r);
              (i.bindTexture(o.target, null), (t[s] = null));
            }
        }
        _activateLocation(e) {
          this._activeTextureLocation !== e &&
            ((this._activeTextureLocation = e), this._gl.activeTexture(this._gl.TEXTURE0 + e));
        }
        _initSource(e) {
          let r = this._gl,
            t = new GlTexture(r.createTexture());
          if (
            ((t.type = this._mapFormatToType[e.format]),
            (t.internalFormat = this._mapFormatToInternalFormat[e.format]),
            (t.format = this._mapFormatToFormat[e.format]),
            (t.target = this._mapViewDimensionToGlTarget[e.viewDimension]),
            t.target === null)
          )
            throw new Error(
              `Unsupported view dimension: ${e.viewDimension} with this webgl version: ${this._renderer.context.webGLVersion}`,
            );
          if (
            (e.uploadMethodId === "cube" && (t.target = r.TEXTURE_CUBE_MAP),
            e.autoGenerateMipmaps && (this._renderer.context.supports.nonPowOf2mipmaps || e.isPowerOfTwo))
          ) {
            let s = Math.max(e.width, e.height);
            e.mipLevelCount = Math.floor(Math.log2(s)) + 1;
          }
          return (
            (e._gpuData[this._renderer.uid] = t),
            this._managedTextures.add(e) &&
              (e.on("update", this.onSourceUpdate, this),
              e.on("resize", this.onSourceUpdate, this),
              e.on("styleChange", this.onStyleChange, this),
              e.on("updateMipmaps", this.onUpdateMipmaps, this)),
            this.onSourceUpdate(e),
            this.updateStyle(e, !1),
            t
          );
        }
        onStyleChange(e) {
          this.updateStyle(e, !1);
        }
        updateStyle(e, r) {
          let t = this._gl,
            i = this.getGlSource(e);
          (t.bindTexture(i.target, i.texture),
            (this._boundTextures[this._activeTextureLocation] = e),
            applyStyleParams(
              e.style,
              t,
              e.mipLevelCount > 1,
              this._renderer.context.extensions.anisotropicFiltering,
              "texParameteri",
              i.target,
              !this._renderer.context.supports.nonPowOf2wrapping && !e.isPowerOfTwo,
              r,
            ));
        }
        onSourceUnload(e, r = !1) {
          let t = e._gpuData[this._renderer.uid];
          t &&
            (r || (this.unbind(e), this._gl.deleteTexture(t.texture)),
            e.off("update", this.onSourceUpdate, this),
            e.off("resize", this.onSourceUpdate, this),
            e.off("styleChange", this.onStyleChange, this),
            e.off("updateMipmaps", this.onUpdateMipmaps, this));
        }
        onSourceUpdate(e) {
          let r = this._gl,
            t = this.getGlSource(e);
          (r.bindTexture(t.target, t.texture), (this._boundTextures[this._activeTextureLocation] = e));
          let i = e.alphaMode === "premultiply-alpha-on-upload";
          if (
            (this._premultiplyAlpha !== i &&
              ((this._premultiplyAlpha = i), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, i)),
            this._uploads[e.uploadMethodId])
          )
            this._uploads[e.uploadMethodId].upload(e, t, r, this._renderer.context.webGLVersion);
          else if (t.target === r.TEXTURE_2D) this._initEmptyTexture2D(t, e);
          else if (t.target === r.TEXTURE_2D_ARRAY) this._initEmptyTexture2DArray(t, e);
          else if (t.target === r.TEXTURE_CUBE_MAP) this._initEmptyTextureCube(t, e);
          else throw new Error("[GlTextureSystem] Unsupported texture target for empty allocation.");
          (this._applyMipRange(t, e),
            e.autoGenerateMipmaps && e.mipLevelCount > 1 && this.onUpdateMipmaps(e, !1));
        }
        onUpdateMipmaps(e, r = !0) {
          r && this.bindSource(e, 0);
          let t = this.getGlSource(e);
          this._gl.generateMipmap(t.target);
        }
        _initEmptyTexture2D(e, r) {
          let t = this._gl;
          t.texImage2D(
            t.TEXTURE_2D,
            0,
            e.internalFormat,
            r.pixelWidth,
            r.pixelHeight,
            0,
            e.format,
            e.type,
            null,
          );
          let i = Math.max(r.pixelWidth >> 1, 1),
            s = Math.max(r.pixelHeight >> 1, 1);
          for (let o = 1; o < r.mipLevelCount; o++)
            (t.texImage2D(t.TEXTURE_2D, o, e.internalFormat, i, s, 0, e.format, e.type, null),
              (i = Math.max(i >> 1, 1)),
              (s = Math.max(s >> 1, 1)));
        }
        _initEmptyTexture2DArray(e, r) {
          if (this._renderer.context.webGLVersion !== 2)
            throw new Error("[GlTextureSystem] TEXTURE_2D_ARRAY requires WebGL2.");
          let t = this._gl,
            i = Math.max(r.arrayLayerCount | 0, 1);
          t.texImage3D(
            t.TEXTURE_2D_ARRAY,
            0,
            e.internalFormat,
            r.pixelWidth,
            r.pixelHeight,
            i,
            0,
            e.format,
            e.type,
            null,
          );
          let s = Math.max(r.pixelWidth >> 1, 1),
            o = Math.max(r.pixelHeight >> 1, 1);
          for (let d = 1; d < r.mipLevelCount; d++)
            (t.texImage3D(t.TEXTURE_2D_ARRAY, d, e.internalFormat, s, o, i, 0, e.format, e.type, null),
              (s = Math.max(s >> 1, 1)),
              (o = Math.max(o >> 1, 1)));
        }
        _initEmptyTextureCube(e, r) {
          let t = this._gl,
            i = 6;
          for (let d = 0; d < i; d++)
            t.texImage2D(
              t.TEXTURE_CUBE_MAP_POSITIVE_X + d,
              0,
              e.internalFormat,
              r.pixelWidth,
              r.pixelHeight,
              0,
              e.format,
              e.type,
              null,
            );
          let s = Math.max(r.pixelWidth >> 1, 1),
            o = Math.max(r.pixelHeight >> 1, 1);
          for (let d = 1; d < r.mipLevelCount; d++) {
            for (let c = 0; c < i; c++)
              t.texImage2D(
                t.TEXTURE_CUBE_MAP_POSITIVE_X + c,
                d,
                e.internalFormat,
                s,
                o,
                0,
                e.format,
                e.type,
                null,
              );
            ((s = Math.max(s >> 1, 1)), (o = Math.max(o >> 1, 1)));
          }
        }
        _applyMipRange(e, r) {
          if (this._renderer.context.webGLVersion !== 2) return;
          let t = this._gl,
            i = Math.max((r.mipLevelCount | 0) - 1, 0);
          (t.texParameteri(e.target, t.TEXTURE_BASE_LEVEL, 0),
            t.texParameteri(e.target, t.TEXTURE_MAX_LEVEL, i));
        }
        _initSampler(e) {
          let r = this._gl,
            t = this._gl.createSampler();
          return (
            (this._glSamplers[e._resourceId] = t),
            applyStyleParams(
              e,
              r,
              this._boundTextures[this._activeTextureLocation].mipLevelCount > 1,
              this._renderer.context.extensions.anisotropicFiltering,
              "samplerParameteri",
              t,
              !1,
              !0,
            ),
            this._glSamplers[e._resourceId]
          );
        }
        _getGlSampler(e) {
          return this._glSamplers[e._resourceId] || this._initSampler(e);
        }
        getGlSource(e) {
          return (
            (e._gcLastUsed = this._renderer.gc.now),
            e._gpuData[this._renderer.uid] || this._initSource(e)
          );
        }
        generateCanvas(e) {
          let { pixels: r, width: t, height: i } = this.getPixels(e),
            s = yt.get().createCanvas();
          ((s.width = t), (s.height = i));
          let o = s.getContext("2d");
          if (o) {
            let d = o.createImageData(t, i);
            (d.data.set(r), o.putImageData(d, 0, 0));
          }
          return s;
        }
        getPixels(e) {
          let r = e.source.resolution,
            t = e.frame,
            i = Math.max(Math.round(t.width * r), 1),
            s = Math.max(Math.round(t.height * r), 1),
            o = new Uint8Array(Mor * i * s),
            d = this._renderer,
            c = d.renderTarget.getRenderTarget(e),
            f = d.renderTarget.getGpuRenderTarget(c),
            l = d.gl;
          return (
            l.bindFramebuffer(l.FRAMEBUFFER, f.resolveTargetFramebuffer),
            l.readPixels(Math.round(t.x * r), Math.round(t.y * r), i, s, l.RGBA, l.UNSIGNED_BYTE, o),
            { pixels: new Uint8ClampedArray(o.buffer), width: i, height: s }
          );
        }
        destroy() {
          (this._managedTextures.destroy(),
            (this._glSamplers = null),
            (this._boundTextures = null),
            (this._boundSamplers = null),
            (this._mapFormatToInternalFormat = null),
            (this._mapFormatToType = null),
            (this._mapFormatToFormat = null),
            (this._uploads = null),
            (this._renderer = null));
        }
        resetState() {
          ((this._activeTextureLocation = -1),
            this._boundTextures.fill(Texture.EMPTY.source),
            (this._boundSamplers = Object.create(null)));
          let e = this._gl;
          ((this._premultiplyAlpha = !1),
            e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this._premultiplyAlpha));
        }
      }
