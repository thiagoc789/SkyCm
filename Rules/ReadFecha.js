
export default function ReadFecha(context) {
	
	var pernr = context.evaluateTargetPath("#Application/#ClientData/#Property:UserId");
	var dialog = context.nativescript.uiDialogsModule;
	return context.read('/SkyCM_V2/Services/SkyCM_V2.service', 'WORKDAY', [], `$filter=PERNR_SCP eq '${pernr}' and ESTADO eq 'ACTIVO'`).then((results) => {
		if (results && results.length > 0) {
			let prod = results.getItem(0);
			return prod.FECHA;
		} 
	});
}


