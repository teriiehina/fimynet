var myFMN;

function appInit () {
	myFMN = new FMNNetwork();

	var networks = myFMN.getNetworks();

	if (networks.length > 0)
	{
		var networkChooser = $('#network_chooser');
		for (var networkIndex = 0; networkIndex < networks.length; networkIndex++) {
			networkChooser.append('<option value="' + networkIndex + '">' + networks[networkIndex] + '</option>');
		}
	}
	else {
		alert("No network available");
	}

	networkChooser.bind('change', onNetworkSelected);

	$('#search').bind('submit', onFormSubmit);
}

function onNetworkSelected() {
	var choosenNetworkIndex = parseInt(this.value, 10);
	if (choosenNetworkIndex >= 0) {
		var networks = myFMN.getNetworks();
		myFMN.currentNetwork = networks[choosenNetworkIndex];

		var networkStations = myFMN.getStations(myFMN.currentNetwork);
		var stationSelects = $('#search>select');
		for (var stationIndex in networkStations) {
			stationSelects.append('<option value="' + stationIndex + '">' + networkStations[stationIndex] + '</option>');
		}
	}
	else {
		alert("Please choose a network.");
	}
}

function onModeClick(mode) {
	$('#mode').val(mode);
	return false;
}

function onFormSubmit(event) {
	var fromStationIndex	= parseInt(event.target.from.value, 10);
	var toStationIndex		= parseInt(event.target.to.value, 10);

	var stations = myFMN.getStations(myFMN.currentNetwork);

	if (fromStationIndex < 0) {
		alert("Please choose a departure Station");
	}
	else if (toStationIndex < 0) {
		alert("Please choose a destination Station");
	}
	else if (fromStationIndex == toStationIndex) {
		alert("I think that it will be not so complicate ;)")
	}
	else {
		var mode = $('#mode').val();
		//onSearchSuccess(myFMN.search(myFMN.currentNetwork, stations[fromStationIndex] , stations[toStationIndex] , mode));
		onSearchSuccess(paris.pathBetween("Concorde", "Argentine"));
	}
	return false;
}

function onSearchSuccess(result) {
	if (result.length == 0) {
		alert('No result found :(');
	}
	else {
		var divResult = $('#result');

		var ul = $('<ul />');
		for (var resultIndex in result) {
			ul.append('<li>' + result[resultIndex] + '</li>');
		}
		divResult.html(ul);
	}
}