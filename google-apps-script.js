// Paste this into Extensions > Apps Script in your Google Sheet
// Then click Deploy > New Deployment > Web App
// Set "Execute as" to "Me" and "Who has access" to "Anyone"
// Copy the deployment URL and paste it into index.html where it says PASTE_YOUR_APPS_SCRIPT_URL_HERE

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.firstName,
    data.lastName,
    data.email,
    data.university,
    data.gradYear,
    data.phone,
    data.timestamp
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}
