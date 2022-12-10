export default function HoraFinReal_Seg(clientAPI){
	var fc_hora = clientAPI.evaluateTargetPath('#Page:JustiCheckOutJorLabOutTime/#Control:FC_HoraFinal/#Value');
	
	var traer_horas = new Date(fc_hora).getHours(),
		traer_min = new Date(fc_hora).getMinutes();
		
	if (traer_min < '10'){
		
		return (traer_horas + ':0'+ traer_min).toString();
		
	}else{
		return (traer_horas +':'+traer_min).toString();
	}
}