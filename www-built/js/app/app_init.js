function appInit(){myFMN=new FMNNetwork,myFMN.addStations("Métro parisien",paris.nodes);var e=myFMN.getNetworks();if(e.length>0){var t=$("#network_chooser");for(var n=0;n<e.length;n++)t.append('<option value="'+n+'">'+e[n]+"</option>")}else alert("No network available");t.bind("change",onNetworkSelected),fillSelectFromNetworkWithIndex(0),$("#search").bind("submit",onFormSubmit)}function onNetworkSelected(){var e=parseInt(this.value,10);e>=0?fillSelectFromNetworkWithIndex(e):alert("Please choose a network.")}function fillSelectFromNetworkWithIndex(e){var t=myFMN.getNetworks();myFMN.currentNetwork=t[e];var n=myFMN.getStations(myFMN.currentNetwork),r=$("#search select");for(var i in n)r.append('<option value="'+i+'">'+n[i].name+"</option>")}function onModeClick(e){return $("#mode").val(e),!1}function onFormSubmit(e){var t=parseInt(e.target.from.value,10),n=parseInt(e.target.to.value,10),r=myFMN.getStations(myFMN.currentNetwork),i=!1;if(t<0)alert("Please choose a departure Station");else if(n<0)alert("Please choose a destination Station");else if(t==n)alert("I think that it will be not so complicate ;)");else{var s=$("#mode").val();onSearchSuccess(paris.pathBetween(r[t].name,r[n].name)),i=!0}return i||onSearchError(),!1}function onSearchError(){$("#result").empty()}function onSearchSuccess(e){var t=$("#result");if(e.length==0)t.empty(),alert("No result found :(");else{var n=$("<ul />");for(var r in e){var i=e[r];n.append("<li>"+i.name+"</li>")}t.html(n),setTimeout(function(){window.scrollTo(0,document.body.scrollHeight)},600)}}var myFMN