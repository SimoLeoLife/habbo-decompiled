// Extracted from HabboAirLauncher.deobf.js, line 206405.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/view/AbstractView.as
// Obfuscated name: _i24fd9c805f49b4

class extends ue {
  static {
    n(this, "AbstractView");
  }
  constructor(e, r, t) {
    super(e, r, t);
  }
  get dependencies() {
    return super.dependencies.concat([
      new ComponentDependency(new IIDSessionDataManager(), (e) => {
        this._sessionDataManager = e;
      }),
      new ComponentDependency(new IIDAvatarRenderManager(), (e) => {
        this._r943cf45602d873 = e;
      }),
      new ComponentDependency(new IIDHabboWindowManager(), (e) => {
        this._windowManager = e;
      }),
      new ComponentDependency(new IIDHabboLocalizationManager(), (e) => {
        this._localizationManager = e;
      }),
      new ComponentDependency(new IIDHabboTracking(), (e) => {
        this._tracking = e;
      }),
    ]);
  }
}
