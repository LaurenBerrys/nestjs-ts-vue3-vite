import { a } from "./index.f5ae9169.js";
const r = (t) => a({ url: "/nest-api/role", method: "post", data: t }),
  s = (t) => a({ url: "/nest-api/role", method: "get", params: t }),
  p = (t, e) => a({ url: "/nest-api/role/" + t, method: "patch", data: e });
export { r as c, s as g, p as u };
