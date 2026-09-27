// Estratto da HabboAirLauncher.deobf.js, riga 161030.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetRoomObjectPlaceEvent.as
// Nome offuscato: _ife7878490e2a23

class extends RoomWidgetRoomObjectUpdateEvent {
  constructor(r, t, i, s, o, d, c, f, l, b, _, h, p, m, v = !1, w = !1) {
    super(r, t, i, s, v, w);
    this._r8a8bd2d04c661f = o;
    this.x = d;
    this.y = c;
    this.z = f;
    this.direction = l;
    this._r176bfeda3ea21e = b;
    this._rc4f9efa2c236ab = _;
    this._r8b4764feb43833 = h;
    this._r669a9820d77b11 = p;
    this._r07cbd1ea4ec403 = m;
  }
  static {
    n(this, "RoomWidgetRoomObjectPlaceEvent");
  }
  static const_751 = "RWROUE_OBJECT_PLACED";
}
