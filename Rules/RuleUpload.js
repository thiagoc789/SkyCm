/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function RuleUpload(clientAPI) {
	clientAPI.executeAction('/SkyCM_V2/Rules/Mexico/RuleMainMexico.js'); 
	return clientAPI.executeAction('/SkyCM_V2/Actions/Service/UploadOnly.action'); 
}
