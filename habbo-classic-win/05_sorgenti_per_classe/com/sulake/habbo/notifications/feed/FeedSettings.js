// Extracted from HabboAirLauncher.deobf.js, line 261847.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/notifications/feed/FeedSettings.as
// Obfuscated name: _i8ee8ccf6cafba7

class a {
  static {
    n(this, "FeedSettings");
  }
  static _r8fcd82cffb6c09 = 0;
  static _re4778715fe0770 = 1;
  static _r92e82a0f992597 = 2;
  static const_1014 = 3;
  static _r00dce64b9ef405 = 0;
  static _r6d2b6133fdcf24 = 1;
  static _r5ad6d7c04e062f = 2;
  _rb01997913ad50c;
  _visibleFeedCategories;
  constructor(e) {
    ((this._rb01997913ad50c = e),
      (this._visibleFeedCategories = [a._r6d2b6133fdcf24, a._r00dce64b9ef405, a._r5ad6d7c04e062f]));
  }
  dispose() {
    ((this._rb01997913ad50c = null), (this._visibleFeedCategories = []));
  }
  getVisibleFeedCategories() {
    return [...this._visibleFeedCategories];
  }
  toggleVisibleFeedCategory(e) {
    this._rb01997913ad50c?.var_5313();
  }
}
