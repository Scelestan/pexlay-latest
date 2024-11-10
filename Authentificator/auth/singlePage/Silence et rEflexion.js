function C() { var choice = "Se confier à ChloE sur ses dEcouvertes#Partage secret*Garder ses rEflexions pour soi et mEditer seul#Retour à soi";var texting = `
<br/>
**Silence et rEflexion**
<br/>
<br/>
Xalendan dEcide de prendre un moment de solitude pour organiser ses pensEes. Alors qu’il se perd dans ses rEflexions, il rEalise que peut-être, partager ses dEcouvertes avec ChloE pourrait l’aider à mieux comprendre cette situation complexe. Son esprit oscille entre la tentation de l’isoler dans son secret ou d’impliquer celle en qui il a toujours eu confiance.
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