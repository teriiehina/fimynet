var INF = 10000;

function FMNGraph() {
  this.nodes     = [];
  this.edges     = [];
  this.costs     = {};
  this.distances = null;
};

FMNGraph.prototype.toString = function() {
  return "we have " + this.nodes.length + " nodes and " + this.edges.length+ " edges";
}

FMNGraph.prototype.initDistances = function () {
  if (this.distances != null ) return;
  this.distances = {};
  var nodes_count = this.nodes.length;

  for(var i = 0 ; i < nodes_count ; i++) {
    var node1 = this.nodes[i];
    this.distances[node1.name] = {};
    for (var j = 0 ; j < nodes_count ; j++) {
      var node2 = this.nodes[j];
//      console.log("distance entre " + node1.name + " et " + node2.name);
      if (this.adjacent(node1 , node2))
        this.distances[node1.name][node2.name] = 1;
      else 
        this.distances[node1.name][node2.name] = 0;
    }
  }
}

FMNGraph.prototype.adjacent = function (node1 , node2) {
  var edges_count = this.edges.length;
  for (var i = 0 ; i < edges_count ; i++) {
    var edge = this.edges[i];
    if(edge.node1Name == node1.name && edge.node2Name == node2.name) {
      return 1;
    }
  }
  return 0;
};

FMNGraph.prototype.neighbors = function(node) {
  var voisins = [];
  var nodes_count = this.nodes.length;

  for (var i = 0 ; i < nodes_count ; i++) {
    if (this.adjacent(node , this.nodes[i])) {
      voisins.push(this.nodes[i]);
    }
  }

  return voisins;
};

FMNGraph.prototype.addNode = function (name) {
  if (this.getNode(name) == null) {
    this.nodes.push(new FMNNode(name));
  }
};

FMNGraph.prototype.getNode = function (name) {
  var nodes_count = this.nodes.length;
  for (var i = 0 ; i < nodes_count ; i++) {
    if (this.nodes[i].name == name) {
      return this.nodes[i];
    }
  }  
  return null;
};

FMNGraph.prototype.deleteNode = function (name) {

};

FMNGraph.prototype.addEdge = function (value , node1 , node2) {
  this.edges.push(new FMNEdge(value , node1 , node2));
};

FMNGraph.prototype.deleteEdge = function (node1, node2) {

};

FMNGraph.prototype.initCosts = function (start) {
  this.costs = {};
  var nodes_count = this.nodes.length;
  for (var i = 0; i < nodes_count ; i++) {
    this.costs[this.nodes[i].name] = INF;
    if (this.adjacent(start , this.nodes[i])) {
      this.costs[this.nodes[i].name] = 1;
    }
  }
  this.costs[start] = 0;
};

FMNGraph.prototype.updateCost = function (node1 , node2) {
  if (this.costs[node2.name] > this.costs[node1.name] + 1) {
    this.costs[node2.name] = this.costs[node1.name] + 1;
  }
};

FMNGraph.prototype.nearest = function (start , nodes) {
  // return nearest node to start that belongs to nodes
  // as every edge are valued at 1 , we can return
  // the first one
  var nodes_count  = nodes.length;
  var min_distance = INF;
  var nearest      = null;

  for (var i = 0 ; i < nodes_count ; i++) {
    var node = this.nodes[i];
    if (this.costs[node.name] < min_distance) {
      min_distance = this.costs[node.name];
      nearest = node;
    }
  }
  return nearest;
}

FMNGraph.prototype.dijkstraSearch = function(start) {
  var marked = this.nodes.slice(0);

  while(marked.length > 0) {
    var nearest = this.nearest(start , marked);
    var index_nearest = marked.indexOf(nearest);
    marked.splice(index_nearest , 1);
    var neighbors = this.neighbors(nearest);
    for (var i in neighbors) {
      this.updateCost(nearest , neighbors[i]);
    }
  }
};

FMNGraph.prototype.previousNode = function (node) {
  var neighbors = this.neighbors(node);
  var neighbors_count = neighbors.length;
  console.log(node.name + " : " + this.costs[node.name]);
  for (var i = 0 ; i < neighbors_count ; i++ ) {
    console.log(neighbors[i].name + " : " + this.costs[neighbors[i].name]);
    if (this.costs[neighbors[i].name] == (this.costs[node.name] - 1)) {
      return neighbors[i]; 
    }
  }
  console.log(neighbors_count + " voisins et aucun précédent à " + node.name);
  return null;
};

FMNGraph.prototype.path = function(start , end) {
  var path = [];
  var node = end;
  path.push(node);
  while(node != start) {
    node = this.previousNode(node); 
    path.push(node);
  }
  return path.reverse();
};

FMNGraph.prototype.pathBetween = function(start , end) {

  this.initDistances();
  this.initCosts(start);
  this.dijkstraSearch(start);
  
  var startNode = this.getNode(start);
  var endNode = this.getNode(end);

  return this.path(startNode , endNode);

  return [
      ["ligne 4" , "station 2"],
      ["ligne 4" , "station 3"],
      ["ligne 5" , "station 4"],
      ["ligne 5" , "station 5"],
      ["ligne 6" , "station 6"]
  ];

};

function FMNNode(nodeName) {
  this.name = nodeName;
};

function FMNEdge(edgeValue , node1Name , node2Name) {
  this.value = edgeValue;
  this.node1Name = node1Name;
  this.node2Name = node2Name;
};
