// Estratto da HabboAirLauncher.deobf.js, riga 226232.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/groups/badge/BadgeEditorCtrl.as
// Nome offuscato: _i9853a4cb4e9a61

class {
  static {
    n(this, "BadgeEditorCtrl");
  }
  var_41;
  _window = null;
  _rff4774da36f15f = null;
  _r802662a34ac925 = null;
  BadgeSelectPartCtrl;
  _disposed = !1;
  _layers;
  _rbba92f19ad20ca = null;
  var_2175 = null;
  var_465 = null;
  _r97e9f8c29f9123 = null;
  _rddd609a5044bf4 = null;
  constructor(e) {
    ((this.var_41 = e),
      this.var_41.events.addEventListener?.(WI.EDIT_INFO, this.var_943),
      (this.BadgeSelectPartCtrl = new BadgeSelectPartCtrl(this.var_41, this)),
      (this._layers = [
        new yf(this.var_41, this, 0),
        new yf(this.var_41, this, 1),
        new yf(this.var_41, this, 2),
        new yf(this.var_41, this, 3),
        new yf(this.var_41, this, 4),
      ]));
  }
  get disposed() {
    return this._disposed;
  }
  get _r3c438483db682b() {
    return this._r97e9f8c29f9123;
  }
  get _r56c73a83d9fb2d() {
    return this.var_2175;
  }
  get partSelectGrid() {
    return this.var_465;
  }
  get _rec78fd0a8c9645() {
    return this._rbba92f19ad20ca;
  }
  get _rd781cceffe7e4b() {
    return this.BadgeSelectPartCtrl;
  }
  get _re0464c210e97d9() {
    return this._window != null && this._r802662a34ac925 != null;
  }
  dispose() {
    this._disposed ||
      (this.var_41?.events.removeEventListener?.(WI.EDIT_INFO, this.var_943),
      this._layers?.forEach((e) => e.dispose()),
      (this._layers = null),
      this.BadgeSelectPartCtrl?.dispose(),
      (this.BadgeSelectPartCtrl = null),
      this.var_2175?.dispose(),
      (this.var_2175 = null),
      this.var_465?.dispose(),
      (this.var_465 = null),
      this._r97e9f8c29f9123?.dispose(),
      (this._r97e9f8c29f9123 = null),
      this._rddd609a5044bf4?.forEach((e) => e.dispose()),
      (this._rddd609a5044bf4 = null),
      this._window?.dispose(),
      (this._window = null),
      (this._r802662a34ac925 = null),
      (this._rbba92f19ad20ca = null),
      (this._rff4774da36f15f = null),
      (this.var_41 = null),
      (this._disposed = !0));
  }
  var_943 = n((e) => {
    (this.BadgeSelectPartCtrl?._r71f563669978dc(), this.createWindow(null, null));
  }, "var_943");
  createWindow(e, r) {
    if (
      this._window != null ||
      this._disposed ||
      (e != null && (this._rff4774da36f15f = e),
      r != null && (this._r802662a34ac925 = r),
      this._rff4774da36f15f == null ||
        this._r802662a34ac925 == null ||
        this.var_41?._r1b5a723df2ea20 == null) ||
      ((this._window = this.var_41.getXmlWindow("badge_editor")),
      this._window == null)
    )
      return;
    let t = this._window.findChildByName("guild_badge");
    ((this._rddd609a5044bf4 = [
      t?.findChildByName("layer_0"),
      t?.findChildByName("layer_1"),
      t?.findChildByName("layer_2"),
      t?.findChildByName("layer_3"),
      t?.findChildByName("layer_4"),
    ]),
      (this._r97e9f8c29f9123 = this._window.findChildByName("part_edit")),
      (this.var_2175 = this._window.findChildByName("part_select")),
      this.var_2175 != null &&
        ((this.var_2175.visible = !1),
        (this.var_465 = this.var_2175.findChildByName("part_select_grid"))));
    for (let i of this._layers ?? []) i.createWindow();
    (this._r84f067f63f8dbf(this._r802662a34ac925), this._rff4774da36f15f.addChild(this._window));
  }
  _r84f067f63f8dbf(e) {
    if (this._re0464c210e97d9) {
      (this.var_2175?.visible && (this.var_2175.visible = !1),
        this._r97e9f8c29f9123 != null && (this._r97e9f8c29f9123.visible = !0),
        (this._r802662a34ac925 = e),
        (this._rbba92f19ad20ca = null),
        this.BadgeSelectPartCtrl?._r71f563669978dc());
      for (let r = 0; r < (this._layers?.length ?? 0); r++) {
        let t = this._rd805489d743284(r);
        (this._layers?.[r].setLayerOptions(t), this._layers?.[r].updateSelectedPart());
      }
    }
  }
  _r7c274b5a897194(e) {
    this._rbba92f19ad20ca != null &&
      ((this._rbba92f19ad20ca.partIndex = e._rb36959535393e2()),
      this._layers?.[this._rbba92f19ad20ca.BadgeLayerOptions].setLayerOptions(this._rbba92f19ad20ca),
      this._r97e9f8c29f9123 != null && (this._r97e9f8c29f9123.visible = !0),
      this.var_2175 != null && (this.var_2175.visible = !1));
  }
  _r0da16bb5ed3dfb(e) {
    e.layerOptions != null && this.updatePreviewImage(e.layerOptions);
  }
  Point(e) {
    this.updatePreviewImage(e.layerOptions);
  }
  updatePreviewImage(e) {
    let r = this.BadgeSelectPartCtrl?._r55669dff1dd65a(e) ?? null,
      t = this._rddd609a5044bf4?.[e.BadgeLayerOptions] ?? null;
    t != null && (r != null ? ((t.bitmap = r.clone()), (t.visible = !0)) : (t.visible = !1));
  }
  _rb0de8ae1550ba4(e) {
    let r = this._rbba92f19ad20ca;
    ((this._rbba92f19ad20ca = e.layerOptions.clone()),
      r == null || !e.layerOptions._rb1a491334354ac(r)
        ? this.BadgeSelectPartCtrl?.updateGrid()
        : (this.BadgeSelectPartCtrl.layerOptions = this._rbba92f19ad20ca.clone()),
      this._r97e9f8c29f9123 != null && (this._r97e9f8c29f9123.visible = !1),
      this.var_2175 != null && (this.var_2175.visible = !0));
  }
  _rfe509f4dca11d4() {
    this._re0464c210e97d9 &&
      this.var_2175?.visible &&
      this._rbba92f19ad20ca != null &&
      (this.updatePreviewImage(this._rbba92f19ad20ca),
      this._r97e9f8c29f9123 != null && (this._r97e9f8c29f9123.visible = !0),
      (this.var_2175.visible = !1));
  }
  _r8c06e29dd50a40() {
    let e = [];
    for (let r of this._layers ?? []) {
      let t = this._r981691346e0074(r.layerOptions);
      if (t < 0) continue;
      let i = this._r0193a15c0d3eeb(r.layerOptions);
      i < 0 || e.push(t, i, r.layerOptions.position);
    }
    return e;
  }
  get _r8963fcaa18995c() {
    if (this._layers == null) return 0;
    let e = 0;
    for (let r of this._layers)
      this._r981691346e0074(r.layerOptions) < 0 ||
        this._r0193a15c0d3eeb(r.layerOptions) < 0 ||
        (e = r.layerOptions._rb918ebc3bf3388);
    return e;
  }
  get _r0527440ee345a4() {
    return this._layers?.[0].layerOptions._rb918ebc3bf3388 ?? 0;
  }
  _r71c473d698e352() {
    let e = new A(W0._rec1b92bda35306, W0._r12c7f8e2b75b77, !0, 15329761);
    for (let r of this._rddd609a5044bf4 ?? [])
      r?.visible && r.bitmap != null && e.copyPixels(r.bitmap, e.rect, new E(), null, null, !0);
    return e;
  }
  _rd805489d743284(e) {
    let r = this._r802662a34ac925?.[e],
      t = new aQ();
    if (
      ((t.BadgeLayerOptions = e),
      (t._rb918ebc3bf3388 = 0),
      r == null || this.var_41?._r1b5a723df2ea20 == null)
    )
      return t;
    t.setGrid(r.position);
    for (let i = 0; i < this.var_41._r1b5a723df2ea20._r96829aa95ff786.length; i++)
      if (this.var_41._r1b5a723df2ea20._r96829aa95ff786[i].id === r._r5b3d4f00714e69) {
        t._rb918ebc3bf3388 = i;
        break;
      }
    if (e === yf.BASE_LAYER_INDEX) {
      for (let i = 0; i < this.var_41._r1b5a723df2ea20._r7ec6d433acab6a.length; i++)
        if (this.var_41._r1b5a723df2ea20._r7ec6d433acab6a[i].id === r.partId) {
          t.partIndex = i;
          break;
        }
    } else
      for (let i = 0; i < this.var_41._r1b5a723df2ea20._r37bdf78d6e6877.length; i++)
        if (this.var_41._r1b5a723df2ea20._r37bdf78d6e6877[i].id === r.partId) {
          t.partIndex = i;
          break;
        }
    return t;
  }
  _r981691346e0074(e) {
    return e.partIndex < 0 || this.var_41?._r1b5a723df2ea20 == null
      ? -1
      : e.BadgeLayerOptions === yf.BASE_LAYER_INDEX
        ? e.partIndex >= this.var_41._r1b5a723df2ea20._r7ec6d433acab6a.length
          ? -1
          : this.var_41._r1b5a723df2ea20._r7ec6d433acab6a[e.partIndex].id
        : e.partIndex >= this.var_41._r1b5a723df2ea20._r37bdf78d6e6877.length
          ? -1
          : this.var_41._r1b5a723df2ea20._r37bdf78d6e6877[e.partIndex].id;
  }
  _r0193a15c0d3eeb(e) {
    return this.var_41?._r1b5a723df2ea20 == null ||
      e._rb918ebc3bf3388 < 0 ||
      e._rb918ebc3bf3388 >= this.var_41._r1b5a723df2ea20._r96829aa95ff786.length
      ? -1
      : this.var_41._r1b5a723df2ea20._r96829aa95ff786[e._rb918ebc3bf3388].id;
  }
}
