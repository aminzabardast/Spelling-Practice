import sum from 'lodash.sum'
import isNull from 'lodash.isnull'
import isUndefined from 'lodash.isundefined'

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

const createMetadataSheet = () => {
  const isSetup = checkSetup()
  if (!isSetup) {
    SpreadsheetApp.getActiveSpreadsheet().insertSheet('metadata');
  }
  return SpreadsheetApp.getActive().getSheetByName('metadata')
}

const writeMetaData = (key: string, value: string | number) => {
  if (!checkSetup()) {
    throw Error('Not Setup Properly')
  }
  const metadata = SpreadsheetApp.getActive().getSheetByName('metadata')
  if(isUndefined(readMetaData(key))) {
    metadata?.appendRow([key, value])
  } else {
    let rowIndex = 0
    metadata?.getRange("A:B").getValues().forEach((item: string[], index: number) => {
      if (item[0] === key) {
        rowIndex = index
      }
    })
    metadata?.getRange(`B${rowIndex+1}`).setValue([value])
  }
}

const readMetaData = (key: string) => {
  if (!checkSetup()) {
    throw Error('Not Setup Properly')
  }
  const metadata = SpreadsheetApp.getActive().getSheetByName('metadata')
  const values: string[][] | undefined = metadata?.getRange("A:B").getValues().filter((item: string[]): boolean => item[0] === key)
  if (!values?.length) {
    return undefined
  }
  return values[0][1]
}

const createMetadataAndPopulateDefaults = () => {}

/**
 * This is just for testing
 */
const test = () => {
  console.log(createMetadataSheet())
  console.log(readMetaData('A'))
  console.log(readMetaData('B'))
  console.log(readMetaData('C'))
  writeMetaData('A', 'Value A')
}

export { sum5, checkSetup, createMetadataSheet }
