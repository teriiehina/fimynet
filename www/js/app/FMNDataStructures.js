var INF = 10000;

function FMNGraph() {
  this.nodes     = Array();
  this.edges     = Array();
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

};

FMNGraph.prototype.addNode = function (name) {
  this.nodes.push(new FMNNode(name));
};

FMNGraph.prototype.deleteNode = function (name) {

};

FMNGraph.prototype.addEdge = function (value , node1 , node2) {
  this.edges.push(new FMNEdge(value , node1 , node2));
};

FMNGraph.prototype.deleteEdge = function (node1, node2) {

};

FMNGraph.prototype.initPathSearch = function (start) {
  this.costs = {};
  for (var i in this.nodes) {
    this.costs[this.nodes[i].name] = INF;
  }
  this.costs[start] = 0;
};

FMNGraph.prototype.updateCost = function (node1 , node2) {
  if (this.costs[node2] > this.costs[node1] + 1) {
    this.costs[node2] = this.costs[node1] + 1;
  }
};

FMNGraph.prototype.nearest = function (start , nodes) {
  
}

FMNGraph.prototype.dijkstraSearch = function(start) {
  var marked = this.nodes.slice(0);
  while(marked.length > 0) {
    var nearest = this.nearest(start , marked);
    nearest = marked.pop();
    var neighbors = this.neighbors(nearest);
    for (var i in neighbors) {
      this.updateDistance(nearest , neighbors[i]);
    }
  }
};

FMNGraph.prototype.pathBetween = function(start , end) {

  this.initDistances();
  this.initPathSearch(start);
  this.dijkstraSearch(start);

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
