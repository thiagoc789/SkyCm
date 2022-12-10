export default function ValidarFechaJornada(clientAPI) {
	var dialog = clientAPI.nativescript.uiDialogsModule;
	return clientAPI.count('/SkyCM_V2/Services/SkyCM_V2.service', 'WORKDAY',
		"$filter=ESTADO eq 'ACTIVO' and PERNR_SCP eq '{{#Application/#ClientData/#Property:UserId}}'").then((count) => {
		clientAPI.getPageProxy().getClientData().EquipmentTotalCount = count;
		var fecha_fin = clientAPI.evaluateTargetPath('#Page:VisitaAClientePage/#Control:FC_FECHA_ACTUAL/#Value');
		var fecha_ini = clientAPI.evaluateTargetPath('#Page:VisitaAClientePage/#Control:FC_FECHAJORND/#Value');
		if (count > 0) {
			if (fecha_fin == fecha_ini) {
				//return clientAPI.executeAction('/SkyCM_V2/Actions/Navigation/NavToVisitaACliente.action')
				return true;
			} else {
				if (fecha_ini.length == 0) {
					return true
				} else {
					return clientAPI.executeAction('/SkyCM_V2/Actions/Message/MsjJornadaAntigua.action');
				}
			}
		}
	});

}