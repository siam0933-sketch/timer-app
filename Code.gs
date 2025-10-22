/**
 * 타이머 앱 - Google Apps Script 웹앱
 * 배포: 웹 앱으로 배포 > 새 배포 > 유형: 웹 앱
 */

function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('타이머 앱')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
