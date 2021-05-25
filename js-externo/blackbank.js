

function abrirMenu () {
	
   var menu = document.getElementById('menu');
   var menuDisplay = menu.style.display;
   menu.style.display = menuDisplay == 'inline-block' ? 'none' : 'inline-block'

	
	
}






function capturarValor () {
    var valor = document.getElementById('valor').value;
    valor = parseInt(valor);

    var parcela = document.getElementById('parcela').value;
    parcela = parseInt(parcela);

    var score = document.getElementById('score').value;
    score = parseInt(score);

    var juros = 115/score; //Calcula o valor do juros com base no Score, e usando 100 como referência (100/score)

    jurosTotal = (valor*juros.toFixed(2));

    
    if (score > 0) {
    	document.getElementById('juros').value = jurosTotal.toFixed(2);
    } else {document.getElementById('juros').value = (0).toFixed(2) }
    


    if (document.getElementById('juros').value > 0) {document.getElementById('totalapagar').value = (jurosTotal+valor).toFixed(2);}
    else {document.getElementById('totalapagar').value = (0).toFixed(2)}

    var totalapagar = document.getElementById('totalapagar').value

    var valorparcela = (totalapagar + valor)/parcela;

    if (totalapagar>0) {
    	document.getElementById('valorparcela').value = valorparcela.toFixed(2);
    } else {document.getElementById('valorparcela').value = (0).toFixed(2);}
   




		

}



    	





		



