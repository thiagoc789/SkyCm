export default function UltimoRegistro(clientAPI) {

	return clientAPI.count('/SkyCM_V2/Services/SkyCM_V2.service', 'VENDORINFO', "$filter=PERNR_SCP eq '{{#Application/#ClientData/#Property:UserId}}' and USRTY eq 'ADMN'").then((count) => {
		clientAPI.getPageProxy().getClientData().EquipmentTotalCount = count;
		// If “Customers” Entity set is availale, then it return the total customers
		if(count > 0){
			return clientAPI.executeAction('/SkyCM_V2/Actions/Navigation/NavToObjetivoVisitaPage.action');
		}
		else{
			return clientAPI.executeAction('/SkyCM_V2/Actions/Message/PermisoDenegadoobjetivos.action');
		}
	});
}