function appInit(){myFMN=new FMNNetwork,myFMN.addStations("Métro parisien",paris.nodes);var e=myFMN.getNetworks();if(e.length>0){var t=$("#network_chooser");for(var n=0;n<e.length;n++)t.append('<option value="'+n+'">'+e[n]+"</option>")}else alert("No network available");t.bind("change",onNetworkSelected),$("#search").bind("submit",onFormSubmit)}function onNetworkSelected(){var e=parseInt(this.value,10);if(e>=0){var t=myFMN.getNetworks();myFMN.currentNetwork=t[e];var n=myFMN.getStations(myFMN.currentNetwork),r=$("#search>select");for(var i in n)r.append('<option value="'+i+'">'+n[i].name+"</option>")}else alert("Please choose a network.")}function onModeClick(e){return $("#mode").val(e),!1}function onFormSubmit(e){var t=parseInt(e.target.from.value,10),n=parseInt(e.target.to.value,10),r=myFMN.getStations(myFMN.currentNetwork);if(t<0)alert("Please choose a departure Station");else if(n<0)alert("Please choose a destination Station");else if(t==n)alert("I think that it will be not so complicate ;)");else{var i=$("#mode").val();onSearchSuccess(paris.pathBetween(r[t].name,r[n].name))}return!1}function onSearchSuccess(e){if(e.length==0)alert("No result found :(");else{var t=$("#result"),n=$("<ul />");for(var r in e){var i=e[r];n.append("<li>"+i.name+"</li>")}t.html(n)}}var myFMN