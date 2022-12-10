/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function TraerMes(clientAPI) {
	var today = new Date();
    var month = ("0" + (today.getMonth() + 1)).slice(-2);
    var concatenar = ("0" + month).slice(-2);
    
    return concatenar
	
}
