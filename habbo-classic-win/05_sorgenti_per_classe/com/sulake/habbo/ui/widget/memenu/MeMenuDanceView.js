// Extracted from HabboAirLauncher.deobf.js, line 323192.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/memenu/MeMenuDanceView.as
// Obfuscated name: _i45d9a48612e977

class {
  static {
    n(this, "MeMenuDanceView");
  }
  var_17 = null;
  _window = null;
  init(e, r) {
    ((this.var_17 = e), this.createWindow(r));
  }
  dispose() {
    ((this.var_17 = null), this._window?.dispose(), (this._window = null));
  }
  get window() {
    return this._window;
  }
  updateUnseenItemCount(e, r) {}
  createWindow(e) {
    let t = this.var_17?.assets?.getAssetByName("memenu_dance");
    if (
      (t != null && (this._window = this.var_17?.windowManager?.buildFromXML(t.content)),
      this._window == null)
    )
      throw new Error("Failed to construct dance view window from XML!");
    this._window.name = e;
    let i = [
      this._window.findChildByName("stop_dancing_button"),
      this._window.findChildByName("back_btn"),
    ];
    for (let f of i) f?.addEventListener(u.CLICK, this.onButtonClicked);
    let s = this._window.findChildByName("buttonContainer"),
      d = this.var_17?.assets?.getAssetByName("memenu_dance_button");
    if (s == null || d == null || this.var_17?.windowManager == null) return;
    for (let f = 1; f <= 4; f++) {
      if (!(sc._r3548a77d7ad43a.indexOf(f) >= 0 ? this.var_17._r961195a6411ff4 : !0)) continue;
      let b = this.var_17.windowManager.buildFromXML(d.content);
      b != null &&
        ((b.name = `dance_${f}_button`),
        (b.caption = `\${widget.memenu.dance${f}}`),
        b.addEventListener(u.CLICK, this.onButtonClicked),
        s.addListItemAt(b, Math.max(0, s.numListItems - 1)),
        this.var_17._r8077167eb58f3e ? b.disable() : b.enable());
    }
    let c = this._window.findChildByName("club_info");
    c != null && this.var_17._r05fa11693c7edb && (c.visible = !1);
  }
  onButtonClicked = n((e) => {
    let t = e.target?.name ?? "";
    switch (t) {
      case "dance_1_button":
      case "dance_2_button":
      case "dance_3_button":
      case "dance_4_button": {
        let i = t.split("_"),
          s = Number.parseInt(i[1] ?? "0", 10);
        (this.var_17?._r1515e6bde00451?.RoomWidgetLetUserInMessage(new sc(s)),
          this.var_17 != null &&
            ((this.var_17.isDancing = !0),
            this.var_17.hide(),
            this.var_17.handler.container?._r697386a8fb5bf8?.trackEventLog(
              "MeMenu",
              "click",
              "dance_start",
            )));
        break;
      }
      case "stop_dancing_button":
        (this.var_17?._r1515e6bde00451?.RoomWidgetLetUserInMessage(new sc(sc._r7ab15ec5563b55)),
          this.var_17 != null &&
            ((this.var_17.isDancing = !1),
            this.var_17.hide(),
            this.var_17.handler.container?._r697386a8fb5bf8?.trackEventLog(
              "MeMenu",
              "click",
              "dance_stop",
            )));
        break;
      case "back_btn":
        this.var_17?.changeView(pb.MAIN_VIEW);
        break;
      default:
        break;
    }
  }, "onButtonClicked");
}
