	//加载事件
	window.onload = function(){
		var l = document.getElementsByTagName("li")
		console.log(l)
		for(var i = 0;i<l.length;i++){
			//左键事件
			l[i].onclick = function(event){
				//阻止冒泡
				event.stopPropagation()
				//展开或隐藏li
				var c = this.children[1]
				console.log(c)
				if(c.style == null||c.style.display == 'none'){
					c.style.display = "block"
				}else{
					c.style.display = "none"
				}
			}
			//右键事件
			l[i].oncontextmenu = function(){
				event.stopPropagation()
				//取消默认的右键事件
				event.preventDefault()
				//获取自建菜单
				var menu = document.getElementById('menu_1')
				console.log(menu)
				//获取坐标
				menu.style.left = event.clientX+'px'
				menu.style.top = event.clientY+'px'
				//打开菜单
				menu.style.display = "block"
			}
		}
	
	}
	//点击左键隐藏菜单
	//document.onclick = function(){
	//	document.getElementById('menu_1').style.display = 'none'
	//}
	//修改事件
	function theAlter(){
		var a = document.getElementById('aaa')
		console.log(a)
		alert(1)
	}
	//删除事件
	function theDel(e){
		e.parentNode.removeChild(e)
	}
	//添加事件
	function theAdd(){
		var a = document.getElementById('ccc')
		console.log(a)
	}
	
	 
	