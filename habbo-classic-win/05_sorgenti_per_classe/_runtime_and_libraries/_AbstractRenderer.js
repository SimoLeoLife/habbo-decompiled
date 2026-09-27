// Extracted from HabboAirLauncher.deobf.js, line 10473.

class pGe extends Yn {
        static {
          n(this, "_AbstractRenderer");
        }
        constructor(e) {
          (super(),
            (this.tick = 0),
            (this.uid = uid_("renderer")),
            (this.runners = Object.create(null)),
            (this.renderPipes = Object.create(null)),
            (this._initOptions = {}),
            (this._systemsHash = Object.create(null)),
            (this.type = e.type),
            (this.name = e.name),
            (this.config = e));
          let r = [...Lsr, ...(this.config.runners ?? [])];
          (this._addRunners(...r), this._unsafeEvalCheck());
        }
        async init(e = {}) {
          let r = e.skipExtensionImports === !0 ? !0 : e.manageImports === !1;
          (await loadEnvironmentExtensions(r),
            this._addSystems(this.config.systems),
            this._addPipes(this.config.renderPipes, this.config.renderPipeAdaptors));
          for (let t in this._systemsHash) e = { ...this._systemsHash[t].constructor.defaultOptions, ...e };
          ((e = { ...pGe.defaultOptions, ...e }), (this._roundPixels = e.roundPixels ? 1 : 0));
          for (let t = 0; t < this.runners.init.items.length; t++) await this.runners.init.items[t].init(e);
          this._initOptions = e;
        }
        render(e, r) {
          this.tick++;
          let t = e;
          if (
            (t instanceof Ii &&
              ((t = { container: t }),
              r &&
                (Zr(Va, "passing a second argument is deprecated, please use render options instead"),
                (t.target = r.renderTexture))),
            t.target || (t.target = this.view.renderTarget),
            t.target === this.view.renderTarget &&
              ((this._lastObjectRendered = t.container),
              t.clearColor ?? (t.clearColor = this.background.colorRgba),
              t.clear ?? (t.clear = this.background.clearBeforeRender)),
            t.clearColor)
          ) {
            let i = Array.isArray(t.clearColor) && t.clearColor.length === 4;
            t.clearColor = i ? t.clearColor : na.shared.setValue(t.clearColor).toArray();
          }
          (t.transform || (t.container.updateLocalTransform(), (t.transform = t.container.localTransform)),
            t.container.visible &&
              (t.container.enableRenderGroup(),
              this.runners.prerender.emit(t),
              this.runners.renderStart.emit(t),
              this.runners.render.emit(t),
              this.runners.renderEnd.emit(t),
              this.runners.postrender.emit(t)));
        }
        resize(e, r, t) {
          let i = this.view.resolution;
          (this.view.resize(e, r, t),
            this.emit("resize", this.view.screen.width, this.view.screen.height, this.view.resolution),
            t !== void 0 && t !== i && this.runners.resolutionChange.emit(t));
        }
        clear(e = {}) {
          let r = this;
          (e.target || (e.target = r.renderTarget.renderTarget),
            e.clearColor || (e.clearColor = this.background.colorRgba),
            e.clear ?? (e.clear = Xd.ALL));
          let { clear: t, clearColor: i, target: s, mipLevel: o, layer: d } = e;
          (na.shared.setValue(i ?? this.background.colorRgba),
            r.renderTarget.clear(s, t, na.shared.toArray(), o ?? 0, d ?? 0));
        }
        get resolution() {
          return this.view.resolution;
        }
        set resolution(e) {
          ((this.view.resolution = e), this.runners.resolutionChange.emit(e));
        }
        get width() {
          return this.view.texture.frame.width;
        }
        get height() {
          return this.view.texture.frame.height;
        }
        get canvas() {
          return this.view.canvas;
        }
        get lastObjectRendered() {
          return this._lastObjectRendered;
        }
        get renderingToScreen() {
          return this.renderTarget.renderingToScreen;
        }
        get screen() {
          return this.view.screen;
        }
        _addRunners(...e) {
          e.forEach((r) => {
            this.runners[r] = new SystemRunner(r);
          });
        }
        _addSystems(e) {
          let r;
          for (r in e) {
            let t = e[r];
            this._addSystem(t.value, t.name);
          }
        }
        _addSystem(e, r) {
          let t = new e(this);
          if (this[r]) throw new Error(`Whoops! The name "${r}" is already in use`);
          ((this[r] = t), (this._systemsHash[r] = t));
          for (let i in this.runners) this.runners[i].add(t);
          return this;
        }
        _addPipes(e, r) {
          let t = r.reduce((i, s) => ((i[s.name] = s.value), i), {});
          e.forEach((i) => {
            let s = i.value,
              o = i.name,
              d = t[o];
            ((this.renderPipes[o] = new s(this, d ? new d() : null)),
              this.runners.destroy.add(this.renderPipes[o]));
          });
        }
        destroy(e = !1) {
          (this.runners.destroy.items.reverse(),
            this.runners.destroy.emit(e),
            (e === !0 || (typeof e == "object" && e.releaseGlobalResources)) && x_.release(),
            Object.values(this.runners).forEach((r) => {
              r.destroy();
            }),
            (this._systemsHash = null),
            (this.renderPipes = null),
            this.removeAllListeners());
        }
        generateTexture(e) {
          return this.textureGenerator.generateTexture(e);
        }
        get roundPixels() {
          return !!this._roundPixels;
        }
        _unsafeEvalCheck() {
          if (!unsafeEvalSupported())
            throw new Error(
              "Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.",
            );
        }
        resetState() {
          this.runners.resetState.emit();
        }
      }
