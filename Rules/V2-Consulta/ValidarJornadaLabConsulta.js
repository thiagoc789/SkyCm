/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function ValidarJornadaLabConsulta(clientAPI) {
	

    return clientAPI.count('/SkyCM_V2/Services/SkyCM_V2.service', 'WORKDAY', "$filter=ESTADO eq 'ACTIVO' and PERNR_SCP eq '{{#Application/#ClientData/#Property:UserId}}'").then((count) => {
        clientAPI.getPageProxy().getClientData().EquipmentTotalCount = count;
        // If “Customers” Entity set is availale, then it return the total customers
        if(count > 0){
            //return clientAPI.executeAction('/SkyCM_V2/Actions/Navigation/NavToVisitaACliente.action')
            return clientAPI.executeAction('/SkyCM_V2/Actions/Navigation/V2-Consulta/NavToConsulta.action')
        }else{
            return clientAPI.executeAction('/SkyCM_V2/Actions/Message/Validacioninicio_Jlaboral.action')
        }
    });
	
	
}


