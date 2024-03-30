import sum from 'lodash.sum'
import isNull from 'lodash.isnull'

const sum5 = (): number => {
  const numberList: number[] = [1, 2, 3, 4, 5]
  return sum(numberList)
}

/**
 * Check if the environment is setup
 * This basically checks if there is a `metadata` sheet available
 * @returns 
 */
const checkSetup = () => {
  return !isNull(SpreadsheetApp.getActive().getSheetByName('metadata'))
}

export { sum5, checkSetup }
