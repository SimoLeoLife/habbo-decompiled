// Extracted from HabboAirLauncher.deobf.js, line 102423.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_71/class_2279.as
// Obfuscated name: _i41b1626d85776d

class {
    static {
      n(this, "class_2279");
    }
    static {
      BXr(this, "class_2279");
    }
    _users = [];
    flush() {
      return ((this._users = []), !0);
    }
    getUserCount() {
      return this._users.length;
    }
    getUser(e) {
      if (e < 0 || e >= this.getUserCount()) return null;
      let r = this._users[e] ?? null;
      return (r && r.setReadOnly(), r);
    }
    parse(e) {
      this._users = [];
      let r = e.readInteger();
      for (let t = 0; t < r; t++) {
        let i = e.readInteger(),
          s = e.readString(),
          o = e.readString(),
          d = e.readString(),
          c = e.readInteger(),
          f = e.readInteger(),
          l = e.readInteger(),
          b = e.readString(),
          _ = e.readInteger(),
          h = e.readInteger(),
          p = new class_2233(c);
        if (
          ((p.dir = _),
          (p.name = s),
          (p.custom = o),
          (p.x = f),
          (p.y = l),
          (p.z = Number(b)),
          this._users.push(p),
          h === 1)
        ) {
          ((p.webID = i),
            (p.userType = RoomObjectTypeEnum.OBJECT_TYPE_USER),
            (p.sex = this.resolveSex(e.readString())),
            (p.groupID = `${e.readInteger()}`),
            (p.groupStatus = e.readInteger()),
            (p.groupName = e.readString()));
          let m = e.readString();
          (m !== "" && (d = this.convertSwimFigure(m, d, p.sex)),
            (p.figure = d),
            (p.achievementScore = e.readInteger()),
            (p.isModerator = e.readBoolean()),
            (p.badgesRank = e.readInteger()));
        } else if (h === 2)
          ((p.userType = RoomObjectTypeEnum.OBJECT_TYPE_PET),
            (p.figure = d),
            (p.webID = i),
            (p.subType = e.readInteger().toString()),
            (p.ownerId = e.readInteger()),
            (p.ownerName = e.readString()),
            (p.rarityLevel = e.readInteger()),
            (p.hasSaddle = e.readBoolean()),
            (p.isRiding = e.readBoolean()),
            (p.canBreed = e.readBoolean()),
            (p.canHarvest = e.readBoolean()),
            (p.canRevive = e.readBoolean()),
            (p.hasBreedingPermission = e.readBoolean()),
            (p.petLevel = e.readInteger()),
            (p.petPosture = e.readString()));
        else if (h === 3)
          ((p.userType = RoomObjectTypeEnum.const_543),
            (p.webID = i),
            (p.figure = d.indexOf("/") === -1 ? d : "hr-100-.hd-180-1.ch-876-66.lg-270-94.sh-300-64"),
            (p.sex = class_2233.const_903));
        else if (h === 4) {
          ((p.userType = RoomObjectTypeEnum.const_965),
            (p.webID = i),
            (p.sex = this.resolveSex(e.readString())),
            (p.figure = d),
            (p.ownerId = e.readInteger()),
            (p.ownerName = e.readString()));
          let m = e.readInteger();
          if (m > 0) {
            let v = [];
            for (let w = 0; w < m; w++) v.push(e.readShort());
            p.botSkills = v;
          }
        }
      }
      return !0;
    }
    resolveSex(e) {
      return e.substring(0, 1).toLowerCase() === "f" ? class_2233.const_409 : class_2233.const_903;
    }
    convertSwimFigure(e, r, t) {
      let i = r.split("."),
        s = 1,
        o = 1,
        d = 1,
        c = 1e4;
      for (let _ of i) {
        let h = _.split("-");
        h.length > 2 && h[0] === "hd" && (s = Number.parseInt(h[2] ?? "1", 10));
      }
      let f = [
          "238,238,238",
          "250,56,49",
          "253,146,160",
          "42,199,210",
          "53,51,44",
          "239,255,146",
          "198,255,152",
          "255,146,90",
          "157,89,126",
          "182,243,255",
          "109,255,51",
          "51,120,201",
          "255,182,49",
          "223,161,233",
          "249,251,50",
          "202,175,143",
          "197,198,197",
          "71,98,61",
          "138,131,97",
          "255,140,51",
          "84,198,39",
          "30,108,153",
          "152,79,136",
          "119,200,255",
          "255,192,142",
          "60,75,135",
          "124,44,71",
          "215,255,227",
          "143,63,28",
          "255,99,147",
          "31,155,121",
          "253,255,51",
        ],
        l = e.split("=");
      if (l.length > 1) {
        let h = String(l[1]).split("/")[1] ?? "";
        d = t === "F" ? 10010 : 10011;
        let p = f.indexOf(h);
        o = c + p + 1;
      }
      let b = `.bds-10001-${s}.ss-${d}-${o}`;
      return r + b;
    }
    static convertOldPetFigure(e) {
      let r = [
          "FF7B3A",
          "FF9763",
          "FFCDB3",
          "F59500",
          "FBBD5C",
          "FEE4B2",
          "EDD400",
          "F5E759",
          "FBF8B1",
          "84A95F",
          "B0C993",
          "DBEFC7",
          "65B197",
          "91C7B5",
          "C5EDDE",
          "7F89B2",
          "98A1C5",
          "CAD2EC",
          "A47FB8",
          "C09ED5",
          "DBC7E9",
          "BD7E9D",
          "DA9DBD",
          "ECC6DB",
          "DD7B7D",
          "F08B90",
          "F9BABF",
          "ABABAB",
          "D4D4D4",
          "FFFFFF",
          "D98961",
          "DFA281",
          "F1D2C2",
          "D5B35F",
          "DAC480",
          "FCFAD3",
          "EAA7AF",
          "86BC40",
          "E8CE25",
          "8E8839",
          "888F67",
          "5E9414",
          "84CE84",
          "96E75A",
          "88E70D",
          "B99105",
          "C8D71D",
          "838851",
          "C08337",
          "83A785",
          "E6AF26",
          "ECFF99",
          "94FFF9",
          "ABC8E5",
          "F2E5CC",
          "D2FF00",
        ],
        t = e.split(" ");
      if (t.length < 3) return "";
      let i = Number.parseInt(t[0] ?? "0", 10),
        s = Number.parseInt(t[1] ?? "0", 10) + 1,
        o = String(t[2] ?? "");
      o = o.substring(o.length - 6);
      let c = i <= 1 ? 25 * i + s : 64,
        f = r.indexOf(o.toUpperCase()) + 1;
      return `phd-${c}-${f}.pbd-${c}-${f}.ptl-${c}-${f}`;
    }
  }
