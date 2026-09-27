// Estratto da HabboAirLauncher.deobf.js, riga 161566.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/messages/RoomWidgetDimmerPreviewMessage.as
// Nome offuscato: _i210afe014858ab

class a extends RoomWidgetMessage {
  static {
    n(this, "RoomWidgetDimmerPreviewMessage");
  }
  static PREVIEW = "RWDPM_PREVIEW_DIMMER_PRESET";
  _color;
  var_3057;
  var_4440;
  constructor(e, r, t) {
    (super(a.PREVIEW), (this._color = e), (this.var_3057 = r), (this.var_4440 = t));
  }
  get color() {
    return this._color;
  }
  get brightness() {
    return this.var_3057;
  }
  get bgOnly() {
    return this.var_4440;
  }
}
