// Estratto da HabboAirLauncher.deobf.js, riga 109681.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_193/ChestItemType.as
// Nome offuscato: _i5a42876e2ca09f

class a {
    static {
      n(this, "ChestItemType");
    }
    static {
      bat(this, "ChestItemType");
    }
    var_3170;
    var_4146;
    var_4155;
    constructor(e, r, t) {
      ((this.var_3170 = e), (this.var_4146 = r), (this.var_4155 = t));
    }
    static readFromMessage(e) {
      let r = e.readBoolean(),
        t = e.readInteger(),
        i = e.readString();
      return new a(r, t, i === "" ? null : i);
    }
    get isWallItem() {
      return this.var_3170;
    }
    get typeId() {
      return this.var_4146;
    }
    get legacyPosterId() {
      return this.var_4155 ?? "";
    }
    addToComposer(e) {
      (e.push(this.var_3170), e.push(this.var_4146), e.push(this.legacyPosterId));
    }
  }
