// Extracted from HabboAirLauncher.deobf.js, line 113686.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/outgoing/camera/class_2040.as
// Obfuscated name: _i5652e77340198c

class a {
    static {
      n(this, "class_2040");
    }
    static {
      gct(this, "class_2040");
    }
    var_5784;
    var_5760;
    var_5795;
    var_5759 = "[]";
    var_2440;
    zoomLevel = 1;
    _r9022d051fb051f;
    time;
    _data = [];
    constructor(e, r, t, i, s) {
      ((this.var_5784 = this.getRoomPlanesDataArray(e)),
        (this.var_5760 = r),
        (this.var_5795 = t),
        (this.var_2440 = i),
        (this._r9022d051fb051f = s),
        (this.time = Date.now()));
    }
    _rca12cc817d6209(e) {
      this.var_5759 = e;
    }
    _rff22f2c57b9d83(e) {
      this.zoomLevel = e;
    }
    compressData() {
      let e = JSON.stringify(this.var_5784, (c, f) => {
          if (!(c === "masks" && Array.isArray(f) && f.length === 0)) return f;
        }),
        r =
          a.planesString() +
          e +
          a.spritesString() +
          this.var_5760 +
          a.modifiersString() +
          this.var_5795 +
          a.filtersString() +
          this.var_5759 +
          a.roomIdString() +
          this.var_2440;
      this.zoomLevel !== 1 && (r += a.zoomString() + this.zoomLevel);
      let t = this.time % 100;
      this.time -= t;
      let i = ((this.time / 100) % 23) + this._r9022d051fb051f;
      r += a.statusString() + i;
      let s = r.length;
      s = (s + (this.time / 100) * 17) % 1493;
      let o = z_._rfc45b992e0dc6b(r),
        d = z_.fletcher100(o, s, this.var_2440);
      ((r += a.timestampString() + (this.time + d)),
        (r += a._r5dff98fa39efb2() + (t + 13) * (s + 29)),
        (r += a._r14b008b4d946f3()),
        (this._data = [a.deflate(r)]));
    }
    isSendable() {
      return (this._data.length === 0 && this.compressData(), !0);
    }
    getMessageArray() {
      if (this._data.length === 0)
        throw new Al("Render room message sending attempt before packData() is called.");
      return this._data;
    }
    dispose() {
      this._data = [];
    }
    static planesString() {
      return ua._r901c1028bd9df1(
        142,
        178,
        155,
        183,
        194,
        196,
        168,
        157,
        195,
        152,
        143,
        163,
        197,
        154,
        200,
        148,
        158,
        148,
        200,
      );
    }
    static spritesString() {
      return ua._r901c1028bd9df1(
        113,
        119,
        172,
        167,
        152,
        139,
        154,
        118,
        141,
        140,
        125,
        169,
        152,
        119,
        168,
        165,
        129,
        146,
      );
    }
    static modifiersString() {
      return ua._r901c1028bd9df1(
        129,
        188,
        141,
        133,
        186,
        137,
        164,
        132,
        160,
        132,
        185,
        134,
        168,
        183,
        162,
        149,
        181,
        135,
      );
    }
    static filtersString() {
      return ua._r901c1028bd9df1(
        131,
        190,
        163,
        186,
        162,
        159,
        146,
        177,
        172,
        172,
        132,
        136,
        170,
        186,
        164,
        151,
        164,
      );
    }
    static roomIdString() {
      return ua._r901c1028bd9df1(122, 181, 177, 127, 144, 130, 147, 129, 125, 157, 126, 145, 142, 145, 170);
    }
    static zoomString() {
      return ua._r901c1028bd9df1(
        126,
        132,
        128,
        180,
        166,
        134,
        158,
        167,
        151,
        148,
        133,
        132,
        181,
        159,
        146,
        158,
        159,
      );
    }
    static statusString() {
      return ua._r901c1028bd9df1(
        118,
        124,
        120,
        172,
        157,
        164,
        171,
        145,
        167,
        143,
        139,
        173,
        154,
        159,
        141,
        134,
        170,
      );
    }
    static timestampString() {
      return ua._r901c1028bd9df1(
        137,
        178,
        196,
        192,
        164,
        143,
        165,
        144,
        193,
        158,
        164,
        155,
        143,
        144,
        163,
        191,
        160,
        153,
        149,
        173,
        169,
        173,
        195,
      );
    }
    static _r5dff98fa39efb2() {
      return ua._r901c1028bd9df1(
        120,
        179,
        124,
        161,
        132,
        139,
        150,
        176,
        139,
        145,
        157,
        141,
        169,
        127,
        152,
        175,
        153,
        140,
        156,
        143,
      );
    }
    static _r14b008b4d946f3() {
      return ua._r901c1028bd9df1(136, 148, 159, 145, 168);
    }
    getRoomPlanesDataArray(e) {
      let r = [];
      for (let t of e) {
        let i = new UnkClass_9676c9();
        i.z = t.z;
        let s = t.cornerPoints;
        (i.addCornerPoint(s[0].x, s[0].y),
          i.addCornerPoint(s[1].x, s[1].y),
          i.addCornerPoint(s[2].x, s[2].y),
          i.addCornerPoint(s[3].x, s[3].y),
          (i.color = t.color));
        let o = t._r0e94880d724d54,
          d = t._rd661e1e7571aca,
          c = t._r975aab7e436864,
          f = t._r107425bc6dc88f;
        for (let b = 0; b < o.length; b++) i.addMask(new UnkClass_c688c1(o[b], new UnkClass_e2ef95(d[b].x, d[b].y), c[b], f[b]));
        i.setBottomAligned(t.isBottomAligned());
        let l = t._r462fb34fa01d45;
        if (l.length !== 0)
          for (let b of l) {
            let _ = new UnkClass_2b88c5();
            for (let h of b) _.addAssetName(h);
            i.addTexCol(_);
          }
        r.push(i);
      }
      return r;
    }
    static deflate(e) {
      let r = z_._rfc45b992e0dc6b(e),
        t = Dv(r.toUint8Array());
      return re.compress(t);
    }
  }
