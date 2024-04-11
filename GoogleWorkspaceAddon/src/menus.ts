import { sum5 } from './utils'

const createMenu = () => {
  SpreadsheetApp.getUi()
    .createMenu('Spelling Practice')
    .addItem('Open Toast Menu', 'openToastExample')
    .addItem('Open Modal Dialog', 'openModalDialog')
    .addItem('Open Modeless Dialog', 'openModelessDialog')
    .addItem('Open Side Bar', 'openSideBar')
    .addItem('⚙️ Setup', 'openSetupWizard')
    .addToUi()
}

const openToastExample = () => {
  SpreadsheetApp.getActive().toast(`Sum is ${sum5()}`)
}

const openModalDialog = () => {
  try {
    const html = HtmlService.createHtmlOutputFromFile('components/dialog.html')
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

const openModelessDialog = () => {
  try {
    const html = HtmlService.createHtmlOutputFromFile('components/dialog.html')
      .setWidth(600)
      .setHeight(600)
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    SpreadsheetApp.getUi().showModelessDialog(html, 'This is the TITLE!')
  } catch (e: unknown) {
    if (e instanceof ErrorEvent) {
      console.log('Failed with error: %s', e.error)
    }
  }
}

const openSideBar = () => {
  try {
    const html = HtmlService.createHtmlOutputFromFile('components/vue_dialog.html')
      .setWidth(600)
      .setHeight(600)
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    SpreadsheetApp.getUi().showSidebar(html)
  } catch (e: unknown) {
    if (e instanceof ErrorEvent) {
      console.log('Failed with error: %s', e.error)
    }
  }
}

const openSetupWizard = () => {
  try {
    const html = HtmlService.createHtmlOutputFromFile('components/setup_wizard.html')
      .setWidth(600)
      .setHeight(600)
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    SpreadsheetApp.getUi().showModalDialog(html, 'Setup Wizard')
  } catch (e: unknown) {
    if (e instanceof ErrorEvent) {
      console.log('Failed with error: %s', e.error)
    }
  }
}

export { createMenu }
