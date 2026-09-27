// Extracted from HabboAirLauncher.deobf.js, line 13381.

class a extends Texture {
      static {
        n(this, "RenderTexture");
      }
      static create(e) {
        let { dynamic: r, ...t } = e;
        return new a({ source: new Wi(t), dynamic: r ?? !1 });
      }
      resize(e, r, t) {
        return (this.source.resize(e, r, t), this);
      }
    }
