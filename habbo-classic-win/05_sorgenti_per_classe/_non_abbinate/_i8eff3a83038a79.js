// Estratto da HabboAirLauncher.deobf.js, riga 56399.

class {
    static {
      n(this, "_i8eff3a83038a79");
    }
    async _r11cdcf322baa2c(e, r) {
      let t = _i234786fc8c38b8(e),
        i = await fetch(t, { signal: r }),
        s = await i.arrayBuffer();
      return {
        url: e,
        ok: i.ok,
        status: i.status,
        contentType: i.headers.get("content-type"),
        bytes: new Uint8Array(s),
      };
    }
  }
