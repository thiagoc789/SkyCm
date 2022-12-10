export default function Rest_Pedidos(context) {
	//Instancio el modulo para poder emitir alertas en la aplicacion.
	var dialog = context.nativescript.uiDialogsModule;
	
	//Creo una variable global clientData para poder acceder a cualquier dato. Siempre se debe instanciar en el menu principal YA  QUE ES LA PAGINA QUE PRIMERO SE CARGA.
	let clientData = context.evaluateTargetPathForAPI('#Page:Main').getClientData();

	//  utilizando el context.getpaggeprxy le digo que lleve la informacion a la pagina que se llama detalle pedido
	let pageProxy = context.getPageProxy('#Page:DetallePedido');
	//	let pageProxyFactura= context.getPageProxy('#Page:DetallePedido');
	
	//Aqui capturo el resultado de la accion REST que se llama resultRest
	var actionResult = context.getActionResult("ResultRest");
	
	//Aqui capturo esa informacion o la data del resulatado del servicio rest en una variable que se llama resultado
	var resultado = actionResult.data;
	
	//Segun la estructura del servicio REST podemos acceder a las diferentes raices de la estructura en este caso estoy accediedno a T_Factura
	//var resultadoFactura= resultado.T_Factura.Factura;
	var error = resultado.T_Mensaje.TipoMsj;
	var Listado = resultado.T_Detalle;

	var TextoMensaje = resultado.T_Mensaje.TextoMsj
	if (resultado && error != "E") { //E Es el resultado que arroja el servicio rest cuando no encuentra el pedido
	clientData.NoFactura = resultado.T_Factura;

		//le estoy diciendo que tome toda la informacion de la variable resultado y la lleve a la siguiente pagina
		pageProxy.setActionBinding(resultado);
		clientData.Pedido = Listado
		//dialog.alert(JSON.stringify(resultado));
		//dialog.alert(JSON.stringify(Listado));
		return pageProxy.executeAction('/SkyCM_V2/Actions/Navigation/V2-Consulta/NavToDetallePedido.action');

	} else {
		//si no encontro nada con el primer pernr entonces lanzo la otra accion del segundo servicio rest que evalua con el segundo pernr
	return context.executeAction('/SkyCM_V2/Actions/Rest/V2-consulta/Rest_Pedidos3.action')
	}

}