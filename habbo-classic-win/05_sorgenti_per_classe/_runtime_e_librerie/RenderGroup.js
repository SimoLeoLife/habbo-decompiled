// Estratto da HabboAirLauncher.deobf.js, riga 3528.

class {
      static {
        n(this, "RenderGroup");
      }
      constructor() {
        ((this.renderPipeId = "renderGroup"),
          (this.root = null),
          (this.canBundle = !1),
          (this.renderGroupParent = null),
          (this.renderGroupChildren = []),
          (this.worldTransform = new Ze()),
          (this.worldColorAlpha = 4294967295),
          (this.worldColor = 16777215),
          (this.worldAlpha = 1),
          (this.childrenToUpdate = Object.create(null)),
          (this.updateTick = 0),
          (this.gcTick = 0),
          (this.childrenRenderablesToUpdate = { list: [], index: 0 }),
          (this.structureDidChange = !0),
          (this.instructionSet = new InstructionSet()),
          (this._onRenderContainers = []),
          (this.textureNeedsUpdate = !0),
          (this.isCachedAsTexture = !1),
          (this._matrixDirty = 7));
      }
      init(e) {
        ((this.root = e), e._onRender && this.addOnRender(e), (e.didChange = !0));
        let r = e.children;
        for (let t = 0; t < r.length; t++) {
          let i = r[t];
          ((i._updateFlags = 15), this.addChild(i));
        }
      }
      enableCacheAsTexture(e = {}) {
        ((this.textureOptions = e), (this.isCachedAsTexture = !0), (this.textureNeedsUpdate = !0));
      }
      disableCacheAsTexture() {
        ((this.isCachedAsTexture = !1),
          this.texture && (po.returnTexture(this.texture, !0), (this.texture = null)));
      }
      updateCacheTexture() {
        this.textureNeedsUpdate = !0;
        let e = this._parentCacheAsTextureRenderGroup;
        e && !e.textureNeedsUpdate && e.updateCacheTexture();
      }
      reset() {
        this.renderGroupChildren.length = 0;
        for (let e in this.childrenToUpdate) {
          let r = this.childrenToUpdate[e];
          (r.list.fill(null), (r.index = 0));
        }
        ((this.childrenRenderablesToUpdate.index = 0),
          this.childrenRenderablesToUpdate.list.fill(null),
          (this.root = null),
          (this.updateTick = 0),
          (this.structureDidChange = !0),
          (this._onRenderContainers.length = 0),
          (this.renderGroupParent = null),
          this.disableCacheAsTexture());
      }
      get localTransform() {
        return this.root.localTransform;
      }
      addRenderGroupChild(e) {
        (e.renderGroupParent && e.renderGroupParent._removeRenderGroupChild(e),
          (e.renderGroupParent = this),
          this.renderGroupChildren.push(e));
      }
      _removeRenderGroupChild(e) {
        let r = this.renderGroupChildren.indexOf(e);
        (r > -1 && this.renderGroupChildren.splice(r, 1), (e.renderGroupParent = null));
      }
      addChild(e) {
        if (
          ((this.structureDidChange = !0),
          (e.parentRenderGroup = this),
          (e.updateTick = -1),
          e.parent === this.root
            ? (e.relativeRenderGroupDepth = 1)
            : (e.relativeRenderGroupDepth = e.parent.relativeRenderGroupDepth + 1),
          (e.didChange = !0),
          this.onChildUpdate(e),
          e.renderGroup)
        ) {
          this.addRenderGroupChild(e.renderGroup);
          return;
        }
        e._onRender && this.addOnRender(e);
        let r = e.children;
        for (let t = 0; t < r.length; t++) this.addChild(r[t]);
      }
      removeChild(e) {
        if (
          ((this.structureDidChange = !0),
          e._onRender && (e.renderGroup || this.removeOnRender(e)),
          (e.parentRenderGroup = null),
          e.renderGroup)
        ) {
          this._removeRenderGroupChild(e.renderGroup);
          return;
        }
        let r = e.children;
        for (let t = 0; t < r.length; t++) this.removeChild(r[t]);
      }
      removeChildren(e) {
        for (let r = 0; r < e.length; r++) this.removeChild(e[r]);
      }
      onChildUpdate(e) {
        let r = this.childrenToUpdate[e.relativeRenderGroupDepth];
        (r || (r = this.childrenToUpdate[e.relativeRenderGroupDepth] = { index: 0, list: [] }),
          (r.list[r.index++] = e));
      }
      updateRenderable(e) {
        e.globalDisplayStatus < 7 ||
          (this.instructionSet.renderPipes[e.renderPipeId].updateRenderable(e), (e.didViewUpdate = !1));
      }
      onChildViewUpdate(e) {
        this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++] = e;
      }
      get isRenderable() {
        return this.root.localDisplayStatus === 7 && this.worldAlpha > 0;
      }
      addOnRender(e) {
        this._onRenderContainers.push(e);
      }
      removeOnRender(e) {
        this._onRenderContainers.splice(this._onRenderContainers.indexOf(e), 1);
      }
      runOnRender(e) {
        for (let r = 0; r < this._onRenderContainers.length; r++) this._onRenderContainers[r]._onRender(e);
      }
      destroy() {
        (this.disableCacheAsTexture(),
          (this.renderGroupParent = null),
          (this.root = null),
          (this.childrenRenderablesToUpdate = null),
          (this.childrenToUpdate = null),
          (this.renderGroupChildren = null),
          (this._onRenderContainers = null),
          (this.instructionSet = null));
      }
      getChildren(e = []) {
        let r = this.root.children;
        for (let t = 0; t < r.length; t++) this._getChildren(r[t], e);
        return e;
      }
      _getChildren(e, r = []) {
        if ((r.push(e), e.renderGroup)) return r;
        let t = e.children;
        for (let i = 0; i < t.length; i++) this._getChildren(t[i], r);
        return r;
      }
      invalidateMatrices() {
        this._matrixDirty = 7;
      }
      get inverseWorldTransform() {
        return (this._matrixDirty & 1) === 0
          ? this._inverseWorldTransform
          : ((this._matrixDirty &= -2),
            this._inverseWorldTransform || (this._inverseWorldTransform = new Ze()),
            this._inverseWorldTransform.copyFrom(this.worldTransform).invert());
      }
      get textureOffsetInverseTransform() {
        return (this._matrixDirty & 2) === 0
          ? this._textureOffsetInverseTransform
          : ((this._matrixDirty &= -3),
            this._textureOffsetInverseTransform || (this._textureOffsetInverseTransform = new Ze()),
            this._textureOffsetInverseTransform
              .copyFrom(this.inverseWorldTransform)
              .translate(-this._textureBounds.x, -this._textureBounds.y));
      }
      get inverseParentTextureTransform() {
        if ((this._matrixDirty & 4) === 0) return this._inverseParentTextureTransform;
        this._matrixDirty &= -5;
        let e = this._parentCacheAsTextureRenderGroup;
        return e
          ? (this._inverseParentTextureTransform || (this._inverseParentTextureTransform = new Ze()),
            this._inverseParentTextureTransform
              .copyFrom(this.worldTransform)
              .prepend(e.inverseWorldTransform)
              .translate(-e._textureBounds.x, -e._textureBounds.y))
          : this.worldTransform;
      }
      get cacheToLocalTransform() {
        return this.isCachedAsTexture
          ? this.textureOffsetInverseTransform
          : this._parentCacheAsTextureRenderGroup
            ? this._parentCacheAsTextureRenderGroup.textureOffsetInverseTransform
            : null;
      }
    }
