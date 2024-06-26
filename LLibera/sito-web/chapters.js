$( document ).ready(loadDOM());

function loadDOM()
{
	var array = ["le misure", "moto in una dimensione", "forza e leggi di Newton", "moto in due e tre dimensioni", "applicazioni delle leggi di Newton", "quantita di moto", "sistemi di particelle", "cinematica dei moti rotatori", "dinamica dei moti rotatori", "momento angolare", "energia 1: lavoro ed energia cinetica", "energia 2: energia potenziale", "energia 3: conservazione dell'energia", "la gravitazione", "statica dei fluidi", "dinamica dei fluidi", "fenomeni oscillatori", "fenomeni ondulatori", "onde acustiche", "teoria della relativita ristretta", "temperatura", "proprieta molecolari dei gas", "prima legge della termodinamica", "entropia e seconda legge della termodinamica"];
	let string = "<ul>";
	let iterator = 0;

	for (elem of array) 
	{
		iterator = iterator+1;
		let index = ( iterator < 10 ? "0" : "" ) + iterator ;
		link = `chapters/fisica-${index}_${elem}.html`;
                string += `<li><button class="chap_button" type="button" onclick="func('${link}')" > cap ${index} </button> <b>${elem}</b></li>\n`;
        }
        string += `<li><a href='chapters/fisica-appendici.html'>appendici</a></li>`;
	string += "</ul>";
	$("#list").html(string);
}

function func(uri)
{
	var new_html="";
	$.get( uri, function( data ) {
		new_html =  data;
		const node = $("#includeHtml")[0];
		MathJax.typesetClear([node]);
		$(node).html(new_html);
		MathJax.typesetPromise([node]).then(() => {
			//console.log("MathJax typesetting complete");
		});
	  }, "html");

}
