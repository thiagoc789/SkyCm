var clientAPI;

export default function avanceMes(clientAPI){
	var dia = new Date();
	var meses = [31,28,31,30,30,30,31,29,30,31,30,31];
	var resultado = Math.round((dia.getDate()/meses[dia.getMonth()])*100) + '%';
	return resultado;
}