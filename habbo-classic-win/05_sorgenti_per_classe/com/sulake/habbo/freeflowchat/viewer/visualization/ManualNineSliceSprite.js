// Extracted from HabboAirLauncher.deobf.js, line 15304.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/freeflowchat/viewer/visualization/ManualNineSliceSprite.as

class {
      static {
        n(this, "PipelineSystem");
      }
      constructor(e) {
        ((this._moduleCache = Object.create(null)),
          (this._bufferLayoutsCache = Object.create(null)),
          (this._bindingNamesCache = Object.create(null)),
          (this._pipeCache = Object.create(null)),
          (this._pipeStateCaches = Object.create(null)),
          (this._colorMask = 15),
          (this._multisampleCount = 1),
          (this._colorTargetCount = 1),
          (this._renderer = e));
      }
      contextChange(e) {
        ((this._gpu = e), this.setStencilMode(bs.DISABLED), this._updatePipeHash());
      }
      setMultisampleCount(e) {
        this._multisampleCount !== e && ((this._multisampleCount = e), this._updatePipeHash());
      }
      setRenderTarget(e) {
        ((this._multisampleCount = e.msaaSamples),
          (this._depthStencilAttachment = e.descriptor.depthStencilAttachment ? 1 : 0),
          (this._colorTargetCount = e.colorTargetCount),
          this._updatePipeHash());
      }
      setColorMask(e) {
        this._colorMask !== e && ((this._colorMask = e), this._updatePipeHash());
      }
      setStencilMode(e) {
        this._stencilMode !== e &&
          ((this._stencilMode = e), (this._stencilState = Wh[e]), this._updatePipeHash());
      }
      setPipeline(e, r, t, i) {
        let s = this.getPipeline(e, r, t);
        i.setPipeline(s);
      }
      getPipeline(e, r, t, i) {
        (e._layoutKey || (ensureAttributes(e, r.attributeData), this._generateBufferKey(e)), i || (i = e.topology));
        let s = getGraphicsStateKey(e._layoutKey, r._layoutKey, t.data, t._blendModeId, nor[i]);
        return this._pipeCache[s]
          ? this._pipeCache[s]
          : ((this._pipeCache[s] = this._createPipeline(e, r, t, i)), this._pipeCache[s]);
      }
      _createPipeline(e, r, t, i) {
        let s = this._gpu.device,
          o = this._createVertexBufferLayouts(e, r),
          d = this._renderer.state.getColorTargets(t, this._colorTargetCount),
          c = this._stencilMode === bs.RENDERING_MASK_ADD ? 0 : this._colorMask;
        for (let _ = 0; _ < d.length; _++) d[_].writeMask = c;
        let f = this._renderer.shader.getProgramData(r).pipeline,
          l = {
            vertex: { module: this._getModule(r.vertex.source), entryPoint: r.vertex.entryPoint, buffers: o },
            fragment: {
              module: this._getModule(r.fragment.source),
              entryPoint: r.fragment.entryPoint,
              targets: d,
            },
            primitive: { topology: i, cullMode: t.cullMode },
            layout: f,
            multisample: { count: this._multisampleCount },
            label: "PIXI Pipeline",
          };
        return (
          this._depthStencilAttachment &&
            (l.depthStencil = {
              ...this._stencilState,
              format: "depth24plus-stencil8",
              depthWriteEnabled: t.depthTest,
              depthCompare: t.depthTest ? "less" : "always",
            }),
          s.createRenderPipeline(l)
        );
      }
      _getModule(e) {
        return this._moduleCache[e] || this._createModule(e);
      }
      _createModule(e) {
        let r = this._gpu.device;
        return ((this._moduleCache[e] = r.createShaderModule({ code: e })), this._moduleCache[e]);
      }
      _generateBufferKey(e) {
        let r = [],
          t = 0,
          i = Object.keys(e.attributes).sort();
        for (let o = 0; o < i.length; o++) {
          let d = e.attributes[i[o]];
          ((r[t++] = d.offset), (r[t++] = d.format), (r[t++] = d.stride), (r[t++] = d.instance));
        }
        let s = r.join("|");
        return ((e._layoutKey = createIdFromString(s, "geometry")), e._layoutKey);
      }
      _generateAttributeLocationsKey(e) {
        let r = [],
          t = 0,
          i = Object.keys(e.attributeData).sort();
        for (let o = 0; o < i.length; o++) {
          let d = e.attributeData[i[o]];
          r[t++] = d.location;
        }
        let s = r.join("|");
        return ((e._attributeLocationsKey = createIdFromString(s, "programAttributes")), e._attributeLocationsKey);
      }
      getBufferNamesToBind(e, r) {
        let t = (e._layoutKey << 16) | r._attributeLocationsKey;
        if (this._bindingNamesCache[t]) return this._bindingNamesCache[t];
        let i = this._createVertexBufferLayouts(e, r),
          s = Object.create(null),
          o = r.attributeData;
        for (let d = 0; d < i.length; d++) {
          let f = Object.values(i[d].attributes)[0].shaderLocation;
          for (let l in o)
            if (o[l].location === f) {
              s[d] = l;
              break;
            }
        }
        return ((this._bindingNamesCache[t] = s), s);
      }
      _createVertexBufferLayouts(e, r) {
        r._attributeLocationsKey || this._generateAttributeLocationsKey(r);
        let t = (e._layoutKey << 16) | r._attributeLocationsKey;
        if (this._bufferLayoutsCache[t]) return this._bufferLayoutsCache[t];
        let i = [];
        return (
          e.buffers.forEach((s) => {
            let o = { arrayStride: 0, stepMode: "vertex", attributes: [] },
              d = o.attributes;
            for (let c in r.attributeData) {
              let f = e.attributes[c];
              ((f.divisor ?? 1) !== 1 &&
                warn_(
                  `Attribute ${c} has an invalid divisor value of '${f.divisor}'. WebGPU only supports a divisor value of 1`,
                ),
                f.buffer === s &&
                  ((o.arrayStride = f.stride),
                  (o.stepMode = f.instance ? "instance" : "vertex"),
                  d.push({
                    shaderLocation: r.attributeData[c].location,
                    offset: f.offset,
                    format: f.format,
                  })));
            }
            d.length && i.push(o);
          }),
          (this._bufferLayoutsCache[t] = i),
          i
        );
      }
      _updatePipeHash() {
        let e = getGlobalStateKey(
          this._stencilMode,
          this._multisampleCount,
          this._colorMask,
          this._depthStencilAttachment,
          this._colorTargetCount,
        );
        (this._pipeStateCaches[e] || (this._pipeStateCaches[e] = Object.create(null)),
          (this._pipeCache = this._pipeStateCaches[e]));
      }
      destroy() {
        ((this._renderer = null), (this._bufferLayoutsCache = null));
      }
    }
