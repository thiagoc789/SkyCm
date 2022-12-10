
export default function NewIdJornada(clientAPI) {
		let fecha = new Date().getTime();
	let id = 'xyxxyxxx-xxxx-4xxx-yxxx-yxxyxxyxxxxx'.replace(/[x/y]/g, function (c) {
		let aleatorio = (fecha + Math.random() * 16) % 16 | 0;
		fecha = Math.floor(fecha / 16);
		return (c == 'x' ? aleatorio : (aleatorio & 0x3 | 0x8)).toString(16);
		
	});
	var resultado = ("Jor-" + id)
	return (resultado);
}
