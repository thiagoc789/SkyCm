var clientAPI;
export default function AutoSync(clientAPI) {
	const connectivityModule = clientAPI.nativescript.connectivityModule;
    const type = connectivityModule.getConnectionType();    
    
    connectivityModule.startMonitoring((type) => {
        switch (type) {
            case connectivityModule.connectionType.wifi:
                return clientAPI.executeAction('/SkyCM_V2/Actions/Service/SyncStartedMessage.action');                
                break;
            case connectivityModule.connectionType.mobile:
            	return clientAPI.executeAction('/SkyCM_V2/Actions/Service/SyncStartedMessage.action');                
                break; 
            default:
                break;    
        }
    });
}