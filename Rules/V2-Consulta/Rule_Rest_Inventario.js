export default function Rest_Inventario(context) {
	
	var actionResult = context.getActionResult("ResultRest");
	var resultado = actionResult.data;
	let clientData = context.evaluateTargetPathForAPI('#Page:Main').getClientData();
	var dialog = context.nativescript.uiDialogsModule;
//	var listpickerRef= context.evaluateTargetPath('#Page:Inventario/#Control:FC_List_Referencia/#SelectedValue');
	var referencia= resultado.Referencia;
//	if(referencia == listpickerRef && resultado.length>0){
	var error = resultado.T_Mensaje.TipoMsj
	var errorTextoMensaje = resultado.T_Mensaje.TextoMsj
	var listpickerOrden = context.evaluateTargetPath('#Page:Inventario/#Control:listpicker_Orden/#SelectedValue'); //LINO
	var Listado = resultado.T_Detalle;
	
	clientData.ListadoDes= resultado.T_Detalle;
	
	clientData.Referencia= referencia; 
	
//	dialog.alert(JSON.stringify(clientData.Referencia+" REGLA VIEJA"));
//	dialog.alert(JSON.stringify(resultado+" REGLA VIEJA resultado solo"));

	if (resultado && error != "E") {
		switch (listpickerOrden) {
		case "Color":
			clientData.Inventario =Listado.sort(GetSortOrder("Color"));
			return context.executeAction('/SkyCM_V2/Actions/Navigation/V2-Consulta/NavToInvColor.action');
			break;

		case "Disponibilidad":
			clientData.Inventario =Listado.sort(SortNumeros("CantDisponible"));
			return context.executeAction('/SkyCM_V2/Actions/Navigation/V2-Consulta/NavToInvDispo.action');
			break;

		case "Predeterminado":
			clientData.Inventario =Listado;
			return context.executeAction('/SkyCM_V2/Actions/Navigation/V2-Consulta/NavToInvenDesordenado.action');
			break;
			
			default :
				clientData.Listado = Listado;
				return context.executeAction('/SkyCM_V2/Actions/Navigation/V2-Consulta/NavToInvenDesordenado.action');
		}

	} else {

		var message = ` ¡${errorTextoMensaje}!`;
		return context.executeAction({
			"Name": "/SkyCM_V2/Actions/Message/V2-Consulta/MsjInventarioNoExiste.action",
			"Properties": {
				"Message": message
			}
		});

	}
//} else {
//	return context.executeAction('/SkyCM_V2/Actions/Rest/V2-consulta/Rest_Inventario.action');
//}

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

	function SortNumeros(prop) {
		return function (a, b) {
			return b[prop] - a[prop];
		}
	}

}

// "Referencia": "#Page:Inventario/#Control:FC_REF_MAYUS_INV/#Value",
//       "Vendedor": "#Page:Inventario/#Control:FC_Pernr_Inv/#Value"