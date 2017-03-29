//	跳转
window.onload = function() {
	var str = location.href;
	var sign = str.split('?')[1];
	var list = document.getElementById('myTab');
	var con = document.getElementById('myTabContent');
	var acon = con.children;
	var aList = list.children;
	for(var i = 0; i < aList.length; i++) {
		acon[i].className = 'tab-pane fade';
		acon[sign].className = 'tab-pane fade in active';
		aList[i].className = '';
		aList[sign].className = 'active'
	}
	var oA = aList[sign].children[0].innerHTML;
	if(sign == 0) {
		sign = aList.length;
		var oB = aList[sign - 1].children[0].innerHTML;
	}
	$(".active-tab span").html(oA);
	$(".previous-tab span").html(oB);
}