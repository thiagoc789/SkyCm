export default function CuentaVisitasClienteMes(clientAPI) {

	return clientAPI.count('/SkyCM_V2/Services/SkyCM_V2.service', 'HISTV', "$filter = MES eq '{{#Property:MES}}' and PERNR_SCP eq '{{#Application/#ClientData/#Property:UserId}}'").then((count) => {
		clientAPI.getPageProxy().getClientData().EquipmentTotalCount = count;
		// If “Customers” Entity set is availale, then it return the total customers
		return count;
	});
}