import { createMenu } from './menus'
import { sum5, checkSetup } from './utils'

/**
 * This function runs when sheet is opened
 */
const onOpen = () => {
  const isSetup = checkSetup()
  createMenu()
}

const doSomething = () => {
  SpreadsheetApp.getActive().appendRow([1,2,3,4,5])
}

const returnSomething = ():number => {
  return sum5()
}
