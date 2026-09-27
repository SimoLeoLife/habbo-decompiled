// Extracted from HabboAirLauncher.deobf.js, line 113108.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ibeba55fc6060f2

class {
    static {
      n(this, "UnkMessageParser_SSISS_beba55");
    }
    static {
      wdt(this, "UnkMessageParser_SSISS_beba55");
    }
    title = "";
    message = "";
    parameters = [];
    flush() {
      return !0;
    }
    parse(e) {
      ((this.title = e.readString()), (this.message = e.readString()), (this.parameters = []));
      let r = e.readInteger();
      for (let t = 0; t < r; t++)
        (this.parameters.push(e.readString()), this.parameters.push(e.readString()));
      return !0;
    }
  }
