import disassembleChar from '../src/character/disassembleChar'

describe('disassembleChar()', () => {
  it('should handle HYPUA', () => {
    const input = ''
    const output = ['ᄑ', 'ᆞ', 'ᆯ']
    expect(disassembleChar(input)).toEqual(output)
  })

  it('should handle complete', () => {
    const input = '른'
    const output = ['ㄹ', 'ㅡ', 'ㄴ']
    expect(disassembleChar(input)).toEqual(output)
  })
})
