// Estratto da HabboAirLauncher.deobf.js, riga 255679.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/TextSearchInputs.as
// Nome offuscato: _i2a0c570095003b

class {
  constructor(e, r) {
    this._navigator = e;
    let t = r.findChildByName("search_str");
    ((this._searchStr = new TextFieldManager(
      this._navigator,
      t,
      35,
      this._r950ece0b4aea30,
      this._navigator?.getText("navigator.search.info") ?? null,
    )),
      Fr.setProc(r, "search_but", this._rf8d0f707a1a32f),
      !0 &&
        ((this._rf0e4964d4b25d8 = r.findChildByName("search_type")),
        this._rf0e4964d4b25d8 != null &&
          (this._rf0e4964d4b25d8.populate([
            this._navigator?.getText("${navigator.navisel.bydefault}") ?? "",
            this._navigator?.getText("${navigator.navisel.byowner}") ?? "",
            this._navigator?.getText("${navigator.navisel.byroomname}") ?? "",
            this._navigator?.getText("${navigator.navisel.bytag}") ?? "",
            this._navigator?.getText("${navigator.navisel.bygroupname}") ?? "",
          ]),
          (this._rf0e4964d4b25d8.selection = 0))));
  }
  static {
    n(this, "TextSearchInputs");
  }
  _searchStr = null;
  _rf0e4964d4b25d8 = null;
  dispose() {
    (this._searchStr?.dispose(), (this._searchStr = null), (this._navigator = null));
  }
  get searchStr() {
    return this._searchStr;
  }
  setText(e, r) {
    if ((this._searchStr?.setText(e), this._rf0e4964d4b25d8 != null))
      switch (r) {
        case 8:
          this._rf0e4964d4b25d8.selection = 0;
          break;
        case 20:
          this._rf0e4964d4b25d8.selection = 1;
          break;
        case 10:
          this._rf0e4964d4b25d8.selection = 2;
          break;
        case 9:
          this._rf0e4964d4b25d8.selection = 3;
          break;
        case 13:
          this._rf0e4964d4b25d8.selection = 4;
          break;
      }
  }
  _rf8d0f707a1a32f = n((...e) => {
    let r = e[0],
      t = e[1];
    r.type === u.CLICK && this._r950ece0b4aea30();
  }, "_rf8d0f707a1a32f");
  _r950ece0b4aea30 = n(() => {
    let e = this._searchStr?.getText() ?? "";
    if (!(e === "" || this._navigator?._r970f774dfe2577 == null)) {
      if (this._rf0e4964d4b25d8 != null)
        switch (this._rf0e4964d4b25d8.selection) {
          case 0:
            this._navigator._r970f774dfe2577.startSearch(5, 8, e);
            break;
          case 1:
            this._navigator._r970f774dfe2577.startSearch(5, 20, e);
            break;
          case 2:
            this._navigator._r970f774dfe2577.startSearch(5, 10, e);
            break;
          case 3:
            this._navigator._r970f774dfe2577.startSearch(5, 9, e);
            break;
          case 4:
            this._navigator._r970f774dfe2577.startSearch(5, 13, e);
            break;
        }
      else this._navigator._r970f774dfe2577.startSearch(5, 8, e);
      this._navigator.trackNavigationDataPoint("Search", "search", e);
    }
  }, "_r950ece0b4aea30");
}
