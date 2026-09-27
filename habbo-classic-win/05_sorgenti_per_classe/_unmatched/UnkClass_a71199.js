// Extracted from HabboAirLauncher.deobf.js, line 72595.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ia711992974f44d

class {
  static {
    n(this, "UnkClass_a71199");
  }
  id = 0;
  uniqueId = "";
  name = "";
  motto = "";
  figure = "";
  gender = "";
  head_figure = "";
  _r34f798ee9f2d14 = 0;
  habboClubMember = !1;
  buildersClubMember = !1;
  creationTime = "";
  constructor(e) {
    e != null &&
      ((this.uniqueId = e.uniqueId ?? ""),
      (this.name = e.name ?? ""),
      (this.motto = e.motto ?? ""),
      (this.figure = e.figureString ?? ""),
      (this.gender = e.gender ?? ""),
      (this.head_figure = e.head_figure ?? ""),
      (this._r34f798ee9f2d14 = e.lastWebAccess ?? 0),
      (this.habboClubMember = e.habboClubMember === !0 || e.habboClubMember === "true"),
      (this.buildersClubMember = e.buildersClubMember === !0 || e.buildersClubMember === "true"),
      (this.creationTime = e.creationTime ?? ""));
  }
}
