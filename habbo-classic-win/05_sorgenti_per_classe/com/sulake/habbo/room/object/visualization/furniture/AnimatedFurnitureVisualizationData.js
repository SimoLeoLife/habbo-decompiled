// Estratto da HabboAirLauncher.deobf.js, riga 276373.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/furniture/AnimatedFurnitureVisualizationData.as
// Nome offuscato: _ifab20f58896856

class extends FurnitureVisualizationData {
  static {
    n(this, "AnimatedFurnitureVisualizationData");
  }
  _r59226314e6df0d(e, r, t) {
    return new AnimationSizeData(r, t);
  }
  processVisualizationElement(e, r) {
    if (e == null || r == null) return !1;
    if (String(r.name()) === "animations") {
      let t = e instanceof AnimationSizeData ? e : null;
      return t != null ? t._rd7dfd5d7e9a7a9(r) : !1;
    }
    return super.processVisualizationElement(e, r);
  }
  _rbbbe40f26a8739(e, r) {
    let t = this.getSizeData(e);
    return t instanceof AnimationSizeData ? t._rbbbe40f26a8739(r) : !1;
  }
  getAnimationCount(e) {
    let r = this.getSizeData(e);
    return r instanceof AnimationSizeData ? r.getAnimationCount() : 0;
  }
  _rc44d75b416497c(e, r) {
    let t = this.getSizeData(e);
    return t instanceof AnimationSizeData ? t._rc44d75b416497c(r) : 0;
  }
  _rfa4b6bfb7fcf31(e, r, t) {
    let i = this.getSizeData(e);
    return i instanceof AnimationSizeData ? i._rfa4b6bfb7fcf31(r, t) : !1;
  }
  _r658374b2eae883(e, r, t) {
    let i = this.getSizeData(e);
    return i instanceof AnimationSizeData ? i._r658374b2eae883(r, t) : 0;
  }
  getFrame(e, r, t, i, s) {
    let o = this.getSizeData(e);
    return o instanceof AnimationSizeData ? o.getFrame(r, t, i, s) : null;
  }
  getFrameFromSequence(e, r, t, i, s, o, d) {
    let c = this.getSizeData(e);
    return c instanceof AnimationSizeData ? c.getFrameFromSequence(r, t, i, s, o, d) : null;
  }
}
