// Estratto da HabboAirLauncher.deobf.js, riga 86751.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_1/class_1749.as
// Nome offuscato: _ic6f68088a86d1d

class a extends MessageEvent {
    static {
      n(this, "class_1749");
    }
    static {
      QEr(this, "class_1749");
    }
    static AVATAR_IDENTITY_CHANGE = 4;
    static CONCURRENT_LOGIN = 2;
    static CONNECTION_LOST_TO_PEER = 3;
    static CREDENTIALS_REMOVED = 123;
    static CRYPTO_NOT_INITIALIZED = 28;
    static DEV_CRYPTO_NOT_ALLOWED = 29;
    static DISCONNECTED = -3;
    static DUAL_LOGIN_BY_IP = 13;
    static DUAL_LOGIN_BY_USERID = 11;
    static DUPLICATE_CONNECTION = 18;
    static DUPLICATE_UUID_DETECTED = 100;
    static HOTEL_CLOSED = 12;
    static HOTEL_CLOSING = 19;
    static IDLE_CONNECTION = 112;
    static IDLE_CONNECTION_NO_USER_ID = 115;
    static IDLE_CONNECTION_NOT_AUTH = 114;
    static IDLE_CONNECTION_POLICY_REQUEST = 121;
    static INCOMPATIBLE_CLIENT_VERSION = 122;
    static INCORRECT_PASSWORD = 20;
    static INSUFFICIENT_SECURITY_LEVEL = 124;
    static INVALID_LOGIN_TICKET = 22;
    static INVALID_PARAMETER_RANGE = 126;
    static JUST_BANNED = 1;
    static LOGOUT = 0;
    static MAINTENANCE_BREAK = -2;
    static NO_LOGIN_PERMISSION = 17;
    static NO_MESSENGER_SESSION = 26;
    static OLD_SESSION_IN_PROXY = 101;
    static PEER_CONNECTION_MISSING = 16;
    static PONG_TIMEOUT = 113;
    static PROXY_RUNTIME_EXCEPTION = 111;
    static PUBLIC_KEY_NOT_NUMERIC = 102;
    static PUBLIC_KEY_TOO_SHORT = 103;
    static REMOVE_FURNITURE_TOOL = 5;
    static SOCKET_IO_EXCEPTION = 109;
    static SOCKET_READ_BODY = 107;
    static SOCKET_READ_FIRST_BYTE = 105;
    static SOCKET_READ_GENERIC = 104;
    static SOCKET_READ_LENGTH = 106;
    static SOCKET_READ_POLICY = 108;
    static SOCKET_WRITE_EXCEPTION_1 = 117;
    static SOCKET_WRITE_EXCEPTION_2 = 118;
    static SOCKET_WRITE_EXCEPTION_3 = 119;
    static SOCKET_WRONG_CRYPTO = 110;
    static STILL_BANNED = 10;
    static TOO_MANY_BYTES_PENDING_WRITE = 120;
    static TOO_MANY_UNDEFINED_CLIENT_MESSAGES = 125;
    static UNKNOWN_REASON = -1;
    static USER_NOT_FOUND = 27;
    static VERSION_CHECK_MACHINE_ID = 25;
    static VERSION_CHECK_PROPERTY = 24;
    static VERSION_CHECK_URL = 23;
    static WRITE_CLOSED_CHANNEL = 116;
    static _reasonNames = null;
    constructor(e) {
      super(e, class_3752);
    }
    get reason() {
      return this.var_15.reason;
    }
    get reasonString() {
      switch (this.reason) {
        case a.JUST_BANNED:
        case a.STILL_BANNED:
          return "banned";
        case a.CONCURRENT_LOGIN:
          return "concurrentlogin";
        case a.INCORRECT_PASSWORD:
          return "incorrectpassword";
        default:
          return "logout";
      }
    }
    getReasonName() {
      if (!a._reasonNames) {
        a._reasonNames = new Map();
        for (let [e, r] of Object.entries(a)) typeof r == "number" && a._reasonNames.set(r, e);
      }
      return a._reasonNames.get(this.reason);
    }
    static resolveDisconnectedReasonLocalizationKey(e) {
      switch (e) {
        case a.MAINTENANCE_BREAK:
          return "${disconnected.maintenance}";
        case a.LOGOUT:
          return "${disconnected.logged_out}";
        case a.JUST_BANNED:
          return "${disconnected.just_banned}";
        case a.STILL_BANNED:
          return "${disconnected.still_banned}";
        case a.CONCURRENT_LOGIN:
        case a.DUAL_LOGIN_BY_IP:
        case a.DUAL_LOGIN_BY_USERID:
        case a.DUPLICATE_CONNECTION:
          return "${disconnected.concurrent_login}";
        case a.HOTEL_CLOSED:
        case a.HOTEL_CLOSING:
          return "${disconnected.hotel_closed}";
        case a.INCORRECT_PASSWORD:
          return "${disconnected.incorrect_password}";
        case a.IDLE_CONNECTION:
          return "${disconnected.idle}";
        case a.INCOMPATIBLE_CLIENT_VERSION:
          return "${disconnected.incompatible_client_version}";
        default:
          return "${disconnected.generic}";
      }
    }
  }
