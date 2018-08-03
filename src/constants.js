/* eslint-disable key-spacing, no-multi-spaces, standard/array-bracket-even-spacing */

// Reference
// https://ko.wikipedia.org/wiki/%EC%98%9B%ED%95%9C%EA%B8%80

export const ModernRange = {
  complete: [0xAC00, 0xD7AF],
  compatibilityJamo: [0x3130, 0x318f]
}

export const CompleteTable = {
  start: [
    'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ',
    'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ',
    'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ',
    'ㅍ', 'ㅎ'
  ],
  middle: [
    'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ',
    'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ',
    'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ',
    'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'
  ],
  end: [
    '', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ',
    'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ',
    'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
  ]
}

export const compatibilityTable = {
  0x3131: [0x1100, null,   0x11A8],  // 'ㄱ'
  0x3132: [0x1101, null,   0x11A9],  // 'ㄲ'
  0x3133: [null,   null,   0x11AA],  // 'ㄳ'
  0x3134: [0x1102, null,   0x11AB],  // 'ㄴ'
  0x3135: [null,   null,   0x11AC],  // 'ㄵ'
  0x3136: [null,   null,   0x11AD],  // 'ㄶ'
  0x3137: [0x1103, null,   0x11AE],  // 'ㄷ'
  0x3138: [0x1104, null,   null  ],  // 'ㄸ'
  0x3139: [0x1105, null,   0x11AF],  // 'ㄹ'
  0x313A: [null,   null,   0x11B0],  // 'ㄺ'
  0x313B: [null,   null,   0x11B1],  // 'ㄻ'
  0x313C: [null,   null,   0x11B2],  // 'ㄼ'
  0x313D: [null,   null,   0x11B3],  // 'ㄽ'
  0x313E: [null,   null,   0x11B4],  // 'ㄾ'
  0x313F: [null,   null,   0x11B5],  // 'ㄿ'
  0x3140: [null,   null,   0x11B6],  // 'ㅀ'
  0x3141: [0x1106, null,   0x11B7],  // 'ㅁ'
  0x3142: [0x1107, null,   0x11B8],  // 'ㅂ'
  0x3143: [0x1108, null,   null  ],  // 'ㅃ'
  0x3144: [null,   null,   0x11B9],  // 'ㅄ'
  0x3145: [0x1109, null,   0x11BA],  // 'ㅅ'
  0x3146: [0x110A, null,   0x11BB],  // 'ㅆ'
  0x3147: [0x110B, null,   0x11BC],  // 'ㅇ'
  0x3148: [0x110C, null,   0x11BD],  // 'ㅈ'
  0x3149: [0x110D, null,   null  ],  // 'ㅉ'
  0x314A: [0x110E, null,   0x11BE],  // 'ㅊ'
  0x314B: [0x110F, null,   0x11BF],  // 'ㅋ'
  0x314C: [0x1110, null,   0x11C0],  // 'ㅌ'
  0x314D: [0x1111, null,   0x11C1],  // 'ㅍ'
  0x314E: [0x1112, null,   0x11C2],  // 'ㅎ'
  0x314F: [null,   0x1161, null  ],  // 'ㅏ'
  0x3150: [null,   0x1162, null  ],  // 'ㅐ'
  0x3151: [null,   0x1163, null  ],  // 'ㅑ'
  0x3152: [null,   0x1164, null  ],  // 'ㅒ'
  0x3153: [null,   0x1165, null  ],  // 'ㅓ'
  0x3154: [null,   0x1166, null  ],  // 'ㅔ'
  0x3155: [null,   0x1167, null  ],  // 'ㅕ'
  0x3156: [null,   0x1168, null  ],  // 'ㅖ'
  0x3157: [null,   0x1169, null  ],  // 'ㅗ'
  0x3158: [null,   0x116A, null  ],  // 'ㅘ'
  0x3159: [null,   0x116B, null  ],  // 'ㅙ'
  0x315A: [null,   0x116C, null  ],  // 'ㅚ'
  0x315B: [null,   0x116D, null  ],  // 'ㅛ'
  0x315C: [null,   0x116E, null  ],  // 'ㅜ'
  0x315D: [null,   0x116F, null  ],  // 'ㅝ'
  0x315E: [null,   0x1170, null  ],  // 'ㅞ'
  0x315F: [null,   0x1171, null  ],  // 'ㅟ'
  0x3160: [null,   0x1172, null  ],  // 'ㅠ'
  0x3161: [null,   0x1173, null  ],  // 'ㅡ'
  0x3162: [null,   0x1174, null  ],  // 'ㅢ'
  0x3163: [null,   0x1175, null  ]   // 'ㅣ'
}
