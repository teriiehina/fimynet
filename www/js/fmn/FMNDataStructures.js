function FMNGraph() {
  this.nodes = Array();
  this.edges = Array();
};

FMNGraph.prototype.toString = function() {
  return "we have " + this.nodes.length + " and " + this.edges.length+ " edges";
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


function FMNNode(nodeName) {
  var name = nodeName;
};

function FMNEdge(edgeValue , node1Name , node2Name) {
  var value = edgeValue;
  var node1 = node1Name;
  var node2 = node2Name;
};