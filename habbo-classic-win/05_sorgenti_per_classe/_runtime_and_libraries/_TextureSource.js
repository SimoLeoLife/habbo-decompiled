// Extracted from HabboAirLauncher.deobf.js, line 2866.

class UHe extends Yn {
      static {
        n(this, "_TextureSource");
      }
      constructor(e = {}) {
        (super(),
          (this.options = e),
          (this._gpuData = Object.create(null)),
          (this._gcLastUsed = -1),
          (this.uid = uid_("textureSource")),
          (this._resourceType = "textureSource"),
          (this._resourceId = uid_("resource")),
          (this.uploadMethodId = "unknown"),
          (this._resolution = 1),
          (this.pixelWidth = 1),
          (this.pixelHeight = 1),
          (this.width = 1),
          (this.height = 1),
          (this.sampleCount = 1),
          (this.mipLevelCount = 1),
          (this.autoGenerateMipmaps = !1),
          (this.format = "rgba8unorm"),
          (this.dimension = "2d"),
          (this.viewDimension = "2d"),
          (this.arrayLayerCount = 1),
          (this.antialias = !1),
          (this._touched = 0),
          (this._batchTick = -1),
          (this._textureBindLocation = -1),
          (e = { ...UHe.defaultOptions, ...e }),
          (this.label = e.label ?? ""),
          (this.resource = e.resource),
          (this.autoGarbageCollect = e.autoGarbageCollect),
          (this._resolution = e.resolution),
          e.width
            ? (this.pixelWidth = e.width * this._resolution)
            : (this.pixelWidth = this.resource ? (this.resourceWidth ?? 1) : 1),
          e.height
            ? (this.pixelHeight = e.height * this._resolution)
            : (this.pixelHeight = this.resource ? (this.resourceHeight ?? 1) : 1),
          (this.width = this.pixelWidth / this._resolution),
          (this.height = this.pixelHeight / this._resolution),
          (this.format = e.format),
          (this.dimension = e.dimensions),
          (this.viewDimension = e.viewDimension ?? e.dimensions),
          (this.arrayLayerCount = e.arrayLayerCount),
          (this.mipLevelCount = e.mipLevelCount),
          (this.autoGenerateMipmaps = e.autoGenerateMipmaps),
          (this.sampleCount = e.sampleCount),
          (this.antialias = e.antialias),
          (this.alphaMode = e.alphaMode),
          (this.style = new E_(definedProps(e))),
          (this.destroyed = !1),
          this._refreshPOT());
      }
      get source() {
        return this;
      }
      get style() {
        return this._style;
      }
      set style(e) {
        this.style !== e &&
          (this._style?.off("change", this._onStyleChange, this),
          (this._style = e),
          this._style?.on("change", this._onStyleChange, this),
          this._onStyleChange());
      }
      set maxAnisotropy(e) {
        this._style.maxAnisotropy = e;
      }
      get maxAnisotropy() {
        return this._style.maxAnisotropy;
      }
      get addressMode() {
        return this._style.addressMode;
      }
      set addressMode(e) {
        this._style.addressMode = e;
      }
      get repeatMode() {
        return this._style.addressMode;
      }
      set repeatMode(e) {
        this._style.addressMode = e;
      }
      get magFilter() {
        return this._style.magFilter;
      }
      set magFilter(e) {
        this._style.magFilter = e;
      }
      get minFilter() {
        return this._style.minFilter;
      }
      set minFilter(e) {
        this._style.minFilter = e;
      }
      get mipmapFilter() {
        return this._style.mipmapFilter;
      }
      set mipmapFilter(e) {
        this._style.mipmapFilter = e;
      }
      get lodMinClamp() {
        return this._style.lodMinClamp;
      }
      set lodMinClamp(e) {
        this._style.lodMinClamp = e;
      }
      get lodMaxClamp() {
        return this._style.lodMaxClamp;
      }
      set lodMaxClamp(e) {
        this._style.lodMaxClamp = e;
      }
      _onStyleChange() {
        this.emit("styleChange", this);
      }
      update() {
        if (this.resource) {
          let e = this._resolution;
          if (this.resize(this.resourceWidth / e, this.resourceHeight / e)) return;
        }
        this.emit("update", this);
      }
      destroy() {
        ((this.destroyed = !0),
          this.unload(),
          this.emit("destroy", this),
          this._style && (this._style.destroy(), (this._style = null)),
          (this.uploadMethodId = null),
          (this.resource = null),
          this.removeAllListeners());
      }
      unload() {
        ((this._resourceId = uid_("resource")), this.emit("change", this), this.emit("unload", this));
        for (let e in this._gpuData) this._gpuData[e]?.destroy?.();
        this._gpuData = Object.create(null);
      }
      get resourceWidth() {
        let { resource: e } = this;
        return e.naturalWidth || e.videoWidth || e.displayWidth || e.width;
      }
      get resourceHeight() {
        let { resource: e } = this;
        return e.naturalHeight || e.videoHeight || e.displayHeight || e.height;
      }
      get resolution() {
        return this._resolution;
      }
      set resolution(e) {
        this._resolution !== e &&
          ((this._resolution = e), (this.width = this.pixelWidth / e), (this.height = this.pixelHeight / e));
      }
      resize(e, r, t) {
        (t || (t = this._resolution), e || (e = this.width), r || (r = this.height));
        let i = Math.round(e * t),
          s = Math.round(r * t);
        return (
          (this.width = i / t),
          (this.height = s / t),
          (this._resolution = t),
          this.pixelWidth === i && this.pixelHeight === s
            ? !1
            : (this._refreshPOT(),
              (this.pixelWidth = i),
              (this.pixelHeight = s),
              this.emit("resize", this),
              (this._resourceId = uid_("resource")),
              this.emit("change", this),
              !0)
        );
      }
      updateMipmaps() {
        this.autoGenerateMipmaps && this.mipLevelCount > 1 && this.emit("updateMipmaps", this);
      }
      set wrapMode(e) {
        this._style.wrapMode = e;
      }
      get wrapMode() {
        return this._style.wrapMode;
      }
      set scaleMode(e) {
        this._style.scaleMode = e;
      }
      get scaleMode() {
        return this._style.scaleMode;
      }
      _refreshPOT() {
        this.isPowerOfTwo = isPow2(this.pixelWidth) && isPow2(this.pixelHeight);
      }
      static test(e) {
        throw new Error("Unimplemented");
      }
    }
