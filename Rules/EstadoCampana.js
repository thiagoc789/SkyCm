export default function EstadoCampana(clientAPI) {

	return clientAPI.count('/SkyCM_V2/Services/SkyCM_V2.service', 'PPTOVENDOR', "$filter=ID_CAMP eq '{{#Property:ID_CAMP}}' and PERNR_SCP eq '{{#Application/#ClientData/#Property:UserId}}'").then((count1) => {
		clientAPI.getPageProxy().getClientData().EquipmentTotalCount = count1;
		// If “Customers” Entity set is availale, then it return the total customers
		if(count1 > 0){
		return clientAPI.count('/SkyCM_V2/Services/SkyCM_V2.service', 'HISTV', "$filter=ID_CAMP eq '{{#Property:ID_CAMP}}' and PERNR_SCP eq '{{#Application/#ClientData/#Property:UserId}}'").then((count2) => {
			clientAPI.getPageProxy().getClientData().EquipmentTotalCount = count2;
			
			var percent = ((count2/count1)*100+"%");
			
			if(percent == "100%"){
				var nota = "Campaña cerrada";
				return nota;
			}else{
				var nota = "Campaña activa";
				return nota;
			}
		});	
		}else{
			return "Error";
		}
	});
}