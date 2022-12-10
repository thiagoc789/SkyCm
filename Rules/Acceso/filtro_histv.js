/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function filtro_histv(clientAPI) {
    var dialog = clientAPI.nativescript.uiDialogsModule;

    var today = new Date();
    var year = today.getFullYear();
    var month = ("0" + (today.getMonth() + 1)).slice(-2);
    //dialog.alert(year)
    //dialog.alert(month)
    var output = "HISTV?$filter=PERNR_SCP eq '{{#Application/#AppData/UserId}}' and ANO eq '" + year + "' and MES eq '0"+ month+"'";
    //dialog.alert(output)

    return output;
}
