// Estratto da HabboAirLauncher.deobf.js, riga 61866.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_48/JSONDecoder.as
// Nome offuscato: _ib3222cfc97e3a2

class {
  static {
    n(this, "JSONDecoder");
  }
  var_2851;
  token;
  _token = null;
  _value;
  constructor(e, r) {
    ((this.var_2851 = r),
      (this.token = new JSONTokenizer(e, r)),
      this._r63e7dbbbe03bf9(),
      (this._value = this.parseValue()),
      r &&
        this._r63e7dbbbe03bf9() != null &&
        this.token.parseError("Unexpected characters left in input stream"));
  }
  getValue() {
    return this._value;
  }
  _r63e7dbbbe03bf9() {
    return ((this._token = this.token.getNextToken()), this._token);
  }
  _r120877878ec144() {
    return ((this._token = this.token.getNextToken()), this.checkValidToken(), this._token);
  }
  checkValidToken() {
    this._token == null && this.token.parseError("Unexpected end of input");
  }
  _r5a02726df1a9eb() {
    let e = [];
    this._r120877878ec144();
    let r = this._token?.type;
    if (r === class_2798.RIGHT_BRACKET) return e;
    if (!this.var_2851 && r === class_2798.COMMA) {
      if ((this._r120877878ec144(), (r = this._token?.type), r === class_2798.RIGHT_BRACKET)) return e;
      this.token.parseError(
        `Leading commas are not supported.  Expecting ']' but found ${this._token?.value}`,
      );
    }
    for (;;) {
      if (
        (e.push(this.parseValue()),
        this._r120877878ec144(),
        (r = this._token?.type),
        r === class_2798.RIGHT_BRACKET)
      )
        return e;
      if (r === class_2798.COMMA) {
        if (
          (this._r63e7dbbbe03bf9(),
          (r = this._token?.type),
          !this.var_2851 && (this.checkValidToken(), r === class_2798.RIGHT_BRACKET))
        )
          return e;
      } else this.token.parseError(`Expecting ] or , but found ${this._token?.value}`);
    }
  }
  _r23c3c3a6ee47b3() {
    let e = {};
    this._r120877878ec144();
    let r = this._token?.type;
    if (r === class_2798.const_276) return e;
    if (!this.var_2851 && r === class_2798.COMMA) {
      if ((this._r120877878ec144(), (r = this._token?.type), r === class_2798.const_276)) return e;
      this.token.parseError(
        `Leading commas are not supported.  Expecting '}' but found ${this._token?.value}`,
      );
    }
    for (;;) {
      ((r = this._token?.type),
        r !== class_2798.STRING &&
          this.token.parseError(`Expecting string but found ${this._token?.value}`));
      let t = this._token,
        i = String(t?.value);
      if (
        (this._r120877878ec144(),
        (r = this._token?.type),
        r !== class_2798.COLON &&
          this.token.parseError(`Expecting : but found ${this._token?.value}`),
        this._r63e7dbbbe03bf9(),
        (e[i] = this.parseValue()),
        this._r120877878ec144(),
        (r = this._token?.type),
        r === class_2798.const_276)
      )
        return e;
      if (r === class_2798.COMMA) {
        if (
          (this._r63e7dbbbe03bf9(),
          (r = this._token?.type),
          !this.var_2851 && (this.checkValidToken(), r === class_2798.const_276))
        )
          return e;
      } else this.token.parseError(`Expecting } or , but found ${this._token?.value}`);
    }
  }
  parseValue() {
    switch ((this.checkValidToken(), this._token?.type)) {
      case class_2798.const_1375:
        return this._r23c3c3a6ee47b3();
      case class_2798.LEFT_BRACKET:
        return this._r5a02726df1a9eb();
      case class_2798.STRING:
      case class_2798.NUMBER:
      case class_2798.TRUE:
      case class_2798.const_572:
      case class_2798.NULL:
        return this._token.value;
      case class_2798.NAN:
        if (!this.var_2851) return this._token.value;
        this.token.parseError(`Unexpected ${this._token.value}`);
        break;
      default:
        this.token.parseError(`Unexpected ${this._token?.value}`);
    }
    return null;
  }
}
