// Estratto da HabboAirLauncher.deobf.js, riga 82912.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_71/class_4255.as
// Nome offuscato: _i26badd1111b047

class a {
    static {
      n(this, "class_4255");
    }
    static {
      Zwr(this, "class_4255");
    }
    static parseObjectData(e) {
      if (!e) return null;
      let r = e.readInteger(),
        t = new class_2708(r),
        i = e.readInteger();
      ((t.type = i),
        (t.x = e.readInteger()),
        (t.y = e.readInteger()),
        (t.dir = (e.readInteger() % 8) * 45),
        (t.z = Number(e.readString())),
        (t._rea41d73d88249a = Number(e.readString())),
        (t.extra = e.readInteger()),
        (t.data = a.parseStuffData(e)));
      let s = Number.parseFloat(t.data.getLegacyString());
      return (
        Number.isNaN(s) || (t.state = Number.parseInt(t.data.getLegacyString(), 10)),
        (t.expiryTime = e.readInteger()),
        (t.usagePolicy = e.readInteger()),
        (t.ownerId = e.readInteger()),
        i < 0 && (t._ra52299348b41b0 = e.readString()),
        t
      );
    }
    static parseStuffData(e) {
      let r = e.readInteger(),
        t = _i5205b2079e8037._r41d3e1274ff5f9(r);
      if (!t) throw new Error(`Unsupported stuff data type: ${r}`);
      return (t._rf86aa9dd0d70c1(e), t);
    }
  }
