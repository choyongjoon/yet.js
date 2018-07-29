// import _ from 'lodash'

import table from './table'
import { CompleteTable, ModernRange, compatibilityTable } from './constants'

export const disassembleChar = c => {
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

export const match = (a, b) => {
  if (typeof a === 'string' && typeof b === 'string') {
    return a === b
  }

  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false

    for (let i = 0; i < a.length; i++) {
      if (b[i] === '*') continue
      let willContinue = false
      for (let j = 0; j < b[i].length; j++) {
        if (matchJamo(a[i], b[i][j])) {
          willContinue = true
          break
        }
      }
      if (willContinue) continue

      return false
    }
    return true
  }

  return false
}

const matchJamo = (a, b) => {
  const ac = a.charCodeAt(0)
  const bc = b.charCodeAt(0)
  const ar = compatibilityTable[ac]
  const br = compatibilityTable[bc]

  if (ar && !br) return ar.includes(bc)
  else if (!ar && br) return br.includes(ac)
  return a === b
}

const convertHYPUAtoIPF = c => {
  return table[c.charCodeAt(0)]
}

const isComplete = c => isInRange(c, ModernRange.complete)

const isInRange = (c, range) => {
  const code = c.charCodeAt(0)
  return code >= range[0] && code <= range[1]
}
