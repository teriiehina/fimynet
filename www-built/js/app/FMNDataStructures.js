function FMNGraph(){this.nodes=[],this.edges=[],this.costs={},this.distances=null}function FMNNode(e){this.name=e}function FMNEdge(e,t,n){this.value=e,this.node1Name=t,this.node2Name=n}var INF=1e4;FMNGraph.prototype.toString=function(){return"we have "+this.nodes.length+" nodes and "+this.edges.length+" edges"},FMNGraph.prototype.initDistances=function(){if(this.distances!=null)return;this.distances={};var e=this.nodes.length;for(var t=0;t<e;t++){var n=this.nodes[t];this.distances[n.name]={};for(var r=0;r<e;r++){var i=this.nodes[r];this.adjacent(n,i)?this.distances[n.name][i.name]=1:this.distances[n.name][i.name]=0}}},FMNGraph.prototype.adjacent=function(e,t){var n=this.edges.length;for(var r=0;r<n;r++){var i=this.edges[r];(e==null||e==undefined)&&console.log("adjacent ? : "+t.name);if(i.node1Name==e.name&&i.node2Name==t.name)return 1;if(i.node1Name==t.name&&i.node2Name==e.name)return 1}return 0},FMNGraph.prototype.neighbors=function(e){var t=[],n=this.nodes.length;for(var r=0;r<n;r++)this.adjacent(e,this.nodes[r])&&t.push(this.nodes[r]);return t},FMNGraph.prototype.addNode=function(e){this.getNode(e)==null&&this.nodes.push(new FMNNode(e))},FMNGraph.prototype.getNode=function(e){var t=this.nodes.length;for(var n=0;n<t;n++)if(this.nodes[n].name==e)return this.nodes[n];return null},FMNGraph.prototype.deleteNode=function(e){},FMNGraph.prototype.addEdge=function(e,t,n){this.edges.push(new FMNEdge(e,t,n))},FMNGraph.prototype.deleteEdge=function(e,t){},FMNGraph.prototype.initCosts=function(e){this.costs={};var t=this.nodes.length;for(var n=0;n<t;n++)this.costs[this.nodes[n].name]=INF,this.adjacent(e,this.nodes[n])&&(this.costs[this.nodes[n].name]=1);this.costs[e.name]=0},FMNGraph.prototype.updateCost=function(e,t){this.costs[t.name]>this.costs[e.name]+1&&(this.costs[t.name]=this.costs[e.name]+1)},FMNGraph.prototype.nearest=function(e,t){var n=t.length,r=INF,i=null;for(var s=0;s<n;s++){var o=t[s];this.costs[o.name]<r&&(r=this.costs[o.name],i=o)}return i},FMNGraph.prototype.dijkstraSearch=function(e){var t=this.nodes.slice(0);console.log(this.nodes.length);while(t.length>0){var n=this.nearest(e,t),r=this.neighbors(n),i=r.length;for(var s=0;s<i;s++)this.updateCost(n,r[s]);var o=t.indexOf(n);t.splice(o,1),console.log("on retire "+n.name+":"+o),console.log(t.length+":"+n.name+" = "+r.length)}},FMNGraph.prototype.previousNode=function(e){var t=this.neighbors(e),n=t.length;console.log(e.name+" : "+this.costs[e.name]);for(var r=0;r<n;r++){console.log(t[r].name+" : "+this.costs[t[r].name]);if(this.costs[t[r].name]==this.costs[e.name]-1)return t[r]}return console.log(n+" voisins et aucun précédent à "+e.name),null},FMNGraph.prototype.path=function(e,t){var n=[],r=t;n.push(r);while(r!=e)r=this.previousNode(r),n.push(r);return n.reverse()},FMNGraph.prototype.pathBetween=function(e,t){var n=this.getNode(e),r=this.getNode(t);return this.initDistances(),this.initCosts(n),this.dijkstraSearch(e),this.path(n,r)}