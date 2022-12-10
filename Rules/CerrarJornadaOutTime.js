export default function CerrarJornadaOutTime(clientAPI) {
		var dialog = clientAPI.nativescript.uiDialogsModule;

	return clientAPI.count('/SkyCM_V2/Services/SkyCM_V2.service', 'HISTV', "$filter=ESTADO eq 'ACTIVO' and PERNR_SCP eq '{{#Application/#ClientData/#Property:UserId}}'").then((count) => {
		clientAPI.getPageProxy().getClientData().EquipmentTotalCount = count;
		// If “Customers” Entity set is availale, then it return the total customers
		var fecha_fin = clientAPI.evaluateTargetPath('#Page:DetalleJornadaActiva/#Control:FechaFin/#Value');
		var fecha_ini = clientAPI.evaluateTargetPath('#Page:DetalleJornadaActiva/#Control:fechaIni/#Value');
	
		
		
		
	//	var sdf = SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		if(count > 0){
			return clientAPI.executeAction('/SkyCM_V2/Actions/Message/finalizarVisitaJornadaLaboral.action');
		}
		else if(fecha_fin == fecha_ini){
			return clientAPI.executeAction('/SkyCM_V2/Actions/Message/ConfirmacionCheckOut.action')
		}
		else{
			return clientAPI.executeAction('/SkyCM_V2/Actions/Message/ConfirCheckOutJornAuto.action')
		}
	});
	
}	
	
	
	   
	
  
	  
    

