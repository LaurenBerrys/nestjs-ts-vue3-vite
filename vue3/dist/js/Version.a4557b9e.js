import { s as i } from "./index.8fd7165c.js";
let e = class {
  constructor(t, s, o = "") {
    (this.major = t), (this.minor = s), (this._context = o);
  }
  lessThan(t, s) {
    return this.major < t || (t === this.major && this.minor < s);
  }
  since(t, s) {
    return !this.lessThan(t, s);
  }
  validate(t) {
    if (this.major !== t.major) {
      const s = this._context && this._context + ":",
        o = this._context && this._context + " ";
      throw new i(
        s + "unsupported-version",
        `Required major ${o}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,
        { version: t }
      );
    }
  }
  clone() {
    return new e(this.major, this.minor, this._context);
  }
  static parse(t, s = "") {
    const [o, r] = t.split("."),
      n = /^\s*\d+\s*$/;
    if (!o || !o.match || !o.match(n))
      throw new i(
        (s && s + ":") + "invalid-version",
        "Expected major version to be a number, but got '${version}'",
        { version: t }
      );
    if (!r || !r.match || !r.match(n))
      throw new i(
        (s && s + ":") + "invalid-version",
        "Expected minor version to be a number, but got '${version}'",
        { version: t }
      );
    const a = parseInt(o, 10),
      h = parseInt(r, 10);
    return new e(a, h, s);
  }
};
export { e as r };
