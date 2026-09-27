// Extracted from HabboAirLauncher.deobf.js, line 164219.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/wardrobe/NftOutfit.as
// Obfuscated name: _i119c49a0612348

class a extends Nj {
  static {
    n(this, "NftOutfit");
  }
  static const_1109 = "habbo:avatar";
  static collectionClothes = "habbo:clothes";
  static collectionGenesis = "habbo:avatar_genesis";
  _id;
  var_5062;
  _contractKey;
  constructor(e, r, t, i, s, o) {
    (super(e, t, i),
      (this._id = r),
      (this.var_5062 = s),
      (this._contractKey = o),
      this.initNftColors());
  }
  get id() {
    return this._id;
  }
  get _r6e0cb14ba16999() {
    return this.var_5062;
  }
  get _re76aca2629c84c() {
    return this._contractKey;
  }
  initNftColors() {
    switch (this._contractKey) {
      case a.const_1109:
        this.view.setColors(4294928384, 4294936611, -1, -1);
        break;
      case a.collectionClothes:
        this.view.setColors(4288715443, 4289965509, -1, -1);
        break;
      case a.collectionGenesis:
        this.view.setColors(4280129447, 4282165689, 4287901875, 4289219523);
        break;
      default:
        this.view.setColors(4294967295, 4294967295, -1, -1);
        break;
    }
  }
}
