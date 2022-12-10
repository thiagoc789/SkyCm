export default function OnWillUpdate(clientAPI) {
	
			return clientAPI.executeAction('/SkyCM_V2/Actions/Service/CloseOffline.action').then(
				(success) => Promise.resolve(success),
				(failure) => Promise.reject('Offline Odata Close Failed ' + failure));
		
}