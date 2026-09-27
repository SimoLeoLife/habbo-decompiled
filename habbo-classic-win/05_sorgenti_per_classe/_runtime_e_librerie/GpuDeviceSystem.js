// Estratto da HabboAirLauncher.deobf.js, riga 14412.

class {
      static {
        n(this, "GpuDeviceSystem");
      }
      constructor(e) {
        this._renderer = e;
      }
      async init(e) {
        return this._initPromise
          ? this._initPromise
          : ((this._initPromise = (e.gpu ? Promise.resolve(e.gpu) : this._createDeviceAndAdaptor(e)).then(
              (r) => {
                ((this.gpu = r), this._renderer.runners.contextChange.emit(this.gpu));
              },
            )),
            this._initPromise);
      }
      contextChange(e) {
        this._renderer.gpu = e;
      }
      async _createDeviceAndAdaptor(e) {
        let r = await yt
            .get()
            .getNavigator()
            .gpu.requestAdapter({
              powerPreference: e.powerPreference,
              forceFallbackAdapter: e.forceFallbackAdapter,
            }),
          t = ["texture-compression-bc", "texture-compression-astc", "texture-compression-etc2"].filter((s) =>
            r.features.has(s),
          ),
          i = await r.requestDevice({ requiredFeatures: t });
        return { adapter: r, device: i };
      }
      destroy() {
        ((this.gpu = null), (this._renderer = null));
      }
    }
