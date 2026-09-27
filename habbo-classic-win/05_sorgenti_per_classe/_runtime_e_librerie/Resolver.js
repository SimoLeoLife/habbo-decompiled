// Estratto da HabboAirLauncher.deobf.js, riga 6611.

class {
      static {
        n(this, "Resolver");
      }
      constructor() {
        ((this._defaultBundleIdentifierOptions = {
          connector: "-",
          createBundleAssetId: n((e, r) => `${e}${this._bundleIdConnector}${r}`, "createBundleAssetId"),
          extractAssetIdFromBundle: n(
            (e, r) => r.replace(`${e}${this._bundleIdConnector}`, ""),
            "extractAssetIdFromBundle",
          ),
        }),
          (this._bundleIdConnector = this._defaultBundleIdentifierOptions.connector),
          (this._createBundleAssetId = this._defaultBundleIdentifierOptions.createBundleAssetId),
          (this._extractAssetIdFromBundle = this._defaultBundleIdentifierOptions.extractAssetIdFromBundle),
          (this._assetMap = {}),
          (this._preferredOrder = []),
          (this._parsers = []),
          (this._resolverHash = {}),
          (this._bundles = {}));
      }
      setBundleIdentifier(e) {
        if (
          ((this._bundleIdConnector = e.connector ?? this._bundleIdConnector),
          (this._createBundleAssetId = e.createBundleAssetId ?? this._createBundleAssetId),
          (this._extractAssetIdFromBundle = e.extractAssetIdFromBundle ?? this._extractAssetIdFromBundle),
          this._extractAssetIdFromBundle("foo", this._createBundleAssetId("foo", "bar")) !== "bar")
        )
          throw new Error("[Resolver] GenerateBundleAssetId are not working correctly");
      }
      prefer(...e) {
        (e.forEach((r) => {
          (this._preferredOrder.push(r), r.priority || (r.priority = Object.keys(r.params)));
        }),
          (this._resolverHash = {}));
      }
      set basePath(e) {
        this._basePath = e;
      }
      get basePath() {
        return this._basePath;
      }
      set rootPath(e) {
        this._rootPath = e;
      }
      get rootPath() {
        return this._rootPath;
      }
      get parsers() {
        return this._parsers;
      }
      reset() {
        (this.setBundleIdentifier(this._defaultBundleIdentifierOptions),
          (this._assetMap = {}),
          (this._preferredOrder = []),
          (this._resolverHash = {}),
          (this._rootPath = null),
          (this._basePath = null),
          (this._manifest = null),
          (this._bundles = {}),
          (this._defaultSearchParams = null));
      }
      setDefaultSearchParams(e) {
        if (typeof e == "string") this._defaultSearchParams = e;
        else {
          let r = e;
          this._defaultSearchParams = Object.keys(r)
            .map((t) => `${encodeURIComponent(t)}=${encodeURIComponent(r[t])}`)
            .join("&");
        }
      }
      getAlias(e) {
        let { alias: r, src: t } = e;
        return U5(
          r || t,
          (s) =>
            typeof s == "string" ? s : Array.isArray(s) ? s.map((o) => o?.src ?? o) : s?.src ? s.src : s,
          !0,
        );
      }
      removeAlias(e, r) {
        this._assetMap[e] &&
          ((r && r !== this._resolverHash[e]) || (delete this._resolverHash[e], delete this._assetMap[e]));
      }
      addManifest(e) {
        (this._manifest && warn_("[Resolver] Manifest already exists, this will be overwritten"),
          (this._manifest = e),
          e.bundles.forEach((r) => {
            this.addBundle(r.name, r.assets);
          }));
      }
      addBundle(e, r) {
        let t = [],
          i = r;
        (Array.isArray(r) ||
          (i = Object.entries(r).map(([s, o]) =>
            typeof o == "string" || Array.isArray(o) ? { alias: s, src: o } : { alias: s, ...o },
          )),
          i.forEach((s) => {
            let o = s.src,
              d = s.alias,
              c;
            if (typeof d == "string") {
              let f = this._createBundleAssetId(e, d);
              (t.push(f), (c = [d, f]));
            } else {
              let f = d.map((l) => this._createBundleAssetId(e, l));
              (t.push(...f), (c = [...d, ...f]));
            }
            this.add({ ...s, alias: c, src: o });
          }),
          (this._bundles[e] = t));
      }
      add(e) {
        let r = [];
        Array.isArray(e) ? r.push(...e) : r.push(e);
        let t;
        ((t = n((s) => {
          this.hasKey(s) && warn_(`[Resolver] already has key: ${s} overwriting`);
        }, "keyCheck")),
          U5(r).forEach((s) => {
            let { src: o } = s,
              { data: d, format: c, loadParser: f, parser: l } = s,
              b = U5(o).map((m) => (typeof m == "string" ? createStringVariations(m) : Array.isArray(m) ? m : [m])),
              _ = this.getAlias(s);
            Array.isArray(_) ? _.forEach(t) : t(_);
            let h = [],
              p = n((m) => {
                let v = this._parsers.find((w) => w.test(m));
                return { src: m, ...v?.parse(m) };
              }, "parseUrl");
            (b.forEach((m) => {
              m.forEach((v) => {
                let w = {};
                if (
                  (typeof v != "object"
                    ? (w = p(v))
                    : ((d = v.data ?? d),
                      (c = v.format ?? c),
                      (v.loadParser || v.parser) && ((f = v.loadParser ?? f), (l = v.parser ?? l)),
                      (w = { ...p(v.src), ...v })),
                  !_)
                )
                  throw new Error(`[Resolver] alias is undefined for this asset: ${w.src}`);
                ((w = this._buildResolvedAsset(w, {
                  aliases: _,
                  data: d,
                  format: c,
                  loadParser: f,
                  parser: l,
                  progressSize: s.progressSize,
                })),
                  h.push(w));
              });
            }),
              _.forEach((m) => {
                this._assetMap[m] = h;
              }));
          }));
      }
      resolveBundle(e) {
        let r = kPe(e);
        e = U5(e);
        let t = {};
        return (
          e.forEach((i) => {
            let s = this._bundles[i];
            if (s) {
              let o = this.resolve(s),
                d = {};
              for (let c in o) {
                let f = o[c];
                d[this._extractAssetIdFromBundle(i, c)] = f;
              }
              t[i] = d;
            }
          }),
          r ? t[e[0]] : t
        );
      }
      resolveUrl(e) {
        let r = this.resolve(e);
        if (typeof e != "string") {
          let t = {};
          for (let i in r) t[i] = r[i].src;
          return t;
        }
        return r.src;
      }
      resolve(e) {
        let r = kPe(e);
        e = U5(e);
        let t = {};
        return (
          e.forEach((i) => {
            if (!this._resolverHash[i])
              if (this._assetMap[i]) {
                let s = this._assetMap[i],
                  o = this._getPreferredOrder(s);
                (o?.priority.forEach((d) => {
                  o.params[d].forEach((c) => {
                    let f = s.filter((l) => (l[d] ? l[d] === c : !1));
                    f.length && (s = f);
                  });
                }),
                  (this._resolverHash[i] = s[0]));
              } else this._resolverHash[i] = this._buildResolvedAsset({ alias: [i], src: i }, {});
            t[i] = this._resolverHash[i];
          }),
          r ? t[e[0]] : t
        );
      }
      hasKey(e) {
        return !!this._assetMap[e];
      }
      hasBundle(e) {
        return !!this._bundles[e];
      }
      _getPreferredOrder(e) {
        for (let r = 0; r < e.length; r++) {
          let t = e[r],
            i = this._preferredOrder.find((s) => s.params.format.includes(t.format));
          if (i) return i;
        }
        return this._preferredOrder[0];
      }
      _appendDefaultSearchParams(e) {
        if (!this._defaultSearchParams) return e;
        let r = /\?/.test(e) ? "&" : "?";
        return `${e}${r}${this._defaultSearchParams}`;
      }
      _buildResolvedAsset(e, r) {
        let { aliases: t, data: i, loadParser: s, parser: o, format: d, progressSize: c } = r;
        return (
          (this._basePath || this._rootPath) &&
            (e.src = Jg.toAbsolute(e.src, this._basePath, this._rootPath)),
          (e.alias = t ?? e.alias ?? [e.src]),
          (e.src = this._appendDefaultSearchParams(e.src)),
          (e.data = { ...(i || {}), ...e.data }),
          (e.loadParser = s ?? e.loadParser),
          (e.parser = o ?? e.parser),
          (e.format = d ?? e.format ?? getUrlExtension(e.src)),
          c !== void 0 && (e.progressSize = c),
          e
        );
      }
    }
