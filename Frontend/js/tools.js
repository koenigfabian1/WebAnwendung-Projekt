// url parameter by name
$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || 0;
    }
}

function getTimestamp(){
  var today = new Date();
  var date = ("0" + today.getDate()).slice(-2)+'.'+"0"+(today.getMonth()+1)+'.'+today.getFullYear();
  var time = ("0" + today.getHours()).slice(-2) + ":" + ("0" + today.getMinutes()).slice(-2) + ":" + ("0" + today.getSeconds()).slice(-2);
  var dateTime = date+' '+time;

  return dateTime.toString();
}
