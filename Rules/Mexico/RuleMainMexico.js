export default function RuleMainMexico(clientAPI) {
    var pernr = clientAPI.evaluateTargetPath("#Application/#ClientData/#Property:UserId");
   // let clientData =clientAPI.evaluateTargetPathForAPI('#Page:Main').getClientData();
    let inv = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionConsultas');
    //clientAPI.executeAction('/SkyCM_V2/Rules/V2-Consulta/Rule_TraerPernr.js');
    clientAPI.read('/SkyCM_V2/Services/SkyCM_V2.service', 'VENDORINFO', [], `$filter=PERNR_SCP eq '${pernr}'`).then((results) => {
        if (results && results.length > 0) {
            let prod = results.getItem(0);
            var vk = prod.VKORG;
            if (vk == "6000") {
            	clientAPI.executeAction('/SkyCM_V2/Rules/V2-Consulta/MensajeVisita/EjecutarMensaje.js')
                //alert("entro al co envio false")
                // clientData.estado=false;
                return inv.setVisible(false);
            } else { 
            	clientAPI.executeAction('/SkyCM_V2/Rules/V2-Consulta/MensajeVisita/EjecutarMensaje.js')
            	// clientData.estado=true;
            	return inv.setVisible(true);
            	}
        }
    });

}