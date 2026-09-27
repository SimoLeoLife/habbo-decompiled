// Estratto da HabboAirLauncher.deobf.js, riga 5174.

class extends V5 {
      static {
        n(this, "FederatedMouseEvent");
      }
      constructor() {
        (super(...arguments),
          (this.client = new Ha()),
          (this.movement = new Ha()),
          (this.offset = new Ha()),
          (this.global = new Ha()),
          (this.screen = new Ha()));
      }
      get clientX() {
        return this.client.x;
      }
      get clientY() {
        return this.client.y;
      }
      get x() {
        return this.clientX;
      }
      get y() {
        return this.clientY;
      }
      get movementX() {
        return this.movement.x;
      }
      get movementY() {
        return this.movement.y;
      }
      get offsetX() {
        return this.offset.x;
      }
      get offsetY() {
        return this.offset.y;
      }
      get globalX() {
        return this.global.x;
      }
      get globalY() {
        return this.global.y;
      }
      get screenX() {
        return this.screen.x;
      }
      get screenY() {
        return this.screen.y;
      }
      getLocalPosition(e, r, t) {
        return e.worldTransform.applyInverse(t || this.global, r);
      }
      getModifierState(e) {
        return "getModifierState" in this.nativeEvent && this.nativeEvent.getModifierState(e);
      }
      initMouseEvent(e, r, t, i, s, o, d, c, f, l, b, _, h, p, m) {
        throw new Error("Method not implemented.");
      }
    }
