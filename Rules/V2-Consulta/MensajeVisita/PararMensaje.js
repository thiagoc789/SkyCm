/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 * 
 */

export default function PararMensaje(clientAPI) {

	var campo1 = clientAPI.evaluateTargetPath('#Page:Main/#Control:fc_idtiempo')
	campo1.setValue('')
	clientAPI.executeAction('/SkyCM_V2/Actions/Navigation/NavToMenuCerrarVisitaClear.action');
	// clientAPI.executeAction('/SkyCM_V2/Actions/Message/Cli_Pros/BannerVisitaFinalizada.action')

}