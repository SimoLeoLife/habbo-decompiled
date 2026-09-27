// Extracted from HabboAirLauncher.deobf.js, line 74126.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/navigation/ICatalogNode.as
// Obfuscated name: _i9e1d43b96062e4

class a {
    static {
      n(this, "ICatalogNode");
    }
    static {
      V2r(this, "ICatalogNode");
    }
    visible;
    icon;
    pageId;
    pageName;
    localization;
    children;
    offerIds;
    constructor(e) {
      ((this.visible = e.readBoolean()),
        (this.icon = e.readInteger()),
        (this.pageId = e.readInteger()),
        (this.pageName = e.readString()),
        (this.localization = e.readString()),
        (this.offerIds = []));
      let r = e.readInteger();
      for (let i = 0; i < r; i++) this.offerIds.push(e.readInteger());
      this.children = [];
      let t = e.readInteger();
      for (let i = 0; i < t; i++) this.children.push(new a(e));
    }
  }
