/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function SeguirVisita(clientAPI) {
	var hoy = new Date();
	var horaactual = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
	var campo1 = clientAPI.evaluateTargetPath('#Page:Main/#Control:fc_idtiempo');
	return	campo1.setValue(horaactual);

}
