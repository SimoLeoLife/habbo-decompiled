// Estratto da HabboAirLauncher.deobf.js, riga 320611.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/infostand/InfoStandCrackableFurniView.as
// Nome offuscato: _i4e70c47ad8bd41

class extends X1 {
  static {
    n(this, "InfoStandCrackableFurniView");
  }
  constructor(e, r) {
    super(e, r);
  }
  update(e) {
    super.update(e);
    let r = e.stuffData;
    (this.showButton("use", !0),
      this.var_34 != null && (this.var_34.visible = !0),
      this.setHitsAndTarget(r?.hits ?? 0, r?.target ?? 0));
  }
  createWindow(e) {
    let r = this.var_17?.assets?.getAssetByName("crackable_furni_view");
    if (
      ((this._window = this.var_17?.windowManager?.buildFromXML(r?.content)),
      this._window == null)
    )
      throw new Error("Failed to construct window from XML!");
    if (
      ((this._border = this._window.getListItemByName("info_border")),
      (this.var_34 = this._window.getListItemByName("button_list")),
      (this._r99fda1d9e9f6a9 = this._border?.findChildByName("infostand_element_list")),
      (this._window.name = e),
      this.var_17?.mainContainer.addChild(this._window),
      this._border?.findChildByTag("close")?.addEventListener(u.CLICK, this.onClose),
      this.var_34 != null)
    )
      for (let s = 0; s < this.var_34.numListItems; s++)
        this.var_34.getListItemAt(s)?.addEventListener(u.CLICK, this.onButtonClicked);
    ((this._r0cabb5f3546286 = this._border?.findChildByTag("catalog") ?? null),
      this._r0cabb5f3546286?.addEventListener(u.CLICK, this._r7135eb8d4233fa),
      (this._rc1e4df667e35be = this._border?.findChildByName("rent_button") ?? null),
      this._rc1e4df667e35be?.addEventListener(u.CLICK, this._rb77933fef3ae25),
      (this._re653c033b3caa6 = this._border?.findChildByName("extend_button") ?? null),
      this._re653c033b3caa6?.addEventListener(u.CLICK, this._rfaad168e4b59af),
      (this._rd19d99b6a51f87 = this._border?.findChildByName("buyout_button") ?? null),
      this._rd19d99b6a51f87?.addEventListener(u.CLICK, this._r1e85c3dc5fed85));
    let i = this._r99fda1d9e9f6a9?.getListItemByName("owner_region");
    (i?.addEventListener(u.CLICK, this._r18053e6db46985),
      i?.addEventListener(u.OVER, this._r18053e6db46985),
      i?.addEventListener(u.OUT, this._r18053e6db46985));
  }
  setHitsAndTarget(e, r) {
    let t = this._r99fda1d9e9f6a9?.getListItemByName("hits_remaining");
    t != null &&
      (this.var_17?.localizations?._r43eae9731f5b27(
        "infostand.crackable_furni.hits_remaining",
        "hits",
        String(e),
      ),
      this.var_17?.localizations?._r43eae9731f5b27(
        "infostand.crackable_furni.hits_remaining",
        "target",
        String(r),
      ),
      (t.visible = !0),
      this.updateWindow());
  }
}
