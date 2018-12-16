import { search } from '../src'

describe('search()', () => {
  it('should be sane', () => {
    const input =
      '擬要也, 마 그리 호려 다, 又欲也, 待賣幾箇馬去 여러  오져 야 가노라'
    const terms = {
      그리: [8],
      待賣幾箇馬去: [23],
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
