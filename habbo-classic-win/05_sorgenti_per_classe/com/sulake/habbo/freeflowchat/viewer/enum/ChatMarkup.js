// Estratto da HabboAirLauncher.deobf.js, riga 203769.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/freeflowchat/viewer/enum/ChatMarkup.as
// Nome offuscato: _i61a875a6ab157d

class a {
  static {
    n(this, "ChatMarkup");
  }
  static COLOUR_ARRAY = [
    ["red", 9115929],
    ["cyan", 32639],
    ["blue", 19609],
    ["green", 32768],
    ["purple", 4980812],
  ];
  static _r42299dc0f2a101 = [
    ["red", 16738922],
    ["cyan", 5233370],
    ["blue", 6269183],
    ["green", 6738794],
    ["purple", 11767039],
  ];
  static _r9ef1132832494e = a.COLOUR_ARRAY.map(([e]) => e);
  static getColourArray(e) {
    return e === 16777215 ? a._r42299dc0f2a101 : a.COLOUR_ARRAY;
  }
  static _rcfbeb54df28afc(e) {
    return `#${e.toString(16).padStart(6, "0").toUpperCase()}`;
  }
  static _r90edec1d047578(e, r) {
    for (let [t, i] of a.getColourArray(r)) if (t === e) return a._rcfbeb54df28afc(i);
    return null;
  }
  static applyColourToChat(e, r) {
    for (let [t, i] of a.getColourArray(r))
      if (e.indexOf(`@${t}@`) === 0) {
        let s = e.substring(t.length + 2);
        return (
          s.charAt(0) === " " && (s = s.substring(1)),
          `<font color="${a._rcfbeb54df28afc(i)}">${s}</font>`
        );
      }
    return e;
  }
  static tokenize(e) {
    let r = [],
      t = "",
      i = !1;
    for (let s = 0; s < e.length; s++) {
      let o = e.charAt(s);
      o === "["
        ? (t.length > 0 && (r.push(t), (t = "")), (i = !0), (t += o))
        : o === "]" && i
          ? ((t += o), r.push(t), (t = ""), (i = !1))
          : (t += o);
    }
    return (t.length > 0 && r.push(t), r);
  }
  static applyToElements(e, r) {
    if (e.length === 0) return "";
    let t = a.tokenize(e),
      i = [];
    for (let s = 0; s < t.length; s++) {
      let o = t[s];
      if (
        o.charAt(0) === "[" &&
        o.charAt(o.length - 1) === "]" &&
        (o.charAt(1) === "/" || (o.length > 2 && o.length <= 10))
      ) {
        let d = o.substring(1, o.length - 1).toLowerCase();
        if (d.charAt(0) === "/") {
          if (((d = d.substring(1)), i.length > 0 && i[i.length - 1]?.tag === d)) {
            let f = i.pop();
            if (d === "b" || d === "i" || d === "u") ((t[f.index] = `<${d}>`), (t[s] = `</${d}>`));
            else {
              let l = a._r90edec1d047578(d, r);
              l != null && ((t[f.index] = `<font color="${l}">`), (t[s] = "</font>"));
            }
          }
        } else
          (d === "b" || d === "i" || d === "u" || a._r9ef1132832494e.includes(d)) &&
            i.push({ tag: d, index: s });
      }
    }
    return t.join("");
  }
}
