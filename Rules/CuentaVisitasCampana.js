export default function CuentaVisitasCampana(clientAPI) {

	return clientAPI.count('/SkyCM_V2/Services/SkyCM_V2.service', 'HISTV', "$filter=ID_CAMP eq '{{#Property:ID_CAMP}}' and PERNR_SCP eq '{{#Application/#ClientData/#Property:UserId}}'").then((count) => {
		clientAPI.getPageProxy().getClientData().EquipmentTotalCount = count;
		// If “Customers” Entity set is availale, then it return the total customers
		return count;
	});
}