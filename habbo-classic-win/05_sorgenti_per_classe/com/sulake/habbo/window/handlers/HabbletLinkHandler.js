// Estratto da HabboAirLauncher.deobf.js, riga 145370.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/handlers/HabbletLinkHandler.as
// Nome offuscato: _id11715931e40a5

class {
  constructor(e) {
    this._windowManager = e;
  }
  static {
    n(this, "HabbletLinkHandler");
  }
  get linkPattern() {
    return "habblet/";
  }
  get disposed() {
    return this._windowManager == null;
  }
  linkReceived(e) {
    let r = e.split("/");
    if (r.length < 2 || r[1] !== "open" || r.length <= 2 || this._windowManager == null) return;
    let t = r[2];
    t === "credits"
      ? Ae.openWebPageAndMinimizeClient(this._windowManager.getProperty(ExternalVariables.const_1246))
      : Ae.openWebHabblet(t);
  }
  dispose() {
    this._windowManager = null;
  }
}
