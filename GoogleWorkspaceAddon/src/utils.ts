import sum from 'lodash.sum'

const sum5 = (): number => {
    const numberList: number[] = [1, 2, 3, 4, 5]
    return sum(numberList)
}

export { sum5 }
