// Estratto da HabboAirLauncher.deobf.js, riga 186080.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/recycler/PrizeGridItem.as
// Nome offuscato: _i6c832f018a8d82

class extends Cm {
  static {
    n(this, "PrizeGridItem");
  }
  constructor(e) {
    super(e);
  }
  initProductIcon(e, r, t, i = "") {
    if (e == null) return;
    let s = null,
      o = null;
    switch (r) {
      case class_1803.PRODUCT_TYPE_STUFF:
        o = e._r65a31a885a1252(t, this);
        break;
      case class_1803.PRODUCT_TYPE_ITEM:
        o = e.getWallItemDataByName(t, this, i);
        break;
      case class_1803.PRODUCT_TYPE_CHAT_STYLE: {
        let d =
          this.catalog?._rafd5b9130c4bfd?.chatStyleLibrary?._r22c9347ecec607(t)?._r270592cedf0213?.clone() ??
          null;
        d != null &&
          ((s = new A(Math.max(1, Math.floor(d.width / 2)), Math.max(1, Math.floor(d.height / 2)), !0, 0)),
          s.draw(d, new Pe(0.5, 0, 0, 0.5), null, null, null, !0),
          d.dispose());
        break;
      }
      default:
        return;
    }
    (o?.data != null && (s = o.data), s != null && this.setIconImage(s, !0));
  }
  imageReady(e, r) {
    this.disposed || this.setIconImage(r, !0);
  }
  imageFailed(e) {}
}
