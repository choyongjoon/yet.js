import { compatibilityTable } from '../constants/modern'

const matchChar = (a, b) => {
  if (typeof a === 'string' && typeof b === 'string') {
    return a === b
  }

  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false

    for (let i = 0; i < a.length; i++) {
      if (b[i] === '*') continue
      let willContinue = false
      for (let j = 0; j < b[i].length; j++) {
        if (matchJamo(a[i], b[i][j], i)) {
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

export default matchChar

const matchJamo = (a, b, i) => {
  let ac = a.charCodeAt(0)
  let bc = b.charCodeAt(0)
  const ar = compatibilityTable[ac]
  const br = compatibilityTable[bc]
  if (ar) ac = ar[i]
  if (br) bc = br[i]
  return ac === bc
}
