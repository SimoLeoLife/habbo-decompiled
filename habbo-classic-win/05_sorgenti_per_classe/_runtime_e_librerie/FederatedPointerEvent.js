// Estratto da HabboAirLauncher.deobf.js, riga 5237.

class extends FederatedMouseEvent {
      static {
        n(this, "FederatedPointerEvent");
      }
      constructor() {
        (super(...arguments), (this.width = 0), (this.height = 0), (this.isPrimary = !1));
      }
      getCoalescedEvents() {
        return this.type === "pointermove" || this.type === "mousemove" || this.type === "touchmove"
          ? [this]
          : [];
      }
      getPredictedEvents() {
        throw new Error("getPredictedEvents is not supported!");
      }
    }
