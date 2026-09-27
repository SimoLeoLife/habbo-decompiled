// Extracted from HabboAirLauncher.deobf.js, line 65041.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _iac27fe41899e36

class {
  static {
    n(this, "UnkConstants_ac27fe");
  }
  static _rd5f7d614d27f3c = [
    {
      name: "signedCertificate",
      extract: !0,
      value: [
        { name: "versionHolder", optional: !0, value: [{ name: "version" }], defaultValue: _i16d18bbad09209() },
        { name: "serialNumber" },
        { name: "signature", value: [{ name: "algorithmId" }] },
        { name: "issuer", extract: !0, value: [{ name: "type" }, { name: "value" }] },
        { name: "validity", value: [{ name: "notBefore" }, { name: "notAfter" }] },
        { name: "subject", extract: !0, value: [] },
        {
          name: "subjectPublicKeyInfo",
          value: [{ name: "algorithm", value: [{ name: "algorithmId" }] }, { name: "subjectPublicKey" }],
        },
        { name: "extensions", value: [] },
      ],
    },
    { name: "algorithmIdentifier", value: [{ name: "algorithmId" }] },
    { name: "encrypted", value: null },
  ];
  static CERTIFICATE = [
    {
      name: "tbsCertificate",
      value: [
        { name: "tag0", value: [{ name: "version" }] },
        { name: "serialNumber" },
        { name: "signature" },
        { name: "issuer", value: [{ name: "type" }, { name: "value" }] },
        { name: "validity", value: [{ name: "notBefore" }, { name: "notAfter" }] },
        { name: "subject" },
        { name: "subjectPublicKeyInfo", value: [{ name: "algorithm" }, { name: "subjectPublicKey" }] },
        { name: "issuerUniqueID" },
        { name: "subjectUniqueID" },
        { name: "extensions" },
      ],
    },
    { name: "signatureAlgorithm" },
    { name: "signatureValue" },
  ];
  static _r628e9b2c166e0a = [{ name: "modulus" }, { name: "publicExponent" }];
  static _r67932464d29145 = [{ name: "algorithm", value: [{ name: "algorithmId" }] }, { name: "hash" }];
}
