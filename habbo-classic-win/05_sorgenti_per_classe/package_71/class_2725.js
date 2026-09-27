// Extracted from HabboAirLauncher.deobf.js, line 102335.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_71/class_2725.as
// Obfuscated name: _i29dfce91515fac

class {
    static {
      n(this, "class_2725");
    }
    static {
      CXr(this, "class_2725");
    }
    _users = [];
    get userUpdateCount() {
      return this._users.length;
    }
    flush() {
      return ((this._users = []), !0);
    }
    getUserUpdateData(e) {
      return e < 0 || e >= this.userUpdateCount ? null : (this._users[e] ?? null);
    }
    parse(e) {
      if (!e) return !1;
      let r = e.readInteger();
      for (let t = 0; t < r; t++) {
        let i = e.readInteger(),
          s = e.readInteger(),
          o = e.readInteger(),
          d = Number(e.readString()),
          c = 0,
          f = e.readInteger(),
          l = e.readInteger(),
          b = e.readInteger(),
          _ = e.readString(),
          h = !1,
          p = (f % 8) * 45,
          m = (l % 8) * 45,
          v = [],
          w = 0,
          I = 0,
          C = 0,
          W = !1,
          R = !1;
        for (let T of _.split("/")) {
          let S = T.split(" "),
            z = String(S[0] ?? ""),
            K = "";
          if (z !== "") {
            if ((z === "wf" && (R = !0), S.length >= 2))
              switch (((K = String(S[1] ?? "")), z)) {
                case "mv": {
                  let $ = K.split(",");
                  $.length >= 3 &&
                    ((w = Number.parseInt($[0] ?? "0", 10)),
                    (I = Number.parseInt($[1] ?? "0", 10)),
                    (C = Number($[2] ?? "0")),
                    (W = !0));
                  break;
                }
                case "sit":
                  ((c = Number(K)), S.length >= 3 && (h = S[2] === "1"));
                  break;
                case "lay":
                  c = Math.abs(Number(K));
                  break;
              }
            v.push(new class_2654(z, K));
          }
        }
        this._users.push(new class_3551(i, s, o, d, c, m, p, w, I, C, W, h, v, R, b));
      }
      return !0;
    }
  }
