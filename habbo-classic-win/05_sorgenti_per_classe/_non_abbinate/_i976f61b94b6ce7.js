// Estratto da HabboAirLauncher.deobf.js, riga 133074.

class extends kc {
  static {
    n(this, "_i976f61b94b6ce7");
  }
  get menu() {
    let e = this.parent;
    for (; e !== null;) {
      if (_ie7c01149f30b6b_(e)) return e;
      e = e.parent;
    }
    return null;
  }
  get value() {
    return this;
  }
  set value(e) {}
}
