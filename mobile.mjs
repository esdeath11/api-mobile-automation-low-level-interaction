import WebDriver from "webdriver";
import { takeShot } from "./screenshot.mjs";

const caps = {
  platformName: "Android",
  "appium:automationName": "UiAutomator2",
  "appium:deviceName": "emulator-5554",
  "appium:appPackage": "io.appium.android.apis",
  "appium:appActivity": "io.appium.android.apis.ApiDemos",
  "appium:noReset": true
};

const driver = await WebDriver.newSession({
  protocol: "http",
  hostname: "127.0.0.1",
  port: 4723,
  path: "/",
  capabilities: caps
});

await takeShot(driver, 'adasdasd');
// Tap "App"
const appEl = await driver.findElement("xpath", `//android.widget.TextView[@text="App"]`);
const appId = appEl["element-6066-11e4-a52e-4f735466cecf"];
await driver.elementClick(appId);
await takeShot(driver, 'sadasdasd2');

// Tap "Alert Dialogs"
const alertDialogsEl = await driver.findElement("xpath", `//android.widget.TextView[@text="Alert Dialogs"]`);
const alertId = alertDialogsEl["element-6066-11e4-a52e-4f735466cecf"];
await driver.elementClick(alertId);
await takeShot(driver, 'asdasdada3');

// await driver.pause(2000);
await driver.deleteSession();
