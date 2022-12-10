export default function Rest_Cartera(context) {
	var dialog = context.nativescript.uiDialogsModule;
//	let pageProxy = context.getPageProxy('#Page:DetallePedido');
	
	var actionResult = context.getActionResult("ResultRest");
	var resultado = actionResult.data;
	//var error = resultado.T_Mensaje.TipoMsj;
	var errorTextoMensaje= resultado.TextoMsj

     	var message = ` ¡${errorTextoMensaje}!`;
		return context.executeAction({
			"Name": "/SkyCM_V2/Actions/Message/V2-Consulta/MsjInventarioNoExiste.action",
			"Properties": {
				"Message": message
			}
		});
	

}