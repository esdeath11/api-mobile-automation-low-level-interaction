import fs from "fs/promises";
import path from "path";

export async function takeShot(driver, label = "shot") {
  const folder = "./screenshots";

  // ensure folder exists
  try {
    await fs.mkdir(folder, { recursive: true });
  } catch (_) {}

  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const filename = `${timestamp}_${label}.png`;
  const filepath = path.join(folder, filename);

  const base64 = await driver.takeScreenshot(); // this is base64
  await fs.writeFile(filepath, base64, { encoding: "base64" });

  console.log("Saved screenshot:", filepath);
  return filepath;
}
