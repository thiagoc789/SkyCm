export default function CuentaVisitasRule(clientAPI) {

    var hoy = new Date();
    var mes = ("0" + (hoy.getMonth() + 1)).slice(-2);
    var anio = hoy.getFullYear();
    var pernr = clientAPI.evaluateTargetPath("#Application/#AppData/UserId");

	return clientAPI.count('/SkyCM_V2/Services/Online_initialize.service', 'HISTV', `$filter= PERNR_SCP eq '${pernr}' and MES eq '${mes}' and ANO eq '${anio}'`).then((count) => {
		clientAPI.getPageProxy().getClientData().EquipmentTotalCount = count;
		// If “Customers” Entity set is availale, then it return the total customers
		return count;
	});
}