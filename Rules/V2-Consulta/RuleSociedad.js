/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function RuleSociedad(context) {
    var pernr = context.evaluateTargetPath("#Application/#ClientData/#Property:UserId");
    //var kunnr = context.evaluateTargetPath("#Page:EstadoCartera/#Control:FC_List_ClientesCartera/#SelectedValue")
	var dialog = context.nativescript.uiDialogsModule;
	return context.read('/SkyCM_V2/Services/SkyCM_V2.service', 'VENDORINFO', [], `$filter=PERNR_SCP eq '${pernr}'`).then((results) => {
		if (results && results.length > 0) {
			let prod = results.getItem(0);
			// aqui le digo que haga una variable que se llame PERNR
			//clientData.PERNR = prod.PERNR;
			const per= prod.VKORG;
			return per;
		//	return context.executeAction('/SkyCM_V2/Actions/Service/InitializeOfflineSuccessMessage.action')
		} else {
		return 0;
		}
	});
}