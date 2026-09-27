// Estratto da HabboAirLauncher.deobf.js, riga 340196.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/phonenumber/PhoneNumberCollectView.as
// Nome offuscato: _ibde46d4ad54bb0

class a {
  static {
    n(this, "PhoneNumberCollectView");
  }
  static _rf05bd8ea430824 = [
    "VU",
    "EC",
    "VN",
    "VI",
    "DZ",
    "VG",
    "VE",
    "DM",
    "VC",
    "DO",
    "VA",
    "DE",
    "UZ",
    "UY",
    "DK",
    "DJ",
    "US",
    "UG",
    "UA",
    "ET",
    "ES",
    "ER",
    "EH",
    "EG",
    "EE",
    "TZ",
    "TT",
    "TW",
    "TV",
    "GD",
    "GE",
    "GF",
    "GA",
    "GB",
    "FR",
    "FO",
    "FK",
    "FJ",
    "FM",
    "FI",
    "WS",
    "GY",
    "GW",
    "GU",
    "GT",
    "GR",
    "GQ",
    "WF",
    "GP",
    "GN",
    "GM",
    "GL",
    "GI",
    "GH",
    "GG",
    "RE",
    "RO",
    "AT",
    "AS",
    "AR",
    "QA",
    "AW",
    "AU",
    "AZ",
    "BA",
    "PT",
    "AC",
    "AD",
    "PW",
    "AG",
    "AE",
    "PR",
    "PS",
    "AF",
    "AL",
    "AI",
    "AO",
    "PY",
    "AM",
    "BW",
    "TG",
    "BY",
    "TD",
    "TK",
    "BS",
    "TJ",
    "BR",
    "BT",
    "TH",
    "TO",
    "TN",
    "TM",
    "TL",
    "CA",
    "BZ",
    "TR",
    "BF",
    "SV",
    "BG",
    "BH",
    "SS",
    "BI",
    "ST",
    "SY",
    "BB",
    "SZ",
    "BD",
    "BE",
    "SX",
    "BN",
    "BO",
    "BQ",
    "BJ",
    "TC",
    "BL",
    "TA",
    "BM",
    "CZ",
    "SD",
    "CY",
    "SC",
    "CX",
    "CW",
    "SE",
    "SH",
    "CV",
    "SG",
    "CU",
    "SJ",
    "SI",
    "SL",
    "SK",
    "SN",
    "SM",
    "SO",
    "SR",
    "CI",
    "RS",
    "CG",
    "CH",
    "RU",
    "RW",
    "CF",
    "CC",
    "CD",
    "CR",
    "CO",
    "CM",
    "CN",
    "SA",
    "CK",
    "SB",
    "CL",
    "LV",
    "LU",
    "LT",
    "LY",
    "LS",
    "LR",
    "MG",
    "MH",
    "ME",
    "MF",
    "MK",
    "ML",
    "MC",
    "MD",
    "MA",
    "MV",
    "MU",
    "MX",
    "MW",
    "MZ",
    "MY",
    "MN",
    "MM",
    "MP",
    "MO",
    "MR",
    "MQ",
    "MT",
    "MS",
    "NF",
    "NG",
    "NI",
    "NL",
    "NA",
    "NC",
    "NE",
    "NZ",
    "NU",
    "NR",
    "NP",
    "NO",
    "OM",
    "PL",
    "PM",
    "PH",
    "PK",
    "PE",
    "PF",
    "PG",
    "PA",
    "HK",
    "ZA",
    "HN",
    "HR",
    "HT",
    "HU",
    "ZM",
    "ZW",
    "ID",
    "IE",
    "IL",
    "IM",
    "IN",
    "IO",
    "IQ",
    "IR",
    "YE",
    "IS",
    "IT",
    "JE",
    "YT",
    "JP",
    "JO",
    "JM",
    "KI",
    "KH",
    "KG",
    "KE",
    "KP",
    "KR",
    "KM",
    "KN",
    "KW",
    "KY",
    "KZ",
    "LA",
    "LC",
    "LB",
    "LI",
    "LK",
  ];
  static INPUT_MAX_CHARS = 30;
  var_82;
  _window = null;
  _inputTextNeedsClearing = !0;
  _locales = [];
  constructor(e, r) {
    ((this.var_82 = e), this.createWindow(r));
  }
  dispose() {
    (this._window?.dispose(),
      (this._window = null),
      (this.var_82 = null),
      (this._locales = []));
  }
  handleSubmitFailure(e) {
    let r = this._window?.findChildByName("phone_number_input");
    (r != null && (r.caption = ""), (this._inputTextNeedsClearing = !0), this.setInputStates(!0));
  }
  createWindow(e) {
    if (
      this._window != null ||
      this.var_82 == null ||
      ((this._window = this.var_82.windowManager.buildFromXML(
        this.var_82.assets.getAssetByName("phonenumber_collect_xml")?.content,
      )),
      this._window?.center(),
      this._window == null)
    )
      return;
    let r = this._window.findChildByName("never_link"),
      t = this._window.findChildByName("skip_link"),
      i = this._window.findChildByName("ok_button"),
      s = this._window.findChildByName("header_button_close"),
      o = this._window.findChildByName("phone_number_input");
    (r != null && (r.procedure = this._r64e450f8ad70fb),
      t != null && (t.procedure = this._r64e450f8ad70fb),
      i != null && (i.procedure = this._r64e450f8ad70fb),
      s != null && (s.procedure = this._r64e450f8ad70fb),
      o != null && ((o.procedure = this._r64e450f8ad70fb), (o._r4c2336e24c69cc = a.INPUT_MAX_CHARS)));
    let d = this.var_82.localizationManager.getLocalization("phone.number.collect.countries") ?? "{}",
      c = new JSONDecoder(d, !1).getValue(),
      f = a._rf05bd8ea430824.concat();
    this._locales = [];
    for (let b of f) {
      let _ = c[b];
      _ != null && _.length > 0 && this._locales.push({ code: b, name: _ });
    }
    this._locales.sort((b, _) => b.name.localeCompare(_.name));
    for (let b = e.length - 1; b >= 0; b--) {
      let _ = e[b];
      if (a._rf05bd8ea430824.includes(_)) {
        let h = c[_];
        this._locales.unshift({ code: _, name: h });
      }
    }
    let l = this._window.findChildByName("country_list");
    if (l != null) {
      for (let b of this._locales) l.addMenuItem(this.createCountrySelectorMenuItem(b.code, b.name));
      l.numMenuItems > 0 && (l.selection = 0);
    }
    (XC.setHTMLLinkStyle(
      this._window.findChildByName("collect_summary"),
      3369621,
      16777215,
      4306905,
    ),
      this._window.findChildByName("ok_button")?.disable(),
      this.setInputStates(!0));
  }
  createCountrySelectorMenuItem(e, r) {
    let t = this.var_82?.windowManager.buildFromXML(
      this.var_82.assets.getAssetByName("phonenumber_country_menu_item_xml")?.content,
    );
    if (t == null) throw new Error("Unable to build phone number country menu item.");
    t.name = e;
    let i = t.findChildByName("country_code");
    return (i != null && (i.caption = r), t);
  }
  get selectedCountryCode() {
    let e = this._window?.findChildByName("country_list");
    if (e == null || e.selection === -1) return "NOT_SELECTED";
    let r = this._locales[e.selection];
    return r != null ? r.code : "--";
  }
  _rfd8dc7027132cd = n((e, r) => {
    (r.type === y.const_1300 && this.var_82?._rc27b3dccda3bed(), e.dispose());
  }, "_rfd8dc7027132cd");
  setInputStates(e) {
    this._window?.findChildByName("ok_button")?.disable();
    let r = this._window?.findChildByName("phone_number_input"),
      t = this._window?.findChildByName("never_link"),
      i = this._window?.findChildByName("skip_link"),
      s = this._window?.findChildByName("header_button_close"),
      o = this._window?.findChildByName("country_list");
    e
      ? (r?.enable(), t != null && (t.visible = !0), i != null && (i.visible = !0), s?.enable(), o?.enable())
      : (r?.disable(),
        t != null && (t.visible = !1),
        i != null && (i.visible = !1),
        s?.disable(),
        o?.disable());
  }
  _r64e450f8ad70fb = n((e, r) => {
    if (e.type === u.DOWN)
      switch (r.name) {
        case "header_button_close":
        case "skip_link":
          this.var_82?._r4e86c4cb44ae0c(!0);
          break;
        case "never_link":
          this.var_82?.windowManager.confirm(
            "${phone.number.never.again.confirm.title}",
            "${phone.number.never.again.confirm.text}",
            0,
            this._rfd8dc7027132cd,
          );
          break;
        case "ok_button":
          (this.var_82?.sendTryPhoneNumber(
            this.selectedCountryCode,
            this._window?.findChildByName("phone_number_input")?.caption ?? "",
          ),
            this.setInputStates(!1));
          break;
        case "phone_number_input":
          if (this._inputTextNeedsClearing) {
            let i = this._window?.findChildByName("phone_number_input");
            (i != null && (i.caption = ""), (this._inputTextNeedsClearing = !1));
          }
          let t = this._window?.findChildByName("phone_number_input");
          t != null && (t.textColor = 0);
          break;
      }
    e.type === sr.const_900 &&
      r.name === "phone_number_input" &&
      ((this._window?.findChildByName("phone_number_input")?.caption ?? "").length > 0
        ? this._window?.findChildByName("ok_button")?.enable()
        : this._window?.findChildByName("ok_button")?.disable());
  }, "_r64e450f8ad70fb");
}
