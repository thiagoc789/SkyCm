/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function porcentaje_visitas(clientAPI) {

    var hoy = new Date();
    var mes = ("0" + (hoy.getMonth() + 1)).slice(-2);
    var anio = hoy.getFullYear();
    var pernr = clientAPI.evaluateTargetPath("#Application/#ClientData/#Property:UserId");

    return clientAPI.count('/SkyCM_V2/Services/Online_initialize.service', 'CLIENTEINFO', "$filter= PERNR_SCP eq '{{#Application/#ClientData/#Property:UserId}}' ").then((count) => {
		clientAPI.getPageProxy().getClientData().EquipmentTotalCount = count;
		

    return clientAPI.read('/SkyCM_V2/Services/Online_initialize.service', 'HISTV', [], `$filter= PERNR_SCP eq '${pernr}' and MES eq '${mes}' and ANO eq '${anio}'`).then((results) => {

        if (results && results.length > 0) {

            let prod = results;
            //alert("entro al if");
            
            //alert(prod)
            var unicos = [];

            for (var i = 0; i < prod.length; i++) {

                var elemento = prod.getItem(i).KUNNR;
                
                if (!unicos.includes(elemento[i])) {
                    unicos.push(elemento);
                }
            }
            var result = unicos.reduce((acc,item)=>{
                if(!acc.includes(item)){
                    acc.push(item);
                }
                return acc;
            },[])
            //alert(unicos[1])
            var total = Math.round(((result.length / count)* 100)) +' %';
            return (total);
        } else {
            //alert("no sirvio");
        }
    });

}); 


}
