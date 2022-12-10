export default function SwitchCampana(clientAPI) {
  var SwitchCam = clientAPI.evaluateTargetPath('#Page:VisitaConfirmar/#Control:FC_SwitchCampana/#Value');
  var campana = clientAPI.evaluateTargetPath('#Page:VisitaConfirmar/#Control:FC_Campana');
  if (SwitchCam == true) {
    campana.setEditable(true);
    campana.setVisible(true);
  }
  else if (SwitchCam == false)
  {
  	campana.setEditable(false);
  	campana.setVisible(false);
  }
}