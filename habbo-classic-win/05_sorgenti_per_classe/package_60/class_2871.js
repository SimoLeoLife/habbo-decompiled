// Extracted from HabboAirLauncher.deobf.js, line 95669.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_60/class_2871.as
// Obfuscated name: _if4d089f69ebb39

class {
    static {
      n(this, "class_2871");
    }
    static {
      MOr(this, "class_2871");
    }
    _nodes = null;
    parse(e) {
      this._nodes = [];
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._nodes.push(new class_3177(e));
      return !0;
    }
    flush() {
      return ((this._nodes = null), !0);
    }
    get nodes() {
      return this._nodes;
    }
  }
