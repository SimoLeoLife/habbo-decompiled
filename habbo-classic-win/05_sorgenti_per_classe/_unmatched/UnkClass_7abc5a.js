// Extracted from HabboAirLauncher.deobf.js, line 46148.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i7abc5ae40dff72

class a {
  static {
    n(this, "UnkClass_7abc5a");
  }
  font;
  size;
  color;
  bold;
  italic;
  underline;
  url;
  target;
  align;
  leftMargin;
  rightMargin;
  indent;
  leading;
  kerning;
  letterSpacing;
  constructor(
    e = null,
    r = null,
    t = null,
    i = null,
    s = null,
    o = null,
    d = null,
    c = null,
    f = null,
    l = 0,
    b = 0,
    _ = null,
    h = null,
  ) {
    ((this.font = e),
      (this.size = r),
      (this.color = t),
      (this.bold = i),
      (this.italic = s),
      (this.underline = o),
      (this.url = d),
      (this.target = c),
      (this.align = f),
      (this.leftMargin = l),
      (this.rightMargin = b),
      (this.indent = _),
      (this.leading = h),
      (this.kerning = null),
      (this.letterSpacing = null));
  }
  clone() {
    return Object.assign(new a(), this);
  }
}
