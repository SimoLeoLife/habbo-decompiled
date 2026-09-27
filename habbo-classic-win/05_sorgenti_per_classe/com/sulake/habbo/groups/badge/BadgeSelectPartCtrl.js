// Extracted from HabboAirLauncher.deobf.js, line 226075.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/groups/badge/BadgeSelectPartCtrl.as
// Obfuscated name: _i51057203e2f3c6

class {
  static {
    n(this, "BadgeSelectPartCtrl");
  }
  var_41;
  var_334;
  var_601 = null;
  var_745 = null;
  var_301 = null;
  var_154 = null;
  var_1104 = null;
  _disposed = !1;
  constructor(e, r) {
    ((this.var_41 = e), (this.var_334 = r));
  }
  get layerOptions() {
    return this.var_301;
  }
  set layerOptions(e) {
    this.var_301 = e;
  }
  get disposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed ||
      (this.var_334?.partSelectGrid != null &&
        this.var_334.partSelectGrid._r72acf104e2c444 > 0 &&
        this.var_334.partSelectGrid._rbb4c26d068856f(),
      this.var_745?.forEach((e) => e.dispose()),
      (this.var_745 = null),
      this.var_601?.forEach((e) => e.dispose()),
      (this.var_601 = null),
      (this.var_301 = null),
      (this.var_1104 = null),
      (this.var_154 = null),
      (this.var_334 = null),
      (this.var_41 = null),
      (this._disposed = !0));
  }
  _rb36959535393e2() {
    let e = -1;
    return (
      this.var_301 != null &&
        this.var_334?.partSelectGrid != null &&
        this.var_154 != null &&
        ((e = this.var_334.partSelectGrid._r76bcf89cad2fb2(this.var_154)),
        e !== -1 && this.var_301.BadgeLayerOptions !== yf.BASE_LAYER_INDEX && (e -= 1)),
      e
    );
  }
  _r71f563669978dc() {
    if (!(
      this.var_745 != null ||
      this.var_601 != null ||
      this.var_41?._r1b5a723df2ea20 == null
    )) {
      this.var_745 = [];
      for (let e of this.var_41._r1b5a723df2ea20._r7ec6d433acab6a)
        this.var_745.push(
          new W0(this.var_41, this, this.var_745.length, W0.BASE_PART, e),
        );
      this.var_601 = [new W0(this.var_41, this, -1, W0.LAYER_PART)];
      for (let e of this.var_41._r1b5a723df2ea20._r37bdf78d6e6877)
        this.var_601.push(
          new W0(this.var_41, this, this.var_601.length - 1, W0.LAYER_PART, e),
        );
    }
  }
  updateGrid() {
    if (this.var_334?.partSelectGrid == null || this.var_334._rec78fd0a8c9645 == null)
      return;
    ((this.var_154 = null),
      (this.var_1104 = null),
      (this.var_301 = this.var_334._rec78fd0a8c9645.clone()),
      this.var_334.partSelectGrid._rbb4c26d068856f());
    let e =
      this.var_301.BadgeLayerOptions === yf.BASE_LAYER_INDEX
        ? this.var_745
        : this.var_601;
    for (let r of e ?? []) this.var_334.partSelectGrid.addGridItem(this.createGridItem(r));
  }
  _r65a32b2d42a3c8(e) {
    if (
      this.var_301?.BadgeLayerOptions === yf.BASE_LAYER_INDEX &&
      this.var_334?._r56c73a83d9fb2d?.visible
    ) {
      let r = this.var_334.partSelectGrid?.getGridItemAt(e.partIndex);
      r != null && this.setGridItemImage(r, e);
    }
  }
  onBaseImageLoaded(e) {
    if (
      this.var_301 != null &&
      this.var_301.BadgeLayerOptions !== yf.BASE_LAYER_INDEX &&
      this.var_334?._r56c73a83d9fb2d?.visible
    ) {
      let r = this.var_334.partSelectGrid?.getGridItemAt(e.partIndex + 1);
      r != null && this.setGridItemImage(r, e);
    }
  }
  _r55669dff1dd65a(e) {
    if (e == null || e.partIndex < 0) return null;
    if (e.BadgeLayerOptions === yf.BASE_LAYER_INDEX) {
      if (this.var_745 != null && e.partIndex < this.var_745.length)
        return this.var_745[e.partIndex].getComposite(e);
    } else if (this.var_601 != null && e.partIndex + 1 < this.var_601.length)
      return this.var_601[e.partIndex + 1].getComposite(e);
    return null;
  }
  createGridItem(e) {
    let r = this.var_41?.getXmlWindow("badge_part_item");
    if (r == null) throw new Error("Failed to create badge part item window.");
    return (
      (r.procedure = (t, i) => {
        this.onPartMouseEvent(t, i);
      }),
      this.setGridItemImage(r, e),
      r
    );
  }
  setGridItemImage(e, r) {
    let t = this.var_301 != null ? r.getComposite(this.var_301) : null;
    if (t != null) {
      let s = e.findChildByName("part");
      s != null && ((s.bitmap = new A(t.width, t.height)), s.bitmap.copyPixels(t, t.rect, new E()));
    }
    let i = e.findChildByName("selected");
    i != null &&
      this.var_41 != null &&
      ((i.bitmap = this.var_41._r6bd8f6d6bfdbb5("badge_part_picker")),
      this.var_301 != null && r.partIndex === this.var_301.partIndex
        ? ((i.visible = !0), (this.var_1104 = i))
        : (i.visible = !1));
  }
  onPartMouseEvent(e, r) {
    if (e.type === u.OVER && this.var_154 !== r) {
      let t;
      (this.var_154 != null &&
        ((t = this.var_154.findChildByName("background")), t != null && (t.color = 15329761)),
        (this.var_154 = r),
        this.var_154 != null &&
          ((t = this.var_154.findChildByName("background")),
          t != null && (t.color = 14210761),
          this.var_301 != null && (this.var_301.partIndex = this._rb36959535393e2()),
          this.var_334?._r0da16bb5ed3dfb(this)));
    }
    if (e.type === u.CLICK) {
      this.var_1104 != null && (this.var_1104.visible = !1);
      let t = r;
      (t != null &&
        ((this.var_1104 = t.findChildByName("selected")),
        this.var_1104 != null && (this.var_1104.visible = !0)),
        this.var_334?._r7c274b5a897194(this));
    }
  }
}
