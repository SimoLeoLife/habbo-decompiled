// Estratto da HabboAirLauncher.deobf.js, riga 59194.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/runtime/exceptions/Exception.as
// Nome offuscato: _i910756d2bbad1a

class a extends Error {
  static {
    n(this, "Exception");
  }
  _id;
  _cause;
  constructor(e, r = 0, t = null) {
    (super(e), (this.name = _iad1dc21ca35e21(this)), (this._id = r), (this._cause = t));
  }
  get id() {
    return this._id;
  }
  get cause() {
    return this._cause;
  }
  toString() {
    let e = `${_iad1dc21ca35e21(this)}: ${this.message}`;
    return (
      this._cause != null && ((e += ", caused by "), (e += this._cause.toString())),
      e
    );
  }
  static getChainedStackTrace(e) {
    let r = null;
    for (; e != null;) {
      let t = e.getStackTrace?.() ?? e.stack ?? null;
      (t != null &&
        (r == null
          ? (r = t)
          : ((r += `
caused by `),
            (r += t))),
        (e = e instanceof a ? e.cause : null));
    }
    return r;
  }
}
