// Estratto da HabboAirLauncher.deobf.js, riga 107207.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/incoming/userdefinedroomevents/InputSourcesConf.as
// Nome offuscato: _ia39457da758e35

class a {
    static {
      n(this, "InputSourcesConf");
    }
    static {
      OJr(this, "InputSourcesConf");
    }
    static FURNI_SOURCE_FURNI_PICKS_1 = 100;
    static FURNI_SOURCE_FURNI_PICKS_2 = 101;
    static const_594 = 110;
    var_4357;
    var_4043;
    var_2349;
    var_3543;
    constructor(e) {
      ((this.var_4357 = a.readAllowedSources(e)),
        (this.var_4043 = a.readAllowedSources(e)),
        (this.var_2349 = a.readDefaultSources(e)),
        (this.var_3543 = a.readDefaultSources(e)));
    }
    static readAllowedSources(e) {
      let r = [],
        t = e.readInteger();
      for (let i = 0; i < t; i++) {
        r[i] = [];
        let s = e.readInteger();
        for (let o = 0; o < s; o++) r[i][o] = e.readInteger();
      }
      return r;
    }
    static readDefaultSources(e) {
      let r = [],
        t = e.readInteger();
      for (let i = 0; i < t; i++) r.push(e.readInteger());
      return r;
    }
    get _r94512e743522ac() {
      return this.var_4357.length;
    }
    getAllowedFurniSources(e) {
      return this.var_4357[e];
    }
    get _raa60c6ff365055() {
      return this.var_4043.length;
    }
    getAllowedUserSources(e) {
      return this.var_4043[e];
    }
    get defaultFurniSources() {
      return this.var_2349;
    }
    get _r38a8a54df158eb() {
      return this.var_3543;
    }
    isUsingAdvancedSettings(e, r) {
      for (let t = 0; t < this.var_2349.length; t++) if (this.var_2349[t] !== e[t]) return !0;
      for (let t = 0; t < this.var_3543.length; t++) if (this.var_3543[t] !== r[t]) return !0;
      return !1;
    }
    _r498152497e09ad() {
      for (let e = 0; e < this._r94512e743522ac; e++) {
        let r = this.getAllowedFurniSources(e);
        if (
          r.indexOf(a.FURNI_SOURCE_FURNI_PICKS_1) !== -1 ||
          r.indexOf(a.FURNI_SOURCE_FURNI_PICKS_2) !== -1 ||
          r.indexOf(a.const_594) !== -1
        )
          return !0;
      }
      return !1;
    }
    _r1a2fb98ee0c252() {
      let e = !1,
        r = !1;
      for (let t = 0; t < this._r94512e743522ac; t++) {
        let i = this.getAllowedFurniSources(t);
        ((i.indexOf(a.FURNI_SOURCE_FURNI_PICKS_1) !== -1 || i.indexOf(a.const_594) !== -1) && (e = !0),
          i.indexOf(a.FURNI_SOURCE_FURNI_PICKS_2) !== -1 && (r = !0));
      }
      return e && r;
    }
    _rff445482fb8335() {
      return this.var_2349.indexOf(100) !== -1 || this.var_2349.indexOf(101) !== -1;
    }
  }
