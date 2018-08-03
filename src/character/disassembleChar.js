import hypua2ipf from '../constants/hypua2ipf'
import { CompleteTable, ModernRange } from '../constants/modern'

const disassembleChar = c => {
  const ipf = convertHYPUAtoIPF(c)
  if (ipf) return Array.from(ipf)

  if (!isComplete(c)) return c

  const code = c.charCodeAt(0)
  const index = code - ModernRange.complete[0]
  const endIndex = index % 28
  const middleIndex = (index - endIndex) / 28 % 21
  const startIndex = parseInt((index - endIndex) / 28 / 21)
  const start = CompleteTable.start[startIndex]
  const middle = CompleteTable.middle[middleIndex]
  if (endIndex > 0) {
    const end = CompleteTable.end[endIndex]
    return [start, middle, end]
  }
  return [start, middle]
}

export default disassembleChar

const convertHYPUAtoIPF = c => {
  return hypua2ipf[c.charCodeAt(0)]
}

const isComplete = c => isInRange(c, ModernRange.complete)

const isInRange = (c, range) => {
  const code = c.charCodeAt(0)
  return code >= range[0] && code <= range[1]
}
