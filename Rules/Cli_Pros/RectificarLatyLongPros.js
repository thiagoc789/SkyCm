/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
var clientAPI;
//var geolocation = require('@nativescript/geolocation');
//var Accuracy = require('@nativescript/core/ui/enums').Accuracy;
import * as geolocation from "@nativescript/geolocation";
import {
	CoreTypes
} from "@nativescript/core";
export default function Geo(clientAPI) {
	var noteFormCell = clientAPI.evaluateTargetPath("#Page:VisitaConfirmarProspecto/#Control:FC_Latitud_Vendor_Pro");
	var valorlat = clientAPI.evaluateTargetPath("#Page:VisitaConfirmarProspecto/#Control:FC_Latitud_Vendor_Pro/#Value");
	var valorlong = clientAPI.evaluateTargetPath("#Page:VisitaConfirmarProspecto/#Control:FC_Longitud_Vendor_Pro/#Value");
	var noteFormCell2 = clientAPI.evaluateTargetPath("#Page:VisitaConfirmarProspecto/#Control:FC_Longitud_Vendor_Pro");
	if (valorlat == "" || valorlong == "" || valorlat === null || valorlong === null) {
		var logger = clientAPI.getLogger();

		console.log("Current Log Level: " + logger.getLevel());
		var locationIsEnabled = geolocation.isEnabled();

		if (!locationIsEnabled) {
			geolocation.enableLocationRequest();
		}
		return geolocation.getCurrentLocation({
			//desiredAccuracy: Accuracy.high,
			desiredAccuracy: CoreTypes.Accuracy.high,
			updateDistance: 5,
			timeout: 11000
		}).then(function (loc) {

			if (loc) {
				console.log(loc);
				console.log('\nCurrent Location: (' + loc.latitude + ',' + loc.longitude + ')');
				logger.log(loc.toString());

				var locMessage = loc.latitude;
				logger.log('Current Location: ' + locMessage, 'INFO');
				var result = loc.latitude.toString();
				noteFormCell.setValue(result);
				var result2 = loc.longitude.toString();
				noteFormCell2.setValue(result2);
				// alert("se lleno lat y long")
				return clientAPI.executeAction('/SkyCM_V2/Actions/Message/Cli_Pros/ProgressCalculandoDistanciaProspecto.action');

			}

		}, function (e) {
			logger.log(e.message, 'ERROR');
		});

	} else {
		return clientAPI.executeAction('/SkyCM_V2/Actions/Message/Cli_Pros/ProgressCalculandoDistanciaProspecto.action');
	}
}