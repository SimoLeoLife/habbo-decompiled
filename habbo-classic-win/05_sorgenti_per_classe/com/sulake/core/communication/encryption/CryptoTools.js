// Estratto da HabboAirLauncher.deobf.js, riga 72653.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/communication/encryption/CryptoTools.as
// Nome offuscato: _ibe9e79c34231b8

class a {
    static {
      n(this, "CryptoTools");
    }
    static {
      v8r(this, "CryptoTools");
    }
    _r56ef3f13b42511(e, r = 16) {
      return a._r56ef3f13b42511(e, r);
    }
    _r57f72db8bf21e4(e, r = !1) {
      return a._r57f72db8bf21e4(e, r);
    }
    _r003eb0f0adfe9a(e) {
      return a._r003eb0f0adfe9a(e);
    }
    hexStringToByteArray(e) {
      return a.hexStringToByteArray(e);
    }
    _rfc45b992e0dc6b(e) {
      return a._rfc45b992e0dc6b(e);
    }
    static _r003eb0f0adfe9a(e) {
      e.position = 0;
      let r = "";
      for (; e.bytesAvailable > 0;) r += String.fromCharCode(e.readByte());
      return r;
    }
    static _rfc45b992e0dc6b(e) {
      let r = new re();
      for (let t = 0; t < e.length; t++) r.writeByte(e.charCodeAt(t));
      return ((r.position = 0), r);
    }
    static _r57f72db8bf21e4(e, r = !1) {
      e.position = 0;
      let t = "";
      for (; e.bytesAvailable > 0;) {
        let i = e.readUnsignedByte(),
          s = i >> 4,
          o = i & 15;
        ((t += s.toString(16)), (t += o.toString(16)));
      }
      return r ? t.toUpperCase() : t;
    }
    static hexStringToByteArray(e) {
      let r = new re(),
        t = e.length % 2 === 0 ? e : `0${e}`;
      for (let i = 0; i < t.length - 1; i += 2) {
        let s = Number.parseInt(t.charAt(i), 16),
          o = Number.parseInt(t.charAt(i + 1), 16);
        r.writeByte((s << 4) | o);
      }
      return r;
    }
    static _r56ef3f13b42511(e, r = 16) {
      return "";
    }
    static fletcher100(e, r, t) {
      let i = r,
        s = t,
        o = e.toUint8Array();
      for (let d = 0; d < o.length; d++) ((i = (i + o[d]) % 255), (s = (i + s) % 255));
      return (i + s) % 100;
    }
  }
