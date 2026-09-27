// Extracted from HabboAirLauncher.deobf.js, line 7490.

class QVe extends Wi {
      static {
        n(this, "_VideoSource");
      }
      constructor(e) {
        (super(e),
          (this.isReady = !1),
          (this.uploadMethodId = "video"),
          (e = { ...QVe.defaultOptions, ...e }),
          (this._autoUpdate = !0),
          (this._isConnectedToTicker = !1),
          (this._updateFPS = e.updateFPS || 0),
          (this._msToNextUpdate = 0),
          (this.autoPlay = e.autoPlay !== !1),
          (this.alphaMode = e.alphaMode ?? "premultiply-alpha-on-upload"),
          (this._videoFrameRequestCallback = this._videoFrameRequestCallback.bind(this)),
          (this._videoFrameRequestCallbackHandle = null),
          (this._load = null),
          (this._resolve = null),
          (this._reject = null),
          (this._onCanPlay = this._onCanPlay.bind(this)),
          (this._onCanPlayThrough = this._onCanPlayThrough.bind(this)),
          (this._onError = this._onError.bind(this)),
          (this._onPlayStart = this._onPlayStart.bind(this)),
          (this._onPlayStop = this._onPlayStop.bind(this)),
          (this._onSeeked = this._onSeeked.bind(this)),
          e.autoLoad !== !1 && this.load());
      }
      updateFrame() {
        if (!this.destroyed) {
          if (this._updateFPS) {
            let e = vc.shared.elapsedMS * this.resource.playbackRate;
            this._msToNextUpdate = Math.floor(this._msToNextUpdate - e);
          }
          ((!this._updateFPS || this._msToNextUpdate <= 0) &&
            (this._msToNextUpdate = this._updateFPS ? Math.floor(1e3 / this._updateFPS) : 0),
            this.isValid && this.update());
        }
      }
      _videoFrameRequestCallback() {
        (this.updateFrame(),
          this.destroyed
            ? (this._videoFrameRequestCallbackHandle = null)
            : (this._videoFrameRequestCallbackHandle = this.resource.requestVideoFrameCallback(
                this._videoFrameRequestCallback,
              )));
      }
      get isValid() {
        return !!this.resource.videoWidth && !!this.resource.videoHeight;
      }
      async load() {
        if (this._load) return this._load;
        let e = this.resource,
          r = this.options;
        return (
          (e.readyState === e.HAVE_ENOUGH_DATA || e.readyState === e.HAVE_FUTURE_DATA) &&
            e.width &&
            e.height &&
            (e.complete = !0),
          e.addEventListener("play", this._onPlayStart),
          e.addEventListener("pause", this._onPlayStop),
          e.addEventListener("seeked", this._onSeeked),
          this._isSourceReady()
            ? this._mediaReady()
            : (r.preload || e.addEventListener("canplay", this._onCanPlay),
              e.addEventListener("canplaythrough", this._onCanPlayThrough),
              e.addEventListener("error", this._onError, !0)),
          (this.alphaMode = await detectVideoAlphaMode()),
          (this._load = new Promise((t, i) => {
            this.isValid
              ? t(this)
              : ((this._resolve = t),
                (this._reject = i),
                r.preloadTimeoutMs !== void 0 &&
                  (this._preloadTimeout = setTimeout(() => {
                    this._onError(new ErrorEvent(`Preload exceeded timeout of ${r.preloadTimeoutMs}ms`));
                  })),
                e.load());
          })),
          this._load
        );
      }
      _onError(e) {
        (this.resource.removeEventListener("error", this._onError, !0),
          this.emit("error", e),
          this._reject && (this._reject(e), (this._reject = null), (this._resolve = null)));
      }
      _isSourcePlaying() {
        let e = this.resource;
        return !e.paused && !e.ended;
      }
      _isSourceReady() {
        return this.resource.readyState > 2;
      }
      _onPlayStart() {
        (this.isValid || this._mediaReady(), this._configureAutoUpdate());
      }
      _onPlayStop() {
        this._configureAutoUpdate();
      }
      _onSeeked() {
        this._autoUpdate &&
          !this._isSourcePlaying() &&
          ((this._msToNextUpdate = 0), this.updateFrame(), (this._msToNextUpdate = 0));
      }
      _onCanPlay() {
        (this.resource.removeEventListener("canplay", this._onCanPlay), this._mediaReady());
      }
      _onCanPlayThrough() {
        (this.resource.removeEventListener("canplaythrough", this._onCanPlay),
          this._preloadTimeout && (clearTimeout(this._preloadTimeout), (this._preloadTimeout = void 0)),
          this._mediaReady());
      }
      _mediaReady() {
        let e = this.resource;
        (this.isValid && ((this.isReady = !0), this.resize(e.videoWidth, e.videoHeight)),
          (this._msToNextUpdate = 0),
          this.updateFrame(),
          (this._msToNextUpdate = 0),
          this._resolve && (this._resolve(this), (this._resolve = null), (this._reject = null)),
          this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && this.resource.play());
      }
      destroy() {
        this._configureAutoUpdate();
        let e = this.resource;
        (e &&
          (e.removeEventListener("play", this._onPlayStart),
          e.removeEventListener("pause", this._onPlayStop),
          e.removeEventListener("seeked", this._onSeeked),
          e.removeEventListener("canplay", this._onCanPlay),
          e.removeEventListener("canplaythrough", this._onCanPlayThrough),
          e.removeEventListener("error", this._onError, !0),
          e.pause(),
          (e.src = ""),
          e.load()),
          super.destroy());
      }
      get autoUpdate() {
        return this._autoUpdate;
      }
      set autoUpdate(e) {
        e !== this._autoUpdate && ((this._autoUpdate = e), this._configureAutoUpdate());
      }
      get updateFPS() {
        return this._updateFPS;
      }
      set updateFPS(e) {
        e !== this._updateFPS && ((this._updateFPS = e), this._configureAutoUpdate());
      }
      _configureAutoUpdate() {
        this._autoUpdate && this._isSourcePlaying()
          ? !this._updateFPS && this.resource.requestVideoFrameCallback
            ? (this._isConnectedToTicker &&
                (vc.shared.remove(this.updateFrame, this),
                (this._isConnectedToTicker = !1),
                (this._msToNextUpdate = 0)),
              this._videoFrameRequestCallbackHandle === null &&
                (this._videoFrameRequestCallbackHandle = this.resource.requestVideoFrameCallback(
                  this._videoFrameRequestCallback,
                )))
            : (this._videoFrameRequestCallbackHandle !== null &&
                (this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),
                (this._videoFrameRequestCallbackHandle = null)),
              this._isConnectedToTicker ||
                (vc.shared.add(this.updateFrame, this),
                (this._isConnectedToTicker = !0),
                (this._msToNextUpdate = 0)))
          : (this._videoFrameRequestCallbackHandle !== null &&
              (this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),
              (this._videoFrameRequestCallbackHandle = null)),
            this._isConnectedToTicker &&
              (vc.shared.remove(this.updateFrame, this),
              (this._isConnectedToTicker = !1),
              (this._msToNextUpdate = 0)));
      }
      static test(e) {
        return globalThis.HTMLVideoElement && e instanceof HTMLVideoElement;
      }
    }
