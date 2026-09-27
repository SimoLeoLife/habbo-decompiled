// Extracted from HabboAirLauncher.deobf.js, line 163805.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/hotlooks/HotLooksView.as
// Obfuscated name: _ia96e1dde56a061

class {
  static {
    n(this, "HotLooksView");
  }
  _window = null;
  var_38;
  _r82553b8d0c8dd5 = null;
  constructor(e) {
    this.var_38 = e;
  }
  init() {
    (this._r82553b8d0c8dd5?.removeGridItems(),
      this._window == null &&
        ((this._window = this.var_38?.controller.view.getCategoryContainer(
          class_1962.const_99,
        )),
        (this._r82553b8d0c8dd5 = this._window?.findChildByName("hotlooks")),
        this._window != null && (this._window.visible = !1)),
      this.update());
  }
  dispose() {
    (this._r82553b8d0c8dd5?.removeGridItems(),
      (this._r82553b8d0c8dd5 = null),
      (this._window = null),
      (this.var_38 = null));
  }
  update() {
    this._r82553b8d0c8dd5?.removeGridItems();
    for (let e of this.var_38?.hotLooks ?? []) {
      let r = e.view.window;
      ((r.procedure = this.var_1748), this._r82553b8d0c8dd5?.addGridItem(r));
    }
  }
  getWindowContainer() {
    return this._window;
  }
  switchCategory(e) {}
  showPalettes(e, r) {}
  reset() {}
  var_1748 = n((e, r = null) => {
    if (((r ??= e.target), e.type !== u.CLICK || r == null)) return;
    let t = this._r82553b8d0c8dd5?._r76bcf89cad2fb2(r.parent ?? r) ?? -1;
    t >= 0 && this.var_38?.selectHotLook(t);
  }, "var_1748");
}
