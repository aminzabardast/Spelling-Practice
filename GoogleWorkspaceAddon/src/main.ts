import { createMenu } from './menus'
import { sum5 } from './utils'

/**
 * This function runs when sheet is opened
 */
const onOpen = () => {
  createMenu()
}

const doSomething = () => {
  SpreadsheetApp.getActive().appendRow([1,2,3,4,5])
}

const returnSomething = ():number => {
  return sum5()
}