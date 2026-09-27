// Extracted from HabboAirLauncher.deobf.js, line 319643.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i4366dba4674c30

class extends YoutubeDisplayWidget {
  static {
    n(this, "UnkYoutubeDisplayWidgetSubclass_4366db");
  }
  constructor(e, r, t, i) {
    (super(e, r, t, i), (this.ownHandler.widget = this));
  }
  get assetName() {
    return "vimeo_viewer_xml";
  }
  get _r6b6e5a29b89555() {
    return "Vimeo Display";
  }
  get ownHandler() {
    return this._r16afd202c77c85;
  }
  show(e, r, t) {
    this._ra8ff50865900f0(e, t > 0 ? String(t) : "No configured video id");
  }
}
