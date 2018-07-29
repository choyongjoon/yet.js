import { disassembleChar, match } from './char'

export const disassemble = (str, containsComp = false) => {
  let output = []
  let comp, item
  for (const c of str) {
    if (containsComp) {
      if (c === '[') {
        comp = []
        continue
      }
      if (comp) {
        if (c === '/') {
          if (!item) throw Error('초성이나 중성이 비어있습니다.')
          comp.push(item)
          item = undefined
        } else if (c === ']') {
          if (item) comp.push(item)
          output.push(comp)
          comp = undefined
          item = undefined
        } else {
          if (!item) item = c
          else item = item.concat(c)
        }
        continue
      }
    }
    const arr = disassembleChar(c)
    output.push(arr)
  }
  return output
}

export const search = (str, pattern) => {
  const strArr = disassemble(str)
  const patternArr = disassemble(pattern, true)

  return bruteForceSearch(strArr, patternArr)
}

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
      if (!match(arr[i + j], patternArr[j])) {
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
