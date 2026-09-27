// Extracted from HabboAirLauncher.deobf.js, line 9521.

class {
        static {
          n(this, "FilterSystem");
        }
        constructor(e) {
          ((this._filterStackIndex = 0),
            (this._filterStack = []),
            (this._filterGlobalUniforms = new Zi({
              uInputSize: { value: new Float32Array(4), type: "vec4<f32>" },
              uInputPixel: { value: new Float32Array(4), type: "vec4<f32>" },
              uInputClamp: { value: new Float32Array(4), type: "vec4<f32>" },
              uOutputFrame: { value: new Float32Array(4), type: "vec4<f32>" },
              uGlobalFrame: { value: new Float32Array(4), type: "vec4<f32>" },
              uOutputTexture: { value: new Float32Array(4), type: "vec4<f32>" },
            })),
            (this._globalFilterBindGroup = new BindGroup({})),
            (this.renderer = e));
        }
        get activeBackTexture() {
          return this._activeFilterData?.backTexture;
        }
        push(e) {
          let r = this.renderer,
            t = e.filterEffect.filters,
            i = this._pushFilterData();
          ((i.skip = !1),
            (i.filters = t),
            (i.container = e.container),
            (i.outputRenderSurface = r.renderTarget.renderSurface));
          let s = r.renderTarget.renderTarget.colorTexture.source,
            o = s.resolution,
            d = s.antialias;
          if (t.every((h) => !h.enabled)) {
            i.skip = !0;
            return;
          }
          let c = i.bounds;
          if (
            (this._calculateFilterArea(e, c),
            this._calculateFilterBounds(i, r.renderTarget.rootViewPort, d, o, 1),
            i.skip)
          )
            return;
          let f = this._getPreviousFilterData(),
            l = this._findFilterResolution(o),
            b = 0,
            _ = 0;
          (f && ((b = f.bounds.minX), (_ = f.bounds.minY)),
            this._calculateGlobalFrame(i, b, _, l, s.width, s.height),
            this._setupFilterTextures(i, c, r, f));
        }
        generateFilteredTexture({ texture: e, filters: r }) {
          let t = this._pushFilterData();
          ((this._activeFilterData = t), (t.skip = !1), (t.filters = r));
          let i = e.source,
            s = i.resolution,
            o = i.antialias;
          if (r.every((h) => !h.enabled)) return ((t.skip = !0), e);
          let d = t.bounds;
          if ((d.addRect(e.frame), this._calculateFilterBounds(t, d.rectangle, o, s, 0), t.skip)) return e;
          let c = s;
          (this._calculateGlobalFrame(t, 0, 0, c, i.width, i.height),
            (t.outputRenderSurface = po.getOptimalTexture(d.width, d.height, t.resolution, t.antialias)),
            (t.backTexture = Texture.EMPTY),
            (t.inputTexture = e),
            this.renderer.renderTarget.finishRenderPass(),
            this._applyFiltersToTexture(t, !0));
          let _ = t.outputRenderSurface;
          return ((_.source.alphaMode = "premultiplied-alpha"), _);
        }
        pop() {
          let e = this.renderer,
            r = this._popFilterData();
          r.skip ||
            (e.globalUniforms.pop(),
            e.renderTarget.finishRenderPass(),
            (this._activeFilterData = r),
            this._applyFiltersToTexture(r, !1),
            r.blendRequired && po.returnTexture(r.backTexture),
            po.returnTexture(r.inputTexture));
        }
        getBackTexture(e, r, t) {
          let i = e.colorTexture.source._resolution,
            s = po.getOptimalTexture(r.width, r.height, i, !1),
            o = r.minX,
            d = r.minY;
          (t && ((o -= t.minX), (d -= t.minY)), (o = Math.floor(o * i)), (d = Math.floor(d * i)));
          let c = Math.ceil(r.width * i),
            f = Math.ceil(r.height * i);
          return (
            this.renderer.renderTarget.copyToTexture(
              e,
              s,
              { x: o, y: d },
              { width: c, height: f },
              { x: 0, y: 0 },
            ),
            s
          );
        }
        applyFilter(e, r, t, i) {
          let s = this.renderer,
            o = this._activeFilterData,
            c = o.outputRenderSurface === t,
            f = s.renderTarget.rootRenderTarget.colorTexture.source._resolution,
            l = this._findFilterResolution(f),
            b = 0,
            _ = 0;
          if (c) {
            let p = this._findPreviousFilterOffset();
            ((b = p.x), (_ = p.y));
          }
          this._updateFilterUniforms(r, t, o, b, _, l, c, i);
          let h = e.enabled ? e : this._getPassthroughFilter();
          this._setupBindGroupsAndRender(h, r, s);
        }
        calculateSpriteMatrix(e, r) {
          let t = this._activeFilterData,
            i = e.set(
              t.inputTexture._source.width,
              0,
              0,
              t.inputTexture._source.height,
              t.bounds.minX,
              t.bounds.minY,
            ),
            s = r.worldTransform.copyTo(Ze.shared),
            o = r.renderGroup || r.parentRenderGroup;
          return (
            o && o.cacheToLocalTransform && s.prepend(o.cacheToLocalTransform),
            s.invert(),
            i.prepend(s),
            i.scale(1 / r.texture.orig.width, 1 / r.texture.orig.height),
            i.translate(r.anchor.x, r.anchor.y),
            i
          );
        }
        destroy() {
          (this._passthroughFilter?.destroy(!0), (this._passthroughFilter = null));
        }
        _getPassthroughFilter() {
          return (this._passthroughFilter ?? (this._passthroughFilter = new PassthroughFilter()), this._passthroughFilter);
        }
        _setupBindGroupsAndRender(e, r, t) {
          if (t.renderPipes.uniformBatch) {
            let i = t.renderPipes.uniformBatch.getUboResource(this._filterGlobalUniforms);
            this._globalFilterBindGroup.setResource(i, 0);
          } else this._globalFilterBindGroup.setResource(this._filterGlobalUniforms, 0);
          (this._globalFilterBindGroup.setResource(r.source, 1),
            this._globalFilterBindGroup.setResource(r.source.style, 2),
            (e.groups[0] = this._globalFilterBindGroup),
            t.encoder.draw({ geometry: msr, shader: e, state: e._state, topology: "triangle-list" }),
            t.type === Jo.WEBGL && t.renderTarget.finishRenderPass());
        }
        _setupFilterTextures(e, r, t, i) {
          if (
            ((e.backTexture = Texture.EMPTY),
            (e.inputTexture = po.getOptimalTexture(r.width, r.height, e.resolution, e.antialias)),
            e.blendRequired)
          ) {
            t.renderTarget.finishRenderPass();
            let s = t.renderTarget.getRenderTarget(e.outputRenderSurface);
            e.backTexture = this.getBackTexture(s, r, i?.bounds);
          }
          (t.renderTarget.bind(e.inputTexture, !0), t.globalUniforms.push({ offset: r }));
        }
        _calculateGlobalFrame(e, r, t, i, s, o) {
          let d = e.globalFrame;
          ((d.x = r * i), (d.y = t * i), (d.width = s * i), (d.height = o * i));
        }
        _updateFilterUniforms(e, r, t, i, s, o, d, c) {
          let f = this._filterGlobalUniforms.uniforms,
            l = f.uOutputFrame,
            b = f.uInputSize,
            _ = f.uInputPixel,
            h = f.uInputClamp,
            p = f.uGlobalFrame,
            m = f.uOutputTexture;
          (d ? ((l[0] = t.bounds.minX - i), (l[1] = t.bounds.minY - s)) : ((l[0] = 0), (l[1] = 0)),
            (l[2] = e.frame.width),
            (l[3] = e.frame.height),
            (b[0] = e.source.width),
            (b[1] = e.source.height),
            (b[2] = 1 / b[0]),
            (b[3] = 1 / b[1]),
            (_[0] = e.source.pixelWidth),
            (_[1] = e.source.pixelHeight),
            (_[2] = 1 / _[0]),
            (_[3] = 1 / _[1]),
            (h[0] = 0.5 * _[2]),
            (h[1] = 0.5 * _[3]),
            (h[2] = e.frame.width * b[2] - 0.5 * _[2]),
            (h[3] = e.frame.height * b[3] - 0.5 * _[3]));
          let v = this.renderer.renderTarget.rootRenderTarget.colorTexture;
          ((p[0] = i * o),
            (p[1] = s * o),
            (p[2] = v.source.width * o),
            (p[3] = v.source.height * o),
            r instanceof Texture && (r.source.resource = null));
          let w = this.renderer.renderTarget.getRenderTarget(r);
          (this.renderer.renderTarget.bind(r, !!c),
            r instanceof Texture
              ? ((m[0] = r.frame.width), (m[1] = r.frame.height))
              : ((m[0] = w.width), (m[1] = w.height)),
            (m[2] = w.isRoot ? -1 : 1),
            this._filterGlobalUniforms.update());
        }
        _findFilterResolution(e) {
          let r = this._filterStackIndex - 1;
          for (; r > 0 && this._filterStack[r].skip;) --r;
          return r > 0 && this._filterStack[r].inputTexture
            ? this._filterStack[r].inputTexture.source._resolution
            : e;
        }
        _findPreviousFilterOffset() {
          let e = 0,
            r = 0,
            t = this._filterStackIndex;
          for (; t > 0;) {
            t--;
            let i = this._filterStack[t];
            if (!i.skip) {
              ((e = i.bounds.minX), (r = i.bounds.minY));
              break;
            }
          }
          return { x: e, y: r };
        }
        _calculateFilterArea(e, r) {
          if (
            (e.renderables
              ? getGlobalRenderableBounds(e.renderables, r)
              : e.filterEffect.filterArea
                ? (r.clear(), r.addRect(e.filterEffect.filterArea), r.applyMatrix(e.container.worldTransform))
                : e.container.getFastGlobalBounds(!0, r),
            e.container)
          ) {
            let i = (e.container.renderGroup || e.container.parentRenderGroup).cacheToLocalTransform;
            i && r.applyMatrix(i);
          }
        }
        _applyFiltersToTexture(e, r) {
          let t = e.inputTexture,
            i = e.bounds,
            s = e.filters,
            o = e.firstEnabledIndex,
            d = e.lastEnabledIndex;
          if (
            (this._globalFilterBindGroup.setResource(t.source.style, 2),
            this._globalFilterBindGroup.setResource(e.backTexture.source, 3),
            o === d)
          )
            s[o].apply(this, t, e.outputRenderSurface, r);
          else {
            let c = e.inputTexture,
              f = po.getOptimalTexture(i.width, i.height, c.source._resolution, !1),
              l = f;
            for (let b = o; b < d; b++) {
              let _ = s[b];
              if (!_.enabled) continue;
              _.apply(this, c, l, !0);
              let h = c;
              ((c = l), (l = h));
            }
            (s[d].apply(this, c, e.outputRenderSurface, r), po.returnTexture(f));
          }
        }
        _calculateFilterBounds(e, r, t, i, s) {
          let o = this.renderer,
            d = e.bounds,
            c = e.filters,
            f = 1 / 0,
            l = 0,
            b = !0,
            _ = !1,
            h = !1,
            p = !0,
            m = -1,
            v = -1;
          for (let w = 0; w < c.length; w++) {
            let I = c[w];
            if (!I.enabled) continue;
            if (
              (m === -1 && (m = w),
              (v = w),
              (f = Math.min(f, I.resolution === "inherit" ? i : I.resolution)),
              (l += I.padding),
              I.antialias === "off" ? (b = !1) : I.antialias === "inherit" && b && (b = t),
              I.clipToViewport || (p = !1),
              !!!(I.compatibleRenderers & o.type))
            ) {
              h = !1;
              break;
            }
            if (I.blendRequired && !(o.backBuffer?.useBackBuffer ?? !0)) {
              (warn_(
                "Blend filter requires backBuffer on WebGL renderer to be enabled. Set `useBackBuffer: true` in the renderer options.",
              ),
                (h = !1));
              break;
            }
            ((h = !0), _ || (_ = I.blendRequired));
          }
          if (!h) {
            e.skip = !0;
            return;
          }
          if (
            (p && d.fitBounds(0, r.width / i, 0, r.height / i),
            d
              .scale(f)
              .ceil()
              .scale(1 / f)
              .pad((l | 0) * s),
            !d.isPositive)
          ) {
            e.skip = !0;
            return;
          }
          ((e.antialias = b),
            (e.resolution = f),
            (e.blendRequired = _),
            (e.firstEnabledIndex = m),
            (e.lastEnabledIndex = v));
        }
        _popFilterData() {
          return (this._filterStackIndex--, this._filterStack[this._filterStackIndex]);
        }
        _getPreviousFilterData() {
          let e,
            r = this._filterStackIndex - 1;
          for (; r > 0 && (r--, (e = this._filterStack[r]), !!e.skip););
          return e;
        }
        _pushFilterData() {
          let e = this._filterStack[this._filterStackIndex];
          return (
            e || (e = this._filterStack[this._filterStackIndex] = new FilterData()),
            this._filterStackIndex++,
            e
          );
        }
      }
