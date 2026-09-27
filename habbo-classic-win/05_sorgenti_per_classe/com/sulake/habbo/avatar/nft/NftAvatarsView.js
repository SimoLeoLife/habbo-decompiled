// Estratto da HabboAirLauncher.deobf.js, riga 164262.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/nft/NftAvatarsView.as
// Nome offuscato: _i5e6876725b605e

class {
  static {
    n(this, "NftAvatarsView");
  }
  _window = null;
  var_38;
  _r0ac1eb135ce8c4 = null;
  constructor(e) {
    this.var_38 = e;
  }
  init() {
    (this._r0ac1eb135ce8c4?.removeGridItems(),
      this._window == null &&
        ((this._window = this.var_38?.controller.view.getCategoryContainer(
          class_1962.NFT_FIGURES,
        )),
        (this._r0ac1eb135ce8c4 = this._window?.findChildByName("nfts")),
        this._window != null && (this._window.visible = !1)),
      this.update());
  }
  dispose() {
    (this._r0ac1eb135ce8c4?.removeGridItems(),
      (this._r0ac1eb135ce8c4 = null),
      (this._window = null),
      (this.var_38 = null));
  }
  update() {
    this._r0ac1eb135ce8c4?.removeGridItems();
    for (let e of this.var_38?.nftAvatars ?? []) {
      let r = e.view.window;
      (this._r0ac1eb135ce8c4?.addGridItem(r), (r.procedure = this.nftAvatarsEventProc));
    }
  }
  getWindowContainer() {
    return this._window;
  }
  switchCategory(e) {}
  showPalettes(e, r) {}
  reset() {}
  nftAvatarsEventProc = n((e, r = null) => {
    if (((r ??= e.target), e.type !== u.CLICK || r == null)) return;
    let t = this._r0ac1eb135ce8c4?._r76bcf89cad2fb2(r.parent ?? r) ?? -1;
    t >= 0 && this.var_38?.selectNftAvatar(t);
  }, "nftAvatarsEventProc");
}
