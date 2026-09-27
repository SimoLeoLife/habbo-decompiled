// Extracted from HabboAirLauncher.deobf.js, line 150715.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/inventory/events/HabboInventoryFurniListParsedEvent.as
// Obfuscated name: _ide59efc4916f7d

class a extends M {
  constructor(r, t = !1, i = !1) {
    super(a.const_506, t, i);
    this.var_163 = r;
  }
  static {
    n(this, "HabboInventoryFurniListParsedEvent");
  }
  static const_506 = "HFLPE_FURNI_LIST_PARSED";
  get category() {
    return this.var_163;
  }
}
