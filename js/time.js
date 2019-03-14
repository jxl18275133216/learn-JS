function addZero(e){
	if(e<10){
		e = '0'+e
	}
	return e;
}
function getDay(){
	var date = new Date();
	var text = "";
	var year = date.getFullYear();
	var month = date.getMonth();
	var day = date.getDate();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var second = date.getSeconds();
    month = addZero(month);
    day = addZero(day);
    hour = addZero(hour);
    minutes = addZero(minutes);
    second = addZero(second);
    text = year+"-"+month+"-"+day;
	return text;
}
function getTime(){
	var date = new Date();
	var text = "";
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var second = date.getSeconds();
    hour = addZero(hour);
    minutes = addZero(minutes);
    second = addZero(second);
    text = hour+":"+minutes+":"+second;
	return text;
}
//showTime();
window.setInterval(function() {
	// body...
    var div = document.getElementById("time");
    div.innerHTML = getDay()+getTime();
},1000);