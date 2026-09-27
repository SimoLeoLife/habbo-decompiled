// Extracted from HabboAirLauncher.deobf.js, line 290100.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/variablefx/VariableFxRendererRegistry.as
// Obfuscated name: _i96287a438137a5

class a {
  static {
    n(this, "VariableFxRendererRegistry");
  }
  var_3299 = [];
  _rendererFactories = {};
  _rc64f6b6ad859f3 = {};
  static createDefault(e, r = null) {
    let t = new a(),
      i = r;
    return (
      t.registerRendererFactory("ArrowProgressBarRenderer", (s) => new owe(s)),
      t.registerRendererFactory("BakedColorNumberDisplayRenderer", (s) => new Cwe(s)),
      t.registerRendererFactory("BlockProgressBarRenderer", (s) => new dwe(s)),
      t.registerRendererFactory("BossHealthBarRenderer", (s) => new cwe(s)),
      t.registerRendererFactory("ClassicMiniProgressBarRenderer", (s) => new aX(s)),
      t.registerRendererFactory("ClassicProgressBarRenderer", (s) => new j1(s)),
      t.registerRendererFactory("HealthProgressBarRenderer", (s) => new fwe(s)),
      t.registerRendererFactory("LevelDetailsRenderer", (s) => new hg(s)),
      t.registerRendererFactory("LevelWithProgressRenderer", (s) => new xwe(s)),
      t.registerRendererFactory("MaskedHeartFillRenderer", (s) => new bwe(s)),
      t.registerRendererFactory("RecolorableNumberDisplayRenderer", (s) => new Mwe(s)),
      t.registerRendererFactory("StackedHealthPointsRenderer", (s) => new gwe(s)),
      t.registerRendererFactory("StripedProgressBarRenderer", (s) => new uwe(s)),
      t.registerRendererFactory("ThermometerHealthPointsRenderer", (s) => new hwe(s)),
      t.register(UnkClass_3b0b1a._r15f6a61625d9ea, class_2881.CLASSIC_PROGRESS, t._rendererFactories.ClassicProgressBarRenderer),
      t.register(UnkClass_3b0b1a._r15f6a61625d9ea, class_2881.CLASSIC_MINI_PROGRESS, t._rendererFactories.ClassicMiniProgressBarRenderer),
      t.register(UnkClass_3b0b1a._r15f6a61625d9ea, class_2881.BLOCK_PROGRESS, t._rendererFactories.BlockProgressBarRenderer),
      t.register(UnkClass_3b0b1a._r15f6a61625d9ea, class_2881.STRIPED_PROGRESS, t._rendererFactories.StripedProgressBarRenderer),
      t.register(UnkClass_3b0b1a._r15f6a61625d9ea, class_2881.ARROW_PROGRESS, t._rendererFactories.ArrowProgressBarRenderer),
      t.register(UnkClass_3b0b1a._rf9b6e93d22ffa0, class_2881.BLOCK_PROGRESS, t._rendererFactories.BlockProgressBarRenderer),
      t.register(UnkClass_3b0b1a._rf9b6e93d22ffa0, class_2881.STRIPED_PROGRESS, t._rendererFactories.StripedProgressBarRenderer),
      t.register(UnkClass_3b0b1a._rf9b6e93d22ffa0, class_2881.ARROW_PROGRESS, t._rendererFactories.ArrowProgressBarRenderer),
      t.register(UnkClass_3b0b1a._r6fde9ac7c422ac, class_2881.HEALTH_PROGRESS, t._rendererFactories.HealthProgressBarRenderer),
      t.register(UnkClass_3b0b1a._r6fde9ac7c422ac, class_2881.MASKED_HEART_FILL, t._rendererFactories.MaskedHeartFillRenderer),
      t.register(UnkClass_3b0b1a._r6fde9ac7c422ac, class_2881.STACKED_HEALTH_POINTS, t._rendererFactories.StackedHealthPointsRenderer),
      t.register(
        UnkClass_3b0b1a._r6fde9ac7c422ac,
        class_2881.THERMOMETER_HEALTH_POINTS,
        t._rendererFactories.ThermometerHealthPointsRenderer,
      ),
      t.register(UnkClass_3b0b1a._r291d821a1c8a67, class_2881.LEVEL_WITH_PROGRESS, t._rendererFactories.LevelWithProgressRenderer),
      t.register(UnkClass_3b0b1a._r291d821a1c8a67, class_2881.LEVEL_WITH_BAR_AND_NUMERICAL_PROGRESS, t._rendererFactories.LevelDetailsRenderer),
      t.register(UnkClass_3b0b1a._rd1e8bd7655b6be, class_2881.BOSS_HEALTH_BAR, t._rendererFactories.BossHealthBarRenderer),
      t.register(
        UnkClass_3b0b1a._ra1d170efe256aa,
        class_2881.NUMBER_RECOLORABLE,
        t._rendererFactories.RecolorableNumberDisplayRenderer,
      ),
      t.register(
        UnkClass_3b0b1a._ra1d170efe256aa,
        class_2881.NUMBER_BAKED_COLORS,
        t._rendererFactories.BakedColorNumberDisplayRenderer,
      ),
      i == null && (i = e._r93de184d6f2403(class_3723.ASSET_NAME)),
      t._r1e7cea80c08c97(class_3723.parse(i)),
      t
    );
  }
  register(e, r, t) {
    this.var_3299.push({ category: e, style: r, create: t });
  }
  registerRendererFactory(e, r) {
    this._rendererFactories[e] = r;
  }
  _r1e7cea80c08c97(e) {
    for (let r of e) {
      let t = this._rendererFactories[r.rendererClass];
      if (t == null)
        throw new Error("No Variable FX renderer factory registered for class '" + r.rendererClass + "'.");
      this._rc64f6b6ad859f3[String(r.rendererId)] = t;
    }
  }
  resolve(e, r = null) {
    if (r != null) {
      for (let t of this.var_3299) if (t.category === e && t.style === r) return t.create;
    }
    for (let t of this.var_3299) if (t.category === e && t.style == null) return t.create;
    return null;
  }
  _r53b0234aebe9d4(e) {
    let r = this._rc64f6b6ad859f3[String(e)];
    return typeof r == "function" ? r : null;
  }
}
