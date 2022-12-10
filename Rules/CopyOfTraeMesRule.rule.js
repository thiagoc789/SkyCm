function hoyFecha(){
    var hoy = new Date();
        var dd = hoy.getDate();
        var mm = hoy.getMonth()+1;
        var yyyy = hoy.getFullYear();
        
       
        return mm;
}
export default function CopyOfTraeMesRule (clientAPI) {
  return hoyFecha;
} 
        
