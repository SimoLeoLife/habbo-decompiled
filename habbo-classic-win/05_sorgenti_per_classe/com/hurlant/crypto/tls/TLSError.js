// Estratto da HabboAirLauncher.deobf.js, riga 63037.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/hurlant/crypto/tls/TLSError.as

class extends Error {
  constructor(r, t) {
    super(r);
    this.id = t;
    this.name = "TLSError";
  }
  static {
    n(this, "TLSError");
  }
  static access_denied = 49;
  static bad_certificate = 42;
  static bad_record_mac = 20;
  static const_1094 = 45;
  static const_1026 = 44;
  static const_1219 = 46;
  static close_notify = 0;
  static decode_error = 50;
  static decompression_failure = 30;
  static decrypt_error = 51;
  static decryption_failed = 21;
  static handshake_failure = 40;
  static const_589 = 47;
  static insufficient_security = 71;
  static internal_error = 80;
  static no_renegotiation = 100;
  static const_986 = 70;
  static record_overflow = 22;
  static const_568 = 10;
  static unknown_ca = 48;
  static const_984 = 43;
  static user_canceled = 90;
}
