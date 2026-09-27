// Extracted from HabboAirLauncher.deobf.js, line 183828.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/navigation/CatalogNode.as
// Obfuscated name: _ic9427f550503a3

class a {
  constructor(e, r, t, i) {
    this._navigator = e;
    this._depth = t;
    this._parent = i;
    ((this._children = []),
      (this._offerIds = r.offerIds),
      (this._localization = r.localization),
      (this.var_2762 = r.pageId),
      (this._pageName = r.pageName),
      (this.var_4098 = r.icon));
  }
  static {
    n(this, "CatalogNode");
  }
  static ICON_PREFIX = "icon_";
  _children;
  _offerIds;
  _localization = "";
  var_2762 = -1;
  _pageName = "";
  var_4098 = 0;
  get isOpen() {
    return !1;
  }
  get depth() {
    return this._depth;
  }
  get _rdf76326858d5b4() {
    return this._children.length > 0;
  }
  get _r9d9fd2f1956d60() {
    return this._children.length === 0;
  }
  get visible() {
    return !1;
  }
  get localization() {
    return this._localization;
  }
  get pageId() {
    return this.var_2762;
  }
  get pageName() {
    return this._pageName;
  }
  get children() {
    return this._children;
  }
  get offerIds() {
    return this._offerIds;
  }
  get navigator() {
    return this._navigator;
  }
  get parent() {
    return this._parent;
  }
  set parent(e) {
    this._parent = e;
  }
  dispose() {
    for (let e of this._children) e.dispose();
    ((this._children = []),
      (this._offerIds = []),
      (this._parent = null),
      (this._pageName = ""),
      (this._localization = ""));
  }
  addChild(e) {
    e != null && this._children.push(e);
  }
  activate() {}
  deactivate() {}
  open() {}
  close() {}
  get iconName() {
    return this.var_4098 < 1 ? "" : `${a.ICON_PREFIX}${this.var_4098}`;
  }
  get offsetV() {
    return 0;
  }
}
