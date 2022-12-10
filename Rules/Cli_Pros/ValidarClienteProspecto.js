export default function ValidarClienteProspecto(clientAPI) {

   // var valor= clientAPI.evaluateTargetPath('#Page:CrearClienteProspecto/#Control:FC_NitCP/#Value'); 
    //var tamañoValor= valor.length;

    //if( valor.length==0 || valor=='' || /^\s+$/.test(valor) ){ 
      //  alert("error el campo NIT no puede estar vacio.");  
  // } 
	//else{
		
		return clientAPI.count('/SkyCM_V2/Services/SkyCM_V2.service', 'CLIENTE_PROS', "$filter=KUNNR eq '{{#Page:CrearClienteProspecto/#Control:FC_NitCP/#Value}}'").then((count) => { //LE ESTOY DICIENDO QUE CUENTE CUANTOS KUNNR SON IGUALES.
        clientAPI.getPageProxy().getClientData().EquipmentTotalCount = count;
        // If “Customers” Entity set is availale, then it return the total customers
        if(count > 0){
            return clientAPI.executeAction('/SkyCM_V2/Actions/Message/Cli_Pros/MsjFailClienteProsExiste.action')
        }else{
            return clientAPI.executeAction('/SkyCM_V2/Actions/Message/Cli_Pros/MsjInformacionCorrecta.action')
            
         
        }
    });
//	}
    
	
//fin del else}
}
