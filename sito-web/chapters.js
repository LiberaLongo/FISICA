var array = ["le misure", "moto in una dimensione", "forza e leggi di Newton", "moto in due e tre dimensioni", "applicazioni delle leggi di Newton", "quantità di moto", "sistemi di particelle", "cinematica dei moti rotatori", "dinamica dei moti rotatori", "momento angolare", "energia 1: lavoro ed energia cinetica", "energia 2: energia potenziale", "energia 3: conservazione dell'energia", "la gravitazione", "statica dei fluidi", "dinamica dei fluidi", "fenomeni oscillatori", "fenomeni ondulatori", "onde acustiche", "teoria della relatività ristretta", "temperatura", "proprietà molecolari dei gas", "prima legge della termodinamica", "entropia e seconda legge della termodinamica"];
var string = "<ul>";
for (var i = 0; i < array.length ; i++) {
	index = i+1;
	if(index < 10)
		index = "0" + index;
	string += "<li><a href=\'./chapters/fisica-" + index + "_" + array[i] + ".html\' > cap " + index + "</a> <b>" + array[i] + "</b></li>";
}
string += "<li><a href=\'\\chapters\\fisica-appendici.html\'>appendici</a></li>";
string += "</ul>";
var lista = document.getElementById("list");
lista.innerHTML = string;
