function C() { var choice = "Se positionner en miroir de Jasson pour couvrir tous les angles#Couverture mutuelle*Analyser les alentours tout en laissant Jasson avancer#Observation discrète";var texting = `
<br/>
**Alliance silencieuse**
<br/>
<br/>
Selestan et Jasson se déplacent en silence, leurs gestes coordonnés comme un ballet tacite. Chaque mouvement est calculé, chaque pas mesuré, leur connexion permettant de couvrir leurs arrières sans échanger un mot. Selestan ressent la présence rassurante de Jasson, comme un soutien constant face à l’inconnu.
<br/>
<br/>

---

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