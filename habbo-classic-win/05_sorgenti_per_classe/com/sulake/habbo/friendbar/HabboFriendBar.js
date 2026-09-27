// Estratto da HabboAirLauncher.deobf.js, riga 213682.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/HabboFriendBar.as
// Nome offuscato: _i991c91b29ccdc8

class extends ue {
  static {
    n(this, "HabboFriendBar");
  }
  constructor(e, r = 0, t = null) {
    (super(e, r, t),
      e.attachComponent(new Z9e(e, 0, t), [new IIDHabboFriendBarData()]),
      e.attachComponent(new $9e(e, 0, t), [new IIDHabboFriendBarView()]),
      e.attachComponent(new HabboLandingView(e, 0, t), [new IIDHabboLandingView()]),
      e.attachComponent(new HabboTalent(e, 0, t), [new IIDHabboTalent()]),
      e.attachComponent(new HabboEpicPopupView(e, 0, t), [new _i27c389c329e120()]),
      e.attachComponent(new z2e(e, 0, t), [new _i690e38c7db2c45()]));
  }
  set visible(e) {
    let r = this.queueInterface(new IIDHabboFriendBarView());
    r != null && ((r.visible = e), r.release(new IIDHabboFriendBarView()));
  }
}
