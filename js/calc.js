
	function Rechner() {
	 var Menge = parseInt(document.querySelector("#Gesamtmenge").value);
	 var Produkt = document.querySelector("#Produktliste").value;
	
	 if (Produkt=="Koch Chemie Green Star 1"){
	 var Produktmenge = Menge*0.02;
	 var Wassermenge = Menge*0.98;
	 document.getElementById("selectedProdukt").innerHTML = Produkt+": ";
	 document.getElementById("Produktmenge").innerHTML = Produktmenge+" ml"; 
	 document.getElementById("DestilliertesWasser").innerHTML = "Destilliertes Wasser: ";
	 document.getElementById("DestWasser").innerHTML = Wassermenge+" ml";
	 }
	 if (Produkt=="Koch Chemie Green Star 2"){
	 var Produktmenge = Menge*0.25;
	 var Wassermenge = Menge*0.75;
	 document.getElementById("selectedProdukt").innerHTML = Produkt+": ";
	 document.getElementById("Produktmenge").innerHTML = Produktmenge+" ml"; 
	 document.getElementById("DestilliertesWasser").innerHTML = "Destilliertes Wasser: ";
	 document.getElementById("DestWasser").innerHTML = Wassermenge+" ml";
	 }
	 else if (Produkt=="ValetPRO Snow Foam"){
	 var Produktmenge = Menge*0.015;
	 var Wassermenge = Menge*0.985;
	 document.getElementById("selectedProdukt").innerHTML = Produkt+": ";
	 document.getElementById("Produktmenge").innerHTML = Produktmenge+" ml";
	 document.getElementById("DestilliertesWasser").innerHTML = "Destilliertes Wasser: ";
	 document.getElementById("DestWasser").innerHTML = Wassermenge+" ml";
	 }
	 else if (Produkt=="GLORIA Top Foam"){
	 var Produktmenge = Menge*0.017;
	 var Wassermenge = Menge*0.983;
	 document.getElementById("selectedProdukt").innerHTML = Produkt+": ";
	 document.getElementById("Produktmenge").innerHTML = Produktmenge+" ml";
	 document.getElementById("DestilliertesWasser").innerHTML = "Destilliertes Wasser: ";
	 document.getElementById("DestWasser").innerHTML = Wassermenge+" ml";
	 }
	 else if (Produkt=="Clay Lube (SONAX)"){
	 var Produktmenge = Menge*0.048;
	 var Wassermenge = Menge*0.952;
	 document.getElementById("selectedProdukt").innerHTML = Produkt+": ";
	 document.getElementById("Produktmenge").innerHTML = Produktmenge+" ml";
	 document.getElementById("DestilliertesWasser").innerHTML = "Destilliertes Wasser: ";
	 document.getElementById("DestWasser").innerHTML = Wassermenge+" ml";
	 }
	 else if (Produkt=="Isopropanol"){
	 var Produktmenge = Menge*0.167;
	 var Wassermenge = Menge*0.833;
	 document.getElementById("selectedProdukt").innerHTML = Produkt+": ";
	 document.getElementById("Produktmenge").innerHTML = Produktmenge+" ml";
	 document.getElementById("DestilliertesWasser").innerHTML = "Destilliertes Wasser: ";
	 document.getElementById("DestWasser").innerHTML = Wassermenge+" ml";
	 }
	
	}
	
	function Reset() {
	document.getElementById("selectedProdukt").innerHTML = "";
	document.getElementById("DestilliertesWasser").innerHTML = "";
	document.getElementById("Produktmenge").innerHTML = "";
	document.getElementById("DestWasser").innerHTML = "";
	}
	