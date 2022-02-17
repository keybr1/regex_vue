export default [
  {
    name: 'Match Text',
    toMatch: 'oatmeal',
    fullText: 'oatmeal',
    needFlags: false,
    info: 'Type exact characters to match.'
  },
  {
    name: 'Match Lowercase',
    toMatch: 'toast',
    fullText: 'toast',
    needFlags: false,
    info: 'Use a capture group for lowercase letters: [a-z].'
  },
  {
    name: 'Match Uppercase',
    toMatch: 'TOAST',
    fullText: 'TOAST',
    needFlags: false,
    info: 'Use a capture group for uppercase letters: [A-Z].'
  },
  {
    name: 'Match Mixed-cases',
    toMatch: 'Avocado',
    fullText: 'Avocado',
    needFlags: true,
    info: 'Use a capture group for uppercase letters: [A-Za-z].'
  },
  {
    name: 'Phrases',
    toMatch: 'Avocado toast is awesome',
    fullText: 'Avocado toast is awesome',
    needFlags: false,
    info: 'Match with spaces: [A-Z a-z].'
  },
  {
    name: 'Match Numbers',
    fullText: '12345',
    toMatch: '12345',
    needsFlags: false,
    info: 'Use a capture group for numbers: [0-9].'
  },
  {
    name: 'Match Word in Text',
    fullText: 'Vermont Maple Syrup',
    toMatch: 'Maple',
    needsFlags: false,
    info: 'You can use regex to match one part of a string. In this case, use the techniques you have learned in previous lessons to match the word, "Maple".'
  },
  {
    name: 'Match First Word in Text',
    fullText: 'Vermont Maple Syrup',
    toMatch: 'Maple',
    needsFlags: false,
    info: 'You can use regex to match one part of a string. In this case, use the techniques you have learned in previous lessons to match the word, "Maple".'
  },
  {
    name: 'Match Last Word in Text',
    fullText: 'Vermont Maple Syrup',
    toMatch: 'Maple',
    needsFlags: false,
    info: 'You can use regex to match one part of a string. In this case, use the techniques you have learned in previous lessons to match the word, "Maple".'
  },
  {
    name: 'Use Global Flag',
    fullText: 'This plate is larger than that plate.',
    toMatch: 'plate',
    flags: false,
    info: 'You can use regex to match a string multiple times...'
  }
]
