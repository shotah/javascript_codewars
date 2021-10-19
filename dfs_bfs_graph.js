const airports = "phx bkk okc jfk lax mex eze hel los lap lim".split(" ");

const routes = [
  ["phx", "lax"],
  ["phx", "jfk"],
  ["jfk", "okc"],
  ["jfk", "hel"],
  ["jfk", "los"],
  ["mex", "lax"],
  ["mex", "bkk"],
  ["mex", "lim"],
  ["mex", "eze"],
  ["lim", "bkk"],
];

// the graph
const adjacencyList = new Map();

// add node
function addNode(airport) {
  adjacencyList.set(airport, []);
}

// add edge, undirected
function addEdge(origin, destination) {
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
}

// create the graph
airports.forEach(addNode);
routes.forEach((route) => addEdge(...route));

console.log(adjacencyList);

// BFS bredth first search

function bfs(start) {
  const visited = new Set();
  const queue = [start];

  while (queue.length > 0) {
    const airport = queue.shift(); // mutates the queue
    const destinations = adjacencyList.get(airport);

    for (const destination of destinations) {
      if (destination === "bkk") {
        console.log("found it");
      }

      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
        console.log(destination);
      }
    }
  }
}

bfs("phx");

// DFS Depth First Search
function dfs(start, visited = new Set()) {
  console.log(start);
  visited.add(start);

  const destination = adjacencyList.get(start);

  for (const destination of destinations) {
    if (destination === "bkk") {
      console.log("DFS found Bangkok in steps");
      return;
    }

    if (!visited.has(destination)) {
      dfs(destination, visited);
    }
  }
}

dfs("phx");

// time complexity
// O(N)
// O (vertices + edges)
