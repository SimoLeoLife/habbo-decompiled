// Estratto da HabboAirLauncher.deobf.js, riga 66852.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/utils/class_3795.as
// Nome offuscato: _i62455aeb79ef72

class a {
  static {
    n(this, "class_3795");
  }
  static ADVANCED = "advanced";
  static BOLD = "bold";
  static BOTTOM = "bottom";
  static BOTTOM_LEFT = "bottom-left";
  static BOTTOM_RIGHT = "bottom-right";
  static ITALIC = "italic";
  static const_27 = "left";
  static NONE = "none";
  static NORMAL = "normal";
  static RIGHT = "right";
  static TOP = "top";
  static TOP_LEFT = "top-left";
  static TOP_RIGHT = "top-right";
  static const_81 = "underline";
  name = "";
  color = null;
  fontFamily = "";
  fontSize = null;
  fontStyle = null;
  fontWeight = null;
  kerning = null;
  leading = null;
  letterSpacing = null;
  textDecoration = null;
  textIndent = null;
  antiAliasType = null;
  sharpness = null;
  thickness = null;
  etchingColor = null;
  etchingPosition = null;
  toString() {
    let e = "";
    return (
      (e += `${this.name} {
`),
      this.color &&
        (e += `	color: #${String(this.color)};
`),
      this.fontFamily &&
        (e += `	font-family: ${this.fontFamily};
`),
      this.fontSize &&
        (e += `	font-size: ${this.fontSize};
`),
      this.fontStyle &&
        (e += `	font-style: ${this.fontStyle};
`),
      this.fontWeight &&
        (e += `	font-weight: ${this.fontWeight};
`),
      this.kerning &&
        (e += `	kerning: ${this.kerning};
`),
      this.leading &&
        (e += `	leading: ${this.leading};
`),
      this.letterSpacing &&
        (e += `	letter-spacing: ${this.letterSpacing};
`),
      this.textDecoration &&
        (e += `	text-decoration: ${this.textDecoration};
`),
      this.textIndent &&
        (e += `	text-indent: ${this.textIndent};
`),
      this.antiAliasType &&
        (e += `	anti-alias-type: ${this.antiAliasType};
`),
      this.sharpness &&
        (e += `	sharpness: ${this.sharpness};
`),
      this.thickness &&
        (e += `	thickness: ${this.thickness};
`),
      this.etchingColor &&
        (e += `	etching-color: #${String(this.etchingColor)};
`),
      this.etchingPosition &&
        (e += `	etching-direction: ${this.etchingPosition};
`),
      (e += "}"),
      e
    );
  }
  equals(e) {
    return (
      this.color === e.color &&
      this.fontFamily === e.fontFamily &&
      this.fontSize === e.fontSize &&
      this.fontStyle === e.fontStyle &&
      this.fontWeight === e.fontWeight &&
      this.kerning === e.kerning &&
      this.leading === e.leading &&
      this.letterSpacing === e.letterSpacing &&
      this.textDecoration === e.textDecoration &&
      this.textIndent === e.textIndent &&
      this.antiAliasType === e.antiAliasType &&
      this.sharpness === e.sharpness &&
      this.thickness === e.thickness &&
      this.etchingColor === e.etchingColor &&
      this.etchingPosition === e.etchingPosition
    );
  }
  clone() {
    let e = new a();
    return (
      (e.name = this.name),
      (e.color = this.color),
      (e.fontFamily = this.fontFamily),
      (e.fontSize = this.fontSize),
      (e.fontStyle = this.fontStyle),
      (e.fontWeight = this.fontWeight),
      (e.kerning = this.kerning),
      (e.leading = this.leading),
      (e.letterSpacing = this.letterSpacing),
      (e.textDecoration = this.textDecoration),
      (e.textIndent = this.textIndent),
      (e.antiAliasType = this.antiAliasType),
      (e.sharpness = this.sharpness),
      (e.thickness = this.thickness),
      (e.etchingColor = this.etchingColor),
      (e.etchingPosition = this.etchingPosition),
      e
    );
  }
}
