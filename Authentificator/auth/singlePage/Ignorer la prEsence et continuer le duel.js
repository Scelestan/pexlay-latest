function C() { var choice = "Se concentrer davantage sur l'adversaire#DEtermination renforcEe*AccElErer ses mouvements pour prendre l'avantage#Attaque dEcisive";var texting = `
<br/>
**Ignorer la prEsence et continuer le duel**
<br/>
<br/>
Selestan ressent une prEsence Etrange dans l’air, comme une ombre invisible l’observant depuis les tEnèbres. Mais, dEterminE à ne pas se laisser distraire, il choisit de maintenir son attention sur son adversaire. La tension monte alors qu’il redouble de concentration, ses mouvements devenant plus prEcis et calculEs. Chaque coup EchangE rEsonne dans l’arène, un rappel de l’intensitE du duel qu’il a choisi de poursuivre sans se laisser dEstabiliser.
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