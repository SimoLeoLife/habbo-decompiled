// Extracted from HabboAirLauncher.deobf.js, line 145564.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/utils/ConfirmDialog.as
// Obfuscated name: _ia78d790d70bb2a

class extends c0 {
  static {
    n(this, "ConfirmDialog");
  }
  constructor(e, r, t, i, s, o, d) {
    super(e, r, t, i, s, o, d);
  }
  dialogEventProc(e, r) {
    if (e.type !== u.CLICK) return;
    let t = null;
    switch (r.name) {
      case c0.const_427:
        this._callback != null &&
          ((t = y.allocate(y.const_1300, null, null)), this._callback(this, t), t.recycle());
        break;
      case c0.const_688:
      case c0.const_259:
        this._callback != null &&
          ((t = y.allocate(y.const_204, null, null)), this._callback(this, t), t.recycle());
        break;
    }
  }
}
