/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function ValidarJornadaParaVisita(clientAPI) {

    var pernr =clientAPI.evaluateTargetPath("#Application/#ClientData/#Property:UserId");
	var dialog = clientAPI.nativescript.uiDialogsModule;
    
    var fechaActual=clientAPI.evaluateTargetPath('#Page:Main/#Control:FC_FECHA_ACTUAL/#Value');

	return clientAPI.read('/SkyCM_V2/Services/SkyCM_V2.service', 'WORKDAY', [], `$filter=PERNR_SCP eq '${pernr}' and ESTADO eq 'ACTIVO'`).then((results) => {

		if (results && results.length > 0) {
			let prod = results.getItem(0);
            let fechajornada= prod.FECHA;
            if(fechajornada==fechaActual){
                clientAPI.executeAction('/SkyCM_V2/Rules/ValidarJornadaLaboralActiva.js');
            }
            else if (fechaActual!=fechajornada) {
                clientAPI.executeAction('/SkyCM_V2/Actions/Message/V2-Consulta/MsjJornadaAntiguaVisita.action');
            }
		} 
		else {
			return clientAPI.executeAction('/SkyCM_V2/Actions/Message/Validacioninicio_Jlaboral.action')
		}
	});
}
