// Estratto da HabboAirLauncher.deobf.js, riga 71509.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/configuration/HabboConfigurationManager.as
// Nome offuscato: _i062e22ca4959c6

class a extends ue {
  static {
    n(this, "HabboConfigurationManager");
  }
  static INTERPOLATION_DEPTH_LIMIT = 3;
  static REPLACE_CHAR = "%";
  static HABBICONS_RESOURCE_NAME = "habbicons";
  static const_694 = "habbicons.asset.root";
  static HABBICONS_ASSET_HASH = "habbicons.asset.hash";
  static const_510 = "habbicons.url";
  static HABBICONS_EXTERNAL_HASH = "habbicons.hash";
  static const_317 = "https://images.habbo.com/habbicons";
  static _ra91f8402a8d415 = /^\/\/images\.habbo\.com(?:[/:]|$)/i;
  _r64fd36bf42401e;
  _r22e00436bb98cd;
  _rd8a55d1df7fddc;
  _initialized;
  _re90c73c6c90992;
  var_5768;
  _rb4397f83713709;
  _localization;
  constructor(e, r = 0, t = null) {
    (super(e, r, t),
      this.lock(),
      (this._r64fd36bf42401e = (r & HabboConfigurationFlags.SKIP_EXTERNAL_VARIABLES) > 0),
      (this._r22e00436bb98cd = (r & HabboConfigurationFlags.SKIP_LOCALIZATIONS) > 0),
      (this._rd8a55d1df7fddc = new Map()),
      (this._initialized = !1),
      (this._re90c73c6c90992 = new Set()),
      (this.var_5768 = typeof location < "u" && location.protocol === "https:"),
      (this._rb4397f83713709 = null),
      (this.context.configuration = this),
      this._r298d4eb9c5ceec());
    let i = this._rd60dca356f6883();
    i != null && !this.propertyExists(HabboProperty.const_682) && this._rdb9c3d6b66d840(i);
  }
  get dependencies() {
    return super.dependencies.concat([
      new ComponentDependency(
        new IIDHabboLocalizationManager(),
        (e) => {
          this._localization = e;
        },
        !1,
        [{ type: M.ComponentDependency, callback: n((e) => this._rce2f27496ed77a(e), "callback") }],
      ),
    ]);
  }
  dispose() {
    super.dispose();
  }
  isInitialized() {
    return this._initialized;
  }
  _rdb9c3d6b66d840(e) {
    e.length !== 0 &&
      (this._rb4397f83713709 !== e &&
        ((this._rb4397f83713709 = e),
        this._r97b22a35013fa5(e),
        this.setProperty(HabboProperty.const_682, e),
        Na.setCacheNamespace(e),
        this.updateEnvironmentVariables()),
      this._rd3f8b794dfcc83(),
      this.setDefaults());
  }
  _r298d4eb9c5ceec() {
    ((this._initialized = !1),
      (this._rd8a55d1df7fddc = new Map()),
      (this._re90c73c6c90992 = new Set()),
      this._rbbbdf1400e20ca(),
      this.parseCommonVariables(),
      this.parseLocalizationVariables(),
      this.setProperty(HabboProperty.CLIENT_URL, "app:/"),
      this.parseArguments(),
      this.setDefaults(),
      this.updateEnvironmentVariables(),
      this.propertyExists(HabboProperty.const_682) || this._rd3f8b794dfcc83(),
      !this._initialized && this._r64fd36bf42401e
        ? this._r62e20ccdcbabd3()
        : !this._initialized && this._r22e00436bb98cd && this.initConfigurationDownload());
  }
  propertyExists(e) {
    return this._rd8a55d1df7fddc.has(e);
  }
  getProperty(e, r = null) {
    let t = this._rd8a55d1df7fddc.get(e) ?? "";
    return t.length === 0
      ? ""
      : ((t = this.interpolate(t)),
        t.startsWith("//") &&
          (t = `${this.var_5768 || a._ra91f8402a8d415.test(t) ? "https:" : "http:"}${t}`),
        (t = this.updateUrlProtocol(t)),
        r != null && (t = this.fillParams(t, r)),
        t);
  }
  setProperty(e, r, t = !1, i = !1) {
    if (this._re90c73c6c90992.has(e) && !t) return;
    (!1, e === HabboProperty.const_682 && ((this._rb4397f83713709 = r), Na.setCacheNamespace(r)));
    let s = r;
    (this._rd8a55d1df7fddc.set(e, s), t && this._re90c73c6c90992.add(e));
  }
  getBoolean(e) {
    let r = this._rd8a55d1df7fddc.get(e);
    if (r == null) return !1;
    let t = r.toLowerCase();
    return t === "1" || t === "true";
  }
  getInteger(e, r) {
    let t = Number.parseInt(this._rd8a55d1df7fddc.get(e) ?? "", 10);
    return Number.isNaN(t) ? r : t;
  }
  updateUrlProtocol(e) {
    return this.var_5768 ? e.replace("http://", "https://").replace(":8090/", ":8443/") : e;
  }
  interpolate(e) {
    if (e == null) return "";
    let r = e,
      t = /\${([^}]*)}/g;
    for (let i = 0; i < a.INTERPOLATION_DEPTH_LIMIT; i++) {
      let s,
        o = 0,
        d = "";
      for (t.lastIndex = 0; (s = t.exec(r)) != null;) {
        let c = s[1] ?? "";
        if (!this.propertyExists(c)) return "";
        ((d += r.substring(o, s.index)), (d += this.getProperty(c)), (o = s.index + s[0].length));
      }
      if (((d += r.substring(o)), d === r)) break;
      r = d;
    }
    return r;
  }
  initConfigurationDownload() {
    this._initialized = !1;
    let e =
      this._localization == null
        ? this.getProperty(HabboProperty.EXTERNAL_VARIABLES)
        : `variables_${this._localization._red912863ccba35().toLowerCase()}_${this._localization._rcdbdbfe4130cf2()}`;
    if (e.length === 0) {
      this.onConfigurationError(null);
      return;
    }
    if (this.assets.hasAsset(e)) {
      let i = this.assets.getAssetByName(e);
      i != null && this.assets.removeAsset(i)?.dispose();
    }
    let r =
        this._localization == null
          ? e
          : `${this._localization._r68d2fdd449edb3()}/${this._localization._rcdbdbfe4130cf2()}`,
      t = this.assets.loadAssetFromFile(e, new _i636490202c0f9a(r), "text/plain");
    (t.addEventListener(Le.ASSET_LOADER_EVENT_COMPLETE, this._r2dab8eae25b033),
      t.addEventListener(Le.ASSET_LOADER_EVENT_ERROR, this._r74a045accd5d3b));
  }
  _rce2f27496ed77a(e) {
    !this._initialized && !this._r64fd36bf42401e && this.initConfigurationDownload();
  }
  updateEnvironmentVariables() {
    let e = [
      HabboProperty.CONNECTION_INFO_HOST,
      HabboProperty.CONNECTION_INFO_PORT,
      HabboProperty.URL_PREFIX,
      HabboProperty.SITE_URL,
      HabboProperty.DYNAMIC_DOWNLOAD_URL,
      HabboProperty.DYNAMIC_DOWNLOAD_TEMPLATE,
      HabboProperty.const_1399,
      HabboProperty.const_466,
      HabboProperty.const_691,
      HabboProperty.const_1082,
      HabboProperty.const_313,
      HabboProperty.const_550,
    ];
    for (let r of e) {
      let t = this._rd8a55d1df7fddc.get(r) ?? "",
        i = `${r}.${this._rb4397f83713709 ?? ""}`;
      if (this._rd8a55d1df7fddc.has(i)) {
        let s = this._rd8a55d1df7fddc.get(i) ?? "";
        this._rd8a55d1df7fddc.set(r, s);
      } else t.length > 0 && this._rd8a55d1df7fddc.set(r, t);
    }
  }
  fillParams(e, r) {
    let t = e;
    for (let [i, s] of r.entries()) t = t.replaceAll(`${a.REPLACE_CHAR}${i}${a.REPLACE_CHAR}`, s);
    return t;
  }
  parseConfiguration(e) {
    let r = e.split(/\n\r{1,}|\n{1,}|\r{1,}/gm),
      t = !1;
    for (let i of r) {
      if (i.startsWith("#") || i === "") continue;
      let s = i.split("=");
      if (s.length < 2 || s[0]?.length === 0 || s[1]?.length === 0) continue;
      let o = (s.shift() ?? "").trim(),
        d = s.join("=").trim();
      (o === "configuration.readonly" && d === "true" && (t = !0), this.setProperty(o, d, t));
    }
  }
  _rd3f8b794dfcc83() {
    let e = this._rd60dca356f6883();
    if (!(e == null || e.length === 0))
      for (let [r, t] of this._rd8a55d1df7fddc.entries()) {
        let i = `.${e}`;
        if (!r.endsWith(i)) continue;
        let s = r.slice(0, -i.length);
        this._rd8a55d1df7fddc.set(s, t);
      }
  }
  get _r74a045accd5d3b() {
    return ((this._r73f68b9f45a3d5 ??= (e) => this.onConfigurationError(e)), this._r73f68b9f45a3d5);
  }
  get _r2dab8eae25b033() {
    return ((this._r8faeb559b5e61e ??= (e) => this._r40d748a503753d(e)), this._r8faeb559b5e61e);
  }
  onConfigurationError(e) {
    let t = e?.status ?? 0;
    (Ae.logEventLog(`external_variables download error ${t}`),
      class_14.error(
        `Could not load external variables. Failed to load URL ${this.getProperty(HabboProperty.EXTERNAL_VARIABLES)} HTTP status ${t}. Client startup failed!`,
        !0,
        class_14.ERROR_CATEGORY_DOWNLOAD_EXTERNAL_VARIABLES,
      ));
  }
  _r40d748a503753d(e) {
    if (this.disposed) return;
    let r = e.target;
    if (r == null) return;
    let t = r._r7ea1029131e026.content,
      i = "";
    (t instanceof re
      ? ((t.position = 0), (i = t.readUTFBytes(t.length)))
      : t instanceof Uint8Array
        ? (i = re.compress(t).readUTFBytes(t.length))
        : typeof t == "string" && (i = t),
      i.length > 0 && this.parseConfiguration(i),
      this._rf23536b073ec50());
    let s = this.assets.getAssetByName(r.assetName);
    (s != null && this.assets.removeAsset(s)?.dispose(),
      i.length === 0 &&
        class_14.error(
          `Could not load external variables, got empty data from URL ${this.getProperty(HabboProperty.EXTERNAL_VARIABLES)}. Client startup failed!`,
          !1,
          class_14.ERROR_CATEGORY_DOWNLOAD_EXTERNAL_VARIABLES,
        ),
      this._initialized || this._rf1509379fccf80());
  }
  _rf1509379fccf80() {
    (this.events.dispatchEvent?.(new M(HabboConfigurationEvent.CONFIGURATION_LOADED)), this._r62e20ccdcbabd3());
  }
  _r62e20ccdcbabd3() {
    this.disposed ||
      this._initialized ||
      ((this._initialized = !0),
      this.locked && this.unlock(),
      this.events.dispatchEvent?.(new M(M.ComponentDependency)));
  }
  setDefaults() {
    (ErrorReportStorage.addDebugData("Flashvars/host", `Host: ${this.getProperty(HabboProperty.CONNECTION_INFO_HOST)}`),
      ErrorReportStorage.addDebugData("Flashvars/port", `Port: ${this.getProperty(HabboProperty.CONNECTION_INFO_PORT)}`),
      this.setProperty("client.fatal.error.url", "${url.prefix}/flash_client_error"),
      this.setProperty("game.center.error.url", "${url.prefix}/log/gameerror"),
      this._rf23536b073ec50());
  }
  _rf23536b073ec50() {
    if (this.propertyExists(a.HABBICONS_EXTERNAL_HASH)) {
      let e = this.getProperty(a.HABBICONS_EXTERNAL_HASH);
      if (e != null && e !== "") {
        this.setProperty(a.HABBICONS_ASSET_HASH, e);
        let r = this.propertyExists(a.const_510)
          ? this.getProperty(a.const_510)
          : a.const_317;
        this.setProperty(a.const_694, r);
        return;
      }
    }
    if (this._localization != null) {
      let e = this._localization._r10fc54ff641b80(a.HABBICONS_RESOURCE_NAME),
        r = this._localization._r2cce3a2ff49746(a.HABBICONS_RESOURCE_NAME);
      if (e != null && e !== "") {
        (this.setProperty(a.const_694, e),
          r != null && r !== "" && this.setProperty(a.HABBICONS_ASSET_HASH, r));
        return;
      }
    }
    this.propertyExists(a.HABBICONS_ASSET_HASH) && this.setProperty(a.const_694, a.const_317);
  }
  _rbbbdf1400e20ca() {}
  parseCommonVariables() {
    this.parseConfigurationAsset("common_configuration");
  }
  parseLocalizationVariables() {
    this.parseConfigurationAsset("localization_configuration");
  }
  parseConfigurationAsset(e) {
    let r = this.assets.getAssetByName(e);
    if (r == null) return;
    let t = r.content;
    this.parseConfiguration(typeof t == "string" ? t : String(t));
  }
  parseArguments() {
    let e = this.context;
    for (let [r, t] of e.arguments.entries()) {
      let i = String(r).replaceAll("_", "."),
        s = String(t ?? "");
      (this.setProperty(i, s),
        this._rb4397f83713709 == null && i === HabboProperty.const_682 && (this._rb4397f83713709 = s));
    }
    e._r24056a96827208();
  }
  _rd60dca356f6883() {
    let r = this.context._r47fe98ceeec734(gr.SOL_PROPERTY_ENVIRONMENT);
    return r == null || r.length === 0 ? null : r;
  }
  _r97b22a35013fa5(e) {
    this.context._rda9151f6f632f8(gr.SOL_PROPERTY_ENVIRONMENT, e);
  }
}
