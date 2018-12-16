import matchChar from './character/matchChar'
import disassemble from './disassemble'

const search = (str, pattern) => {
  const strArr = disassemble(str)
  const patternArr = disassemble(pattern, true)

  return bruteForceSearch(strArr, patternArr)
}

export default search

const bruteForceSearch = (arr, patternArr) => {
  const results = []
  for (let i = 0; i < arr.length - patternArr.length; i++) {
    let index = i
    for (let j = 0; j < patternArr.length; j++) {
      if (!matchChar(arr[i + j], patternArr[j])) {
        index = -1
        break
      }
    }
    if (index >= 0) {
      results.push({
        index,
        length: patternArr.length
      })
    }
  }
  return results
}
