// Extracted from HabboAirLauncher.deobf.js, line 82662.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/variablefx/VariableFxStatusModelData.as
// Obfuscated name: _i7d1168d84081c2

class a {
  constructor(e, r) {
    this.updateId = e;
    this.statusesByConfig = r;
  }
  static {
    n(this, "VariableFxStatusModelData");
  }
  clone() {
    let e = new B();
    for (let r of this.statusesByConfig.getKeys()) {
      let t = this.statusesByConfig.getValue(r),
        i = new B();
      for (let s of t.getKeys()) i.add(s, t.getValue(s).clone());
      e.add(r, i);
    }
    return new a(this.updateId, e);
  }
  dispose() {
    if (this.statusesByConfig != null) {
      for (let e of this.statusesByConfig.getValues()) {
        for (let r of e.getValues()) r.dispose();
        e.dispose();
      }
      (this.statusesByConfig.dispose(), (this.statusesByConfig = null));
    }
  }
}
