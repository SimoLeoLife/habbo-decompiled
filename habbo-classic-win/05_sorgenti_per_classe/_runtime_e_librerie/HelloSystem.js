// Estratto da HabboAirLauncher.deobf.js, riga 13851.

class {
      static {
        n(this, "HelloSystem");
      }
      constructor(e) {
        this._renderer = e;
      }
      init(e) {
        if (e.hello) {
          let r = this._renderer.name;
          (this._renderer.type === Jo.WEBGL && (r += ` ${this._renderer.context.webGLVersion}`), sayHello(r));
        }
      }
    }
