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
  }
]
