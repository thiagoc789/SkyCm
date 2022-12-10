/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Rule_InventarioRapido(context) {
	var dialog = context.nativescript.uiDialogsModule;
	let clientData = context.evaluateTargetPathForAPI('#Page:Main').getClientData();
	var listpickerOrden = context.evaluateTargetPath('#Page:Inventario/#Control:listpicker_Orden/#SelectedValue');
	var listpickerRef = context.evaluateTargetPath('#Page:Inventario/#Control:FC_List_Referencia/#SelectedValue');
//	var Listado2 = "vacio";
	var Listado2 = clientData.ListadoDes;
	//var Listconver= JSON.stringify(clientData.ListadoDes);
//	var tamaño= Listconver.length;
//	dialog.alert(tamaño + "tamaño del listado en la primera consulta del dia es decir sin tener nada.");
	var refvieja = clientData.Referencia;

//	dialog.alert(Listado2 + " valor del listado antes de entrar al if");
	//	dialog.alert(refvieja+"valor del cliente data referencia antes de entrar al if");
	if (Listado2 && refvieja == listpickerRef) {
		//	dialog.alert(refvieja+"valor del cliente data referencia despues de entrar al if");
		//	dialog.alert(listpickerRef+" valor referencia de list despues de enetrar if nuevo");

		switch (listpickerOrden) {
		case "Color":
			clientData.Inventario = Listado2.sort(GetSortOrder("Color"));
			return context.executeAction('/SkyCM_V2/Actions/Navigation/V2-Consulta/NavToInvColor.action');
			break;

		case "Disponibilidad":
			clientData.Inventario = Listado2.sort(SortNumeros("CantDisponible"));
			return context.executeAction('/SkyCM_V2/Actions/Navigation/V2-Consulta/NavToInvDispo.action');
			break;

		case "Predeterminado":
			clientData.Inventario = Listado2;
			return context.executeAction('/SkyCM_V2/Actions/Navigation/V2-Consulta/NavToInvenDesordenado.action');
			break;

		default:
			clientData.Listado2 = Listado2;
			return context.executeAction('/SkyCM_V2/Actions/Navigation/V2-Consulta/NavToInvenDesordenado.action');
		}
	} else {
		return context.executeAction('/SkyCM_V2/Actions/Rest/V2-consulta/Rest_Inventario.action');
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

	function SortNumeros(prop) {
		return function (a, b) {
			return b[prop] - a[prop];
		}
	}
}