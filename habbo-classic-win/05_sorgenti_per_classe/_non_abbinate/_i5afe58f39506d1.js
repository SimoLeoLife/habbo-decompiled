// Estratto da HabboAirLauncher.deobf.js, riga 68754.

class a {
  static {
    n(this, "_i5afe58f39506d1");
  }
  static _r93843db4437256 = [
    "p",
    "e",
    ",",
    "i",
    '"',
    "r",
    "",
    "m",
    "o",
    "}",
    "n",
    "g",
    "",
    "{",
    "x",
    "l",
    ":",
    "q",
    "a",
    "c",
    ":",
    "s",
    "o",
    " ",
    "(",
    "",
    "p",
    "t",
    "i",
    "v",
    "h",
    "f",
    "",
    " ",
    "c",
    "d",
    "",
    "k",
    ")",
    "s",
    "z",
    "",
    "y",
    "w",
    "b",
    "-",
    "t",
    "j",
    "",
    "u",
    ":",
    ".",
    " ",
    "a",
    '"',
    '"',
    "e",
    "m",
    " ",
    ",",
  ];
  static _rcca6fe39e90312(e, r) {
    for (; e.length < r;) e = `0${e}`;
    return e;
  }
  static _rdd45e4414df665(e) {
    let r = /<font[^>]*>/gi;
    e = e.replace(r, "");
    let t = /<\/font>/gi;
    return ((e = e.replace(t, "")), e);
  }
  static trim(e) {
    return e ? e.replace(/^\s+|\s+$/gs, "") : "";
  }
  static _r9d6c3ae97d85bc(e) {
    return e ? e.replace(/ /gs, "") : "";
  }
  static _reb2a9a6d93df59(e) {
    return e.toLowerCase().replace(/\W/g, "");
  }
  static _rec62c08ba337fc(e) {
    return e ?? "";
  }
  static isEmpty(e) {
    return e == null || e.length === 0;
  }
  static getJSONValue(e) {
    return e == null ? !0 : a.trim(e).length === 0;
  }
  static _r901c1028bd9df1(e, ...r) {
    let t = "";
    for (let i = 0; i < r.length; i++) t += a._r93843db4437256[r[i] - e];
    return t;
  }
}
