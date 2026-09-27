// Estratto da HabboAirLauncher.deobf.js, riga 5258.

class extends FederatedMouseEvent {
      static {
        n(this, "FederatedWheelEvent");
      }
      constructor() {
        (super(...arguments),
          (this.DOM_DELTA_PIXEL = 0),
          (this.DOM_DELTA_LINE = 1),
          (this.DOM_DELTA_PAGE = 2));
      }
    }
