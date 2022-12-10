var clientAPI;

//var geolocation = require('@nativescript/geolocation');
//var Accuracy = require('@nativescript/core/ui/enums').Accuracy;
import * as geolocation from "@nativescript/geolocation";
import { CoreTypes } from "@nativescript/core";

export default function validardistancia(clientAPI) {
	
	var lati,longi;
	
	let dialogs = clientAPI.nativescript.uiDialogsModule;
	var logger = clientAPI.getLogger();
	var distancia = '';

	console.log("Current Log Level: " + logger.getLevel());

	lati = clientAPI.evaluateTargetPath('#Page:VisitaConfirmar/#Control:FC_Latitud/#Value');
	longi = clientAPI.evaluateTargetPath('#Page:VisitaConfirmar/#Control:FC_Longitud/#Value');
	
	if(!geolocation.isEnabled()){
		geolocation.enableLocationRequest();
	}
	return geolocation.getCurrentLocation(
		{
			desiredAccuracy: CoreTypes.Accuracy.high,
			updateDistance: 1, 
			timeout: 11000
		}
		).then(function(loc){
			if(loc){
				
				function calculaDistancia(){
					// transforma grados en radianes
					var lat1 = graRad(loc.latitude);
					var long1 = graRad(loc.longitude);
					
					var lat2 = graRad(lati);
					var long2 = graRad(longi);
					// calcula la distancia
					var d = Math.acos( Math.sin(lat1)*Math.sin(lat2) +
										Math.cos(lat1)*Math.cos(lat2) * 
										Math.cos(long2-long1) ) * 6378.137;
					 //dialogs.alert(d.toFixed(0)*100)
					 //dialogs.alert(d.toFixed(0)*1000)
					 distancia = d.toFixed(2)*100;
					return distancia;
				
				}
					
					function graRad(grados){
						var radianes = (grados * Math.PI)/180;
						return radianes;
					}
					//dialogs.confirm('latitud: '+ loc.latitude+', longitud: '+loc.longitude+', Distancia:'+ calculaDistancia()).then(function(){});
				if(calculaDistancia() <= 800){  // si la distancia esta en el rango permitido, devuelve un valor true a la accion odata
					//permitir realizar checkin
				return clientAPI.executeAction('/SkyCM_V2/Actions/Message/Progress/ProgressCrearVisita.action');
					
				}else{
					//imperdir realizar checkin
					
					dialogs.confirm({title: "¡Ubicacion Fuera de Rango!",
									message: `Indique el motivo, distancia del cliente:(${distancia}m)`,
									okButtonText: "Motivos ->"}).then((respuesta)=>{
						if(respuesta === true){
							return clientAPI.executeAction('/SkyCM_V2/Actions/Navigation/NavToJustificacionPage.action').then();
						}
					});
				}
			}
		}, function(e){
			console.log(e.message,'ERROR');
			logger.log(e.message,'ERROR');
		});
}