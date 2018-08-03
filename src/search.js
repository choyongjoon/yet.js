import matchChar from './character/matchChar'
import disassemble from './disassemble'

const search = (str, pattern) => {
  const strArr = disassemble(str)
  const patternArr = disassemble(pattern, true)

  return bruteForceSearch(strArr, patternArr)
}

export default search

export const searchAndPrint = (str, pattern, format = defaultFormat) => {
  const { prefixLength, suffixLength, highlight } = format
  const results = search(str, pattern)
  const lines = results.map(result => {
    const { index, length } = result
    const found = str.substr(index, length)
    const prefix = str.substr(Math.max(index - prefixLength, 0), Math.min(prefixLength, index))
    const suffix = str.substr(index + length, suffixLength)
    const outputStr = `${prefix}${highlight}${found}${highlight}${suffix}`
    return outputStr
  })
  return lines
}

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

const defaultFormat = {
  prefixLength: 10,
  suffixLength: 10,
  highlight: '**'
}
