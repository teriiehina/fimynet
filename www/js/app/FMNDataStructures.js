var INF = 10000;

function FMNGraph() {
  this.nodes     = Array();
  this.edges     = Array();
  this.distances = {};
};

FMNGraph.prototype.toString = function() {
  return "we have " + this.nodes.length + " nodes and " + this.edges.length+ " edges";
}

FMNGraph.prototype.adjacent = function (node1 , node2) {

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
  this.distances = {};
  for (var i in this.nodes) {
    this.distances[this.nodes[i].name] = INF;
  }
  this.distances[start] = 0;
};

FMNGraph.prototype.updateDistance = function (node1 , node2) {
  if (this.distances[node2] > this.distances[node1] + 1) {
    this.distances[node2] = this.distances[node1] + 1;
  }
};

FMNGraph.prototype.pathBetween = function(start , end) {

  this.initPathSearch(start);

  return [
      ["ligne 4" , "station 2"],
      ["ligne 4" , "station 3"],
      ["ligne 5" , "station 4"],
      ["ligne 5" , "station 5"],
      ["ligne 6" , "station 6"]
  ];

};

function FMNNode(nodeName) {
  var name = nodeName;
};

function FMNEdge(edgeValue , node1Name , node2Name) {
  var value = edgeValue;
  var node1 = node1Name;
  var node2 = node2Name;
};
