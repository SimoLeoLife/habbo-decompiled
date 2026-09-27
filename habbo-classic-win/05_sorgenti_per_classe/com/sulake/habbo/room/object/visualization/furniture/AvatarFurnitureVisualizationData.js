// Estratto da HabboAirLauncher.deobf.js, riga 277166.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/furniture/AvatarFurnitureVisualizationData.as
// Nome offuscato: _i43c1376b8a0ee1

class extends FurnitureVisualizationData {
  static {
    n(this, "AvatarFurnitureVisualizationData");
  }
  var_2065 = new AvatarVisualizationData();
  set avatarRenderer(e) {
    this.var_2065.avatarRenderer = e;
  }
  dispose() {
    (super.dispose(), this.var_2065.dispose());
  }
  getAvatar(e, r, t = null, i = null, s = null) {
    return this.var_2065.getAvatar(e, r, t, i, s);
  }
}
