// Estratto da HabboAirLauncher.deobf.js, riga 113108.

class {
    static {
      n(this, "_ibeba55fc6060f2");
    }
    static {
      wdt(this, "_ibeba55fc6060f2");
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
