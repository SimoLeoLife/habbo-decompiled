// Estratto da HabboAirLauncher.deobf.js, riga 82724.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/variablefx/VariableFxStatusRemoveData.as
// Nome offuscato: _if1c9cad2234570

class {
  constructor(e) {
    this._r7a6181626e268d = e;
    let r = e.indexOf("|"),
      t = e.lastIndexOf("|"),
      i = e.lastIndexOf("|", t - 1);
    ((this.configId = Number(e.substr(0, r)) | 0),
      (this.variableId = e.substring(r + 1, i)),
      (this.isUserEntity = e.substring(i + 1, t) === "u"),
      (this.entityId = Number(e.substr(t + 1)) | 0));
  }
  static {
    n(this, "VariableFxStatusRemoveData");
  }
  configId;
  variableId;
  isUserEntity;
  entityId;
}
