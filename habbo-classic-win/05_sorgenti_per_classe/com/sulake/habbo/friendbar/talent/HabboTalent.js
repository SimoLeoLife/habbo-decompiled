// Estratto da HabboAirLauncher.deobf.js, riga 211143.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/talent/HabboTalent.as
// Nome offuscato: _i36017fc4b1e989

class extends AbstractView {
  static {
    n(this, "HabboTalent");
  }
  get _rf3db13932bfb60() {
    return this._r6358b2bd53ae19;
  }
  get localizationManager() {
    return this._localizationManager;
  }
  get _r10c65085b9beaf() {
    return this._sessionDataManager;
  }
  get tracking() {
    return this._tracking;
  }
  get windowManager() {
    return this._windowManager;
  }
  get habboHelp() {
    return this._habboHelp;
  }
  get navigator() {
    return this._navigator;
  }
  get toolbar() {
    return this._toolbar;
  }
  get avatarEditor() {
    return this._avatarEditor;
  }
  get habboTalentEnabled() {
    return this.getBoolean("talent.track.enabled");
  }
  get citizenshipEnabled() {
    return this.getBoolean("talent.track.citizenship.enabled");
  }
  get newUserTourEnabled() {
    return this.getBoolean("guide.help.new.user.tour.enabled");
  }
  get newIdentity() {
    return this.getInteger("new.identity", 0) > 0;
  }
  constructor(e, r, t) {
    super(e, r, t);
  }
  get dependencies() {
    return super.dependencies.concat([
      new ComponentDependency(new IIDHabboCommunicationManager(), (e) => {
        this._r6358b2bd53ae19 = e;
      }),
      new ComponentDependency(new IIDHabboHelp(), (e) => {
        this._habboHelp = e;
      }),
      new ComponentDependency(new IIDHabboNavigator(), (e) => {
        this._navigator = e;
      }),
      new ComponentDependency(new IIDHabboToolbar(), (e) => {
        this._toolbar = e;
      }),
      new ComponentDependency(new IIDHabboAvatarEditor(), (e) => {
        this._avatarEditor = e;
      }),
    ]);
  }
  dispose() {
    (this.disposed ||
      (this._talentPromo?.dispose(),
      (this._talentPromo = null),
      this._r0d065951c59039?.dispose(),
      (this._r0d065951c59039 = null),
      this._r5042c06cde46cf?.dispose(),
      (this._r5042c06cde46cf = null),
      this._re419933ed53cfc?.dispose(),
      (this._re419933ed53cfc = null),
      this.context._r7485c47d8bd77c(this)),
      super.dispose());
  }
  initComponent() {
    this.habboTalentEnabled &&
      ((this._r0d065951c59039 = new V9e(this)),
      (this._talentPromo = new TalentLevelUpController(this)),
      (this._r5042c06cde46cf = new F9e(this)),
      this.citizenshipEnabled && (this._re419933ed53cfc = new CitizenshipPopupController(this)),
      this.context._r7e43d9f4706607(this),
      this._r0d065951c59039.initialize(),
      this._talentPromo.initialize(),
      this._r5042c06cde46cf.initialize());
  }
  send(e) {
    this._r6358b2bd53ae19?.connection.send(e);
  }
  getXmlWindow(e, r = 1) {
    let t = this.assets.getAssetByName(`${e}_xml`)?.content;
    if (t == null) throw new Error(`Failed to build window ${e}_xml! Missing asset.`);
    return this._windowManager?.buildFromXML(t, r) ?? null;
  }
  getModalXmlWindow(e) {
    let r = this.assets.getAssetByName(`${e}_xml`)?.content;
    if (r == null) throw new Error(`Failed to build window ${e}_xml! Missing asset.`);
    return this._windowManager?.buildModalDialogFromXML(r) ?? null;
  }
  _ra91abf46af2304(e, r) {
    this._talentPromo?.showWindow(e, r.level, r.rewardPerks, r.rewardProducts);
  }
  get linkPattern() {
    return "talent/";
  }
  linkReceived(e) {
    let r = e.split("/");
    if (!(r.length < 2))
      switch (r[1]) {
        case "open":
          if (r.length > 2)
            switch (r[2]) {
              case ys.CITIZENSHIP:
                (this._tracking?.trackTalentTrackOpen(ys.CITIZENSHIP, "citizenshiplink"),
                  this.send(new class_2687(ys.CITIZENSHIP)));
                break;
              case ys.HELPER:
                (this._tracking?.trackTalentTrackOpen(ys.HELPER, "helperlink"),
                  this.send(new class_2687(ys.HELPER)));
                break;
            }
          break;
        default:
      }
  }
}
