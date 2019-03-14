//当前页码，默认第一页
var page = 1;
//每页显示的元素数目
var number = 5;
//总页码
var sum;
//计算总页码
window.onload = function getSum(){
	var ps = document.getElementsByClassName('select_option');
	if (ps.length % number == 0) {
		sum = ps.length / number;
	} else {
		sum = parseInt(ps.length / number) + 1;
	}
	console.log("总页码:"+sum);
	showElement(page);
}
//根据页码显示元素
function nextPage() {
	// 显示下一个元素
	if (page < sum) {
		page = page + 1;
	}else if (page == sum) {
		alert("It's the last page");
	}
	showElement(page);
}

function lastPage() {
	// 显示上一个元素
	//console.log(page);
	if (page > 1) {
		page = page - 1;
	}else if (page == 1) {
		alert("It's the firsr page");
	}
	showElement(page);
}

function toFirst(){
	page = 1;
	showElement(page);
}
function toEnd(){
	page = sum;
	showElement(page);
}
function showElement(page){
	var min = (page-1)*number + 1; 
	var max = page*number;
	//console.log(min,max);
	var ps = document.getElementsByClassName('select_option');
	for (var i = ps.length - 1; i >= 0; i--) {
		if (i<(min-1) || i>(max-1)) {
			//console.log(i);
			ps[i].setAttribute("class","select_option hidden");
		}else{
			ps[i].setAttribute('class','select_option');
		}
	}
}