// Estratto da HabboAirLauncher.deobf.js, riga 62280.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/hurlant/crypto/hash/SHABase.as
// Nome offuscato: _ia9503ac0fa760c

class {
  static {
    n(this, "SHABase");
  }
  pad_size = 40;
  _r02236959299277() {
    return 64;
  }
  getHashSize() {
    return 0;
  }
  _r17f02e8a2ec2c1() {
    return this.pad_size;
  }
  hash(e) {
    let r = Array.from(e.toUint8Array()),
      t = r.length * 8;
    for (; r.length % 4 !== 0;) r.push(0);
    let i = [];
    for (let c = 0; c < r.length; c += 4)
      i.push(
        (((r[c] ?? 0) << 24) | ((r[c + 1] ?? 0) << 16) | ((r[c + 2] ?? 0) << 8) | (r[c + 3] ?? 0)) >>> 0,
      );
    let s = this.core(i, t >>> 0),
      o = new re(),
      d = this.getHashSize() / 4;
    for (let c = 0; c < d; c++) o.writeUnsignedInt(s[c] ?? 0);
    return ((o.position = 0), o);
  }
  core(e, r) {
    return [];
  }
  toString() {
    return "sha";
  }
}
