const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK']
];

const adjacencyList = new Map();

function addNode(airport) {
    adjacencyList.set(airport, []);
}

function addEdge(origin, destination) {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
}

airports.forEach(addNode);
routes.forEach(route => addEdge(...route));

// console.log(adjacencyList)
// phenox to bkk

function bfs(start, finish) {
    const visited = new Set();
    const queue = [start];
    //const adjacencies = adjacencyList.get(start)

    while (queue.length > 0) {
        const airport = queue.shift();
        const destinations = adjacencyList.get(airport);

        for(const destination of destinations) {
            if (destination === finish) {
                console.log(`found ${finish}!`)
            }

            if (!visited.has(destination)) {
                visited.add(destination);
                queue.push(destination);
                console.log(destination);
            }
        }
    }
}

// bfs('PHX', 'BKK')
// console.log(adjacencyList.get('LAX'))

function dfs(start, visited = new Set(), steps = 0) {
    visited.add(start);
    steps++
    const destinations = adjacencyList.get(start);

    for (const destination of destinations) {
        if (destination === 'BKK') {
            console.log(`Found Bangkok in ${steps} steps!`)
            return;
        }

        if (!visited.has(destination)) {
            dfs(destination, visited, steps);
        }

    }

}

dfs('PHX')