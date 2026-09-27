// Extracted from HabboAirLauncher.deobf.js, line 2789.

class HHe extends Yn {
      static {
        n(this, "_TextureStyle");
      }
      constructor(e = {}) {
        (super(),
          (this._resourceType = "textureSampler"),
          (this._touched = 0),
          (this._maxAnisotropy = 1),
          (this.destroyed = !1),
          (e = { ...HHe.defaultOptions, ...e }),
          (this.addressMode = e.addressMode),
          (this.addressModeU = e.addressModeU ?? this.addressModeU),
          (this.addressModeV = e.addressModeV ?? this.addressModeV),
          (this.addressModeW = e.addressModeW ?? this.addressModeW),
          (this.scaleMode = e.scaleMode),
          (this.magFilter = e.magFilter ?? this.magFilter),
          (this.minFilter = e.minFilter ?? this.minFilter),
          (this.mipmapFilter = e.mipmapFilter ?? this.mipmapFilter),
          (this.lodMinClamp = e.lodMinClamp),
          (this.lodMaxClamp = e.lodMaxClamp),
          (this.compare = e.compare),
          (this.maxAnisotropy = e.maxAnisotropy ?? 1));
      }
      set addressMode(e) {
        ((this.addressModeU = e), (this.addressModeV = e), (this.addressModeW = e));
      }
      get addressMode() {
        return this.addressModeU;
      }
      set wrapMode(e) {
        (Zr(Va, "TextureStyle.wrapMode is now TextureStyle.addressMode"), (this.addressMode = e));
      }
      get wrapMode() {
        return this.addressMode;
      }
      set scaleMode(e) {
        ((this.magFilter = e), (this.minFilter = e), (this.mipmapFilter = e));
      }
      get scaleMode() {
        return this.magFilter;
      }
      set maxAnisotropy(e) {
        ((this._maxAnisotropy = Math.min(e, 16)), this._maxAnisotropy > 1 && (this.scaleMode = "linear"));
      }
      get maxAnisotropy() {
        return this._maxAnisotropy;
      }
      get _resourceId() {
        return this._sharedResourceId || this._generateResourceId();
      }
      update() {
        ((this._sharedResourceId = null), this.emit("change", this));
      }
      _generateResourceId() {
        let e = `${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;
        return ((this._sharedResourceId = createResourceIdFromString(e)), this._resourceId);
      }
      destroy() {
        ((this.destroyed = !0),
          this.emit("destroy", this),
          this.emit("change", this),
          this.removeAllListeners());
      }
    }
