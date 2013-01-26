var myFMN = new FMNNetwork();

function appInit () {
	var networks = myFMN.getNetworks();

	var networkChooser = $('#network_chooser');
	for (var networkIndex in networks) {
		networkChooser.append('<option value="' + networkIndex + '">' + networks[networkIndex] + '</option>');
	}

	networkChooser.bind('change', onNetworkSelected);
}

function onNetworkSelected() {
	var networks = myFMN.getNetworks();
	var choosenNetwork = networks[this.value];
	alert(choosenNetwork + ', good Choice !');

	var networkStations = myFMN.getStations(choosenNetwork);
	var stationSelects = $('#search>select');
	for (var stationIndex in networkStations) {
		stationSelects.append('<option value="' + stationIndex + '">' + networkStations[stationIndex] + '</option>');
	}
}