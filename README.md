# yet.js

옛한글 문서 분석을 위한 라이브러리입니다.

한양PUA와 첫가끝 코드 모두 지원합니다.

## 설치
```
yarn yet.js
```

## 기능

### disassemble(str)

문자열을 자모단위로 쪼갭니다.

```js
disassemble('야 가노라')
// [['ᄒ', 'ᆞ'], ['ㅇ', 'ㅑ'], ' ', ['ㄱ', 'ㅏ'], ['ㄴ', 'ㅗ'], ['ㄹ', 'ㅏ']]
```

* `str` {`String`} 입력 문자열


### search(str, pattern)

문자열에서 특정 유형의 위치를 찾습니다.

```js
search('야 가노라', '가노라')
// [{index: 3, length: 3}]

search('야 가노라', '[ㅎ/ᆞ]')
// [{index: 0, length: 1}]
```

* `str` {`String`} 입력 문자열
* `pattern` {`String`} 찾으려는 유형

찾으려는 유형은 다음과 같은 조합형 검색어를 포함할 수 있습니다.
- `[ㅎ/ᆞ]`: 초성이 ㅎ, 중성이 ᆞ, 종성이 없는 음절
- `[ㅁㅎ/ᆞ]`: 초성이 ㅁ 또는 ㅎ, 중성이 ᆞ, 종성이 없는 음절
- `[*/*/ㄹ]`: 초성, 중성 관계없이 종성이 ㄹ인 음절


### searchAndPrint(str, pattern[, format])

문자열에서 특정 유형의 위치를 찾고, 그 위치를 중심으로 문자열의 일부를 출력합니다.

```js
const str = '擬要也, 마 그리 호려 다, 又欲也, 待賣幾箇馬去 여러  오져 야 가노라'
const pattern = '[ㅎ/ᆞ]'
searchAndPrint(str, pattern)
// [
//   '擬要也, ****마 그리 호려 다',
//   ' 마 그리 호려 ****다, 又欲也, 待賣',
//   '여러  오져 ****야 가노라'
// ]
```

* `str` {`String`} 입력 문자열
* `pattern` {`String`} 찾으려는 유형
* `format` {`Object`} 출력 형식
  - `prefixLength` {`number`} (기본값: 10) 유형 앞 문자의 개수
  - `suffixLength` {`number`} (기본값: 10) 유형 뒤 문자의 개수
  - `highlight` {`String`} (기본값: `**`) 유형 앞뒤에 들어가는 강조 문자
