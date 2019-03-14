window.alert = function(text){
	//遮罩
	var mask = document.createElement("div");
	mask.id = "mask";
	mask.style.position = "fixed";
	mask.style.top = "0";
	mask.style.bottom = "0";
	mask.style.left = "0";
	mask.style.right = "0";
	mask.style.zIndex = "98";
	//设置div
	var div = document.createElement('div');
	div.setAttribute('class','message');
	div.id = "alert";
	div.style.width = "285px";
	div.style.height = "100px";
	div.style.backgroundColor = "gray";
	div.style.position = "fixed";
	div.style.top = "200px";
	div.style.left = "0";
	div.style.right = "0";
	div.style.padding = "0";
	div.style.border = "solid 1px black";
	div.style.zIndex = "99";
	div.style.lineHeight = "60px"
	//取消X
	var a =document.createElement('a');
	a.href = "javascript:void()";
	a.style.zIndex = "100";	
	a.innerHTML = "X";
	a.style.margin = "0";
	a.style.float = "right";
	a.setAttribute('onclick','closeDiv()');
	//内容
	var p = document.createElement('p');
	p.style.fontSize = "12px";
	p.innerHTML = text;

	//动态调整位置
	
	var body = document.getElementsByTagName('body');
	div.appendChild(a);
	div.appendChild(p);
	body[0].appendChild(div);
	body[0].appendChild(mask);
}
function closeDiv(){
	var mask = document.getElementById('mask');
	var alert = document.getElementById('alert');
	var body = document.getElementsByTagName('body');
	body[0].removeChild(alert);
	body[0].removeChild(mask);
}