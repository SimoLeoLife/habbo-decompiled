// Estratto da HabboAirLauncher.deobf.js, riga 338672.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/sound/trax/TraxData.as
// Nome offuscato: _ie6c252e54bec82

class {
  static {
    n(this, "TraxData");
  }
  _channels = [];
  _r07a0551b5bef8b = new B();
  constructor(e) {
    let r = e.split(":"),
      t = String(r[r.length - 1] ?? ""),
      i;
    if (t.indexOf("meta") !== -1) {
      let s = t.split(";");
      for (let o of s) {
        let [d = "", c = ""] = String(o).split(",");
        this._r07a0551b5bef8b.add(d, c);
      }
      i = r.slice(0, r.length - 1);
    } else i = r;
    for (let s = 0; s < i.length / 2; s++) {
      let o = i[s * 2]?.toString() ?? "";
      if (o.length === 0) continue;
      let d = Number.parseInt(o, 10),
        c = (i[s * 2 + 1]?.toString() ?? "").split(";"),
        f = new TraxChannel(d);
      for (let l of c) {
        let b = l.toString().split(",");
        if (b.length !== 2) return;
        let _ = Number.parseInt(b[0] ?? "0", 10),
          h = Number.parseInt(b[1] ?? "0", 10);
        f.addChannelItem(new TraxChannelItem(_, h));
      }
      this._channels.push(f);
    }
  }
  get channels() {
    return this._channels;
  }
  getSampleIds() {
    let e = [];
    for (let r of this._channels)
      for (let t = 0; t < r.itemCount; t++) {
        let i = r.getItem(t);
        i != null && !e.includes(i.id) && e.push(i.id);
      }
    return e;
  }
  get hasMetaData() {
    return this._r07a0551b5bef8b.getValue("meta") != null;
  }
  get metaCutMode() {
    return this._r07a0551b5bef8b.getValue("c") === "1";
  }
  get metaTempo() {
    return Number(this._r07a0551b5bef8b.getValue("t") ?? 0);
  }
}
