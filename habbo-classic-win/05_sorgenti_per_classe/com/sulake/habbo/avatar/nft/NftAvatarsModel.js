// Estratto da HabboAirLauncher.deobf.js, riga 164366.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/nft/NftAvatarsModel.as
// Nome offuscato: _ieeced3384abf5a

class extends CategoryBaseModel {
  static {
    n(this, "NftAvatarsModel");
  }
  _nftAvatars = [];
  _rbd7bb21546eafb = null;
  NftWardrobeParamView = null;
  _r3a18e8741730c9 = null;
  constructor(e) {
    (super(e), this._rd0936e77071cbd(e));
  }
  dispose() {
    (this._rbd7bb21546eafb != null &&
      (this.controller.manager.communication?._r7668362bf55fdd(this._rbd7bb21546eafb),
      (this._rbd7bb21546eafb = null)),
      this.NftWardrobeParamView?.dispose(),
      (this.NftWardrobeParamView = null));
    for (let e of this._nftAvatars) e.dispose();
    ((this._nftAvatars = []), (this._r3a18e8741730c9 = null), super.dispose());
  }
  selectNftAvatar(e) {
    let r = this._nftAvatars[e] ?? null;
    if (r != null) {
      if (r.figure === "") return;
      (this.var_63?._r8427368247be40(r),
        this.var_63?.loadAvatarInEditor(r.figure, r.gender, this.var_63.clubMemberLevel));
    }
    (this._r3a18e8741730c9?.view.toggleActive(!1),
      (this._r3a18e8741730c9 = r),
      this._r3a18e8741730c9?.view.toggleActive(!0),
      this.NftWardrobeParamView?.updateView(r));
  }
  _rbdb61fb55bd7bb(e) {
    for (let r of this._nftAvatars) if (r._r6e0cb14ba16999 === e) return r;
    return null;
  }
  get nftAvatars() {
    return this._nftAvatars;
  }
  switchCategory(e = "") {}
  _red12f777c0d8a3(e) {
    return null;
  }
  selectPart(e, r) {}
  init() {
    (this._view == null && ((this._view = new NftAvatarsView(this)), (this.NftWardrobeParamView = new NftWardrobeParamView(this))),
      this._view.init(),
      (this.var_217 = !0));
  }
  _rd0936e77071cbd(e) {
    let r = e.manager.communication;
    r != null &&
      ((this._rbd7bb21546eafb = new class_3782(this.onUserNftWardrobeMessage)),
      r._r2e106e2349a0b6(this._rbd7bb21546eafb),
      r.connection?.send(new _i05e2bf25b0974b()));
  }
  onUserNftWardrobeMessage = n((e) => {
    for (let r of this._nftAvatars) r.dispose();
    this._nftAvatars = [];
    for (let r of e.getParser().nftAvatars)
      this._nftAvatars.push(
        new Uu(this.controller, r.id, r.figureString, r.gender, r._r6e0cb14ba16999, r._re76aca2629c84c),
      );
    this._view?.update();
  }, "onUserNftWardrobeMessage");
}
