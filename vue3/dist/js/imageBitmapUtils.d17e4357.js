import { s as a } from "./index.8fd7165c.js";
async function n(e, r) {
  try {
    return await createImageBitmap(e);
  } catch (t) {
    throw new a("request:server", `Unable to load ${r}`, { url: r, error: t });
  }
}
export { n as e };
