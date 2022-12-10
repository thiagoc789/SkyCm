export default function Restinve(context) {
	var dialog = context.nativescript.uiDialogsModule;
	let pageProxy = context.getPageProxy('#Page:DetallePedido');
	let clientData = context.evaluateTargetPathForAPI('#Page:Main').getClientData();

	// var message = '';  
	var actionResult = context.getActionResult("ResultRest");
	var resultado = actionResult.data;
	//	var error= actionResult.error;
	var error = resultado.T_Mensaje.TipoMsj;

	if (resultado && error != "E") {
		dialog.alert(JSON.stringify(resultado));
		var Colororden = resultado.T_Detalle;
		clientData.Inventario = Colororden.sort(GetSortOrder("Color"));
		return context.executeAction('/SkyCM_V2/Actions/Navigation/V2-Consulta/NavToInvDispo.action');

		//	pageProxy.setActionBinding(resultado);
		//	return pageProxy.executeAction('/SkyCM_V2/Actions/Navigation/V2-Consulta/NavToInvDispo.action');
		//	var datos= resultado.T_Mensaje.TipoMsj;

		//	var RestResult = actionResult;
		//	const arr = RestResult.map(elemento => Object.entries(elemento));
		//dialog.alert(JSON.stringify(resultado));
		//	dialog.alert(error);
		//dialog.alert("SI TRAJO ALGO EL PROBLEMA ES QUE");

	} else {
		dialog.alert("ERROR" + resultado.T_Mensaje.TextoMsj);

	}

	function GetSortOrder(prop) {
		return function (a, b) {
			if (a[prop] > b[prop]) {
				return 1;
			} else if (a[prop] < b[prop]) {
				return -1;
			}
			return 0;
		}
	}

}

/* message = `El equipo con Qr N° (${concat}) no existe`;
       return context.executeAction({
           "Name": "/MiticaMtto/Actions/Messages/MsjQrnoencontrado.action",
               "Properties": {  
                   "Message": message
               }
          }); */