var l1_1  = "La Défense Grande Arche";
var l1_2  = "Esplanade de La Défense";
var l1_3  = "Pont de NeuillyNeuilly-sur-Seine";
var l1_4  = "Les Sablons Jardin d'AcclimatationNeuilly-sur-Seine";
var l1_5  = "Porte Maillot Palais des Congrès";
var l1_6  = "Argentine";
var l1_7  = "Charles de Gaulle - Étoile";
var l1_8  = "George V";
var l1_9  = "Franklin D. Roosevelt";
var l1_10 = "Champs-Élysées - Clemenceau , Grand Palais";
var l1_11 = "Concorde";
var l1_12 = "Tuileries";
var l1_13 = "Palais Royal - Musée du Louvre";
var l1_14 = "Louvre - Rivoli";
var l1_15 = "Châtelet";
var l1_16 = "Hôtel de Ville4e";
var l1_17 = "Saint-Paul Le Marais";
var l1_18 = "Bastille";
var l1_19 = "Gare de Lyon";
var l1_20 = "Reuilly - Diderot";
var l1_21 = "Nation";
var l1_22 = "Porte de Vincennes";
var l1_23 = "Saint-MandéSaint-Mandé";
var l1_24 = "BéraultSaint-Mandé, Vincennes";
var l1_25 = "Château de Vincennes";

var frParisSubway = {
  // créer un graphe avec : 
  //   - les nodes (les stations)
  //   - les egdges (les portions de lignes)

  var paris = new Graph();

  // ligne 1 , stations

  paris.addNode(l1_1);
  paris.addNode(l1_2);
  paris.addNode(l1_3);
  paris.addNode(l1_4);
  paris.addNode(l1_5);
  paris.addNode(l1_6);
  paris.addNode(l1_7);
  paris.addNode(l1_8);
  paris.addNode(l1_9);
  paris.addNode(l1_10);
  paris.addNode(l1_11);
  paris.addNode(l1_12);
  paris.addNode(l1_13);
  paris.addNode(l1_14);
  paris.addNode(l1_15);
  paris.addNode(l1_16);
  paris.addNode(l1_17);
  paris.addNode(l1_18);
  paris.addNode(l1_19);
  paris.addNode(l1_20);
  paris.addNode(l1_21);
  paris.addNode(l1_22);
  paris.addNode(l1_23);
  paris.addNode(l1_24);
  paris.addNode(l1_25);

  // ligne 1 , portions 

  paris.addEdge("1" , l1_1  , l1_25 );
  paris.addEdge("1" , l1_2  , l1_24 );
  paris.addEdge("1" , l1_3  , l1_23 );
  paris.addEdge("1" , l1_4  , l1_22 );
  paris.addEdge("1" , l1_5  , l1_21 );
  paris.addEdge("1" , l1_6  , l1_20 );
  paris.addEdge("1" , l1_7  , l1_19 );
  paris.addEdge("1" , l1_8  , l1_18 );
  paris.addEdge("1" , l1_9  , l1_17 );
  paris.addEdge("1" , l1_10 , l1_16 );
  paris.addEdge("1" , l1_11 , l1_15 );
  paris.addEdge("1" , l1_12 , l1_14 );
  paris.addEdge("1" , l1_13 , l1_13 );
  paris.addEdge("1" , l1_14 , l1_12 );
  paris.addEdge("1" , l1_15 , l1_11 );
  paris.addEdge("1" , l1_16 , l1_10 );
  paris.addEdge("1" , l1_17 , l1_9  );
  paris.addEdge("1" , l1_18 , l1_8  );
  paris.addEdge("1" , l1_19 , l1_7  );
  paris.addEdge("1" , l1_20 , l1_6  );
  paris.addEdge("1" , l1_21 , l1_5  );
  paris.addEdge("1" , l1_22 , l1_4  );
  paris.addEdge("1" , l1_23 , l1_3  );
  paris.addEdge("1" , l1_24 , l1_2  );
  paris.addEdge("1" , l1_25 , l1_1  );
  
  paris.addEdge("1" , l1_25 , l1_1  );
  paris.addEdge("1" , l1_24 , l1_2  );
  paris.addEdge("1" , l1_23 , l1_3  );
  paris.addEdge("1" , l1_22 , l1_4  );
  paris.addEdge("1" , l1_21 , l1_5  );
  paris.addEdge("1" , l1_20 , l1_6  );
  paris.addEdge("1" , l1_19 , l1_7  );
  paris.addEdge("1" , l1_18 , l1_8  );
  paris.addEdge("1" , l1_17 , l1_9  );
  paris.addEdge("1" , l1_16 , l1_10 );
  paris.addEdge("1" , l1_15 , l1_11 );
  paris.addEdge("1" , l1_14 , l1_12 );
  paris.addEdge("1" , l1_13 , l1_13 );
  paris.addEdge("1" , l1_12 , l1_14 );
  paris.addEdge("1" , l1_11 , l1_15 );
  paris.addEdge("1" , l1_10 , l1_16 );
  paris.addEdge("1" , l1_9  , l1_17 );
  paris.addEdge("1" , l1_8  , l1_18 );
  paris.addEdge("1" , l1_7  , l1_19 );
  paris.addEdge("1" , l1_6  , l1_20 );
  paris.addEdge("1" , l1_5  , l1_21 );
  paris.addEdge("1" , l1_4  , l1_22 );
  paris.addEdge("1" , l1_3  , l1_23 );
  paris.addEdge("1" , l1_2  , l1_24 );
  paris.addEdge("1" , l1_1  , l1_25 );

};