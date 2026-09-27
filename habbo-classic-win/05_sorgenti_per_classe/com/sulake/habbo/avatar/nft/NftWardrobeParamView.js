// Extracted from HabboAirLauncher.deobf.js, line 164307.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/nft/NftWardrobeParamView.as
// Obfuscated name: _ia099787393b57d

class {
  static {
    n(this, "NftWardrobeParamView");
  }
  var_38;
  _container;
  _r03aa3372850db8;
  constructor(e) {
    ((this.var_38 = e),
      (this._container = e.controller.view.collectiblesAvatarInfoContainer),
      (this._r03aa3372850db8 = this._container.findChildByName("avatar_info_text")),
      this.updateView(null));
  }
  dispose() {
    ((this.var_38 = null), (this._r03aa3372850db8 = null));
  }
  get disposed() {
    return this.var_38 == null;
  }
  updateView(e) {
    if (e == null) {
      this._container.visible = !1;
      return;
    }
    (this._r03aa3372850db8 != null &&
      ((this._r03aa3372850db8.text = `${this.getLocalizedCollectionName(e._re76aca2629c84c) ?? ""} #${e.id}`),
      (this._r03aa3372850db8.textColor = this.getCollectionTextColor(e._re76aca2629c84c))),
      (this._container.visible = !0));
  }
  getLocalizedCollectionName(e) {
    let r = null;
    switch (e) {
      case Uu.const_1109:
        r = "wardrobe.token.avatar.name";
        break;
      case Uu.collectionClothes:
        r = "wardrobe.token.clothing.name";
        break;
      case Uu.collectionGenesis:
        r = "wardrobe.token.crafted_avatar.name";
        break;
      default:
        return null;
    }
    return this.var_38?.controller.manager.localization?.getLocalization(r) ?? null;
  }
  getCollectionTextColor(e) {
    switch (e) {
      case Uu.const_1109:
        return 4294936611;
      case Uu.collectionClothes:
        return 4289965509;
      case Uu.collectionGenesis:
        return 4279945953;
      default:
        return 4294967295;
    }
  }
}
