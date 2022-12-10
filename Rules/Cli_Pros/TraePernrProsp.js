/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function TraePernrProsp(context) {
var pernr = context.evaluateTargetPath("#Application/#ClientData/#Property:UserId");
	var dialog = context.nativescript.uiDialogsModule;
	 
	// creo una variable global y le digo que se aloje en la pagina de consultas
	//let clientData = context.evaluateTargetPathForAPI('#Page:VisitaAClientePage').getClientData();
	return context.read('/SkyCM_V2/Services/SkyCM_V2.service', 'VENDORINFO', [], `$filter=PERNR_SCP eq '${pernr}'`).then((results) => {
		if (results && results.length > 0) {
			let prod = results.getItem(0);
			// aqui le digo que haga una variable que se llame PERNR
		//	clientData.PERNR = prod.PERNR;
			const per= prod.PERNR;
			return per;
		} else {
			return true;
		}
	});
}
