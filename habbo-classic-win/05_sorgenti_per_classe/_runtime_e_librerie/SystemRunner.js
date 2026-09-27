// Estratto da HabboAirLauncher.deobf.js, riga 10409.

class {
      static {
        n(this, "SystemRunner");
      }
      constructor(e) {
        ((this.items = []), (this._name = e));
      }
      emit(e, r, t, i, s, o, d, c) {
        let { name: f, items: l } = this;
        for (let b = 0, _ = l.length; b < _; b++) l[b][f](e, r, t, i, s, o, d, c);
        return this;
      }
      add(e) {
        return (e[this._name] && (this.remove(e), this.items.push(e)), this);
      }
      remove(e) {
        let r = this.items.indexOf(e);
        return (r !== -1 && this.items.splice(r, 1), this);
      }
      contains(e) {
        return this.items.indexOf(e) !== -1;
      }
      removeAll() {
        return ((this.items.length = 0), this);
      }
      destroy() {
        (this.removeAll(), (this.items = null), (this._name = null));
      }
      get empty() {
        return this.items.length === 0;
      }
      get name() {
        return this._name;
      }
    }
