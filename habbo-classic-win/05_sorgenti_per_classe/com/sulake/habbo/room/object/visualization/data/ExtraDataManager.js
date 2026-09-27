// Estratto da HabboAirLauncher.deobf.js, riga 277760.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/data/ExtraDataManager.as
// Nome offuscato: _i131a92b7e084dd

class a {
  static {
    n(this, "ExtraDataManager");
  }
  static STATUS_REJECTED = "REJECTED";
  static BATCH_MAX_QUERY_AMOUNT = 50;
  static var_325 = null;
  _ra987896d7aecfc = [];
  _r7350783b96f4a8 = [];
  constructor() {
    setInterval(() => {
      this.setTimedBatchCheck();
    }, 200);
  }
  static requestExtraDataUrl(e) {
    this.getInstance()._ra987896d7aecfc.push(e);
  }
  static furnitureDisposed(e) {
    this.getInstance()._rb6eb488cbd421f(e);
  }
  static getInstance() {
    return (this.var_325 == null && (this.var_325 = new a()), this.var_325);
  }
  _rb6eb488cbd421f(e) {
    let r = this._ra987896d7aecfc.indexOf(e);
    r !== -1 && this._ra987896d7aecfc.splice(r, 1);
    let t = this._r7350783b96f4a8.indexOf(e);
    t !== -1 && this._r7350783b96f4a8.splice(t, 1);
  }
  async setTimedBatchCheck() {
    if (this._ra987896d7aecfc.length === 0) return;
    let e = "",
      r = [];
    for (let t = 0; t < a.BATCH_MAX_QUERY_AMOUNT && this._ra987896d7aecfc.length > 0; t++) {
      let i = this._ra987896d7aecfc.shift();
      if (i == null) continue;
      let s = i._r5ff94dc6bbd4c5();
      s.length !== 0 && (r.push(s), (e = i._rb95283153ba9b7()), this._r7350783b96f4a8.push(i));
    }
    if (!(r.length === 0 || e.length === 0))
      try {
        let t = await fetch(e, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(r),
        });
        if (!t.ok) throw new Error(`Failed with HTTP ${t.status}`);
        this._r5b67c2c4ea8b60(await t.text());
      } catch {}
  }
  _r5b67c2c4ea8b60(e) {
    if (e.length !== 0)
      try {
        let r = JSON.parse(e);
        for (let t of r) {
          let i = typeof t.id == "string" ? t.id : null;
          if (i != null)
            for (let s of [...this._r7350783b96f4a8])
              s._r5ff94dc6bbd4c5() === i &&
                (t.status === a.STATUS_REJECTED
                  ? s._r0a7dbbea239378(a.STATUS_REJECTED)
                  : s._r0a7dbbea239378(typeof t.url == "string" ? t.url : ""),
                this._rb6eb488cbd421f(s));
        }
      } catch {}
  }
}
