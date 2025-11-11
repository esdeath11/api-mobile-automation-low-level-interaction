import fs from "fs";
import path from "path";

export function report({ response, statusCode, result }) {


  const reportContent = `
API Test Report
================

Timestamp : ${new Date().toLocaleString()}
StatusCode: ${statusCode}
result    : ${result}


Response:
${JSON.stringify(response, null, 2)}
`;

  // store in reports folder (auto create)
  const reportDir = path.resolve("reports");
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir);
  }

  const filePath = path.join(reportDir, `${result}_report_${Date.now()}.txt`);

  fs.writeFileSync(filePath, reportContent, "utf8");
  console.log(`Report saved to: ${filePath}`);
}
