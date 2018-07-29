import { disassemble, search, searchAndPrint } from '../src/index'

describe('disassemble()', () => {
  it('should be sane', () => {
    const input = '擬要也, 마 그리 호려 다, 又欲也, 待賣幾箇馬去 여러  오져 야 가노라'
    const output = ['擬', '要', '也', ',', ' ', ['ᄒ', 'ᆞ'], ['ㅁ', 'ㅏ'], ' ', ['ㄱ', 'ㅡ'], ['ㄹ', 'ㅣ'], ' ', ['ㅎ', 'ㅗ'], ['ㄹ', 'ㅕ'], ' ', ['ᄒ', 'ᆞ'], ['ㄷ', 'ㅏ'], ',', ' ', '又', '欲', '也', ',', ' ', '待', '賣', '幾', '箇', '馬', '去', ' ', ['ㅇ', 'ㅕ'], ['ㄹ', 'ㅓ'], ' ', ['ᄆ', 'ᆞ'], ['ᄅ', 'ᆞ', 'ᆯ'], ' ', ['ᄑ', 'ᆞ', 'ᆯ'], ['ㅇ', 'ㅗ'], ['ㅈ', 'ㅕ'], ' ', ['ᄒ', 'ᆞ'], ['ㅇ', 'ㅑ'], ' ', ['ㄱ', 'ㅏ'], ['ㄴ', 'ㅗ'], ['ㄹ', 'ㅏ']]
    expect(disassemble(input)).toEqual(output)
  })
})

describe('search()', () => {
  it('should be sane', () => {
    const input = '擬要也, 마 그리 호려 다, 又欲也, 待賣幾箇馬去 여러  오져 야 가노라'
    const terms = {
      '그리': [8],
      '待賣幾箇馬去': [23],
      '[ㅎ/ᆞ]': [5, 14, 40],
      '[ㅁㅎ/ᆞ/]': [5, 14, 33, 40],
      '[*/ᆞ]': [5, 14, 33, 40],
      '[*/ᆞㅗ]': [5, 11, 14, 33, 37, 40, 44],
      '[*/*/ㄹ]': [34, 36]
    }
    for (const term in terms) {
      const result = terms[term]
      expect(search(input, term).map(x => x.index)).toEqual(result)
    }
  })
})

describe('searchAndPrint()', () => {
  it('should be sane', () => {
    const input = '擬要也, 마 그리 호려 다, 又欲也, 待賣幾箇馬去 여러  오져 야 가노라'
    const term = '[ㅎ/ᆞ]'
    const results = [
      '擬要也, ****마 그리 호려 다',
      ' 마 그리 호려 ****다, 又欲也, 待賣',
      '여러  오져 ****야 가노라'
    ]

    expect(searchAndPrint(input, term)).toEqual(results)
  })
})
