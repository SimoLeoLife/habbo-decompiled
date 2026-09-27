// Estratto da HabboAirLauncher.deobf.js, riga 325468.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/poll/PollSession.as
// Nome offuscato: _ic5a4e33935af5e

class {
  constructor(e, r) {
    this._id = e;
    this._rcdd3c766114317 = r;
  }
  static {
    n(this, "PollSession");
  }
  _r0b1d60dde99ca8 = null;
  _r249c738fda0786 = null;
  _endMessage = "";
  _disposed = !1;
  get id() {
    return this._id;
  }
  get disposed() {
    return this._disposed;
  }
  start() {}
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      this._r0b1d60dde99ca8?.dispose(),
      (this._r0b1d60dde99ca8 = null),
      this._r249c738fda0786?.dispose(),
      (this._r249c738fda0786 = null),
      (this._rcdd3c766114317 = null));
  }
  showOffer(e, r) {
    (this.hideOffer(),
      (this._r0b1d60dde99ca8 = new Ree(this._id, e, r, this._rcdd3c766114317)),
      this._r0b1d60dde99ca8.start());
  }
  hideOffer() {
    this._r0b1d60dde99ca8 instanceof Ree &&
      (this._r0b1d60dde99ca8.disposed || this._r0b1d60dde99ca8.dispose(), (this._r0b1d60dde99ca8 = null));
  }
  showContent(e, r, t, i) {
    (this.hideOffer(),
      this.hideContent(),
      (this._endMessage = r),
      (this._r249c738fda0786 = new PollContentDialog(this._id, e, t, this._rcdd3c766114317, i)),
      this._r249c738fda0786.start());
  }
  hideContent() {
    this._r249c738fda0786 instanceof PollContentDialog &&
      (this._r249c738fda0786.disposed || this._r249c738fda0786.dispose(), (this._r249c738fda0786 = null));
  }
  showThanks() {
    this._rcdd3c766114317?.windowManager?.alert("${poll_thanks_title}", this._endMessage, 0, (e, r) => {
      e.dispose();
    });
  }
}
