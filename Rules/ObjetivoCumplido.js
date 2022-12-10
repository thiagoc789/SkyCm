export default function SwitchCampana(clientAPI) {
  var SwitchObjCum = clientAPI.evaluateTargetPath('#Page:DetalleVisitaActiva/#Control:FC_ObjCump/#Value');
  var ans = ""
  if (SwitchObjCum == true) {
  	ans = "SI";
	return  ans;
  }
  else if (SwitchObjCum == false)
  {
  	ans = "NO";
	return  ans;
  }
}