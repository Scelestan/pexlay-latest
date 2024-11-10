function C() { var choice = "Observer la lumière s’Eteindre dans leurs regards#Fin silencieuse*Accepter leur destin et se prEparer à l’inconnu#Ultime adieu";var texting = `
<br/>
**Effacement total**
<br/>
<br/>
Face à une puissance obscure qu’ils n’avaient pas prEvue, Selestan, LynaEe, ChloE, et Xalendan rEalisent que la fin approche. Pris dans un piège sans Echappatoire, ils se soutiennent du regard, acceptant le sort tragique qui s’abat sur eux. Ensemble, ils prennent un dernier souffle, chacun portant la fiertE d’avoir luttE jusqu’au bout pour leurs convictions.
<br/>
<br/>
Alors que l’obscuritE les enveloppe, une lueur de paix se dessine sur leurs visages, tEmoignant de leur force et de leur dEtermination. Dans le silence, leurs âmes quittent ce monde, emportEes dans l’infinitE de l’univers, unies pour l’EternitE.
<br/>
<br/>
Cette fin tragique scelle le destin des quatre hEros, rappelant la fragilitE de la vie et la puissance des forces obscures auxquelles ils se sont opposEs. Leurs souvenirs restent gravEs dans les mEmoires, comme une lEgende hEroïque pour les gEnErations futures.
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