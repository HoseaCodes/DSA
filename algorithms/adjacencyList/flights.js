// Undirected, Not weighted, No Cycles
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ')

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
    ['LIM', 'BKK'],
]

// The graph
const adjacencyList = new Map();

// Add a node to the map
function addNode(airport) {
    adjacencyList.set(airport, []);
}

// Add edge, undirected
function addEdge(origin, destination) {
    adjacencyList.get(origin).push(destination)
    adjacencyList.get(destination).push(origin)
}

// Create the grapgh
airports.forEach(addNode);
routes.forEach((route) => addEdge(...route))

console.log(adjacencyList)

// BFS - Find all routes to a specific airport
function bfs(startNode) {
    const visited = new Set();
    const queue = [startNode];

    while (queue.length > 0) {
        // Add items to the beginning of the array
        const airport = queue.shift();
        // Get all of the edges of the graph
        const destinations = adjacencyList.get(airport);
        for (const destination of destinations) {
            
            if (destination === 'BKK') {
                console.log(`Found path: ${[...queue].reverse().join(" -> ")}`);
            }

            if (!visited.has(destination)) {
                visited.add(destination)
                queue.push(destination);
            }
        }
    }
}

bfs('PHX');


// DFS - Find any route as quickly as possible

function dfs(startNode, visited = new Set()) {
    console.log(startNode)

    visited.add(startNode);

    const destinations = adjacencyList.get(startNode);

    for (const destination of destinations) {
        if (destination === 'BKK') {
            console.log(`DFS found Bangkok ${steps} in steps`)
            return;
        }

        if (!visited.has(destination)) {
            dfs(destination, visited);
        }
    }

}

dfs('PHX')

/** Time Complexity - O(V + E) - V is the number of vertexs(nodes)
 * and E is the number of Edges. This can also be expressed as O(N).
 */

/* 

Alternative Problems:

- Netflix Movies that you watched to moves you may want to watch in the future.
- Yelp Recommendations

*/