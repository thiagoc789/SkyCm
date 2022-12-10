/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function ValidarSociedad(clientAPI) {
    
    var sociedad = clientAPI.evaluateTargetPath("#Control:FC_SOC/#Value");
    
    var pageProxy = clientAPI.getPageProxy();
    var dialog = clientAPI.nativescript.uiDialogsModule;
    var namePage = pageProxy._page.id;

    var raiz = "/SkyCM_V2/Actions/Rest/";
    var RestCol = "";
    var RestPaises = "";
    
    switch (namePage) {
        case "Inventario":
            RestCol = raiz + "V2-Consulta/Rest_Inventario.action";
            RestPaises = raiz + "consulta_paises/Rest_inventario_pais.action";
            break;
        case "EstadoCartera":
            RestCol = raiz + "V2-Consulta/Rest_Cartera2.action";
            RestPaises = raiz + "consulta_paises/Rest_CarteraPaises.action";
            break;
        case "EstadoPedido":
            RestCol = raiz + "V2-Consulta/Rest_Pedidos.action";
            RestPaises = raiz + "consulta_paises/Rest_PedidoPaises.action";
            break;

    }
    
    if(sociedad != '6000'){
    	//dialog.alert("colombia" + sociedad);
        //dialog.alert(namePage + " - Colombia - " + RestCol)
        return clientAPI.executeAction(RestCol)
    }else{
        //dialog.alert(namePage + " - Paises - " + RestPaises)
        //dialog.alert("paises" + sociedad);
        return clientAPI.executeAction(RestPaises)
    }

}
