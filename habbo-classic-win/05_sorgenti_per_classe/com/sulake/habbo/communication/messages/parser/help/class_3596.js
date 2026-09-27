// Extracted from HabboAirLauncher.deobf.js, line 88790.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/help/class_3596.as
// Obfuscated name: _i60d96edfc5f593

class {
    static {
      n(this, "class_3596");
    }
    static {
      eAr(this, "class_3596");
    }
    _quizCode = null;
    _questionIdsForWrongAnswers = null;
    flush() {
      return ((this._quizCode = null), (this._questionIdsForWrongAnswers = null), !0);
    }
    parse(e) {
      ((this._quizCode = e.readString()), (this._questionIdsForWrongAnswers = []));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._questionIdsForWrongAnswers.push(e.readInteger());
      return !0;
    }
    get _rc6e42999e2d83b() {
      return this._quizCode;
    }
    get _r7bd3c8c92a0571() {
      return this._questionIdsForWrongAnswers;
    }
  }
