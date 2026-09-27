// Estratto da HabboAirLauncher.deobf.js, riga 13667.

class {
      static {
        n(this, "GlobalUniformSystem");
      }
      constructor(e) {
        ((this._stackIndex = 0),
          (this._globalUniformDataStack = []),
          (this._uniformsPool = []),
          (this._activeUniforms = []),
          (this._bindGroupPool = []),
          (this._activeBindGroups = []),
          (this._renderer = e));
      }
      reset() {
        this._stackIndex = 0;
        for (let e = 0; e < this._activeUniforms.length; e++)
          this._uniformsPool.push(this._activeUniforms[e]);
        for (let e = 0; e < this._activeBindGroups.length; e++)
          this._bindGroupPool.push(this._activeBindGroups[e]);
        ((this._activeUniforms.length = 0), (this._activeBindGroups.length = 0));
      }
      start(e) {
        (this.reset(), this.push(e));
      }
      bind({ size: e, projectionMatrix: r, worldTransformMatrix: t, worldColor: i, offset: s }) {
        let o = this._renderer.renderTarget.renderTarget,
          d = this._stackIndex
            ? this._globalUniformDataStack[this._stackIndex - 1]
            : { projectionData: o, worldTransformMatrix: new Ze(), worldColor: 4294967295, offset: new Ha() },
          c = {
            projectionMatrix: r || this._renderer.renderTarget.projectionMatrix,
            resolution: e || o.size,
            worldTransformMatrix: t || d.worldTransformMatrix,
            worldColor: i || d.worldColor,
            offset: s || d.offset,
            bindGroup: null,
          },
          f = this._uniformsPool.pop() || this._createUniforms();
        this._activeUniforms.push(f);
        let l = f.uniforms;
        ((l.uProjectionMatrix = c.projectionMatrix),
          (l.uResolution = c.resolution),
          l.uWorldTransformMatrix.copyFrom(c.worldTransformMatrix),
          (l.uWorldTransformMatrix.tx -= c.offset.x),
          (l.uWorldTransformMatrix.ty -= c.offset.y),
          color32BitToUniform(c.worldColor, l.uWorldColorAlpha, 0),
          f.update());
        let b;
        (this._renderer.renderPipes.uniformBatch
          ? (b = this._renderer.renderPipes.uniformBatch.getUniformBindGroup(f, !1))
          : ((b = this._bindGroupPool.pop() || new BindGroup()),
            this._activeBindGroups.push(b),
            b.setResource(f, 0)),
          (c.bindGroup = b),
          (this._currentGlobalUniformData = c));
      }
      push(e) {
        (this.bind(e), (this._globalUniformDataStack[this._stackIndex++] = this._currentGlobalUniformData));
      }
      pop() {
        ((this._currentGlobalUniformData = this._globalUniformDataStack[--this._stackIndex - 1]),
          this._renderer.type === Jo.WEBGL && this._currentGlobalUniformData.bindGroup.resources[0].update());
      }
      get bindGroup() {
        return this._currentGlobalUniformData.bindGroup;
      }
      get globalUniformData() {
        return this._currentGlobalUniformData;
      }
      get uniformGroup() {
        return this._currentGlobalUniformData.bindGroup.resources[0];
      }
      _createUniforms() {
        return new Zi(
          {
            uProjectionMatrix: { value: new Ze(), type: "mat3x3<f32>" },
            uWorldTransformMatrix: { value: new Ze(), type: "mat3x3<f32>" },
            uWorldColorAlpha: { value: new Float32Array(4), type: "vec4<f32>" },
            uResolution: { value: [0, 0], type: "vec2<f32>" },
          },
          { isStatic: !0 },
        );
      }
      destroy() {
        ((this._renderer = null),
          (this._globalUniformDataStack.length = 0),
          (this._uniformsPool.length = 0),
          (this._activeUniforms.length = 0),
          (this._bindGroupPool.length = 0),
          (this._activeBindGroups.length = 0),
          (this._currentGlobalUniformData = null));
      }
    }
