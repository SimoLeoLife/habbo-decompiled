// Estratto da HabboAirLauncher.deobf.js, riga 171377.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/structure/AvatarStructureDownload.as
// Nome offuscato: _i0ea2873ff2489e

class a extends Ft {
  static {
    n(this, "AvatarStructureDownload");
  }
  static STRUCTURE_DONE = "AVATAR_STRUCTURE_DONE";
  _r7a016ae4b40385;
  constructor(e, r, t) {
    (super(), (this._r7a016ae4b40385 = t));
    let i = e.loadAssetFromFile(r, new _i636490202c0f9a(r), "text/plain");
    (i.addEventListener(Le.ASSET_LOADER_EVENT_COMPLETE, this._rbdde361f4b8af4),
      i.addEventListener(Le.ASSET_LOADER_EVENT_ERROR, this._r0d4746527356fc));
  }
  _rbdde361f4b8af4 = n((e) => {
    let r = e.target;
    if (r?._r7ea1029131e026 == null) return;
    let t = null;
    try {
      let i = r._r7ea1029131e026.content;
      ((i == null || i.length === 0) &&
        class_14.error(
          `Could not load avatar structure, got empty data from URL ${r._r7ea1029131e026.url} data length = ${i?.length ?? 0}.`,
          !1,
          class_14._r6bf12a66aab17c,
        ),
        (t = _if835c88c080779(i ?? "")));
    } catch (i) {
      console.error("[AvatarStructureDownload] Error:", i);
      return;
    }
    if (t == null || t.tagName === "parsererror") {
      console.error("[AvatarStructureDownload] XML error:", r._r7ea1029131e026.url);
      return;
    }
    (this._r7a016ae4b40385._r2048f388de3bd3(rr(t)), this.dispatchEvent(new M(a.STRUCTURE_DONE)));
  }, "_rbdde361f4b8af4");
  _r0d4746527356fc = n((e) => {
    let t = e.target?._r7ea1029131e026?.url ?? "";
    (Ae.logEventLog(`figurepartlist download error ${t}`),
      class_14.error(`Could not load avatar structure. Failed to get data from URL ${t}`, !0, class_14._r6bf12a66aab17c));
  }, "_r0d4746527356fc");
}
