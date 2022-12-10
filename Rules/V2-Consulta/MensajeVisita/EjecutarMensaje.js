/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function EjecutarMensaje(clientAPI) {
	var campo = clientAPI.evaluateTargetPath('#Page:Main/#Control:fc_idtiempo/#Value')
	var pernr = clientAPI.evaluateTargetPath("#Application/#ClientData/#Property:UserId");
	var campo1 = clientAPI.evaluateTargetPath('#Page:Main/#Control:fc_idtiempo')
	var hoy = new Date();
	var horaactual = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();

	if (campo) {
		//alert("evaluo con lleno")
		var hora1 = horaactual.toString().split(":"), // campo hora_fin
			hora2 = campo.toString().split(":"), // campo hora_inicio
			t1 = new Date(),
			t2 = new Date();

		t1.setHours(hora1[0], hora1[1], hora1[2]);
		t2.setHours(hora2[0], hora2[1], hora2[2]);

		//Aquí hago la resta
		t1.setHours(t1.getHours() - t2.getHours(), t1.getMinutes() - t2.getMinutes(), t1.getSeconds() - t2.getSeconds());

		//Imprimo el resultado
		var resultado = (t1.getHours() < 10 ? "0" + t1.getHours() : "" + t1.getHours()) + ":" + (t1.getMinutes() < 10 ? "0" + t1.getMinutes() :
			"" + t1.getMinutes()) + ":" + (t1.getSeconds() < 10 ? "0" + t1.getSeconds() : "" + t1.getSeconds());

		//alert(resultado)
		var Horas = parseInt(resultado.slice(0, 2))

		if (Horas > 0) {
			
			return clientAPI.executeAction('/SkyCM_V2/Actions/Message/V2-Consulta/MsjSeguirVisita.action');
	
	
		/*	return clientAPI.executeAction({
				"Name": "/SkyCM_V2/Actions/Message/V2-Consulta/MsjSeguirVisita.action",
				"Properties": {
					"Message": "tienes una visita activa hace una hora, ¿Deseas seguir en la misma visita?",
					"Title": "ATENCION",
					"OKCaption": "SI",
					"OnOK": "/SkyCM_V2/Rules/V2-Consulta/MensajeVisita/SeguirVisita.js",
					"CancelCaption": "NO",
					"OnCancel": "/SkyCM_V2/Actions/Navigation/Cli_Pros/NavToVisitaClienteProspecto.action"
				}
			});*/

		}

	} else {
		return clientAPI.read('/SkyCM_V2/Services/SkyCM_V2.service', 'HISTV', [], `$filter=ESTADO eq 'ACTIVO' and PERNR_SCP eq '${pernr}'`).then(
			(result) => {

				if (result && result.length > 0) {

					let datos = result.getItem(0);

					let hora = datos.HORA;

					var hora1 = horaactual.toString().split(":"), // campo hora_fin
						hora2 = hora.toString().split(":"), // campo hora_inicio
						t1 = new Date(),
						t2 = new Date();

					t1.setHours(hora1[0], hora1[1], hora1[2]);
					t2.setHours(hora2[0], hora2[1], hora2[2]);

					//Aquí hago la resta
					t1.setHours(t1.getHours() - t2.getHours(), t1.getMinutes() - t2.getMinutes(), t1.getSeconds() - t2.getSeconds());

					//Imprimo el resultado
					var resultado = (t1.getHours() < 10 ? "0" + t1.getHours() : "" + t1.getHours()) + ":" + (t1.getMinutes() < 10 ? "0" + t1.getMinutes() :
						"" + t1.getMinutes()) + ":" + (t1.getSeconds() < 10 ? "0" + t1.getSeconds() : "" + t1.getSeconds());

					var Horas = parseInt(resultado.slice(0, 2))

					if (Horas > 0) {
						return clientAPI.executeAction('/SkyCM_V2/Actions/Message/V2-Consulta/MsjSeguirVisita.action');
				
					/*	return clientAPI.executeAction({
							"Name": "/SkyCM_V2/Actions/Message/V2-Consulta/MsjSeguirVisita.action",
							"Properties": {
								"Message": "tienes una visita activa hace una hora, ¿Deseas seguir en la misma visita?",
								"Title": "ATENCION",
								"OKCaption": "SI",
								"OnOK": "/SkyCM_V2/Rules/V2-Consulta/MensajeVisita/SeguirVisita.js",
								"CancelCaption": "NO",
								"OnCancel": "/SkyCM_V2/Actions/Navigation/Cli_Pros/NavToVisitaClienteProspecto.action"
							}
						});*/

					}

				} else {
					return true;
				}

			})
	}
}

/* return clientAPI.count('/SkyCM_V2/Services/SkyCM_V2.service', 'HISTV', "$filter=ESTADO eq 'ACTIVO' and PERNR_SCP eq '{{#Application/#ClientData/#Property:UserId}}'").then((count) => {
		clientAPI.getPageProxy().getClientData().EquipmentTotalCount = count;	
		var clientData = clientAPI.evaluateTargetPathForAPI('#Page:Main').getClientData();

        //alert(clientData.id);
        clientData.id=null;
        if(count > 0){
         //  var idTiempo =tiempo();
          var idTiempo =setTimeout(function () {clientAPI.executeAction('/SkyCM_V2/Actions/Message/V2-Consulta/MsjSeguirVisita.action');},2000000);
           //alert("entro al if " + idTiempo);
           clientData.id = idTiempo;
           //alert("global  " + clientData.id);
           clientAPI.executeAction('/SkyCM_V2/Rules/Mexico/RuleMainMexico.js')
           clientAPI.executeAction('/SkyCM_V2/Actions/Message/Cli_Pros/BannerVisitaCreada.action')
		}    
        else if (count<=0) {
           return true;
		}
	}); 
	
//	let control= clientAPI.evaluateTargetPath('#Page:Main/#Control:fc_idtiempo');
   // var idTiempo =setTimeout(function () {clientAPI.executeAction('/SkyCM_V2/Actions/Message/V2-Consulta/MsjSeguirVisita.action');},3600000);
  //  alert("idtiempo +"+ idTiempo);
   // control.setValue(idTiempo);
  //  return idTiempo;
    
}*/