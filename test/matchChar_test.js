import matchChar from '../src/character/matchChar'

describe('matchChar()', () => {
  it('compares two strings', () => {
    const a = '也'
    const b = '也'
    expect(matchChar(a, b)).toBeTruthy()
  })

  it('compares two arrays', () => {
    const a = ['ㄹ', 'ㅡ', 'ㄴ']
    const b = ['ㄹ', 'ㅡ', 'ㄴ']
    expect(matchChar(a, b)).toBeTruthy()
  })

  it('compares two arrays contains multiple jamos', () => {
    const a = ['ㄹ', 'ㅡ', 'ㄴ']
    const b = ['ㄹㅁ', 'ㅡㅣ', '*']
    expect(matchChar(a, b)).toBeTruthy()
  })

  it('compares between IPF jamo and compatibility jamo', () => {
    const a = ['ᄅ', 'ᅳ', 'ᆫ'] // IPF jamo
    const b = ['ㄹ', 'ㅡ', 'ㄴ'] // compatibility jamo
    a.forEach((ax, i) => {
      const bx = b[i]
      expect(ax).not.toBe(bx)
    })
    expect(matchChar(a, b)).toBeTruthy()
    expect(matchChar(b, a)).toBeTruthy()
  })
})
