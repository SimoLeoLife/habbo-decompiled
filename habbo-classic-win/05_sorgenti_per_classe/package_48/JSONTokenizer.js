// Estratto da HabboAirLauncher.deobf.js, riga 61611.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_48/JSONTokenizer.as
// Nome offuscato: _i865269d54344b4

class {
  static {
    n(this, "JSONTokenizer");
  }
  var_2851;
  jsonString;
  var_190 = 0;
  ch = "";
  _r138d59653854c1 = /[\x00-\x1F]/;
  constructor(e, r) {
    ((this.jsonString = e), (this.var_2851 = r), this.nextChar());
  }
  getNextToken() {
    let e = null;
    switch ((this.skipIgnored(), this.ch)) {
      case "{":
        ((e = Lf.create(class_2798.const_1375, this.ch)), this.nextChar());
        break;
      case "}":
        ((e = Lf.create(class_2798.const_276, this.ch)), this.nextChar());
        break;
      case "[":
        ((e = Lf.create(class_2798.LEFT_BRACKET, this.ch)), this.nextChar());
        break;
      case "]":
        ((e = Lf.create(class_2798.RIGHT_BRACKET, this.ch)), this.nextChar());
        break;
      case ",":
        ((e = Lf.create(class_2798.COMMA, this.ch)), this.nextChar());
        break;
      case ":":
        ((e = Lf.create(class_2798.COLON, this.ch)), this.nextChar());
        break;
      case "t": {
        let r = `t${this.nextChar()}${this.nextChar()}${this.nextChar()}`;
        r === "true"
          ? ((e = Lf.create(class_2798.TRUE, !0)), this.nextChar())
          : this.parseError(`Expecting 'true' but found ${r}`);
        break;
      }
      case "f": {
        let r = `f${this.nextChar()}${this.nextChar()}${this.nextChar()}${this.nextChar()}`;
        r === "false"
          ? ((e = Lf.create(class_2798.const_572, !1)), this.nextChar())
          : this.parseError(`Expecting 'false' but found ${r}`);
        break;
      }
      case "n": {
        let r = `n${this.nextChar()}${this.nextChar()}${this.nextChar()}`;
        r === "null"
          ? ((e = Lf.create(class_2798.NULL, null)), this.nextChar())
          : this.parseError(`Expecting 'null' but found ${r}`);
        break;
      }
      case "N": {
        let r = `N${this.nextChar()}${this.nextChar()}`;
        r === "NaN"
          ? ((e = Lf.create(class_2798.NAN, Number.NaN)), this.nextChar())
          : this.parseError(`Expecting 'NaN' but found ${r}`);
        break;
      }
      case '"':
        e = this.readString();
        break;
      default:
        this.isDigit(this.ch) || this.ch === "-"
          ? (e = this.readNumber())
          : this.ch === ""
            ? (e = null)
            : this.parseError(`Unexpected ${this.ch} encountered`);
    }
    return e;
  }
  unescapeString(e) {
    this.var_2851 &&
      this._r138d59653854c1.test(e) &&
      this.parseError("String contains unescaped control character (0x00-0x1F)");
    let r = "",
      t = 0,
      i = 0,
      s = e.length;
    do
      if (((t = e.indexOf("\\", i)), t >= 0)) {
        ((r += e.substring(i, t)), (i = t + 2));
        let o = e.charAt(t + 1);
        switch (o) {
          case '"':
          case "\\":
            r += o;
            break;
          case "n":
            r += `
`;
            break;
          case "r":
            r += "\r";
            break;
          case "t":
            r += "	";
            break;
          case "u": {
            let d = i + 4;
            d > s && this.parseError("Unexpected end of input.  Expecting 4 hex digits after \\u.");
            let c = "";
            for (let f = i; f < d; f++) {
              let l = e.charAt(f);
              (this.isHexDigit(l) || this.parseError(`Excepted a hex digit, but found: ${l}`),
                (c += l));
            }
            ((r += String.fromCharCode(Number.parseInt(c, 16))), (i = d));
            break;
          }
          case "f":
            r += "\f";
            break;
          case "/":
            r += "/";
            break;
          case "b":
            r += "\b";
            break;
          default:
            r += `\\${o}`;
        }
      } else {
        r += e.substring(i);
        break;
      }
    while (i < s);
    return r;
  }
  parseError(e) {
    throw new JSONParseError(e, this.var_190, this.jsonString);
  }
  readString() {
    let e = this.var_190;
    do
      if (((e = this.jsonString.indexOf('"', e)), e >= 0)) {
        let t = 0,
          i = e - 1;
        for (; this.jsonString.charAt(i) === "\\";) (t++, i--);
        if ((t & 1) === 0) break;
        e++;
      } else this.parseError("Unterminated string literal");
    while (!0);
    let r = Lf.create(
      class_2798.STRING,
      this.unescapeString(this.jsonString.substring(this.var_190, e)),
    );
    return ((this.var_190 = e + 1), this.nextChar(), r);
  }
  readNumber() {
    let e = "";
    if (
      (this.ch === "-" && ((e += "-"), this.nextChar()),
      this.isDigit(this.ch) || this.parseError("Expecting a digit"),
      this.ch === "0")
    ) {
      if (((e += this.ch), this.nextChar(), this.isDigit(this.ch)))
        this.parseError("A digit cannot immediately follow 0");
      else if (!this.var_2851 && this.ch === "x")
        for (
          e += this.ch,
            this.nextChar(),
            this.isHexDigit(this.ch)
              ? ((e += this.ch), this.nextChar())
              : this.parseError('Number in hex format require at least one hex digit after "0x"');
          this.isHexDigit(this.ch);
        )
          ((e += this.ch), this.nextChar());
    } else
      for (; this.isDigit(this.ch);) ((e += this.ch), this.nextChar());
    if (this.ch === ".")
      for (
        e += ".",
          this.nextChar(),
          this.isDigit(this.ch) || this.parseError("Expecting a digit");
        this.isDigit(this.ch);
      )
        ((e += this.ch), this.nextChar());
    if (this.ch === "e" || this.ch === "E")
      for (
        e += "e",
          this.nextChar(),
          (this.ch === "+" || this.ch === "-") &&
            ((e += this.ch), this.nextChar()),
          this.isDigit(this.ch) ||
            this.parseError("Scientific notation number needs exponent value");
        this.isDigit(this.ch);
      )
        ((e += this.ch), this.nextChar());
    let r = Number(e);
    if (Number.isFinite(r) && !Number.isNaN(r)) return Lf.create(class_2798.NUMBER, r);
    this.parseError(`Number ${r} is not valid!`);
  }
  nextChar() {
    return (
      (this.ch = this.jsonString.charAt(this.var_190++)),
      this.ch
    );
  }
  skipIgnored() {
    let e;
    do ((e = this.var_190), this._r93be36dbfdc3f9(), this.skipComments());
    while (e !== this.var_190);
  }
  skipComments() {
    if (this.ch !== "/") return;
    this.nextChar();
    let e = this.ch;
    if (e === "/") {
      do this.nextChar();
      while (
        this.ch !==
          `
` &&
        this.ch !== ""
      );
      this.nextChar();
      return;
    }
    if (e === "*") {
      for (this.nextChar(); ;) {
        if (this.ch === "*") {
          if ((this.nextChar(), this.ch === "/")) {
            this.nextChar();
            break;
          }
        } else this.nextChar();
        this.ch === "" && this.parseError("Multi-line comment not closed");
      }
      return;
    }
    this.parseError(`Unexpected ${this.ch} encountered (expecting '/' or '*' )`);
  }
  _r93be36dbfdc3f9() {
    for (; this.isWhiteSpace(this.ch);) this.nextChar();
  }
  isWhiteSpace(e) {
    return e === " " ||
      e === "	" ||
      e ===
        `
` ||
      e === "\r"
      ? !0
      : !this.var_2851 && e.charCodeAt(0) === 160;
  }
  isDigit(e) {
    return e >= "0" && e <= "9";
  }
  isHexDigit(e) {
    return this.isDigit(e) || (e >= "A" && e <= "F") || (e >= "a" && e <= "f");
  }
}
