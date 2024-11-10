function C() { var choice = "Contempler le chemin parcouru en mEditant#REflexion paisible*Observer attentivement les environs pour rester vigilant#Vigilance discrète";var texting = `
<br/>
**Retourner en silence au château**
<br/>
<br/>
Après les Epreuves qu’il vient de traverser, Selestan choisit de retourner au château dans le plus grand calme. Chaque pas est lEger, son esprit apaisE par les leçons apprises en chemin. Le silence de la forêt environnante l’enveloppe, comme un rEconfort après tant de dEfis. Selestan reste attentif, sachant que le retour au château pourrait rEvEler de nouvelles surprises.
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