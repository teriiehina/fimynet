var myFMN;

function appInit () {
	myFMN = new FMNNetwork();

	var networks = myFMN.getNetworks();

	var networkChooser = $('#network_chooser');
	for (var networkIndex in networks) {
		networkChooser.append('<option value="' + networkIndex + '">' + networks[networkIndex] + '</option>');
	}

	networkChooser.bind('change', onNetworkSelected);

	var form = $('#search');
	form.bind('submit', onFormSubmit);
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
}

function onFormSubmit() {
	var fromStationIndex	= parseInt($('#from').value, 10);
	var toStationIndex		= parseInt($('#to').value, 10);

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
		onSearchSuccess(myFMN.search(myFMN.currentNetwork , stations[fromStationIndex] , stations[toStationIndex] , mode));
	}
	return false;
}

function onSearchSuccess(result) {
	if (result.length == 0) {
		alert('No result found :(');
	}
	else {
		alert(result);
		var divResult = $('#result');

		var ul = $('<ul />');
		for (var resultIndex in result) {
			ul.append('<li>' + result[resultIndex] + '</li>');
		}
		divResult.html(ul);
	}
}