function matchingStrings(strings, queries) {
    return queries.map(query => {
        const queryRegex = new RegExp(query, 'g');
        return strings.reduce((a, s) => s.match(queryRegex) ? ++a : a, 0);
    })
}



const strings = ['aba', 'baba', 'abc']
const queries = ['ab', 'abc', 'bc']
console.log(
    matchingStrings(strings, queries)
)