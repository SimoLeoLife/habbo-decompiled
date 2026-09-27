// Estratto da HabboAirLauncher.deobf.js, riga 7811.

class {
      static {
        n(this, "FilterPipe");
      }
      constructor(e) {
        this._renderer = e;
      }
      push(e, r, t) {
        (this._renderer.renderPipes.batch.break(t),
          t.add({
            renderPipeId: "filter",
            canBundle: !1,
            action: "pushFilter",
            container: r,
            filterEffect: e,
          }));
      }
      pop(e, r, t) {
        (this._renderer.renderPipes.batch.break(t),
          t.add({ renderPipeId: "filter", action: "popFilter", canBundle: !1 }));
      }
      execute(e) {
        e.action === "pushFilter"
          ? this._renderer.filter.push(e)
          : e.action === "popFilter" && this._renderer.filter.pop();
      }
      destroy() {
        this._renderer = null;
      }
    }
