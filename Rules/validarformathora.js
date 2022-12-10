export default function ValidarFormatoHora(clientAPI){
	let dialogs = clientAPI.nativescript.uiDialogsModule;
	var valor_hora = clientAPI.evaluateTargetPath('/#Page:CrearSolicitudPage/#Control:FC_hora/#Value'); // control que captura la hora
	var a,b,c,d,e,f;
	if(valor_hora.length ==""){
		return '';
	}
	if(valor_hora.length != 8){
		return dialogs.alert("Formato de hora incorrecto: use horas en HH:mm:ss").then(function(){});
	}
	a=valor_hora.charAt(0); //<=2
	b=valor_hora.charAt(1); //<4
	c=valor_hora.charAt(2); //:
	d=valor_hora.charAt(3); //<=5
	e=valor_hora.charAt(5); //:
	f=valor_hora.charAt(6); //<=5
	if ((a==2 && b>3) || (a>2)) { //formato de hora
		return dialogs.alert("Formato de hora incorrecto: use horas en HH:mm:ss").then(function(){});
	}
	if (d>5) { // formato de minutos
		return dialogs.alert("Formato de hora incorrecto: use horas en HH:mm:ss").then(function(){});
	}
	if (f>5) { // formato de segundos
		return dialogs.alert("Formato de hora incorrecto: use horas en HH:mm:ss").then(function(){});
	}
	if (c!=':' || e!=':') {
		return dialogs.alert("Formato de hora incorrecto: use horas en HH:mm:ss").then(function(){});
	}
	return;
}