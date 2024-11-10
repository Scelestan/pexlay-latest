function C() { var choice = "Commencer#Recrutement";var texting = `
<br/>
<br/>** Introduction **
<br/>
<br/>
<br/>Avant même que notre planète ne soit creee, dans ce même espace que nous habitons aujourd’hui, sur une planète magique plus tard remplacee par la nôtre, la vie existe. Mais pas seulement la vie, l’intelligence aussi a dejà fait son apparition. Des hommes, des elfes, des gnomes, des nains et toute autres creatures qui maintenant font partie de la fiction. Ces races creees par des dieux qui avaient fait de cette terre leur partie d’echecs.
<br/>Plusieurs millenaires de vies simples et d‘evolutions. Mais la guerre suivait en même temps le chemin de chaque peuple. Declarant bientôt la première Apocalypse, les dieux se livrèrent bataille, chacun voulant montrer à l’autre que leur race etait superieure… Les vainqueurs furent les elfes qui s’emparèrent du continent. Mais leur manque de fecondite fût la cause de leur defaite prochaine… Les humains etaient là.
<br/>Un ordre mondial fût cree par le dieu suprême afin que l’equilibre du mal et du bien ne soit pas bouleverse : l’ordre des chevaliers du Sphinx, compose d‘êtres de toutes races. Mais malheureusement, les dieux et leurs idees de pouvoir, ne pensèrent ensuite qu’à s’approprier ces pions de choix. Car les chevaliers du Sphinx detenaient un pouvoir mysterieux.
<br/>La deuxième apocalypse arriva, signant la destruction de la confrerie du sphinx.
<br/>Nous nous retrouvons treize mille ans plus tard, à l’aube de la renaissance de l’ordre du Sphinx…
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
`;var ok = prog("page1-1", 1, (0.05*(texting.split("<br/>").length)));
var ajoue = ok.cadreGeometry("Cadre");
ajoue.changeCouleur("Cadre", "rgb(241,241,241)");
ajoue.plusItem("item1", 10, 100-(texting.split("<br/>").length*3), 80, -20+(texting.split("<br/>").length*3));
ajoue.changeCouleur("item1", "white"); 
ajoue.definirContour("item1", "mouse*030_rgba(50,50,50,1)_page1-1");
ajoue.changeOrdre("item1", "160");
var triag = "";
for (var a = 0; a < choice.split("*").length; a++) {
	triag += "<br/><button style='font-size: 38px; font-family: Helvetica;' onclick='suite(this, "+ '"' + choice.split("*")[a].split("#")[1] + '"' +")'>" + choice.split("*")[a].split("#")[0] + "</button>";
}
ajoue.utiliserHTML("item1", "<div style='font-size: 24px; font-family: Helvetica;' >" + texting + "</div><div style='position:fixed; bottom:0; right:50%'>" + triag + "</div>");
ok.ajouterGeometry("page1-1", ajoue.GeoString());
 var charge = ok.Activer(); 
charge.ChargerPage("DIV030", "page1-1", true, false); 
ok.autoZoom(false);
charge.autoRedimention(false, "page1");document.getElementById("DIV7").click();}