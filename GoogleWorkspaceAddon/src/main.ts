import { sum5 } from './utils'

const onOpen = () => {
  createMenu()
}

const createMenu = () => {
    SpreadsheetApp.getUi().createMenu("⚙️ Admin Settings")
     .addItem("Setting A", "settingA")
     .addItem("Setting B", "settingB")
     .addToUi();
 }
 
 const settingA = () => {
   SpreadsheetApp.getActive().toast(`Sum is ${sum5()}`);
 }
 
 const settingB = () => {
   SpreadsheetApp.getActive().toast("You selected Setting B.");
 }