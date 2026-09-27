// Estratto da HabboAirLauncher.deobf.js, riga 26737.

class extends r {
      static {
        n(this, "NodeError");
      }
      constructor() {
        (super(),
          Object.defineProperty(this, "message", {
            value: e.apply(this, arguments),
            writable: !0,
            configurable: !0,
          }),
          (this.name = `${this.name} [${a}]`),
          this.stack,
          delete this.name);
      }
      get code() {
        return a;
      }
      set code(i) {
        Object.defineProperty(this, "code", { configurable: !0, enumerable: !0, value: i, writable: !0 });
      }
      toString() {
        return `${this.name} [${a}]: ${this.message}`;
      }
    }
