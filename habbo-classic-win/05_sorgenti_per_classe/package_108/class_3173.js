// Extracted from HabboAirLauncher.deobf.js, line 85817.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_108/class_3173.as
// Obfuscated name: _ib2e81f84c49273

class a extends dw {
    static {
      n(this, "class_3173");
    }
    static {
      YCr(this, "class_3173");
    }
    var_2086 = 0;
    var_2095 = 0;
    var_3525 = 0;
    var_3756 = 0;
    var_5367 = "";
    var_5602 = "";
    var_5097 = "";
    var_5394 = "";
    var_5822 = "";
    var_5839 = !1;
    var_5794 = !1;
    static readFromMessage(e) {
      let r = new a();
      return (
        dw.fillFromMessage(r, e),
        (r.var_2086 = e.readInteger()),
        (r.var_2095 = e.readInteger()),
        (r.var_3525 = e.readInteger()),
        (r.var_3756 = e.readInteger()),
        (r.var_5367 = e.readString()),
        (r.var_5602 = e.readString()),
        (r.var_5097 = e.readString()),
        (r.var_5394 = e.readString()),
        (r.var_5822 = e.readString()),
        (r.var_5839 = e.readBoolean()),
        (r.var_5794 = e.readBoolean()),
        r
      );
    }
    get _r54097b0afababa() {
      return this.var_2086;
    }
    get _r4a7a1f3d85cf79() {
      return this.var_2095;
    }
    get _r35ee8b88a5bbff() {
      return this.var_3525;
    }
    get _r5a8a98222f4b22() {
      return this.var_3756;
    }
    get _r4b0f4dcd9b6c6f() {
      return this.var_5367.length === 0;
    }
    get isStaff() {
      return !0;
    }
    get canReport() {
      return this.var_5602.length === 0;
    }
    get _r519699a8b75c3b() {
      return this.var_5097.length === 0;
    }
    get canPostMessage() {
      return this.var_5394.length === 0;
    }
    get _re649b774fef7e6() {
      return this.var_5839;
    }
    get canModerate() {
      return this.var_5794;
    }
    get _rb3fbce1b50e320() {
      return this.var_5367;
    }
    get _r1c04a5ff81ef2f() {
      return this.var_5602;
    }
    get _r46300cc379aff2() {
      return this.var_5097;
    }
    get _r7cd8bc84bcede6() {
      return this.var_5394;
    }
    get _rf51ad8d7d8e5fa() {
      return this.var_5822;
    }
  }
