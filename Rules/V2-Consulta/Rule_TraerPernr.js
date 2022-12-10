/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Rule_TraerPernr(context) {
	var pernr = context.evaluateTargetPath("#Application/#ClientData/#Property:UserId");
	var dialog = context.nativescript.uiDialogsModule;
	 
	// creo una variable global y le digo que se aloje en la pagina de consultas
//	let clientData = context.evaluateTargetPathForAPI('#Page:Consultas').getClientData();
	return context.read('/SkyCM_V2/Services/SkyCM_V2.service', 'VENDORINFO', [], `$filter=PERNR_SCP eq '${pernr}'`).then((results) => {
		if (results && results.length > 0) {
			let prod = results.getItem(0);
			// aqui le digo que haga una variable que se llame PERNR
			//clientData.PERNR = prod.PERNR;
			const per= prod.PERNR;
			return per;
		//	return context.executeAction('/SkyCM_V2/Actions/Service/InitializeOfflineSuccessMessage.action')
		} else {
		return 0;
		}
	});
}