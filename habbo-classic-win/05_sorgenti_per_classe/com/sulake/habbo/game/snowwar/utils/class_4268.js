// Extracted from HabboAirLauncher.deobf.js, line 218345.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/game/snowwar/utils/class_4268.as
// Obfuscated name: _icad46d28e8d77e

class a {
  static {
    n(this, "class_4268");
  }
  static _rd3a3c8d296ff32 = 0;
  static _r2e855bff4865da = 1;
  static _r4967436389a7cc = 2;
  static _r120ee6475453c2 = 3;
  static _r4bbd791131cd80 = 4;
  static _radbf46e7d61d15 = 0;
  static _r139903af20af05 = 1;
  static _r1f25eb846ef26d = 2;
  static _r5b7077adddc12a = 3;
  static _rf914be97cbdc98 = 4;
  static BOUNDING_DATA_TRIPLE_CIRCLE_LARGEST_DISTANCE = 5;
  static _r8238b0999d6bac(e, r) {
    if (r === e) return !1;
    switch (r._r24b48ffa5796a4) {
      case a._r4967436389a7cc:
        switch (e._r24b48ffa5796a4) {
          case a._r2e855bff4865da:
            return a._rafe28295dbedda(e, r);
          case a._r4967436389a7cc:
            return a._r2a25b081e2c737(e, r);
          case a._r4bbd791131cd80:
            return a._rcb3447def77f0a(r, e);
          default:
            return !1;
        }
      case a._r4bbd791131cd80:
        switch (e._r24b48ffa5796a4) {
          case a._r2e855bff4865da:
            return a._r3f68f6c715252a(e, r);
          case a._r4967436389a7cc:
            return a._rcb3447def77f0a(e, r);
          case a._r4bbd791131cd80:
            return a._r23c99ab0c1dcc6(e, r);
          default:
            return !1;
        }
      case a._r120ee6475453c2:
        return e._r24b48ffa5796a4 === a._r2e855bff4865da && a._r43c504e8931bc7(e, r);
      default:
        return !1;
    }
  }
  static _rafe28295dbedda(e, r) {
    return e._r502e71c4c81659._rfd9334f88a7bef(r._r502e71c4c81659, r._r2651fdcb0df06e[0]);
  }
  static _r43c504e8931bc7(e, r) {
    let t = r._r2651fdcb0df06e;
    return (
      e._r502e71c4c81659.x > r._r502e71c4c81659.x + t[0] &&
      e._r502e71c4c81659.x < r._r502e71c4c81659.x + t[2] &&
      e._r502e71c4c81659.y > r._r502e71c4c81659.y + t[1] &&
      e._r502e71c4c81659.y < r._r502e71c4c81659.y + t[3]
    );
  }
  static _r2a25b081e2c737(e, r) {
    return e._r502e71c4c81659._rfd9334f88a7bef(
      r._r502e71c4c81659,
      e._r2651fdcb0df06e[0] + r._r2651fdcb0df06e[0],
    );
  }
  static _r3f68f6c715252a(e, r) {
    if (
      a.absoluteValue(r._r502e71c4c81659.x - e._r502e71c4c81659.x) > r._r2651fdcb0df06e[5] ||
      a.absoluteValue(r._r502e71c4c81659.y - e._r502e71c4c81659.y) > r._r2651fdcb0df06e[5]
    )
      return !1;
    let s =
        r._r502e71c4c81659.x +
        class_4083.javaDiv(
          (ri._r7399670b5c7499(r._r07a29a11e88a0f.intValue()) * r._r2651fdcb0df06e[3]) / 256,
        ),
      o =
        r._r502e71c4c81659.y +
        class_4083.javaDiv(
          (ri._rc1d3846091fd16(r._r07a29a11e88a0f.intValue()) * r._r2651fdcb0df06e[3]) / 256,
        );
    if (
      Is.isInDistanceStatic(s, o, e._r502e71c4c81659.x, e._r502e71c4c81659.y, r._r2651fdcb0df06e[0]) ||
      Is.isInDistanceStatic(
        r._r502e71c4c81659.x,
        r._r502e71c4c81659.y,
        e._r502e71c4c81659.x,
        e._r502e71c4c81659.y,
        r._r2651fdcb0df06e[1],
      )
    )
      return !0;
    let d =
        r._r502e71c4c81659.x +
        class_4083.javaDiv(
          (ri._r7399670b5c7499(r._r07a29a11e88a0f.intValue()) * r._r2651fdcb0df06e[4]) / 256,
        ),
      c =
        r._r502e71c4c81659.y +
        class_4083.javaDiv(
          (ri._rc1d3846091fd16(r._r07a29a11e88a0f.intValue()) * r._r2651fdcb0df06e[4]) / 256,
        );
    return Is.isInDistanceStatic(d, c, e._r502e71c4c81659.x, e._r502e71c4c81659.y, r._r2651fdcb0df06e[2]);
  }
  static _rcb3447def77f0a(e, r) {
    if (
      a.absoluteValue(r._r502e71c4c81659.x - e._r502e71c4c81659.x) >
        e._r2651fdcb0df06e[0] + r._r2651fdcb0df06e[5] ||
      a.absoluteValue(r._r502e71c4c81659.y - e._r502e71c4c81659.y) >
        e._r2651fdcb0df06e[0] + r._r2651fdcb0df06e[5]
    )
      return !1;
    let s =
        r._r502e71c4c81659.x +
        class_4083.javaDiv(
          (ri._r7399670b5c7499(r._r07a29a11e88a0f.intValue()) * r._r2651fdcb0df06e[3]) / 256,
        ),
      o =
        r._r502e71c4c81659.y +
        class_4083.javaDiv(
          (ri._rc1d3846091fd16(r._r07a29a11e88a0f.intValue()) * r._r2651fdcb0df06e[3]) / 256,
        );
    if (
      Is.isInDistanceStatic(
        s,
        o,
        e._r502e71c4c81659.x,
        e._r502e71c4c81659.y,
        r._r2651fdcb0df06e[0] + e._r2651fdcb0df06e[0],
      ) ||
      Is.isInDistanceStatic(
        r._r502e71c4c81659.x,
        r._r502e71c4c81659.y,
        e._r502e71c4c81659.x,
        e._r502e71c4c81659.y,
        r._r2651fdcb0df06e[1] + e._r2651fdcb0df06e[0],
      )
    )
      return !0;
    let d =
        r._r502e71c4c81659.x +
        class_4083.javaDiv(
          (ri._r7399670b5c7499(r._r07a29a11e88a0f.intValue()) * r._r2651fdcb0df06e[4]) / 256,
        ),
      c =
        r._r502e71c4c81659.y +
        class_4083.javaDiv(
          (ri._rc1d3846091fd16(r._r07a29a11e88a0f.intValue()) * r._r2651fdcb0df06e[4]) / 256,
        );
    return Is.isInDistanceStatic(
      d,
      c,
      e._r502e71c4c81659.x,
      e._r502e71c4c81659.y,
      r._r2651fdcb0df06e[2] + e._r2651fdcb0df06e[0],
    );
  }
  static _r23c99ab0c1dcc6(e, r) {
    if (
      a.absoluteValue(r._r502e71c4c81659.x - e._r502e71c4c81659.x) >
        e._r2651fdcb0df06e[a.BOUNDING_DATA_TRIPLE_CIRCLE_LARGEST_DISTANCE] + r._r2651fdcb0df06e[a.BOUNDING_DATA_TRIPLE_CIRCLE_LARGEST_DISTANCE] ||
      a.absoluteValue(r._r502e71c4c81659.y - e._r502e71c4c81659.y) >
        e._r2651fdcb0df06e[a.BOUNDING_DATA_TRIPLE_CIRCLE_LARGEST_DISTANCE] + r._r2651fdcb0df06e[a.BOUNDING_DATA_TRIPLE_CIRCLE_LARGEST_DISTANCE]
    )
      return !1;
    let s =
        e._r502e71c4c81659.x +
        class_4083.javaDiv(
          (ri._r7399670b5c7499(e._r07a29a11e88a0f.intValue()) * e._r2651fdcb0df06e[a._r5b7077adddc12a]) / 256,
        ),
      o =
        e._r502e71c4c81659.y +
        class_4083.javaDiv(
          (ri._rc1d3846091fd16(e._r07a29a11e88a0f.intValue()) * e._r2651fdcb0df06e[a._r5b7077adddc12a]) / 256,
        ),
      d =
        r._r502e71c4c81659.x +
        class_4083.javaDiv(
          (ri._r7399670b5c7499(r._r07a29a11e88a0f.intValue()) * r._r2651fdcb0df06e[a._r5b7077adddc12a]) / 256,
        ),
      c =
        r._r502e71c4c81659.y +
        class_4083.javaDiv(
          (ri._rc1d3846091fd16(r._r07a29a11e88a0f.intValue()) * r._r2651fdcb0df06e[a._r5b7077adddc12a]) / 256,
        );
    if (
      Is.isInDistanceStatic(
        s,
        o,
        d,
        c,
        e._r2651fdcb0df06e[a._radbf46e7d61d15] + r._r2651fdcb0df06e[a._radbf46e7d61d15],
      ) ||
      Is.isInDistanceStatic(
        s,
        o,
        r._r502e71c4c81659.x,
        r._r502e71c4c81659.y,
        e._r2651fdcb0df06e[a._radbf46e7d61d15] + r._r2651fdcb0df06e[a._r139903af20af05],
      )
    )
      return !0;
    let f =
        r._r502e71c4c81659.x +
        class_4083.javaDiv(
          (ri._r7399670b5c7499(r._r07a29a11e88a0f.intValue()) * r._r2651fdcb0df06e[a._rf914be97cbdc98]) / 256,
        ),
      l =
        r._r502e71c4c81659.y +
        class_4083.javaDiv(
          (ri._rc1d3846091fd16(r._r07a29a11e88a0f.intValue()) * r._r2651fdcb0df06e[a._rf914be97cbdc98]) / 256,
        );
    if (
      Is.isInDistanceStatic(
        s,
        o,
        f,
        l,
        e._r2651fdcb0df06e[a._radbf46e7d61d15] + r._r2651fdcb0df06e[a._r1f25eb846ef26d],
      ) ||
      Is.isInDistanceStatic(
        e._r502e71c4c81659.x,
        e._r502e71c4c81659.y,
        d,
        c,
        e._r2651fdcb0df06e[a._r139903af20af05] + r._r2651fdcb0df06e[a._radbf46e7d61d15],
      ) ||
      Is.isInDistanceStatic(
        e._r502e71c4c81659.x,
        e._r502e71c4c81659.y,
        r._r502e71c4c81659.x,
        r._r502e71c4c81659.y,
        e._r2651fdcb0df06e[a._r139903af20af05] + r._r2651fdcb0df06e[a._r139903af20af05],
      ) ||
      Is.isInDistanceStatic(
        e._r502e71c4c81659.x,
        e._r502e71c4c81659.y,
        f,
        l,
        e._r2651fdcb0df06e[a._r139903af20af05] + r._r2651fdcb0df06e[a._r1f25eb846ef26d],
      )
    )
      return !0;
    let b =
        e._r502e71c4c81659.x +
        class_4083.javaDiv(
          (ri._r7399670b5c7499(e._r07a29a11e88a0f.intValue()) * e._r2651fdcb0df06e[a._rf914be97cbdc98]) / 256,
        ),
      _ =
        e._r502e71c4c81659.y +
        class_4083.javaDiv(
          (ri._rc1d3846091fd16(e._r07a29a11e88a0f.intValue()) * e._r2651fdcb0df06e[a._rf914be97cbdc98]) / 256,
        );
    return Is.isInDistanceStatic(
      b,
      _,
      d,
      c,
      e._r2651fdcb0df06e[a._r1f25eb846ef26d] + r._r2651fdcb0df06e[a._radbf46e7d61d15],
    ) ||
      Is.isInDistanceStatic(
        b,
        _,
        r._r502e71c4c81659.x,
        r._r502e71c4c81659.y,
        e._r2651fdcb0df06e[a._r1f25eb846ef26d] + r._r2651fdcb0df06e[a._r139903af20af05],
      )
      ? !0
      : Is.isInDistanceStatic(
          b,
          _,
          f,
          l,
          e._r2651fdcb0df06e[a._r1f25eb846ef26d] + r._r2651fdcb0df06e[a._r1f25eb846ef26d],
        );
  }
  static absoluteValue(e) {
    return e < 0 ? -e : e;
  }
}
