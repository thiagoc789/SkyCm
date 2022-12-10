/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function ValidarCambiosCerrarSesion(context) {
	var xhr = new XMLHttpRequest();
	var file = "https://www.google.com/";
	var randomNum = Math.round(Math.random() * 10000);
//	var dialog = context.nativescript.uiDialogsModule;

	xhr.open('HEAD', file + "?rand=" + randomNum, true);
	xhr.send();
	xhr.addEventListener("readystatechange", processRequest, false);

	function processRequest(e) {
		// aqui estoy tomando el servicio odata
		var provider = context.getODataProvider('/SkyCM_V2/Services/SkyCM_V2.service');
		if (xhr.readyState == 4) {
			if (xhr.status >= 200 && xhr.status < 304) {
				if (provider.isRequestQueueEmpty() == false) {
				//	if (provider.hasPendingDownload() == false || provider.isRequestQueueEmpty() == false || provider.hasPendingUpload==false) {	
						return context.executeAction('/SkyCM_V2/Actions/Message/MensajeCerrarSesion.action');
					
				}else {
			return context.executeAction('/SkyCM_V2/Actions/Message/MsjPreguntaCerrarSesion.action');
				//alert("No tienes conexion a internet!");
			}

			} 
		}
	}
}


