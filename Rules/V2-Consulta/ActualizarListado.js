/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function ActualizarListado(context) {
	
	var clientAPI;
 let clientData = context.evaluateTargetPathForAPI('#Page:Main').getClientData();
 
	setInterval (function () {clientData.ListadoDes="vacio";}, 20000);

}
