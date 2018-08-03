import disassembleChar from './character/disassembleChar'

const disassemble = (str, containsComp = false) => {
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

export default disassemble
