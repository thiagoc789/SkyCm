/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function ValidarCambiosPendientes(context) {

	var xhr = new XMLHttpRequest();
	var file = "https://www.google.com/";
	var randomNum = Math.round(Math.random() * 10000);
	var dialog = context.nativescript.uiDialogsModule;

	xhr.open('HEAD', file + "?rand=" + randomNum, true);
	xhr.send();
	xhr.addEventListener("readystatechange", processRequest, false);

	function processRequest(e) {
		// aqui estoy tomando el servicio odata
		var provider = context.getODataProvider('/SkyCM_V2/Services/SkyCM_V2.service');
		if (xhr.readyState == 4) {
			if (xhr.status >= 200 && xhr.status < 304) {
				if (provider.isRequestQueueEmpty() == false) {
					var message = "Tienes registros por sincronizar. Por favor realizar la sincronizacion.";
					return context.executeAction({
						"Name": "/SkyCM_V2/Actions/Message/V2-Consulta/MsjValidarCambiosPendientes.action",
						"Properties": {
							"Message": message
						}
					});

				} else {
					var message = "No tienes registros por sincronizar.";
					return context.executeAction({
						"Name": "/SkyCM_V2/Actions/Message/V2-Consulta/MsjValidarCambiosPendientes.action",
						"Properties": {
							"Message": message
						}
					});
				}

			} else {
				var message = "No tienes conexion a internet, revisa tu conexion e intenta de nuevo.";
					return context.executeAction({
						"Name": "/SkyCM_V2/Actions/Message/V2-Consulta/MsjValidarCambiosPendientes.action",
						"Properties": {
							"Message": message
						}
					});
				}
			}
		}
	}
