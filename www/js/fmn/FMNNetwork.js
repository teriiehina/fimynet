function FMNNetwork() {
  this.networks = new Array();
  this.stations = new Array();
}

FMNNetwork.prototype.getNetworks = function() {
  return ["métro parisien" , "métro tahitien"];
};

FMNNetwork.prototype.getStations = function(network) {
  return ["station 1", "station 2", "station 3", "station 4", "station 5"];
};

FMNNetwork.prototype.getModes = function() {
  return ["stations", "correspondances"];
};

FMNNetwork.prototype.search = function (network , departure , arrival , mode) {
  return [
      ["ligne 4" , "station 2"],
      ["ligne 4" , "station 3"],
      ["ligne 5" , "station 4"],
      ["ligne 5" , "station 5"],
      ["ligne 6" , "station 6"]
  ];
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