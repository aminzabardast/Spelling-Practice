import { sum5 } from './utils'

const createMenu = () => {
  SpreadsheetApp.getUi()
    .createMenu('⚙️ Admin Settings')
    .addItem('Setting A', 'settingA')
    .addItem('Setting B', 'settingB')
    .addToUi()
}

const settingA = () => {
  SpreadsheetApp.getActive().toast(`Sum is ${sum5()}`)
}

const settingB = () => {
  showPicker()
  SpreadsheetApp.getActive().toast('You selected Setting B.')
}

/**
 * Displays an HTML-service dialog in Google Sheets that contains client-side
 * JavaScript code for the Google Picker API.
 */
function showPicker() {
  try {
    const html = HtmlService.createHtmlOutputFromFile('templates/dialog.html')
      .setWidth(600)
      .setHeight(600)
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    SpreadsheetApp.getUi().showModalDialog(html, 'This is the TITLE!')
  } catch (e: unknown) {
    if (e instanceof ErrorEvent) {
      console.log('Failed with error: %s', e.error)
    }
  }
}

export { createMenu, showPicker }
