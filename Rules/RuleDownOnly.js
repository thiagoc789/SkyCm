/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function RuleDownOnly(context) {
context.executeAction('/SkyCM_V2/Actions/Service/DownloadOfflineOnly.action')
}
