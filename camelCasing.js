// complete the function
const isUpperCase = (string) => /^[A-Z]*$/.test(string)

function solution(string) {
    return string.split('').map(
      letter => {
        return isUpperCase(letter) ? (' ' + letter) : letter
      }
    ).join('')
}
