// Estratto da HabboAirLauncher.deobf.js, riga 82604.

class {
  static {
    n(this, "_i5205b2079e8037");
  }
  static _r41d3e1274ff5f9(e) {
    let r = e & 255,
      t = null;
    switch (r) {
      case mi.FORMAT_KEY:
        t = new mi();
        break;
      case Bc.FORMAT_KEY:
        t = new Bc();
        break;
      case ao.FORMAT_KEY:
        t = new ao();
        break;
      case V6.FORMAT_KEY:
        t = new V6();
        break;
      case _iae7a134fea2fc8._r30dac6c60b5fd8:
        t = new EmptyStuffData();
        break;
      case _iae7a134fea2fc8._r048d3f6bd54844:
        t = new h9();
        break;
      case _iae7a134fea2fc8._r1f35d7dd2ed16d:
        t = new SW();
        break;
      case _iae7a134fea2fc8._r5f45ac3988c93d:
        t = new Eoe();
        break;
    }
    return (t != null && (t.flags = e & 65280), t);
  }
}
