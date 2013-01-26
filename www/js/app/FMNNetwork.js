function FMNNetwork() {
  this.networks = new Array();
  this.stations = new Array();
  this.currentNetwork = undefined;
}

FMNNetwork.prototype.getNetworks = function() {
  return ["Métro parisien" , "Métro tahitien"];
};

FMNNetwork.prototype.getStations = function(network) {
  return stations;
};

FMNNetwork.prototype.getModes = function() {
  return ["stations", "correspondances"];
};

FMNNetwork.prototype.search = function (network , departure , arrival , mode) {
};

FMNNetwork.prototype.addNetwork = function (network) {
  if (this.networks.indexOf(network) == -1) {
    this.networks.put(network);
  }
};

FMNNetwork.prototype.addStations = function (network , stations ) {
  var networkIndex = this.networks.indexOf(network);
  if (networkIndex == -1) {
    this.addNetwork(network);
    networkIndex = this.networks.length - 1;
  }
  var networkToComplete = this.networks[networkIndex];

  var existingStations = this.getStations(networkToComplete) || new Array();
  var newNetworkStations = existingStations.concat(stations);
  //TODO To be continued
};

FMNNetwork.prototype.addStation = function (network , station) {
  this.addStations(network, [station]);
}
