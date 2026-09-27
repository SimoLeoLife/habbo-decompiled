// Estratto da HabboAirLauncher.deobf.js, riga 157911.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/communication/wireformat/class_3722.as
// Nome offuscato: _i2f68cab7ba0c7d

class a {
    static {
      n(this, "class_3722");
    }
    static {
      TCt(this, "class_3722");
    }
    static MAX_DATA = 256 * 1024;
    dispose() {}
    encode(e, r) {
      let t = new re();
      (t.writeInt(0), t.writeShort(e));
      for (let s of r ?? [])
        if (typeof s == "string") t.writeUTF(s);
        else if (typeof s == "number" && Number.isInteger(s)) t.writeInt(s);
        else if (typeof s == "boolean") t.writeBoolean(s);
        else if (s instanceof Short) t.writeShort(s.value);
        else if (s instanceof Byte) t.writeByte(s.value);
        else if (s instanceof Long) {
          let o = s.value,
            d = o < 0;
          d && (o = -o);
          let c = Math.floor(o / 4294967296),
            f = o & 4294967295;
          (d && ((c = ~c), (f = ~(f - 1)), f === 0 && (c += 1)),
            t.writeUnsignedInt(c >>> 0),
            t.writeUnsignedInt(f >>> 0));
        } else s instanceof re && (t.writeInt(s.length), t.writeBytes(s));
      let i = t.length;
      return ((t.position = 0), t.writeInt(i - 4), (t.position = i), t);
    }
    splitMessages(e, r) {
      let t = [];
      for (;;) {
        if (e.bytesAvailable < 6) return t;
        let i = e.position,
          s = 0,
          o = r.getServerToClientEncryption();
        if (o != null) {
          o.mark();
          let f = new re();
          (e.readBytes(f, 0, 4), o._r4bed6f4d0b94a4(f), (f.position = 0), (s = f.readInt()));
        } else s = e.readInt();
        if (s < 2 || s > a.MAX_DATA) throw new Error(`Invalid message length ${s}`);
        if (e.bytesAvailable < s) return ((e.position = i), o?.reset(), t);
        let d = new re();
        if (o != null) {
          let f = new re();
          (e.readBytes(f, 0, s), o._r4bed6f4d0b94a4(f), d.writeBytes(f, 0, s));
        } else e.readBytes(d, 0, s);
        d.position = 0;
        let c = d.readShort();
        t.push(new class_4227(c, d));
      }
    }
  }
