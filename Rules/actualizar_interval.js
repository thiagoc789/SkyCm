var clientAPI;
export default function actualizar_interval(clientAPI) {
	setInterval (function () {clientAPI.executeAction ('/SkyCM_V2/Rules/ValidarCambiosSincronizacion.js');}, 300000);
	//return setInterval (function () {clientAPI.executeAction('/SkyCM_V2/Actions/Service/UploadOnly.action');}, 180000)
}
