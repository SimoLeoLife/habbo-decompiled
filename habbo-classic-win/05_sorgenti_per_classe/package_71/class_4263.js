// Extracted from HabboAirLauncher.deobf.js, line 100722.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_71/class_4263.as
// Obfuscated name: _iaf89a78a8b4aa0

class {
    static {
      n(this, "class_4263");
    }
    static {
      Bzr(this, "class_4263");
    }
    static parseItemData(e) {
      let r = Number.parseInt(e.readString(), 10),
        t = e.readInteger(),
        i = e.readString(),
        s = e.readString(),
        o = e.readInteger(),
        d = e.readInteger(),
        c = e.readInteger(),
        f = 0;
      Number.isNaN(Number.parseFloat(s)) || (f = Number.parseInt(s, 10));
      let l;
      if (i.indexOf(":") === 0) {
        l = new class_2663(r, t, !1);
        let b = i.split(" ");
        if (b.length >= 3) {
          let _ = String(b[0]),
            h = String(b[1]),
            p = String(b[2]);
          if (_.length > 3 && h.length > 2) {
            ((_ = _.substring(3)), (h = h.substring(2)));
            let m = _.split(",");
            if (m.length >= 2) {
              let v = h.split(",");
              v.length >= 2 &&
                ((l._r7020b3fd6fb75f = Number.parseInt(m[0] ?? "0", 10)),
                (l.wallX = Number.parseInt(m[1] ?? "0", 10)),
                (l.localX = Number.parseInt(v[0] ?? "0", 10)),
                (l.localY = Number.parseInt(v[1] ?? "0", 10)),
                (l.dir = p),
                (l.data = s),
                (l.state = f));
            }
          }
        }
      } else {
        l = new class_2663(r, t, !0);
        let b = i.split(" ");
        if (b.length >= 2) {
          let _ = String(b[0]);
          _ = _ === "rightwall" || _ === "frontwall" ? "r" : "l";
          let p = String(b[1]).split(",");
          p.length >= 3 &&
            ((l.y = Number.parseFloat(p[0] ?? "0")),
            (l.z = Number.parseFloat(p[1] ?? "0")),
            (l.dir = _),
            (l.data = s),
            (l.state = f));
        }
      }
      return ((l.usagePolicy = d), (l.ownerId = c), (l.secondsToExpiration = o), l);
    }
  }
