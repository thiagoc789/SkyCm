var clientAPI;
export default function CalcularJornadaLaboralDos(clientAPI) {
	let dialogs = clientAPI.nativescript.uiDialogsModule;
   var HoraInicio = clientAPI.evaluateTargetPath('#Page:DetalleJornadaLaboralActiva/#Control:Hora_Inicio/#Value');
	var HoraFin = clientAPI.evaluateTargetPath('#Page:JornadaLabConfirmar/#Control:FC_IDJornadaLaboral/#Value');
    
    
   var	hora1 = HoraFin.toString().split(":"),   // campo hora_fin
    	hora2 = HoraInicio.toString().split(":"),   // campo hora_inicio
    	t1 = new Date(),
    	t2 = new Date();

   t1.setHours(hora1[0], hora1[1], hora1[2]);
   t2.setHours(hora2[0], hora2[1], hora2[2]);

    //Aquí hago la resta
   t1.setHours(t1.getHours() - t2.getHours(), t1.getMinutes() - t2.getMinutes(), t1.getSeconds() - t2.getSeconds());

    //Imprimo el resultado
   var result = (t1.getHours() < 10 ? "0"+t1.getHours() : ""+t1.getHours()) +":"+(t1.getMinutes() < 10 ? "0"+t1.getMinutes():""+t1.getMinutes())+":"+(t1.getSeconds()<10?"0"+t1.getSeconds():""+t1.getSeconds());
   
    return result;  //retorna la diferencia en formato hh:mm:ss
    /*return dialogs.confirm(result).then(function(){
        console.log("Tiempo de visita: " + result);
    });*/
}
