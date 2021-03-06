var paris        = new FMNGraph();
var lignes_count = 14;
var lignes       = Array(lignes_count);

for (var i = 0 ; i < lignes_count ; i++) {
  lignes[i] = new Array();
}

lignes[1] = ["La Défense Grande Arche",
             "Esplanade de La Défense",
             "Pont de NeuillyNeuilly-sur-Seine",
             "Les Sablons Jardin d'AcclimatationNeuilly-sur-Seine",
             "Porte Maillot Palais des Congrès",
             "Argentine",
             "Charles de Gaulle - Étoile",
             "George V",
             "Franklin D. Roosevelt",
             "Champs-Élysées - Clemenceau , Grand Palais",
             "Concorde",
             "Tuileries",
             "Palais Royal - Musée du Louvre",
             "Louvre - Rivoli",
             "Châtelet",
             "Hôtel de Ville4e",
             "Saint-Paul Le Marais",
             "Bastille",
             "Gare de Lyon",
             "Reuilly - Diderot",
             "Nation",
             "Porte de Vincennes",
             "Saint-MandéSaint-Mandé",
             "BéraultSaint-Mandé, Vincennes",
             "Château de Vincennes"];

lignes[4] = ["Porte de Clignancourt",
             "Simplon",
             "Marcadet – Poissonniers",
             "Château Rouge",
             "Barbès – Rochechouart",
             "Gare du Nord",
             "Gare de l'Est - Verdun",
             "Château d'Eau",
             "Strasbourg – Saint-Denis",
             "Réaumur – Sébastopol",
             "Étienne Marcel",
             "Les Halles",
             "Châtelet",
             "Cité",
             "Saint-Michel",
             "Odéon",
             "Saint-Germain-des-Prés",
             "Saint-Sulpice",
             "Saint-Placide",
             "Montparnasse – Bienvenüe",
             "Vavin",
             "Raspail",
             "Denfert-Rochereau - Colonel Rol-Tanguy",
             "Mouton-Duvernet",
             "Alésia",
             "Porte d'Orléans",
             "Général Leclerc"];

lignes[9] = ["Pont de Sèvres", 
             "Billancourt", 
             "Marcel Sembat", 
             "Porte de Saint-Cloud Parc des Princes", 
             "Exelmans", 
             "Michel-Ange - Molitor", 
             "Michel-Ange - Auteuil", 
             "Jasmin", 
             "Ranelagh", 
             "La Muette", 
             "Rue de la Pompe Avenue Georges Mandel", 
             "Trocadéro", 
             "Iéna", 
             "Alma - Marceau",  
             "Franklin D. Roosevelt", 
             "Saint-Philippe du Roule", 
             "Miromesnil", 
             "Saint-Augustin", 
             "Havre - Caumartin", 
             "Chaussée d'Antin - La Fayette", 
             "Richelieu - Drouot", 
             "Grands Boulevards", 
             "Bonne-Nouvelle", 
             "Strasbourg - Saint-Denis", 
             "République", 
             "Oberkampf", 
             "Saint-Ambroise", 
             "Voltaire Léon Blum", 
             "Charonne", 
             "Rue des Boulets", 
             "Nation Place des Antilles", 
             "Buzenval", 
             "Maraîchers", 
             "Porte de Montreuil", 
             "RobespierreMontreuil", 
             "Croix de Chavaux Place Jacques Duclos", 
             "Mairie de Montreuil"];

for (var ligne_index = 0 ; ligne_index < lignes_count ; ligne_index++) {
  var ligne          = lignes[ligne_index];
  var stations_count = ligne.length;
 
  for (var i = 0 ; i < stations_count ; i++) {
    paris.addNode(ligne[i]);
  }

  for (var i = 0 ; i < stations_count - 1 ; i++) {
    paris.addEdge("" + ligne_index , ligne[i]      , ligne[i + 1] );
    paris.addEdge("" + ligne_index , ligne[i + 1]  , ligne[i]     );
  }

}


