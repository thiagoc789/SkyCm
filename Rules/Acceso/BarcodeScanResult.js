/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function BarcodeScanResult(context) {

    function ejecutar(){
        context.executeAction('/SkyCM_V2/Actions/Checks/V2-Consulta/CheckValidaInventario.action');
    }

    var actionResult = context.getActionResult('OpenBarcodeScanner');
    var scannedResult = actionResult.data;
    let containerProxy = context.getPageProxy().getControl('SectionedTable0');
    var selection = containerProxy.getSection('SectionFormCell0').getControl('FC_List_Referencia');
    selection.setValue(scannedResult);
    setTimeout(ejecutar, 1501);

}


