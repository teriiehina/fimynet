function FMNGraph() {
  this.nodes = Array();
  this.edges = Array();
};

FMNGraph.prototype.toString = function() {
  return "we have " + this.nodes.length + " nodes and " + this.edges.length+ " edges";
}

FMNGraph.prototype.adjacent = function (node1 , node2) {

};

FMNGraph.prototype.neighbors = function(node) {

};

FMNGraph.prototype.addNode = function (name) {
  // check if we don't already have the node
  if(this.getNode(name) == null) {
    this.nodes.push(new FMNNode(name));
  };
};

FMNGraph.prototype.getNode = function (name) {
  var nodes_count = this.nodes.length;
  for (var i = 0 ; i < nodes_count ; i++) {
//    console.log ("comparaison : " + this.nodes[i].name + " : " + name);
    if (this.nodes[i].name == name ) {
      return this.nodes[i];
    }
  }
  return null;
};

FMNGraph.prototype.deleteNode = function (name) {

};

FMNGraph.prototype.addEdge = function (value , node1 , node2) {
//  console.log("ajout d'un tronçon de la ligne " + value + " entre " + node1+ " et " + node2);
  this.edges.push(new FMNEdge(value , node1 , node2));
};

FMNGraph.prototype.deleteEdge = function (node1, node2) {

};


function FMNNode(nodeName) {
  this.name = nodeName;
};

function FMNEdge(edgeValue , node1Name , node2Name) {
  this.value = edgeValue;
  this.node1 = node1Name;
  this.node2 = node2Name;
};
