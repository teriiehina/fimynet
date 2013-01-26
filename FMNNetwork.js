var FMNNetwork = {
  networks : Array(),
  stations : Array(),

  getNetworks : function() {
    return ["métro parisien" , "métro tahitien"];
  },

  getStations : function(network) {
    return ["station 1", "station 2", "station 3", "station 4", "station 5"];
  },

  getModes : function() {
    return ["stations", "correspondances"];
  }

  search : function (network , departure , arrival , mode) {
    return [
        ["ligne 4" , "station 2"],
        ["ligne 4" , "station 3"],
        ["ligne 5" , "station 4"]
    ];
  },

  addNetwork : function (network) {

  },

  addStations : function (network , stations ) {

  },

  addStation : function (network , station) {

  }
};
