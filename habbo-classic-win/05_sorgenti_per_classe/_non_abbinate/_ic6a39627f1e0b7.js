// Estratto da HabboAirLauncher.deobf.js, riga 319663.

class extends YoutubeDisplayWidget {
  static {
    n(this, "_ic6a39627f1e0b7");
  }
  constructor(e, r, t, i) {
    (super(e, r, t, i), (this.ownHandler.widget = this));
  }
  get assetName() {
    return "video_viewer_xml";
  }
  get _r6b6e5a29b89555() {
    return "YouTube Display";
  }
  get ownHandler() {
    return this._r16afd202c77c85;
  }
  show(e, r) {
    this._ra8ff50865900f0(e, `Furniture id: ${e.getId()}`);
  }
}
