// Estratto da HabboAirLauncher.deobf.js, riga 143908.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/game/snowwar/utils/WindowUtils.as
// Nome offuscato: _i9cd301e8b2b5e0

class {
  static {
    n(this, "WindowUtils");
  }
  static disableButton(e, r) {
    r ? e.disable() : e.enable();
  }
  static _r16383aac6ed4bb(e) {
    return this.uint(e) ? ((e.color >>> 24) & 255) / 255 : e.blend;
  }
  static setBlend(e, r) {
    if (this.uint(e)) {
      let t = Math.max(0, Math.min(255, Math.trunc(r * 255)));
      e.color = (e.color & 16777215) | (t << 24);
      return;
    }
    e.blend = r;
  }
  static disableSection(e, r = !0, t = 0.5) {
    if (e.tags.indexOf("DO_NOT_DISABLE") !== -1) return;
    let i = -1;
    for (let c of e.tags) c.startsWith("BLEND=") && (i = Number(c.substring(6)));
    if (i === -1) {
      i = this._r16383aac6ed4bb(e);
      let c = `BLEND=${i}`;
      e.tags.indexOf(c) === -1 && e.tags.push(c);
    }
    let s = r && e.tags.indexOf("INVIS_ON_DISABLE") !== -1 ? 0 : r ? i * t : i,
      o = e.tags.indexOf("#icon") !== -1,
      d = !e.getParamFlag(N.const_421);
    if (!this._r65ff884edeb0d9(e))
      if (this._ra185fd1172d8db(e) || this._r174073f892c83e(e) || this._r3cd914a4ce2444(e)) {
        if (this._r3b9d1db283323d(e)) for (let c of e.children) this.disableSection(c, r, d ? 1 : t);
        else if (this._ra185fd1172d8db(e))
          for (let c = 0; c < e.numChildren; c++) {
            let f = e.getChildAt(c);
            f != null && this.disableSection(f, r, d ? 1 : t);
          }
        (this._r693386423de72b(e) || this.uint(e) || d) && this.setBlend(e, s);
      } else !o && !this._r65ff884edeb0d9(e) && this.setBlend(e, s);
    r ? e.disable() : e.enable();
  }
  static _r3b9d1db283323d(e) {
    return Array.isArray(e.children);
  }
  static _ra185fd1172d8db(e) {
    return e instanceof ContainerController || e instanceof TabContainerButtonController;
  }
  static uint(e) {
    return e instanceof _i2ca70a7fcdecec;
  }
  static _r693386423de72b(e) {
    return e instanceof BorderController;
  }
  static _r65ff884edeb0d9(e) {
    return e instanceof kc;
  }
  static _r174073f892c83e(e) {
    return e instanceof ItemListController;
  }
  static _r3cd914a4ce2444(e) {
    return e instanceof _i590fabdc28cedf;
  }
}
