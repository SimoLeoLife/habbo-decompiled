// Estratto da HabboAirLauncher.deobf.js, riga 62628.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/hurlant/util/class_35.as

class a {
    static {
      n(this, "Hex");
    }
    static toArray(e) {
      let r = e.replace(/^0x|\s|:/gm, ""),
        t = new re(),
        i = (r.length & 1) === 1 ? `0${r}` : r;
      for (let s = 0; s < i.length; s += 2) t.writeByte(Number.parseInt(i.substring(s, s + 2), 16));
      return ((t.position = 0), t);
    }
    static fromArray(e, r = !1) {
      let t = e.toUint8Array(),
        i = "";
      for (let s = 0; s < t.length; s++)
        ((i += `0${(t[s] ?? 0).toString(16)}`.slice(-2)), r && s < t.length - 1 && (i += ":"));
      return i;
    }
    static toString(e, r = "utf-8") {
      return N6r.decode(a.toArray(e).toUint8Array());
    }
    static toRawString(e) {
      return a.toString(e, "iso-8859-1");
    }
    static fromString(e, r = !1, t = "utf-8") {
      return a.fromArray(re.compress(L6r.encode(e)), r);
    }
    static fromRawString(e, r = !1) {
      return a.fromString(e, r, "iso-8859-1");
    }
  }
