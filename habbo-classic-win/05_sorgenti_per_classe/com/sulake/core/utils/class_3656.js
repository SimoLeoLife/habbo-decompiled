// Estratto da HabboAirLauncher.deobf.js, riga 60849.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/utils/class_3656.as
// Nome offuscato: _i45e67ffae20bcc

class extends B {
  static {
    n(this, "class_3656");
  }
  setProperty(e, r) {
    let t = this.normalizeKey(e);
    if (this.hasKey(t))
      throw new Error(`Trying to overwrite value in SingleWriteMap - key: ${String(e)}, value: ${String(r)}`);
    super.setProperty(t, r);
  }
  normalizeKey(e) {
    return e != null && typeof e == "object" && "localName" in e ? e.localName : e;
  }
}
