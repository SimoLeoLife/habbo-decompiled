// Estratto da HabboAirLauncher.deobf.js, riga 299153.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/logic/furniture/class_1827.as
// Nome offuscato: _i4e3b0276274778

class a extends Qr {
  static {
    n(this, "class_1827");
  }
  static IS_WIRED_ENABLED_KEY = "is_wired_enabled";
  var_4460 = !1;
  processUpdateMessage(e) {
    super.processUpdateMessage(e);
    let r = e instanceof _i39f7ecd6ab9902 ? e : null,
      t = r?.data instanceof Bc ? r.data : null;
    if (t != null && this.object != null) {
      let i = t.getValue(a.IS_WIRED_ENABLED_KEY) === "1";
      i !== this.var_4460 &&
        ((this.var_4460 = i),
        this.object.getModelController().setNumber(RoomObjectVariableEnum.const_1383, i ? 1 : 0),
        this.update(_ia411d8d8194a3a()));
    }
  }
}
