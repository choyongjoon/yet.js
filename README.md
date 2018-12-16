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

- `str` {`String`} 입력 문자열

### search(str, pattern)

문자열에서 특정 유형의 위치를 찾습니다.

```js
search('야 가노라', '가노라')
// [{index: 3, length: 3}]

search('야 가노라', '[ㅎ/ᆞ]')
// [{index: 0, length: 1}]
```

- `str` {`String`} 입력 문자열
- `pattern` {`String`} 찾으려는 유형

찾으려는 유형은 다음과 같은 조합형 검색어를 포함할 수 있습니다.

- `[ㅎ/ᆞ]`: 초성이 ㅎ, 중성이 ᆞ, 종성이 없는 음절
- `[ㅁㅎ/ᆞ]`: 초성이 ㅁ 또는 ㅎ, 중성이 ᆞ, 종성이 없는 음절
- `[*/*/ㄹ]`: 초성, 중성 관계없이 종성이 ㄹ인 음절
